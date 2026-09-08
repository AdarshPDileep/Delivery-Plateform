import React, { useEffect, useMemo, useState } from 'react';
import { Edit, Plus, Power, Trash2 } from 'lucide-react';
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
  createRateCard,
  createSurcharge,
  deleteRateCard,
  deleteSurcharge,
  getRateCard,
  getRateCards,
  getSurcharges,
  updateRateCard,
  updateRateCardStatus,
  updateSurcharge,
  updateSurchargeStatus,
} from '../../../api/api';

const defaultSlabs = [
  { minWeightKg: '0', maxWeightKg: '0.5', scope: 'LOCAL', rate: '' },
  { minWeightKg: '0.5', maxWeightKg: '1', scope: 'LOCAL', rate: '' },
];

const emptyRateCardForm = {
  name: '',
  type: 'DEFAULT',
  active: true,
  slabs: defaultSlabs,
};

const emptySurchargeForm = {
  name: '',
  type: 'FIXED',
  value: '',
  enabled: true,
};

const typeOptions = [
  { label: 'Default', value: 'DEFAULT' },
  { label: 'Seller specific', value: 'SELLER_SPECIFIC' },
];

const scopeOptions = [
  { label: 'Local', value: 'LOCAL' },
  { label: 'Regional', value: 'REGIONAL' },
  { label: 'National', value: 'NATIONAL' },
];

const surchargeTypeOptions = [
  { label: 'Fixed', value: 'FIXED' },
  { label: 'Percentage', value: 'PERCENTAGE' },
];

const formatDate = (value) => (value ? new Date(value).toLocaleDateString('en-IN') : '-');
const formatMoney = (value) => `Rs. ${Number(value || 0).toLocaleString('en-IN')}`;
const unwrap = (response) => response?.data ?? response;

