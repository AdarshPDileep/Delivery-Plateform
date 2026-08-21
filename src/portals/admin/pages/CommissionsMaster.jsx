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
import { commissionRules, payoutConfig, franchiseEarnings } from '../../../data/rateCards';
import { Plus, Settings, DollarSign, Download } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';
import { formatCurrency } from '../../../utils/helpers';

export default function CommissionsMaster() {
  const [activeDrawer, setActiveDrawer] = useState(null);
  const { addToast } = useToast();

  const ruleColumns = [
    { key: 'franchiseLevel', label: 'Franchise Level' },
    { key: 'type', label: 'Commission Type' },
    { key: 'rate', label: 'Rate', render: (val, row) => row.type === 'Percentage' ? `${val}%` : `₹${val}` },
    { key: 'condition', label: 'Conditions' },
    { key: 'status', label: 'Status', render: (val) => val === 'Active' ? <span className="text-green-600 font-medium">Active</span> : <span className="text-slate-400">Inactive</span> },
  ];

  const earningsColumns = [
    { key: 'franchiseName', label: 'Franchise' },
    { key: 'period', label: 'Billing Period' },
    { key: 'totalShipments', label: 'Shipments' },
    { key: 'grossEarnings', label: 'Gross', render: val => formatCurrency(val) },
    { key: 'deductions', label: 'Deductions', render: val => formatCurrency(val) },
    { key: 'netPayable', label: 'Net Payable', render: val => <span className="font-semibold text-navy-700">{formatCurrency(val)}</span> },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const tabs = [
    { key: 'rules', label: 'Commission Rules', content: <Card padding="p-0"><DataTable columns={ruleColumns} data={commissionRules} title="Active Rules" /></Card> },
    { key: 'earnings', label: 'Earnings Computation', content: <Card padding="p-0"><DataTable columns={earningsColumns} data={franchiseEarnings} title="Computed Earnings" exportable selectable bulkActions={[{ label: 'Mark Settled', onClick: () => addToast('Marked as settled') }]} /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="Commission & Revenue Engine" 
        description="Define payout rules, conditions, and view franchise earnings statements."
        actions={
          <div className="flex gap-2">
            <Button variant="outline" icon={Settings} onClick={() => setActiveDrawer('config')}>Cycle Config</Button>
            <Button icon={Plus} onClick={() => setActiveDrawer('rule')}>New Rule</Button>
          </div>
        }
      />

      <Tabs tabs={tabs} defaultTab="rules" />

      {/* New Rule Drawer */}
      <Drawer open={activeDrawer === 'rule'} onClose={() => setActiveDrawer(null)} title="Create Commission Rule" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Rule Created'); setActiveDrawer(null); }}>Save Rule</Button></>}
      >
        <div className="space-y-4">
          <Select label="Applies To (Franchise Level)" options={['State', 'Zone', 'District', 'Taluk', 'Town']} />
          <Select label="Commission Type" options={['Percentage', 'Flat Rate']} />
          <Input label="Value (Rate/Amount)" type="number" placeholder="e.g. 15" />
          <Select label="Condition" options={['All Shipments', 'Prepaid Only', 'COD Shipments', 'Volume > Target']} />
          <Input label="Minimum Volume (optional)" type="number" placeholder="0" />
          <Input label="Effective From Date" type="date" />
        </div>
      </Drawer>

      {/* Cycle Config Drawer */}
      <Drawer open={activeDrawer === 'config'} onClose={() => setActiveDrawer(null)} title="Payout Cycle Configuration" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Cancel</Button><Button onClick={() => { addToast('Config Saved'); setActiveDrawer(null); }}>Save Config</Button></>}
      >
        <div className="space-y-4">
          <Select label="Payout Frequency" options={['Weekly', 'Bi-Weekly', 'Monthly']} defaultValue={payoutConfig.frequency} />
          <Select label="Cutoff Day" options={['Sunday', 'Monday', 'Friday', 'Last day of month']} defaultValue={payoutConfig.cutoffDay} />
          <Input label="Processing Days Required" type="number" defaultValue={payoutConfig.processingDays} />
          <Input label="Minimum Payout Threshold (₹)" type="number" defaultValue={payoutConfig.minPayout} />
          <Select label="Bank Transfer Mode" options={['NEFT', 'IMPS', 'RTGS']} defaultValue={payoutConfig.bankTransferMode} />
        </div>
      </Drawer>
    </div>
  );
}
