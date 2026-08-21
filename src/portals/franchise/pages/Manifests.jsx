import React, { useState } from 'react';
import { Truck, Package, Search, Plus, QrCode, FileText, ArrowRight } from 'lucide-react';

export default function Manifests() {
  const [activeTab, setActiveTab] = useState('outbound'); // 'inbound' | 'outbound' | 'bags' | 'manifests'

  return (
    <div className="p-8 w-full mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Manifests & Bags</h1>
          <p className="text-gray-500">Manage linehaul connections and hub-to-hub transfers.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
            <QrCode className="w-4 h-4" /> Scan AWB
          </button>
          <button className="flex items-center gap-2 bg-[#111111] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-lg">
            <Plus className="w-4 h-4" /> Create Bag
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 w-max">
        {['outbound', 'inbound', 'bags', 'manifests'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2.5 rounded-lg text-sm font-bold capitalize transition-all ${
              activeTab === tab 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[400px]">
        {activeTab === 'outbound' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Pending Outbound (To Hub)</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Scan or enter AWB..." 
                  className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-64"
                />
              </div>
            </div>
            
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">AWB Number</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Destination Pincode</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Weight</th>
                    <th className="px-6 py-3 text-xs font-bold text-gray-500 uppercase">Bag Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">CG8475928341</td>
                    <td className="px-6 py-4 text-gray-600">110001 (New Delhi)</td>
                    <td className="px-6 py-4 text-gray-600">1.2 kg</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                        Unbagged
                      </span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-bold text-gray-900">CG8475928342</td>
                    <td className="px-6 py-4 text-gray-600">400001 (Mumbai)</td>
                    <td className="px-6 py-4 text-gray-600">0.5 kg</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        Bagged (BG-001)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeTab === 'manifests' && (
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-gray-900">Linehaul Manifests</h2>
              <button className="flex items-center gap-2 bg-[#E31837] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#c0122e] transition-colors">
                <FileText className="w-4 h-4" /> Generate Manifest
              </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Manifest Card */}
              <div className="border border-gray-200 rounded-xl p-5 hover:border-gray-300 transition-colors shadow-sm">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-100 text-blue-800 mb-2">
                      In Transit
                    </span>
                    <h3 className="font-bold text-gray-900">MNF-2023-08-124</h3>
                  </div>
                  <Truck className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4 bg-gray-50 p-3 rounded-lg">
                  <span className="font-bold">BLR Hub</span>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                  <span className="font-bold">MAA Hub</span>
                </div>
                
                <div className="flex justify-between text-sm mb-4">
                  <span className="text-gray-500">Bags: <strong className="text-gray-900">14</strong></span>
                  <span className="text-gray-500">Weight: <strong className="text-gray-900">185 kg</strong></span>
                </div>
                
                <button className="w-full py-2 bg-white border border-gray-200 text-gray-700 font-medium text-sm rounded-lg hover:bg-gray-50 transition-colors">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Placeholders for 'inbound' and 'bags' tabs for the demo */}
        {(activeTab === 'inbound' || activeTab === 'bags') && (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <Package className="w-12 h-12 text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-gray-900 mb-1">No data available</h3>
            <p className="text-gray-500 max-w-sm">There are currently no {activeTab} records to display in this view.</p>
          </div>
        )}

      </div>
    </div>
  );
}
