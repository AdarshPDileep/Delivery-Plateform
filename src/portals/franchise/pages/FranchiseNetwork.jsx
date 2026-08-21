import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import { franchises } from '../../../data/franchises';
import { Plus, Eye } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function FranchiseNetwork() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'Sub-Franchise Name', render: (val, row) => (
      <div>
        <p className="font-medium text-slate-900">{val}</p>
        <p className="text-xs text-slate-500">{row.id}</p>
      </div>
    )},
    { key: 'ownerName', label: 'Owner & Contact', render: (val, row) => (
      <div>
        <p className="text-sm">{val}</p>
        <p className="text-xs text-slate-500">{row.phone}</p>
      </div>
    )},
    { key: 'status', label: 'Status', type: 'status' },
  ];

  return (
    <div>
      <PageHeader 
        title="Sub-Territory & Network Expansion" 
        description="Manage your network of sub-franchises and agents."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer(true)}>Add Sub-Franchise</Button>}
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={franchises.filter(f => f.stateId === 'ST001' && f.id !== 'FR001')} 
          searchFields={['name', 'id']}
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Onboard Sub-Franchise" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Sub-franchise onboarded'); setActiveDrawer(false); }}>Submit</Button></>}
      >
        <div className="space-y-4">
          <Input label="Sub-Franchise Name" placeholder="e.g. Local Express" />
          <Input label="Owner Name" placeholder="e.g. Rahul Kumar" />
          <Input label="Phone Number" placeholder="10-digit mobile" />
          <Input label="Pincode Coverage" placeholder="e.g. 400053, 400054" />
        </div>
      </Drawer>
    </div>
  );
}
