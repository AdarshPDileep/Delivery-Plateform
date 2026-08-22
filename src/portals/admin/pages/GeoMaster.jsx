import React, { useState } from 'react';
import { 
  Plus, Search, Globe, Map as MapIcon, Folder, Navigation, 
  MapPin, CheckCircle2, MoreVertical, Edit, Maximize2, Filter
} from 'lucide-react';

const MOCK_DATA = [
  {
    id: 'kerala',
    type: 'state',
    name: 'Kerala',
    children: [
      {
        id: 'south-zone',
        type: 'zone',
        name: 'South Zone',
        children: [
          {
            id: 'tvm',
            type: 'district',
            name: 'Thiruvananthapuram',
            children: [
              {
                id: 'neyyattinkara-taluk',
                type: 'taluk',
                name: 'Neyyattinkara Taluk',
                children: [
                  {
                    id: 'neyyattinkara-town',
                    type: 'town',
                    name: 'Neyyattinkara Town',
                    children: [
                      { id: '695121', type: 'pincode', name: '695121', serviceable: true },
                      { id: '695122', type: 'pincode', name: '695122', serviceable: true },
                      { id: '695123', type: 'pincode', name: '695123', serviceable: true },
                    ]
                  },
                  {
                    id: 'parassala-town',
                    type: 'town',
                    name: 'Parassala Town',
                    children: [
                      { id: '695502', type: 'pincode', name: '695502', serviceable: true },
                      { id: '695503', type: 'pincode', name: '695503', serviceable: false }
                    ]
                  }
                ]
              },
              {
                id: 'trivandrum-taluk',
                type: 'taluk',
                name: 'Trivandrum Taluk',
                children: [
                  {
                    id: 'trivandrum-city',
                    type: 'town',
                    name: 'Trivandrum City',
                    children: [
                      { id: '695001', type: 'pincode', name: '695001', serviceable: true }
                    ]
                  }
                ]
              }
            ]
          },
          {
            id: 'kollam',
            type: 'district',
            name: 'Kollam',
            children: [
               {
                 id: 'kollam-taluk',
                 type: 'taluk',
                 name: 'Kollam Taluk',
                 children: []
               }
            ]
          }
        ]
      },
      {
        id: 'north-zone',
        type: 'zone',
        name: 'North Zone',
        children: []
      }
    ]
  },
  {
    id: 'tamil-nadu',
    type: 'state',
    name: 'Tamil Nadu',
    children: []
  }
];

const ICONS = {
  state: Globe,
  zone: MapIcon,
  district: Folder,
  taluk: Navigation,
  town: MapPin,
  pincode: MapPin
};

const COLORS = {
  state: 'text-indigo-500',
  zone: 'text-blue-500',
  district: 'text-emerald-500',
  taluk: 'text-amber-500',
  town: 'text-[#E31837]',
  pincode: 'text-gray-500'
};

const TAB_ITEMS = [
  { id: 'tree', label: 'Hierarchy Tree' },
  { id: 'states', label: 'States' },
  { id: 'zones', label: 'Zones' },
  { id: 'districts', label: 'Districts' },
  { id: 'taluks', label: 'Taluks' },
  { id: 'towns', label: 'Towns' },
  { id: 'pincodes', label: 'Pincodes' },
];