export default function RateCardMaster() {
  const [rateCards, setRateCards] = useState([]);
  const [surcharges, setSurcharges] = useState([]);
  const [selectedRateCard, setSelectedRateCard] = useState(null);
  const [selectedSurcharge, setSelectedSurcharge] = useState(null);
  const [rateCardForm, setRateCardForm] = useState(emptyRateCardForm);
  const [surchargeForm, setSurchargeForm] = useState(emptySurchargeForm);
  const [drawer, setDrawer] = useState(null);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const { addToast } = useToast();

  useEffect(() => {
    loadRateCards();
    loadSurcharges();
  }, []);

  async function loadRateCards() {
    try {
      setLoading(true);
      const response = unwrap(await getRateCards({ size: 100 }));
      setRateCards(response?.content || []);
    } catch (error) {
      addToast(error.message || 'Unable to load rate cards', 'error');
    } finally {
      setLoading(false);
    }
  }

  async function loadSurcharges() {
    try {
      const response = unwrap(await getSurcharges());
      setSurcharges(Array.isArray(response) ? response : []);
    } catch (error) {
      addToast(error.message || 'Unable to load surcharges', 'error');
    }
  }

  function openNewRateCard() {
    setSelectedRateCard(null);
    setRateCardForm({ ...emptyRateCardForm, slabs: defaultSlabs.map((slab) => ({ ...slab })) });
    setDrawer({ kind: 'rate-card', mode: 'new' });
  }

  async function openEditRateCard(id) {
    try {
      const card = unwrap(await getRateCard(id));
      setSelectedRateCard(card);
      setRateCardForm({
        name: card.name || '',
        type: card.type || 'DEFAULT',
        active: card.active ?? true,
        slabs: (card.slabs || []).map((slab) => ({
          minWeightKg: String(slab.minWeightKg ?? ''),
          maxWeightKg: String(slab.maxWeightKg ?? ''),
          scope: slab.scope || 'LOCAL',
          rate: String(slab.rate ?? ''),
        })),
      });
      setDrawer({ kind: 'rate-card', mode: 'edit' });
    } catch (error) {
      addToast(error.message || 'Unable to open rate card', 'error');
    }
  }

  function openNewSurcharge() {
    setSelectedSurcharge(null);
    setSurchargeForm(emptySurchargeForm);
    setDrawer({ kind: 'surcharge', mode: 'new' });
  }

  function openEditSurcharge(row) {
    setSelectedSurcharge(row);
    setSurchargeForm({
      name: row.name || '',
      type: row.type || 'FIXED',
      value: String(row.value ?? ''),
      enabled: row.enabled ?? true,
    });
    setDrawer({ kind: 'surcharge', mode: 'edit' });
  }

  function updateSlab(index, field, value) {
    setRateCardForm((prev) => ({
      ...prev,
      slabs: prev.slabs.map((slab, i) => (i === index ? { ...slab, [field]: value } : slab)),
    }));
  }

  function addSlab() {
    setRateCardForm((prev) => ({
      ...prev,
      slabs: [...prev.slabs, { minWeightKg: '', maxWeightKg: '', scope: 'LOCAL', rate: '' }],
    }));
  }

  function removeSlab(index) {
    setRateCardForm((prev) => ({
      ...prev,
      slabs: prev.slabs.filter((_, i) => i !== index),
    }));
  }

  async function saveRateCard() {
    const payload = {
      ...rateCardForm,
      slabs: rateCardForm.slabs.map((slab) => ({
        minWeightKg: Number(slab.minWeightKg),
        maxWeightKg: Number(slab.maxWeightKg),
        scope: slab.scope,
        rate: Number(slab.rate),
      })),
    };

    try {
      setSaving(true);
      if (drawer?.mode === 'edit') await updateRateCard(selectedRateCard.id, payload);
      else await createRateCard(payload);
      await loadRateCards();
      setDrawer(null);
      addToast('Rate card saved', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to save rate card', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function saveSurcharge() {
    const payload = { ...surchargeForm, value: Number(surchargeForm.value) };
    try {
      setSaving(true);
      if (drawer?.mode === 'edit') await updateSurcharge(selectedSurcharge.id, payload);
      else await createSurcharge(payload);
      await loadSurcharges();
      setDrawer(null);
      addToast('Surcharge saved', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to save surcharge', 'error');
    } finally {
      setSaving(false);
    }
  }

  async function toggleRateCard(row) {
    try {
      await updateRateCardStatus(row.id, !row.active);
      await loadRateCards();
      addToast(row.active ? 'Rate card disabled' : 'Rate card enabled', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to update status', 'error');
    }
  }

  async function toggleSurcharge(row) {
    try {
      await updateSurchargeStatus(row.id, !row.enabled);
      await loadSurcharges();
      addToast(row.enabled ? 'Surcharge disabled' : 'Surcharge enabled', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to update status', 'error');
    }
  }

  async function removeRateCard(row) {
    if (!window.confirm(`Delete ${row.name}?`)) return;
    try {
      await deleteRateCard(row.id);
      await loadRateCards();
      addToast('Rate card deleted', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to delete rate card', 'error');
    }
  }

  async function removeSurcharge(row) {
    if (!window.confirm(`Delete ${row.name}?`)) return;
    try {
      await deleteSurcharge(row.id);
      await loadSurcharges();
      addToast('Surcharge deleted', 'success');
    } catch (error) {
      addToast(error.message || 'Unable to delete surcharge', 'error');
    }
  }

  const rcColumns = useMemo(() => [
    { key: 'code', label: 'Code' },
    { key: 'name', label: 'Rate Card Name' },
    { key: 'type', label: 'Type', render: (value) => value === 'SELLER_SPECIFIC' ? 'Seller specific' : 'Default' },
    { key: 'applicableTo', label: 'Applicable To' },
    { key: 'active', label: 'Status', render: (value) => value ? <span className="font-medium text-green-600">Active</span> : <span className="font-medium text-red-600">Inactive</span> },
    { key: 'slabs', label: 'Slabs', render: (value) => value?.length || 0 },
    { key: 'createdAt', label: 'Created On', render: formatDate },
  ], []);

  const scColumns = useMemo(() => [
    { key: 'name', label: 'Surcharge Name' },
    { key: 'type', label: 'Type', render: (value) => value === 'PERCENTAGE' ? 'Percentage' : 'Fixed' },
    { key: 'value', label: 'Value', render: (value, row) => row.type === 'PERCENTAGE' ? `${value}%` : formatMoney(value) },
    { key: 'enabled', label: 'Status', render: (value) => value ? <span className="font-medium text-green-600">Enabled</span> : <span className="font-medium text-red-600">Disabled</span> },
  ], []);

  const rateCardActions = (row) => (
    <>
      <Button variant="ghost" size="sm" icon={Edit} onClick={() => openEditRateCard(row.id)}>Edit</Button>
      <Button variant="ghost" size="sm" icon={Power} onClick={() => toggleRateCard(row)}>{row.active ? 'Disable' : 'Enable'}</Button>
      <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700" onClick={() => removeRateCard(row)} />
    </>
  );

  const surchargeActions = (row) => (
    <>
      <Button variant="ghost" size="sm" icon={Edit} onClick={() => openEditSurcharge(row)}>Edit</Button>
      <Button variant="ghost" size="sm" icon={Power} onClick={() => toggleSurcharge(row)}>{row.enabled ? 'Disable' : 'Enable'}</Button>
      <Button variant="ghost" size="sm" icon={Trash2} className="text-red-600 hover:text-red-700" onClick={() => removeSurcharge(row)} />
    </>
  );

  const tabs = [
    {
      key: 'rate-cards',
      label: 'Rate Cards',
      content: (
        <Card>
          <DataTable columns={rcColumns} data={rateCards} actions={rateCardActions} title={loading ? 'Loading rate cards...' : 'Configured Rate Cards'} emptyMessage="No rate cards configured" />
        </Card>
      ),
    },
    {
      key: 'surcharges',
      label: 'Surcharges & Fees',
      content: (
        <Card>
          <DataTable columns={scColumns} data={surcharges} actions={surchargeActions} title="Global Surcharges" emptyMessage="No surcharges configured" />
        </Card>
      ),
    },
  ];

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      <PageHeader
        title="Rate Card & Service Charge Setup"
        description="Configure weight slabs, pricing scopes, and global shipping surcharges."
        actions={(
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" icon={Plus} onClick={openNewSurcharge}>Create Surcharge</Button>
            <Button icon={Plus} onClick={openNewRateCard}>Create Rate Card</Button>
          </div>
        )}
      />

      <Tabs tabs={tabs} defaultTab="rate-cards" />

      <Drawer
        open={drawer?.kind === 'rate-card'}
        onClose={() => setDrawer(null)}
        title={drawer?.mode === 'edit' ? 'Edit Rate Card' : 'Create Rate Card'}
        width="max-w-5xl"
        footer={(
          <>
            <Button variant="outline" onClick={() => setDrawer(null)}>Cancel</Button>
            <Button onClick={saveRateCard} isLoading={saving}>Save Changes</Button>
          </>
        )}
      >
        <div className="space-y-6">
          <FormSection title="Basic Details">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input label="Rate Card Name" value={rateCardForm.name} onChange={(e) => setRateCardForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="Standard B2B" />
              <Select label="Type" value={rateCardForm.type} onChange={(e) => setRateCardForm((prev) => ({ ...prev, type: e.target.value }))} options={typeOptions} />
              <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
                <input type="checkbox" checked={rateCardForm.active} onChange={(e) => setRateCardForm((prev) => ({ ...prev, active: e.target.checked }))} className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
                Active
              </label>
            </div>
          </FormSection>

          <FormSection title="Weight Slab Pricing">
            <div className="overflow-x-auto rounded-lg border border-slate-200">
              <table className="w-full text-left text-sm">
                <thead className="border-b border-slate-200 bg-slate-50 text-slate-600">
                  <tr>
                    <th className="px-4 py-2 font-medium">Min kg</th>
                    <th className="px-4 py-2 font-medium">Max kg</th>
                    <th className="px-4 py-2 font-medium">Scope</th>
                    <th className="px-4 py-2 font-medium">Rate</th>
                    <th className="px-4 py-2 text-right font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rateCardForm.slabs.map((slab, index) => (
                    <tr key={`${slab.scope}-${index}`}>
                      <td className="px-4 py-2"><Input type="number" step="0.001" value={slab.minWeightKg} onChange={(e) => updateSlab(index, 'minWeightKg', e.target.value)} className="h-8 min-w-24 text-xs" /></td>
                      <td className="px-4 py-2"><Input type="number" step="0.001" value={slab.maxWeightKg} onChange={(e) => updateSlab(index, 'maxWeightKg', e.target.value)} className="h-8 min-w-24 text-xs" /></td>
                      <td className="px-4 py-2"><Select value={slab.scope} onChange={(e) => updateSlab(index, 'scope', e.target.value)} options={scopeOptions} className="h-8 min-w-32 py-1 text-xs" /></td>
                      <td className="px-4 py-2"><Input type="number" step="0.01" value={slab.rate} onChange={(e) => updateSlab(index, 'rate', e.target.value)} className="h-8 min-w-24 text-xs" /></td>
                      <td className="px-4 py-2 text-right"><Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700" onClick={() => removeSlab(index)}>Remove</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="border-t border-slate-200 bg-slate-50 p-3">
                <Button variant="outline" size="sm" icon={Plus} onClick={addSlab}>Add Weight Slab</Button>
              </div>
            </div>
          </FormSection>
        </div>
      </Drawer>

      <Drawer
        open={drawer?.kind === 'surcharge'}
        onClose={() => setDrawer(null)}
        title={drawer?.mode === 'edit' ? 'Edit Surcharge' : 'Create Surcharge'}
        width="max-w-xl"
        footer={(
          <>
            <Button variant="outline" onClick={() => setDrawer(null)}>Cancel</Button>
            <Button onClick={saveSurcharge} isLoading={saving}>Save Changes</Button>
          </>
        )}
      >
        <div className="space-y-4">
          <Input label="Surcharge Name" value={surchargeForm.name} onChange={(e) => setSurchargeForm((prev) => ({ ...prev, name: e.target.value }))} placeholder="COD Fee" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Select label="Type" value={surchargeForm.type} onChange={(e) => setSurchargeForm((prev) => ({ ...prev, type: e.target.value }))} options={surchargeTypeOptions} />
            <Input label="Value" type="number" step="0.01" value={surchargeForm.value} onChange={(e) => setSurchargeForm((prev) => ({ ...prev, value: e.target.value }))} placeholder="30" />
          </div>
          <label className="flex items-center gap-3 rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-700">
            <input type="checkbox" checked={surchargeForm.enabled} onChange={(e) => setSurchargeForm((prev) => ({ ...prev, enabled: e.target.checked }))} className="rounded border-slate-300 text-navy-600 focus:ring-navy-500/20" />
            Enabled
          </label>
        </div>
      </Drawer>
    </div>
  );
}
