import React from 'react';
import { 
  Package, MapPin, Navigation, Map, Box, RotateCcw, Zap, Target, Database, Factory, Activity, CheckCircle2
} from 'lucide-react';

export default function TransportOne() {
  const modules = [
    {
      title: 'Shipment Management',
      icon: Package,
      features: ['Shipment creation', 'AWB Generation', 'Shipment lifecycle tracking', 'Bulk actions via API']
    },
    {
      title: 'Hub Operations',
      icon: Factory,
      features: ['Hub & Branch master', 'Inbound scanning', 'Outbound scanning', 'Gate entry management']
    },
    {
      title: 'Route Management',
      icon: Navigation,
      features: ['Geographic routing', 'Transit time estimation', 'Linehaul scheduling', 'Direct connections']
    },
    {
      title: 'Manifest Management',
      icon: Box,
      features: ['Bag creation', 'Manifest generation', 'Inscan/Outscan control', 'Transshipment tracking']
    },
    {
      title: 'Delivery Operations',
      icon: MapPin,
      features: ['Agent assignment', 'Beat planning & optimization', 'Digital Runsheets', 'Exception handling']
    },
    {
      title: 'COD & Financials',
      icon: RotateCcw,
      features: ['Agent cash collection', 'Franchise remittance', 'HO settlement reconciliation', 'Wallet limits']
    }
  ];

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 px-6 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-slate-700 via-slate-900 to-black"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-3 bg-white/10 rounded-2xl mb-6 backdrop-blur-md shadow-lg border border-white/10">
              <Zap className="w-8 h-8 text-yellow-400" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              Transport<span className="text-yellow-400">One</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed mb-10">
              One platform to manage shipments, hubs, vehicles, routes, and logistics operations. Unified transportation management for modern enterprise logistics.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-slate-900 hover:bg-gray-200 px-8 py-4 rounded-full font-bold transition-colors shadow-xl">
                Request Demo
              </button>
              <button className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-full font-bold transition-colors">
                View Architecture
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700 rounded-3xl p-6 shadow-2xl w-full max-w-md relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400/20 rounded-full blur-2xl"></div>
              
              <div className="flex items-center justify-between mb-6 border-b border-slate-700 pb-4">
                <h3 className="text-white font-bold font-display">Control Tower Sync</h3>
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider">Live</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm font-bold">Network Visibility</span>
                    <Activity className="w-4 h-4 text-emerald-400" />
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-emerald-400 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm font-bold">Shipment Exceptions</span>
                    <Target className="w-4 h-4 text-amber-400" />
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-amber-400 h-2 rounded-full" style={{ width: '14%' }}></div>
                  </div>
                </div>
                
                <div className="bg-slate-700/50 p-4 rounded-xl border border-slate-600/50">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-400 text-sm font-bold">SLA Monitoring</span>
                    <Database className="w-4 h-4 text-blue-400" />
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full" style={{ width: '98%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modules Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Core Platform Modules</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            TransportOne provides end-to-end operational control, integrating seamlessly with your existing logistics infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((mod, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-slate-300 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6 text-slate-700 group-hover:bg-slate-900 group-hover:text-yellow-400 transition-colors">
                <mod.icon className="w-7 h-7" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4 font-display">{mod.title}</h3>
              <ul className="space-y-3">
                {mod.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-600 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