export default function GeoMaster() {
  const [activeTab, setActiveTab] = useState('tree');
  // Initialize path with Kerala -> South Zone -> TVM -> Neyyattinkara Taluk -> Neyyattinkara Town
  const [activePath, setActivePath] = useState([
    MOCK_DATA[0],
    MOCK_DATA[0].children[0],
    MOCK_DATA[0].children[0].children[0],
    MOCK_DATA[0].children[0].children[0].children[0],
    MOCK_DATA[0].children[0].children[0].children[0].children[0]
  ]);

  const selectedNode = activePath[activePath.length - 1] || { children: MOCK_DATA, type: 'root', name: 'India' };
  
  const handlePathClick = (index) => {
    setActivePath(activePath.slice(0, index + 1));
  };

  const handleChildClick = (child) => {
    if (child.type === 'pincode') return; // Don't drill down into pincodes
    setActivePath([...activePath, child]);
  };

  return (
    <div className="p-8 w-full mx-auto animate-fade-in bg-gray-50 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Geography Management</h1>
          <p className="text-gray-500 text-sm">Configure the 5-level geographic network hierarchy.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search pincode or area..." 
              className="pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-72 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-black transition-colors shadow-md">
            <Plus className="w-4 h-4" /> Add Geography
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-5 gap-4 mb-8">
        {[
          { label: 'States', value: '28', icon: Globe, color: 'text-[#E31837]', bg: 'bg-red-50' },
          { label: 'Zones', value: '72', icon: MapIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
          { label: 'Districts', value: '687', icon: Folder, color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { label: 'Towns', value: '3,842', icon: MapPin, color: 'text-purple-500', bg: 'bg-purple-50' },
          { label: 'Serviceable Pincodes', value: '1,25,673', icon: CheckCircle2, color: 'text-amber-500', bg: 'bg-amber-50' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
              <p className="text-xs text-gray-400 mt-1">Total {stat.label.toLowerCase()}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {TAB_ITEMS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-[#E31837] text-[#E31837]' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      {activeTab === 'tree' ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-[700px]">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Geographic Network</h2>
            <button className="flex items-center gap-2 text-sm font-medium text-[#E31837] hover:underline">
              Expand All <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-0">
            {/* Column 1: Hierarchy Explorer */}
            <div className="md:col-span-3 border-r border-gray-100 md:pr-6 flex flex-col h-full overflow-y-auto">
              <h3 className="text-sm font-bold text-gray-900 mb-1">Hierarchy Explorer</h3>
              <p className="text-xs text-gray-500 mb-6">Navigate through the geographic hierarchy</p>
              
              <div className="space-y-4 relative">
                {/* Connecting Line */}
                <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 z-0 hidden lg:block"></div>
                
                {activePath.map((node, index) => {
                  const NodeIcon = ICONS[node.type];
                  const isActive = index === activePath.length - 1;
                  return (
                    <div 
                      key={node.id} 
                      className={`relative z-10 flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${
                        isActive 
                          ? 'border-red-200 bg-red-50 shadow-sm' 
                          : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'
                      }`}
                      onClick={() => handlePathClick(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md bg-white border ${isActive ? 'border-red-100' : 'border-gray-100'}`}>
                           <NodeIcon className={`w-4 h-4 ${COLORS[node.type]}`} />
                        </div>
                        <span className={`font-semibold text-sm ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>{node.name}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">{node.type}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Child Nodes */}
            <div className="md:col-span-4 border-r border-gray-100 md:px-6 flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Child {selectedNode.type === 'town' ? 'Pincodes' : 'Regions'} <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ml-2">{selectedNode.children?.length || 0}</span></h3>
                  <p className="text-xs text-gray-500 mt-1">Under {selectedNode.name}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">
                    <Search className="w-4 h-4" />
                  </button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">
                    <Filter className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3 pb-6">
                {selectedNode.children && selectedNode.children.map((child, index) => (
                  <div 
                    key={child.id} 
                    className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all"
                    onClick={() => handleChildClick(child)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-gray-400 w-4">{index + 1}</span>
                      <span className="font-semibold text-sm text-gray-800">{child.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {child.serviceable !== false ? (
                        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Serviceable
                        </div>
                      ) : (
                        <div className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-medium">
                          <CheckCircle2 className="w-3 h-3" />
                          Unserviceable
                        </div>
                      )}
                      <button className="text-gray-400 hover:text-gray-600 p-1">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
                
                {(!selectedNode.children || selectedNode.children.length === 0) && (
                  <div className="text-center py-12">
                    <p className="text-sm text-gray-500">No child items found.</p>
                  </div>
                )}
              </div>
            </div>

            {/* Column 3: Node Details */}
            <div className="md:col-span-5 md:pl-6 flex flex-col h-full overflow-y-auto">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className={`p-2.5 rounded-lg bg-red-50`}>
                       {React.createElement(ICONS[selectedNode.type] || Globe, { className: `w-6 h-6 text-[#E31837]` })}
                   </div>
                   <div>
                     <div className="flex items-center gap-2">
                       <h2 className="text-lg font-bold text-gray-900">{selectedNode.name}</h2>
                       <span className="text-[10px] uppercase font-bold text-[#E31837] bg-red-50 border border-red-100 px-2 py-0.5 rounded">{selectedNode.type}</span>
                     </div>
                     <p className="text-xs text-gray-500 mt-1">Overview & Status</p>
                   </div>
                </div>
                <div className="flex gap-2">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E31837] text-white rounded text-sm font-medium hover:bg-red-600 transition-colors shadow-sm">
                    {selectedNode.type === 'town' ? 'Add Pincode' : 'Add Child'}
                  </button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50">
                    <MoreVertical className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Hierarchy Table */}
              <div className="mb-8 border-b border-gray-100 pb-8">
                 <table className="w-full text-sm">
                   <tbody>
                     {activePath.map((node) => (
                       <tr key={node.id} className="border-b border-gray-50 last:border-0">
                         <td className="py-2.5 text-gray-500 capitalize w-32">{node.type}</td>
                         <td className="py-2.5 font-medium text-gray-900">{node.name}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-gray-100 rounded-lg p-4 flex items-center gap-4 bg-gray-50/50">
                  <div className="bg-purple-100 p-2.5 rounded-lg text-purple-600">
                     <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Total {selectedNode.type === 'town' ? 'Pincodes' : 'Children'}</p>
                    <p className="text-xl font-bold text-gray-900 mt-0.5">{selectedNode.children?.length || 0}</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Under this {selectedNode.type}</p>
                  </div>
                </div>
                <div className="border border-green-100 rounded-lg p-4 flex items-center gap-4 bg-green-50/30">
                  <div className="bg-green-100 p-2.5 rounded-lg text-green-600">
                     <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Serviceable {selectedNode.type === 'town' ? 'Pincodes' : 'Children'}</p>
                    <p className="text-xl font-bold text-gray-900 mt-0.5">{selectedNode.children?.filter(c => c.serviceable !== false).length || 0}</p>
                    <p className="text-[10px] text-green-600 mt-1 uppercase tracking-wider font-bold">
                       {selectedNode.children?.length ? Math.round((selectedNode.children.filter(c => c.serviceable !== false).length / selectedNode.children.length) * 100) : 0}% Serviceable
                    </p>
                  </div>
                </div>
              </div>

              {/* List Details */}
              <div className="pb-6">
                <h3 className="text-sm font-bold text-gray-900 mb-4 pb-2 border-b border-gray-100">{selectedNode.type === 'town' ? 'Pincode Serviceability' : 'Child Status'}</h3>
                <div className="space-y-1">
                  {selectedNode.children && selectedNode.children.map(child => (
                    <div key={child.id} className="flex items-center justify-between py-2.5 px-2 hover:bg-gray-50 rounded-lg transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`w-1.5 h-1.5 rounded-full ${child.serviceable !== false ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className="text-sm font-semibold text-gray-700">{child.name}</span>
                      </div>
                      {child.serviceable !== false ? (
                        <span className="text-[10px] font-bold text-green-600 bg-green-50 border border-green-100 px-2 py-1 rounded">Serviceable</span>
                      ) : (
                        <span className="text-[10px] font-bold text-red-600 bg-red-50 border border-red-100 px-2 py-1 rounded">Unserviceable</span>
                      )}
                    </div>
                  ))}
                  
                  {(!selectedNode.children || selectedNode.children.length === 0) && (
                    <p className="text-sm text-gray-500">No child items found.</p>
                  )}
                </div>
                
                {selectedNode.children && selectedNode.children.length > 0 && selectedNode.children.every(c => c.serviceable !== false) && (
                  <div className="mt-6 flex items-center gap-2 text-xs font-medium text-green-700 bg-green-50 p-3 rounded-lg border border-green-100">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    All {selectedNode.type === 'town' ? 'pincodes in this town' : 'children'} are serviceable
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 h-[500px] flex flex-col items-center justify-center text-center p-8">
           <MapIcon className="w-12 h-12 text-gray-300 mb-4" />
           <h3 className="text-lg font-bold text-gray-900 mb-2 capitalize">{activeTab} List View</h3>
           <p className="text-sm text-gray-500 max-w-sm mb-6">Manage all {activeTab} in a tabular format, configure serviceability and assign hubs. This section is currently under development.</p>
           <button 
              className="bg-white border border-gray-200 text-gray-700 px-6 py-2 rounded-lg text-sm font-medium shadow-sm hover:bg-gray-50 transition-colors"
              onClick={() => setActiveTab('tree')}
           >
             Go Back to Hierarchy Tree
           </button>
        </div>
      )}
    </div>
  );
}
