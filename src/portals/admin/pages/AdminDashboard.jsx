import React from 'react';
import { Package, Truck, MapPin, CheckCircle2, AlertTriangle, IndianRupee, Store, TrendingUp, AlertOctagon } from 'lucide-react';

export default function AdminDashboard() {
  const kpis = [
    { title: 'Shipments Today', value: '2,458', icon: Package, color: 'text-blue-600', bg: 'bg-blue-50' },
    { title: 'In Transit', value: '8,450', icon: Truck, color: 'text-indigo-600', bg: 'bg-indigo-50' },
    { title: 'Out for Delivery', value: '1,830', icon: MapPin, color: 'text-cyan-600', bg: 'bg-cyan-50' },
    { title: 'Delivered', value: '6,242', icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { title: 'RTO', value: '286', icon: AlertTriangle, color: 'text-amber-600', bg: 'bg-amber-50' },
    { title: 'COD in Hand', value: '₹8.42L', icon: IndianRupee, color: 'text-purple-600', bg: 'bg-purple-50' },
    { title: 'SLA Breaches', value: '32', icon: AlertOctagon, color: 'text-red-600', bg: 'bg-red-50' },
    { title: 'Active Franchises', value: '146', icon: Store, color: 'text-emerald-600', bg: 'bg-emerald-50' },
  ];

  return (
    <div className="p-8 max-w-[1600px] mx-auto space-y-8 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Control Tower</h1>
          <p className="text-gray-500">Network-wide operations overview for today.</p>
        </div>
        <div className="flex gap-3">
          <select className="bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-50 transition-colors outline-none">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>This Month</option>
          </select>
          <button className="bg-[#111111] text-white px-4 py-2 rounded-lg font-medium hover:bg-black transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-500 mb-1">{kpi.title}</p>
                <h3 className="text-3xl font-bold text-gray-900">{kpi.value}</h3>
              </div>
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${kpi.bg}`}>
                <Icon className={`w-7 h-7 ${kpi.color}`} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Shipment Trend (Mock) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Shipment Trend (Booked vs Delivered)</h2>
            <button className="text-sm font-medium text-gray-500 hover:text-gray-900">View Details</button>
          </div>
          <div className="h-64 flex items-end justify-between gap-2 px-2 relative">
            {/* CSS Mock Chart */}
            <div className="absolute inset-0 border-b border-gray-200 z-0 top-[80%]"></div>
            <div className="absolute inset-0 border-b border-gray-200 z-0 top-[60%]"></div>
            <div className="absolute inset-0 border-b border-gray-200 z-0 top-[40%]"></div>
            <div className="absolute inset-0 border-b border-gray-200 z-0 top-[20%]"></div>
            
            {[60, 45, 80, 50, 95, 75, 100].map((h, i) => (
              <div key={i} className="flex-1 flex items-end justify-center gap-1 z-10 h-full pb-2 group">
                <div className="w-1/3 bg-blue-100 rounded-t-sm group-hover:bg-blue-200 transition-colors" style={{ height: `${h}%` }}></div>
                <div className="w-1/3 bg-[#E31837] rounded-t-sm group-hover:bg-[#c0122e] transition-colors" style={{ height: `${h * 0.85}%` }}></div>
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-gray-400 mt-2 px-4">
            <span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
          </div>
          <div className="flex items-center justify-center gap-6 mt-4">
            <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 bg-blue-100 rounded-full"></div> Booked</div>
            <div className="flex items-center gap-2 text-sm"><div className="w-3 h-3 bg-[#E31837] rounded-full"></div> Delivered</div>
          </div>
        </div>

        {/* Status Distribution */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col">
          <h2 className="text-lg font-bold text-gray-900 mb-6">Status Distribution</h2>
          <div className="flex-1 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">In Transit</span>
                <span className="font-bold text-gray-900">45%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Delivered</span>
                <span className="font-bold text-gray-900">35%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-emerald-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Out for Delivery</span>
                <span className="font-bold text-gray-900">12%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full" style={{ width: '12%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="font-medium text-gray-700">Exceptions/RTO</span>
                <span className="font-bold text-gray-900">8%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '8%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Franchise Performance Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900">Franchise Performance</h2>
          <button className="text-sm font-medium text-[#E31837] hover:underline">View Full Leaderboard</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Franchise</th>
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Shipments</th>
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">Delivered</th>
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">RTO</th>
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider">COD Pending</th>
                <th className="px-4 py-3 text-xs font-bold text-gray-500 uppercase tracking-wider text-right">SLA %</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {[
                { name: 'FR-BLR-001 (Koramangala)', shipments: 840, delivered: 790, rto: 12, cod: '₹1.4L', sla: 98.5 },
                { name: 'FR-DEL-042 (Saket)', shipments: 620, delivered: 580, rto: 8, cod: '₹84K', sla: 97.2 },
                { name: 'FR-BOM-112 (Andheri East)', shipments: 910, delivered: 840, rto: 25, cod: '₹2.1L', sla: 96.8 },
                { name: 'FR-MAA-005 (Adyar)', shipments: 450, delivered: 420, rto: 5, cod: '₹45K', sla: 99.1 },
              ].map((row, i) => (
                <tr key={i} className="hover:bg-gray-50">
                  <td className="px-4 py-3 font-bold text-gray-900">{row.name}</td>
                  <td className="px-4 py-3 text-gray-600">{row.shipments}</td>
                  <td className="px-4 py-3 text-gray-600">{row.delivered}</td>
                  <td className="px-4 py-3 text-red-600 font-medium">{row.rto}</td>
                  <td className="px-4 py-3 font-medium text-gray-900">{row.cod}</td>
                  <td className="px-4 py-3 text-right">
                    <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-bold ${row.sla > 98 ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'}`}>
                      {row.sla}%
                    </span>
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
