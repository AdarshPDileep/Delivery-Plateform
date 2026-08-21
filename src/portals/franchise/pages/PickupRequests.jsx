import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, MoreVertical, MapPin, User, Calendar, Clock } from 'lucide-react';

export default function PickupRequests() {
  const [searchTerm, setSearchTerm] = useState('');

  const mockPickups = [
    {
      id: 'PKP-89234',
      seller: 'Acme Electronics',
      orders: 14,
      address: 'Plot 42, Electronics City Phase 1',
      date: 'Today',
      slot: '14:00 - 18:00',
      agent: 'Unassigned',
      status: 'Pending',
    },
    {
      id: 'PKP-89235',
      seller: 'Fashion Hub',
      orders: 3,
      address: 'Shop 12, Commercial Street',
      date: 'Today',
      slot: '10:00 - 14:00',
      agent: 'Rahul Kumar',
      status: 'In Progress',
    },
    {
      id: 'PKP-89236',
      seller: 'Organic Foods Co',
      orders: 22,
      address: 'Warehouse B, Yeshwanthpur Industrial Area',
      date: 'Tomorrow',
      slot: '10:00 - 14:00',
      agent: 'Mohammed Ali',
      status: 'Scheduled',
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return 'bg-amber-100 text-amber-700';
      case 'In Progress': return 'bg-blue-100 text-blue-700';
      case 'Scheduled': return 'bg-indigo-100 text-indigo-700';
      case 'Completed': return 'bg-emerald-100 text-emerald-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8 w-full mx-auto animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Pickup Requests</h1>
          <p className="text-gray-500">Manage and assign seller pickup requests.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search pickups..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-64"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
            <Filter className="w-4 h-4" /> Filters
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Pickup ID</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Seller & Address</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Orders</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Schedule</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Assigned Agent</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {mockPickups.map((pickup, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="font-bold text-gray-900">{pickup.id}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-gray-900">{pickup.seller}</span>
                      <span className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" /> {pickup.address}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center justify-center bg-gray-100 text-gray-800 text-xs font-bold px-2.5 py-1 rounded-full">
                      {pickup.orders} packages
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex flex-col text-sm text-gray-900">
                      <span className="flex items-center gap-1 font-medium"><Calendar className="w-3 h-3 text-gray-400" /> {pickup.date}</span>
                      <span className="flex items-center gap-1 text-gray-500 mt-1"><Clock className="w-3 h-3 text-gray-400" /> {pickup.slot}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {pickup.agent === 'Unassigned' ? (
                      <button className="text-sm font-medium text-[#E31837] hover:underline">Assign Agent</button>
                    ) : (
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                          <User className="w-3 h-3 text-gray-500" />
                        </div>
                        <span className="text-sm font-medium text-gray-900">{pickup.agent}</span>
                      </div>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${getStatusColor(pickup.status)}`}>
                      {pickup.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right">
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
