'use client';

import { ChevronUp, AlertCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="group fixed bottom-8 right-8 z-40 flex flex-col items-center gap-2"
      aria-label="Back to top"
    >
      {/* Main Button */}
      <div className="relative">
        {/* Pulsing Ring */}
        <div className="absolute inset-0 rounded-full bg-red-600 animate-ping opacity-75" />
        
        {/* Button */}
        <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-2xl transition-all hover:bg-red-700 hover:scale-110 active:scale-95 border-4 border-white">
          <ChevronUp className="h-7 w-7" strokeWidth={3} />
        </div>
      </div>

      {/* Label */}
      <div className="px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-black uppercase tracking-wide shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
        Top
      </div>
    </button>
  );
}