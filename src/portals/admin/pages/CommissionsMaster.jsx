import React, { useEffect, useMemo, useState } from 'react';
import { Edit, Plus, Power, Settings, Trash2 } from 'lucide-react';
import PageHeader from '../../../components/layout/PageHeader';
import Tabs from '../../../components/ui/Tabs';
import Card from '../../../components/ui/Card';
import DataTable from '../../../components/ui/DataTable';
import Button from '../../../components/ui/Button';
import { Drawer } from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import FormSection from '../../../components/forms/FormSection';
import { useToast } from '../../../context/ToastContext';
import {
  createCommissionRule,
  deleteCommissionRule,
  getCommissionPayoutConfig,
  getCommissionRule,
  getCommissionRules,
  updateCommissionPayoutConfig,
  updateCommissionRule,
  updateCommissionRuleStatus,
} from '../../../api/api';

const emptyRuleForm = {
  franchiseLevel: 'STATE',
  commissionType: 'PERCENTAGE',
  value: '',
  conditionType: 'ALL_SHIPMENTS',
  minimumVolume: '',
  effectiveFrom: '',
  effectiveTo: '',
  active: true,
};

const emptyPayoutForm = {
  frequency: 'WEEKLY',
  cutoffDay: 'SUNDAY',
  processingDays: '2',
  minimumPayout: '500',
  bankTransferMode: 'NEFT',
  active: true,
};

const levelOptions = [
  { label: 'State', value: 'STATE' },
  { label: 'Zone', value: 'ZONE' },
  { label: 'District', value: 'DISTRICT' },
  { label: 'Taluk', value: 'TALUK' },
  { label: 'Town', value: 'TOWN' },
];

const typeOptions = [
  { label: 'Percentage', value: 'PERCENTAGE' },
  { label: 'Flat', value: 'FLAT' },
];

const conditionOptions = [
  { label: 'All shipments', value: 'ALL_SHIPMENTS' },
  { label: 'Prepaid only', value: 'PREPAID_ONLY' },
  { label: 'COD only', value: 'COD_ONLY' },
  { label: 'Volume target', value: 'VOLUME_TARGET' },
];

const frequencyOptions = [
  { label: 'Weekly', value: 'WEEKLY' },
  { label: 'Bi-weekly', value: 'BI_WEEKLY' },
  { label: 'Monthly', value: 'MONTHLY' },
];

const cutoffOptions = [
  { label: 'Monday', value: 'MONDAY' },
  { label: 'Tuesday', value: 'TUESDAY' },
  { label: 'Wednesday', value: 'WEDNESDAY' },
  { label: 'Thursday', value: 'THURSDAY' },
  { label: 'Friday', value: 'FRIDAY' },
  { label: 'Saturday', value: 'SATURDAY' },
  { label: 'Sunday', value: 'SUNDAY' },
  { label: 'Last day of month', value: 'LAST_DAY_OF_MONTH' },
];

const transferOptions = [
  { label: 'NEFT', value: 'NEFT' },
  { label: 'IMPS', value: 'IMPS' },
  { label: 'RTGS', value: 'RTGS' },
];

const statusOptions = [
  { label: 'All statuses', value: '' },
  { label: 'Active', value: 'active' },
  { label: 'Inactive', value: 'inactive' },
];

const allOption = (label) => [{ label, value: '' }];
const labelFor = (options, value) => options.find((option) => option.value === value)?.label || value || '-';
const formatDate = (value) => (value ? new Date(value).toLocaleDateString('en-IN') : '-');
const formatMoney = (value) => `Rs. ${Number(value || 0).toLocaleString('en-IN')}`;
const unwrap = (response) => response?.data ?? response;

