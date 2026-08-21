import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/ui/Tabs';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { hubs, routes, tatRules } from '../../../data/hubs';
import { Plus, Edit, MapPin } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';

export default function HubMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const hubColumns = [
    { key: 'name', label: 'Hub/Branch Name', render: (val, row) => (
      <div><p className="font-medium text-slate-900">{val}</p><p className="text-xs text-slate-500">{row.id}</p></div>
    )},
    { key: 'type', label: 'Type' },
    { key: 'address', label: 'Location' },
    { key: 'capacity', label: 'Daily Capacity (pkgs)' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const routeColumns = [
    { key: 'origin', label: 'Origin Hub', render: val => hubs.find(h => h.id === val)?.name },
    { key: 'destination', label: 'Destination Hub', render: val => hubs.find(h => h.id === val)?.name },
    { key: 'vehicleType', label: 'Vehicle' },
    { key: 'transitTime', label: 'Transit Time' },
    { key: 'frequency', label: 'Frequency' },
  ];

  const tatColumns = [
    { key: 'serviceType', label: 'Service Type' },
    { key: 'originZone', label: 'Origin Zone' },
    { key: 'destZone', label: 'Destination Zone' },
    { key: 'maxHours', label: 'Max TAT (Hours)', render: val => <span className="font-medium text-navy-700">{val} hrs</span> },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={Edit} onClick={() => setActiveDrawer(row.id)}>Edit</Button>
  );

  const tabs = [
    { key: 'hubs', label: 'Hubs & Branches', content: <Card padding="p-0"><DataTable columns={hubColumns} data={hubs} actions={getActions} searchFields={['name', 'id']} exportable /></Card> },
    { key: 'routes', label: 'Network Routes', content: <Card padding="p-0"><DataTable columns={routeColumns} data={routes} actions={getActions} /></Card> },
    { key: 'tat', label: 'TAT Matrix', content: <Card padding="p-0"><DataTable columns={tatColumns} data={tatRules} actions={getActions} /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="Hub, Branch & Route Management" 
        description="Configure your physical network infrastructure and transit rules."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer('new')}>Add Hub/Route</Button>}
      />

      <Tabs tabs={tabs} defaultTab="hubs" />

      {/* Add Hub Drawer */}
      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'Add New Entity' : 'Edit Entity'} width="max-w-2xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Saved successfully'); setActiveDrawer(null); }}>Save Changes</Button></>}
      >
        <div className="space-y-6">
          <Select label="Entity Type" options={['Hub/Branch', 'Route', 'TAT Rule']} />
          
          <div className="grid grid-cols-2 gap-4">
            <Input label="Name" placeholder="e.g. Mumbai Central Hub" />
            <Select label="Type" options={['Hub', 'Branch', 'Sorting Center', 'Delivery Center']} />
            <Input label="Capacity" type="number" placeholder="e.g. 5000" />
            <Select label="Manager" options={['US001 - Admin User', 'US002 - Priya Kapoor']} />
          </div>

          <div className="space-y-4">
            <label className="text-sm font-medium text-slate-700">Location</label>
            <Input placeholder="Full address..." />
            <GeoHierarchyPicker maxLevel="district" />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
