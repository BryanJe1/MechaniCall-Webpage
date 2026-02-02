'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, AlertCircle } from 'lucide-react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { href: '#features', label: 'Features' },
    { href: '#how-it-works', label: 'How It Works' },
    { href: '#download', label: 'Download' },
    { href: '#about', label: 'About' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white shadow-lg border-b-4 border-red-600' 
          : 'bg-gradient-to-b from-red-600 to-red-700 shadow-md'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo with Image */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative h-12 w-12 sm:h-14 sm:w-14">
            <div className="absolute inset-0 bg-white rounded-xl shadow-lg group-hover:shadow-xl transition-shadow" />
            <Image
              src="/MechaniCall_Logo.png"
              alt="MechaniCall Logo"
              fill
              className="object-contain p-1.5 relative z-10"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className={`text-xl sm:text-2xl font-black tracking-tight transition-colors ${
              scrolled ? 'text-red-600' : 'text-white'
            }`}>
              MechaniCall
            </span>
            <span className={`text-xs font-medium -mt-1 transition-colors ${
              scrolled ? 'text-red-500' : 'text-red-100'
            }`}>
              AI-Driven On-Demand Mechanic and Roadside Assistance System
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative text-sm font-bold uppercase tracking-wide transition-all ${
                scrolled 
                  ? 'text-gray-700 hover:text-red-600' 
                  : 'text-white/90 hover:text-white'
              } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:transition-all after:duration-300 hover:after:w-full ${
                scrolled ? 'after:bg-red-600' : 'after:bg-white'
              }`}
            >
              {link.label}
            </a>
          ))}

          {/* Emergency CTA */}
          <Link
            href="#download"
            className={`group relative overflow-hidden rounded-lg px-6 py-3 font-bold uppercase tracking-wide transition-all ${
              scrolled
                ? 'bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-xl'
                : 'bg-white text-red-600 hover:bg-red-50 shadow-lg hover:shadow-xl'
            }`}
          >
            <span className="relative z-10 flex items-center gap-2">
              <AlertCircle className="h-4 w-4 animate-pulse" />
              Get App Now
            </span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 rounded-lg transition-colors ${
            scrolled 
              ? 'text-red-600 hover:bg-red-50' 
              : 'text-white hover:bg-white/10'
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <X className="h-7 w-7" />
          ) : (
            <Menu className="h-7 w-7" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="bg-white border-t-4 border-red-600 shadow-2xl md:hidden">
          <div className="px-4 py-6 space-y-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-3 text-base font-bold text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors uppercase tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <Link
              href="#download"
              className="mt-4 flex items-center justify-center gap-2 rounded-lg bg-red-600 py-4 text-center font-bold text-white transition-all hover:bg-red-700 shadow-lg uppercase tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              <Phone className="h-5 w-5" />
              Download APK
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}