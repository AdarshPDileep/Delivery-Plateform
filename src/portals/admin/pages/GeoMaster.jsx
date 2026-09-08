
import React, { useEffect, useMemo, useState } from 'react';
import {
  AlertCircle,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Edit,
  Filter,
  Folder,
  Globe,
  Map as MapIcon,
  MapPin,
  Eye,
  Navigation,
  Trash2,
  Plus,
  RefreshCcw,
  Search,
  X,
} from 'lucide-react';
import {
  createGeoDistrict,
  createGeoPincode,
  createGeoState,
  createGeoTaluk,
  createGeoTown,
  createGeoZone,
  deleteGeoDistrict,
  deleteGeoPincode,
  deleteGeoState,
  deleteGeoTaluk,
  deleteGeoTown,
  deleteGeoZone,
  getGeoDistrict,
  getGeoPincodeById,
  getGeoState,
  getGeoTaluk,
  getGeoTown,
  getGeoZone,
  getDistrictsByZone,
  getGeographyStats,
  getPincodesByTown,
  getStates,
  getTaluksByDistrict,
  getTownsByTaluk,
  getZonesByState,
  searchGeography,
  updateGeoDistrict,
  updateGeoPincode,
  updateGeoState,
  updateGeoTaluk,
  updateGeoTown,
  updateGeoZone,
} from '../../../api/api';
import { useToast } from '../../../context/ToastContext';

const TABS = ['tree', 'states', 'zones', 'districts', 'taluks', 'towns', 'pincodes'];
const INITIAL_STATS = {
  states: 0,
  zones: 0,
  districts: 0,
  taluks: 0,
  towns: 0,
  totalPincodes: 0,
  serviceablePincodes: 0,
};
const EMPTY_PAGE = { content: [], page: 0, size: 20, totalElements: 0, totalPages: 0 };
const ICONS = { state: Globe, zone: MapIcon, district: Folder, taluk: Navigation, town: MapPin, pincode: MapPin };
const COLORS = {
  state: 'text-indigo-500',
  zone: 'text-blue-500',
  district: 'text-emerald-500',
  taluk: 'text-amber-500',
  town: 'text-[#E31837]',
  pincode: 'text-gray-500',
};
const NEXT_TYPE = { state: 'zone', zone: 'district', district: 'taluk', taluk: 'town', town: 'pincode' };

function unwrap(response) {
  return response?.data ?? response ?? null;
}

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
  return error?.message || 'Unable to load geography data. Try again.';
}

function isPincode(item) {
  return item?.type === 'pincode';
}

