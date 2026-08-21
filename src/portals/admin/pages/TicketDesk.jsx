import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import { tickets } from '../../../data/operations';
import { Eye, MessageCircle } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function TicketDesk() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'ticketId', label: 'Ticket ID', render: val => <span className="font-medium text-navy-700">{val}</span> },
    { key: 'raisedBy', label: 'Raised By', render: (val, row) => (
      <div>
        <p className="text-sm font-medium">{val}</p>
        <p className="text-xs text-slate-500">{row.userType}</p>
      </div>
    )},
    { key: 'subject', label: 'Subject' },
    { key: 'category', label: 'Category' },
    { key: 'priority', label: 'Priority', render: val => (
      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
        val === 'High' ? 'bg-red-100 text-red-700' :
        val === 'Medium' ? 'bg-orange-100 text-orange-700' :
        'bg-green-100 text-green-700'
      }`}>{val}</span>
    )},
    { key: 'status', label: 'Status', type: 'status' },
    { key: 'createdAt', label: 'Raised On', render: val => new Date(val).toLocaleDateString() },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={MessageCircle} onClick={() => setActiveDrawer(row.ticketId)}>Reply</Button>
  );

  return (
    <div>
      <PageHeader 
        title="Support & Ticket Desk" 
        description="Manage inquiries and issues from sellers, franchises, and agents."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={tickets} 
          actions={getActions} 
          searchFields={['ticketId', 'subject', 'raisedBy']}
        />
      </Card>

      <Drawer open={!!activeDrawer} onClose={() => setActiveDrawer(null)} title="Ticket Resolution" width="max-w-xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(null)}>Close</Button><Button onClick={() => { addToast('Reply Sent'); setActiveDrawer(null); }}>Send Reply</Button></>}
      >
        <div className="space-y-6">
          <div className="bg-slate-50 p-4 rounded-lg border border-slate-200">
            <h4 className="font-semibold text-slate-900 mb-2">Original Query</h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {tickets.find(t => t.ticketId === activeDrawer)?.subject} — The customer has requested an address change to the new location...
            </p>
          </div>
          
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Your Reply</label>
            <textarea className="px-3 py-2 border border-slate-300 rounded-lg text-sm min-h-[150px] focus:outline-none focus:ring-4 focus:border-navy-500 focus:ring-navy-500/20" placeholder="Type your response here..." />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
