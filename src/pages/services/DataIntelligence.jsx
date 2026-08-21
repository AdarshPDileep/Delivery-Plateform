import React from 'react';
import { 
  BarChart3, PieChart, Activity, Download, FileText, Database, Share2, 
  TrendingUp, Users, Store, Map, AlertTriangle, Package
} from 'lucide-react';

export default function DataIntelligence() {
  const analyticsSections = [
    {
      title: 'Shipment Analytics',
      icon: Package, // Wait, I need to import Package or use another icon. I'll use Box
      features: ['Booked shipments', 'Delivered', 'In Transit', 'RTO', 'Returns']
    },
    {
      title: 'Delivery Analytics',
      icon: Activity,
      features: ['First Attempt Delivery %', 'Average Delivery Time', 'NDR %', 'Reattempt %']
    },
    {
      title: 'Geographic Analytics',
      icon: Map,
      features: ['State → Zone → District → Taluk → Town performance hierarchy', 'Pincode heatmaps']
    },
    {
      title: 'Franchise Analytics',
      icon: Store,
      features: ['Shipment volume', 'Revenue', 'COD pending', 'Delivery %', 'SLA', 'RTO %']
    },
    {
      title: 'Seller Analytics',
      icon: TrendingUp,
      features: ['Orders', 'Revenue', 'COD', 'Delivery %', 'Returns']
    },
    {
      title: 'Delivery Agent Analytics',
      icon: Users,
      features: ['Deliveries assigned', 'Delivered', 'Failed', 'COD collected', 'Average delivery time']
    }
  ];

  const reports = [
    'Daily Shipment Report', 'COD Report', 'Settlement Report', 
    'RTO Report', 'SLA Report', 'Franchise Performance', 
    'Seller Performance', 'Agent Performance'
  ];

  return (
    <div className="w-full animate-fade-in font-sans">
      {/* Hero Section */}
      <div className="w-full py-24 md:py-32 px-6 bg-gradient-to-br from-teal-800 to-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-6xl mx-auto relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="inline-flex items-center justify-center p-3 bg-white/20 rounded-2xl mb-6 backdrop-blur-md shadow-lg border border-white/20">
              <Database className="w-8 h-8 text-teal-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-6 font-display">
              Logistics Data Intelligence
            </h1>
            <p className="text-lg md:text-xl text-teal-100 max-w-2xl leading-relaxed mb-10">
              Turn raw shipment data into actionable insights. Harness the power of machine learning and billions of data points to optimize your supply chain.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-teal-400 text-teal-950 hover:bg-teal-300 px-8 py-4 rounded-full font-bold transition-colors shadow-xl">
                Explore Dashboard
              </button>
            </div>
          </div>
          
          <div className="hidden md:flex flex-1 justify-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 shadow-2xl w-full max-w-lg text-white">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold font-display text-xl">Network Overview</h3>
                <select className="bg-white/10 border border-white/20 text-white text-sm rounded-lg px-3 py-1 outline-none">
                  <option>Last 30 Days</option>
                </select>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">Total Shipments</p>
                  <p className="text-3xl font-bold font-display">125,840</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">Delivery Success</p>
                  <p className="text-3xl font-bold font-display text-emerald-400">94.8%</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">RTO Rate</p>
                  <p className="text-3xl font-bold font-display text-amber-400">4.7%</p>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <p className="text-teal-200 text-xs font-bold uppercase tracking-wider mb-1">COD Pending</p>
                  <p className="text-3xl font-bold font-display">₹8.42L</p>
                </div>
              </div>
              
              <div className="h-32 bg-white/5 rounded-xl border border-white/10 flex items-end justify-between p-4 px-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/20 to-transparent"></div>
                {/* Mock Chart Bars */}
                {[40, 70, 45, 90, 65, 100, 80].map((height, i) => (
                  <div key={i} className="w-8 bg-teal-400/80 rounded-t-sm relative z-10" style={{ height: `${height}%` }}></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics Modules Section */}
      <section className="py-24 px-6 max-w-6xl mx-auto w-full">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-gray-900 mb-6 font-display">Comprehensive Analytics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Deep dive into every operational aspect of your logistics network.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsSections.map((section, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center mb-6 text-teal-600 group-hover:scale-110 transition-transform">
                <section.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-gray-900 text-xl mb-4 font-display">{section.title}</h3>
              <ul className="space-y-2">
                {section.features.map((feature, fidx) => (
                  <li key={fidx} className="flex items-center gap-2 text-gray-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-400"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Reports Section */}
      <section className="py-24 px-6 bg-gray-50 border-t border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-4 font-display">Automated MIS Reports</h2>
              <p className="text-gray-600">Export detailed reports manually or schedule them for daily email delivery.</p>
            </div>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm">
                <FileText className="w-4 h-4 text-green-600" /> Export Excel
              </button>
              <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-bold transition-colors shadow-sm">
                <FileText className="w-4 h-4 text-red-600" /> Export PDF
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {reports.map((report, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-gray-200 flex items-center gap-3 cursor-pointer hover:border-teal-400 hover:bg-teal-50 transition-colors">
                <FileText className="w-5 h-5 text-gray-400" />
                <span className="font-bold text-sm text-gray-800">{report}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
