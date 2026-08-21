import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { useToast } from '../../../context/ToastContext';
import { CalendarClock } from 'lucide-react';

export default function SellerPickups() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const mockPickups = [
    { id: 'PK001', date: '2024-08-21', slot: '10:00 AM - 01:00 PM', items: 15, location: 'Primary Warehouse', status: 'Assigned (Agent on the way)' },
    { id: 'PK002', date: '2024-08-20', slot: '02:00 PM - 05:00 PM', items: 42, location: 'Primary Warehouse', status: 'Completed' },
  ];

  const columns = [
    { key: 'id', label: 'Pickup ID' },
    { key: 'date', label: 'Date' },
    { key: 'slot', label: 'Time Slot' },
    { key: 'items', label: 'Expected Packages' },
    { key: 'location', label: 'Pickup Location' },
    { key: 'status', label: 'Status' },
  ];

  return (
    <div>
      <PageHeader 
        title="Pickup Scheduling" 
        description="Schedule daily pickups and track logistics partner arrivals."
        actions={<Button icon={CalendarClock} onClick={() => setActiveDrawer(true)}>Schedule Pickup</Button>}
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={mockPickups} 
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Schedule New Pickup" width="max-w-md"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Pickup Scheduled', 'success'); setActiveDrawer(false); }}>Confirm Schedule</Button></>}
      >
        <div className="space-y-4">
          <Select label="Pickup Location" options={['Primary Warehouse (Andheri East)', 'Storefront (Bandra)']} />
          <Input label="Expected Package Count" type="number" placeholder="e.g. 15" />
          <Input label="Preferred Date" type="date" />
          <Select label="Preferred Time Slot" options={['10:00 AM - 01:00 PM', '02:00 PM - 05:00 PM']} />
          <div className="text-xs text-slate-500 mt-2">
            Note: Requests must be placed at least 2 hours before the time slot.
          </div>
        </div>
      </Drawer>
    </div>
  );
}
