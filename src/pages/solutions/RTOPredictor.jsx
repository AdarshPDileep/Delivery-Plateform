import React, { useEffect } from 'react';
import { 
  Crosshair, Brain, ShieldAlert, FileWarning, Search, Phone, 
  MapPin, AlertTriangle, ArrowRight, Activity, BarChart3, 
  TrendingDown, CheckCircle2, AlertOctagon, TrendingUp
} from 'lucide-react';

export default function RTOPredictor() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full font-sans bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <section className="bg-white text-gray-900 pt-32 pb-20 md:pt-[140px] md:pb-28 px-6 relative border-b border-gray-200">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-50"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-100 text-[#e31837] font-bold text-sm tracking-wide mb-8">
            <Brain className="w-4 h-4" /> SMART ANALYTICS
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-8">
            Reduce Returns with <br /><span className="text-[#e31837]">Smarter RTO Insights</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-10 max-w-2xl font-medium leading-relaxed">
            Identify high-risk orders before dispatch and take preventive action to improve delivery success and reduce logistics costs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Explore RTO Insights
            </button>
            <button className="bg-white text-gray-900 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors border border-gray-300">
              Request Demo
            </button>
          </div>
        </div>
      </section>

      {/* What Is RTO Predictor? */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">What Is RTO Predictor?</h2>
          <p className="text-xl text-gray-600 leading-relaxed font-medium">
            RTO Predictor analyses shipment-related factors and assigns a risk score to help businesses identify orders that may have a higher chance of <span className="font-bold text-[#e31837]">Return to Origin</span>.
          </p>
        </div>
      </section>

      {/* How It Works & Risk Factors */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* How It Works */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">How It Works</h2>
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px before:h-full before:w-0.5 before:bg-gradient-to-b before:from-[#e31837] before:via-red-300 before:to-transparent">
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#e31837] flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <span className="font-bold text-[#e31837]">1</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                  <h3 className="font-bold text-gray-900">Order Created</h3>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#e31837] flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <span className="font-bold text-[#e31837]">2</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1">
                  <h3 className="font-bold text-gray-900">Shipment Data Analysed</h3>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#e31837] border-2 border-[#e31837] flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <span className="font-bold text-white">3</span>
                </div>
                <div className="bg-red-50 p-4 rounded-lg shadow-sm border border-red-100 flex-1">
                  <h3 className="font-bold text-red-900">RTO Risk Score Generated</h3>
                </div>
              </div>
              <div className="relative flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-red-300 flex items-center justify-center shrink-0 z-10 shadow-sm">
                  <span className="font-bold text-gray-500">4</span>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex-1 opacity-70">
                  <h3 className="font-bold text-gray-700">Recommended Action Taken</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Risk Factors */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Key Risk Factors Evaluated</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <FileWarning className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">Incomplete Address</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <MapPin className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">High-RTO Pincode</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <AlertTriangle className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">Previous Failed Deliveries</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <Phone className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">Invalid Phone Number</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <ShieldAlert className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">Multiple Delivery Attempts</span>
              </div>
              <div className="bg-white p-4 rounded-lg border border-gray-200 flex flex-col gap-2 shadow-sm">
                <Activity className="w-6 h-6 text-[#e31837]" />
                <span className="font-bold text-sm text-gray-700">Customer Availability</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* RTO Dashboard Preview */}
      <section className="py-24 px-6 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">RTO Analytics Dashboard</h2>
          
          <div className="bg-gray-800 rounded-2xl shadow-2xl border border-gray-700 p-6 overflow-hidden">
            
            {/* Metric Cards */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Orders Analysed</p>
                <p className="text-2xl font-black text-white">8,450</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-red-900/50">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center gap-1"><AlertOctagon className="w-3 h-3 text-red-500"/> High Risk</p>
                <p className="text-2xl font-black text-red-400">620</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-orange-900/50">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center gap-1"><AlertTriangle className="w-3 h-3 text-orange-500"/> Medium Risk</p>
                <p className="text-2xl font-black text-orange-400">1,280</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-green-900/50">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1 flex items-center gap-1"><CheckCircle2 className="w-3 h-3 text-green-500"/> Low Risk</p>
                <p className="text-2xl font-black text-green-400">6,550</p>
              </div>
              <div className="bg-gray-900 p-4 rounded-lg border border-gray-700">
                <p className="text-xs text-gray-400 font-bold uppercase mb-1">Current RTO Rate</p>
                <p className="text-2xl font-black text-white">5.8%</p>
              </div>
            </div>

            {/* Data Table */}
            <div className="bg-gray-900 rounded-lg border border-gray-700 overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-gray-800 text-xs uppercase tracking-wider text-gray-500 bg-gray-900/50">
                    <th className="p-4 font-bold">Order ID</th>
                    <th className="p-4 font-bold">Customer</th>
                    <th className="p-4 font-bold">Pincode</th>
                    <th className="p-4 font-bold">Payment</th>
                    <th className="p-4 font-bold">Risk Score</th>
                    <th className="p-4 font-bold">Risk Level</th>
                    <th className="p-4 font-bold">Recommended Action</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="p-4 font-medium text-white">ORD1024</td>
                    <td className="p-4 text-gray-400">Rahul M.</td>
                    <td className="p-4 text-gray-400">695001</td>
                    <td className="p-4 text-gray-400">COD</td>
                    <td className="p-4 font-bold text-red-400">84%</td>
                    <td className="p-4"><span className="px-2 py-1 rounded text-xs font-bold bg-red-900/30 text-red-400 border border-red-800">HIGH</span></td>
                    <td className="p-4"><button className="text-xs font-bold bg-gray-800 px-3 py-1.5 rounded hover:bg-gray-700 text-white">Verify Phone</button></td>
                  </tr>
                  <tr className="border-b border-gray-800 hover:bg-gray-800/50">
                    <td className="p-4 font-medium text-white">ORD1026</td>
                    <td className="p-4 text-gray-400">Anjali S.</td>
                    <td className="p-4 text-gray-400">673001</td>
                    <td className="p-4 text-gray-400">COD</td>
                    <td className="p-4 font-bold text-orange-400">58%</td>
                    <td className="p-4"><span className="px-2 py-1 rounded text-xs font-bold bg-orange-900/30 text-orange-400 border border-orange-800">MEDIUM</span></td>
                    <td className="p-4"><button className="text-xs font-bold bg-gray-800 px-3 py-1.5 rounded hover:bg-gray-700 text-white">Send SMS</button></td>
                  </tr>
                  <tr className="hover:bg-gray-800/50">
                    <td className="p-4 font-medium text-white">ORD1025</td>
                    <td className="p-4 text-gray-400">Arun K.</td>
                    <td className="p-4 text-gray-400">682020</td>
                    <td className="p-4 text-gray-400">Prepaid</td>
                    <td className="p-4 font-bold text-green-400">18%</td>
                    <td className="p-4"><span className="px-2 py-1 rounded text-xs font-bold bg-green-900/30 text-green-400 border border-green-800">LOW</span></td>
                    <td className="p-4"><span className="text-xs text-gray-500 font-bold uppercase">Proceed</span></td>
                  </tr>
                </tbody>
              </table>
            </div>

          </div>
        </div>
      </section>

      {/* Recommended Actions & Benefits */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Recommended Actions */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Recommended Actions</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 bg-red-50 p-4 rounded-r-lg">
                <h3 className="font-bold text-red-900 flex items-center gap-2 mb-2"><AlertOctagon className="w-4 h-4"/> For High Risk Orders (61-100%)</h3>
                <ul className="list-disc list-inside text-sm text-red-800 space-y-1 ml-2">
                  <li>Call customer before dispatch</li>
                  <li>Manually verify delivery address</li>
                  <li>Convert COD to prepaid if possible</li>
                </ul>
              </div>
              <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
                <h3 className="font-bold text-orange-900 flex items-center gap-2 mb-2"><AlertTriangle className="w-4 h-4"/> For Medium Risk Orders (31-60%)</h3>
                <ul className="list-disc list-inside text-sm text-orange-800 space-y-1 ml-2">
                  <li>Send automated confirmation message</li>
                  <li>Monitor shipment closely in transit</li>
                </ul>
              </div>
              <div className="border-l-4 border-green-500 bg-green-50 p-4 rounded-r-lg">
                <h3 className="font-bold text-green-900 flex items-center gap-2 mb-2"><CheckCircle2 className="w-4 h-4"/> For Low Risk Orders (0-30%)</h3>
                <p className="text-sm text-green-800 ml-2">Proceed with standard shipment processing.</p>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div>
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Why Use RTO Predictor?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <TrendingDown className="w-8 h-8 text-green-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Reduce RTO Losses</h3>
                <p className="text-sm text-gray-600">Cut down on unnecessary shipping and return costs by avoiding failed deliveries.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <TrendingUp className="w-8 h-8 text-blue-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Improve Delivery Success</h3>
                <p className="text-sm text-gray-600">Ensure a higher percentage of orders reach the customer successfully.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <MapPin className="w-8 h-8 text-purple-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Identify Risky Locations</h3>
                <p className="text-sm text-gray-600">Gain insights into pincodes and states with historically high return rates.</p>
              </div>
              <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                <ShieldAlert className="w-8 h-8 text-orange-600 mb-3" />
                <h3 className="font-bold text-gray-900 mb-2">Better Verification</h3>
                <p className="text-sm text-gray-600">Focus your manual verification efforts only on the orders that actually need it.</p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-6 bg-gray-100 text-center border-t border-gray-200">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-8">
            Reduce failed deliveries before they happen.
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-[#e31837] text-white px-8 py-4 font-bold rounded hover:bg-red-700 transition-colors shadow-lg">
              Explore RTO Analytics
            </button>
            <button className="bg-white text-gray-900 border border-gray-300 px-8 py-4 font-bold rounded hover:bg-gray-50 transition-colors">
              Request Demo
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
