import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function GenericMarketingPage({ service }) {
  const Icon = service.icon;

  return (
    <div className="w-full animate-fade-in">
      {/* Hero Section */}
      <div className={`w-full py-24 md:py-32 px-6 bg-gradient-to-br ${service.heroGradient} text-white relative overflow-hidden`}>
        {/* Background Patterns */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-6 backdrop-blur-md shadow-lg border border-white/20">
              <Icon className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              {service.title}
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-10">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-gray-900 hover:bg-gray-50 px-8 py-4 rounded-full font-bold transition-colors shadow-xl">
                Get Started
              </button>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
          
          {/* Mock Dashboard/Illustration Element */}
          <div className="hidden md:flex flex-1 justify-end">
            <div className="w-full max-w-md h-80 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl relative">
              <div className="w-full h-8 bg-white/20 rounded-lg mb-4"></div>
              <div className="w-3/4 h-8 bg-white/10 rounded-lg mb-8"></div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="h-24 bg-white/10 rounded-xl"></div>
                <div className="h-24 bg-white/10 rounded-xl"></div>
                <div className="h-24 bg-white/10 rounded-xl"></div>
                <div className="h-24 bg-white/10 rounded-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Why Choose {service.title}?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {service.benefits}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {service.features.map((feature, idx) => (
            <div key={idx} className="bg-gray-50 rounded-2xl p-6 flex items-start gap-4 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all">
              <div className="mt-1 flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-[#E31837]" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{feature}</h3>
                <p className="text-gray-500">Industry-leading solutions tailored specifically for this feature to ensure maximum efficiency and reliability.</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 bg-gray-900 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-6 font-display">Ready to scale your logistics?</h2>
          <p className="text-gray-400 text-lg mb-10">Join thousands of businesses that trust Commerza Global for their shipping and supply chain needs.</p>
          <button className="bg-[#E31837] hover:bg-[#c0122e] text-white px-10 py-4 rounded-full font-bold text-lg transition-colors shadow-lg shadow-red-900/50 flex items-center gap-2 mx-auto">
            Create an Account <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
