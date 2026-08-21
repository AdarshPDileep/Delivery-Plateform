import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { sellerPayouts } from '../../../data/operations';
import { formatCurrency } from '../../../utils/helpers';
import { Download } from 'lucide-react';
import Button from '../../../components/ui/Button';

export default function SellerCod() {
  const myPayouts = sellerPayouts.filter(p => p.sellerId === 'SL001');

  const columns = [
    { key: 'period', label: 'Settlement Period' },
    { key: 'codCollected', label: 'COD Collected', render: val => formatCurrency(val) },
    { key: 'shippingDeduction', label: 'Freight Charges', render: val => <span className="text-red-500">-{formatCurrency(val)}</span> },
    { key: 'codFee', label: 'COD Handling Fee', render: val => <span className="text-red-500">-{formatCurrency(val)}</span> },
    { key: 'netPayable', label: 'Net Credited', render: val => <span className="font-bold text-teal-700">{formatCurrency(val)}</span> },
    { key: 'status', label: 'Status', type: 'status' },
    { key: 'paidOn', label: 'Settlement Date', render: val => val ? new Date(val).toLocaleDateString() : 'Pending' },
  ];

  const getActions = (row) => (
    row.status === 'Settled' ? <Button variant="ghost" size="sm" icon={Download}>Statement</Button> : null
  );

  return (
    <div>
      <PageHeader 
        title="COD Remittance & Statements" 
        description="View your COD collections and net remittance after freight deductions."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={myPayouts} 
          actions={getActions}
        />
      </Card>
    </div>
  );
}
