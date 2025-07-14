import React, { useEffect, useRef, useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { CloseIcon, SearchIcon, ArrowRightIcon } from './icons';
import { SearchResult } from '../types';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

const suggestedSearches = ["GPT-4o", "Sora", "API pricing", "Spring Update"];

const LoadingSpinner: React.FC = () => (
  <div className="flex justify-center items-center py-8">
    <div className="w-10 h-10 border-4 border-t-transparent border-gray-600 rounded-full animate-spin"></div>
  </div>
);

export const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<SearchResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleClose = () => {
    // Reset state on close for a fresh start next time
    setTimeout(() => {
        setQuery('');
        setResults(null);
        setError(null);
        setIsLoading(false);
    }, 300); // Wait for closing animation
    onClose();
  };
  
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      setTimeout(() => inputRef.current?.focus(), 300);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleSearch = async (searchTerm: string) => {
    if (!searchTerm.trim() || isLoading) return;

    setQuery(searchTerm);
    setIsLoading(true);
    setResults(null);
    setError(null);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: searchTerm,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      const groundingChunks = response.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
      const sources = groundingChunks
        .map((chunk: any) => chunk.web)
        .filter((source: any) => source && source.uri)
        .reduce((acc: any[], current: any) => { // Remove duplicates
            if (!acc.find(item => item.uri === current.uri)) {
                acc.push(current);
            }
            return acc;
        }, []);


      setResults({
        text: response.text,
        sources: sources.map((s: any) => ({ uri: s.uri, title: s.title || s.uri })),
      });
    } catch (e) {
      console.error(e);
      setError('Sorry, an error occurred while searching. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSearch(query);
    }
  };

  const clearSearch = () => {
    setQuery('');
    setResults(null);
    setError(null);
    inputRef.current?.focus();
  };

  return (
    <div
      id="search-overlay"
      className={`fixed inset-0 z-50 bg-black/80 backdrop-blur-lg transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-modal="true"
      role="dialog"
    >
      <button
        onClick={handleClose}
        className="absolute top-6 right-6 text-white hover:text-gray-300 z-50"
        aria-label="Close search"
      >
        <CloseIcon className="w-8 h-8" />
      </button>

      <div className="flex flex-col items-center justify-center h-full w-full text-white p-4 pt-20">
        <div className="w-full max-w-3xl h-full flex flex-col">
          <div className="relative w-full">
            <span className="absolute left-0 top-1/2 -translate-y-1/2">
              <SearchIcon className="w-8 h-8 text-gray-500" />
            </span>
            <input
              ref={inputRef}
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleInputKeyDown}
              className="w-full bg-transparent border-0 border-b-2 border-gray-600 focus:border-white text-4xl md:text-6xl font-light pl-12 pr-12 py-4 outline-none transition-colors"
            />
            {(query || results) && (
              <button
                onClick={clearSearch}
                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white"
                aria-label="Clear search"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            )}
          </div>
          
          <div className="mt-8 flex-grow overflow-y-auto pr-2">
            {isLoading && <LoadingSpinner />}
            {error && <p className="text-red-400 text-center">{error}</p>}
            
            {results && !isLoading && (
              <div>
                <p className="text-gray-200 whitespace-pre-wrap leading-relaxed">{results.text}</p>
                {results.sources.length > 0 && (
                  <div className="mt-8 pt-6 border-t border-gray-800">
                    <h4 className="text-sm font-semibold text-gray-400 mb-4">Sources</h4>
                    <ul className="space-y-3">
                      {results.sources.map((source, index) => (
                        <li key={index}>
                          <a href={source.uri} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:text-sky-300 transition-colors group flex items-start gap-2 text-sm">
                            <ArrowRightIcon className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100"/>
                            <span className="truncate">{source.title || source.uri}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {!isLoading && !results && !error && (
              <div>
                <h3 className="text-gray-400 mb-4 text-center">Suggested searches</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {suggestedSearches.map((term) => (
                    <button 
                      key={term} 
                      onClick={() => handleSearch(term)}
                      className="px-4 py-2 border border-gray-600 rounded-full hover:border-white hover:bg-white/10 transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};