import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { 
  ArrowLeft, Store, CheckCircle2, FileText, Activity, 
  Edit, List, Clock, CreditCard, Ban, ShieldCheck 
} from 'lucide-react';

export default function ManageSeller() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('overview');

  const sellerId = id || 'SEL-94823';

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div className="flex items-center gap-4">
         <button onClick={() => navigate('/admin/sellers')} className="p-2 rounded-full hover:bg-gray-200 transition-colors text-gray-500">
           <ArrowLeft className="w-5 h-5" />
         </button>
         <div>
           <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Manage Seller</h1>
           <p className="text-gray-500 text-sm mt-1">View and manage seller details, status, and account information.</p>
         </div>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Profile Header */}
        <div className="p-6 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
               <Store className="w-8 h-8" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-3">
                Acme Electronics
              </h2>
              <div className="flex items-center gap-3 mt-1 text-sm font-medium">
                <span className="text-gray-500">{sellerId}</span>
                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold text-green-700 bg-green-50 border border-green-100">
                   <ShieldCheck className="w-3 h-3 text-green-500" /> Verified
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-bold text-green-700 bg-green-50 border border-green-100">
                   <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                </span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm">
             <div>
               <p className="text-gray-500 font-medium mb-1">Contact Person</p>
               <p className="font-bold text-gray-900">John Doe</p>
             </div>
             <div>
               <p className="text-gray-500 font-medium mb-1">Phone</p>
               <p className="font-bold text-gray-900">+91 98765 43210</p>
             </div>
             <div>
               <p className="text-gray-500 font-medium mb-1">Email</p>
               <p className="font-bold text-gray-900">john.doe@acmeelectronics.com</p>
             </div>
             <div>
               <p className="text-gray-500 font-medium mb-1">Seller Since</p>
               <p className="font-bold text-gray-900">12 Jan 2024</p>
               <p className="text-[10px] text-gray-400 mt-0.5">Last Updated: 30 Aug 2026, 10:15 AM</p>
             </div>
          </div>
          
          <div>
            <button className="px-4 py-2 bg-[#E31837] text-white rounded-lg text-sm font-bold shadow-sm shadow-red-200 hover:bg-red-700 flex items-center gap-2">
              Actions <span className="text-[10px] ml-1">▼</span>
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="px-6 flex gap-8 border-b border-gray-100 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview' },
            { id: 'apps', label: 'Applications (1)' },
            { id: 'kyc', label: 'KYC Verification' },
            { id: 'rates', label: 'Rate Cards' },
            { id: 'log', label: 'Activity Log' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
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

        {/* Tab Content */}
        <div className="p-6">
          {activeTab === 'overview' && (
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Column 1: Business Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-4">Business Information</h3>
                    <div className="space-y-4 text-sm">
                      <div className="flex">
                        <span className="w-1/3 text-gray-500 font-medium">Business Type</span>
                        <span className="w-2/3 font-bold text-gray-900">Electronics</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-500 font-medium">GST Number</span>
                        <span className="w-2/3 font-bold text-gray-900">29ABCDE1234F1Z5</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-500 font-medium">PAN Number</span>
                        <span className="w-2/3 font-bold text-gray-900">ABCDE1234F</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-500 font-medium">Address</span>
                        <span className="w-2/3 font-bold text-gray-900">123, Electronic City, Bangalore<br/>Karnataka - 560100</span>
                      </div>
                      <div className="flex">
                        <span className="w-1/3 text-gray-500 font-medium">Zone / District / City</span>
                        <span className="w-2/3 font-bold text-gray-900">South Zone / Bangalore / Bangalore</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="pt-6 border-t border-gray-100">
                    <h3 className="font-bold text-gray-900 mb-4">Rate Card Assignment</h3>
                    <div className="flex items-center justify-between">
                       <div>
                         <p className="text-gray-500 text-xs font-medium mb-1">Assigned Rate Card</p>
                         <p className="font-bold text-gray-900 text-sm">Standard Tech Rate</p>
                       </div>
                       <button className="text-sm font-bold text-gray-600 border border-gray-200 px-3 py-1.5 rounded-md hover:bg-gray-50">
                         View Rate Card
                       </button>
                    </div>
                  </div>
                </div>

                {/* Column 2: Account Info */}
                <div>
                  <h3 className="font-bold text-gray-900 mb-4">Account Information</h3>
                  <div className="space-y-4 text-sm">
                    <div className="flex items-center">
                      <span className="w-1/3 text-gray-500 font-medium">Status</span>
                      <span className="w-2/3 font-bold text-green-600 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Active
                      </span>
                    </div>
                    <div className="flex">
                      <span className="w-1/3 text-gray-500 font-medium">Seller ID</span>
                      <span className="w-2/3 font-bold text-gray-900">{sellerId}</span>
                    </div>
                    <div className="flex">
                      <span className="w-1/3 text-gray-500 font-medium">Seller Since</span>
                      <span className="w-2/3 font-bold text-gray-900">12 Jan 2024</span>
                    </div>
                    <div className="flex">
                      <span className="w-1/3 text-gray-500 font-medium">Created By</span>
                      <span className="w-2/3 font-bold text-gray-900">Admin User</span>
                    </div>
                    <div className="flex">
                      <span className="w-1/3 text-gray-500 font-medium">Last Updated</span>
                      <span className="w-2/3 font-bold text-gray-900">30 Aug 2026, 10:15 AM</span>
                    </div>
                  </div>
                </div>

                {/* Column 3: Quick Actions */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 h-fit">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm">Quick Actions</h3>
                  <div className="space-y-3">
                    <button 
                      onClick={() => navigate(`/admin/sellers/${sellerId}/edit`)}
                      className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-[#fca5a5] text-[#E31837] rounded-lg text-sm font-bold hover:bg-red-50 transition-colors"
                    >
                      <Edit className="w-4 h-4" /> Edit Seller
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                      <List className="w-4 h-4" /> View Applications
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                      <FileText className="w-4 h-4" /> View KYC Details
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 text-blue-600 rounded-lg text-sm font-bold hover:bg-blue-50 transition-colors">
                      <CreditCard className="w-4 h-4" /> View Rate Cards
                    </button>
                    <button className="w-full flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 text-[#E31837] rounded-lg text-sm font-bold hover:bg-red-50 transition-colors mt-6">
                      <Ban className="w-4 h-4" /> Deactivate Seller
                    </button>
                  </div>
                </div>
                
             </div>
          )}
          
          {activeTab !== 'overview' && (
             <div className="py-12 flex flex-col items-center justify-center text-gray-400">
               <Activity className="w-8 h-8 mb-3 opacity-50" />
               <p className="text-sm font-medium">Content for {activeTab} will go here.</p>
             </div>
          )}
        </div>
      </div>
    </div>
  );
}
