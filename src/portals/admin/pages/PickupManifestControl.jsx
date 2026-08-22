import React, { useState } from 'react';
import { Truck, Calendar, CheckCircle2, AlertTriangle, FileText, Search, Filter, Plus, Eye, MoreVertical, ChevronDown, Calendar as CalendarIcon, ChevronLeft, ChevronRight } from 'lucide-react';

export default function PickupManifestControl() {
  const [activeTab, setActiveTab] = useState('pickups');

  const summaryCards = [
    { label: 'Total Pickups Today', value: '125', trend: '↗ 12% vs yesterday', trendColor: 'text-green-600', icon: Truck, iconBg: 'bg-red-50', iconColor: 'text-[#E31837]' },
    { label: 'Scheduled Pickups', value: '68', trend: '↗ 8% vs yesterday', trendColor: 'text-green-600', icon: Calendar, iconBg: 'bg-red-50', iconColor: 'text-[#E31837]' },
    { label: 'Picked Up', value: '42', trend: '↗ 15% vs yesterday', trendColor: 'text-green-600', icon: CheckCircle2, iconBg: 'bg-green-50', iconColor: 'text-green-500' },
    { label: 'In Transit', value: '15', trend: '↘ 5% vs yesterday', trendColor: 'text-[#E31837]', icon: Truck, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-500' },
    { label: 'Exceptions', value: '6', trend: '↘ 20% vs yesterday', trendColor: 'text-[#E31837]', icon: AlertTriangle, iconBg: 'bg-red-50', iconColor: 'text-[#E31837]' },
    { label: 'Manifests Generated', value: '34', trend: '↗ 10% vs yesterday', trendColor: 'text-green-600', icon: FileText, iconBg: 'bg-gray-100', iconColor: 'text-gray-600' },
  ];

  const tableData = [
    { id: 'PU20260822001', date: '22 Aug 2026', time: '09:00 AM', hubName: 'Mumbai Central Hub', hubId: 'HB001', shipments: 120, weight: '356.40', status: 'Scheduled', manifest: '-' },
    { id: 'PU20260822002', date: '22 Aug 2026', time: '10:30 AM', hubName: 'Pune Branch', hubId: 'HB002', shipments: 85, weight: '210.75', status: 'Picked Up', manifest: 'MAN20260822014' },
    { id: 'PU20260822003', date: '22 Aug 2026', time: '11:00 AM', hubName: 'Bangalore Sorting Center', hubId: 'HB003', shipments: 150, weight: '425.10', status: 'In Transit', manifest: 'MAN20260822013' },
    { id: 'PU20260822004', date: '22 Aug 2026', time: '01:30 PM', hubName: 'Delhi North Hub', hubId: 'HB004', shipments: 98, weight: '312.60', status: 'Picked Up', manifest: 'MAN20260822012' },
    { id: 'PU20260822005', date: '22 Aug 2026', time: '02:00 PM', hubName: 'Hyderabad DC', hubId: 'HB005', shipments: 76, weight: '185.40', status: 'Scheduled', manifest: '-' },
    { id: 'PU20260822006', date: '22 Aug 2026', time: '03:15 PM', hubName: 'Chennai Branch', hubId: 'HB006', shipments: 64, weight: '142.30', status: 'Exception', manifest: '-' },
    { id: 'PU20260822007', date: '22 Aug 2026', time: '04:00 PM', hubName: 'Kolkata Hub', hubId: 'HB007', shipments: 110, weight: '298.80', status: 'In Transit', manifest: 'MAN20260822011' },
    { id: 'PU20260822008', date: '22 Aug 2026', time: '05:30 PM', hubName: 'Ahmedabad Branch', hubId: 'HB008', shipments: 57, weight: '121.90', status: 'Scheduled', manifest: '-' },
    { id: 'PU20260822009', date: '22 Aug 2026', time: '06:00 PM', hubName: 'Lucknow Branch', hubId: 'HB009', shipments: 45, weight: '98.20', status: 'Picked Up', manifest: 'MAN20260822010' },
    { id: 'PU20260822010', date: '22 Aug 2026', time: '08:30 PM', hubName: 'Surat Hub', hubId: 'HB010', shipments: 72, weight: '163.70', status: 'Exception', manifest: '-' },
  ];

  const getStatusPill = (status) => {
    switch(status) {
      case 'Scheduled': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-blue-700 bg-blue-50 border border-blue-100">Scheduled</span>;
      case 'Picked Up': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-green-700 bg-green-50 border border-green-100">Picked Up</span>;
      case 'In Transit': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-yellow-700 bg-yellow-50 border border-yellow-100">In Transit</span>;
      case 'Exception': return <span className="inline-flex items-center px-3 py-1 rounded-full text-[11px] font-bold text-[#E31837] bg-red-50 border border-red-100">Exception</span>;
      default: return null;
    }
  };

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div>
         <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Pickups & Manifests</h1>
         <p className="text-gray-500 text-sm mt-1">Schedule pickups, generate manifests and track pickup status.</p>
      </div>

      {/* Top 6 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
         {summaryCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                 <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor} shrink-0`}>
                       <Icon className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-gray-500 mb-0.5">{card.label}</p>
                       <h3 className="text-lg font-bold text-gray-900 leading-none">{card.value}</h3>
                     </div>
                   </div>
                   <p className={`text-[9px] font-bold ${card.trendColor}`}>{card.trend}</p>
                 </div>
              </div>
            );
         })}
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
         <div className="p-4 border-b border-gray-100 flex items-center justify-between gap-4">
            
            {/* Filters Row */}
            <div className="flex items-center gap-3 flex-1 overflow-x-auto">
               <div className="flex flex-col gap-1 min-w-[140px]">
                 <label className="text-[10px] font-bold text-gray-500">Pickup Date</label>
                 <div className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                   <CalendarIcon className="w-3.5 h-3.5 text-gray-400" />
                   <span className="text-[11px] font-bold text-gray-700">22 Aug 2026</span>
                 </div>
               </div>
               
               <div className="flex flex-col gap-1 min-w-[140px]">
                 <label className="text-[10px] font-bold text-gray-500">Hub / Branch</label>
                 <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                   <span className="text-[11px] font-bold text-gray-700">All Hubs</span>
                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                 </div>
               </div>

               <div className="flex flex-col gap-1 min-w-[140px]">
                 <label className="text-[10px] font-bold text-gray-500">Pickup Status</label>
                 <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                   <span className="text-[11px] font-bold text-gray-700">All Status</span>
                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                 </div>
               </div>

               <div className="flex flex-col gap-1 min-w-[140px]">
                 <label className="text-[10px] font-bold text-gray-500">Manifest Status</label>
                 <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                   <span className="text-[11px] font-bold text-gray-700">All Status</span>
                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                 </div>
               </div>

               <div className="flex flex-col gap-1 min-w-[140px]">
                 <label className="text-[10px] font-bold text-gray-500">Service Type</label>
                 <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-white">
                   <span className="text-[11px] font-bold text-gray-700">All</span>
                   <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
                 </div>
               </div>
            </div>

            {/* Actions Row */}
            <div className="flex items-end gap-3 shrink-0 h-[46px]">
               <div className="relative">
                 <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                 <input 
                   type="text" 
                   placeholder="Search AWB, Manifest, Branch..." 
                   className="pl-9 pr-4 py-2 text-[11px] font-medium border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] w-56"
                 />
               </div>
               <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                 <Filter className="w-3.5 h-3.5" /> Filters
               </button>
               <button className="flex items-center gap-2 px-5 py-2 bg-[#E31837] text-white rounded-lg text-[11px] font-bold hover:bg-red-700 shadow-sm">
                 <Plus className="w-3.5 h-3.5" /> Schedule Pickup
               </button>
            </div>
         </div>

         {/* Tabs */}
         <div className="flex border-b border-gray-100">
           {['Pickups', 'Manifests', 'Exceptions', 'Pickup Requests'].map(tab => (
             <button 
               key={tab}
               onClick={() => setActiveTab(tab.toLowerCase())}
               className={`px-6 py-3 text-[11px] font-bold transition-colors relative ${activeTab === tab.toLowerCase() ? 'text-[#E31837]' : 'text-gray-500 hover:text-gray-700'}`}
             >
               {tab}
               {activeTab === tab.toLowerCase() && (
                 <div className="absolute bottom-0 left-0 w-full h-0.5 bg-[#E31837]"></div>
               )}
             </button>
           ))}
         </div>

         {/* Table Info */}
         <div className="px-6 py-3 border-b border-gray-50 bg-gray-50/50">
            <p className="text-[10px] text-gray-500 font-medium">Showing 1 to 10 of 25 pickups</p>
         </div>

         {/* Table */}
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50/50 text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="pl-6 py-4 w-10"><input type="checkbox" className="rounded text-gray-300 focus:ring-[#E31837]" /></th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Pickup ID</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Pickup Date & Time</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Branch / Hub</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Total Shipments</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Weight (KG)</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Status</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Manifest</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors bg-white group">
                    <td className="pl-6 py-4 w-10"><input type="checkbox" className="rounded text-gray-300 focus:ring-[#E31837]" /></td>
                    <td className="px-6 py-4 font-bold text-[13px] text-gray-800">{row.id}</td>
                    <td className="px-6 py-4">
                       <p className="font-bold text-[13px] text-gray-900 mb-0.5">{row.date}</p>
                       <p className="text-[11px] font-medium text-gray-500">{row.time}</p>
                    </td>
                    <td className="px-6 py-4">
                       <p className="font-bold text-[13px] text-gray-900 mb-0.5">{row.hubName}</p>
                       <p className="text-[11px] font-medium text-gray-500">{row.hubId}</p>
                    </td>
                    <td className="px-6 py-4 text-center font-bold text-[13px] text-gray-700">{row.shipments}</td>
                    <td className="px-6 py-4 text-center font-bold text-[13px] text-gray-700">{row.weight}</td>
                    <td className="px-6 py-4 text-center">
                       {getStatusPill(row.status)}
                    </td>
                    <td className="px-6 py-4 text-center">
                       <span className={`text-[13px] font-bold ${row.manifest !== '-' ? 'text-[#E31837]' : 'text-gray-400'}`}>
                         {row.manifest}
                       </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-3">
                        <button className="text-gray-400 hover:text-gray-700"><Eye className="w-4 h-4" /></button>
                        <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>

         {/* Footer Controls */}
         <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
               <div className="flex items-center justify-between px-3 py-1.5 border border-gray-200 rounded-lg bg-white min-w-[120px]">
                 <span className="text-[11px] font-medium text-gray-600">Bulk Actions</span>
                 <ChevronDown className="w-3.5 h-3.5 text-gray-400" />
               </div>
               <button className="px-4 py-1.5 bg-[#E31837] text-white rounded-lg text-[11px] font-bold hover:bg-red-700 shadow-sm">
                 Apply
               </button>
            </div>

            <div className="flex items-center gap-1 text-[11px]">
               <button className="w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50"><ChevronLeft className="w-3 h-3" /></button>
               <button className="w-6 h-6 flex items-center justify-center rounded bg-[#E31837] text-white font-bold">1</button>
               <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">2</button>
               <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">3</button>
               <button className="w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50"><ChevronRight className="w-3 h-3" /></button>
            </div>
         </div>

      </div>
    </div>
  );
}
