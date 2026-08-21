import React, { useState } from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import DateRangePicker from '../../../components/forms/DateRangePicker';
import { reportDefinitions as reports } from '../../../data/operations';
import { FileText, Download, Filter } from 'lucide-react';
import { useToast } from '../../../context/ToastContext';

export default function ReportsMaster() {
  const { addToast } = useToast();
  
  const columns = [
    { key: 'name', label: 'Report Name', render: (val, row) => (
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded bg-slate-100 text-slate-500 flex items-center justify-center shrink-0">
          <FileText className="w-4 h-4" />
        </div>
        <div>
          <p className="font-medium text-slate-900">{val}</p>
          <p className="text-xs text-slate-500">{row.id}</p>
        </div>
      </div>
    )},
    { key: 'category', label: 'Category' },
    { key: 'description', label: 'Description' },
    { key: 'lastGenerated', label: 'Last Generated', render: val => val ? new Date(val).toLocaleString() : 'Never' },
  ];

  const getActions = (row) => (
    <Button variant="ghost" size="sm" icon={Download} onClick={() => addToast(`Downloading ${row.name}`, 'success')}>Download</Button>
  );

  return (
    <div>
      <PageHeader 
        title="Reports & MIS" 
        description="Generate, schedule, and download network performance and financial reports."
      />

      <Card className="mb-6">
        <div className="flex flex-col md:flex-row items-end gap-4">
          <Select 
            label="Report Category" 
            options={['All Categories', 'Operations', 'Finance', 'Performance', 'Compliance']} 
            className="w-48"
          />
          <DateRangePicker label="Date Range" />
          <Button icon={Filter} className="w-full md:w-auto">Filter Reports</Button>
        </div>
      </Card>

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={reports} 
          actions={getActions} 
          searchFields={['name', 'description']}
        />
      </Card>
    </div>
  );
}
