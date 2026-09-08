import React, { useEffect, useMemo, useState } from 'react';
import { Plus, Search, Globe, Map as MapIcon, Folder, Navigation, MapPin, CheckCircle2, MoreVertical, Edit, Filter, X, Check, ChevronLeft, ChevronRight, RefreshCcw, AlertCircle } from 'lucide-react';
import { createGeoDistrict, createGeoPincode, createGeoState, createGeoTaluk, createGeoTown, createGeoZone, getGeoDistricts, getGeoPincodes, getGeoStates, getGeoTaluks, getGeoTowns, getGeoZones, getGeographyStats, searchGeography, updateGeoDistrict, updateGeoPincode, updateGeoState, updateGeoTaluk, updateGeoTown, updateGeoZone } from '../../../api/api';
import { useToast } from '../../../context/ToastContext';

const ICONS = { state: Globe, zone: MapIcon, district: Folder, taluk: Navigation, town: MapPin, pincode: MapPin };
const COLORS = { state: 'text-indigo-500', zone: 'text-blue-500', district: 'text-emerald-500', taluk: 'text-amber-500', town: 'text-[#E31837]', pincode: 'text-gray-500' };
const NEXT_TYPE = { state: 'zone', zone: 'district', district: 'taluk', taluk: 'town', town: 'pincode' };
const PARENT_TYPE = { zone: 'state', district: 'zone', taluk: 'district', town: 'taluk', pincode: 'town' };
const TABS = ['tree', 'states', 'zones', 'districts', 'taluks', 'towns', 'pincodes'];
const INITIAL_STATS = { states: 0, zones: 0, districts: 0, taluks: 0, towns: 0, totalPincodes: 0, serviceablePincodes: 0 };
const EMPTY_PAGE = { content: [], page: 0, size: 20, totalElements: 0, totalPages: 0 };

function normalizeItem(item, type) {
  return {
    id: item.id,
    type,
    name: item.name || item.pincode,
    code: item.code || '',
    active: item.active !== false,
    serviceable: item.serviceable,
    pickupAvailable: item.pickupAvailable,
    deliveryAvailable: item.deliveryAvailable,
    codAvailable: item.codAvailable,
    prepaidAvailable: item.prepaidAvailable,
    reversePickupAvailable: item.reversePickupAvailable,
  };
}

function errorMessage(error) {
  return error?.message || 'Request failed';
}

