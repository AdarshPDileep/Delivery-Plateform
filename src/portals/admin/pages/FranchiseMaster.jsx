import React, { useState } from 'react';
import { Store, Search, Filter, MoreVertical, Shield, MapPin, CheckCircle, XCircle } from 'lucide-react';

export default function FranchiseMaster() {
  const [searchTerm, setSearchTerm] = useState('');

  const franchises = [
    {
      id: 'FR-BLR-001',
      name: 'Koramangala Logistics Hub',
      type: 'Town Franchise',
      location: 'Koramangala, Bangalore',
      owner: 'Rahul Sharma',
      phone: '+91 98765 43210',
      status: 'Active',
      shipments: '840/day',
      cod: '₹1.4L',
    },
    {
      id: 'FR-DEL-042',
      name: 'Saket Delivery Point',
      type: 'Taluk Franchise',
      location: 'Saket, New Delhi',
      owner: 'Amit Patel',
      phone: '+91 91234 56789',
      status: 'Active',
      shipments: '620/day',
      cod: '₹84K',
    },
    {
      id: 'FR-BOM-112',
      name: 'Andheri East Express',
      type: 'Town Franchise',
      location: 'Andheri East, Mumbai',
      owner: 'Priya Desai',
      phone: '+91 99887 76655',
      status: 'Pending KYC',
      shipments: '-',
      cod: '-',
    }
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Franchise Management</h1>
          <p className="text-gray-500">Manage network partners, KYC, territory allocation and performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search franchises..." 
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
        {['All Franchises', 'Applications', 'Territory Allocation', 'Performance'].map((tab, idx) => (
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
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Franchise</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Type & Location</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Owner Contact</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Volume & COD</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {franchises.map((franchise) => (
                <tr key={franchise.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Store className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">{franchise.name}</div>
                        <div className="text-xs text-gray-500 font-mono mt-0.5">{franchise.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{franchise.type}</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {franchise.location}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{franchise.owner}</span>
                      <span className="text-sm text-gray-500 mt-1">{franchise.phone}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{franchise.shipments}</span>
                      <span className="text-sm text-gray-500 mt-1">{franchise.cod} Pending</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {franchise.status === 'Active' ? (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
                        <CheckCircle className="w-3 h-3" /> Active
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800">
                        <Shield className="w-3 h-3" /> {franchise.status}
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
                    <button className="text-[#E31837] text-sm font-bold hover:underline mr-4">View Details</button>
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
