'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, MapPin, Clock, Shield } from 'lucide-react';
import { useEffect, useState } from 'react';

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-red-700 to-red-800 pt-24 sm:pt-32 pb-16 sm:pb-24">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow" />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>

      {/* Diagonal Stripes */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'repeating-linear-gradient(45deg, transparent, transparent 35px, white 35px, white 70px)',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Emergency Badge */}
            

            <h1 className="mb-6 text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.1] text-white text-balance">
              ROADSIDE{' '}
              <span className="block text-yellow-300 drop-shadow-[0_2px_10px_rgba(253,224,71,0.5)]">
                EMERGENCY?
              </span>
              <span className="block text-4xl sm:text-5xl lg:text-6xl mt-2">
                Help in <span className="text-yellow-300">Minutes</span>
              </span>
            </h1>

            <p className="mb-8 text-xl sm:text-2xl text-white/95 font-medium text-pretty leading-relaxed">
              Connect with mechanics instantly. Real-time GPS tracking, and professional service when you need it most.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <Link
                href="#download"
                className="group relative overflow-hidden inline-flex items-center justify-center gap-3 rounded-xl bg-white px-8 py-5 font-black text-red-600 text-lg uppercase tracking-wide transition-all hover:shadow-2xl hover:scale-105 active:scale-95"
              >
                <Phone className="h-6 w-6 relative z-10" />
                <span className="relative z-10">Download Now</span>
                <ArrowRight className="h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-3 rounded-xl border-3 border-white bg-white/10 backdrop-blur-sm px-8 py-5 font-black text-white text-lg uppercase tracking-wide transition-all hover:bg-white/20"
              >
                How It Works
              </Link>
            </div>

            {/* Trust Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t-2 border-white/30">
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-black text-yellow-300 drop-shadow-lg">NEW</p>
                <p className="text-sm sm:text-base text-white/90 font-bold mt-1">Pilot Release</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-black text-yellow-300 drop-shadow-lg">0★</p>
                <p className="text-sm sm:text-base text-white/90 font-bold mt-1">Current Rating</p>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-3xl sm:text-4xl font-black text-yellow-300 drop-shadow-lg">5min</p>
                <p className="text-sm sm:text-base text-white/90 font-bold mt-1">Avg Response</p>
              </div>
            </div>
          </div>

          {/* Right Visual - Phone Mockup with Screenshot */}
          <div
            className={`transition-all duration-1000 transform delay-200 ${
              isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-10 rotate-6'
            } relative`}
          >
            {/* Floating Icons */}
            <div className="absolute -top-10 -left-10 bg-white rounded-2xl p-4 shadow-2xl animate-float">
              <MapPin className="h-8 w-8 text-red-600" />
            </div>
            <div
              className="absolute -bottom-10 -left-10 bg-white rounded-2xl p-4 shadow-2xl animate-float"
              style={{ animationDelay: '0.5s' }}
            >
              <Clock className="h-8 w-8 text-red-600" />
            </div>
            <div
              className="absolute -top-10 -right-10 bg-white rounded-2xl p-4 shadow-2xl animate-float"
              style={{ animationDelay: '1s' }}
            >
              <Shield className="h-8 w-8 text-red-600" />
            </div>

            {/* Phone Frame */}
            <div className="relative mx-auto w-80 h-[700px]">
              <div className="absolute inset-0 bg-yellow-300 rounded-[3rem] blur-3xl opacity-30 animate-pulse-slow" />

              <div className="relative w-full h-full rounded-[2rem] bg-gray-900 shadow-2xl border-8 border-gray-900 overflow-hidden">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-gray-900 rounded-b-3xl z-10" />

                {/* Screen Content - Actual Screenshot */}
                <Image
                  src="/Welcome.jpg" // <--- Put your real screenshot here
                  alt="MechaniCall App Screenshot"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
        >
          <path
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
