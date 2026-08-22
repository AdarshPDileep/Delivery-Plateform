import React, { useEffect } from 'react';
import { 
  Building2, Briefcase, Settings, Map, FileText, Database, 
  BarChart4, ArrowRight, Truck, Globe, UploadCloud, Users, 
  PieChart, Activity, DollarSign, CloudRain, ShoppingCart, MessageSquare
} from 'lucide-react';

export default function B2BEnterprises() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-gray-50 text-gray-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-[140px] md:pb-32 px-6 border-b border-gray-200 bg-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8ed7c663e0?auto=format&fit=crop&w=1600&q=80')] bg-cover bg-center opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-[#e31837] font-bold text-sm tracking-wide mb-8 border border-red-200">
            <Building2 className="w-4 h-4" /> B2B & ENTERPRISE
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8 text-gray-900">
            Enterprise Logistics <br />Built for <span className="text-[#e31837]">Scale</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            Manage high-volume shipments, multiple locations, COD settlements, and business logistics from one unified platform.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg shadow-red-500/30">
              Request a Demo
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors border border-gray-300 shadow-sm">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Enterprise Use Cases */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <ShoppingCart className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">Ecommerce<br/>Businesses</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <Building2 className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">Retail<br/>Chains</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <Truck className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">Large<br/>Distributors</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <Settings className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">D2C<br/>Manufacturers</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <Map className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">Multi-Branch<br/>Businesses</span>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200 text-center hover:border-red-200 hover:shadow-md transition-all group">
              <Briefcase className="w-8 h-8 text-[#e31837] mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm text-gray-700">Corporate<br/>Shipping</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 px-6 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <h2 className="text-3xl font-bold mb-6 text-gray-900">Core Capabilities</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              A comprehensive suite of tools designed specifically for high-volume operations, simplifying everything from bulk bookings to advanced financial reconciliation.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <UploadCloud className="w-8 h-8 text-[#e31837] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Bulk Operations</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> CSV / Excel bulk upload</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Bulk AWB generation</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Bulk label printing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Mass pickup requests</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <DollarSign className="w-8 h-8 text-[#e31837] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">Custom Rate Cards</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Business-specific pricing</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Weight slab configurations</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Zone-wise routing rates</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Advanced COD charges</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <Database className="w-8 h-8 text-[#e31837] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">COD & Settlement</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> COD collected tracking</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Pending remittance views</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Detailed settlement history</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Downloadable statements</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <Globe className="w-8 h-8 text-[#e31837] mb-4" />
              <h3 className="text-xl font-bold mb-4 text-gray-900">API Integration</h3>
              <ul className="space-y-2 text-gray-600 text-sm font-medium">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Order Push API</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Shipment Creation API</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Label & Tracking APIs</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#e31837] rounded-full"></div> Real-time Webhooks</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Dashboard Preview (Mockup) */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Powerful Enterprise Dashboard</h2>
          
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Dashboard Header Mockup */}
            <div className="bg-gray-100 border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <div className="flex gap-4">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <div className="text-sm font-bold text-gray-500">overview.commerzaglobal.com</div>
              <div></div>
            </div>
            
            {/* Dashboard Content */}
            <div className="p-8">
              {/* Metric Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Monthly Shipments</p>
                  <p className="text-2xl font-black text-gray-900">24,850</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">In Transit</p>
                  <p className="text-2xl font-black text-blue-600">4,280</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Delivered</p>
                  <p className="text-2xl font-black text-green-600">18,450</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">RTO</p>
                  <p className="text-2xl font-black text-red-600">620</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">COD Collected</p>
                  <p className="text-2xl font-black text-gray-900">₹18.4L</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-xs text-gray-500 font-bold uppercase mb-1">Pending Settlement</p>
                  <p className="text-2xl font-black text-orange-600">₹3.2L</p>
                </div>
              </div>

              {/* Charts Mockup */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Bar Chart Mockup (Shipment Volume) */}
                <div className="lg:col-span-2 bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-sm font-bold text-gray-700 mb-6">Shipment Volume (Last 7 Days)</h3>
                  <div className="h-48 flex items-end justify-between gap-2">
                    <div className="w-full bg-red-100 rounded-t-sm h-[40%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[60%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[45%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[80%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[70%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[90%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                    <div className="w-full bg-red-100 rounded-t-sm h-[100%] relative group"><div className="absolute bottom-0 w-full bg-[#e31837] rounded-t-sm h-full group-hover:bg-red-600 transition-colors"></div></div>
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-gray-500 font-medium">
                    <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
                  </div>
                </div>

                {/* Status Breakdown Mockup */}
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex flex-col justify-center">
                  <h3 className="text-sm font-bold text-gray-700 mb-6">Status Breakdown</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1"><span className="text-green-600 font-bold">Delivered</span><span className="text-gray-900 font-bold">74%</span></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-green-500 w-[74%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1"><span className="text-blue-600 font-bold">In Transit</span><span className="text-gray-900 font-bold">18%</span></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-blue-500 w-[18%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1"><span className="text-yellow-600 font-bold">Exceptions</span><span className="text-gray-900 font-bold">5%</span></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-yellow-500 w-[5%]"></div></div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1"><span className="text-red-600 font-bold">RTO</span><span className="text-gray-900 font-bold">3%</span></div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden"><div className="h-full bg-[#e31837] w-[3%]"></div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations & Reports */}
      <section className="py-24 px-6 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Integrations */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Seamless Integrations</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <ShoppingCart className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">Ecommerce Platforms</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <Database className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">ERP / OMS</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <Globe className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">REST APIs</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <CloudRain className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">Webhooks</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <DollarSign className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">Payment Gateway</span>
              </div>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200 flex flex-col items-center justify-center gap-2 hover:border-red-200 transition-colors">
                <MessageSquare className="w-6 h-6 text-[#e31837]" />
                <span className="text-xs font-bold text-gray-700">SMS & WhatsApp</span>
              </div>
            </div>
          </div>

          {/* Reports */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900 flex items-center justify-between">
              Extensive Reporting
              <button className="text-sm bg-red-50 text-[#e31837] px-4 py-2 rounded font-bold border border-red-200 hover:bg-red-100 transition-colors">
                Export Options
              </button>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-red-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#e31837]" />
                  <span className="font-bold text-gray-700 text-sm">Shipment & Delivery Report</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-red-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#e31837]" />
                  <span className="font-bold text-gray-700 text-sm">COD & Settlement Report</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-red-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#e31837]" />
                  <span className="font-bold text-gray-700 text-sm">RTO & Exceptions Report</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl border border-gray-200 hover:border-red-200 transition-colors cursor-pointer">
                <div className="flex items-center gap-3">
                  <FileText className="w-5 h-5 text-[#e31837]" />
                  <span className="font-bold text-gray-700 text-sm">SLA Performance Report</span>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-100 text-center border-t border-gray-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-3xl mx-auto relative z-10">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 mb-8 leading-tight">
            Power your business with scalable logistics.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Request Demo
            </button>
            <button className="bg-white border border-gray-300 text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors shadow-sm">
              Contact Enterprise Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
