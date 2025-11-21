import React from 'react';
import { Menu, X, Search, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentPage, setPage }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinks = [
    { name: 'HOME', page: 'HOME' as Page },
    { name: 'ABOUT US', page: null }
    { name: 'AI TRAINER', page: 'AI_TRAINER' as Page },
    { name: 'CONTACT', page: null },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-sm border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo - Custom SVG to match Neon Sign Image */}
          <div 
            className="flex-shrink-0 cursor-pointer mr-8 group relative z-10" 
            onClick={() => setPage('HOME')}
          >
             <svg width="90" height="90" viewBox="0 0 400 400" className="overflow-visible transition-transform duration-300 group-hover:scale-105">
                 <defs>
                   <filter id="neon-glow-blue" x="-50%" y="-50%" width="200%" height="200%">
                     <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                     <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                   </filter>
                   <filter id="neon-glow-pink" x="-50%" y="-50%" width="200%" height="200%">
                     <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                     <feMerge>
                       <feMergeNode in="coloredBlur"/>
                       <feMergeNode in="SourceGraphic"/>
                     </feMerge>
                   </filter>
                   {/* Adjusted paths for text to fit perfectly inside the ring */}
                   <path id="text-curve-top" d="M 50,200 A 150,150 0 0,1 350,200" />
                   <path id="text-curve-bottom" d="M 45,200 A 155,155 0 0,0 355,200" />
                 </defs>

                 {/* Outer Circle Ring */}
                 <circle cx="200" cy="200" r="180" stroke="#06b6d4" strokeWidth="6" fill="none" filter="url(#neon-glow-blue)" className="opacity-90" />
                 <circle cx="200" cy="200" r="180" stroke="#06b6d4" strokeWidth="2" fill="none" className="opacity-100" />

                 {/* Side Dumbbells */}
                 {/* Left Dumbbell */}
                 <g transform="translate(15, 200)">
                    <rect x="-8" y="-30" width="16" height="60" rx="4" fill="none" stroke="#06b6d4" strokeWidth="4" filter="url(#neon-glow-blue)" />
                    <line x1="8" y1="0" x2="35" y2="0" stroke="#06b6d4" strokeWidth="4" filter="url(#neon-glow-blue)" />
                    <rect x="35" y="-20" width="10" height="40" rx="3" fill="none" stroke="#06b6d4" strokeWidth="4" filter="url(#neon-glow-blue)" />
                 </g>
                 {/* Right Dumbbell */}
                 <g transform="translate(385, 200) scale(-1, 1)">
                    <rect x="-8" y="-30" width="16" height="60" rx="4" fill="none" stroke="#d946ef" strokeWidth="4" filter="url(#neon-glow-pink)" />
                    <line x1="8" y1="0" x2="35" y2="0" stroke="#d946ef" strokeWidth="4" filter="url(#neon-glow-pink)" />
                    <rect x="35" y="-20" width="10" height="40" rx="3" fill="none" stroke="#d946ef" strokeWidth="4" filter="url(#neon-glow-pink)" />
                 </g>

                 {/* Top Text: NEW DACCAN */}
                 <text fill="#06b6d4" fontSize="42" fontWeight="900" letterSpacing="6" filter="url(#neon-glow-blue)" style={{textShadow: "0 0 10px #06b6d4", fontFamily: "Arial, sans-serif"}}>
                   <textPath href="#text-curve-top" startOffset="50%" textAnchor="middle">NEW DACCAN</textPath>
                 </text>

                 {/* Bottom Text: NO PAIN NO GAIN */}
                 <text fill="#d946ef" fontSize="32" fontWeight="900" letterSpacing="4" filter="url(#neon-glow-pink)" style={{textShadow: "0 0 10px #d946ef", fontFamily: "Arial, sans-serif"}}>
                   <textPath href="#text-curve-bottom" startOffset="50%" textAnchor="middle">NO PAIN NO GAIN</textPath>
                 </text>

                 {/* Center Figures */}
                 <g transform="translate(200, 220) scale(1.1)">
                    {/* Male Figure (Left, Blue) */}
                    <g transform="translate(-45, 0)" filter="url(#neon-glow-blue)">
                        {/* Head */}
                        <path d="M 0,-90 L 0,-70" stroke="#06b6d4" strokeWidth="12" strokeLinecap="round" />
                        {/* Shoulders/Arms */}
                        <path d="M -30,-40 Q -45,-60 -25,-80 L 0,-60 L 25,-80 Q 45,-60 30,-40" fill="none" stroke="#06b6d4" strokeWidth="4" />
                        {/* Torso */}
                        <path d="M -25,-40 L -15,0 L 15,0 L 25,-40" fill="none" stroke="#06b6d4" strokeWidth="4" />
                        {/* Holding Plate */}
                        <circle cx="-15" cy="15" r="20" stroke="#06b6d4" strokeWidth="4" fill="none" />
                        <circle cx="-15" cy="15" r="5" fill="#06b6d4" />
                    </g>

                    {/* Female Figure (Right, Pink) */}
                    <g transform="translate(45, 0)" filter="url(#neon-glow-pink)">
                        {/* Head & Ponytail */}
                        <circle cx="0" cy="-80" r="8" stroke="#d946ef" strokeWidth="3" fill="none" />
                        <path d="M 8,-80 Q 20,-75 15,-60" fill="none" stroke="#d946ef" strokeWidth="3" />
                        {/* Body */}
                        <path d="M -10,-60 Q -15,-40 -10,-20 Q -20,0 -10,20" fill="none" stroke="#d946ef" strokeWidth="3" />
                        <path d="M 10,-60 Q 15,-40 10,-20 Q 20,0 10,20" fill="none" stroke="#d946ef" strokeWidth="3" />
                        {/* Arm Flexing */}
                        <path d="M 15,-55 Q 40,-50 40,-80" fill="none" stroke="#d946ef" strokeWidth="3" />
                        <path d="M 40,-80 L 35,-85" stroke="#d946ef" strokeWidth="3" />
                    </g>
                 </g>
               </svg>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => link.page && setPage(link.page)}
                className={`text-sm font-bold tracking-widest transition-all duration-300 uppercase ${
                  currentPage === link.page 
                    ? 'text-brand-red' 
                    : 'text-gray-300 hover:text-white hover:scale-110'
                }`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Social Icons & Search */}
          <div className="hidden lg:flex items-center gap-5 ml-auto border-l border-zinc-800 pl-8 h-12">
            <Search className="h-5 w-5 text-gray-400 cursor-pointer hover:text-brand-red transition-colors" />
            <div className="w-px h-5 bg-zinc-800 mx-1"></div>
            <a 
              href="https://www.facebook.com/people/official-new-Deccan-fitness-center/100091197682774/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#1877F2] transition-colors"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#1DA1F2] transition-colors"><Twitter className="h-5 w-5" /></a>
            <a href="#" className="text-gray-400 hover:text-[#FF0000] transition-colors"><Youtube className="h-5 w-5" /></a>
            <a 
              href="https://www.instagram.com/deccanfitnesscenter/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-[#E4405F] transition-colors"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-zinc-800 focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-zinc-950 border-b border-zinc-800 absolute w-full z-50">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => {
                  if (link.page) setPage(link.page);
                  setIsMenuOpen(false);
                }}
                className={`block w-full text-left px-3 py-3 rounded-md text-base font-bold uppercase tracking-wider ${
                  currentPage === link.page ? 'text-white bg-brand-red' : 'text-gray-300 hover:text-white hover:bg-zinc-900'
                }`}
              >
                {link.name}
              </button>
            ))}
             <a 
              href="https://www.instagram.com/deccanfitnesscenter/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-left px-3 py-3 text-gray-300 hover:text-white font-bold uppercase tracking-wider"
            >
              Instagram
            </a>
            <a 
              href="https://www.facebook.com/people/official-new-Deccan-fitness-center/100091197682774/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block w-full text-left px-3 py-3 text-gray-300 hover:text-white font-bold uppercase tracking-wider"
            >
              Facebook
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;