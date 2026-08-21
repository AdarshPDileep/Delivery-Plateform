import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/ui/Tabs';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { states, zones, districts, taluks, towns, pinCodes } from '../../../data/geo';
import { Plus, Edit } from 'lucide-react';

export default function GeoMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);

  const stateColumns = [
    { key: 'code', label: 'Code' },
    { key: 'name', label: 'State Name' },
    { key: 'id', label: 'ID' },
  ];

  const zoneColumns = [
    { key: 'name', label: 'Zone Name' },
    { key: 'stateIds', label: 'States Mapped', render: (val) => val.length },
  ];

  const districtColumns = [
    { key: 'name', label: 'District' },
    { key: 'stateId', label: 'State', render: (val) => states.find(s => s.id === val)?.name },
    { key: 'zoneId', label: 'Zone', render: (val) => zones.find(z => z.id === val)?.name },
  ];

  const townColumns = [
    { key: 'name', label: 'Town' },
    { key: 'pinCode', label: 'Pincode' },
    { key: 'talukId', label: 'Taluk', render: (val) => taluks.find(t => t.id === val)?.name },
  ];

  const pincodeColumns = [
    { key: 'pinCode', label: 'Pincode' },
    { key: 'townName', label: 'Town' },
    { key: 'serviceable', label: 'Serviceable', render: (val) => val ? <span className="text-green-600 font-medium">Yes</span> : <span className="text-red-600 font-medium">No</span> },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={Edit} onClick={() => setActiveDrawer(row.id)}>Edit</Button>
  );

  const tabs = [
    { key: 'states', label: 'States', content: <Card padding="p-0"><DataTable columns={stateColumns} data={states} actions={getActions} title="States List" /></Card> },
    { key: 'zones', label: 'Zones', content: <Card padding="p-0"><DataTable columns={zoneColumns} data={zones} actions={getActions} title="Zones List" /></Card> },
    { key: 'districts', label: 'Districts', content: <Card padding="p-0"><DataTable columns={districtColumns} data={districts} actions={getActions} title="Districts List" /></Card> },
    { key: 'towns', label: 'Towns & Pincodes', content: <Card padding="p-0"><DataTable columns={townColumns} data={towns} actions={getActions} title="Towns List" /></Card> },
    { key: 'mapping', label: 'Pincode Mapping', content: <Card padding="p-0"><DataTable columns={pincodeColumns} data={pinCodes} title="Pincode Serviceability" selectable={true} bulkActions={[{ label: 'Toggle Serviceability', onClick: () => alert('Mock: Toggle Serviceability') }]} /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="Geographical Hierarchy Master" 
        description="Manage states, zones, districts, towns and pincode serviceability."
        actions={
          <Button icon={Plus} onClick={() => setActiveDrawer('new')}>Add New</Button>
        }
      />

      <Tabs tabs={tabs} defaultTab="mapping" />

      {/* Mock Add/Edit Drawer */}
      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'Add New Geo Entity' : 'Edit Geo Entity'} width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => setActiveDrawer(null)}>Save Changes</Button></>}
      >
        <div className="space-y-4">
          <Select label="Entity Type" options={['State', 'Zone', 'District', 'Taluk', 'Town']} defaultValue="Town" />
          <Input label="Name" placeholder="e.g. Andheri West" />
          <Input label="Code / Pincode" placeholder="e.g. 400053" />
          <Select label="Parent Entity" options={['TK001 - Andheri', 'TK002 - Bandra']} />
        </div>
      </Drawer>
    </div>
  );
}