export default function GeoMaster() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('tree');
  const [stats, setStats] = useState(INITIAL_STATS);
  const [states, setStates] = useState([]);
  const [activePath, setActivePath] = useState([]);
  const [children, setChildren] = useState([]);
  const [tableRows, setTableRows] = useState([]);
  const [pincodePage, setPincodePage] = useState(EMPTY_PAGE);
  const [loading, setLoading] = useState(true);
  const [tableLoading, setTableLoading] = useState(false);
  const [error, setError] = useState('');
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [formType, setFormType] = useState('state');
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({});
  const [parentOptions, setParentOptions] = useState({ states: [], zones: [], districts: [], taluks: [], towns: [] });

  const selectedNode = activePath[activePath.length - 1] || null;
  const visibleRows = activeTab === 'pincodes' ? pincodePage.content.map((item) => normalizeItem(item, 'pincode')) : tableRows;
  const cards = useMemo(() => [
    ['States', stats.states, Globe], ['Zones', stats.zones, MapIcon], ['Districts', stats.districts, Folder], ['Towns', stats.towns, MapPin], ['Serviceable Pincodes', stats.serviceablePincodes, CheckCircle2],
  ], [stats]);

  useEffect(() => { loadInitial(); }, []);
  useEffect(() => { if (activeTab !== 'tree') loadTable(activeTab); }, [activeTab, activePath]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      const value = query.trim();
      if (!value) return setSearchResults([]);
      try {
        const response = await searchGeography(value);
        setSearchResults(response.data || []);
      } catch (err) {
        addToast(errorMessage(err), 'error');
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [query, addToast]);

  async function loadInitial() {
    setLoading(true);
    setError('');
    try {
      const [statsResponse, statesResponse] = await Promise.all([getGeographyStats(), getGeoStates()]);
      const stateItems = (statesResponse.data || []).map((item) => normalizeItem(item, 'state'));
      setStats(statsResponse.data || INITIAL_STATS);
      setStates(stateItems);
      setParentOptions((prev) => ({ ...prev, states: stateItems }));
      const nextPath = activePath.length ? activePath : stateItems.slice(0, 1);
      setActivePath(nextPath);
      if (nextPath.length) await loadChildren(nextPath[nextPath.length - 1]);
      else setChildren([]);
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function refreshAll() {
    await loadInitial();
    if (activeTab !== 'tree') await loadTable(activeTab);
  }

  async function fetchChildren(node, page = 0) {
    if (!node) return states;
    if (node.type === 'state') return (await getGeoZones(node.id)).data.map((item) => normalizeItem(item, 'zone'));
    if (node.type === 'zone') return (await getGeoDistricts(node.id)).data.map((item) => normalizeItem(item, 'district'));
    if (node.type === 'district') return (await getGeoTaluks(node.id)).data.map((item) => normalizeItem(item, 'taluk'));
    if (node.type === 'taluk') return (await getGeoTowns(node.id)).data.map((item) => normalizeItem(item, 'town'));
    if (node.type === 'town') {
      const response = await getGeoPincodes(node.id, page, 20);
      setPincodePage(response.data || EMPTY_PAGE);
      return (response.data?.content || []).map((item) => normalizeItem(item, 'pincode'));
    }
    return [];
  }

  async function loadChildren(node) {
    try {
      setChildren(await fetchChildren(node));
    } catch (err) {
      setChildren([]);
      addToast(errorMessage(err), 'error');
    }
  }

  async function loadTable(tab, page = 0) {
    setTableLoading(true);
    try {
      if (tab === 'states') {
        const response = await getGeoStates();
        setTableRows((response.data || []).map((item) => normalizeItem(item, 'state')));
        return;
      }
      const parent = parentForTab(tab);
      if (!parent) {
        setTableRows([]);
        if (tab === 'pincodes') setPincodePage(EMPTY_PAGE);
        return;
      }
      if (tab === 'pincodes') {
        const response = await getGeoPincodes(parent.id, page, 20);
        setPincodePage(response.data || EMPTY_PAGE);
        return;
      }
      setTableRows(await fetchChildren(parent));
    } catch (err) {
      setTableRows([]);
      addToast(errorMessage(err), 'error');
    } finally {
      setTableLoading(false);
    }
  }

  function parentForTab(tab) {
    const type = tab.slice(0, -1);
    const parentType = PARENT_TYPE[type];
    if (!parentType) return null;
    return [...activePath].reverse().find((node) => node.type === parentType) || null;
  }

  async function onPathClick(index) {
    const nextPath = activePath.slice(0, index + 1);
    setActivePath(nextPath);
    await loadChildren(nextPath[nextPath.length - 1]);
  }

  async function onChildClick(child) {
    if (child.type === 'pincode') return;
    const nextPath = [...activePath, child];
    setActivePath(nextPath);
    await loadChildren(child);
  }

  function parentForType(type) {
    const parentType = PARENT_TYPE[type];
    return parentType ? [...activePath].reverse().find((node) => node.type === parentType) : null;
  }

  function defaultForm(type, item = null) {
    const parent = parentForType(type);
    return {
      name: item?.type === 'pincode' ? '' : item?.name || '',
      code: item?.code || '',
      pincode: item?.type === 'pincode' ? item.name : '',
      active: item?.active ?? true,
      serviceable: item?.serviceable ?? true,
      pickupAvailable: item?.pickupAvailable ?? true,
      deliveryAvailable: item?.deliveryAvailable ?? true,
      codAvailable: item?.codAvailable ?? true,
      prepaidAvailable: item?.prepaidAvailable ?? true,
      reversePickupAvailable: item?.reversePickupAvailable ?? true,
      stateId: type === 'zone' ? parent?.id || '' : '',
      zoneId: type === 'district' ? parent?.id || '' : '',
      districtId: type === 'taluk' ? parent?.id || '' : '',
      talukId: type === 'town' ? parent?.id || '' : '',
      townId: type === 'pincode' ? parent?.id || '' : '',
    };
  }

  function openCreate(type = null) {
    const nextType = type || (selectedNode ? NEXT_TYPE[selectedNode.type] : 'state') || 'state';
    const nextForm = defaultForm(nextType);
    setFormType(nextType);
    setFormMode('create');
    setEditingItem(null);
    setForm(nextForm);
    setFormOpen(true);
    hydrateParentOptions(nextType, nextForm);
  }

  function openEdit(item) {
    const nextForm = defaultForm(item.type, item);
    setFormType(item.type);
    setFormMode('edit');
    setEditingItem(item);
    setForm(nextForm);
    setFormOpen(true);
    hydrateParentOptions(item.type, nextForm);
  }

  async function hydrateParentOptions(type, currentForm) {
    try {
      const baseStates = parentOptions.states.length ? parentOptions.states : (await getGeoStates()).data.map((item) => normalizeItem(item, 'state'));
      const next = { states: baseStates, zones: [], districts: [], taluks: [], towns: [] };
      const stateId = currentForm.stateId || baseStates[0]?.id;
      if (['zone', 'district', 'taluk', 'town', 'pincode'].includes(type) && stateId) next.zones = (await getGeoZones(stateId)).data.map((item) => normalizeItem(item, 'zone'));
      const zoneId = currentForm.zoneId || next.zones[0]?.id;
      if (['district', 'taluk', 'town', 'pincode'].includes(type) && zoneId) next.districts = (await getGeoDistricts(zoneId)).data.map((item) => normalizeItem(item, 'district'));
      const districtId = currentForm.districtId || next.districts[0]?.id;
      if (['taluk', 'town', 'pincode'].includes(type) && districtId) next.taluks = (await getGeoTaluks(districtId)).data.map((item) => normalizeItem(item, 'taluk'));
      const talukId = currentForm.talukId || next.taluks[0]?.id;
      if (type === 'pincode' && talukId) next.towns = (await getGeoTowns(talukId)).data.map((item) => normalizeItem(item, 'town'));
      setParentOptions(next);
      setForm((prev) => ({ ...prev, stateId: prev.stateId || stateId || '', zoneId: prev.zoneId || zoneId || '', districtId: prev.districtId || districtId || '', talukId: prev.talukId || talukId || '', townId: prev.townId || next.towns[0]?.id || '' }));
    } catch (err) {
      addToast(errorMessage(err), 'error');
    }
  }

  function payload() {
    if (formType === 'state') return { name: form.name, code: form.code, active: form.active };
    if (formType === 'zone') return { name: form.name, code: form.code, stateId: Number(form.stateId), active: form.active };
    if (formType === 'district') return { name: form.name, code: form.code, zoneId: Number(form.zoneId), active: form.active };
    if (formType === 'taluk') return { name: form.name, districtId: Number(form.districtId), active: form.active };
    if (formType === 'town') return { name: form.name, talukId: Number(form.talukId), active: form.active };
    return { pincode: form.pincode, townId: Number(form.townId), serviceable: form.serviceable, pickupAvailable: form.pickupAvailable, deliveryAvailable: form.deliveryAvailable, codAvailable: form.codAvailable, prepaidAvailable: form.prepaidAvailable, reversePickupAvailable: form.reversePickupAvailable, active: form.active };
  }

  async function onSubmit(event) {
    event.preventDefault();
    const createMap = { state: createGeoState, zone: createGeoZone, district: createGeoDistrict, taluk: createGeoTaluk, town: createGeoTown, pincode: createGeoPincode };
    const updateMap = { state: updateGeoState, zone: updateGeoZone, district: updateGeoDistrict, taluk: updateGeoTaluk, town: updateGeoTown, pincode: updateGeoPincode };
    try {
      if (formMode === 'edit') await updateMap[formType](editingItem.id, payload());
      else await createMap[formType](payload());
      addToast(formMode === 'edit' ? 'Geography updated successfully' : 'Geography created successfully');
      setFormOpen(false);
      await refreshAll();
    } catch (err) {
      addToast(errorMessage(err), 'error');
    }
  }

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900 tracking-tight">Geography Management</h1><p className="text-gray-500 text-sm mt-1">Manage serviceable states, zones, districts, taluks, towns, and pincodes.</p></div>
        <div className="flex items-center gap-3"><button onClick={refreshAll} className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50"><RefreshCcw className="w-4 h-4" /> Refresh</button><button onClick={() => openCreate(activeTab === 'tree' ? null : activeTab.slice(0, -1))} className="flex items-center gap-2 bg-[#E31837] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm text-sm"><Plus className="w-4 h-4" /> Add {activeTab === 'tree' ? 'Geography' : activeTab.slice(0, -1)}</button></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">{cards.map(([label, value, Icon]) => <div key={label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4"><div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center text-[#E31837]"><Icon className="w-5 h-5" /></div><div><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><h3 className="text-2xl font-bold text-gray-900 leading-none">{Number(value || 0).toLocaleString()}</h3></div></div>)}</div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">{TABS.map((tab) => <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-sm font-bold border whitespace-nowrap ${activeTab === tab ? 'bg-[#E31837] text-white border-[#E31837]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>{tab === 'tree' ? 'Hierarchy Tree' : tab[0].toUpperCase() + tab.slice(1)}</button>)}</div>
        <div className="relative w-full lg:w-80"><Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search pincode or area..." className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837]" />{searchResults.length > 0 && <div className="absolute right-0 left-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-80 overflow-y-auto">{searchResults.map((item) => <div key={`${item.type}-${item.id}`} className="p-3 border-b border-gray-50 last:border-b-0"><div className="flex items-center justify-between gap-3"><p className="font-bold text-sm text-gray-900">{item.name}</p><span className="text-[10px] font-bold text-[#E31837] bg-red-50 px-2 py-0.5 rounded">{item.type}</span></div><p className="text-xs text-gray-500 mt-1">{item.path}</p></div>)}</div>}</div>
      </div>

      {error && <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 rounded-lg p-4 text-sm font-medium"><AlertCircle className="w-5 h-5" /> {error}</div>}
      {loading ? <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500 font-medium">Loading geography...</div> : activeTab === 'tree' ? <TreeView activePath={activePath} children={children} selectedNode={selectedNode} states={states} onPathClick={onPathClick} onChildClick={onChildClick} onEdit={openEdit} onAdd={openCreate} /> : <TableView activeTab={activeTab} rows={visibleRows} loading={tableLoading} pincodePage={pincodePage} parent={parentForTab(activeTab)} onEdit={openEdit} onPage={(page) => loadTable('pincodes', page)} />}
      {formOpen && <GeoForm formMode={formMode} formType={formType} form={form} setForm={setForm} parentOptions={parentOptions} onSubmit={onSubmit} onClose={() => setFormOpen(false)} />}
    </div>
  );
}

function TreeView({ activePath, children, selectedNode, states, onPathClick, onChildClick, onEdit, onAdd }) {
  const node = selectedNode || { type: 'root', name: 'India' };
  const childRows = selectedNode ? children : states;
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[620px]"><div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[540px]"><div className="md:col-span-3 border-r border-gray-100 md:pr-6"><h3 className="text-sm font-bold text-gray-900 mb-1">Hierarchy Explorer</h3><p className="text-xs text-gray-500 mb-6">Navigate through the geographic hierarchy</p><div className="space-y-3">{activePath.map((item, index) => <NodeCard key={`${item.type}-${item.id}`} item={item} active={index === activePath.length - 1} onClick={() => onPathClick(index)} />)}{activePath.length === 0 && <p className="text-sm text-gray-500 py-10 text-center">No geography added yet.</p>}</div></div><div className="md:col-span-4 border-r border-gray-100 md:px-6"><div className="flex items-center justify-between mb-6"><div><h3 className="text-sm font-bold text-gray-900">Child {node.type === 'town' ? 'Pincodes' : 'Regions'} <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ml-2">{childRows.length}</span></h3><p className="text-xs text-gray-500 mt-1">Under {node.name}</p></div><button onClick={() => onAdd()} className="p-2 border border-gray-200 rounded text-gray-500 hover:bg-gray-50"><Plus className="w-4 h-4" /></button></div><div className="space-y-3 pb-6">{childRows.map((child) => <div key={`${child.type}-${child.id}`} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all" onClick={() => onChildClick(child)}><div className="flex items-center gap-3 min-w-0"><span className="font-semibold text-sm text-gray-800 truncate">{child.name}</span><span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{child.type}</span></div><div className="flex items-center gap-2">{renderStatusBadge(statusText(child))}<button className="text-gray-400 hover:text-gray-600 p-1" onClick={(event) => { event.stopPropagation(); onEdit(child); }}><MoreVertical className="w-4 h-4" /></button></div></div>)}{childRows.length === 0 && <div className="text-center py-12"><p className="text-sm text-gray-500">No child items found.</p></div>}</div></div><div className="md:col-span-5 md:pl-6"><div className="flex items-start justify-between mb-8"><div className="flex items-center gap-3"><div className="p-2.5 rounded-lg bg-red-50">{React.createElement(ICONS[node.type] || Globe, { className: 'w-6 h-6 text-[#E31837]' })}</div><div><h2 className="text-lg font-bold text-gray-900">{node.name}</h2><p className="text-xs text-gray-500 mt-1">Overview & Status</p></div></div>{selectedNode && <button onClick={() => onEdit(selectedNode)} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50"><Edit className="w-3.5 h-3.5" /> Edit</button>}</div><table className="w-full text-sm mb-8 border-b border-gray-100 pb-8"><tbody>{activePath.map((item) => <tr key={`${item.type}-${item.id}`} className="border-b border-gray-50 last:border-0"><td className="py-2.5 text-gray-500 capitalize w-32">{item.type}</td><td className="py-2.5 font-medium text-gray-900">{item.name}</td></tr>)}</tbody></table><div className="grid grid-cols-2 gap-4"><div className="border border-gray-100 rounded-lg p-4 flex items-center gap-4 bg-gray-50/50"><MapPin className="w-5 h-5 text-[#E31837]" /><div><p className="text-xs text-gray-500 font-medium">Total Children</p><p className="text-xl font-bold text-gray-900">{childRows.length}</p></div></div><div className="border border-green-100 rounded-lg p-4 flex items-center gap-4 bg-green-50/30"><CheckCircle2 className="w-5 h-5 text-green-600" /><div><p className="text-xs text-gray-500 font-medium">Active / Serviceable</p><p className="text-xl font-bold text-gray-900">{childRows.filter((item) => item.type === 'pincode' ? item.serviceable : item.active).length}</p></div></div></div></div></div></div>;
}

function NodeCard({ item, active, onClick }) {
  const Icon = ICONS[item.type] || Globe;
  return <div className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${active ? 'border-red-200 bg-red-50 shadow-sm' : 'border-gray-100 bg-white hover:bg-gray-50'}`} onClick={onClick}><div className="flex items-center gap-3"><div className="p-2 rounded-md bg-white border border-gray-100"><Icon className={`w-4 h-4 ${COLORS[item.type]}`} /></div><span className="font-semibold text-sm text-gray-800">{item.name}</span></div><span className="text-[10px] uppercase font-bold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">{item.type}</span></div>;
}

function TableView({ activeTab, rows, loading, pincodePage, parent, onEdit, onPage }) {
  const label = activeTab.slice(0, -1);
  const colSpan = activeTab === 'pincodes' ? 9 : 4;
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[500px]"><div className="flex items-center justify-between mb-6"><div><h3 className="text-lg font-bold text-gray-900 capitalize">{activeTab}</h3>{parent && <p className="text-xs text-gray-500 mt-1">Filtered under {parent.name}</p>}</div><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filter</button></div>{!parent && activeTab !== 'states' ? <div className="text-center py-16 text-sm text-gray-500">Select a parent in the hierarchy tree to view {activeTab}.</div> : loading ? <div className="text-center py-16 text-sm text-gray-500">Loading {activeTab}...</div> : <div className="overflow-x-auto"><table className="w-full text-sm text-left"><thead><tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50"><th className="py-3 px-4 capitalize">{label}</th><th className="py-3 px-4">Code</th>{activeTab === 'pincodes' && <><th className="py-3 px-4 text-center">Pickup</th><th className="py-3 px-4 text-center">Delivery</th><th className="py-3 px-4 text-center">COD</th><th className="py-3 px-4 text-center">Prepaid</th><th className="py-3 px-4 text-center">Reverse</th></>}<th className="py-3 px-4 text-center">Status</th><th className="py-3 px-4 text-center">Actions</th></tr></thead><tbody>{rows.map((row) => <tr key={`${row.type}-${row.id}`} className="border-b border-gray-50 hover:bg-gray-50"><td className="py-4 px-4 font-semibold text-gray-900">{row.name}</td><td className="py-4 px-4 text-gray-600">{row.code || '-'}</td>{activeTab === 'pincodes' && <><td className="py-4 px-4 text-center">{renderBooleanIcon(row.pickupAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.deliveryAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.codAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.prepaidAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.reversePickupAvailable)}</td></>}<td className="py-4 px-4 text-center">{renderStatusBadge(statusText(row))}</td><td className="py-4 px-4 text-center"><button className="text-gray-400 hover:text-[#E31837]" onClick={() => onEdit(row)}><MoreVertical className="w-4 h-4 mx-auto" /></button></td></tr>)}{rows.length === 0 && <tr><td className="py-12 text-center text-gray-500" colSpan={colSpan}>No records found.</td></tr>}</tbody></table>{activeTab === 'pincodes' && <PaginationRow page={pincodePage.page} totalPages={pincodePage.totalPages} total={pincodePage.totalElements} onPage={onPage} />}</div>}</div>;
}

function GeoForm({ formMode, formType, form, setForm, parentOptions, onSubmit, onClose }) {
  const isPincode = formType === 'pincode';
  return <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><form onSubmit={onSubmit} className="w-[700px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"><div className="flex items-center justify-between p-6 bg-[#E31837] text-white"><div className="flex items-center gap-3"><Plus className="w-5 h-5" /><h2 className="text-xl font-bold text-white capitalize">{formMode} {formType}</h2></div><button type="button" onClick={onClose} className="p-1.5 text-white bg-white/20 hover:bg-white/30 rounded-lg"><X className="w-5 h-5" /></button></div><div className="p-6 flex-1 overflow-y-auto space-y-5">{!isPincode && <div className="grid grid-cols-2 gap-5">{formType === 'zone' && <SelectField label="State" value={form.stateId} onChange={(value) => setForm((prev) => ({ ...prev, stateId: value }))} options={parentOptions.states} />}{formType === 'district' && <SelectField label="Zone" value={form.zoneId} onChange={(value) => setForm((prev) => ({ ...prev, zoneId: value }))} options={parentOptions.zones} />}{formType === 'taluk' && <SelectField label="District" value={form.districtId} onChange={(value) => setForm((prev) => ({ ...prev, districtId: value }))} options={parentOptions.districts} />}{formType === 'town' && <SelectField label="Taluk" value={form.talukId} onChange={(value) => setForm((prev) => ({ ...prev, talukId: value }))} options={parentOptions.taluks} />}<TextField label={`${formType} Name`} value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} required />{['state', 'zone', 'district'].includes(formType) && <TextField label="Code" value={form.code} onChange={(value) => setForm((prev) => ({ ...prev, code: value }))} />}<CheckField label="Active" checked={form.active} onChange={(value) => setForm((prev) => ({ ...prev, active: value }))} /></div>}{isPincode && <div className="space-y-6"><div className="grid grid-cols-2 gap-5"><SelectField label="Town" value={form.townId} onChange={(value) => setForm((prev) => ({ ...prev, townId: value }))} options={parentOptions.towns} /><TextField label="Pincode" value={form.pincode} onChange={(value) => setForm((prev) => ({ ...prev, pincode: value }))} required /></div><div><h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Serviceability Flags</h3><div className="grid grid-cols-2 gap-4">{[['serviceable', 'Serviceable'], ['pickupAvailable', 'Pickup Available'], ['deliveryAvailable', 'Delivery Available'], ['codAvailable', 'COD Available'], ['prepaidAvailable', 'Prepaid Available'], ['reversePickupAvailable', 'Reverse Pickup'], ['active', 'Active']].map(([key, label]) => <CheckField key={key} label={label} checked={form[key]} onChange={(value) => setForm((prev) => ({ ...prev, [key]: value }))} />)}</div></div></div>}</div><div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-white"><button type="button" onClick={onClose} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 text-sm">Cancel</button><button className="px-5 py-2.5 bg-[#E31837] text-white font-bold rounded-lg hover:bg-red-700 text-sm">Save</button></div></form></div>;
}

function TextField({ label, value, onChange, required = false }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-gray-700 capitalize">{label}{required && <span className="text-red-500"> *</span>}</label><input value={value || ''} onChange={(event) => onChange(event.target.value)} required={required} className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837]" /></div>;
}

function SelectField({ label, value, onChange, options }) {
  return <div className="space-y-1.5"><label className="text-xs font-bold text-gray-700">{label} <span className="text-red-500">*</span></label><select value={value || ''} onChange={(event) => onChange(event.target.value)} required className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white"><option value="">Select {label}</option>{options.map((item) => <option key={item.id} value={item.id}>{item.name}</option>)}</select></div>;
}

function CheckField({ label, checked, onChange }) {
  return <label className="flex items-center gap-3 bg-gray-50/50 p-3 rounded-lg border border-gray-100"><input type="checkbox" checked={!!checked} onChange={(event) => onChange(event.target.checked)} className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-semibold text-gray-700">{label}</span></label>;
}

function PaginationRow({ page, totalPages, total, onPage }) {
  return <div className="flex items-center justify-between py-4 mt-2"><span className="text-sm text-gray-500 font-medium">{total.toLocaleString()} pincodes</span><div className="flex items-center gap-2"><button disabled={page <= 0} onClick={() => onPage(page - 1)} className="p-2 border border-gray-200 rounded text-gray-600 disabled:text-gray-300 hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button><span className="px-3 py-2 text-sm font-bold text-gray-700">{page + 1} / {Math.max(totalPages, 1)}</span><button disabled={page + 1 >= totalPages} onClick={() => onPage(page + 1)} className="p-2 border border-gray-200 rounded text-gray-600 disabled:text-gray-300 hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button></div></div>;
}

function statusText(row) {
  if (row.type === 'pincode') return row.serviceable ? 'Serviceable' : 'Not Serviceable';
  return row.active ? 'Active' : 'Inactive';
}

function renderStatusBadge(status) {
  const active = status === 'Active' || status === 'Serviceable';
  return <span className={`px-2.5 py-1 text-xs font-bold rounded ${active ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>{status}</span>;
}

function renderBooleanIcon(value) {
  return value ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />;
}
