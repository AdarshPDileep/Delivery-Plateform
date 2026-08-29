import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import ctaImage from '../../assets/cta-network.jpg';

export default function CTASection() {
  const navigate = useNavigate();

  return (
    <section className="relative py-0 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={ctaImage} 
          alt="Logistics network"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/80 to-gray-900/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32 flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-left">
          <p className="text-[#E31837] font-semibold text-sm uppercase tracking-widest mb-4">Ready to ship?</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Let's Build Your <br className="hidden md:block" />
            <span className="text-[#E31837]">Logistics Network</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-xl mb-10 leading-relaxed">
            Whether you're a small business or a large enterprise, our tailored solutions will help you deliver faster, smarter, and more reliably than ever before.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => navigate('/seller/signup')}
              className="inline-flex items-center justify-center gap-2 bg-[#E31837] hover:bg-[#c0122e] text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30 hover:-translate-y-0.5"
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigate('/company/about-us')}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="flex flex-col gap-4 w-full lg:w-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/15 transition-all duration-300 cursor-pointer group min-w-[300px]">
            <div className="w-14 h-14 rounded-xl bg-[#E31837]/20 flex items-center justify-center group-hover:bg-[#E31837] transition-colors duration-300">
              <Phone className="w-6 h-6 text-[#E31837] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Call Us</p>
              <p className="text-white font-bold text-lg">1800-123-4567</p>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 flex items-center gap-5 hover:bg-white/15 transition-all duration-300 cursor-pointer group min-w-[300px]">
            <div className="w-14 h-14 rounded-xl bg-[#E31837]/20 flex items-center justify-center group-hover:bg-[#E31837] transition-colors duration-300">
              <Mail className="w-6 h-6 text-[#E31837] group-hover:text-white transition-colors duration-300" />
            </div>
            <div>
              <p className="text-gray-400 text-sm mb-1">Email Us</p>
              <p className="text-white font-bold text-lg">hello@commerza.in</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
