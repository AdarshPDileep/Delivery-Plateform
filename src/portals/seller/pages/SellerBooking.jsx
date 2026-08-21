import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import FormSection from '../../../components/forms/FormSection';
import Select from '../../../components/ui/Select';
import { useToast } from '../../../context/ToastContext';
import { FileUp, Eye, QrCode } from 'lucide-react';
import { shipments } from '../../../data/shipments';

export default function SellerBooking() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const myShipments = shipments.filter(s => s.sellerId === 'SL001' && s.status === 'Booked');

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'receiver', label: 'Customer', render: r => `${r.name} (${r.pincode})` },
    { key: 'weight', label: 'Weight (kg)' },
    { key: 'paymentMode', label: 'Mode' },
    { key: 'createdAt', label: 'Date', render: val => new Date(val).toLocaleDateString() },
  ];

  return (
    <div>
      <PageHeader 
        title="Order Booking & Labels" 
        description="Book single orders or upload bulk sheets to generate AWBs."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" icon={FileUp} onClick={() => addToast('Bulk upload initialized')}>Bulk CSV Upload</Button>
            <Button onClick={() => setActiveDrawer(true)}>Single Order Booking</Button>
          </div>
        }
      />

      <Card padding="p-0">
        <DataTable 
          title="Recently Booked (Pending Pickup)"
          columns={columns} 
          data={myShipments} 
          searchFields={['awb']}
          actions={() => (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" icon={QrCode} onClick={() => addToast('Downloading PDF label...')}>Label</Button>
            </div>
          )}
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Book New Order" width="max-w-3xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Order Booked! AWB Generated', 'success'); setActiveDrawer(false); }}>Book & Generate AWB</Button></>}
      >
        <div className="space-y-6">
          <FormSection title="Customer Details">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Name" placeholder="e.g. Rahul Sharma" />
              <Input label="Mobile Number" placeholder="10-digit number" />
              <div className="col-span-2">
                <Input label="Full Delivery Address" placeholder="House no, street, area..." />
              </div>
              <Input label="Pincode" placeholder="e.g. 400001" />
              <Input label="City/State" placeholder="Auto-populated" disabled />
            </div>
          </FormSection>

          <FormSection title="Package Details">
            <div className="grid grid-cols-3 gap-4">
              <Input label="Weight (kg)" type="number" defaultValue={0.5} />
              <Input label="L x W x H (cm)" placeholder="e.g. 10x10x5" />
              <Input label="SKU / Order Ref" placeholder="e.g. ORD-10293" />
              
              <Select label="Payment Mode" options={['Prepaid', 'COD']} />
              <Input label="COD Amount (₹)" type="number" placeholder="If COD" />
              <Input label="Invoice Value (₹)" type="number" placeholder="Required for insurance" />
            </div>
          </FormSection>
        </div>
      </Drawer>
    </div>
  );
}
