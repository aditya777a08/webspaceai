
import React, { useState, useEffect } from 'react';
import { LogoIcon, SearchIcon, MenuIcon } from './icons';
import { Search } from './Search';
import { Menu } from './Menu';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const isOverlayOpen = isMenuOpen || isSearchOpen;
    if (isOverlayOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    // Cleanup function to reset overflow property when component unmounts
    return () => {
        document.body.style.overflow = '';
    };
  }, [isMenuOpen, isSearchOpen]);

  const handleOpenSearch = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(true);
  };
  
  const handleOpenMenu = () => {
    setIsSearchOpen(false);
    setIsMenuOpen(true);
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#111]/80 backdrop-blur-lg">
        <div className="flex items-center justify-between p-4 md:px-8 lg:px-12 xl:px-24">
          <div className="flex items-center space-x-4">
            <a href="/" aria-label="Homepage">
              <LogoIcon className="w-8 h-8" />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={handleOpenSearch}
              className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Open search"
              aria-controls="search-overlay"
              aria-expanded={isSearchOpen}
            >
              <SearchIcon className="w-6 h-6" />
            </button>
            <button
              onClick={handleOpenMenu}
              className="text-white hover:text-gray-300 p-2 rounded-full hover:bg-white/10 transition-colors"
              aria-label="Open menu"
              aria-controls="menu-overlay"
              aria-expanded={isMenuOpen}
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>
      <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};