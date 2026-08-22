import React, { useState, useEffect } from 'react';
import { ChevronDown, Plus, Minus, Check, ArrowRight } from 'lucide-react';

export default function TransportOne() {
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    { q: "What is TransportOne?", a: "TransportOne is our specialized freight and logistics service designed for businesses with complex, high-volume shipping needs. We integrate AI agents to streamline operations, reduce edge cases, and ensure exceptional delivery performance." },
    { q: "How long will it take to onboard a team?", a: "Depending on your specific requirements and volume, we can onboard a dedicated team within 2 to 4 weeks, fully integrated with your existing supply chain processes." },
    { q: "How are the charges calculated?", a: "Charges are dynamically calculated based on freight volume, complexity, required SLA, and distance. We offer transparent pricing models tailored to B2B and enterprise shippers." },
    { q: "Who are the agents?", a: "Our 'Agents' are highly trained logistics professionals augmented with our proprietary AI tools, enabling them to make instant decisions and handle exceptions seamlessly." },
    { q: "What is the typical SLA for edge cases?", a: "With our proactive monitoring system, over 95% of edge cases are resolved before they impact the final delivery timeline, ensuring unmatched reliability." },
    { q: "How do I get in touch with support?", a: "Enterprise clients get access to a 24/7 dedicated control tower and a direct line to their assigned TransportOne agents." }
  ];

  const agents = [
    { name: 'Vikas', title: 'Senior Route Optimizer', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kajal', title: 'Edge Case Specialist', img: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?auto=format&fit=crop&w=400&q=80' },
    { name: 'Rajesh', title: 'Linehaul Manager', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
    { name: 'Sneha', title: 'Fulfillment Lead', img: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80' },
    { name: 'Anjali', title: 'Customer Success', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ved', title: 'Analytics Expert', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80' }
  ];

  const industries = [
    { name: 'Manufacturing', desc: 'Secure supply chain for industrial goods and machinery.', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80' },
    { name: 'Construction', desc: 'Heavy weight material transport directly to sites.', img: 'https://images.unsplash.com/photo-1541888081045-8ceee4593414?auto=format&fit=crop&w=600&q=80' },
    { name: 'Retail', desc: 'FMCG and apparel distribution to large retail networks.', img: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80' },
    { name: 'Consumer Goods', desc: 'Fast-moving distribution to warehouses and stores.', img: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=600&q=80' },
    { name: 'Food & Beverage', desc: 'Temperature-controlled and time-sensitive hauling.', img: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80' },
    { name: 'Oil & Gas (LPG)', desc: 'Specialized handling and hazardous material compliance.', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80' }
  ];

  return (
    <div className="w-full font-sans bg-white overflow-hidden text-[#111]">
      
      {/* Hero Section (Dark Theme) */}
      <section className="relative w-full bg-black min-h-[550px] flex flex-col justify-between overflow-hidden text-white border-b-4 border-[#e31837]">
        {/* Background Gradient & Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#3d0000] z-0"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay z-0"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center pt-20 pb-16">
          <div className="flex-1 w-full max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <span className="text-[10px] font-bold text-white bg-white/10 px-2 py-1 rounded border border-white/20 tracking-widest uppercase">Intelligent</span>
              <span className="text-[10px] font-bold text-[#e31837] bg-[#e31837]/10 px-2 py-1 rounded border border-[#e31837]/20 tracking-widest uppercase">Freight Management</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] mb-6 text-white">
              Hire Your Team From <br/>
              <span className="font-bold text-[#e31837]">TransportOne</span>
            </h1>
            
            <p className="text-gray-400 text-sm md:text-base max-w-md mb-8 leading-relaxed font-light">
              Our AI-driven agents and logistics experts integrate seamlessly into your supply chain, eliminating bottlenecks and optimizing every route.
            </p>
            
            <button className="bg-white text-black px-8 py-3.5 rounded font-bold text-sm hover:bg-gray-100 transition shadow-lg flex items-center gap-2">
              Book A Demo <ArrowRight className="w-4 h-4" />
            </button>
          </div>
          
          <div className="flex-1 flex justify-center md:justify-end mt-12 md:mt-0 relative w-full h-[400px]">
            {/* Person Cutout */}
            <div className="absolute bottom-0 right-0 md:right-10 w-[300px] h-auto flex flex-col items-center">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80" alt="Agent" className="w-full object-cover object-top mask-image-bottom h-[350px]" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 20%)', WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 20%)' }} />
              <div className="bg-black/60 backdrop-blur-sm border border-white/10 px-6 py-2 rounded-full -mt-8 relative z-20 text-center">
                <p className="font-bold text-sm text-white">Anjali</p>
                <p className="text-[10px] text-gray-400 uppercase tracking-wider">Customer Success</p>
              </div>
            </div>
          </div>
        </div>

        {/* Client Logos Strip */}
        <div className="relative z-10 w-full bg-black/40 border-t border-white/10 py-6">
          <div className="max-w-7xl mx-auto px-6">
            <p className="text-center text-[9px] uppercase tracking-[0.2em] text-gray-500 mb-6 font-bold">Trusted By Industry Leaders</p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale">
              <span className="font-bold text-lg tracking-tighter">MARS</span>
              <span className="font-bold text-lg tracking-tighter">Nestle</span>
              <span className="font-bold text-lg tracking-tighter">Cisco</span>
              <span className="font-bold text-lg tracking-tighter">VOLVO</span>
              <span className="font-bold text-lg tracking-tighter">BOSCH</span>
              <span className="font-bold text-lg tracking-tighter">IKEA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section (White) */}
      <section className="py-24 px-6 relative overflow-hidden bg-white">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] z-0"></div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
          <div className="flex-1 w-full flex justify-center">
             <div className="relative p-2 bg-gray-50 rounded-2xl border border-gray-100 shadow-xl">
               <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=600&q=80" alt="Port logistics" className="w-[350px] h-[350px] object-cover rounded-xl" />
             </div>
          </div>
          
          <div className="flex-1 max-w-lg">
            <div className="w-12 h-0.5 bg-[#e31837] mb-8"></div>
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              • Our agents use state-of-the-art AI systems to predict bottlenecks before they occur.<br/>
              • We handle the logistics so you can focus on building your product and scaling rapidly.<br/>
              • Highly trained professionals step in to manage exceptions and ensure 99.9% SLA compliance.
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-[1.1] text-black">
              Your <span className="font-bold">Next Hire</span><br/>
              Should Be A <br/>
              <span className="font-bold text-[#e31837]">TransportOne Agent</span>
            </h2>
          </div>
        </div>
      </section>

      {/* Agents Section (Light Gray) */}
      <section className="py-24 px-6 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Our Network</p>
            <h2 className="text-3xl md:text-4xl font-light text-black">Meet The <span className="font-bold text-[#e31837]">Agents</span></h2>
            <p className="text-gray-500 text-sm mt-4">The intelligent workforce behind our fulfillment network.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {agents.map((agent, idx) => (
              <div key={idx} className="bg-[#111] rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-lg">
                <img src={agent.img} alt={agent.name} className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                   <p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{agent.title}</p>
                   <h3 className="text-xl font-bold text-white">{agent.name}</h3>
                </div>
                <div className="absolute top-4 right-4 bg-black/40 backdrop-blur-sm border border-white/10 w-8 h-8 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="flex-1 w-full py-4 md:py-0">
            <h3 className="text-5xl font-light text-[#e31837] mb-2">
              <span className="font-bold">0</span>.0%
            </h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Missed SLAs In The Last 30 Days</p>
          </div>
          <div className="flex-1 w-full py-4 md:py-0">
            <h3 className="text-5xl font-light text-[#e31837] mb-2">
              <span className="font-bold">0</span>.0%
            </h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Unresolved Exceptions Instantly</p>
          </div>
          <div className="flex-1 w-full py-4 md:py-0">
            <h3 className="text-5xl font-light text-[#e31837] mb-2">
              <span className="font-bold">0</span>ms
            </h3>
            <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Delay In Tracking Updates</p>
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <section className="relative w-full h-[400px] flex items-center bg-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h2 className="text-3xl md:text-5xl font-light text-white max-w-2xl leading-[1.2]">
            <span className="font-bold text-[#e31837]">0+</span> Shipments Worth Of Patterns, Exceptions, And Edge Cases, Built Into Every Agent.
          </h2>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-6xl font-light text-black leading-[1.1]">
              Before <span className="text-gray-300 font-normal">Your Team</span><br/>
              <span className="text-gray-300 font-normal">Has Their</span><br/>
              <span className="font-bold text-[#e31837]">First Coffee</span>
            </h2>
          </div>
          
          <div className="flex-1 w-full">
            <div className="space-y-6 mb-12">
              <div className="flex items-center gap-4 text-sm font-bold text-gray-800">
                <Check className="w-5 h-5 text-gray-400" strokeWidth={3} />
                Your routes dispatched
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-800">
                <Check className="w-5 h-5 text-gray-400" strokeWidth={3} />
                Your loads optimized
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-800">
                <Check className="w-5 h-5 text-gray-400" strokeWidth={3} />
                Your invoices reconciled
              </div>
              <div className="flex items-center gap-4 text-sm font-bold text-gray-800">
                <Check className="w-5 h-5 text-gray-400" strokeWidth={3} />
                Your exceptions handled seamlessly
              </div>
            </div>
            
            <div className="bg-gray-50 border border-gray-100 p-8 rounded-2xl">
              <p className="font-bold text-sm mb-4">Hire your <span className="text-[#e31837]">freight team</span></p>
              <button className="bg-black text-white px-6 py-2.5 rounded font-bold text-xs hover:bg-gray-800 transition shadow-md flex items-center gap-2">
                Book Now <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 bg-[#f8f9fa] border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">Industries</p>
            <h2 className="text-3xl md:text-4xl font-light text-black max-w-2xl leading-[1.2]">
              Built For Shippers With Complex, <span className="font-bold text-[#e31837]">High Volume Freight</span>
            </h2>
            <div className="w-12 h-0.5 bg-gray-300 mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, idx) => (
              <div key={idx} className="bg-black rounded-2xl overflow-hidden aspect-[4/3] relative group shadow-md cursor-pointer border border-gray-800">
                <img src={industry.img} alt={industry.name} className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                   <h3 className="text-lg font-bold text-white mb-1 flex items-center justify-between">
                     {industry.name} 
                     <ArrowRight className="w-4 h-4 text-[#e31837] opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-2 group-hover:translate-x-0" />
                   </h3>
                   <p className="text-[10px] text-gray-400 font-medium leading-relaxed max-w-[90%]">{industry.desc}</p>
                </div>
                <div className="absolute top-4 left-4 w-6 h-6 rounded border border-white/20 flex items-center justify-center bg-black/40 backdrop-blur-sm">
                   <div className="w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="flex-1 md:max-w-xs">
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-light text-black leading-[1.2] mb-6">
              Frequently Asked <span className="font-bold text-[#e31837]">Questions</span>
            </h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Find answers to common questions about our freight solutions and operations.
            </p>
          </div>
          
          <div className="flex-[2]">
            <div className="border-t border-gray-100">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border-b border-gray-100">
                  <button 
                    className="w-full flex items-center justify-between py-6 text-left focus:outline-none group"
                    onClick={() => setActiveFaq(activeFaq === idx ? -1 : idx)}
                  >
                    <span className={`font-bold text-sm transition-colors ${activeFaq === idx ? 'text-[#e31837]' : 'text-gray-900 group-hover:text-[#e31837]'}`}>
                      {faq.q}
                    </span>
                    <div className="text-gray-400">
                      {activeFaq === idx ? <Minus className="w-4 h-4 text-[#e31837]" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>
                  {activeFaq === idx && (
                    <div className="pb-8 pr-12 text-gray-600 text-[13px] leading-relaxed">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
    </div>
  );
}
