import React, { useState } from 'react';
import { 
  Plus, Edit, MapPin, Search, Filter, FileSpreadsheet, FileText, 
  Store, Waypoints, Truck, Eye, MoreVertical, Building2, Package, 
  User, Phone, ChevronLeft, ChevronRight, ChevronDown 
} from 'lucide-react';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { useToast } from '../../../context/ToastContext';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';

export default function HubMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [activeTab, setActiveTab] = useState('hubs');
  const { addToast } = useToast();

  const tableData = [
    { id: 'HB001', name: 'Mumbai Central Hub', type: 'Hub', location: 'Andheri MIDC, Mumbai', capacity: '5,000', manager: 'Rahul Sharma', phone: '+91 98765 43210', status: 'Active', icon: Building2 },
    { id: 'HB002', name: 'Pune Branch', type: 'Branch', location: 'Hinjewadi Phase 2, Pune', capacity: '2,000', manager: 'Sneha Patil', phone: '+91 87654 32109', status: 'Active', icon: Store },
    { id: 'HB003', name: 'Bangalore Sorting Center', type: 'Sorting Center', location: 'Electronic City, Bangalore', capacity: '4,000', manager: 'Vikram Rao', phone: '+91 99876 54321', status: 'Active', icon: Waypoints },
    { id: 'HB004', name: 'Delhi North Hub', type: 'Hub', location: 'Karol Bagh, Delhi', capacity: '3,500', manager: 'Amit Verma', phone: '+91 96543 21098', status: 'Active', icon: Building2 },
    { id: 'HB005', name: 'Hyderabad DC', type: 'Delivery Center', location: 'Madhapur, Hyderabad', capacity: '1,500', manager: 'Kiran Reddy', phone: '+91 91234 56789', status: 'Active', icon: Truck },
    { id: 'HB006', name: 'Chennai Branch', type: 'Branch', location: 'Guindy, Chennai', capacity: '1,800', manager: 'Priya Nair', phone: '+91 90987 65432', status: 'Active', icon: Store },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hub, Branch & Route Management</h1>
          <p className="text-gray-500 text-sm mt-1">Configure your physical network infrastructure and transit rules.</p>
        </div>
        <button 
          onClick={() => setActiveDrawer('new')}
          className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black transition-colors shadow-md text-sm"
        >
          <Plus className="w-4 h-4" /> Add Hub/Route
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837]">
             <Building2 className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-medium text-gray-500 mb-1">Total Hubs</p>
             <h3 className="text-2xl font-bold text-gray-900 leading-none mb-1">3</h3>
             <p className="text-[10px] font-bold text-green-600 flex items-center gap-1">↑ 20% <span className="text-gray-400 font-medium">vs last month</span></p>
           </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837]">
             <Store className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-medium text-gray-500 mb-1">Total Branches</p>
             <h3 className="text-2xl font-bold text-gray-900 leading-none mb-1">3</h3>
             <p className="text-[10px] font-bold text-green-600 flex items-center gap-1">↑ 20% <span className="text-gray-400 font-medium">vs last month</span></p>
           </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837]">
             <Waypoints className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-medium text-gray-500 mb-1">Active Routes</p>
             <h3 className="text-2xl font-bold text-gray-900 leading-none mb-1">28</h3>
             <p className="text-[10px] font-bold text-green-600 flex items-center gap-1">↑ 12% <span className="text-gray-400 font-medium">vs last month</span></p>
           </div>
        </div>
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
           <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837]">
             <Package className="w-6 h-6" />
           </div>
           <div>
             <p className="text-xs font-medium text-gray-500 mb-1">Total Capacity (pkgs/day)</p>
             <h3 className="text-2xl font-bold text-gray-900 leading-none mb-1">17,800</h3>
             <p className="text-[10px] font-bold text-green-600 flex items-center gap-1">↑ 15% <span className="text-gray-400 font-medium">vs last month</span></p>
           </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-8 border-b border-gray-200">
        {[
          { id: 'hubs', label: 'Hubs & Branches' },
          { id: 'routes', label: 'Network Routes' },
          { id: 'tat', label: 'TAT Matrix' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`pb-4 text-sm font-bold transition-colors relative ${
              activeTab === tab.id ? 'text-[#E31837]' : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31837]"></div>
            )}
          </button>
        ))}
      </div>

      {/* Main Table Area */}
      {activeTab === 'hubs' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
          
          {/* Table Controls */}
          <div className="p-4 border-b border-gray-100 flex items-center justify-between bg-white">
            <p className="text-sm font-bold text-gray-900">6 <span className="font-medium text-gray-500">records found</span></p>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by name, location..." 
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-64"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <FileSpreadsheet className="w-4 h-4" /> Export Excel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors">
                <FileText className="w-4 h-4" /> Export PDF
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">HUB/BRANCH NAME</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">TYPE</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">LOCATION</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">DAILY CAPACITY (PKGS)</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">MANAGER / CONTACT</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-4 font-bold text-[11px] uppercase tracking-wider text-center">ACTIONS</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, i) => {
                  const RowIcon = row.icon;
                  return (
                    <tr key={i} className="hover:bg-gray-50/50 transition-colors bg-white">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0">
                            <RowIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm">{row.name}</p>
                            <p className="text-xs text-gray-500 font-medium">{row.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex px-2.5 py-1 rounded-md text-xs font-bold text-[#E31837] bg-red-50">
                          {row.type}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4 text-gray-400 shrink-0" />
                          <span className="font-medium text-sm">{row.location}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="font-bold text-gray-900">{row.capacity}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <User className="w-3.5 h-3.5 text-gray-400" /> <span className="font-medium">{row.manager}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-500 text-xs font-medium">
                            <Phone className="w-3.5 h-3.5 text-gray-400" /> {row.phone}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold text-green-700 bg-green-50 border border-green-100">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center gap-2">
                          <button onClick={() => setActiveDrawer('view')} className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors">
                            <Eye className="w-4 h-4" />
                          </button>
                          <button onClick={() => setActiveDrawer('edit')} className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-[#E31837] hover:bg-red-50 transition-colors">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50 transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
             <p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">1 to 6</span> of <span className="font-bold text-gray-900">6</span> entries</p>
             <div className="flex items-center gap-4">
               <div className="flex items-center gap-1">
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-400 hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
                 <button className="w-8 h-8 flex items-center justify-center border border-[#E31837] bg-[#E31837] text-white rounded-md font-bold text-sm">1</button>
                 <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-400 hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
               </div>
               <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                 10 / page <ChevronDown className="w-3 h-3" />
               </button>
             </div>
          </div>
        </div>
      )}

      {/* Footer Area */}
      {activeTab === 'hubs' && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
           <div className="flex items-center gap-4 border-r border-gray-100 pr-6">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0">
                 <Building2 className="w-6 h-6" />
              </div>
              <div className="flex-1 flex items-center justify-between">
                 <div>
                   <p className="text-xs font-bold text-gray-500 mb-1">Network Overview</p>
                   <h3 className="text-3xl font-bold text-gray-900">28</h3>
                   <p className="text-[10px] font-medium text-gray-500 mt-1">Active Routes</p>
                 </div>
                 <div className="text-right">
                   <h3 className="text-3xl font-bold text-gray-900">8</h3>
                   <p className="text-[10px] font-medium text-gray-500 mt-1">Inactive Routes</p>
                 </div>
              </div>
           </div>

           <div className="border-r border-gray-100 pr-6 flex flex-col justify-center">
              <div className="flex justify-between items-end mb-3">
                 <p className="text-xs font-bold text-gray-500">Capacity Utilization</p>
                 <p className="text-sm font-bold text-gray-900">62%</p>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                 <div className="bg-[#E31837] h-2.5 rounded-full" style={{ width: '62%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold">
                 <span className="text-[#E31837]">Used: 11,036 pkgs/day</span>
                 <span className="text-gray-500">Total: 17,800 pkgs/day</span>
              </div>
           </div>

           <div className="pl-2 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0">
                 <Waypoints className="w-6 h-6" />
              </div>
              <div className="flex-1">
                 <p className="text-xs font-bold text-gray-500 mb-1">Top Performing Route</p>
                 <p className="text-sm font-bold text-gray-900 mb-1 flex items-center gap-2">Mumbai Hub <span className="text-gray-400">→</span> Pune Branch</p>
                 <p className="text-[10px] font-bold text-[#E31837]">1,250 pkgs/day</p>
              </div>
              <div className="text-right">
                 <span className="inline-flex px-2.5 py-1 bg-green-50 text-green-700 font-bold text-[10px] rounded mb-1">+ 18%</span>
                 <p className="text-[10px] font-medium text-gray-400">vs last month</p>
              </div>
           </div>
        </div>
      )}


      {/* Add Hub Drawer (Kept intact from original, mostly logic placeholders) */}
      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'Add New Entity' : activeDrawer === 'edit' ? 'Edit Entity' : 'View Entity'} width="max-w-2xl"
        footer={
          activeDrawer === 'view' ? (
            <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => setActiveDrawer(null)}>Close</button>
          ) : (
            <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setActiveDrawer(null)}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => { addToast('Saved successfully'); setActiveDrawer(null); }}>Save Changes</button></>
          )
        }
      >
        <div className="space-y-6">
          <Select label="Entity Type" options={['Hub/Branch', 'Route', 'TAT Rule']} />
          
          <div className="grid grid-cols-2 gap-4">
            <Input label="Name" placeholder="e.g. Mumbai Central Hub" />
            <Select label="Type" options={['Hub', 'Branch', 'Sorting Center', 'Delivery Center']} />
            <Input label="Capacity" type="number" placeholder="e.g. 5000" />
            <Select label="Manager" options={['US001 - Admin User', 'US002 - Priya Kapoor']} />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-700">Location</label>
            <Input placeholder="Full address..." />
            <GeoHierarchyPicker maxLevel="district" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
