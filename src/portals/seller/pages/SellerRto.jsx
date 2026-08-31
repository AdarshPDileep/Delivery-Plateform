import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { shipments } from '../../../data/shipments';

export default function SellerRto() {
  const rtoShipments = [
    {
      id: 101,
      awb: 'CG20240101',
      receiver: { name: 'Priya Patel', phone: '9123456780', address: 'Koramangala, Bangalore' },
      status: 'Delivery Failed',
      exceptionReason: 'Customer Not Available',
    },
    {
      id: 102,
      awb: 'CG20240102',
      receiver: { name: 'Amit Kumar', phone: '9988776655', address: 'Connaught Place, Delhi' },
      status: 'RTO Initiated',
      exceptionReason: 'Address Incomplete',
    },
    {
      id: 103,
      awb: 'CG20240103',
      receiver: { name: 'Vikram Singh', phone: '9012345678', address: 'MG Road, Pune' },
      status: 'RTO Delivered',
      exceptionReason: 'Customer Refused / Unavailable',
    },
    {
      id: 104,
      awb: 'CG20240104',
      receiver: { name: 'Meera Iyer', phone: '9567890123', address: 'T Nagar, Chennai' },
      status: 'Delivery Failed',
      exceptionReason: 'Fake Order / COD Refused',
    },
  ];

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
