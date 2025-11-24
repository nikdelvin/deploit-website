import React from 'react';

export const Logo = ({ className = "", size = 32 }: { className?: string, size?: number }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="100" height="100" rx="20" fill="#0d1117" className="fill-gray-900" />
      <path d="M20 30 L50 50 L20 70" stroke="#00ff41" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" className="stroke-green-500" />
      <line x1="55" y1="70" x2="80" y2="70" stroke="#00ff41" strokeWidth="8" strokeLinecap="round" className="stroke-green-500" />
    </svg>
  );
};
