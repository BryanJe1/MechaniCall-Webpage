'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { AlertCircle, Zap, MapPin, CheckCircle, Users, Clock, Star } from 'lucide-react';


const steps = [
  {
    number: '01',
    icon: AlertCircle,
    title: 'SIGN UP & VERIFY',
    description: 'Create an account or sign in and verify your phone number to start using MechaniCall.',
    details: ['Fast sign-up process', 'Secure verification', 'Save your info for future requests'],
    image: '/SignIn.jpg'
  },
  {
    number: '02',
    icon: Zap,
    title: 'REQUEST SERVICE',
    description: 'Tap the "Request Service" button, select the service you need, and add any extra details.',
    details: ['Choose service type', 'Add photos or notes', 'Quick submission'],
    image: '/Request.jpg'
  },
  {
    number: '03',
    icon: Users,
    title: 'MECHANIC SELECTION',
    description: 'Select a mechanic from a ranked list powered by AI matching based on location and skills.',
    details: ['Ranked by proximity and rating', 'Skill-based matching', 'Instant confirmation'],
    image: '/Select.jpg'
  },
  {
    number: '04',
    icon: Clock,
    title: 'WAIT FOR RESPONSE',
    description: 'Mechanics respond quickly. You will be notified when a mechanic accepts your request.',
    details: ['Instant notifications', 'Option to cancel', 'Track accepted request'],
    image: '/Response.jpg'
  },
  {
    number: '05',
    icon: MapPin,
    title: 'GPS TRACKING',
    description: 'Track your mechanic in real-time on the map. Get ETA updates and route details.',
    details: ['Live GPS updates', 'Direct communication', 'Accurate ETA'],
    image: '/Track.jpg'
  },
  {
    number: '06',
    icon: Star,
    title: 'RATE & FEEDBACK',
    description: 'Provide ratings and feedback to help the community and improve future services.',
    details: ['Rate mechanic', 'Leave detailed feedback', 'Contribute to quality assurance'],
    image: '/Rate.jpg'
  },
];

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="how-it-works" className="relative w-full py-20 sm:py-28 lg:py-36 bg-gray-50 overflow-hidden">
      {/* Diagonal Background Split */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 to-red-800 transform -skew-y-3 origin-top-left" 
             style={{ clipPath: 'polygon(0 0, 100% 0, 100% 40%, 0 50%)' }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 border-2 border-red-200 shadow-lg">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-600 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
            </div>
            <span className="text-sm font-black text-red-600 uppercase tracking-wider">Simple Process</span>
          </div>
          
          <h2 className="mb-6 text-4xl sm:text-5xl lg:text-6xl font-black text-white text-balance drop-shadow-lg">
            FROM EMERGENCY TO{' '}
            <span className="text-yellow-300">SOLUTION</span>
          </h2>
          
          <p className="mx-auto max-w-3xl text-xl text-white/95 font-bold text-pretty">
            Four simple steps from breakdown to back on the road. Professional help arrives in minutes.
          </p>
        </div>

        {/* Steps Timeline */}
        <div className="space-y-24">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`transition-all duration-1000 transform ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className={`grid gap-12 lg:gap-16 items-center ${
                  isEven ? 'lg:grid-cols-2' : 'lg:grid-cols-2'
                }`}>
                  {/* Content Side */}
                  <div className={isEven ? 'lg:order-1' : 'lg:order-2'}>
                    {/* Step Number Badge */}
                    <div className="mb-6 inline-flex items-center gap-4">
                      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-red-800 shadow-2xl border-4 border-white">
                        <span className="text-3xl font-black text-white">{step.number}</span>
                      </div>
                      <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-red-100">
                        <Icon className="h-8 w-8 text-red-600" strokeWidth={2.5} />
                      </div>
                    </div>

                    <h3 className="mb-4 text-3xl sm:text-4xl font-black text-gray-900 uppercase tracking-tight">
                      {step.title}
                    </h3>
                    
                    <p className="mb-8 text-xl text-gray-600 font-medium leading-relaxed">
                      {step.description}
                    </p>

                    {/* Feature List */}
                    <ul className="space-y-4">
                      {step.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start gap-4">
                          <div className="flex-shrink-0 mt-1">
                            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-red-600">
                              <CheckCircle className="h-4 w-4 text-white" />
                            </div>
                          </div>
                          <span className="text-lg text-gray-700 font-semibold">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Side */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="relative group">
                      {/* Glow Effect */}
                      <div className="absolute -inset-4 bg-gradient-to-br from-red-600 to-red-800 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity" />
                      
                      {/* Phone Mockup */}
                      <div className="relative rounded-3xl border-8 border-gray-900 bg-gray-900 shadow-2xl overflow-hidden aspect-[9/18] max-w-sm mx-auto transform group-hover:scale-105 transition-transform duration-300">
                         <Image 
                          src={step.image} 
                          alt={step.title}
                          fill
                          className="contain"
                        />
                        
                        {/* Demo Content */}
                        <div className={`w-full h-full bg-gradient-to-br ${
                          index === 0 ? 'from-red-500 to-red-700' :
                          index === 1 ? 'from-red-600 to-red-800' :
                          index === 2 ? 'from-red-500 to-red-700' :
                          'from-green-500 to-green-700'
                        } flex items-center justify-center p-8`}>
                          <div className="text-center text-white">
                            <Icon className="h-24 w-24 mx-auto mb-6 opacity-50" strokeWidth={1.5} />
                            <p className="text-2xl font-black uppercase tracking-wide">{step.title}</p>
                            <p className="mt-4 text-sm opacity-75">Step {step.number}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center my-12">
                    <div className="relative">
                      <div className="h-16 w-1 bg-gradient-to-b from-red-600 to-red-300" />
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="h-4 w-4 rounded-full bg-red-600 animate-pulse" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-white border-4 border-red-600 shadow-2xl">
            <div className="text-left">
              <p className="text-2xl font-black text-gray-900 mb-1">Ready to get started?</p>
              <p className="text-gray-600 font-semibold">Download the app and experience instant emergency support</p>
            </div>
            <a
              href="#download"
              className="whitespace-nowrap inline-flex items-center gap-2 rounded-xl bg-red-600 px-8 py-4 font-black text-white uppercase tracking-wide hover:bg-red-700 shadow-lg hover:shadow-xl transition-all"
            >
              Get App Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}