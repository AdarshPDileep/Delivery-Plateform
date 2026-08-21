import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { franchiseEarnings } from '../../../data/rateCards';
import { formatCurrency } from '../../../utils/helpers';
import { Download } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function FranchiseEarnings() {
  const myEarnings = franchiseEarnings.filter(e => e.franchiseId === 'FR001');

  const columns = [
    { key: 'period', label: 'Billing Period' },
    { key: 'totalShipments', label: 'Shipments Handled' },
    { key: 'grossEarnings', label: 'Gross Commission', render: val => formatCurrency(val) },
    { key: 'deductions', label: 'Deductions (TDS/Penalties)', render: val => <span className="text-red-500">-{formatCurrency(val)}</span> },
    { key: 'netPayable', label: 'Net Payout', render: val => <span className="font-bold text-purple-700">{formatCurrency(val)}</span> },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const getActions = (row) => (
    row.status === 'Settled' ? <Button variant="ghost" size="sm" icon={Download}>Invoice</Button> : null
  );

  return (
    <div>
      <PageHeader 
        title="Earnings & Commission Statement" 
        description="View your payout history and commission calculations."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={myEarnings} 
          actions={getActions}
        />
      </Card>
    </div>
  );
}
