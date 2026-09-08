import { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, Ban, CheckCircle, ChevronLeft, ChevronRight, Edit, Eye, Filter, MapPin, Plus, RefreshCcw, Search, Store, Trash2, UserRound, XCircle } from 'lucide-react';
import Modal, { Drawer } from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';
import { useToast } from '../../../context/ToastContext';
import { createFranchise, deleteFranchise, getFranchise, getFranchises, getNetworkNodes, updateFranchise, updateFranchiseStatus } from '../../../api/api';

const FRANCHISE_TYPES = ['STATE', 'ZONE', 'DISTRICT', 'TALUK', 'TOWN', 'LOCAL'];
const STATUS_OPTIONS = ['ACTIVE', 'INACTIVE', 'SUSPENDED'];
const NODE_TYPE_LABELS = { HUB: 'Hub', BRANCH: 'Branch', DELIVERY_CENTER: 'Delivery Center' };
const EMPTY_FORM = { name: '', type: 'TOWN', ownerName: '', phone: '', email: '', address: '', stateId: '', zoneId: '', districtId: '', talukId: '', townId: '', pincodeId: '', networkNodeId: '' };

const unwrap = (response) => response?.data ?? response ?? null;
const formatNumber = (value) => Number(value || 0).toLocaleString();
const errorMessage = (error, fallback) => error?.response?.data?.message || error?.message || fallback;
const labelize = (value) => String(value || '').replace(/_/g, ' ').toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());

function toForm(franchise) {
  return {
    name: franchise?.name || '',
    type: franchise?.type || 'TOWN',
    ownerName: franchise?.ownerName || '',
    phone: franchise?.phone || '',
    email: franchise?.email || '',
    address: franchise?.address || '',
    stateId: franchise?.state?.id || '',
    zoneId: franchise?.zone?.id || '',
    districtId: franchise?.district?.id || '',
    talukId: franchise?.taluk?.id || '',
    townId: franchise?.town?.id || '',
    pincodeId: franchise?.pincode?.id || '',
    networkNodeId: franchise?.networkNode?.id || '',
  };
}

function payloadFromForm(form) {
  return {
    name: form.name,
    type: form.type,
    ownerName: form.ownerName,
    phone: form.phone,
    email: form.email,
    address: form.address,
    stateId: Number(form.stateId),
    zoneId: Number(form.zoneId),
    districtId: Number(form.districtId),
    talukId: form.talukId ? Number(form.talukId) : null,
    townId: form.townId ? Number(form.townId) : null,
    pincodeId: form.pincodeId ? Number(form.pincodeId) : null,
    networkNodeId: Number(form.networkNodeId),
  };
}

function locationText(franchise) {
  return [franchise.town?.name, franchise.taluk?.name, franchise.district?.name, franchise.state?.name].filter(Boolean).join(', ') || '-';
}

