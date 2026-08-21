import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Avatar from '../../../components/ui/Avatar';
import { agents } from '../../../data/agents';
import { franchises } from '../../../data/franchises';
import { Plus, Eye, Star, Clock } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function AgentMaster() {
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'Agent Profile', render: (val, row) => (
      <div className="flex items-center gap-3">
        <Avatar name={val} size="sm" />
        <div>
          <p className="font-medium text-slate-900">{val}</p>
          <p className="text-xs text-slate-500">{row.id} • {row.phone}</p>
        </div>
      </div>
    )},
    { key: 'franchiseId', label: 'Franchise Assignment', render: val => franchises.find(f => f.id === val)?.name },
    { key: 'vehicleType', label: 'Vehicle' },
    { key: 'deliveriesToday', label: 'Today\'s Task', render: val => <span className="font-semibold text-navy-700">{val} shipments</span> },
    { key: 'successRate', label: 'Success Rate', render: val => (
      <div className="flex items-center gap-1.5">
        <div className="w-16 h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div className={`h-full ${val >= 90 ? 'bg-green-500' : 'bg-orange-500'}`} style={{ width: `${val}%` }} />
        </div>
        <span className="text-xs font-medium">{val}%</span>
      </div>
    )},
    { key: 'rating', label: 'Rating', render: val => (
      <div className="flex items-center gap-1 text-sm font-medium">
        <Star className="w-4 h-4 text-amber-400 fill-amber-400" /> {val}
      </div>
    )},
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={Eye} onClick={() => addToast(`Viewing profile for ${row.name}`)} />
  );

  return (
    <div>
      <PageHeader 
        title="Delivery Personnel Management" 
        description="Monitor agent performance, assignments, and capacity."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={agents} 
          actions={getActions} 
          searchFields={['name', 'id', 'phone']}
          exportable
        />
      </Card>
    </div>
  );
}
