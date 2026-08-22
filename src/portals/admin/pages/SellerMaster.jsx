import React, { useState } from 'react';
import { Users, Search, Filter, Download, MoreVertical, FileText, CheckCircle2, Store, MapPin, Clock, CreditCard, ShoppingBag, Leaf, Factory, ShoppingCart, Building, ShieldAlert, ArrowRight } from 'lucide-react';
import Drawer from '../../../components/ui/Modal';

const Sparkline = ({ color }) => (
  <svg width="60" height="24" viewBox="0 0 60 24" className="overflow-visible">
    <path 
      d="M 0 16 Q 10 16 15 12 T 30 18 T 45 8 T 60 4" 
      fill="none" 
      stroke={color} 
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DonutChart = () => {
  const circumference = 2 * Math.PI * 36;
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
        <circle cx="50" cy="50" r="36" fill="none" stroke="#f1f5f9" strokeWidth="12" />
        {/* Completed (Green) 78% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#10b981" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.78} ${circumference}`} strokeDashoffset="0" />
        {/* KYC Pending (Orange) 16% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#f59e0b" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.16} ${circumference}`} strokeDashoffset={-(circumference * 0.78) - 1} />
        {/* Under Review (Blue) 4% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#3b82f6" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.04} ${circumference}`} strokeDashoffset={-(circumference * 0.94) - 2} />
        {/* Rejected (Red) 2% */}
        <circle cx="50" cy="50" r="36" fill="none" stroke="#ef4444" strokeWidth="12" 
                strokeDasharray={`${circumference * 0.02} ${circumference}`} strokeDashoffset={-(circumference * 0.98) - 3} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
        <h3 className="text-xl font-bold text-gray-900 leading-none mb-1">78%</h3>
        <p className="text-[9px] text-gray-500 font-medium leading-none">Completed</p>
      </div>
    </div>
  );
};