export default function FranchiseMaster() {
  const { addToast } = useToast();
  const [franchises, setFranchises] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [drawerMode, setDrawerMode] = useState(null);
  const [selected, setSelected] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteBlock, setDeleteBlock] = useState(null);

  const nodeOptions = useMemo(() => nodes.map((node) => ({ value: node.id, label: `${node.code} - ${node.name} (${NODE_TYPE_LABELS[node.type] || node.type})` })), [nodes]);

  const loadNodes = useCallback(async () => {
    try {
      const response = unwrap(await getNetworkNodes({ page: 0, size: 100 })) || {};
      setNodes((response.content || []).filter((node) => node.active && ['HUB', 'BRANCH', 'DELIVERY_CENTER'].includes(node.type)));
    } catch (error) {
      addToast(errorMessage(error, 'Failed to load hubs and branches'), 'error');
    }
  }, [addToast]);

  const loadFranchises = useCallback(async () => {
    setLoading(true);
    try {
      const response = unwrap(await getFranchises({ page, size, search, status: statusFilter, type: typeFilter })) || {};
      setFranchises(response.content || []);
      setTotalPages(response.totalPages || 0);
      setTotalElements(response.totalElements || 0);
    } catch (error) {
      addToast(errorMessage(error, 'Failed to load franchises'), 'error');
    } finally {
      setLoading(false);
    }
  }, [addToast, page, search, size, statusFilter, typeFilter]);

  useEffect(() => { const timer = setTimeout(loadNodes, 0); return () => clearTimeout(timer); }, [loadNodes]);
  useEffect(() => { const timer = setTimeout(loadFranchises, 350); return () => clearTimeout(timer); }, [loadFranchises]);

  async function refresh() {
    await Promise.all([loadNodes(), loadFranchises()]);
  }

  function openCreate() {
    setSelected(null);
    setForm(EMPTY_FORM);
    setDrawerMode('create');
  }

  async function openView(id) {
    try {
      setSelected(unwrap(await getFranchise(id)));
      setDrawerMode('view');
    } catch (error) {
      addToast(errorMessage(error, 'Unable to load franchise'), 'error');
    }
  }

  async function openEdit(id) {
    try {
      const franchise = unwrap(await getFranchise(id));
      setSelected(franchise);
      setForm(toForm(franchise));
      setDrawerMode('edit');
    } catch (error) {
      addToast(errorMessage(error, 'Unable to load franchise'), 'error');
    }
  }

  async function save() {
    try {
      if (drawerMode === 'edit') {
        await updateFranchise(selected.id, payloadFromForm(form));
        addToast('Franchise updated successfully');
      } else {
        await createFranchise(payloadFromForm(form));
        addToast('Franchise created successfully');
      }
      setDrawerMode(null);
      await refresh();
    } catch (error) {
      addToast(errorMessage(error, 'Unable to save franchise'), 'error');
    }
  }

  async function changeStatus(franchise, status) {
    try {
      await updateFranchiseStatus(franchise.id, status);
      addToast(`Franchise ${labelize(status)}`);
      await loadFranchises();
    } catch (error) {
      addToast(errorMessage(error, 'Unable to update franchise status'), 'error');
    }
  }

  async function confirmDelete() {
    if (!deleteTarget) return;
    try {
      await deleteFranchise(deleteTarget.id);
      addToast('Franchise deleted successfully');
      setDeleteTarget(null);
      await refresh();
    } catch (error) {
      const data = error?.response?.data;
      if (data?.code === 'FRANCHISE_IN_USE') {
        setDeleteBlock(data);
        return;
      }
      addToast(errorMessage(error, 'Unable to delete franchise'), 'error');
    }
  }

  async function disableInstead() {
    if (!deleteTarget) return;
    await changeStatus(deleteTarget, 'INACTIVE');
    setDeleteTarget(null);
    setDeleteBlock(null);
  }

  return (
    <div className="p-8 w-full mx-auto space-y-6 animate-fade-in bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Franchise Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage franchise master records, geography, hub assignment and status.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={refresh} className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50"><RefreshCcw className="w-4 h-4" /> Refresh</button>
          <button onClick={openCreate} className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black transition-colors shadow-md text-sm"><Plus className="w-4 h-4" /> Add Franchise</button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col">
        <TableControls count={totalElements} search={search} setSearch={(value) => { setSearch(value); setPage(0); }} statusFilter={statusFilter} setStatusFilter={(value) => { setStatusFilter(value); setPage(0); }} typeFilter={typeFilter} setTypeFilter={(value) => { setTypeFilter(value); setPage(0); }} />
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm whitespace-nowrap">
            <thead className="bg-gray-50 text-gray-500 border-b border-gray-100">
              <tr><Header>Franchise</Header><Header>Type & Location</Header><Header>Assigned Hub/Branch</Header><Header>Owner Contact</Header><Header>Status</Header><Header center>Actions</Header></tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {loading ? <EmptyRow text="Loading franchises..." colSpan={6} /> : franchises.map((row) => <FranchiseRow key={row.id} row={row} onView={openView} onEdit={openEdit} onStatus={changeStatus} onDelete={(item) => { setDeleteTarget(item); setDeleteBlock(null); }} />)}
              {!loading && franchises.length === 0 && <EmptyRow text="No franchises found." colSpan={6} />}
            </tbody>
          </table>
        </div>
        <Pagination page={page} size={size} totalPages={totalPages} totalElements={totalElements} setPage={setPage} setSize={(value) => { setSize(value); setPage(0); }} />
      </div>

      <FranchiseDrawer mode={drawerMode} form={form} setForm={setForm} selected={selected} nodeOptions={nodeOptions} onClose={() => setDrawerMode(null)} onSave={save} />
      {deleteTarget && <DeleteModal target={deleteTarget} block={deleteBlock} onConfirm={confirmDelete} onDisable={disableInstead} onClose={() => { setDeleteTarget(null); setDeleteBlock(null); }} />}
    </div>
  );
}

function TableControls({ count, search, setSearch, statusFilter, setStatusFilter, typeFilter, setTypeFilter }) {
  return <div className="p-4 border-b border-gray-100 flex flex-col xl:flex-row xl:items-center justify-between gap-4 bg-white"><p className="text-sm font-bold text-gray-900">{formatNumber(count)} <span className="font-medium text-gray-500">franchises found</span></p><div className="flex flex-wrap items-center gap-3"><div className="relative"><Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name, code, owner or phone..." className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] w-72" /></div><select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"><option value="">All Types</option>{FRANCHISE_TYPES.map((type) => <option key={type} value={type}>{labelize(type)}</option>)}</select><select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"><option value="">All Status</option>{STATUS_OPTIONS.map((status) => <option key={status} value={status}>{labelize(status)}</option>)}</select><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filter</button></div></div>;
}

