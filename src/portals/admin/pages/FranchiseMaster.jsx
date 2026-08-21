import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/ui/Tabs';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import FileUpload from '../../../components/forms/FileUpload';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';
import FormSection from '../../../components/forms/FormSection';
import { franchises } from '../../../data/franchises';
import { states, districts } from '../../../data/geo';
import { Plus, Eye, Ban, CheckCircle, Store } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function FranchiseMaster() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'Franchise Name', render: (val, row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-purple-100 text-purple-700 flex items-center justify-center shrink-0">
          <Store className="w-4 h-4" />
        </div>
        <div>
          <p className="font-medium text-slate-900">{val}</p>
          <p className="text-xs text-slate-500">{row.id}</p>
        </div>
      </div>
    )},
    { key: 'ownerName', label: 'Owner & Contact', render: (val, row) => (
      <div>
        <p className="text-sm">{val}</p>
        <p className="text-xs text-slate-500">{row.phone}</p>
      </div>
    )},
    { key: 'districtId', label: 'Location', render: (val, row) => {
      const d = districts.find(d => d.id === val)?.name;
      const s = states.find(s => s.id === row.stateId)?.code;
      return `${d}, ${s}`;
    }},
    { key: 'kycStatus', label: 'KYC', type: 'status' },
    { key: 'status', label: 'Status', type: 'status' },
  ];

  const getActions = (row) => (
    <div className="flex items-center justify-end gap-1">
      <Button variant="ghost" size="sm" icon={Eye} />
      {row.status === 'Active' ? (
        <Button variant="ghost" size="sm" icon={Ban} className="text-orange-600 hover:text-orange-700" onClick={() => addToast(`Suspended ${row.name}`, 'success')} />
      ) : (
        <Button variant="ghost" size="sm" icon={CheckCircle} className="text-green-600 hover:text-green-700" onClick={() => addToast(`Activated ${row.name}`, 'success')} />
      )}
    </div>
  );

  return (
    <div>
      <PageHeader 
        title="Franchise & Territory Management" 
        description="Onboard franchises, allocate territories, and manage their status."
        actions={
          <Button icon={Plus} onClick={() => setActiveDrawer(true)}>Onboard Franchise</Button>
        }
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={franchises} 
          actions={getActions} 
          searchFields={['name', 'id', 'ownerName', 'phone', 'gstNumber']}
          exportable={true}
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Onboard New Franchise" width="max-w-2xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Franchise Onboarded Successfully'); setActiveDrawer(false); }}>Submit Application</Button></>}
      >
        <div className="space-y-6">
          <FormSection title="Business Information">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Franchise Name" placeholder="e.g. Rapid Logistics" />
              <Input label="Owner Name" placeholder="e.g. John Doe" />
              <Input label="Email Address" type="email" placeholder="john@rapid.com" />
              <Input label="Phone Number" placeholder="10-digit mobile" />
              <Input label="GST Number" placeholder="15-char GSTIN" />
              <Input label="PAN Number" placeholder="10-char PAN" />
            </div>
          </FormSection>

          <FormSection title="Territory Allocation">
            <GeoHierarchyPicker maxLevel="taluk" />
            <div className="mt-4">
              <Select label="Commission Plan" options={['Standard (15%)', 'Premium (18%)', 'Flat Rate']} />
            </div>
          </FormSection>

          <FormSection title="KYC & Documents">
            <div className="space-y-4">
              <FileUpload label="GST Certificate" accept=".pdf,.jpg,.png" />
              <FileUpload label="Owner PAN Card" accept=".pdf,.jpg,.png" />
              <FileUpload label="Signed Franchise Agreement" accept=".pdf" />
            </div>
          </FormSection>
        </div>
      </Drawer>
    </div>
  );
}
