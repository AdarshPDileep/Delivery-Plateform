import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import StatGrid from '../../../components/data/StatGrid';
import KPICard from '../../../components/ui/KPICard';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { shipments } from '../../../data/shipments';
import { Package, Truck, CheckCircle, Wallet, ArrowDownToLine, RefreshCcw } from 'lucide-react';
import { formatCurrency } from '../../../utils/helpers';

export default function SellerDashboard() {
  const myShipments = shipments.filter(s => s.sellerId === 'SL001');

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'receiver', label: 'Customer', render: r => r.name },
    { key: 'status', label: 'Current Status', type: 'status' },
    { key: 'paymentMode', label: 'Payment', render: (val, row) => (
      <div>
        <span className="text-sm">{val}</span>
        {val === 'COD' && <span className="text-xs text-teal-700 font-medium block">₹{row.codAmount}</span>}
      </div>
    )},
  ];

  return (
    <div>
      <PageHeader 
        title="Seller Dashboard" 
        description="Monitor your active shipments, COD collections, and RTOs." 
      />

      {/* KPIs */}
      <StatGrid columns={4} className="mb-6">
        <KPICard title="Total Orders (MTD)" value="1,250" icon={Package} />
        <KPICard title="In Transit" value="340" icon={Truck} color="bg-blue-50/50" />
        <KPICard title="Delivered (MTD)" value="890" icon={CheckCircle} color="bg-green-50/50" />
        <KPICard title="RTO (Returned)" value="20" icon={RefreshCcw} color="bg-red-50/50" trend="down" trendValue="1.6% Return Rate" />
      </StatGrid>

      <StatGrid columns={2} className="mb-6">
        <KPICard title="Pending COD Remittance" value={formatCurrency(4500)} icon={Wallet} color="bg-amber-50/50" />
        <KPICard title="Total Freight Spend (MTD)" value={formatCurrency(18500)} icon={ArrowDownToLine} />
      </StatGrid>

      <Card padding="p-0">
        <DataTable 
          title="Recent Active Orders"
          columns={columns} 
          data={myShipments.slice(0, 5)} 
          paginate={false}
          searchable={false}
        />
      </Card>
    </div>
  );
}
