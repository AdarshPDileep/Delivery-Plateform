import React from 'react';
import { Search, Filter, FileSpreadsheet, FileText, RefreshCw, Plus, Eye, Edit, AlertTriangle, Package, Truck, CheckCircle2, Send, AlertCircle, IndianRupee, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import Drawer from '../../../components/ui/Modal';

const StatusDonutChart = () => {
  const circumference = 2 * Math.PI * 36;
  return (
    <div className="relative w-28 h-28 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle cx="50" cy="50" r="36" fill="none" stroke="#f1f5f9" strokeWidth="12" />
        {/* Delivered (Green) 62.5% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#22c55e" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.625} ${circumference}`} strokeDashoffset="0" />
        {/* In Transit (Yellow) 26.7% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#eab308" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.267} ${circumference}`} strokeDashoffset={-(circumference * 0.625)} />
        {/* Out for Delivery (Blue) 9.1% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#06b6d4" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.091} ${circumference}`} strokeDashoffset={-(circumference * 0.892)} />
        {/* Others 1.7% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#94a3b8" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.017} ${circumference}`} strokeDashoffset={-(circumference * 0.983)} />
      </svg>
    </div>
  );
};

export default function ShipmentControl() {
  const [activeDrawer, setActiveDrawer] = React.useState(null);

  const summaryCards = [
    { label: 'Total Shipments', value: '25,430', trend: '↗ 12.5% vs last 30 days', icon: Package, iconBg: 'bg-red-50', iconColor: 'text-[#E31837]' },
    { label: 'In Transit', value: '6,782', trend: '↗ 8.4% vs last 30 days', icon: Truck, iconBg: 'bg-yellow-50', iconColor: 'text-yellow-500' },
    { label: 'Delivered', value: '15,890', trend: '↗ 15.1% vs last 30 days', icon: CheckCircle2, iconBg: 'bg-green-50', iconColor: 'text-green-500' },
    { label: 'Out for Delivery', value: '2,316', trend: '↗ 5.6% vs last 30 days', icon: Send, iconBg: 'bg-blue-50', iconColor: 'text-blue-500' },
    { label: 'Exceptions / RTO', value: '442', trend: '↗ 3.2% vs last 30 days', icon: AlertTriangle, iconBg: 'bg-red-50', iconColor: 'text-[#E31837]' },
    { label: 'COD Pending', value: '₹ 12,86,450', trend: '↗ 11.3% vs last 30 days', icon: IndianRupee, iconBg: 'bg-purple-50', iconColor: 'text-purple-500' },
  ];

  const tableData = [
    { awb: 'CG20240001', sender: { name: 'Rahul Sharma', loc: 'Andheri West, Mumbai' }, receiver: { name: 'Priya Patel', loc: 'Koramangala, Bangalore' }, status: 'In Transit', pmt: 'Prepaid', cod: '—', franchise: 'FR001', updated: '22 Aug 2026', time: '10:15 AM' },
    { awb: 'CG20240002', sender: { name: 'Amit Kumar', loc: 'Connaught Place, Delhi' }, receiver: { name: 'Sneha Reddy', loc: 'Banjara Hills, Hyderabad' }, status: 'Delivered', pmt: 'COD', cod: '₹ 1,500', franchise: 'FR005', updated: '22 Aug 2026', time: '09:48 AM' },
    { awb: 'CG20240003', sender: { name: 'Vikram Singh', loc: 'MG Road, Pune' }, receiver: { name: 'Neha Gupta', loc: 'Salt Lake, Kolkata' }, status: 'Booked', pmt: 'Prepaid', cod: '—', franchise: 'FR002', updated: '22 Aug 2026', time: '09:30 AM' },
    { awb: 'CG20240004', sender: { name: 'Meera Iyer', loc: 'T Nagar, Chennai' }, receiver: { name: 'Arjun Nair', loc: 'Bandra West, Mumbai' }, status: 'Out for Delivery', pmt: 'Prepaid', cod: '—', franchise: 'FR004', updated: '22 Aug 2026', time: '09:10 AM' },
    { awb: 'CG20240005', sender: { name: 'Rohit Verma', loc: 'Whitefield, Bangalore' }, receiver: { name: 'Kavita Joshi', loc: 'CP, Delhi' }, status: 'RTO / Exception', pmt: 'COD', cod: '₹ 2,500', franchise: 'FR003', updated: '22 Aug 2026', time: '08:55 AM' },
    { awb: 'CG20240006', sender: { name: 'Deepak Gupta', loc: 'SG Highway, Ahmedabad' }, receiver: { name: 'Sunita Desai', loc: 'Hinjewadi, Pune' }, status: 'Picked Up', pmt: 'Prepaid', cod: '—', franchise: 'FR008', updated: '22 Aug 2026', time: '08:35 AM' },
    { awb: 'CG20240007', sender: { name: 'Pooja Sharma', loc: 'Bandra, Mumbai' }, receiver: { name: 'Ramesh Kumar', loc: 'T Nagar, Chennai' }, status: 'In Transit', pmt: 'COD', cod: '₹ 3,200', franchise: 'FR001', updated: '22 Aug 2026', time: '08:20 AM' },
    { awb: 'CG20240008', sender: { name: 'Sanjay Patel', loc: 'Kothrud, Pune' }, receiver: { name: 'Anita Menon', loc: 'Whitefield, Bangalore' }, status: 'Delivered', pmt: 'Prepaid', cod: '—', franchise: 'FR002', updated: '22 Aug 2026', time: '08:05 AM' },
    { awb: 'CG20240009', sender: { name: 'Lakshmi Rao', loc: 'Banjara Hills, Hyderabad' }, receiver: { name: 'Mohan Das', loc: 'Salt Lake, Kolkata' }, status: 'In Transit', pmt: 'COD', cod: '₹ 4,500', franchise: 'FR006', updated: '22 Aug 2026', time: '07:50 AM' },
    { awb: 'CG20240010', sender: { name: 'Arun Mehta', loc: 'Andheri East, Mumbai' }, receiver: { name: 'Geeta Sharma', loc: 'SG Highway, Ahmedabad' }, status: 'Booked', pmt: 'Prepaid', cod: '—', franchise: 'FR001', updated: '22 Aug 2026', time: '07:30 AM' },
  ];

  const getStatusPill = (status) => {
    switch(status) {
      case 'In Transit': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-yellow-700 bg-yellow-100"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>In Transit</span>;
      case 'Delivered': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-green-700 bg-green-100"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Delivered</span>;
      case 'Booked': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-blue-700 bg-blue-100"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Booked</span>;
      case 'Out for Delivery': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-cyan-700 bg-cyan-100"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Out for Delivery</span>;
      case 'RTO / Exception': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#E31837] bg-red-100"><span className="w-1.5 h-1.5 rounded-full bg-[#E31837]"></span>RTO / Exception</span>;
      case 'Picked Up': return <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-purple-700 bg-purple-100"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Picked Up</span>;
      default: return null;
    }
  };

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div>
         <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Consignment & Shipment Control</h1>
         <p className="text-gray-500 text-sm mt-1">Global view of all shipments. Manage exceptions, re-routes, and bulk updates.</p>
      </div>

      {/* Top 6 Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
         {summaryCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <div key={i} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                 <div className="flex flex-col gap-3">
                   <div className="flex items-center gap-3">
                     <div className={`w-10 h-10 rounded-xl ${card.iconBg} flex items-center justify-center ${card.iconColor}`}>
                       <Icon className="w-5 h-5" />
                     </div>
                     <div>
                       <p className="text-[10px] font-bold text-gray-500 mb-0.5">{card.label}</p>
                       <h3 className="text-lg font-bold text-gray-900 leading-none">{card.value}</h3>
                     </div>
                   </div>
                   <p className="text-[9px] font-bold text-green-600">{card.trend}</p>
                 </div>
              </div>
            );
         })}
      </div>

      {/* Main Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
         {/* Toolbar */}
         <div className="p-4 border-b border-gray-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search by AWB, sender, receiver, or franchise..." 
                  className="pl-9 pr-4 py-2 text-xs font-medium border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] w-72"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50">
                <Filter className="w-3.5 h-3.5" /> Filters
              </button>
            </div>
            
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50">
                <FileSpreadsheet className="w-3.5 h-3.5 text-green-600" /> Export Excel
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-xs font-bold text-gray-700 hover:bg-gray-50">
                <FileText className="w-3.5 h-3.5 text-red-600" /> Export PDF
              </button>
              <button className="p-2 border border-gray-200 rounded-lg text-gray-500 hover:bg-gray-50">
                <RefreshCw className="w-4 h-4" />
              </button>
              <button onClick={() => setActiveDrawer('new')} className="flex items-center gap-2 px-5 py-2 bg-[#E31837] text-white rounded-lg text-xs font-bold hover:bg-red-700 shadow-sm">
                <Plus className="w-4 h-4" /> New Shipment
              </button>
            </div>
         </div>

         {/* Table */}
         <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="pl-6 py-4 w-10"><input type="checkbox" className="rounded text-[#E31837] focus:ring-[#E31837]" /></th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">AWB Number</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Sender</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Receiver</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Current Status</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Payment Type</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">COD Amount</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Franchise</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">Last Update</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {tableData.map((row, i) => (
                  <tr key={i} className="hover:bg-gray-50/50 transition-colors bg-white group">
                    <td className="pl-6 py-4 w-10"><input type="checkbox" className="rounded text-[#E31837] focus:ring-[#E31837]" /></td>
                    <td className="px-6 py-4 font-bold text-[13px] text-gray-800">{row.awb}</td>
                    <td className="px-6 py-4">
                       <p className="font-bold text-[13px] text-gray-900 mb-0.5">{row.sender.name}</p>
                       <p className="text-[11px] font-medium text-gray-500">{row.sender.loc}</p>
                    </td>
                    <td className="px-6 py-4">
                       <p className="font-bold text-[13px] text-gray-900 mb-0.5">{row.receiver.name}</p>
                       <p className="text-[11px] font-medium text-gray-500">{row.receiver.loc}</p>
                    </td>
                    <td className="px-6 py-4 text-center">
                       {getStatusPill(row.status)}
                    </td>
                    <td className="px-6 py-4 text-center font-medium text-[13px] text-gray-700">{row.pmt}</td>
                    <td className="px-6 py-4 text-center font-bold text-[13px] text-gray-900">{row.cod}</td>
                    <td className="px-6 py-4 text-center font-medium text-[13px] text-gray-700">{row.franchise}</td>
                    <td className="px-6 py-4">
                       <p className="font-medium text-[13px] text-gray-800 mb-0.5">{row.updated}</p>
                       <p className="text-[11px] font-medium text-gray-500">{row.time}</p>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center justify-center gap-2">
                        <button onClick={() => setActiveDrawer('view')} className="text-gray-400 hover:text-gray-700"><Eye className="w-4 h-4" /></button>
                        <button onClick={() => setActiveDrawer('edit')} className="text-gray-400 hover:text-[#E31837]"><Edit className="w-4 h-4" /></button>
                        <button onClick={() => setActiveDrawer('exception')} className="text-[#E31837] opacity-80 hover:opacity-100"><AlertTriangle className="w-4 h-4" /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
         </div>

         {/* Pagination */}
         <div className="p-4 border-t border-gray-100 flex items-center justify-between">
            <p className="text-[11px] text-gray-500 font-medium">Showing 1 to 10 of 25,430 shipments</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1 text-[11px]">
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50"><ChevronLeft className="w-3 h-3" /></button>
                <button className="w-6 h-6 flex items-center justify-center rounded bg-[#E31837] text-white font-bold">1</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">2</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">3</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">4</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">5</button>
                <span className="w-6 h-6 flex items-center justify-center text-gray-400 font-bold">...</span>
                <button className="w-8 h-6 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">2,543</button>
                <button className="w-6 h-6 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50"><ChevronRight className="w-3 h-3" /></button>
              </div>
              <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                10 / page <ChevronDown className="w-3 h-3" />
              </button>
            </div>
         </div>
      </div>

      {/* Bottom Dashboard */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
         
         {/* Shipment Status Breakdown */}
         <div className="border-r border-gray-100 pr-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Shipment Status Breakdown</h3>
            <div className="flex items-center gap-4">
               <StatusDonutChart />
               <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>In Transit</span>
                     <span className="text-gray-900">6,782 <span className="text-gray-400 font-medium">(26.7%)</span></span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Delivered</span>
                     <span className="text-gray-900">15,890 <span className="text-gray-400 font-medium">(62.5%)</span></span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>Out for Delivery</span>
                     <span className="text-gray-900">2,316 <span className="text-gray-400 font-medium">(9.1%)</span></span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>Others</span>
                     <span className="text-gray-900">442 <span className="text-gray-400 font-medium">(1.7%)</span></span>
                  </div>
               </div>
            </div>
         </div>

         {/* Exceptions Summary */}
         <div className="border-r border-gray-100 px-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Exceptions Summary</h3>
            <div className="flex items-center gap-6">
               <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-[#E31837]"></span>RTO / Customer Unavailable</span>
                     <span className="text-gray-900">246</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span>Address Issues</span>
                     <span className="text-gray-900">112</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>Damaged / Lost</span>
                     <span className="text-gray-900">48</span>
                  </div>
                  <div className="flex items-center justify-between text-[10px] font-bold">
                     <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>Others</span>
                     <span className="text-gray-900">36</span>
                  </div>
               </div>
               <div className="text-center">
                  <p className="text-[10px] font-medium text-gray-500 mb-1">Total Exceptions</p>
                  <h3 className="text-3xl font-bold text-gray-900 leading-none mb-2">442</h3>
                  <p className="text-[10px] font-bold text-[#E31837] flex items-center gap-1">↗ 3.2% <span className="text-gray-400 font-medium">vs last 30 days</span></p>
               </div>
            </div>
         </div>

         {/* COD Overview */}
         <div className="border-r border-gray-100 px-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">COD Overview</h3>
            <p className="text-[11px] font-bold text-gray-500 mb-1">Total COD Pending</p>
            <h3 className="text-[28px] font-bold text-gray-900 leading-none mb-4">₹ 12,86,450</h3>
            <div className="flex items-center justify-between mb-2">
               <span className="text-[10px] font-medium text-gray-500">Pending Shipments</span>
               <span className="text-[11px] font-bold text-gray-900">1,104</span>
            </div>
            <p className="text-[10px] font-bold text-green-600 flex items-center gap-1">↗ 11.3% <span className="text-gray-400 font-medium">vs last 30 days</span></p>
         </div>

         {/* Top Franchises by Shipments */}
         <div className="pl-6">
            <h3 className="font-bold text-gray-900 text-sm mb-4">Top Franchises by Shipments</h3>
            <div className="space-y-2.5">
               {[
                 { rank: 1, id: 'FR001', val: '5,432', pct: 100 },
                 { rank: 2, id: 'FR002', val: '4,218', pct: 80 },
                 { rank: 3, id: 'FR004', val: '3,876', pct: 70 },
                 { rank: 4, id: 'FR005', val: '2,945', pct: 55 },
                 { rank: 5, id: 'FR003', val: '2,341', pct: 45 },
               ].map((f) => (
                 <div key={f.rank} className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-gray-400 w-3">{f.rank}</span>
                    <span className="text-[10px] font-bold text-gray-700 w-8">{f.id}</span>
                    <div className="flex-1 bg-gray-50 h-1.5 rounded-full">
                       <div className="bg-[#E31837] h-1.5 rounded-full" style={{ width: `${f.pct}%` }}></div>
                    </div>
                    <span className="text-[10px] font-bold text-gray-900 w-8 text-right">{f.val}</span>
                 </div>
               ))}
            </div>
         </div>
         
         
      </div>

      {/* Action Drawer */}
      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'New Shipment' : activeDrawer === 'view' ? 'View Shipment' : activeDrawer === 'exception' ? 'Mark Exception' : 'Edit Shipment'} width="max-w-xl"
        footer={
          activeDrawer === 'view' ? (
            <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => setActiveDrawer(null)}>Close</button>
          ) : (
            <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setActiveDrawer(null)}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => setActiveDrawer(null)}>{activeDrawer === 'exception' ? 'Save Exception' : 'Save Changes'}</button></>
          )
        }
      >
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
             <p className="text-sm text-gray-500 font-medium mb-1">Action</p>
             <p className="text-lg font-bold text-gray-900 capitalize">{activeDrawer} Mode</p>
          </div>
          <div className="space-y-4">
             <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
             <div className="h-10 bg-gray-100 rounded animate-pulse"></div>
             <div className="h-24 bg-gray-100 rounded animate-pulse"></div>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
