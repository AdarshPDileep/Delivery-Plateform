import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import { Wallet, IndianRupee, HandCoins } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { agents } from '../../../data/agents';

export default function FranchiseCod() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const franchiseAgents = agents.filter(a => a.franchiseId === 'FR001');

  // Mock data for COD collection from agents
  const mockCodData = franchiseAgents.map(a => ({
    ...a,
    pendingCod: Math.floor(Math.random() * 5000),
    lastRemitted: new Date(Date.now() - Math.random() * 86400000).toLocaleString()
  }));

  const columns = [
    { key: 'name', label: 'Agent Name' },
    { key: 'phone', label: 'Contact' },
    { key: 'pendingCod', label: 'Pending COD', render: val => <span className={`font-semibold ${val > 0 ? 'text-orange-600' : 'text-slate-500'}`}>₹{val}</span> },
    { key: 'lastRemitted', label: 'Last Remittance' },
  ];

  const getActions = (row) => (
    row.pendingCod > 0 ? <Button size="sm" icon={HandCoins} onClick={() => setActiveDrawer(row.id)}>Collect Cash</Button> : <span className="text-xs text-slate-400">Clear</span>
  );

  return (
    <div>
      <PageHeader 
        title="COD Collection & Remittance" 
        description="Collect physical cash from delivery agents and track remittance to Head Office."
        actions={<Button icon={Wallet} onClick={() => addToast('Initiating NEFT to HO...', 'success')}>Remit to Head Office</Button>}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <Card className="bg-orange-50/50 border-orange-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-orange-800">Pending from Agents</p>
              <p className="text-2xl font-bold text-orange-900">₹ 8,450</p>
            </div>
          </div>
        </Card>
        <Card className="bg-purple-50/50 border-purple-100">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-purple-800">Ready to Remit (HO)</p>
              <p className="text-2xl font-bold text-purple-900">₹ 14,200</p>
            </div>
          </div>
        </Card>
      </div>

      <Card padding="p-0">
        <DataTable 
          title="Agent Balances"
          columns={columns} 
          data={mockCodData} 
          actions={getActions} 
        />
      </Card>

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title="Collect Cash from Agent" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Cash Collected & Verified'); setActiveDrawer(null); }}>Confirm Collection</Button></>}
      >
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg text-center">
            <p className="text-sm text-slate-500 mb-1">Amount to Collect</p>
            <p className="text-3xl font-bold text-slate-900">₹ {mockCodData.find(a => a.id === activeDrawer)?.pendingCod}</p>
          </div>
          <p className="text-sm text-slate-600">Verify the physical cash received from the agent before confirming. This will transfer the liability to the Franchise account.</p>
        </div>
      </Drawer>
    </div>
  );
}
