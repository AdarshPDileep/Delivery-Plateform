import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import StatGrid from '../../../components/data/StatGrid';
import KPICard from '../../../components/ui/KPICard';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { shipments } from '../../../data/shipments';
import { Package, Truck, CheckCircle, XCircle, Clock, AlertTriangle, Wallet, Activity } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { formatCurrency } from '../../../utils/helpers';
import { codSummary } from '../../../data/operations';

const deliveryData = [
  { name: 'Mon', delivered: 120, booked: 150 },
  { name: 'Tue', delivered: 145, booked: 160 },
  { name: 'Wed', delivered: 130, booked: 140 },
  { name: 'Thu', delivered: 160, booked: 180 },
  { name: 'Fri', delivered: 185, booked: 200 },
  { name: 'Sat', delivered: 190, booked: 170 },
  { name: 'Sun', delivered: 90, booked: 80 },
];

const statusData = [
  { name: 'In Transit', value: 45, color: '#f59e0b' },
  { name: 'Out for Delivery', value: 25, color: '#06b6d4' },
  { name: 'Delivered', value: 65, color: '#10b981' },
  { name: 'RTO', value: 10, color: '#ef4444' },
  { name: 'Exceptions', value: 5, color: '#f97316' },
];

export default function AdminDashboard() {
  const recentShipments = shipments.slice(0, 5);

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'sender', label: 'Sender', render: s => s.name },
    { key: 'receiver', label: 'Receiver', render: r => r.name },
    { key: 'status', label: 'Status', type: 'status' },
    { key: 'updatedAt', label: 'Last Update', render: v => new Date(v).toLocaleString('en-IN', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }) },
  ];

  return (
    <div>
      <PageHeader 
        title="Command Center" 
        description="Overview of network performance and real-time operations" 
      />

      {/* Global Filter */}
      <Card className="mb-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">Global Filter</h4>
        <GeoHierarchyPicker maxLevel="town" />
      </Card>

      {/* KPIs */}
      <StatGrid columns={4} className="mb-6">
        <KPICard title="Total Booked (Today)" value="1,245" icon={Package} trend="up" trendValue="+12%" />
        <KPICard title="In Transit" value="3,480" icon={Truck} />
        <KPICard title="Out for Delivery" value="1,120" icon={Clock} />
        <KPICard title="Delivered (Today)" value="985" icon={CheckCircle} trend="up" trendValue="+5%" />
        <KPICard title="RTO / Failed" value="45" icon={XCircle} trend="down" trendValue="-2%" color="bg-red-50/50" />
        <KPICard title="COD in Hand" value={formatCurrency(codSummary.totalCollected)} icon={Wallet} subtitle="Pending Remittance" />
        <KPICard title="SLA Breaches" value="12" icon={AlertTriangle} trend="up" trendValue="+2" color="bg-orange-50/50" />
        <KPICard title="Avg Network Score" value="94.2%" icon={Activity} trend="flat" trendValue="0%" />
      </StatGrid>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Delivery Trend Chart */}
        <Card className="lg:col-span-2">
          <h3 className="text-base font-semibold text-slate-900 mb-4">Volume Trend (7 Days)</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={deliveryData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#64748b' }} />
                <RechartsTooltip cursor={{ fill: '#f1f5f9' }} contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="booked" name="Booked" fill="#cbd5e1" radius={[4, 4, 0, 0]} />
                <Bar dataKey="delivered" name="Delivered" fill="#1e3a8a" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Status Distribution */}
        <Card>
          <h3 className="text-base font-semibold text-slate-900 mb-4">Active Status Distribution</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={statusData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={2} dataKey="value">
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <RechartsTooltip contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-2 justify-center mt-2">
            {statusData.map(s => (
              <div key={s.name} className="flex items-center gap-1.5 text-xs text-slate-600">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: s.color }} />
                {s.name} ({s.value}%)
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Recent Shipments */}
      <Card padding="p-0">
        <DataTable 
          title="Recent Active Shipments"
          columns={columns} 
          data={recentShipments} 
          searchable={false}
          paginate={false}
        />
      </Card>
    </div>
  );
}
