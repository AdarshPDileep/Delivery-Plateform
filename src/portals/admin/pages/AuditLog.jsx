import React from 'react';
import PageHeader from '../../../components/layout/PageHeader';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import { auditLogs } from '../../../data/operations';

export default function AuditLog() {
  const columns = [
    { key: 'timestamp', label: 'Date & Time', render: val => new Date(val).toLocaleString() },
    { key: 'user', label: 'User / System' },
    { key: 'action', label: 'Action Performed' },
    { key: 'entity', label: 'Entity Affected' },
    { key: 'ipAddress', label: 'IP Address' },
  ];

  return (
    <div>
      <PageHeader 
        title="Audit Trail & Activity Log" 
        description="View system-wide security and activity logs."
      />

      <Card padding="p-0">
        <DataTable 
          columns={columns} 
          data={auditLogs} 
          searchFields={['user', 'action', 'entity']}
          exportable
        />
      </Card>
    </div>
  );
}
