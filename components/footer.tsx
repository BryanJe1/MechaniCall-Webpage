import Link from 'next/link';
import Image from 'next/image';
import { Github, Twitter, Linkedin, Mail, Phone, MapPin, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative w-full border-t-4 border-red-600 bg-gray-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 40px, white 40px, white 80px)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-4 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative h-12 w-12">
                <div className="absolute inset-0 bg-white rounded-xl" />
                <Image
                  src="/MechaniCall_Logo.png"
                  alt="MechaniCall Logo"
                  fill
                  className="object-contain p-1.5 relative z-10"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-white">MechaniCall</span>
                <span className="text-xs font-bold text-red-400">Emergency Support</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 font-medium leading-relaxed mb-6">
              AI-Driven On-Demand Mechanic and Roadside Assistance System.
            </p>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-black text-white uppercase tracking-wide mb-6 text-sm">Product</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#features"
                  className="group flex items-center gap-2 text-sm text-gray-400 font-medium transition-colors hover:text-red-400"
                >
                  <span className="w-0 h-0.5 bg-red-400 group-hover:w-4 transition-all" />
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="#download"
                  className="group flex items-center gap-2 text-sm text-gray-400 font-medium transition-colors hover:text-red-400"
                >
                  <span className="w-0 h-0.5 bg-red-400 group-hover:w-4 transition-all" />
                  Download
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="group flex items-center gap-2 text-sm text-gray-400 font-medium transition-colors hover:text-red-400"
                >
                  <span className="w-0 h-0.5 bg-red-400 group-hover:w-4 transition-all" />
                  How It Works
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-black text-white uppercase tracking-wide mb-6 text-sm">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#about"
                  className="group flex items-center gap-2 text-sm text-gray-400 font-medium transition-colors hover:text-red-400"
                >
                  <span className="w-0 h-0.5 bg-red-400 group-hover:w-4 transition-all" />
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-2 border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 font-medium">
              &copy; 2025 MechaniCall Capstone. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}