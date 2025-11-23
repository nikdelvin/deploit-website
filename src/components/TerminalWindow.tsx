import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Minus, Square, X } from 'lucide-react';

interface TerminalWindowProps {
  children: React.ReactNode;
  title?: string;
  className?: string;
}

export const TerminalWindow: React.FC<TerminalWindowProps> = ({ children, title = "bash", className = "" }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-900 border border-gray-700 rounded-lg overflow-hidden shadow-2xl ${className}`}
    >
      <div className="bg-gray-800 px-4 py-2 flex items-center justify-between border-b border-gray-700">
        <div className="flex items-center gap-2">
          <Terminal size={16} className="text-gray-400" />
          <span className="text-sm text-gray-300 font-mono">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <Minus size={14} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
          <Square size={12} className="text-gray-500 hover:text-gray-300 cursor-pointer" />
          <X size={14} className="text-gray-500 hover:text-red-400 cursor-pointer" />
        </div>
      </div>
      <div className="p-6 font-mono text-sm md:text-base">
        {children}
      </div>
    </motion.div>
  );
};
