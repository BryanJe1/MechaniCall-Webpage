'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { Heart, Zap, Users, Shield, Award, Clock } from 'lucide-react';

const values = [
  {
    icon: Clock,
    title: 'SPEED & RELIABILITY',
    description: 'Lightning-fast response times and dependable service when every second counts in an emergency.',
    stat: ' 5min',
    statLabel: 'Target Response'
  },
  {
    icon: Users,
    title: 'SAFETY FIRST',
    description: 'Mechanics are carefully selected as part of the pilot phase.',
    stat: 'Trusted',
    statLabel: 'Nearby Mechanics'
  },
  {
    icon: Zap,
    title: 'PILOT RELEASE',
    description: 'Launching our service to a limited number of users to test and improve the experience before full release.',
    stat: 'PILOT',
    statLabel: 'Now Launching'
  },
];

export function AboutSection() {
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

    const section = document.getElementById('about');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="relative w-full py-20 sm:py-28 lg:py-36 bg-gray-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-red-50 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center mb-20">
          {/* Left Content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
            }`}
          >
            <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-red-100 px-6 py-3 border-2 border-red-200">
              <Heart className="h-5 w-5 text-red-600 animate-pulse" />
              <span className="text-sm font-black text-red-600 uppercase tracking-wider">Our Mission</span>
            </div>

            <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 text-balance leading-tight">
              REVOLUTIONIZING{' '}
              <span className="relative inline-block">
                <span className="relative z-10 text-red-600">ROADSIDE</span>
                <div className="absolute -bottom-2 left-0 right-0 h-4 bg-yellow-300 -rotate-1" />
              </span>{' '}
              <span className="block mt-2">ASSISTANCE</span>
            </h2>

            <div className="space-y-6 text-lg text-gray-600 font-medium">
              <p className="leading-relaxed">
                At MechaniCall, we believe roadside emergencies shouldn't mean endless waits. Our AI-powered platform is <span className="font-black text-red-600">launching now</span> to connect drivers with nearby mechanics in under 5 minutes.
              </p>

              <p className="leading-relaxed">
                We're building an ecosystem where drivers get reliable help, and emergencies are handled with <span className="font-black text-red-600">speed and transparency</span>.
              </p>
            </div>

            {/* Key Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-red-600 transition-colors">
                <p className="text-3xl font-black text-red-600 mb-1">PILOT</p>
                <p className="text-xs font-bold text-gray-600 uppercase">Launch Ready</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-red-600 transition-colors">
                <p className="text-3xl font-black text-red-600 mb-1">Trusted</p>
                <p className="text-xs font-bold text-gray-600 uppercase">Nearby Mechanics</p>
              </div>
              <div className="text-center p-4 rounded-xl bg-white border-2 border-gray-200 hover:border-red-600 transition-colors">
                <p className="text-3xl font-black text-red-600 mb-1">5 min</p>
                <p className="text-xs font-bold text-gray-600 uppercase">Avg Response</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div
            className={`transition-all duration-1000 transform delay-200 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
            }`}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-red-600 rounded-2xl opacity-20 -rotate-6" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-300 rounded-2xl opacity-30 rotate-6" />
              
              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl aspect-square">
                
                <Image 
                  src="/MechaniCall_Logo.png" 
                  alt="MechaniCall Team"
                  fill
                  className="object-cover"
                />
                
                {/* Placeholder */}
                <div className="w-full h-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <Shield className="h-32 w-32 mx-auto mb-6 opacity-50" />
                    <p className="text-2xl font-black uppercase">Trusted Service</p>
                    <p className="text-sm opacity-75 mt-2">Professional Support 24/7</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`transition-all duration-700 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="group relative h-full rounded-2xl border-4 border-gray-200 bg-white p-8 hover:border-red-600 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-xl bg-red-600 shadow-lg group-hover:scale-110 transition-transform">
                      <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    {/* Title */}
                    <h3 className="mb-3 text-xl font-black text-gray-900 uppercase tracking-tight group-hover:text-red-600 transition-colors">
                      {value.title}
                    </h3>
                    
                    {/* Description */}
                    <p className="text-gray-600 font-medium leading-relaxed mb-6">
                      {value.description}
                    </p>

                    {/* Stat */}
                    <div className="pt-4 border-t-2 border-gray-200 group-hover:border-red-600 transition-colors">
                      <p className="text-3xl font-black text-red-600">{value.stat}</p>
                      <p className="text-sm font-bold text-gray-600 uppercase mt-1">{value.statLabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="rounded-3xl border-4 border-red-600 bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-10 sm:p-16 overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 25px, white 25px, white 50px)'
            }} />
          </div>

          <div className="relative grid gap-10 md:grid-cols-4 text-center">
            <div className="group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8 text-yellow-300" />
              </div>
              <p className="text-5xl font-black text-white mb-2 drop-shadow-lg">NEW</p>
              <p className="text-sm text-white/90 font-bold uppercase tracking-wide">First Release</p>
            </div>
            
            <div className="group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Heart className="h-8 w-8 text-yellow-300" />
              </div>
              <p className="text-5xl font-black text-white mb-2 drop-shadow-lg">JOIN</p>
              <p className="text-sm text-white/90 font-bold uppercase tracking-wide">Early Adopters</p>
            </div>
            
            <div className="group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Users className="h-8 w-8 text-yellow-300" />
              </div>
              <p className="text-5xl font-black text-white mb-2 drop-shadow-lg">Trusted</p>
              <p className="text-sm text-white/90 font-bold uppercase tracking-wide">Nearby Mechanics</p>
            </div>
            
            <div className="group">
              <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Clock className="h-8 w-8 text-yellow-300" />
              </div>
              <p className="text-5xl font-black text-white mb-2 drop-shadow-lg">5 min</p>
              <p className="text-sm text-white/90 font-bold uppercase tracking-wide">Avg Response</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}