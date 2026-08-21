import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import StatGrid from '../../../components/data/StatGrid';
import KPICard from '../../../components/ui/KPICard';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Tabs from '../../../components/ui/Tabs';
import Button from '../../../components/ui/Button';
import { codTransactions, codSummary, sellerPayouts } from '../../../data/operations';
import { Wallet, IndianRupee, ArrowRightLeft, CheckCircle, Store, Users, Building } from 'lucide-react';
import { formatCurrency, formatDateTime } from '../../../utils/helpers';
import { useToast } from '../../../context/ToastContext';

export default function CodSettlement() {
  const { addToast } = useToast();

  const transactionColumns = [
    { key: 'awb', label: 'AWB Number' },
    { key: 'amount', label: 'Amount', render: val => <span className="font-semibold text-navy-700">{formatCurrency(val)}</span> },
    { key: 'collectedAt', label: 'Collected On', render: val => formatDateTime(val) },
    { key: 'chain', label: 'Remittance Chain', render: (_, row) => (
      <div className="flex items-center gap-2 text-xs">
        <span className={`p-1 rounded ${row.collectedBy ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`} title="Agent"><Users className="w-3.5 h-3.5" /></span>
        <ArrowRightLeft className="w-3 h-3 text-slate-300" />
        <span className={`p-1 rounded ${row.remittedToFranchise ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`} title="Franchise"><Store className="w-3.5 h-3.5" /></span>
        <ArrowRightLeft className="w-3 h-3 text-slate-300" />
        <span className={`p-1 rounded ${row.remittedToHO ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-400'}`} title="Head Office"><Building className="w-3.5 h-3.5" /></span>
      </div>
    )},
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const payoutColumns = [
    { key: 'sellerName', label: 'Seller' },
    { key: 'period', label: 'Period' },
    { key: 'codCollected', label: 'COD Collected', render: val => formatCurrency(val) },
    { key: 'shippingDeduction', label: 'Deductions (Shipping + Fees)', render: (val, row) => <span className="text-red-600">-{formatCurrency(val + row.codFee)}</span> },
    { key: 'netPayable', label: 'Net Payable', render: val => <span className="font-bold text-navy-700">{formatCurrency(val)}</span> },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const tabs = [
    { key: 'transactions', label: 'COD Transactions', content: <Card padding="p-0"><DataTable columns={transactionColumns} data={codTransactions} title="Transaction Log" exportable /></Card> },
    { key: 'payouts', label: 'Seller Payout Statements', content: <Card padding="p-0"><DataTable columns={payoutColumns} data={sellerPayouts} title="Statements" selectable bulkActions={[{ label: 'Mark Settled', onClick: () => addToast('Payouts marked as settled', 'success') }]} exportable /></Card> },
  ];

  return (
    <div>
      <PageHeader 
        title="COD & Financial Settlement" 
        description="Track COD flow across the network and manage seller payouts."
      />

      <StatGrid columns={4} className="mb-6">
        <KPICard title="Total COD Collected" value={formatCurrency(codSummary.totalCollected)} icon={Wallet} />
        <KPICard title="Holding: Delivery Agents" value={formatCurrency(codSummary.agentHolding)} icon={Users} color="bg-orange-50/50" />
        <KPICard title="Holding: Franchises" value={formatCurrency(codSummary.franchiseHolding)} icon={Store} color="bg-amber-50/50" />
        <KPICard title="Holding: Head Office" value={formatCurrency(codSummary.hoHolding)} icon={Building} color="bg-blue-50/50" />
      </StatGrid>

      <StatGrid columns={2} className="mb-6">
        <KPICard title="Settled to Sellers" value={formatCurrency(codSummary.settledToSellers)} icon={CheckCircle} color="bg-green-50/50" />
        <KPICard title="Pending Remittance to HO" value={formatCurrency(codSummary.pendingRemittance)} icon={IndianRupee} color="bg-rose-50/50" />
      </StatGrid>

      <Tabs tabs={tabs} defaultTab="transactions" />
    </div>
  );
}
