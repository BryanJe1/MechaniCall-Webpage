'use client';

import Link from 'next/link';
import { ArrowRight, Phone, Download, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="cta-section relative w-full py-20 sm:py-28 lg:py-36 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      {/* Diagonal Stripes */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 30px, #dc2626 30px, #dc2626 60px)'
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          }`}
        >
          <div className="relative rounded-3xl border-4 border-red-600 bg-white p-12 sm:p-16 lg:p-20 text-center shadow-2xl overflow-hidden">
            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-red-600 opacity-10 rounded-br-full" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-yellow-300 opacity-10 rounded-tl-full" />

            {/* Pulsing Alert Badge */}
            <div className="relative mb-8 inline-flex items-center gap-3 rounded-full bg-red-100 px-6 py-3 border-2 border-red-600">
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </div>
              <span className="text-sm font-black text-red-600 uppercase tracking-wider">Pilot Launch Now Live</span>
            </div>

            <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 text-balance leading-tight">
              DON'T WAIT FOR{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">HELP</span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-300 -rotate-1" />
              </span>
            </h2>

            <p className="mx-auto mb-12 max-w-2xl text-xl sm:text-2xl text-gray-600 font-bold text-pretty leading-relaxed">
              Get matched with a nearby mechanic in minutes. Help is just one tap away.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-10">
              <Link
                href="#download"
                className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-red-600 px-10 py-5 font-black text-white text-lg uppercase tracking-wide transition-all hover:bg-red-700 hover:shadow-2xl hover:scale-105 active:scale-95 border-4 border-red-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <Download className="h-6 w-6 relative z-10 animate-bounce" />
                <span className="relative z-10">Download Now</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <div className="flex flex-col sm:flex-row items-center gap-3 text-gray-600">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 border-2 border-green-600">
                  <Zap className="h-4 w-4 text-green-600" />
                  <span className="text-sm font-black text-green-900">Free Download</span>
                </div>
                <span className="font-bold text-sm">•</span>
                <span className="font-bold text-sm">Android 8.0+</span>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 pt-8 border-t-2 border-gray-200">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-red-600 border-2 border-white flex items-center justify-center text-white text-xs font-black">M</div>
                  <div className="w-8 h-8 rounded-full bg-red-700 border-2 border-white flex items-center justify-center text-white text-xs font-black">C</div>
                  <div className="w-8 h-8 rounded-full bg-red-800 border-2 border-white flex items-center justify-center text-white text-xs font-black">+</div>
                </div>
                <div className="text-left">
                  <p className="text-sm font-black text-gray-900">Nearby Mechanics</p>
                  <p className="text-xs text-gray-600">Ready to help</p>
                </div>
              </div>

              <div className="text-3xl text-gray-300">•</div>

              <div className="text-center">
                <p className="text-2xl font-black text-green-600">✓ PILOT</p>
                <p className="text-xs font-bold text-gray-600 mt-1">Now Launching</p>
              </div>

              <div className="text-3xl text-gray-300">•</div>

              <div className="text-center">
                <p className="text-xl font-black text-red-600">5 MIN</p>
                <p className="text-xs font-bold text-gray-600 mt-1">Avg Response</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}