function FranchiseRow({ row, onView, onEdit, onStatus, onDelete }) {
  const active = row.status === 'ACTIVE';
  return <tr className="hover:bg-gray-50/50 transition-colors bg-white"><td className="px-6 py-4"><div className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0"><Store className="w-5 h-5" /></div><div><p className="font-bold text-gray-900 text-sm">{row.name}</p><p className="text-xs text-gray-500 font-medium">{row.code}</p></div></div></td><td className="px-6 py-4 whitespace-normal max-w-xs"><span className="inline-flex px-2.5 py-1 rounded-md text-xs font-bold text-[#E31837] bg-red-50 mb-2">{labelize(row.type)}</span><div className="flex items-start gap-2 text-gray-600"><MapPin className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" /><span className="font-medium text-sm leading-snug">{locationText(row)}</span></div></td><td className="px-6 py-4"><div className="font-bold text-gray-900">{row.networkNode?.name || '-'}</div><div className="text-xs text-gray-500">{row.networkNode?.code || '-'}</div></td><td className="px-6 py-4"><div className="space-y-1"><div className="flex items-center gap-2 text-gray-700"><UserRound className="w-3.5 h-3.5 text-gray-400" /><span className="font-medium">{row.ownerName || '-'}</span></div><div className="text-gray-500 text-xs">{row.phone || '-'}</div><div className="text-gray-500 text-xs">{row.email || '-'}</div></div></td><td className="px-6 py-4"><StatusBadge status={row.status} /></td><td className="px-6 py-4"><div className="flex items-center justify-center gap-2"><IconButton title="View" icon={Eye} onClick={() => onView(row.id)} /><IconButton title="Edit" icon={Edit} onClick={() => onEdit(row.id)} />{active ? <IconButton title="Disable" icon={Ban} onClick={() => onStatus(row, 'INACTIVE')} /> : <IconButton title="Activate" icon={CheckCircle} onClick={() => onStatus(row, 'ACTIVE')} />}<IconButton title="Suspend" icon={XCircle} onClick={() => onStatus(row, 'SUSPENDED')} /><IconButton title="Delete" icon={Trash2} onClick={() => onDelete(row)} danger /></div></td></tr>;
}

function FranchiseDrawer({ mode, form, setForm, selected, nodeOptions, onClose, onSave }) {
  const open = ['create', 'edit', 'view'].includes(mode);
  const readOnly = mode === 'view';
  const title = mode === 'create' ? 'Add Franchise' : mode === 'edit' ? 'Edit Franchise' : 'View Franchise';
  return <Drawer open={open} onClose={onClose} title={title} width="max-w-3xl" footer={readOnly ? <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onClose}>Close</button> : <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg" onClick={onClose}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onSave}>Save Changes</button></>}>
    {readOnly ? <FranchiseDetails item={selected} /> : <div className="space-y-8"><FormBlock title="Franchise Details"><div className="grid grid-cols-1 md:grid-cols-2 gap-4"><Input label="Franchise Name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="Neyyattinkara Logistics" /><Select label="Franchise Type" value={form.type} onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))} options={FRANCHISE_TYPES.map((type) => ({ value: type, label: labelize(type) }))} /><Input label="Address" value={form.address} onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))} wrapperClassName="md:col-span-2" /></div></FormBlock><FormBlock title="Owner Details"><div className="grid grid-cols-1 md:grid-cols-3 gap-4"><Input label="Owner Name" value={form.ownerName} onChange={(e) => setForm((p) => ({ ...p, ownerName: e.target.value }))} /><Input label="Phone" value={form.phone} onChange={(e) => setForm((p) => ({ ...p, phone: e.target.value }))} /><Input label="Email" type="email" value={form.email} onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))} /></div></FormBlock><FormBlock title="Geography"><GeoHierarchyPicker maxLevel="pincode" value={form} onChange={(value) => setForm((prev) => ({ ...prev, ...value }))} /></FormBlock><FormBlock title="Assign Hub/Branch"><Select label="Assigned Hub/Branch" value={form.networkNodeId} onChange={(e) => setForm((p) => ({ ...p, networkNodeId: e.target.value }))} options={[{ value: '', label: 'Select active hub, branch or delivery center' }, ...nodeOptions]} /></FormBlock></div>}
  </Drawer>;
}

function FranchiseDetails({ item }) {
  if (!item) return null;
  const rows = [['Code', item.code], ['Name', item.name], ['Type', labelize(item.type)], ['Owner', item.ownerName || '-'], ['Phone', item.phone || '-'], ['Email', item.email || '-'], ['Location', locationText(item)], ['Pincode', item.pincode?.pincode || '-'], ['Assigned Hub/Branch', item.networkNode ? `${item.networkNode.code} - ${item.networkNode.name}` : '-'], ['Status', labelize(item.status)], ['Created', item.createdAt ? new Date(item.createdAt).toLocaleString() : '-'], ['Updated', item.updatedAt ? new Date(item.updatedAt).toLocaleString() : '-']];
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{rows.map(([label, value]) => <div key={label} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50"><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><p className="text-sm font-semibold text-gray-900 whitespace-normal">{value}</p></div>)}</div>;
}

function DeleteModal({ target, block, onConfirm, onDisable, onClose }) {
  const blocked = block?.code === 'FRANCHISE_IN_USE';
  const entries = Object.entries(block?.dependencies || {}).filter(([, value]) => Number(value) > 0);
  return <Modal open onClose={onClose} title={blocked ? 'Cannot Delete Franchise' : 'Delete Franchise'} size="sm" footer={blocked ? <><button onClick={onClose} className="px-4 py-2 border rounded-lg">Close</button><button onClick={onDisable} className="px-4 py-2 bg-[#E31837] text-white rounded-lg">Disable Instead</button></> : <><button onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button><button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg">Delete</button></>}><div className="space-y-4"><div className="flex gap-3"><AlertCircle className={blocked ? 'w-5 h-5 text-amber-500' : 'w-5 h-5 text-red-500'} /><p className="text-sm text-gray-700">{blocked ? 'This franchise is currently in use.' : `Delete ${target.name}?`}</p></div>{blocked && <div className="space-y-2">{entries.map(([key, value]) => <div key={key} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm"><span>{labelize(key)}</span><b>{formatNumber(value)}</b></div>)}</div>}</div></Modal>;
}

function FormBlock({ title, children }) {
  return <section className="space-y-3"><h4 className="text-sm font-bold text-gray-900">{title}</h4>{children}</section>;
}

function Pagination({ page, size, totalPages, totalElements, setPage, setSize }) {
  const start = totalElements === 0 ? 0 : page * size + 1;
  const end = Math.min((page + 1) * size, totalElements);
  return <div className="p-4 border-t border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-3 bg-white"><p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">{start} to {end}</span> of <span className="font-bold text-gray-900">{formatNumber(totalElements)}</span> entries</p><div className="flex items-center gap-3"><button disabled={page <= 0} onClick={() => setPage(page - 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-500 disabled:text-gray-300"><ChevronLeft className="w-4 h-4" /></button><span className="text-sm font-bold text-gray-700">{page + 1} / {Math.max(totalPages, 1)}</span><button disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-500 disabled:text-gray-300"><ChevronRight className="w-4 h-4" /></button><select value={size} onChange={(event) => setSize(Number(event.target.value))} className="px-3 py-1.5 border border-gray-200 rounded-md text-sm"><option value={10}>10 / page</option><option value={20}>20 / page</option><option value={50}>50 / page</option></select></div></div>;
}

function Header({ children, center = false }) {
  return <th className={`px-6 py-4 font-bold text-[11px] uppercase tracking-wider ${center ? 'text-center' : ''}`}>{children}</th>;
}

function EmptyRow({ text, colSpan }) {
  return <tr><td colSpan={colSpan} className="px-6 py-12 text-center text-sm text-gray-500">{text}</td></tr>;
}

function StatusBadge({ status }) {
  const styles = status === 'ACTIVE' ? 'text-green-700 bg-green-50 border-green-100' : status === 'SUSPENDED' ? 'text-amber-700 bg-amber-50 border-amber-100' : 'text-red-700 bg-red-50 border-red-100';
  const dot = status === 'ACTIVE' ? 'bg-green-500' : status === 'SUSPENDED' ? 'bg-amber-500' : 'bg-red-500';
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${styles}`}><span className={`w-1.5 h-1.5 rounded-full ${dot}`} />{labelize(status)}</span>;
}

function IconButton({ icon: Icon, title, onClick, danger = false }) {
  return <button title={title} onClick={onClick} className={`p-1.5 border border-gray-200 rounded-md text-gray-400 transition-colors ${danger ? 'hover:text-red-600 hover:bg-red-50' : 'hover:text-[#E31837] hover:bg-red-50'}`}><Icon className="w-4 h-4" /></button>;
}

