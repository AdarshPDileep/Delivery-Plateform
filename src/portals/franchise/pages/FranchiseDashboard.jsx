import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import StatGrid from '../../../components/data/StatGrid';
import KPICard from '../../../components/ui/KPICard';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { shipments } from '../../../data/shipments';
import { Package, Truck, CheckCircle, Wallet, Users, ArrowDownToLine, ArrowUpFromLine } from 'lucide-react';
import { formatCurrency } from '../../../utils/helpers';

export default function FranchiseDashboard() {
  // Filter mock data for this franchise
  const myShipments = shipments.filter(s => s.franchiseId === 'FR001');

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'sender', label: 'Sender', render: s => s.name },
    { key: 'receiver', label: 'Receiver', render: r => r.name },
    { key: 'paymentMode', label: 'Type' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  return (
    <div>
      <PageHeader 
        title="Franchise Operations" 
        description="Overview of your territory's deliveries, pickups, and earnings." 
      />

      {/* KPIs */}
      <StatGrid columns={4} className="mb-6">
        <KPICard title="Pending Pickups" value="24" icon={Package} trend="down" trendValue="-3" />
        <KPICard title="Inbound to Branch" value="142" icon={ArrowDownToLine} />
        <KPICard title="Out for Delivery" value="89" icon={Truck} trend="up" trendValue="+12" />
        <KPICard title="Delivered Today" value="56" icon={CheckCircle} color="bg-green-50/50" />
      </StatGrid>

      <StatGrid columns={3} className="mb-6">
        <KPICard title="Active Agents" value="12 / 15" icon={Users} />
        <KPICard title="COD Collected (Today)" value={formatCurrency(4500)} icon={Wallet} />
        <KPICard title="My Earnings (MTD)" value={formatCurrency(12450)} icon={ArrowUpFromLine} color="bg-purple-50/50" />
      </StatGrid>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Recent Shipments */}
        <Card padding="p-0">
          <DataTable 
            title="Recent Consignments"
            columns={columns} 
            data={myShipments} 
            paginate={false}
          />
        </Card>

        {/* Quick Actions / Alerts */}
        <Card>
          <h3 className="text-base font-semibold text-slate-900 mb-4">Operations Alerts</h3>
          <div className="space-y-3">
            <div className="p-3 bg-red-50 border border-red-100 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-red-800">3 Agents have pending COD remittance</span>
              <button className="text-xs font-semibold text-red-600 hover:text-red-700">Collect Now</button>
            </div>
            <div className="p-3 bg-orange-50 border border-orange-100 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-orange-800">12 Shipments missed delivery SLA</span>
              <button className="text-xs font-semibold text-orange-600 hover:text-orange-700">View List</button>
            </div>
            <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-between">
              <span className="text-sm font-medium text-blue-800">Inbound Manifest MF002 received</span>
              <button className="text-xs font-semibold text-blue-600 hover:text-blue-700">Acknowledge</button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
