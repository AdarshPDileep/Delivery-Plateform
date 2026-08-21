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
import { FileUp, Eye, Edit } from 'lucide-react';
import { shipments } from '../../../data/shipments';

export default function ConsignmentEntry() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'awb', label: 'AWB' },
    { key: 'sender', label: 'Sender', render: s => s.name },
    { key: 'receiver', label: 'Receiver', render: r => `${r.name} (${r.pincode})` },
    { key: 'weight', label: 'Weight (kg)', render: val => val },
    { key: 'paymentMode', label: 'Mode' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  return (
    <div>
      <PageHeader 
        title="Booking & Consignment Entry" 
        description="Book new shipments, generate AWBs, and print labels for walk-in customers."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" icon={FileUp} onClick={() => addToast('Bulk upload initiated')}>Bulk Excel Import</Button>
            <Button onClick={() => setActiveDrawer(true)}>New Booking</Button>
          </div>
        }
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={shipments.filter(s => s.franchiseId === 'FR001')} 
          searchFields={['awb']}
          actions={() => (
            <div className="flex gap-2">
              <Button variant="ghost" size="sm" icon={Eye} />
              <Button variant="ghost" size="sm" icon={Edit} />
            </div>
          )}
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="New Walk-in Consignment" width="max-w-3xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Consignment Booked! AWB: CG240999', 'success'); setActiveDrawer(false); }}>Generate AWB & Print Label</Button></>}
      >
        <div className="space-y-6">
          <FormSection title="Sender Details">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Mobile Number (Auto-fetch)" placeholder="e.g. 9876543210" />
              <Input label="Name" placeholder="Sender Name" />
              <div className="col-span-2">
                <Input label="Address" placeholder="Full address" />
              </div>
              <Input label="Pincode" placeholder="e.g. 400001" />
            </div>
          </FormSection>

          <FormSection title="Receiver Details">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Mobile Number" placeholder="e.g. 9876543210" />
              <Input label="Name" placeholder="Receiver Name" />
              <div className="col-span-2">
                <Input label="Address" placeholder="Full address" />
              </div>
              <Input label="Pincode" placeholder="e.g. 110001" />
              <Select label="Destination Zone (Auto-mapped)" options={['North', 'South', 'East', 'West']} />
            </div>
          </FormSection>

          <FormSection title="Shipment Details & Pricing">
            <div className="grid grid-cols-3 gap-4">
              <Input label="Physical Weight (kg)" type="number" defaultValue={1} />
              <Input label="L x W x H (cm)" placeholder="e.g. 10x10x10" />
              <Input label="Volumetric Weight (kg)" disabled placeholder="Auto-calculated" />
              
              <Select label="Service Type" options={['Standard', 'Express', 'Next Day']} />
              <Select label="Payment Mode" options={['Prepaid', 'COD', 'To Pay']} />
              <Input label="Declared Value (₹)" type="number" defaultValue={500} />
            </div>
            <div className="mt-4 p-4 bg-purple-50 rounded-lg border border-purple-100 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold text-purple-900">Estimated Shipping Cost</p>
                <p className="text-xs text-purple-700">Based on weight slab and destination zone</p>
              </div>
              <p className="text-2xl font-bold text-purple-900">₹ 145.00</p>
            </div>
          </FormSection>
        </div>
      </Drawer>
    </div>
  );
}
