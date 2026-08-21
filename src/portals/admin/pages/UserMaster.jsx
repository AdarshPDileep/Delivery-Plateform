import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Avatar from '../../../components/ui/Avatar';
import { users } from '../../../data/users';
import { Plus, Edit, Shield } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function UserMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'User', render: (val, row) => (
      <div className="flex items-center gap-3">
        <Avatar name={val} size="sm" />
        <div>
          <p className="font-medium text-slate-900">{val}</p>
          <p className="text-xs text-slate-500">{row.email}</p>
        </div>
      </div>
    )},
    { key: 'role', label: 'Role', render: val => (
      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700">
        <Shield className="w-3 h-3" />
        {val}
      </span>
    )},
    { key: 'portal', label: 'Access Portal', render: val => <span className="capitalize">{val}</span> },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={Edit} onClick={() => setActiveDrawer(row.id)}>Edit</Button>
  );

  return (
    <div>
      <PageHeader 
        title="User, Role & Access Control" 
        description="Manage system users and their permissions across all portals."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer('new')}>Add User</Button>}
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={users} 
          actions={getActions} 
          searchFields={['name', 'email', 'role']}
        />
      </Card>

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'Add New User' : 'Edit User'} width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('User saved'); setActiveDrawer(null); }}>Save User</Button></>}
      >
        <div className="space-y-4">
          <Input label="Full Name" placeholder="e.g. Rahul Verma" />
          <Input label="Email Address" type="email" placeholder="rahul@example.com" />
          <Select label="Portal Access" options={['Admin', 'Franchise', 'Seller']} />
          <Select label="Role" options={['Super Admin', 'Operations Manager', 'Finance Controller', 'Support Agent']} />
          <Select label="Status" options={['Active', 'Inactive', 'Suspended']} />
        </div>
      </Drawer>
    </div>
  );
}
