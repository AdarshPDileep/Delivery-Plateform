import React from 'react';
import { Package, Truck, MapPin, CheckCircle2, AlertCircle, IndianRupee, Wallet, TrendingUp, Users } from 'lucide-react';

export default function FranchiseDashboard() {
  const kpis = [
    { title: 'Pickups Due', value: '42', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'Shipments in Hand', value: '156', icon: Truck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Inbound Transit', value: '89', icon: MapPin, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'Out for Delivery', value: '112', icon: Truck, color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'Delivered Today', value: '284', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'Failed Deliveries', value: '14', icon: AlertCircle, color: 'text-red-600', bg: 'bg-blue-50' },
    { title: 'COD Pending', value: '₹45,200', icon: IndianRupee, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'Current Earnings', value: '₹8,450', icon: Wallet, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Franchise Control Center</h1>
          <p className="text-gray-500">Koramangala Zone, Bangalore (FR-BLR-001)</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors">
            Download Report
          </button>
          <button className="bg-[#1d4ed8] text-white px-4 py-2 rounded-lg font-medium hover:bg-[#1e40af] transition-colors">
            Scan Inbound Bag
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-start justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</p>
                <h3 className="text-2xl font-bold text-gray-900">{kpi.value}</h3>
              </div>
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${kpi.bg}`}>
                <Icon className={`w-6 h-6 ${kpi.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Today's Pickups */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Pending Pickups</h2>
            <button className="text-sm font-medium text-[#1d4ed8] hover:underline">View All</button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                    <Package className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">TechNova Solutions</h4>
                    <p className="text-xs text-gray-500">14 packages • HSR Layout Sector 2</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50">
                  Assign Agent
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Agent Performance */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Agent Performance</h2>
            <button className="text-sm font-medium text-[#1d4ed8] hover:underline">Manage Agents</button>
          </div>
          <div className="space-y-4">
            {[
              { name: 'Rahul Kumar', delivered: 42, pending: 8, cod: '₹12,400', status: 'Active' },
              { name: 'Mohammed Ali', delivered: 38, pending: 12, cod: '₹8,500', status: 'Active' },
              { name: 'Vikram Singh', delivered: 15, pending: 35, cod: '₹4,200', status: 'Inactive' },
            ].map((agent, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="w-5 h-5 text-gray-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 flex items-center gap-2">
                      {agent.name}
                      <span className={`w-2 h-2 rounded-full ${agent.status === 'Active' ? 'bg-green-500' : 'bg-gray-400'}`}></span>
                    </h4>
                    <p className="text-xs text-gray-500">{agent.delivered} Delivered • {agent.pending} Pending</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-xs text-gray-500 mb-0.5">COD Collected</p>
                  <p className="font-bold text-gray-900">{agent.cod}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
