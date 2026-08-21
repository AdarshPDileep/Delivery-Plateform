import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Tabs from '../../../components/ui/Tabs';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import { manifests } from '../../../data/operations';
import { Truck, CheckCircle, FileText } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function Manifests() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const inbound = manifests.filter(m => m.type === 'Inbound');
  const outbound = manifests.filter(m => m.type === 'Outbound');

  const columns = [
    { key: 'id', label: 'Manifest ID' },
    { key: 'sealNumber', label: 'Seal Number' },
    { key: 'origin', label: 'Origin', render: val => <span className="font-medium text-slate-700">{val}</span> },
    { key: 'destination', label: 'Destination', render: val => <span className="font-medium text-slate-700">{val}</span> },
    { key: 'awbCount', label: 'Packages' },
    { key: 'status', label: 'Status', render: val => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${val === 'Received' ? 'bg-green-100 text-green-700' : val === 'Dispatched' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>{val}</span>
    )},
  ];

  const getInboundActions = (row) => (
    row.status === 'Dispatched' ? <Button size="sm" icon={CheckCircle} onClick={() => addToast('Manifest Acknowledged & Received', 'success')}>Receive</Button> : <Button variant="ghost" size="sm" icon={FileText} onClick={() => setActiveDrawer(row.id)}>View details</Button>
  );
  
  const getOutboundActions = (row) => (
    row.status === 'Created' ? <Button size="sm" icon={Truck} onClick={() => addToast('Manifest Dispatched to Hub', 'success')}>Dispatch</Button> : <Button variant="ghost" size="sm" icon={FileText} onClick={() => setActiveDrawer(row.id)}>View details</Button>
  );

  const tabs = [
    { key: 'inbound', label: 'Inbound Manifests', content: <Card padding="p-0"><DataTable columns={columns} data={inbound} actions={getInboundActions} /></Card> },
    { key: 'outbound', label: 'Outbound Manifests', content: <Card padding="p-0"><DataTable columns={columns} data={outbound} actions={getOutboundActions} /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="Inbound & Outbound Manifests" 
        description="Acknowledge incoming bags and create outbound dispatch manifests."
      />

      <Tabs tabs={tabs} defaultTab="inbound" />

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title="Manifest Details" width="max-w-md">
        <div className="space-y-4 text-sm">
          <p className="text-slate-600">Manifest: <span className="font-semibold text-slate-900">{activeDrawer}</span></p>
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <ul className="space-y-2">
              <li className="flex justify-between border-b pb-2"><span>CG20240001</span><span className="text-slate-500">Bandra West</span></li>
              <li className="flex justify-between border-b pb-2"><span>CG20240005</span><span className="text-slate-500">Andheri East</span></li>
              <li className="flex justify-between pb-2"><span>CG20240012</span><span className="text-slate-500">Juhu</span></li>
            </ul>
          </div>
        </div>
      </Drawer>
    </div>
  );
}
