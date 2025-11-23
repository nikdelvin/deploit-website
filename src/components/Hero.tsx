import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Terminal, ChevronRight, Copy, Check } from 'lucide-react';

export const Hero = () => {
  const [copied, setCopied] = useState(false);
  const command = "git clone https://github.com/nikdelvin/deploit.git";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-green-900/20 via-transparent to-transparent opacity-50 pointer-events-none"></div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-4xl mx-auto z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-sm mb-12">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          v1.0 Stable Release
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-12 tracking-tight text-transparent bg-clip-text bg-linear-to-r from-green-400 to-emerald-600 text-shadow-glow">
          Deploit
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
          Self-host your favorite open-source projects in <span className="text-green-400 font-bold">seconds</span>.
          <br />
          <span className="text-sm md:text-base mt-8 block text-gray-500">Docker • Nginx • Let's Encrypt • One Command</span>
        </p>

        <div className="max-w-[calc(100vw-32px)] w-full mx-auto bg-black/80 border border-gray-700 rounded-lg p-4 shadow-2xl backdrop-blur-sm group hover:border-green-500/50 transition-colors overflow-hidden">
          <div className="flex items-center gap-4 font-mono text-sm md:text-base w-full">
            <div className="flex items-center gap-3 text-gray-300 min-w-0 flex-1">
              <ChevronRight className="text-green-500 shrink-0" size={20} />
              <div className="truncate">
                <span className="text-purple-400">git</span> clone https://github.com/nikdelvin/deploit.git
              </div>
            </div>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-gray-800 rounded-md transition-colors text-gray-400 hover:text-white shrink-0"
              title="Copy to clipboard"
            >
              {copied ? <Check size={18} className="text-green-500" /> : <Copy size={18} />}
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a 
            href="/docs/get-started"
            className="px-8 py-3 bg-green-600 hover:bg-green-500 text-black font-bold rounded-md transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.4)]"
          >
            Start Deploying
          </a>
          <a 
            href="https://github.com/nikdelvin/deploit"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border border-green-600 text-green-400 hover:bg-green-900/20 rounded-md transition-all"
          >
            View on GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
};
