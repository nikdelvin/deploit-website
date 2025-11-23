import React from 'react';
import { Github, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-800 bg-black/50 py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-green-400 mb-2">Deploit</h3>
          <p className="text-gray-500 text-sm">
            Automated self-hosting for the modern web.
            <br />
            MIT Licensed. Open Source.
          </p>
        </div>
        
        <div className="flex gap-6">
          <a 
            href="https://github.com/nikdelvin/deploit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-400 transition-colors"
          >
            <Github size={24} />
          </a>
        </div>
      </div>
      
      <div className="mt-8 text-center text-gray-600 text-xs font-mono">
        <p>root@deploit:~# shutdown -h now</p>
        <p className="mt-2">&copy; {new Date().getFullYear()} Deploit. All rights reserved.</p>
      </div>
    </footer>
  );
};
