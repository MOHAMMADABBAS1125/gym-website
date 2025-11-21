import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AITrainer from './components/AITrainer';
import { Page } from './types';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main>
        {currentPage === 'HOME' ? (
          <Home setPage={setCurrentPage} />
        ) : (
          <AITrainer />
        )}
      </main>

      {/* Simple Footer */}
      <footer className="bg-zinc-950 py-8 border-t border-zinc-800 mt-auto">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Daccan Fitness Center. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-red transition-colors">Privacy</a>
            <a href="#" className="hover:text-brand-red transition-colors">Terms</a>
            <a 
              href="https://www.instagram.com/deccanfitnesscenter/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-brand-red transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;