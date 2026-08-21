import React, { useState } from 'react';
import { Users, Search, Filter, MoreVertical, ShieldAlert, FileText, CheckCircle, Store, MapPin } from 'lucide-react';

export default function SellerMaster() {
  const [searchTerm, setSearchTerm] = useState('');

  const sellers = [
    {
      id: 'SEL-94823',
      business: 'Acme Electronics',
      contact: 'John Doe',
      location: 'Bangalore, KA',
      kyc: 'Verified',
      rateCard: 'Standard Tech Rate',
      orders: '1,420 total',
      status: 'Active',
    },
    {
      id: 'SEL-94824',
      business: 'Fashion Hub Retail',
      contact: 'Priya Sharma',
      location: 'New Delhi, DL',
      kyc: 'Pending',
      rateCard: 'Default rate',
      orders: '0 total',
      status: 'Under Review',
    },
    {
      id: 'SEL-94825',
      business: 'Organic Foods Co',
      contact: 'Michael Smith',
      location: 'Mumbai, MH',
      kyc: 'Verified',
      rateCard: 'FMCG Special',
      orders: '840 total',
      status: 'Active',
    }
  ];

  const getKycColor = (kyc) => {
    switch (kyc) {
      case 'Verified': return 'bg-emerald-100 text-emerald-800';
      case 'Pending': return 'bg-amber-100 text-amber-800';
      case 'Rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Seller Management</h1>
          <p className="text-gray-500">Approve accounts, verify KYC documents, and assign rate cards.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search sellers by name, ID..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" /> Filter
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-6 border-b border-gray-200 mb-6">
        {['All Sellers', 'Applications (1)', 'KYC Verification', 'Rate Cards'].map((tab, idx) => (
          <button
            key={tab}
            className={`pb-4 text-sm font-bold transition-colors relative ${
              idx === 0 ? 'text-[#E31837]' : 'text-gray-500 hover:text-gray-900'
            }`}
          >
            {tab}
            {idx === 0 && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31837] rounded-t-full"></div>
            )}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Business Details</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Contact & Location</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">KYC Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Rate Card</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {sellers.map((seller) => (
                <tr key={seller.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center flex-shrink-0">
                        <Store className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{seller.business}</div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">{seller.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{seller.contact}</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {seller.location}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getKycColor(seller.kyc)}`}>
                      {seller.kyc === 'Verified' ? <CheckCircle className="w-3 h-3 mr-1" /> : <ShieldAlert className="w-3 h-3 mr-1" />}
                      {seller.kyc}
                    </span>
                    {seller.kyc === 'Pending' && (
                      <button className="block text-xs text-[#E31837] font-medium mt-2 hover:underline">Review Docs</button>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-gray-400" />
                      <span className="font-medium text-gray-700 text-sm">{seller.rateCard}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      seller.status === 'Active' ? 'bg-gray-100 text-gray-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {seller.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-[#E31837] text-sm font-bold hover:underline mr-4">Manage</button>
                    <button className="text-gray-400 hover:text-gray-900 transition-colors">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
