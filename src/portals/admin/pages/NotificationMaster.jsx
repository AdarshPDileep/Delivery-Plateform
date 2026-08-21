import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { notificationTemplates as notifications } from '../../../data/operations';
import { Plus, Bell, MessageSquare, Mail } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function NotificationMaster() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'Template', render: (val, row) => (
      <div>
        <p className="font-medium text-slate-900">{val}</p>
        <p className="text-xs text-slate-500 mt-0.5">{row.template}</p>
      </div>
    )},
    { key: 'event', label: 'Event Trigger' },
    { key: 'channel', label: 'Channel', render: val => (
      <div className="flex gap-2">
        {val?.includes('Push') && <Bell className="w-4 h-4 text-slate-400" title="Push" />}
        {val?.includes('SMS') && <MessageSquare className="w-4 h-4 text-slate-400" title="SMS" />}
        {val?.includes('WhatsApp') && <MessageSquare className="w-4 h-4 text-green-400" title="WhatsApp" />}
        {val?.includes('Email') && <Mail className="w-4 h-4 text-slate-400" title="Email" />}
      </div>
    )},
    { key: 'status', label: 'Status', type: 'status' },
  ];

  return (
    <div>
      <PageHeader 
        title="Notification & Communication Engine" 
        description="Broadcast messages and manage automated notification templates."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer(true)}>New Broadcast</Button>}
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={notifications} 
          title="Recent Broadcasts"
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Create Broadcast" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Broadcast Scheduled'); setActiveDrawer(false); }}>Send Now</Button></>}
      >
        <div className="space-y-4">
          <Select label="Target Audience" options={['All Franchises', 'All Sellers', 'Delivery Agents (Active)', 'Specific Zone']} />
          <Select label="Channels" options={['Push Only', 'Push + SMS', 'Email Only', 'All Channels']} />
          <Input label="Notification Title" placeholder="e.g. System Maintenance" />
          <div className="flex flex-col gap-1.5">
            <label className="text-sm font-medium text-slate-700">Message Body</label>
            <textarea className="px-3 py-2 border border-slate-300 rounded-lg text-sm min-h-[100px] focus:outline-none focus:ring-4 focus:border-navy-500 focus:ring-navy-500/20" placeholder="Type message..." />
          </div>
        </div>
      </Drawer>
    </div>
  );
}
