import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { shipments } from '../../../data/shipments';

export default function SellerRto() {
  const rtoShipments = shipments.filter(s => s.sellerId === 'SL001' && (s.status === 'RTO Initiated' || s.status === 'RTO Delivered' || s.status === 'Delivery Failed'));

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'receiver', label: 'Customer', render: r => r.name },
    { key: 'status', label: 'Return Status', type: 'status' },
    { key: 'exceptionReason', label: 'Reason for Return', render: val => val || 'Customer Refused / Unavailable' },
  ];

  return (
    <div>
      <PageHeader 
        title="Returns & RTO Management" 
        description="Track undelivered shipments returning to your origin warehouse."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={rtoShipments} 
        />
      </Card>
    </div>
  );
}
