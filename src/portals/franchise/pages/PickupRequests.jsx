import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Select from '../../../components/ui/Select';
import { shipments } from '../../../data/shipments';
import { MapPin, UserCheck } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function PickupRequests() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const mockPickups = [
    { id: 'PK001', seller: 'TrendyCart India', address: 'Andheri East, Mumbai', items: 15, scheduledDate: '2024-08-21', status: 'Pending' },
    { id: 'PK002', seller: 'GadgetZone', address: 'Bandra Kurla Complex, Mumbai', items: 5, scheduledDate: '2024-08-21', status: 'Assigned' },
    { id: 'PK003', seller: 'Walk-in Customer', address: 'Franchise Office', items: 1, scheduledDate: '2024-08-21', status: 'Completed' },
  ];

  const columns = [
    { key: 'id', label: 'Pickup ID' },
    { key: 'seller', label: 'Seller / Customer' },
    { key: 'address', label: 'Location' },
    { key: 'items', label: 'Packages' },
    { key: 'status', label: 'Status', render: val => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${val === 'Completed' ? 'bg-green-100 text-green-700' : val === 'Assigned' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>{val}</span>
    )},
  ];

  const getActions = (row) => (
    row.status === 'Pending' ? <Button size="sm" icon={UserCheck} onClick={() => setActiveDrawer(row.id)}>Assign Agent</Button> : <Button variant="ghost" size="sm" icon={MapPin} disabled>View</Button>
  );

  return (
    <div>
      <PageHeader 
        title="Pickup Request Management" 
        description="Assign pickup tasks to agents and track completion."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={mockPickups} 
          actions={getActions} 
        />
      </Card>

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title="Assign Pickup Agent" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Agent Assigned'); setActiveDrawer(null); }}>Confirm Assignment</Button></>}
      >
        <div className="space-y-4">
          <Select label="Select Delivery Agent" options={['AG001 - Rahul Sharma', 'AG002 - Amit Patel']} />
        </div>
      </Drawer>
    </div>
  );
}
