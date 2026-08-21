import React, { useState } from 'react';
import { Map, Plus, Search, ChevronRight, Folder, MapPin, Map as MapIcon, Globe, Navigation, ChevronDown } from 'lucide-react';

export default function GeoMaster() {
  const [activeTab, setActiveTab] = useState('tree'); // 'tree' | 'states' | 'zones' | 'districts' | 'taluks' | 'towns' | 'pincodes'
  const [expandedNodes, setExpandedNodes] = useState({ state: true, zone: true, district: true, taluk: true, town: true });

  const toggleNode = (level) => {
    setExpandedNodes(prev => ({ ...prev, [level]: !prev[level] }));
  };

  const tabs = [
    { id: 'tree', label: 'Hierarchy Tree' },
    { id: 'states', label: 'States' },
    { id: 'zones', label: 'Zones' },
    { id: 'districts', label: 'Districts' },
    { id: 'taluks', label: 'Taluks' },
    { id: 'towns', label: 'Towns' },
    { id: 'pincodes', label: 'Pincodes' },
  ];

  return (
    <div className="p-8 w-full mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Geography Management</h1>
          <p className="text-gray-500">Configure the 5-level geographic network hierarchy.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search pincode or area..." 
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#111111] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-lg">
            <Plus className="w-4 h-4" /> Add Geography
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-1 bg-gray-100 p-1 rounded-xl mb-8 overflow-x-auto w-max max-w-full">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-2.5 rounded-lg text-sm font-bold whitespace-nowrap transition-all ${
              activeTab === tab.id 
                ? 'bg-white text-gray-900 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-200/50'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 min-h-[500px]">
        {activeTab === 'tree' ? (
          <div className="p-6">
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Network Hierarchy Map</h2>
              <button className="text-sm font-medium text-[#E31837] hover:underline">Expand All</button>
            </div>

            {/* Tree UI Mockup */}
            <div className="space-y-2">
              {/* State Level */}
              <div>
                <div 
                  className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                  onClick={() => toggleNode('state')}
                >
                  {expandedNodes.state ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                  <Globe className="w-5 h-5 text-indigo-500" />
                  <span className="font-bold text-gray-900">Kerala</span>
                  <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">State</span>
                </div>

                {/* Zone Level */}
                {expandedNodes.state && (
                  <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-2 mt-2">
                    <div>
                      <div 
                        className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                        onClick={() => toggleNode('zone')}
                      >
                        {expandedNodes.zone ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                        <MapIcon className="w-5 h-5 text-blue-500" />
                        <span className="font-bold text-gray-900">South Zone</span>
                        <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">Zone</span>
                      </div>

                      {/* District Level */}
                      {expandedNodes.zone && (
                        <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-2 mt-2">
                          <div>
                            <div 
                              className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                              onClick={() => toggleNode('district')}
                            >
                              {expandedNodes.district ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                              <Folder className="w-5 h-5 text-emerald-500" />
                              <span className="font-bold text-gray-900">Thiruvananthapuram</span>
                              <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">District</span>
                            </div>

                            {/* Taluk Level */}
                            {expandedNodes.district && (
                              <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-2 mt-2">
                                <div>
                                  <div 
                                    className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                    onClick={() => toggleNode('taluk')}
                                  >
                                    {expandedNodes.taluk ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                    <Navigation className="w-5 h-5 text-amber-500" />
                                    <span className="font-bold text-gray-900">Neyyattinkara Taluk</span>
                                    <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">Taluk</span>
                                  </div>

                                  {/* Town Level */}
                                  {expandedNodes.taluk && (
                                    <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-2 mt-2">
                                      <div>
                                        <div 
                                          className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer"
                                          onClick={() => toggleNode('town')}
                                        >
                                          {expandedNodes.town ? <ChevronDown className="w-4 h-4 text-gray-400" /> : <ChevronRight className="w-4 h-4 text-gray-400" />}
                                          <MapPin className="w-5 h-5 text-[#E31837]" />
                                          <span className="font-bold text-gray-900">Neyyattinkara Town</span>
                                          <span className="text-xs font-medium text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full ml-2">Town</span>
                                        </div>

                                        {/* Pincodes (Leaves) */}
                                        {expandedNodes.town && (
                                          <div className="ml-8 border-l-2 border-gray-100 pl-4 space-y-2 mt-2">
                                            {['695121', '695122', '695123'].map(pin => (
                                              <div key={pin} className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                                                <div className="flex items-center gap-2">
                                                  <div className="w-1.5 h-1.5 rounded-full bg-gray-400 ml-1.5 mr-1"></div>
                                                  <span className="font-medium text-gray-700">{pin}</span>
                                                </div>
                                                <span className="text-xs font-bold text-green-600 bg-green-50 px-2 py-1 rounded">Serviceable</span>
                                              </div>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-[400px] text-center">
            <Map className="w-16 h-16 text-gray-200 mb-4" />
            <h3 className="text-xl font-bold text-gray-900 mb-2 capitalize">{activeTab} List View</h3>
            <p className="text-gray-500 max-w-sm mb-6">Manage all {activeTab} in a tabular format, configure serviceability and assign hubs.</p>
            <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-lg font-medium shadow-sm hover:bg-gray-50 transition-colors">
              View Data Table
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
