import React from 'react';
import { Package, Truck, CheckCircle, RefreshCcw, Wallet, ArrowDownToLine, TrendingUp, AlertTriangle } from 'lucide-react';
import { shipments } from '../../../data/shipments';
import { formatCurrency } from '../../../utils/helpers';

const StatCard = ({ title, value, icon: Icon, colorClass, subtitle }) => (
  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 relative overflow-hidden group">
    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${colorClass}`}>
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
      <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      {subtitle && <p className="text-xs font-medium text-gray-400 mt-2">{subtitle}</p>}
    </div>
    
    <div className="absolute -right-6 -bottom-6 opacity-[0.03] group-hover:scale-110 transition-transform duration-500">
      <Icon className="w-32 h-32" />
    </div>
  </div>
);

export default function SellerDashboard() {
  const myShipments = shipments.filter(s => s.sellerId === 'SL001');

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm mt-1">Welcome back. Here's an overview of your shipments.</p>
        </div>
        <button className="bg-[#065f46] hover:bg-[#064e3b] text-white px-6 py-2.5 rounded-xl font-medium transition-colors shadow-lg shadow-emerald-900/20 flex items-center gap-2">
          <Package className="w-4 h-4" />
          Create Shipment
        </button>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Shipments" 
          value="1,250" 
          icon={Package} 
          colorClass="bg-blue-50 text-blue-600"
          subtitle="This Month"
        />
        <StatCard 
          title="In Transit" 
          value="340" 
          icon={Truck} 
          colorClass="bg-indigo-50 text-indigo-600"
          subtitle="Currently Moving"
        />
        <StatCard 
          title="Delivered" 
          value="890" 
          icon={CheckCircle} 
          colorClass="bg-emerald-50 text-emerald-600"
          subtitle="Successfully Completed"
        />
        <StatCard 
          title="RTO / Exceptions" 
          value="20" 
          icon={AlertTriangle} 
          colorClass="bg-emerald-50 text-red-600"
          subtitle="Action Required"
        />
      </div>

      {/* Financials & Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex items-center justify-between mb-6">
            <h3 className="font-bold text-lg text-gray-900">Shipment Volume Trend</h3>
            <select className="bg-gray-50 border border-gray-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:border-[#065f46]">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          <div className="h-64 flex items-end gap-2">
            {/* Mock Chart Bars */}
            {[40, 60, 45, 80, 55, 90, 75].map((height, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group">
                <div className="w-full bg-gray-100 rounded-t-lg relative h-full flex items-end">
                  <div 
                    style={{ height: `${height}%` }} 
                    className="w-full bg-[#065f46]/20 group-hover:bg-[#065f46] rounded-t-lg transition-all duration-300 relative"
                  ></div>
                </div>
                <span className="text-xs text-gray-400 font-medium">Day {i+1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Wallet className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">COD Remittance</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">Pending amount to be settled to your bank account.</p>
            <div className="text-3xl font-extrabold text-gray-900 mb-2">{formatCurrency(45000)}</div>
            <div className="text-xs font-medium text-emerald-600 flex items-center gap-1 bg-emerald-50 inline-flex px-2 py-1 rounded-md">
              <TrendingUp className="w-3 h-3" /> +12% from last week
            </div>
          </div>
          
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex-1">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-gray-50 text-gray-600 flex items-center justify-center">
                <ArrowDownToLine className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-gray-900">Wallet Balance</h3>
            </div>
            <p className="text-gray-500 text-sm mb-4">Prepaid balance for label generation.</p>
            <div className="text-3xl font-extrabold text-gray-900 mb-4">{formatCurrency(18500)}</div>
            <button className="w-full text-center text-sm font-bold text-[#065f46] hover:bg-emerald-50 py-2 rounded-lg transition-colors border border-[#065f46]/20">
              Recharge Wallet
            </button>
          </div>
        </div>
      </div>

      {/* Recent Orders Table */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex items-center justify-between">
          <h3 className="font-bold text-lg text-gray-900">Recent Shipments</h3>
          <button className="text-sm font-medium text-[#065f46] hover:underline">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-50 text-gray-500">
              <tr>
                <th className="px-6 py-4 font-semibold rounded-tl-lg">AWB Number</th>
                <th className="px-6 py-4 font-semibold">Customer</th>
                <th className="px-6 py-4 font-semibold">Status</th>
                <th className="px-6 py-4 font-semibold">Payment</th>
                <th className="px-6 py-4 font-semibold rounded-tr-lg">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {myShipments.slice(0, 5).map((order) => (
                <tr key={order.awb} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{order.awb}</td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{order.receiver.name}</div>
                    <div className="text-xs text-gray-500">{order.receiver.city}</div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                      {order.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{order.paymentMode}</div>
                    {order.paymentMode === 'COD' && (
                      <div className="text-xs text-emerald-600 font-bold font-mono mt-0.5">₹{order.codAmount}</div>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-[#065f46] text-sm font-medium hover:underline">Track</button>
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
