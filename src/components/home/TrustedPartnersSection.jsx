import React from 'react';
import trustedImg from '../../assets/trusted-brands.jpg';

const partners = [
  { name: 'Amazon', initial: 'A' },
  { name: 'Flipkart', initial: 'F' },
  { name: 'Myntra', initial: 'M' },
  { name: 'Nykaa', initial: 'N' },
  { name: 'Ajio', initial: 'Aj' },
  { name: 'Meesho', initial: 'Me' },
  { name: 'Tata CLiQ', initial: 'TC' },
  { name: 'Reliance', initial: 'R' },
];

export default function TrustedPartnersSection() {
  return (
    <section className="py-20 px-6 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#E31837] font-semibold text-sm uppercase tracking-widest mb-3">Trusted by the best</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powering India's Top Brands
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From startups to Fortune 500 companies, businesses trust Commerza Global for their logistics needs.
          </p>
        </div>

        {/* Scrolling Partner Logos */}
        <div className="relative">
          {/* Gradient Fade Left */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
          {/* Gradient Fade Right */}
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

          <div className="flex gap-8 animate-scroll">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-white rounded-xl shadow-sm border border-gray-100 flex items-center justify-center hover:shadow-lg hover:border-[#E31837]/20 transition-all duration-300 group cursor-pointer"
              >
                <span className="text-2xl font-bold text-gray-300 group-hover:text-[#E31837] transition-colors duration-300">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Image Banner */}
        <div className="mt-16 rounded-2xl overflow-hidden shadow-xl relative group">
          <img 
            src={trustedImg} 
            alt="Trusted by leading brands"
            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/70 via-gray-900/40 to-transparent flex items-center">
            <div className="px-8 md:px-16 max-w-xl">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Built on Trust & Reliability</h3>
              <p className="text-gray-200 text-base md:text-lg leading-relaxed">
                Our partnerships are built on a foundation of reliability, innovation, and mutual growth. Join thousands of businesses that ship with confidence.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CSS Animation for scrolling */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
