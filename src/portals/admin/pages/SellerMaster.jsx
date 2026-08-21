import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Drawer from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import FormSection from '../../../components/forms/FormSection';
import FileUpload from '../../../components/forms/FileUpload';
import { sellers } from '../../../data/sellers';
import { Plus, Eye, Ban, CheckCircle, Store, Briefcase } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function SellerMaster() {
  const [activeDrawer, setActiveDrawer] = useState(false);
  const { addToast } = useToast();

  const columns = [
    { key: 'name', label: 'Seller Name', render: (val, row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-teal-100 text-teal-700 flex items-center justify-center shrink-0">
          <Briefcase className="w-4 h-4" />
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
    { key: 'businessType', label: 'Business Type' },
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
        title="Seller & Client Master" 
        description="Manage e-commerce merchants, D2C brands, and their credit terms."
        actions={<Button icon={Plus} onClick={() => setActiveDrawer(true)}>Add Seller</Button>}
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={sellers} 
          actions={getActions} 
          searchFields={['name', 'id', 'ownerName', 'phone', 'gstNumber']}
          exportable
        />
      </Card>

      <Drawer open={activeDrawer} onClose={() => setActiveDrawer(false)} title="Add / Approve Seller" width="max-w-2xl"
        footer={<><Button variant="outline" onClick={() => setActiveDrawer(false)}>Cancel</Button><Button onClick={() => { addToast('Seller Approved'); setActiveDrawer(false); }}>Approve & Save</Button></>}
      >
        <div className="space-y-6">
          <FormSection title="Business Information">
            <div className="grid grid-cols-2 gap-4">
              <Input label="Business Name" placeholder="e.g. TrendyCart" />
              <Input label="Owner Name" placeholder="e.g. Arvind Shah" />
              <Input label="Email Address" type="email" placeholder="arvind@trendycart.in" />
              <Input label="Phone Number" placeholder="10-digit mobile" />
              <Select label="Business Type" options={['E-Commerce', 'D2C', 'Retail', 'Manufacturer']} />
              <Select label="Category" options={['Fashion', 'Electronics', 'Health', 'Home']} />
              <Input label="GST Number" placeholder="15-char GSTIN" />
              <Input label="PAN Number" placeholder="10-char PAN" />
            </div>
          </FormSection>

          <FormSection title="Credit Terms & Billing">
            <div className="grid grid-cols-2 gap-4">
              <Select label="Mapped Rate Card" options={['RC001 - Standard', 'RC002 - Premium']} />
              <Input label="Credit Limit (₹)" type="number" placeholder="50000" />
              <Select label="Billing Cycle" options={['Weekly', 'Bi-Weekly', 'Monthly']} />
            </div>
          </FormSection>

          <FormSection title="KYC Documents">
            <div className="space-y-4">
              <FileUpload label="GST Certificate" accept=".pdf,.jpg,.png" />
              <FileUpload label="Owner PAN Card" accept=".pdf,.jpg,.png" />
              <FileUpload label="Cancelled Cheque" accept=".jpg,.png" />
            </div>
          </FormSection>
        </div>
      </Drawer>
    </div>
  );
}
