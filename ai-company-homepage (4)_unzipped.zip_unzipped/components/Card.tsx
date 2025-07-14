
import React from 'react';
import { CardData } from '../types';
import { ArrowRightIcon } from './icons';

const CodeLine: React.FC<{ line: string }> = ({ line }) => {
    const numberMatch = line.match(/^(\d+)\s/);
    const lineNumber = numberMatch ? numberMatch[1] : '';
    const code = numberMatch ? line.substring(lineNumber.length).trim() : line;

    const renderCode = () => {
        let coloredCode = code;
        const keywords = ['from', 'import', 'client', 'model', 'messages', 'role', 'content'];
        const strings = code.match(/"(.*?)"/g) || [];
        
        keywords.forEach(keyword => {
            const regex = new RegExp(`\\b${keyword}\\b`, 'g');
            coloredCode = coloredCode.replace(regex, `<span class="text-cyan-400">${keyword}</span>`);
        });

        strings.forEach(str => {
             coloredCode = coloredCode.replace(str, `<span class="text-green-400">${str}</span>`);
        });

        return <span dangerouslySetInnerHTML={{ __html: coloredCode }} />;
    };

    return (
        <div className="flex text-sm">
            <span className="w-8 text-gray-500 text-right pr-4 select-none">{lineNumber}</span>
            <span className="flex-1 text-gray-300">{renderCode()}</span>
        </div>
    );
};


export const Card: React.FC<CardData & { layout?: 'default' | 'horizontal' }> = ({
  category,
  date,
  title,
  imageUrl,
  bgColor = 'bg-gray-900',
  textColor = 'text-white',
  logo,
  codeSnippet,
  linkText,
  layout = 'default',
}) => {
  if (layout === 'horizontal') {
    return (
      <div className={`flex-shrink-0 w-[320px] md:w-[400px] aspect-[4/3] rounded-2xl overflow-hidden group relative transition-all duration-300 ease-in-out hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(255,255,255,0.07)] hover:z-10 ${textColor} ${!imageUrl ? `${bgColor} bg-gradient-to-br from-gray-800/80 to-gray-900/90` : ''}`}>
        {imageUrl && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          </>
        )}
        <div className="relative z-10 flex flex-col h-full p-6">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            <div className="text-sm">
              <p className="font-semibold">{category}</p>
              {date && <p className="opacity-80">{date}</p>}
            </div>
            {linkText !== "" && (
               <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center -mr-2 -mt-2 group-hover:bg-white transition-colors">
                   <ArrowRightIcon className="text-white w-4 h-4 group-hover:text-black"/>
              </div>
            )}
          </div>

          {/* Middle/Logo Section */}
          {logo && <div className="flex-grow flex items-center justify-center">{logo}</div>}

          {/* Code Snippet Section */}
          {codeSnippet && (
              <div className="flex-grow flex items-center justify-center font-mono text-left text-xs bg-black/60 backdrop-blur-sm rounded-lg p-4 my-4 -mx-2 border border-white/10">
                  <pre className="max-h-full overflow-y-auto"><code>{codeSnippet.code.split('\n').map((line, i) => <CodeLine key={i} line={line} />)}</code></pre>
              </div>
          )}
          
          {/* Bottom Section */}
          <div className={`mt-auto ${logo ? 'text-center' : ''}`}>
            <h3 className="text-xl font-semibold leading-tight">{title}</h3>
            {linkText && <span className="text-sm font-semibold">{linkText}</span>}
          </div>
        </div>
      </div>
    );
  }
  
  const CardContent = () => (
    <div
      className={`relative h-full w-full rounded-2xl overflow-hidden p-6 flex flex-col justify-between group transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(255,255,255,0.07)] ${textColor} ${!imageUrl ? `${bgColor} bg-gradient-to-br from-gray-800 to-gray-900` : ''}`}
    >
      {imageUrl && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </>
      )}

      <div className="relative z-10 flex flex-col h-full">
        {/* Top Section */}
        <div className="flex justify-between items-start">
          <div className="text-sm">
            <p className="font-semibold">{category}</p>
            {date && <p className="opacity-80">{date}</p>}
          </div>
          {linkText !== "" && (
             <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center -mr-2 -mt-2 group-hover:bg-white transition-colors">
                 <ArrowRightIcon className="text-white w-4 h-4 group-hover:text-black"/>
            </div>
          )}
        </div>

        {/* Middle/Logo Section */}
        {logo && <div className="flex-grow flex items-center justify-center">{logo}</div>}
        
        {/* Bottom Section */}
        <div className={`mt-auto ${logo ? 'text-center' : ''}`}>
          <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
           {linkText && <span className="text-sm font-semibold">{linkText}</span>}
        </div>
      </div>
    </div>
  );

  return (
    <div className="aspect-[4/5] md:aspect-[3/4]">
      <CardContent />
    </div>
  );
};