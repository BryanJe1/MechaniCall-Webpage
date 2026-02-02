'use client';

import { Download, CheckCircle2, Smartphone, Shield, Zap, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function DownloadSection() {
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

    const section = document.getElementById('download');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="download" className="relative w-full py-20 sm:py-28 lg:py-36 bg-white overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50 animate-pulse-slow" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 rounded-full blur-3xl opacity-50 animate-pulse-slow" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Main Download Card */}
          <div className="rounded-3xl border-4 border-red-600 bg-gradient-to-br from-white via-red-50 to-white p-8 sm:p-12 lg:p-16 shadow-2xl overflow-hidden relative">
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600 opacity-5 rounded-bl-full" />
            
            {/* Header */}
            <div className="text-center mb-12 relative z-10">
              <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-red-600 px-6 py-3 border-2 border-red-700">
                <Download className="h-5 w-5 text-white animate-bounce" />
                <span className="text-sm font-black text-white uppercase tracking-wider">Get Started Now</span>
              </div>

              <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 text-balance">
                DOWNLOAD{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-red-600">MechaniCall</span>
                  <div className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-300 -rotate-1" />
                </span>
              </h2>

              <p className="mx-auto max-w-3xl text-xl text-gray-600 font-medium text-pretty">
                Get emergency roadside assistance in your pocket. Fast, reliable, and always available.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="mb-12 flex flex-col sm:flex-row gap-6 justify-center items-center relative z-10">
              <a
                href="https://drive.google.com/uc?export=download&id=1XdEVmYTImJ5KWFIJ7X6A2V5PRT6gLqC7"  // Path inside public folder
                download                 // This triggers download
                className="group relative overflow-hidden w-full sm:w-auto inline-flex items-center justify-center gap-4 rounded-2xl bg-red-600 px-10 py-6 font-black text-white text-xl uppercase tracking-wide transition-all hover:bg-red-700 hover:shadow-2xl hover:scale-105 active:scale-95 border-4 border-red-700"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-transparent opacity-0 group-hover:opacity-20 transition-opacity" />
                <Download className="h-8 w-8 relative z-10 animate-pulse" />
                <div className="text-left relative z-10">
                  <div className="text-sm font-bold opacity-90">Download APK</div>
                  <div className="text-xs opacity-75">Direct Download</div>
                </div>
              </a>

              <a
                href="#"
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-4 rounded-2xl border-4 border-red-600 bg-white px-10 py-6 font-black text-red-600 text-xl uppercase tracking-wide transition-all hover:bg-red-50 hover:shadow-xl"
              >
                <Smartphone className="h-8 w-8" />
                <div className="text-left">
                  <div className="text-sm font-bold">Play Store</div>
                  <div className="text-xs opacity-75">Coming Soon</div>
                </div>
              </a>
            </div>



            {/* Requirements Grid */}
            <div className="mb-12 rounded-2xl bg-white border-4 border-gray-200 p-8 relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-red-600" />
                <h3 className="text-2xl font-black text-gray-900 uppercase">Requirements</h3>
              </div>
              
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-colors">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Android 8.0+</p>
                    <p className="text-sm text-gray-600 font-medium">Latest OS required</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-colors">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">80MB+ Storage</p>
                    <p className="text-sm text-gray-600 font-medium">Lightweight app</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-colors">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">GPS Access</p>
                    <p className="text-sm text-gray-600 font-medium">For live tracking</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-50 border-2 border-gray-200 hover:border-red-600 transition-colors">
                  <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                  <div>
                    <p className="font-black text-gray-900 mb-1">Internet</p>
                    <p className="text-sm text-gray-600 font-medium">4G or WiFi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Installation Steps */}
            <div className="rounded-2xl bg-gradient-to-br from-red-600 to-red-800 p-8 sm:p-10 text-white relative z-10 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)'
                }} />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-8">
                  <Zap className="h-6 w-6 text-yellow-300" />
                  <h3 className="text-2xl font-black uppercase">Quick Installation Guide</h3>
                </div>
                
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
                        <span className="text-2xl font-black">1</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-2">Download APK</p>
                      <p className="text-sm text-white/90 font-medium">Click the download button above to get the file</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
                        <span className="text-2xl font-black">2</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-2">Enable Installation</p>
                      <p className="text-sm text-white/90 font-medium">Settings → Security → Unknown Sources</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
                        <span className="text-2xl font-black">3</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-2">Open Downloaded File</p>
                      <p className="text-sm text-white/90 font-medium">Find APK in your downloads folder</p>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm border-2 border-white/30">
                        <span className="text-2xl font-black">4</span>
                      </div>
                    </div>
                    <div>
                      <p className="font-black text-lg mb-2">Install & Launch</p>
                      <p className="text-sm text-white/90 font-medium">Tap install, wait, then create your account</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Security Badge */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-8 text-center relative z-10">
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-green-100 border-2 border-green-600">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-black text-green-900 uppercase text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-blue-100 border-2 border-blue-600">
                <Clock className="h-5 w-5 text-blue-600" />
                <span className="font-black text-blue-900 uppercase text-sm">Instant Setup</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-3 rounded-full bg-purple-100 border-2 border-purple-600">
                <Zap className="h-5 w-5 text-purple-600" />
                <span className="font-black text-purple-900 uppercase text-sm">No Registration Fee</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}