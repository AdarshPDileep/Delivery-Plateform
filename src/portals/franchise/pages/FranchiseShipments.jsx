import React, { useState } from 'react';
import { Package, Truck, CheckCircle2, Clock, Search, Filter, Download, Plus, Eye, MapPin, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function FranchiseShipments() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const summaryCards = [
    { label: 'Total Shipments', value: '1,286', icon: Package },
    { label: 'In Transit', value: '524', icon: Truck },
    { label: 'Delivered', value: '612', icon: CheckCircle2 },
    { label: 'Pending Pickup', value: '150', icon: Clock },
  ];

  const tabs = ['All', 'In Transit', 'Delivered', 'RTO', 'Pending'];

  const shipments = [
    { awb: 'CGF24001', orderId: 'ORD10001', seller: 'TechNova India', customer: 'Amit Verma', destination: 'Mumbai, Maharashtra', date: '31 Aug 2026, 10:30 AM', status: 'Delivered', payment: 'Prepaid' },
    { awb: 'CGF24002', orderId: 'ORD10002', seller: 'Style Hub', customer: 'Neha Singh', destination: 'Delhi, Delhi', date: '31 Aug 2026, 09:15 AM', status: 'In Transit', payment: 'COD' },
    { awb: 'CGF24003', orderId: 'ORD10003', seller: 'Gadget Galaxy', customer: 'Rahul Kapoor', destination: 'Bengaluru, Karnataka', date: '30 Aug 2026, 08:45 PM', status: 'Out for Delivery', payment: 'Prepaid' },
    { awb: 'CGF24004', orderId: 'ORD10004', seller: 'Home Essentials', customer: 'Pooja Sharma', destination: 'Hyderabad, Telangana', date: '30 Aug 2026, 07:20 PM', status: 'Pending Pickup', payment: 'COD' },
    { awb: 'CGF24005', orderId: 'ORD10005', seller: 'Fashion Street', customer: 'Karan Mehta', destination: 'Ahmedabad, Gujarat', date: '29 Aug 2026, 06:10 PM', status: 'RTO', payment: 'COD' },
    { awb: 'CGF24006', orderId: 'ORD10006', seller: 'BookWorld', customer: 'Sneha Reddy', destination: 'Pune, Maharashtra', date: '29 Aug 2026, 05:05 PM', status: 'Delivered', payment: 'Prepaid' },
    { awb: 'CGF24007', orderId: 'ORD10007', seller: 'HealthKart', customer: 'Vikas Joshi', destination: 'Chennai, Tamil Nadu', date: '29 Aug 2026, 04:30 PM', status: 'In Transit', payment: 'COD' },
    { awb: 'CGF24008', orderId: 'ORD10008', seller: 'Kids Zone', customer: 'Anjali Patel', destination: 'Kolkata, West Bengal', date: '28 Aug 2026, 03:40 PM', status: 'Pending Pickup', payment: 'Prepaid' },
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-green-50 text-green-600';
      case 'In Transit': return 'bg-blue-50 text-blue-600';
      case 'Out for Delivery': return 'bg-purple-50 text-purple-600';
      case 'Pending Pickup': return 'bg-orange-50 text-orange-600';
      case 'RTO': return 'bg-red-50 text-red-600';
      default: return 'bg-gray-50 text-gray-600';
    }
  };

  const getPaymentStyle = (payment) => {
    switch (payment) {
      case 'Prepaid': return 'text-blue-600 bg-blue-50';
      case 'COD': return 'text-orange-600 bg-orange-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="p-8 space-y-6 animate-fade-in bg-gray-50 min-h-screen">
      
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900 tracking-tight">All Shipments</h1>
        <p className="text-gray-500 text-sm mt-1">Track and manage all shipments handled by your franchise.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {summaryCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 flex items-center gap-5 relative overflow-hidden">
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-blue-600"></div>
              <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0 ml-1">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-500 mb-1">{card.label}</p>
                <h3 className="text-3xl font-extrabold text-gray-900">{card.value}</h3>
              </div>
            </div>
          );
        })}
      </div>

      {/* Main Container */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        
        {/* Toolbar */}
        <div className="p-4 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          {/* Tabs */}
          <div className="flex border border-gray-200 rounded-lg overflow-hidden divide-x divide-gray-200 bg-white">
            {tabs.map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-bold transition-colors ${
                  activeTab === tab 
                    ? 'text-blue-600 bg-blue-50/50' 
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search by AWB, Order ID, or Name..." 
                className="pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 w-64 placeholder:font-normal"
              />
            </div>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" /> Filter
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" /> Export
            </button>
            <button 
              onClick={() => navigate('/franchise/booking')}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-bold hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Plus className="w-4 h-4" /> New Booking
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-white text-gray-900 border-b border-gray-100">
              <tr>
                <th className="px-6 py-4 font-bold text-[13px]">AWB</th>
                <th className="px-6 py-4 font-bold text-[13px]">Order ID</th>
                <th className="px-6 py-4 font-bold text-[13px]">Seller / Customer</th>
                <th className="px-6 py-4 font-bold text-[13px]">Destination</th>
                <th className="px-6 py-4 font-bold text-[13px]">Date</th>
                <th className="px-6 py-4 font-bold text-[13px]">Status</th>
                <th className="px-6 py-4 font-bold text-[13px]">Payment</th>
                <th className="px-6 py-4 font-bold text-[13px] text-center">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {shipments.map((shipment, i) => (
                <tr key={i} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 font-medium text-gray-900">{shipment.awb}</td>
                  <td className="px-6 py-4 font-medium text-gray-900">{shipment.orderId}</td>
                  <td className="px-6 py-4">
                    <p className="font-bold text-gray-900">{shipment.seller}</p>
                    <p className="text-[11px] font-medium text-gray-500">{shipment.customer}</p>
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-700">{shipment.destination}</td>
                  <td className="px-6 py-4 font-medium text-gray-700">{shipment.date}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold ${getStatusStyle(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold ${getPaymentStyle(shipment.payment)}`}>
                      {shipment.payment}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-blue-600 hover:bg-blue-50 transition-colors bg-white">
                        <Eye className="w-3.5 h-3.5" /> View
                      </button>
                      <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-[11px] font-bold text-blue-600 hover:bg-blue-50 transition-colors bg-white">
                        <MapPin className="w-3.5 h-3.5" /> Track
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white">
          <p className="text-[13px] text-gray-500 font-medium">Showing 1 to 8 of 1,286 shipments</p>
          <div className="flex items-center gap-1.5 text-[13px] font-bold">
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-600 text-white shadow-sm border border-blue-600">1</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-gray-600 hover:bg-gray-50 transition-colors">2</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-transparent text-gray-600 hover:bg-gray-50 transition-colors">3</button>
            <span className="w-8 h-8 flex items-center justify-center text-gray-400"><MoreHorizontal className="w-4 h-4" /></span>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-600 hover:bg-gray-50 transition-colors">161</button>
            <button className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
