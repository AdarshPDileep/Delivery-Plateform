import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Select from '../../../components/ui/Select';
import { shipments } from '../../../data/shipments';
import { MapPin } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function AgentAssignments() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const outForDelivery = shipments.filter(s => s.franchiseId === 'FR001' && (s.status === 'In Transit' || s.status === 'Out for Delivery'));

  const columns = [
    { key: 'awb', label: 'AWB Number' },
    { key: 'receiver', label: 'Receiver', render: r => `${r.name}, ${r.pincode}` },
    { key: 'paymentMode', label: 'Type' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const getActions = (row) => (
    row.status === 'In Transit' ? <Button size="sm" icon={MapPin} onClick={() => setActiveDrawer(row.awb)}>Assign to Beat</Button> : <span className="text-xs font-medium text-slate-500">Assigned</span>
  );

  return (
    <div>
      <PageHeader 
        title="Delivery Assignment & Beat Planning" 
        description="Allocate incoming consignments to your delivery personnel."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={outForDelivery} 
          actions={getActions}
          searchFields={['awb', row => row.receiver.pincode]}
          selectable
          bulkActions={[
            { label: 'Bulk Assign', onClick: () => setActiveDrawer('bulk') }
          ]}
        />
      </Card>

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title="Assign Delivery Personnel" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Shipments Assigned to Agent', 'success'); setActiveDrawer(null); }}>Confirm Assignment</Button></>}
      >
        <div className="space-y-4">
          <Select label="Select Delivery Agent" options={['AG001 - Rahul Sharma (Andheri West)', 'AG002 - Amit Patel (Juhu)']} />
          <p className="text-xs text-slate-500 mt-2">The selected agent will see these shipments on their mobile app immediately.</p>
        </div>
      </Drawer>
    </div>
  );
}
