import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/ui/Input';
import Button from '../components/ui/Button';
import { Package, Search, ShieldCheck, Globe, Zap } from 'lucide-react';

export default function Home() {
  const [awb, setAwb] = useState('');
  const navigate = useNavigate();

  const handleTrack = (e) => {
    e.preventDefault();
    if (awb.trim()) {
      navigate(`/track/${awb.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans overflow-x-hidden">
      {/* Navbar */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-navy-900 rounded-lg flex items-center justify-center">
            <Package className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-navy-900">Commerza<span className="text-navy-600">Global</span></span>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={() => navigate('/seller/login')}>Seller Login</Button>
          <Button variant="ghost" onClick={() => navigate('/franchise/login')}>Franchise Login</Button>
          <Button onClick={() => navigate('/admin/login')}>Admin Portal</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-20 bg-gradient-to-br from-navy-900 to-navy-800 text-white relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          <div className="absolute bottom-0 right-10 w-[500px] h-[500px] rounded-full bg-blue-400 blur-3xl"></div>
        </div>

        <div className="max-w-3xl w-full text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight text-white">
            Next-Gen Logistics for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Modern E-Commerce</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto">
            Seamless B2B and B2C deliveries with real-time tracking, fast COD remittance, and nationwide coverage.
          </p>

          <form onSubmit={handleTrack} className="max-w-xl mx-auto flex flex-col sm:flex-row gap-3 bg-white/10 p-2 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input 
                type="text" 
                value={awb}
                onChange={e => setAwb(e.target.value)}
                placeholder="Enter AWB or Tracking Number (e.g. CG20240001)" 
                className="w-full h-14 pl-12 pr-4 rounded-xl bg-white text-slate-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-500/50"
              />
            </div>
            <Button type="submit" size="lg" className="h-14 px-8 text-lg bg-blue-600 hover:bg-blue-500 border-none rounded-xl">Track Shipment</Button>
          </form>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 px-6 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Why choose Commerza Global?</h2>
          <p className="text-slate-500 max-w-2xl mx-auto">Our technology-driven logistics network ensures your packages arrive safely and on time.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Lightning Fast</h3>
            <p className="text-slate-600">Same-day and next-day delivery options across all major metro cities with our Express network.</p>
          </div>
          
          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
              <ShieldCheck className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Secure COD</h3>
            <p className="text-slate-600">Industry-leading cash on delivery reconciliation with T+2 remittance directly to seller accounts.</p>
          </div>

          <div className="flex flex-col items-center text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Pan-India Reach</h3>
            <p className="text-slate-600">Coverage across 19,000+ pin codes through our extensive network of reliable franchise partners.</p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 text-center text-sm border-t border-slate-800 mt-auto">
        &copy; {new Date().getFullYear()} Commerza Global Logistics. All rights reserved.
      </footer>
    </div>
  );
}
