
import React from 'react';

export const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19Z" fill="white"/>
    <path d="M25.2353 23.3951C25.2353 23.6332 25.138 23.8617 24.9667 24.033C24.7954 24.2043 24.5669 24.3016 24.3288 24.3016H18.8291L18.4116 23.1367H17.5054C16.8916 23.1367 16.3379 22.8687 15.9393 22.4221L12.501 18.2832C12.3012 18.0451 12.1855 17.747 12.1855 17.4392C12.1855 16.8423 12.6739 16.3539 13.2708 16.3539C13.5186 16.3539 13.7567 16.4416 13.9375 16.6033L16.5059 18.7305C16.8286 18.9985 17.2656 19.1223 17.6931 19.0491L19.4629 18.7305L18.0195 14.5312C17.7815 13.8042 18.27 13.125 19.0181 13.125H21.0161C21.4621 13.125 21.8607 13.3834 22.0415 13.792L24.3288 18.4287C24.4905 18.7656 24.8133 19.0146 25.1961 19.0491L25.9231 19.1223L25.4346 17.7371C25.2353 17.1497 25.6814 16.5435 26.2976 16.5435H27.2039C27.952 16.5435 28.4594 17.2227 28.2117 17.9209L26.3386 23.0129C26.2413 23.2713 25.9924 23.4688 25.7062 23.5168L25.2353 23.5899V23.3951Z" fill="#000000"/>
    <path d="M12.9858 24.7778C12.4492 24.7778 12.0122 24.3408 12.0122 23.7946C12.0122 23.5661 12.1095 23.3376 12.2808 23.1663C12.4521 22.995 12.6806 22.8977 12.9187 22.8977H15.427L14.7381 20.8379C14.5866 20.3818 14.8052 19.8877 15.2612 19.7362L16.2935 19.3906C16.5796 19.2886 16.8953 19.3444 17.1429 19.5313L20.4468 22.1934C20.6465 22.3551 20.7623 22.5932 20.7623 22.8422C20.7623 23.4391 20.2738 23.9275 19.677 23.9275C19.4292 23.9275 19.1911 23.8398 19.0103 23.6781L16.9038 21.9083L16.2935 23.6332C16.142 24.0893 15.686 24.3872 15.1975 24.3872H12.9858V24.7778Z" fill="#000000"/>
  </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const MenuIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

export const ArrowRightIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const StoryIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg width="64" height="64" viewBox="0 0 82 50" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M40.9999 50C40.9999 46.6667 39.4999 41.5 35.4999 38C31.4999 34.5 25.6666 32.6667 21.4999 31.5C17.3332 30.3333 11.8332 29.5 7.99988 29C4.16654 28.5 0.499878 27.8333 0.499878 25C0.499878 22.1667 4.16654 21.5 7.99988 21C11.8332 20.5 17.3332 19.6667 21.4999 18.5C25.6666 17.3333 31.4999 15.5 35.4999 12C39.4999 8.5 40.9999 3.33333 40.9999 0" stroke="white" strokeWidth="2"></path>
        <path d="M41 50C41 46.6667 42.5 41.5 46.5 38C50.5 34.5 56.3333 32.6667 60.5 31.5C64.6667 30.3333 70.1667 29.5 74 29C77.8333 28.5 81.5 27.8333 81.5 25C81.5 22.1667 77.8333 21.5 74 21C70.1667 20.5 64.6667 19.6667 60.5 18.5C56.3333 17.3333 50.5 15.5 46.5 12C42.5 8.5 41 3.33333 41 0" stroke="white" strokeWidth="2"></path>
    </svg>
);


export const ModernaLogo: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`flex flex-col items-center justify-center text-white ${className}`}>
        <span className="text-4xl font-light tracking-[0.2em]">moderna</span>
        <span className="text-xl font-light tracking-[0.6em]">---------</span>
    </div>
);

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
    {children}
  </a>
);

export const SocialIcons: React.FC = () => (
  <div className="flex items-center space-x-6">
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
    </SocialIcon>
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H9a7 7 0 0 0-7 7v6a7 7 0 0 0 7 7h6a7 7 0 0 0 7-7V9a7 7 0 0 0-7-7Z"/><path d="M9 12a3 3 0 1 0 6 0 3 3 0 1 0-6 0Z"/><path d="M17.5 6.5a.5.5 0 1 0 0-1 .5.5 0 1 0 0 1Z"/></svg>
    </SocialIcon>
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
    </SocialIcon>
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
    </SocialIcon>
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a2.4 2.4 0 0 1 3 0L8 20a2.4 2.4 0 0 0 3 0l2.5-2.5a2.4 2.4 0 0 1 3 0L20 20a2.4 2.4 0 0 0 3 0l1.5-1.5a2.4 2.4 0 0 1 0-3L21.5 12a2.4 2.4 0 0 0 0-3l1.5-1.5a2.4 2.4 0 0 1 0-3L21.5 3a2.4 2.4 0 0 0-3 0L16 5.5a2.4 2.4 0 0 1-3 0L10.5 3a2.4 2.4 0 0 0-3 0L4.5 5.5a2.4 2.4 0 0 1-3 0L0 7a2.4 2.4 0 0 0 0 3l1.5 1.5a2.4 2.4 0 0 1 0 3Z"/><path d="M8 12h8"/></svg>
    </SocialIcon>
     <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
    </SocialIcon>
    <SocialIcon href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M15.5 9.5 14 15.5l-4-3-3.5 2 1-4.5-4.5-1 5-1.5L9 3l2.5 4.5L15.5 9.5z"/></svg>
    </SocialIcon>
  </div>
);
