import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Select from '../../../components/ui/Select';
import { shipments } from '../../../data/shipments';
import { Edit, Truck, Eye, AlertTriangle } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function ShipmentControl() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const columns = [
    { key: 'awb', label: 'AWB Number' },
    { key: 'sender', label: 'Sender', render: s => (
      <div><p className="font-medium text-slate-900">{s.name}</p><p className="text-xs text-slate-500 truncate w-32">{s.address}</p></div>
    )},
    { key: 'receiver', label: 'Receiver', render: r => (
      <div><p className="font-medium text-slate-900">{r.name}</p><p className="text-xs text-slate-500 truncate w-32">{r.address}</p></div>
    )},
    { key: 'status', label: 'Status', type: 'status' },
    { key: 'paymentMode', label: 'Payment', render: (val, row) => (
      <div>
        <p className="text-sm">{val}</p>
        {val === 'COD' && <p className="text-xs text-navy-600 font-medium">₹{row.codAmount}</p>}
      </div>
    )},
    { key: 'franchiseId', label: 'Franchise' },
  ];

  const getActions = (row) => (
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" icon={Eye} />
      <Button variant="ghost" size="sm" icon={AlertTriangle} onClick={() => setActiveDrawer('exception')} className="text-orange-500 hover:text-orange-600" />
    </div>
  );

  return (
    <div>
      <PageHeader 
        title="Consignment & Shipment Control" 
        description="Global view of all shipments. Manage exceptions, re-routes, and bulk updates."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={shipments} 
          actions={getActions} 
          searchFields={['awb', (row) => row.sender.name, (row) => row.receiver.name]}
          selectable
          bulkActions={[
            { label: 'Hold Shipments', onClick: () => addToast('Selected shipments placed on hold', 'success') },
            { label: 'Bulk Re-route', onClick: () => setActiveDrawer('reroute') },
          ]}
          exportable
        />
      </Card>

      {/* Exception Drawer */}
      <Drawer open={activeDrawer === 'exception'} onClose={() => setActiveDrawer(null)} title="Mark Exception" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Exception marked'); setActiveDrawer(null); }}>Save Exception</Button></>}
      >
        <div className="space-y-4">
          <Select label="Exception Reason" options={['Address Incorrect', 'Customer Not Available', 'Refused Delivery', 'Damaged Package', 'Weather Delay']} />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Additional Notes</label>
            <textarea className="px-3 py-2 border border-slate-300 rounded-lg text-sm min-h-[100px] focus:outline-none focus:ring-4 focus:border-navy-500 focus:ring-navy-500/20" placeholder="Enter details..." />
          </div>
        </div>
      </Drawer>

      {/* Re-route Drawer */}
      <Drawer open={activeDrawer === 'reroute'} onClose={() => setActiveDrawer(null)} title="Re-route Shipments" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Shipments re-routed'); setActiveDrawer(null); }}>Confirm Re-route</Button></>}
      >
        <div className="space-y-4">
          <p className="text-sm text-slate-600 mb-4">You are re-routing selected shipments. Select the new destination hub or franchise.</p>
          <Select label="New Destination Hub" options={['HB001 - Mumbai Central Hub', 'HB002 - Pune Branch', 'HB003 - Bangalore Sorting Center']} />
          <Select label="Or Assign to Franchise" options={['FR001 - Mumbai Express', 'FR002 - Pune Swift', 'FR003 - Bangalore Quick']} />
        </div>
      </Drawer>
    </div>
  );
}