export default function GeoMaster() {
  const { addToast } = useToast();
  const [stats, setStats] = useState(INITIAL_STATS);
  const [states, setStates] = useState([]);
  const [zones, setZones] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [towns, setTowns] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState(null);
  const [selectedTaluk, setSelectedTaluk] = useState(null);
  const [selectedTown, setSelectedTown] = useState(null);
  const [activeTab, setActiveTab] = useState('tree');
  const [loading, setLoading] = useState(false);
  const [sectionLoading, setSectionLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [pincodePage, setPincodePage] = useState(0);
  const [pincodeTotalPages, setPincodeTotalPages] = useState(0);
  const [pincodeTotal, setPincodeTotal] = useState(0);
  const [formOpen, setFormOpen] = useState(false);
  const [formMode, setFormMode] = useState('create');
  const [formType, setFormType] = useState('state');
  const [editingItem, setEditingItem] = useState(null);
  const [viewItem, setViewItem] = useState(null);
  const [deleteItem, setDeleteItem] = useState(null);
  const [deleteBlock, setDeleteBlock] = useState(null);
  const [form, setForm] = useState({});

  const activePath = [selectedState, selectedZone, selectedDistrict, selectedTaluk, selectedTown].filter(Boolean);
  const selectedNode = activePath[activePath.length - 1] || null;
  const tableRows = getTableRows(activeTab);
  const parentOptions = { states, zones, districts, taluks, towns };

  const cards = useMemo(() => [
    ['States', stats.states, Globe],
    ['Zones', stats.zones, MapIcon],
    ['Districts', stats.districts, Folder],
    ['Towns', stats.towns, MapPin],
    ['Serviceable Pincodes', stats.serviceablePincodes, CheckCircle2],
  ], [stats]);

  useEffect(() => {
    loadInitial();
  }, []);

  useEffect(() => {
    const timer = setTimeout(async () => {
      const value = search.trim();
      if (!value) {
        setSearchResults([]);
        return;
      }
      try {
        const response = await searchGeography(value);
        setSearchResults(unwrap(response) || []);
      } catch (err) {
        addToast(errorMessage(err), 'error');
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [search, addToast]);

  function getTableRows(tab) {
    if (tab === 'states') return states;
    if (tab === 'zones') return zones;
    if (tab === 'districts') return districts;
    if (tab === 'taluks') return taluks;
    if (tab === 'towns') return towns;
    if (tab === 'pincodes') return pincodes;
    return [];
  }

  async function loadInitial() {
    setLoading(true);
    setError('');
    try {
      const [statsResponse, statesResponse] = await Promise.all([getGeographyStats(), getStates()]);
      setStats(unwrap(statsResponse) || INITIAL_STATS);
      const stateItems = (unwrap(statesResponse) || []).map((item) => normalizeItem(item, 'state'));
      setStates(stateItems);
      if (stateItems.length) {
        await handleStateSelect(stateItems[0], { silent: true });
      }
    } catch (err) {
      setError(errorMessage(err));
    } finally {
      setLoading(false);
    }
  }

  async function loadStatsOnly() {
    const response = await getGeographyStats();
    setStats(unwrap(response) || INITIAL_STATS);
  }

  async function handleStateSelect(state, options = {}) {
    setSelectedState(state);
    setSelectedZone(null);
    setSelectedDistrict(null);
    setSelectedTaluk(null);
    setSelectedTown(null);
    setZones([]);
    setDistricts([]);
    setTaluks([]);
    setTowns([]);
    setPincodes([]);
    setPincodePage(0);
    setPincodeTotalPages(0);
    setPincodeTotal(0);
    await loadZones(state.id, options);
  }

  async function handleZoneSelect(zone, options = {}) {
    setSelectedZone(zone);
    setSelectedDistrict(null);
    setSelectedTaluk(null);
    setSelectedTown(null);
    setDistricts([]);
    setTaluks([]);
    setTowns([]);
    setPincodes([]);
    setPincodePage(0);
    setPincodeTotalPages(0);
    setPincodeTotal(0);
    await loadDistricts(zone.id, options);
  }

  async function handleDistrictSelect(district, options = {}) {
    setSelectedDistrict(district);
    setSelectedTaluk(null);
    setSelectedTown(null);
    setTaluks([]);
    setTowns([]);
    setPincodes([]);
    setPincodePage(0);
    setPincodeTotalPages(0);
    setPincodeTotal(0);
    await loadTaluks(district.id, options);
  }

  async function handleTalukSelect(taluk, options = {}) {
    setSelectedTaluk(taluk);
    setSelectedTown(null);
    setTowns([]);
    setPincodes([]);
    setPincodePage(0);
    setPincodeTotalPages(0);
    setPincodeTotal(0);
    await loadTowns(taluk.id, options);
  }

  async function handleTownSelect(town, page = 0, options = {}) {
    setSelectedTown(town);
    await loadPincodes(town.id, page, options);
  }

  async function loadZones(stateId, options = {}) {
    if (!options.silent) setSectionLoading(true);
    try {
      const response = await getZonesByState(stateId);
      setZones((unwrap(response) || []).map((item) => normalizeItem(item, 'zone')));
    } catch (err) {
      setZones([]);
      addToast(errorMessage(err), 'error');
    } finally {
      if (!options.silent) setSectionLoading(false);
    }
  }

  async function loadDistricts(zoneId, options = {}) {
    if (!options.silent) setSectionLoading(true);
    try {
      const response = await getDistrictsByZone(zoneId);
      setDistricts((unwrap(response) || []).map((item) => normalizeItem(item, 'district')));
    } catch (err) {
      setDistricts([]);
      addToast(errorMessage(err), 'error');
    } finally {
      if (!options.silent) setSectionLoading(false);
    }
  }

  async function loadTaluks(districtId, options = {}) {
    if (!options.silent) setSectionLoading(true);
    try {
      const response = await getTaluksByDistrict(districtId);
      setTaluks((unwrap(response) || []).map((item) => normalizeItem(item, 'taluk')));
    } catch (err) {
      setTaluks([]);
      addToast(errorMessage(err), 'error');
    } finally {
      if (!options.silent) setSectionLoading(false);
    }
  }

  async function loadTowns(talukId, options = {}) {
    if (!options.silent) setSectionLoading(true);
    try {
      const response = await getTownsByTaluk(talukId);
      setTowns((unwrap(response) || []).map((item) => normalizeItem(item, 'town')));
    } catch (err) {
      setTowns([]);
      addToast(errorMessage(err), 'error');
    } finally {
      if (!options.silent) setSectionLoading(false);
    }
  }

  async function loadPincodes(townId, page = pincodePage, options = {}) {
    if (!options.silent) setSectionLoading(true);
    try {
      const response = await getPincodesByTown(townId, page, 20);
      const data = unwrap(response) || EMPTY_PAGE;
      setPincodes((data.content || []).map((item) => normalizeItem(item, 'pincode')));
      setPincodePage(data.page || 0);
      setPincodeTotalPages(data.totalPages || 0);
      setPincodeTotal(data.totalElements || 0);
    } catch (err) {
      setPincodes([]);
      addToast(errorMessage(err), 'error');
    } finally {
      if (!options.silent) setSectionLoading(false);
    }
  }

  async function refreshAffectedSection(type) {
    await loadStatsOnly();
    if (type === 'state') {
      const response = await getStates();
      setStates((unwrap(response) || []).map((item) => normalizeItem(item, 'state')));
      return;
    }
    if (type === 'zone' && selectedState) return loadZones(selectedState.id);
    if (type === 'district' && selectedZone) return loadDistricts(selectedZone.id);
    if (type === 'taluk' && selectedDistrict) return loadTaluks(selectedDistrict.id);
    if (type === 'town' && selectedTaluk) return loadTowns(selectedTaluk.id);
    if (type === 'pincode' && selectedTown) return loadPincodes(selectedTown.id, pincodePage);
    return loadInitial();
  }

  function currentParentId(type) {
    if (type === 'zone') return selectedState?.id || '';
    if (type === 'district') return selectedZone?.id || '';
    if (type === 'taluk') return selectedDistrict?.id || '';
    if (type === 'town') return selectedTaluk?.id || '';
    if (type === 'pincode') return selectedTown?.id || '';
    return '';
  }

  function parentForTab(tab) {
    if (tab === 'zones') return selectedState;
    if (tab === 'districts') return selectedZone;
    if (tab === 'taluks') return selectedDistrict;
    if (tab === 'towns') return selectedTaluk;
    if (tab === 'pincodes') return selectedTown;
    return null;
  }

  function defaultForm(type, item = null) {
    return {
      name: isPincode(item) ? '' : item?.name || '',
      code: item?.code || '',
      pincode: isPincode(item) ? item.name : '',
      active: item?.active ?? true,
      serviceable: item?.serviceable ?? true,
      pickupAvailable: item?.pickupAvailable ?? true,
      deliveryAvailable: item?.deliveryAvailable ?? true,
      codAvailable: item?.codAvailable ?? true,
      prepaidAvailable: item?.prepaidAvailable ?? true,
      reversePickupAvailable: item?.reversePickupAvailable ?? true,
      stateId: type === 'zone' ? currentParentId(type) : '',
      zoneId: type === 'district' ? currentParentId(type) : '',
      districtId: type === 'taluk' ? currentParentId(type) : '',
      talukId: type === 'town' ? currentParentId(type) : '',
      townId: type === 'pincode' ? currentParentId(type) : '',
    };
  }

  function openCreate(type = null) {
    const nextType = type || (selectedNode ? NEXT_TYPE[selectedNode.type] : 'state') || 'state';
    setFormType(nextType);
    setFormMode('create');
    setEditingItem(null);
    setForm(defaultForm(nextType));
    setFormOpen(true);
  }

  function openEdit(item) {
    setFormType(item.type);
    setFormMode('edit');
    setEditingItem(item);
    setForm(defaultForm(item.type, item));
    setFormOpen(true);
  }

  function payload() {
    if (formType === 'state') return { name: form.name, code: form.code, active: form.active };
    if (formType === 'zone') return { name: form.name, code: form.code, stateId: Number(form.stateId), active: form.active };
    if (formType === 'district') return { name: form.name, code: form.code, zoneId: Number(form.zoneId), active: form.active };
    if (formType === 'taluk') return { name: form.name, districtId: Number(form.districtId), active: form.active };
    if (formType === 'town') return { name: form.name, talukId: Number(form.talukId), active: form.active };
    return {
      pincode: form.pincode,
      townId: Number(form.townId),
      serviceable: form.serviceable,
      pickupAvailable: form.pickupAvailable,
      deliveryAvailable: form.deliveryAvailable,
      codAvailable: form.codAvailable,
      prepaidAvailable: form.prepaidAvailable,
      reversePickupAvailable: form.reversePickupAvailable,
      active: form.active,
    };
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
      await refreshAffectedSection(formType);
    } catch (err) {
      addToast(errorMessage(err), 'error');
    }
  }


  async function openView(item) {
    const getMap = { state: getGeoState, zone: getGeoZone, district: getGeoDistrict, taluk: getGeoTaluk, town: getGeoTown, pincode: getGeoPincodeById };
    try {
      const response = await getMap[item.type](item.id);
      setViewItem(normalizeItem(unwrap(response), item.type));
    } catch (err) {
      addToast(errorMessage(err), 'error');
    }
  }

  function openDelete(item) {
    setDeleteItem(item);
    setDeleteBlock(null);
  }

  async function confirmDelete() {
    if (!deleteItem) return;
    const deleteMap = { state: deleteGeoState, zone: deleteGeoZone, district: deleteGeoDistrict, taluk: deleteGeoTaluk, town: deleteGeoTown, pincode: deleteGeoPincode };
    try {
      setDeleteBlock(null);
      await deleteMap[deleteItem.type](deleteItem.id);
      addToast(`${deleteItem.name} deleted permanently`);
      setDeleteItem(null);
      await refreshAffectedSection(deleteItem.type);
    } catch (err) {
      const data = err?.response?.data;
      if (data?.code === 'GEOGRAPHY_IN_USE') {
        setDeleteBlock(data);
        return;
      }
      addToast(errorMessage(err), 'error');
    }
  }

  async function disableInstead() {
    if (!deleteItem) return;
    const disableMap = { state: updateGeoState, zone: updateGeoZone, district: updateGeoDistrict, taluk: updateGeoTaluk, town: updateGeoTown, pincode: updateGeoPincode };
    const disablePayload = buildDisablePayload(deleteItem);
    try {
      await disableMap[deleteItem.type](deleteItem.id, disablePayload);
      addToast(`${deleteItem.name} disabled`);
      setDeleteItem(null);
      setDeleteBlock(null);
      await refreshAffectedSection(deleteItem.type);
    } catch (err) {
      addToast(errorMessage(err), 'error');
    }
  }

  function selectPathNode(item) {
    if (item.type === 'state') return handleStateSelect(item);
    if (item.type === 'zone') return handleZoneSelect(item);
    if (item.type === 'district') return handleDistrictSelect(item);
    if (item.type === 'taluk') return handleTalukSelect(item);
    if (item.type === 'town') return handleTownSelect(item, 0);
  }

  function treeChildren() {
    if (!selectedState) return states;
    if (!selectedZone) return zones;
    if (!selectedDistrict) return districts;
    if (!selectedTaluk) return taluks;
    if (!selectedTown) return towns;
    return pincodes;
  }

  function selectChild(item) {
    if (item.type === 'state') return handleStateSelect(item);
    if (item.type === 'zone') return handleZoneSelect(item);
    if (item.type === 'district') return handleDistrictSelect(item);
    if (item.type === 'taluk') return handleTalukSelect(item);
    if (item.type === 'town') return handleTownSelect(item, 0);
  }

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Geography Management</h1>
          <p className="text-gray-500 text-sm mt-1">Manage serviceable states, zones, districts, taluks, towns, and pincodes.</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={loadInitial} className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50">
            <RefreshCcw className="w-4 h-4" /> Refresh
          </button>
          <button onClick={() => openCreate(activeTab === 'tree' ? null : activeTab.slice(0, -1))} className="flex items-center gap-2 bg-[#E31837] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-red-700 transition-colors shadow-sm text-sm">
            <Plus className="w-4 h-4" /> Add {activeTab === 'tree' ? 'Geography' : activeTab.slice(0, -1)}
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-5">
        {cards.map(([label, value, Icon]) => (
          <div key={label} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-red-50 flex items-center justify-center text-[#E31837]"><Icon className="w-5 h-5" /></div>
            <div><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><h3 className="text-2xl font-bold text-gray-900 leading-none">{Number(value || 0).toLocaleString()}</h3></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:items-center justify-between">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {TABS.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-4 py-2 rounded-lg text-sm font-bold border whitespace-nowrap ${activeTab === tab ? 'bg-[#E31837] text-white border-[#E31837]' : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'}`}>
              {tab === 'tree' ? 'Hierarchy Tree' : tab[0].toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
        <div className="relative w-full lg:w-80">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search pincode or area..." className="w-full pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
          {searchResults.length > 0 && <SearchResults results={searchResults} />}
        </div>
      </div>

      {error && <ErrorPanel message={error} />}
      {loading ? <LoadingPanel message="Loading geography..." /> : activeTab === 'tree' ? (
        <TreeView activePath={activePath} children={treeChildren()} selectedNode={selectedNode} loading={sectionLoading} onPathClick={selectPathNode} onChildClick={selectChild} onView={openView} onEdit={openEdit} onDelete={openDelete} onAdd={openCreate} />
      ) : (
        <TableView activeTab={activeTab} rows={tableRows} loading={sectionLoading} parent={parentForTab(activeTab)} pincodePage={pincodePage} pincodeTotalPages={pincodeTotalPages} pincodeTotal={pincodeTotal} onView={openView} onEdit={openEdit} onDelete={openDelete} onPage={(page) => selectedTown && loadPincodes(selectedTown.id, page)} />
      )}
      {formOpen && <GeoForm formMode={formMode} formType={formType} form={form} setForm={setForm} parentOptions={parentOptions} onSubmit={onSubmit} onClose={() => setFormOpen(false)} />}
      {viewItem && <ViewModal item={viewItem} onClose={() => setViewItem(null)} />}
      {deleteItem && <DeleteModal item={deleteItem} block={deleteBlock} onConfirm={confirmDelete} onDisable={disableInstead} onClose={() => { setDeleteItem(null); setDeleteBlock(null); }} />}
    </div>
  );
}

function SearchResults({ results }) {
  return <div className="absolute right-0 left-0 top-12 bg-white border border-gray-200 rounded-lg shadow-xl z-30 max-h-80 overflow-y-auto">
    {results.map((item) => <div key={`${item.type}-${item.id}`} className="p-3 border-b border-gray-50 last:border-b-0"><div className="flex items-center justify-between gap-3"><p className="font-bold text-sm text-gray-900">{item.name}</p><span className="text-[10px] font-bold text-[#E31837] bg-red-50 px-2 py-0.5 rounded">{item.type}</span></div><p className="text-xs text-gray-500 mt-1">{item.path}</p></div>)}
  </div>;
}

function ErrorPanel({ message }) {
  return <div className="flex items-center gap-3 bg-red-50 border border-red-100 text-red-700 rounded-lg p-4 text-sm font-medium"><AlertCircle className="w-5 h-5" /> {message}</div>;
}

function LoadingPanel({ message }) {
  return <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500 font-medium">{message}</div>;
}

function TreeView({ activePath, children, selectedNode, loading, onPathClick, onChildClick, onView, onEdit, onDelete, onAdd }) {
  const node = selectedNode || { type: 'root', name: 'India' };
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[620px]"><div className="grid grid-cols-1 md:grid-cols-12 gap-6 min-h-[540px]"><div className="md:col-span-3 border-r border-gray-100 md:pr-6"><h3 className="text-sm font-bold text-gray-900 mb-1">Hierarchy Explorer</h3><p className="text-xs text-gray-500 mb-6">Navigate through the geographic hierarchy</p><div className="space-y-3">{activePath.map((item) => <NodeCard key={`${item.type}-${item.id}`} item={item} active={item.id === selectedNode?.id && item.type === selectedNode?.type} onClick={() => onPathClick(item)} />)}{activePath.length === 0 && <p className="text-sm text-gray-500 py-10 text-center">No geography added yet.</p>}</div></div><div className="md:col-span-4 border-r border-gray-100 md:px-6"><div className="flex items-center justify-between mb-6"><div><h3 className="text-sm font-bold text-gray-900">Child {node.type === 'town' ? 'Pincodes' : 'Regions'} <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ml-2">{children.length}</span></h3><p className="text-xs text-gray-500 mt-1">Under {node.name}</p></div><button onClick={() => onAdd()} className="p-2 border border-gray-200 rounded text-gray-500 hover:bg-gray-50"><Plus className="w-4 h-4" /></button></div>{loading ? <p className="text-center py-12 text-sm text-gray-500">Loading geography data...</p> : <div className="space-y-3 pb-6">{children.map((child) => <div key={`${child.type}-${child.id}`} className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all" onClick={() => onChildClick(child)}><div className="flex items-center gap-3 min-w-0"><span className="font-semibold text-sm text-gray-800 truncate">{child.name}</span><span className="text-[10px] uppercase font-bold text-gray-400 bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{child.type}</span></div><div className="flex items-center gap-2">{renderStatusBadge(statusText(child))}<button className="text-gray-400 hover:text-gray-600 p-1" onClick={(event) => { event.stopPropagation(); onView(child); }} title="View"><Eye className="w-4 h-4" /></button><button className="text-gray-400 hover:text-[#E31837] p-1" onClick={(event) => { event.stopPropagation(); onEdit(child); }} title="Edit"><Edit className="w-4 h-4" /></button><button className="text-gray-400 hover:text-red-600 p-1" onClick={(event) => { event.stopPropagation(); onDelete(child); }} title="Delete"><Trash2 className="w-4 h-4" /></button></div></div>)}{children.length === 0 && <div className="text-center py-12"><p className="text-sm text-gray-500">No records found under this selection.</p></div>}</div>}</div><NodeDetails node={node} children={children} onEdit={onEdit} /></div></div>;
}

function NodeDetails({ node, children, onEdit }) {
  const Icon = ICONS[node.type] || Globe;
  return <div className="md:col-span-5 md:pl-6"><div className="flex items-start justify-between mb-8"><div className="flex items-center gap-3"><div className="p-2.5 rounded-lg bg-red-50"><Icon className="w-6 h-6 text-[#E31837]" /></div><div><h2 className="text-lg font-bold text-gray-900">{node.name}</h2><p className="text-xs text-gray-500 mt-1">Overview & Status</p></div></div>{node.id && <button onClick={() => onEdit(node)} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50"><Edit className="w-3.5 h-3.5" /> Edit</button>}</div><div className="grid grid-cols-2 gap-4"><div className="border border-gray-100 rounded-lg p-4 flex items-center gap-4 bg-gray-50/50"><MapPin className="w-5 h-5 text-[#E31837]" /><div><p className="text-xs text-gray-500 font-medium">Total Children</p><p className="text-xl font-bold text-gray-900">{children.length}</p></div></div><div className="border border-green-100 rounded-lg p-4 flex items-center gap-4 bg-green-50/30"><CheckCircle2 className="w-5 h-5 text-green-600" /><div><p className="text-xs text-gray-500 font-medium">Active / Serviceable</p><p className="text-xl font-bold text-gray-900">{children.filter((item) => item.type === 'pincode' ? item.serviceable : item.active).length}</p></div></div></div></div>;
}

function NodeCard({ item, active, onClick }) {
  const Icon = ICONS[item.type] || Globe;
  return <div className={`flex items-center justify-between p-3 rounded-lg border cursor-pointer ${active ? 'border-red-200 bg-red-50 shadow-sm' : 'border-gray-100 bg-white hover:bg-gray-50'}`} onClick={onClick}><div className="flex items-center gap-3"><div className="p-2 rounded-md bg-white border border-gray-100"><Icon className={`w-4 h-4 ${COLORS[item.type]}`} /></div><span className="font-semibold text-sm text-gray-800">{item.name}</span></div><span className="text-[10px] uppercase font-bold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">{item.type}</span></div>;
}

function TableView({ activeTab, rows, loading, parent, pincodePage, pincodeTotalPages, pincodeTotal, onView, onEdit, onDelete, onPage }) {
  const label = activeTab.slice(0, -1);
  const colSpan = activeTab === 'pincodes' ? 9 : 4;
  if (!parent && activeTab !== 'states') return <div className="bg-white rounded-xl border border-gray-200 p-12 text-center text-gray-500 text-sm">Select a parent in the hierarchy tree to view {activeTab}.</div>;
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 min-h-[500px]"><div className="flex items-center justify-between mb-6"><div><h3 className="text-lg font-bold text-gray-900 capitalize">{activeTab}</h3>{parent && <p className="text-xs text-gray-500 mt-1">Filtered under {parent.name}</p>}</div><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filter</button></div>{loading ? <div className="text-center py-16 text-sm text-gray-500">{activeTab === 'pincodes' ? 'Loading pincodes...' : 'Loading geography data...'}</div> : <div className="overflow-x-auto"><table className="w-full text-sm text-left"><thead><tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50"><th className="py-3 px-4 capitalize">{label}</th><th className="py-3 px-4">Code</th>{activeTab === 'pincodes' && <><th className="py-3 px-4 text-center">Pickup</th><th className="py-3 px-4 text-center">Delivery</th><th className="py-3 px-4 text-center">COD</th><th className="py-3 px-4 text-center">Prepaid</th><th className="py-3 px-4 text-center">Reverse</th></>}<th className="py-3 px-4 text-center">Status</th><th className="py-3 px-4 text-center">Actions</th></tr></thead><tbody>{rows.map((row) => <tr key={`${row.type}-${row.id}`} className="border-b border-gray-50 hover:bg-gray-50"><td className="py-4 px-4 font-semibold text-gray-900">{row.name}</td><td className="py-4 px-4 text-gray-600">{row.code || '-'}</td>{activeTab === 'pincodes' && <><td className="py-4 px-4 text-center">{renderBooleanIcon(row.pickupAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.deliveryAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.codAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.prepaidAvailable)}</td><td className="py-4 px-4 text-center">{renderBooleanIcon(row.reversePickupAvailable)}</td></>}<td className="py-4 px-4 text-center">{renderStatusBadge(statusText(row))}</td><td className="py-4 px-4 text-center"><div className="flex items-center justify-center gap-2"><button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-gray-700 hover:bg-gray-50" onClick={() => onView(row)} title="View"><Eye className="w-4 h-4" /></button><button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-[#E31837] hover:bg-red-50" onClick={() => onEdit(row)} title="Edit"><Edit className="w-4 h-4" /></button><button className="p-1.5 border border-gray-200 rounded-md text-gray-400 hover:text-red-600 hover:bg-red-50" onClick={() => onDelete(row)} title="Delete"><Trash2 className="w-4 h-4" /></button></div></td></tr>)}{rows.length === 0 && <tr><td className="py-12 text-center text-gray-500" colSpan={colSpan}>{activeTab === 'pincodes' ? 'No pincodes found under this town.' : 'No records found under this selection.'}</td></tr>}</tbody></table>{activeTab === 'pincodes' && <PaginationRow page={pincodePage} totalPages={pincodeTotalPages} total={pincodeTotal} onPage={onPage} />}</div>}</div>;
}

function GeoForm({ formMode, formType, form, setForm, parentOptions, onSubmit, onClose }) {
  const isPincodeForm = formType === 'pincode';
  return <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><form onSubmit={onSubmit} className="w-[700px] bg-white rounded-xl shadow-2xl flex flex-col max-h-[90vh] overflow-hidden"><div className="flex items-center justify-between p-6 bg-[#E31837] text-white"><div className="flex items-center gap-3"><Plus className="w-5 h-5" /><h2 className="text-xl font-bold text-white capitalize">{formMode} {formType}</h2></div><button type="button" onClick={onClose} className="p-1.5 text-white bg-white/20 hover:bg-white/30 rounded-lg"><X className="w-5 h-5" /></button></div><div className="p-6 flex-1 overflow-y-auto space-y-5">{!isPincodeForm && <GeoFields formType={formType} form={form} setForm={setForm} parentOptions={parentOptions} />}{isPincodeForm && <PincodeFields form={form} setForm={setForm} towns={parentOptions.towns} />}</div><div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3 bg-white"><button type="button" onClick={onClose} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 text-sm">Cancel</button><button className="px-5 py-2.5 bg-[#E31837] text-white font-bold rounded-lg hover:bg-red-700 text-sm">Save</button></div></form></div>;
}

function ViewModal({ item, onClose }) {
  const details = [
    ['Type', item.type],
    [item.type === 'pincode' ? 'Pincode' : 'Name', item.name],
    ['Code', item.code || '-'],
    ['Status', statusText(item)],
  ];
  const flags = [
    ['Serviceable', item.serviceable],
    ['Pickup Available', item.pickupAvailable],
    ['Delivery Available', item.deliveryAvailable],
    ['COD Available', item.codAvailable],
    ['Prepaid Available', item.prepaidAvailable],
    ['Reverse Pickup Available', item.reversePickupAvailable],
    ['Active', item.active],
  ];

  return <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div className="w-[560px] bg-white rounded-xl shadow-2xl overflow-hidden"><div className="flex items-center justify-between p-5 border-b border-gray-100"><div className="flex items-center gap-3"><div className="p-2 bg-red-50 rounded-lg text-[#E31837]"><Eye className="w-5 h-5" /></div><h2 className="text-lg font-bold text-gray-900 capitalize">View {item.type}</h2></div><button type="button" onClick={onClose} className="p-1.5 text-gray-500 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button></div><div className="p-5 space-y-5"><div className="grid grid-cols-2 gap-4">{details.map(([label, value]) => <div key={label} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50"><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><p className="text-sm font-semibold text-gray-900 capitalize">{value}</p></div>)}</div>{item.type === 'pincode' && <div><h3 className="text-xs font-bold text-gray-500 uppercase mb-3">Serviceability Flags</h3><div className="grid grid-cols-2 gap-3">{flags.map(([label, value]) => <div key={label} className="flex items-center justify-between border border-gray-100 rounded-lg p-3"><span className="text-sm font-semibold text-gray-700">{label}</span>{renderBooleanIcon(value)}</div>)}</div></div>}</div><div className="p-5 border-t border-gray-100 flex justify-end"><button type="button" onClick={onClose} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 text-sm">Close</button></div></div></div>;
}

function DeleteModal({ item, block, onConfirm, onDisable, onClose }) {
  const blocked = block?.code === 'GEOGRAPHY_IN_USE';
  const linked = dependencyEntries(block?.dependencies);
  const typeLabel = item.type === 'pincode' ? 'Pincode' : item.type[0].toUpperCase() + item.type.slice(1);

  return <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"><div className="w-[500px] bg-white rounded-xl shadow-2xl overflow-hidden"><div className="p-5 border-b border-gray-100"><div className="flex items-start gap-3"><div className={`p-2 rounded-lg ${blocked ? 'bg-amber-50 text-amber-600' : 'bg-red-50 text-red-600'}`}>{blocked ? <AlertCircle className="w-5 h-5" /> : <Trash2 className="w-5 h-5" />}</div><div><h2 className="text-lg font-bold text-gray-900">{blocked ? `Cannot Delete ${typeLabel}` : `Delete ${typeLabel}`}</h2><p className="text-sm text-gray-500 mt-1">{blocked ? `${item.name} is currently in use.` : 'Permanent delete is allowed only when no records are linked.'}</p></div></div></div><div className="p-5 space-y-4">{blocked ? <><div><p className="text-sm font-bold text-gray-900 mb-2">Mapped:</p><ul className="space-y-1.5">{linked.map(([key, value]) => <li key={key} className="flex items-center justify-between text-sm text-gray-700 bg-gray-50 border border-gray-100 rounded-lg px-3 py-2"><span>{formatDependencyLabel(key)}</span><span className="font-bold text-gray-900">{Number(value).toLocaleString()}</span></li>)}</ul></div><p className="text-sm text-gray-600">Remove these mappings first or disable this {item.type}.</p></> : <p className="text-sm text-gray-700">Delete <span className="font-bold text-gray-900">{item.name}</span>? This will permanently remove the geography record.</p>}</div><div className="p-5 border-t border-gray-100 flex items-center justify-end gap-3"><button type="button" onClick={onClose} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 text-sm">{blocked ? 'Close' : 'Cancel'}</button>{blocked ? <button type="button" onClick={onDisable} className="px-5 py-2.5 bg-[#E31837] text-white font-bold rounded-lg hover:bg-red-700 text-sm">Disable {typeLabel}</button> : <button type="button" onClick={onConfirm} className="px-5 py-2.5 bg-red-600 text-white font-bold rounded-lg hover:bg-red-700 text-sm">Delete</button>}</div></div></div>;
}


function buildDisablePayload(item) {
  if (item.type === 'pincode') return { active: false };
  if (['state', 'zone', 'district'].includes(item.type)) return { name: item.name, code: item.code || null, active: false };
  return { name: item.name, active: false };
}
function dependencyEntries(dependencies = {}) {
  return Object.entries(dependencies).filter(([, value]) => Number(value) > 0);
}

function formatDependencyLabel(key) {
  return key.replace(/([A-Z])/g, ' $1').replace(/^./, (char) => char.toUpperCase());
}function GeoFields({ formType, form, setForm, parentOptions }) {
  return <div className="grid grid-cols-2 gap-5">{formType === 'zone' && <SelectField label="State" value={form.stateId} onChange={(value) => setForm((prev) => ({ ...prev, stateId: value }))} options={parentOptions.states} />}{formType === 'district' && <SelectField label="Zone" value={form.zoneId} onChange={(value) => setForm((prev) => ({ ...prev, zoneId: value }))} options={parentOptions.zones} />}{formType === 'taluk' && <SelectField label="District" value={form.districtId} onChange={(value) => setForm((prev) => ({ ...prev, districtId: value }))} options={parentOptions.districts} />}{formType === 'town' && <SelectField label="Taluk" value={form.talukId} onChange={(value) => setForm((prev) => ({ ...prev, talukId: value }))} options={parentOptions.taluks} />}<TextField label={`${formType} Name`} value={form.name} onChange={(value) => setForm((prev) => ({ ...prev, name: value }))} required />{['state', 'zone', 'district'].includes(formType) && <TextField label="Code" value={form.code} onChange={(value) => setForm((prev) => ({ ...prev, code: value }))} />}<CheckField label="Active" checked={form.active} onChange={(value) => setForm((prev) => ({ ...prev, active: value }))} /></div>;
}

function PincodeFields({ form, setForm, towns }) {
  const flags = [
    ['serviceable', 'Serviceable'],
    ['pickupAvailable', 'Pickup Available'],
    ['deliveryAvailable', 'Delivery Available'],
    ['codAvailable', 'COD Available'],
    ['prepaidAvailable', 'Prepaid Available'],
    ['reversePickupAvailable', 'Reverse Pickup Available'],
    ['active', 'Active'],
  ];
  return <div className="space-y-6"><div className="grid grid-cols-2 gap-5"><SelectField label="Town" value={form.townId} onChange={(value) => setForm((prev) => ({ ...prev, townId: value }))} options={towns} /><TextField label="Pincode" value={form.pincode} onChange={(value) => setForm((prev) => ({ ...prev, pincode: value }))} required /></div><div><h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">Serviceability Flags</h3><div className="grid grid-cols-2 gap-4">{flags.map(([key, label]) => <CheckField key={key} label={label} checked={form[key]} onChange={(value) => setForm((prev) => ({ ...prev, [key]: value }))} />)}</div></div></div>;
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








