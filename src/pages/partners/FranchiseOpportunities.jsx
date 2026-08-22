import React, { useEffect } from 'react';
import { 
  Building2, Map, CheckCircle2, TrendingUp, Users, Package, 
  MapPin, ShieldCheck, DollarSign, Activity, FileText, ArrowRight,
  Search
} from 'lucide-react';

export default function FranchiseOpportunities() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-[#111111] text-white pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b-8 border-[#e31837] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-[#111111] to-[#111111] opacity-40"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 relative z-10">
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-900/30 text-[#e31837] font-bold text-sm tracking-wide mb-6 border border-red-800/50">
              <Building2 className="w-4 h-4" /> B2B PARTNERSHIP
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white">
              Build Your Logistics Business with <span className="text-[#e31837]">Commerza Global</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg font-medium leading-relaxed">
              Partner with Commerza Global and operate a logistics franchise in your territory with access to technology, shipment operations, earnings visibility, and network support.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors inline-flex items-center gap-2 shadow-lg shadow-red-900/50">
                Apply for Franchise
              </button>
              <button className="bg-white/10 text-white px-8 py-4 font-bold rounded hover:bg-white/20 transition-colors border border-white/10">
                Check Available Territory
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative w-full flex justify-end">
            <div className="bg-white/5 rounded-2xl p-4 backdrop-blur-sm border border-white/10 shadow-2xl relative z-10 transform lg:translate-x-4 max-w-lg">
              <img 
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80" 
                alt="Logistics Franchise" 
                className="w-full h-auto rounded-xl object-cover shadow-lg"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 w-16 h-16 bg-[#e31837] z-0 hidden lg:block"></div>
          </div>
        </div>
      </section>

      {/* Why Become a Franchise Partner */}
      <section className="py-24 px-6 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 inline-flex flex-col">
            Why Become a Franchise Partner?
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <MapPin className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Exclusive Territory</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Operate within an approved Taluk or Town territory, giving you exclusive rights to handle shipments in your area.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <TrendingUp className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Multiple Revenue Opportunities</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Earn commissions from eligible shipments handled, pickups completed, and deliveries fulfilled through your franchise.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <Activity className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Technology Platform</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Manage bookings, pickups, deliveries, manifests, COD, agents, and reports through a powerful centralized dashboard.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <Package className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Growing Logistics Network</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Become part of an expanding delivery network backed by enterprise-grade infrastructure and national brand presence.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <ShieldCheck className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Operational Support</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Access central support, training materials, and escalation facilities to ensure smooth daily operations.
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:border-red-200 hover:shadow-md transition-all">
              <DollarSign className="w-10 h-10 text-[#e31837] mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">Performance Visibility</h3>
              <p className="text-gray-600 leading-relaxed text-sm font-medium">
                Monitor shipments, delivery performance, COD settlements, and real-time earnings directly from your franchise portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Types */}
      <section className="py-24 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-16 text-center inline-flex flex-col w-full items-center">
            Franchise Models
            <div className="w-16 h-[3px] bg-[#e31837] mt-3"></div>
          </h2>
          
          <div className="flex flex-col lg:flex-row gap-12 justify-center">
            {/* Taluk Franchise */}
            <div className="lg:w-1/2 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-[#111111] p-6 text-white">
                <h3 className="text-2xl font-black mb-2 flex items-center gap-3">
                  <Map className="w-6 h-6 text-[#e31837]" /> Taluk Franchise
                </h3>
                <p className="text-gray-400 text-sm font-medium">Ideal for large scale operations managing multiple towns</p>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Larger operational territory spanning multiple towns</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Advanced territory and sub-franchise management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Bulk shipment handling and hub connections</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Extensive delivery operations oversight</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Complex COD reconciliation at scale</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Higher volume commission earnings</span>
                </div>
              </div>
            </div>

            {/* Town Franchise */}
            <div className="lg:w-1/2 bg-gray-50 rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
              <div className="bg-red-50 p-6 border-b border-red-100">
                <h3 className="text-2xl font-black mb-2 flex items-center gap-3 text-gray-900">
                  <Building2 className="w-6 h-6 text-[#e31837]" /> Town Franchise
                </h3>
                <p className="text-gray-600 text-sm font-medium">Focused hyper-local logistics and operations</p>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Dedicated Town-level operations</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Local pickup and delivery execution</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Direct delivery personnel management</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Exclusive pincode serviceability rights</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Daily COD collection and remittance</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-bold">Agile local shipment operations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Territory Availability & Earnings */}
      <section className="py-24 px-6 bg-[#111111] text-white border-y border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Territory Search Tool Mockup */}
          <div className="bg-gray-900 rounded-2xl p-8 border border-gray-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Search className="w-6 h-6 text-[#e31837]" /> Find Available Territory
            </h3>
            <div className="space-y-4 mb-8">
              <select className="w-full p-3 bg-black border border-gray-700 rounded text-sm outline-none focus:border-[#e31837]">
                <option>Kerala</option>
              </select>
              <select className="w-full p-3 bg-black border border-gray-700 rounded text-sm outline-none focus:border-[#e31837]">
                <option>Thiruvananthapuram</option>
              </select>
              <select className="w-full p-3 bg-black border border-gray-700 rounded text-sm outline-none focus:border-[#e31837]">
                <option>Thiruvananthapuram Taluk</option>
              </select>
              <select className="w-full p-3 bg-black border border-gray-700 rounded text-sm outline-none focus:border-[#e31837]">
                <option>Select Town</option>
                <option>Kazhakkoottam</option>
                <option>Attingal</option>
              </select>
            </div>
            
            <div className="space-y-3 mb-6">
              <div className="bg-black border border-gray-800 p-4 rounded-lg flex justify-between items-center">
                <span className="font-bold">Kazhakkoottam</span>
                <span className="text-xs font-black bg-green-900/30 text-green-500 px-3 py-1 rounded border border-green-800">AVAILABLE</span>
              </div>
              <div className="bg-black border border-gray-800 p-4 rounded-lg flex justify-between items-center opacity-50">
                <span className="font-bold">Attingal</span>
                <span className="text-xs font-black bg-red-900/30 text-red-500 px-3 py-1 rounded border border-red-800">ALLOCATED</span>
              </div>
            </div>

            <button className="w-full bg-[#e31837] text-white py-3 font-bold rounded hover:bg-red-700 transition-colors">
              Apply for Available Territory
            </button>
          </div>

          {/* Earnings Example */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white inline-flex flex-col leading-tight">
              Transparent Earnings & Growth
              <div className="w-16 h-[3px] bg-[#e31837] mt-4"></div>
            </h2>
            <p className="text-gray-400 mb-8 font-medium leading-relaxed">
              Our advanced franchise portal gives you complete visibility over your performance, handled shipments, and daily commission calculations.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400 mb-2 font-bold uppercase">Shipments Handled</p>
                <p className="text-4xl font-black text-white">1,850</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <p className="text-sm text-gray-400 mb-2 font-bold uppercase">Commission Earned</p>
                <p className="text-4xl font-black text-green-400">₹48,500</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700 col-span-2">
                <p className="text-sm text-gray-400 mb-2 font-bold uppercase">Pending Settlement</p>
                <div className="flex justify-between items-end">
                  <p className="text-4xl font-black text-orange-400">₹8,200</p>
                  <button className="text-sm bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded text-white font-bold transition-colors">View Ledger</button>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-800 flex gap-3">
              <ShieldCheck className="w-5 h-5 text-gray-500 shrink-0" />
              <p className="text-xs text-gray-500 font-medium">
                Note: Earnings depicted are examples only. Actual earnings depend on applicable franchise agreements, territory volume, and commission rules set by Commerza Global.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Franchise Application Form & Workflow */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          
          {/* Workflow Timeline */}
          <div className="mb-20 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">How the Franchise Model Works</h2>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 max-w-4xl mx-auto">
              <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-200 font-bold text-sm">Apply</div>
              <ArrowRight className="w-4 h-4 text-[#e31837]" />
              <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-200 font-bold text-sm">Select Territory</div>
              <ArrowRight className="w-4 h-4 text-[#e31837]" />
              <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-200 font-bold text-sm">Submit Details</div>
              <ArrowRight className="w-4 h-4 text-[#e31837]" />
              <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-200 font-bold text-sm">Upload KYC</div>
              <ArrowRight className="w-4 h-4 text-[#e31837]" />
              <div className="bg-white px-4 py-2 rounded shadow-sm border border-gray-200 font-bold text-sm">Review</div>
              <ArrowRight className="w-4 h-4 text-[#e31837]" />
              <div className="bg-[#111111] text-white px-4 py-2 rounded shadow-sm font-bold text-sm">Start Operations</div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-12 gap-12">
            {/* Form Mockup */}
            <div className="xl:col-span-8 bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
              <h3 className="text-2xl font-bold mb-8 text-gray-900 flex items-center gap-3">
                <FileText className="w-6 h-6 text-[#e31837]" /> Franchise Application Form
              </h3>
              
              <div className="space-y-8">
                {/* Personal & Business Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Personal Details</h4>
                    <div className="space-y-4">
                      <input type="text" placeholder="Full Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                      <input type="tel" placeholder="Mobile Number" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                      <input type="email" placeholder="Email Address" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Business Details</h4>
                    <div className="space-y-4">
                      <input type="text" placeholder="Business Name (Optional)" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                      <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]">
                        <option>Business Type</option>
                        <option>Proprietorship</option>
                        <option>Partnership</option>
                        <option>Private Limited</option>
                      </select>
                      <div className="flex gap-4">
                        <input type="text" placeholder="GST Number" className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                        <input type="text" placeholder="PAN Number" className="w-1/2 p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Territory Hierarchy */}
                <div>
                  <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Territory Preference</h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>State</option></select>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>Zone</option></select>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>District</option></select>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>Taluk</option></select>
                    <select className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]"><option>Town</option></select>
                    <input type="text" placeholder="Pincode" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none focus:border-[#e31837]" />
                  </div>
                </div>

                {/* Infrastructure & Documents */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Infrastructure (Expected)</h4>
                    <div className="space-y-4">
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Office Available?</label>
                        <label className="flex items-center gap-2 text-sm"><input type="checkbox" /> Storage Space?</label>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <input type="number" placeholder="Staff Count" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm" />
                        <input type="number" placeholder="Vehicles Count" className="w-full p-3 bg-gray-50 border border-gray-200 rounded outline-none text-sm" />
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-700 mb-4 text-sm uppercase tracking-wider border-b border-gray-100 pb-2">Required Documents (KYC)</h4>
                    <ul className="text-sm text-gray-600 space-y-2 font-medium">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> PAN & Aadhaar (Authorised ID)</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> GST Certificate</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Address Proof</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Cancelled Cheque / Bank Details</li>
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center gap-6 pt-6 border-t border-gray-100">
                  <label className="flex items-center gap-2 text-sm text-gray-600 font-medium cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 accent-[#e31837]" />
                    I agree to the Franchise Terms & Conditions
                  </label>
                  <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-200 w-full sm:w-auto">
                    Submit Application
                  </button>
                </div>
              </div>
            </div>

            {/* Status Tracking Mockup */}
            <div className="xl:col-span-4 space-y-8">
              <div className="bg-[#111111] p-6 rounded-2xl shadow-xl border border-gray-800 text-white">
                <h3 className="font-bold text-lg mb-6 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-[#e31837]" /> Application Status
                </h3>
                <div className="bg-gray-800 p-4 rounded-lg mb-6">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Application ID</p>
                  <p className="font-black font-mono tracking-wider">FR-2026-00451</p>
                  <div className="mt-3 pt-3 border-t border-gray-700">
                    <p className="text-xs text-gray-400 font-bold uppercase mb-1">Territory</p>
                    <p className="font-bold text-sm">Neyyattinkara, Kerala</p>
                  </div>
                </div>
                
                <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gray-700">
                  <div className="relative flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-green-500 z-10 shrink-0 border-4 border-[#111111]"></div>
                    <p className="text-sm font-bold text-gray-300">Application Submitted</p>
                  </div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-green-500 z-10 shrink-0 border-4 border-[#111111]"></div>
                    <p className="text-sm font-bold text-gray-300">KYC Verification</p>
                  </div>
                  <div className="relative flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full bg-[#e31837] z-10 shrink-0 border-4 border-[#111111] shadow-[0_0_10px_rgba(227,24,55,0.8)]"></div>
                    <div className="bg-gray-800 px-3 py-1.5 rounded border border-red-900/50">
                      <p className="text-sm font-bold text-[#e31837]">UNDER REVIEW</p>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-4 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-gray-700 z-10 shrink-0 border-4 border-[#111111]"></div>
                    <p className="text-sm font-bold text-gray-400">Territory Allocation</p>
                  </div>
                  <div className="relative flex items-center gap-4 opacity-40">
                    <div className="w-5 h-5 rounded-full bg-gray-700 z-10 shrink-0 border-4 border-[#111111]"></div>
                    <p className="text-sm font-bold text-gray-400">Agreement & Activation</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">Operations Preview</h3>
                <ul className="text-sm text-gray-600 font-medium space-y-3">
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">Booking <ArrowRight className="w-4 h-4 text-gray-300" /></li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">Pickup Management <ArrowRight className="w-4 h-4 text-gray-300" /></li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">Manifest Management <ArrowRight className="w-4 h-4 text-gray-300" /></li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">Delivery Assignment <ArrowRight className="w-4 h-4 text-gray-300" /></li>
                  <li className="flex justify-between items-center border-b border-gray-100 pb-2">COD Remittance <ArrowRight className="w-4 h-4 text-gray-300" /></li>
                  <li className="flex justify-between items-center text-[#e31837]">Commission Statement <ArrowRight className="w-4 h-4 text-[#e31837]" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-[#111111] text-center border-t-4 border-[#e31837]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-8 leading-tight">
            Start Your Logistics Business with Commerza Global
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Apply Now
            </button>
            <button className="bg-transparent border border-gray-600 text-white px-8 py-4 font-bold rounded hover:bg-gray-800 transition-colors">
              Talk to Franchise Team
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