export default function CommissionsMaster() {
  const [rules, setRules] = useState([]);
  const [payoutConfig, setPayoutConfig] = useState(null);
  const [selectedRule, setSelectedRule] = useState(null);
  const [ruleForm, setRuleForm] = useState(emptyRuleForm);
  const [payoutForm, setPayoutForm] = useState(emptyPayoutForm);
  const [filters, setFilters] = useState({ search: '', status: '', level: '', type: '' });
  const [drawer, setDrawer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    loadRules();
    loadPayoutConfig();
  }, []);

  async function loadRules(nextFilters = filters) {
    try {
      setLoading(true);
      const response = unwrap(await getCommissionRules({ page: 0, size: 100, ...nextFilters }));
      setRules(response?.content || []);
    } catch (error) {
      addToast(error.message || 'Unable to load commission rules', 'error');
    } finally {
      setLoading(false);
    }
  }

  async function loadPayoutConfig() {
    try {
      const config = unwrap(await getCommissionPayoutConfig());
      setPayoutConfig(config);
      setPayoutForm(toPayoutForm(config));
    } catch (error) {
      addToast(error.message || 'Unable to load payout config', 'error');
    }
  }

  function toPayoutForm(config) {
    return {
      frequency: config?.frequency || 'WEEKLY',
      cutoffDay: config?.cutoffDay || 'SUNDAY',
      processingDays: String(config?.processingDays ?? 2),
      minimumPayout: String(config?.minimumPayout ?? 500),
      bankTransferMode: config?.bankTransferMode || 'NEFT',
      active: config?.active ?? true,
    };
  }

  function updateFilter(field, value) {
    const next = { ...filters, [field]: value };
    setFilters(next);
    loadRules(next);
  }

  function openNewRule() {
    setSelectedRule(null);
    setRuleForm(emptyRuleForm);
    setDrawer('rule');
  }

  async function openEditRule(id) {
    try {
      const rule = unwrap(await getCommissionRule(id));
      setSelectedRule(rule);
      setRuleForm({
        franchiseLevel: rule.franchiseLevel || 'STATE',
        commissionType: rule.commissionType || 'PERCENTAGE',
        value: String(rule.value ?? ''),
        conditionType: rule.conditionType || 'ALL_SHIPMENTS',
        minimumVolume: String(rule.minimumVolume ?? ''),
        effectiveFrom: rule.effectiveFrom || '',
        effectiveTo: rule.effectiveTo || '',
        active: rule.active ?? true,
      });
      setDrawer('rule');
    } catch (error) {
      addToast(error.message || 'Unable to open commission rule', 'error');
    }
  }

  function openPayoutConfig() {
    setPayoutForm(toPayoutForm(payoutConfig));
    setDrawer('config');
  }

  async function saveRule() {
    const payload = {
      franchiseLevel: ruleForm.franchiseLevel,
      commissionType: ruleForm.commissionType,
      value: Number(ruleForm.value),
      conditionType: ruleForm.conditionType,
      minimumVolume: ruleForm.conditionType === 'VOLUME_TARGET' ? Number(ruleForm.minimumVolume) : null,
      effectiveFrom: ruleForm.effectiveFrom || null,
      effectiveTo: ruleForm.effectiveTo || null,
      active: ruleForm.active,
    };

    try {
      setSaving(true);
      if (selectedRule) await updateCommissionRule(selectedRule.id, payload);
      else await createCommissionRule(payload);
      await loadRules();
      setDrawer(null);
      addToast('Commission rule saved', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to save commission rule', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function savePayoutConfig() {
    const payload = {
      frequency: payoutForm.frequency,
      cutoffDay: payoutForm.cutoffDay,
      processingDays: Number(payoutForm.processingDays),
      minimumPayout: Number(payoutForm.minimumPayout),
      bankTransferMode: payoutForm.bankTransferMode,
      active: payoutForm.active,
    };

    try {
      setSaving(true);
      const config = unwrap(await updateCommissionPayoutConfig(payload));
      setPayoutConfig(config);
      setPayoutForm(toPayoutForm(config));
      setDrawer(null);
      addToast('Payout config saved', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to save payout config', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function toggleRule(row) {
    try {
      await updateCommissionRuleStatus(row.id, !row.active);
      await loadRules();
      addToast(row.active ? 'Commission rule disabled' : 'Commission rule enabled', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to update commission rule status', 'error');
    }
  }

  async function removeRule(row) {
    if (!window.confirm(`Delete ${row.code}?`)) return;
    try {
      await deleteCommissionRule(row.id);
      await loadRules();
      addToast('Commission rule deleted', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to delete commission rule', 'error');
    }
  }

  const ruleColumns = useMemo(() => [
    { key: 'code', label: 'Code' },
    { key: 'franchiseLevel', label: 'Franchise Level', render: (value) => labelFor(levelOptions, value) },
    { key: 'commissionType', label: 'Commission Type', render: (value) => labelFor(typeOptions, value) },
    { key: 'value', label: 'Value', render: (value, row) => row.commissionType === 'PERCENTAGE' ? `${value}%` : formatMoney(value) },
    { key: 'conditionType', label: 'Condition', render: (value) => labelFor(conditionOptions, value) },
    { key: 'effectiveFrom', label: 'Effective From', render: formatDate },
    { key: 'active', label: 'Status', render: (value) => value ? <span className="font-medium text-green-600">Active</span> : <span className="font-medium text-red-600">Inactive</span> },
  ], []);

  const ruleActions = (row) => (
    <>
      <Button variant="ghost" size="sm" icon={Edit} onClick={() => openEditRule(row.id)}>Edit</Button>
      <Button variant="ghost" size="sm" icon={Power} onClick={() => toggleRule(row)}>{row.active ? 'Disable' : 'Enable'}</Button>
      <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700" onClick={() => removeRule(row)} />
    </>
  );

  const tabs = [
    {
      key: 'rules',
      label: 'Commission Rules',
      content: (
        <Card>
          <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-4">
            <Input label="Search" value={filters.search} onChange={(e) => updateFilter('search', e.target.value)} placeholder="Code or condition" />
            <Select label="Status" value={filters.status} onChange={(e) => updateFilter('status', e.target.value)} options={statusOptions} />
            <Select label="Level" value={filters.level} onChange={(e) => updateFilter('level', e.target.value)} options={[...allOption('All levels'), ...levelOptions]} />
            <Select label="Type" value={filters.type} onChange={(e) => updateFilter('type', e.target.value)} options={[...allOption('All types'), ...typeOptions]} />
          </div>
          <DataTable columns={ruleColumns} data={rules} actions={ruleActions} searchable={false} title={loading ? 'Loading commission rules...' : 'Configured Commission Rules'} emptyMessage="No commission rules configured" />
        </Card>
      ),
    },
    {
      key: 'earnings',
      label: 'Earnings Computation',
      content: (
        <Card>
          <div className="py-16 text-center">
            <h3 className="text-lg font-semibold text-slate-900">No earnings data available yet.</h3>
            <p className="mt-2 text-sm text-slate-500">Earnings will be generated once franchise shipment operations are connected.</p>
          </div>
        </Card>
      ),
    },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      <PageHeader
        title="Commission & Revenue Engine"
        description="Define payout rules, conditions, and franchise payout cycle settings."
        actions={(
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" icon={Settings} onClick={openPayoutConfig}>Cycle Config</Button>
            <Button icon={Plus} onClick={openNewRule}>New Rule</Button>
          </div>
        )}
      />

      <Tabs tabs={tabs} defaultTab="rules" />

      <Drawer
        open={drawer === 'rule'}
        onClose={() => setDrawer(null)}
        title={selectedRule ? 'Edit Commission Rule' : 'Create Commission Rule'}
        width="max-w-2xl"
        footer={(
          <>
            <Button variant="outline" onClick={() => setDrawer(null)}>Cancel</Button>
            <Button onClick={saveRule} isLoading={saving}>Save Rule</Button>
          </>
        )}
      >
        <div className="space-y-6">
          <FormSection title="Rule Details">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Select label="Applies To" value={ruleForm.franchiseLevel} onChange={(e) => setRuleForm((prev) => ({ ...prev, franchiseLevel: e.target.value }))} options={levelOptions} />
              <Select label="Commission Type" value={ruleForm.commissionType} onChange={(e) => setRuleForm((prev) => ({ ...prev, commissionType: e.target.value }))} options={typeOptions} />
              <Input label="Value" type="number" step="0.01" value={ruleForm.value} onChange={(e) => setRuleForm((prev) => ({ ...prev, value: e.target.value }))} placeholder="15" />
              <Select label="Condition" value={ruleForm.conditionType} onChange={(e) => setRuleForm((prev) => ({ ...prev, conditionType: e.target.value }))} options={conditionOptions} />
              {ruleForm.conditionType === 'VOLUME_TARGET' && (
                <Input label="Minimum Volume" type="number" value={ruleForm.minimumVolume} onChange={(e) => setRuleForm((prev) => ({ ...prev, minimumVolume: e.target.value }))} placeholder="500" />
              )}
              <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <input type="checkbox" checked={ruleForm.active} onChange={(e) => setRuleForm((prev) => ({ ...prev, active: e.target.checked }))} className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
                Active
              </label>
            </div>
          </FormSection>

          <FormSection title="Effective Period">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input label="Effective From" type="date" value={ruleForm.effectiveFrom} onChange={(e) => setRuleForm((prev) => ({ ...prev, effectiveFrom: e.target.value }))} />
              <Input label="Effective To" type="date" value={ruleForm.effectiveTo} onChange={(e) => setRuleForm((prev) => ({ ...prev, effectiveTo: e.target.value }))} />
            </div>
          </FormSection>
        </div>
      </Drawer>

      <Drawer
        open={drawer === 'config'}
        onClose={() => setDrawer(null)}
        title="Payout Cycle Configuration"
        width="max-w-xl"
        footer={(
          <>
            <Button variant="outline" onClick={() => setDrawer(null)}>Cancel</Button>
            <Button onClick={savePayoutConfig} isLoading={saving}>Save Config</Button>
          </>
        )}
      >
        <div className="space-y-4">
          <Select label="Payout Frequency" value={payoutForm.frequency} onChange={(e) => setPayoutForm((prev) => ({ ...prev, frequency: e.target.value }))} options={frequencyOptions} />
          <Select label="Cutoff Day" value={payoutForm.cutoffDay} onChange={(e) => setPayoutForm((prev) => ({ ...prev, cutoffDay: e.target.value }))} options={cutoffOptions} />
          <Input label="Processing Days Required" type="number" value={payoutForm.processingDays} onChange={(e) => setPayoutForm((prev) => ({ ...prev, processingDays: e.target.value }))} />
          <Input label="Minimum Payout Threshold" type="number" step="0.01" value={payoutForm.minimumPayout} onChange={(e) => setPayoutForm((prev) => ({ ...prev, minimumPayout: e.target.value }))} />
          <Select label="Bank Transfer Mode" value={payoutForm.bankTransferMode} onChange={(e) => setPayoutForm((prev) => ({ ...prev, bankTransferMode: e.target.value }))} options={transferOptions} />
          <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <input type="checkbox" checked={payoutForm.active} onChange={(e) => setPayoutForm((prev) => ({ ...prev, active: e.target.checked }))} className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
            Active
          </label>
        </div>
      </Drawer>
    </div>
  );
}
