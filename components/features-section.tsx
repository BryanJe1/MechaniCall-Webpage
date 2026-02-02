'use client';

import { MapPin, Zap, Award, Star, AlertCircle, Clock, Shield, Phone, Users } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const features = [
  {
    icon: AlertCircle,
    title: 'Quick Request',
    description: 'Emergency request button connects you instantly. Share your location and issue in under 30 seconds.',
    color: 'bg-red-600',
    delay: '0ms'
  },
  {
    icon: Zap,
    title: 'AI Smart Matching',
    description: 'Advanced algorithms match you with the perfect mechanic based on location, skills, and availability.',
    color: 'bg-red-600',
    delay: '100ms'
  },
  {
    icon: MapPin,
    title: 'Live GPS Tracking',
    description: 'Watch your mechanic arrive in real-time. Accurate ETA and route updates every second.',
    color: 'bg-red-600',
    delay: '200ms'
  },
  {
    icon: Star,
    title: 'Ratings & Reviews',
    description: 'Transparent feedback system. Give ratings and reviews to services offered.',
    color: 'bg-red-600',
    delay: '400ms'
  },
  {
    icon: Clock,
    title: '5min Average Response',
    description: 'Quick response time from nearby mechanics ensures you get help when you need it most.',
    color: 'bg-red-600',
    delay: '500ms'
  },
];

export function FeaturesSection() {
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

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative w-full py-20 sm:py-28 lg:py-36 bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #dc2626 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-red-100 px-6 py-3 border-2 border-red-200">
            <Zap className="h-5 w-5 text-red-600" />
            <span className="text-sm font-black text-red-600 uppercase tracking-wider">Powerful Features</span>
          </div>
          
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 text-balance">
            EVERYTHING FOR{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-red-600">EMERGENCIES</span>
              <div className="absolute -bottom-2 left-0 right-0 h-3 bg-yellow-300 -rotate-1" />
            </span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-gray-600 font-medium text-pretty">
            From instant SOS requests to verified professional mechanics, MechaniCall delivers complete emergency roadside assistance in the palm of your hand.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className={`group transition-all duration-700 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: feature.delay }}
              >
                <div className="relative h-full rounded-2xl border-4 border-gray-200 bg-white p-8 hover:border-red-600 hover:shadow-2xl transition-all duration-300 overflow-hidden">
                  {/* Hover Background Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <div className={`mb-5 inline-flex h-16 w-16 items-center justify-center rounded-xl ${feature.color} shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                    </div>
                    
                    <h3 className="mb-3 text-2xl font-black text-gray-900 group-hover:text-red-600 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 font-medium leading-relaxed">
                      {feature.description}
                    </p>
                  </div>

                  {/* Corner Accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-red-600 opacity-0 group-hover:opacity-10 transition-opacity rounded-bl-full" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats Banner */}
        <div className="relative rounded-3xl border-4 border-red-600 bg-gradient-to-br from-red-600 via-red-700 to-red-800 p-10 sm:p-16 overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, white 20px, white 40px)'
            }} />
          </div>

          <div className="relative grid gap-8 md:grid-cols-3 text-center">
            <div className="group">
              <div className="mb-3 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Zap className="h-10 w-10 text-yellow-300" />
              </div>
              <p className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">New</p>
              <p className="text-lg text-white/90 font-bold uppercase tracking-wide">Pilot Release</p>
            </div>
            
            <div className="group">
              <div className="mb-3 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-yellow-300" />
              </div>
              <p className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">5min</p>
              <p className="text-lg text-white/90 font-bold uppercase tracking-wide">Average Response Time</p>
            </div>
            
            <div className="group">
              <div className="mb-3 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:scale-110 transition-transform">
                <Users className="h-10 w-10 text-yellow-300" />
              </div>
              <p className="text-5xl sm:text-6xl font-black text-white mb-2 drop-shadow-lg">Trusted</p>
              <p className="text-lg text-white/90 font-bold uppercase tracking-wide">Nearby Mechanics</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}