import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/ui/Tabs';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import FormSection from '../../../components/forms/FormSection';
import { rateCards, surcharges } from '../../../data/rateCards';
import { Plus, Edit, Copy } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function RateCardMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const rcColumns = [
    { key: 'name', label: 'Rate Card Name' },
    { key: 'type', label: 'Type' },
    { key: 'applicableTo', label: 'Applicable To' },
    { key: 'createdAt', label: 'Created On' },
  ];

  const scColumns = [
    { key: 'name', label: 'Surcharge Name' },
    { key: 'type', label: 'Type' },
    { key: 'value', label: 'Value', render: (val, row) => row.type === 'Percentage' ? `${val}%` : `₹${val}` },
    { key: 'enabled', label: 'Status', render: (val) => val ? <span className="text-green-600 font-medium">Enabled</span> : <span className="text-red-600 font-medium">Disabled</span> },
  ];

  const getActions = (row) => (
    <div className="flex gap-2">
      <Button variant="ghost" size="sm" icon={Edit} onClick={() => setActiveDrawer(row.id)}>Edit</Button>
      <Button variant="ghost" size="sm" icon={Copy} onClick={() => addToast(`Cloned ${row.name}`, 'success')} />
    </div>
  );

  const tabs = [
    { key: 'rate-cards', label: 'Rate Cards', content: <Card padding="p-0"><DataTable columns={rcColumns} data={rateCards} actions={getActions} title="Configured Rate Cards" /></Card> },
    { key: 'surcharges', label: 'Surcharges & Fees', content: <Card padding="p-0"><DataTable columns={scColumns} data={surcharges} actions={getActions} title="Global Surcharges" selectable bulkActions={[{ label: 'Toggle Status', onClick: () => addToast('Status updated') }]} /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="Rate Card & Service Charge Setup" 
        description="Configure zone-wise pricing, weight slabs, and global surcharges."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer('new')}>Create Rate Card</Button>}
      />

      <Tabs tabs={tabs} defaultTab="rate-cards" />

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title={activeDrawer === 'new' ? 'Create New Rate Card' : 'Edit Rate Card'} width="max-w-4xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Rate Card Saved'); setActiveDrawer(null); }}>Save Changes</Button></>}
      >
        <div className="space-y-6">
          <FormSection title="Basic Details">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Rate Card Name" placeholder="e.g. B2B Electronics Special" />
              <Select label="Type" options={['Default', 'Custom (Seller Specific)']} />
            </div>
          </FormSection>

          <FormSection title="Weight Slab Pricing (₹)">
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-sm text-left">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-medium">Weight Range</th>
                    <th className="px-4 py-2 font-medium">Within Zone</th>
                    <th className="px-4 py-2 font-medium">Adjacent Zone</th>
                    <th className="px-4 py-2 font-medium">National Zone</th>
                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rateCards[0].slabs.map((slab, i) => (
                    <tr key={i}>
                      <td className="px-4 py-2"><Input defaultValue={slab.weightRange} className="w-24 h-8 text-xs" /></td>
                      <td className="px-4 py-2"><Input type="number" defaultValue={slab.withinZone} className="w-24 h-8 text-xs" /></td>
                      <td className="px-4 py-2"><Input type="number" defaultValue={slab.adjacentZone} className="w-24 h-8 text-xs" /></td>
                      <td className="px-4 py-2"><Input type="number" defaultValue={slab.nationalZone} className="w-24 h-8 text-xs" /></td>
                      <td className="px-4 py-2 text-right"><Button variant="ghost" size="sm" className="text-red-500">Remove</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="p-3 bg-slate-50 border-t border-slate-200">
                <Button variant="outline" size="sm" icon={Plus}>Add Weight Slab</Button>
              </div>
            </div>
          </FormSection>
        </div>
      </Drawer>
    </div>
  );
}