export default function SellerMaster() {
  const [activeTab, setActiveTab] = useState('all');
  const [activeDrawer, setActiveDrawer] = useState(null);

  const sellers = [
    { id: 'SEL-94823', business: 'Acme Electronics', contact: 'John Doe', location: 'Bangalore, KA', kyc: 'Verified', rateCard: 'Standard Tech Rate', status: 'Active', iconBg: 'bg-purple-100', iconColor: 'text-purple-600', Icon: Store },
    { id: 'SEL-94824', business: 'Fashion Hub Retail', contact: 'Priya Sharma', location: 'New Delhi, DL', kyc: 'Pending', rateCard: 'Default rate', status: 'Under Review', iconBg: 'bg-orange-100', iconColor: 'text-orange-500', Icon: ShoppingBag },
    { id: 'SEL-94825', business: 'Organic Foods Co', contact: 'Michael Smith', location: 'Mumbai, MH', kyc: 'Verified', rateCard: 'FMCG Special', status: 'Active', iconBg: 'bg-green-100', iconColor: 'text-green-600', Icon: Leaf },
    { id: 'SEL-94826', business: 'QuickShip Logistics', contact: 'Rohan Mehta', location: 'Pune, MH', kyc: 'Rejected', rateCard: 'Logistics Partner Rate', status: 'Inactive', iconBg: 'bg-blue-100', iconColor: 'text-blue-500', Icon: Factory },
    { id: 'SEL-94827', business: 'Daily Needs Mart', contact: 'Anjali Verma', location: 'Lucknow, UP', kyc: 'Pending', rateCard: 'Retail Standard', status: 'Under Review', iconBg: 'bg-pink-100', iconColor: 'text-pink-500', Icon: ShoppingCart },
    { id: 'SEL-94828', business: 'Global Traders', contact: 'Vikram Rao', location: 'Hyderabad, TG', kyc: 'Verified', rateCard: 'Global Trade Rate', status: 'Active', iconBg: 'bg-teal-100', iconColor: 'text-teal-600', Icon: Building },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-6 animate-fade-in bg-[#fbfbfb] min-h-screen">
      
      {/* Header */}
      <div className="flex items-center gap-4">
         <div className="w-12 h-12 rounded-xl bg-[#E31837] flex items-center justify-center text-white shrink-0 shadow-sm">
           <Users className="w-6 h-6" />
         </div>
         <div>
           <h1 className="text-2xl font-bold text-gray-900 tracking-tight leading-none mb-1.5">Seller Management</h1>
           <p className="text-gray-500 text-sm">Approve accounts, verify KYC documents, and assign rate cards.</p>
         </div>
      </div>

      {/* Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {/* Total Sellers */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 relative overflow-hidden">
           <div className="flex justify-between items-start">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0">
                 <Users className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Total Sellers</p>
                 <h3 className="text-2xl font-bold text-gray-900 leading-none">1,248</h3>
               </div>
             </div>
           </div>
           <div className="flex justify-between items-end">
             <p className="text-[10px] font-medium text-gray-400">All registered sellers</p>
             <div className="mr-2"><Sparkline color="#E31837" /></div>
           </div>
        </div>
        
        {/* Pending Applications */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 relative overflow-hidden">
           <div className="flex justify-between items-start">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                 <Clock className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Pending Applications</p>
                 <h3 className="text-2xl font-bold text-gray-900 leading-none">34</h3>
               </div>
             </div>
           </div>
           <div className="flex justify-between items-end">
             <p className="text-[10px] font-medium text-gray-400">Awaiting review</p>
             <div className="mr-2"><Sparkline color="#f97316" /></div>
           </div>
        </div>

        {/* KYC Pending */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 relative overflow-hidden">
           <div className="flex justify-between items-start">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 shrink-0">
                 <FileText className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">KYC Pending</p>
                 <h3 className="text-2xl font-bold text-gray-900 leading-none">27</h3>
               </div>
             </div>
           </div>
           <div className="flex justify-between items-end">
             <p className="text-[10px] font-medium text-gray-400">KYC verification pending</p>
             <div className="mr-2"><Sparkline color="#eab308" /></div>
           </div>
        </div>

        {/* Active Sellers */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 relative overflow-hidden">
           <div className="flex justify-between items-start">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-500 shrink-0">
                 <CheckCircle2 className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Active Sellers</p>
                 <h3 className="text-2xl font-bold text-gray-900 leading-none">982</h3>
               </div>
             </div>
           </div>
           <div className="flex justify-between items-end">
             <p className="text-[10px] font-medium text-gray-400">Currently active</p>
             <div className="mr-2"><Sparkline color="#22c55e" /></div>
           </div>
        </div>

        {/* Rate Cards Assigned */}
        <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between h-28 relative overflow-hidden">
           <div className="flex justify-between items-start">
             <div className="flex gap-3">
               <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 shrink-0">
                 <CreditCard className="w-5 h-5" />
               </div>
               <div>
                 <p className="text-xs font-bold text-gray-500 mb-0.5">Rate Cards Assigned</p>
                 <h3 className="text-2xl font-bold text-gray-900 leading-none">986</h3>
               </div>
             </div>
           </div>
           <div className="flex justify-between items-end">
             <p className="text-[10px] font-medium text-gray-400 mb-1">Sellers with rate cards</p>
           </div>
        </div>
      </div>

      {/* Main Layout Area */}
      <div className="flex flex-col lg:flex-row gap-6">
        
        {/* Left Column: Data Table */}
        <div className="flex-1 space-y-4">
          
          {/* Tabs and Controls */}
          <div className="flex items-center justify-between">
            <div className="flex gap-6">
              {[
                { id: 'all', label: 'All Sellers' },
                { id: 'apps', label: 'Applications (1)' },
                { id: 'kyc', label: 'KYC Verification' },
                { id: 'rates', label: 'Rate Cards' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`pb-2 text-sm font-bold transition-colors relative ${
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

            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input 
                  type="text" 
                  placeholder="Search sellers by name, ID, email or phone..." 
                  className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] w-80 bg-white"
                />
              </div>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
                <Filter className="w-4 h-4" /> Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-600 hover:bg-gray-50">
                <Download className="w-4 h-4" /> Export
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
                <tr>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">BUSINESS DETAILS</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">CONTACT & LOCATION</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">KYC STATUS</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">RATE CARD</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider">STATUS</th>
                  <th className="px-6 py-4 font-bold text-[10px] uppercase tracking-wider text-right">ACTION</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {sellers.map((seller) => {
                  const RowIcon = seller.Icon;
                  return (
                    <tr key={seller.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className={`w-10 h-10 rounded-full ${seller.iconBg} flex items-center justify-center ${seller.iconColor} shrink-0`}>
                            <RowIcon className="w-5 h-5" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-[13px]">{seller.business}</p>
                            <p className="text-[11px] text-gray-400 font-medium">{seller.id}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-bold text-gray-800 text-[13px] mb-0.5">{seller.contact}</p>
                          <div className="flex items-center gap-1 text-gray-500 text-[11px] font-medium">
                            <MapPin className="w-3 h-3 text-gray-400" /> {seller.location}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col items-start gap-1">
                          {seller.kyc === 'Verified' && (
                             <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-green-700 bg-green-50 border border-green-100">
                               <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> Verified
                             </span>
                          )}
                          {seller.kyc === 'Pending' && (
                             <>
                               <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-orange-700 bg-orange-50 border border-orange-100">
                                 <Clock className="w-3.5 h-3.5 text-orange-500" /> Pending
                               </span>
                               <button className="text-[10px] font-bold text-[#E31837] hover:underline ml-1">Review Docs</button>
                             </>
                          )}
                          {seller.kyc === 'Rejected' && (
                             <>
                               <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-[#E31837] bg-red-50 border border-red-100">
                                 <ShieldAlert className="w-3.5 h-3.5 text-[#E31837]" /> Rejected
                               </span>
                               <button className="text-[10px] font-bold text-[#E31837] hover:underline ml-1">View Reason</button>
                             </>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <FileText className="w-4 h-4 text-gray-400 shrink-0" />
                          <span className="font-bold text-[13px]">{seller.rateCard}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                         <div className="flex items-center gap-2 text-[13px] font-bold">
                           {seller.status === 'Active' && <><span className="w-2 h-2 rounded-full bg-green-500"></span><span className="text-green-600">Active</span></>}
                           {seller.status === 'Under Review' && <><span className="w-2 h-2 rounded-full bg-blue-500"></span><span className="text-blue-600">Under Review</span></>}
                           {seller.status === 'Inactive' && <><span className="w-2 h-2 rounded-full bg-gray-500"></span><span className="text-gray-600">Inactive</span></>}
                         </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button onClick={() => setActiveDrawer('view')} className="px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-600 hover:bg-gray-50 transition-colors">
                            View
                          </button>
                          <button onClick={() => setActiveDrawer('manage')} className="px-3 py-1.5 bg-[#E31837] border border-[#E31837] rounded-md text-[11px] font-bold text-white hover:bg-red-700 transition-colors">
                            Manage
                          </button>
                          <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors">
                            <MoreVertical className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
               <p className="text-[11px] text-gray-500 font-medium">Showing 1 to 6 of 1,248 sellers</p>
               <div className="flex items-center gap-4">
                 <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-gray-700 hover:bg-gray-50">
                   10 per page <MoreVertical className="w-3 h-3 text-transparent" /* spacing hack */ />
                 </button>
                 <div className="flex items-center gap-1 text-[13px]">
                   <button className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50">&lt;</button>
                   <button className="w-7 h-7 flex items-center justify-center rounded bg-[#E31837] text-white font-bold">1</button>
                   <button className="w-7 h-7 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">2</button>
                   <button className="w-7 h-7 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">3</button>
                   <span className="w-7 h-7 flex items-center justify-center text-gray-400">...</span>
                   <button className="w-7 h-7 flex items-center justify-center rounded text-gray-600 font-bold hover:bg-gray-50">125</button>
                   <button className="w-7 h-7 flex items-center justify-center rounded text-gray-400 hover:bg-gray-50">&gt;</button>
                 </div>
               </div>
            </div>
          </div>
        </div>

        {/* Right Column: Side Panels */}
        <div className="w-full lg:w-80 flex flex-col gap-4">
           
           {/* Onboarding Progress */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-gray-900 text-sm">Onboarding Progress</h3>
                 <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="flex items-center gap-6">
                 <DonutChart />
                 <div className="flex-1 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-bold">
                       <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Completed</span>
                       <span className="text-gray-900">78%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold">
                       <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>KYC Pending</span>
                       <span className="text-gray-900">16%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold">
                       <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>Under Review</span>
                       <span className="text-gray-900">4%</span>
                    </div>
                    <div className="flex items-center justify-between text-[10px] font-bold">
                       <span className="flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>Rejected</span>
                       <span className="text-gray-900">2%</span>
                    </div>
                 </div>
              </div>
              <p className="text-[9px] font-medium text-gray-400 mt-4">Last 30 days</p>
           </div>

           {/* Pending KYC */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-2">
                 <h3 className="font-bold text-gray-900 text-sm">Pending KYC</h3>
                 <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-4 h-4" /></button>
              </div>
              <div className="flex items-baseline gap-1.5 mb-5">
                 <h2 className="text-2xl font-bold text-[#E31837] leading-none">27</h2>
                 <span className="text-xs font-bold text-gray-500">Sellers</span>
              </div>
              
              <div className="space-y-3 mb-5">
                 <div className="flex items-center justify-between text-[11px]">
                   <span className="font-medium text-gray-600">Document Upload</span>
                   <span className="font-bold text-gray-900">14</span>
                 </div>
                 <div className="flex items-center justify-between text-[11px]">
                   <span className="font-medium text-gray-600">Document Verification</span>
                   <span className="font-bold text-gray-900">9</span>
                 </div>
                 <div className="flex items-center justify-between text-[11px]">
                   <span className="font-medium text-gray-600">Additional Info</span>
                   <span className="font-bold text-gray-900">4</span>
                 </div>
              </div>

              <button className="w-full py-2 border border-[#fca5a5] text-[#E31837] bg-red-50 rounded-lg text-[11px] font-bold hover:bg-red-100 transition-colors text-center">
                 View All Pending
              </button>
           </div>

           {/* Seller Distribution */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <div className="flex items-center justify-between mb-4">
                 <h3 className="font-bold text-gray-900 text-sm">Seller Distribution</h3>
                 <button className="text-gray-400 hover:text-gray-700"><MoreVertical className="w-4 h-4" /></button>
              </div>

              <div className="space-y-4">
                 {/* Active */}
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                       <span className="text-gray-600">Active</span>
                       <span className="text-gray-900">982 <span className="text-gray-400 font-medium">(78.7%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                       <div className="bg-green-500 h-1.5 rounded-full" style={{ width: '78.7%' }}></div>
                    </div>
                 </div>

                 {/* Under Review */}
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                       <span className="text-gray-600">Under Review</span>
                       <span className="text-gray-900">143 <span className="text-gray-400 font-medium">(11.5%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                       <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '11.5%' }}></div>
                    </div>
                 </div>

                 {/* Inactive */}
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                       <span className="text-gray-600">Inactive</span>
                       <span className="text-gray-900">63 <span className="text-gray-400 font-medium">(5.0%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                       <div className="bg-gray-400 h-1.5 rounded-full" style={{ width: '5.0%' }}></div>
                    </div>
                 </div>

                 {/* Rejected */}
                 <div>
                    <div className="flex justify-between text-[10px] font-bold mb-1.5">
                       <span className="text-gray-600">Rejected</span>
                       <span className="text-gray-900">60 <span className="text-gray-400 font-medium">(4.8%)</span></span>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-1.5">
                       <div className="bg-[#E31837] h-1.5 rounded-full" style={{ width: '4.8%' }}></div>
                    </div>
                 </div>
              </div>
           </div>

        </div>
      </div>
      
      {/* Seller Action Drawer */}
      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'view' ? 'View Seller Details' : 'Manage Seller Account'} width="max-w-2xl"
        footer={
          activeDrawer === 'view' ? (
            <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => setActiveDrawer(null)}>Close</button>
          ) : (
            <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors" onClick={() => setActiveDrawer(null)}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg hover:bg-black transition-colors" onClick={() => setActiveDrawer(null)}>Save Changes</button></>
          )
        }
      >
        <div className="space-y-6">
          <div className="p-4 bg-gray-50 rounded-lg border border-gray-100">
             <p className="text-sm text-gray-500 font-medium mb-1">Mode</p>
             <p className="text-lg font-bold text-gray-900">{activeDrawer === 'view' ? 'Read-Only Mode' : 'Edit Mode'}</p>
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
