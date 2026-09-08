import React, { useEffect, useMemo, useState } from 'react';
import { AlertCircle, Building2, ChevronLeft, ChevronRight, Edit, Eye, FileSpreadsheet, FileText, Filter, MapPin, Package, Plus, RefreshCcw, Search, Store, Trash2, Truck, User, Waypoints, X } from 'lucide-react';
import Modal, { Drawer } from '../../../components/ui/Modal';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import GeoHierarchyPicker from '../../../components/forms/GeoHierarchyPicker';
import { useToast } from '../../../context/ToastContext';
import { addNodePincodes, createNetworkNode, createNetworkRoute, deleteNetworkNode, deleteNetworkRoute, getNetworkNode, getNetworkNodes, getNetworkRoute, getNetworkRoutes, getNetworkStats, getNodePincodes, removeNodePincode, searchGeography, updateNetworkNode, updateNetworkNodeStatus, updateNetworkRoute, updateNetworkRouteStatus } from '../../../api/api';

const NODE_TYPE_LABELS = { HUB: 'Hub', BRANCH: 'Branch', SORTING_CENTER: 'Sorting Center', DELIVERY_CENTER: 'Delivery Center' };
const EMPTY_NODE_FORM = { name: '', type: 'HUB', dailyCapacity: '', managerUserId: '', address: '', contactName: '', contactPhone: '', stateId: '', zoneId: '', districtId: '', talukId: '', townId: '', pincodeId: '' };
const EMPTY_ROUTE_FORM = { originNodeId: '', destinationNodeId: '', distanceKm: '', transitHours: '', dailyCapacity: '' };

const unwrap = (response) => response?.data ?? response ?? null;
const formatNumber = (value) => Number(value || 0).toLocaleString();
const errorMessage = (error, fallback) => error?.response?.data?.message || error?.message || fallback;
const nodeLocation = (node) => [node.address, node.town?.name, node.taluk?.name, node.district?.name, node.zone?.name, node.state?.name].filter(Boolean).join(', ') || '-';

function getNodeIcon(type) {
  if (type === 'BRANCH') return Store;
  if (type === 'SORTING_CENTER') return Waypoints;
  if (type === 'DELIVERY_CENTER') return Truck;
  return Building2;
}

export default function HubMaster() {
  const { addToast } = useToast();
  const [activeTab, setActiveTab] = useState('hubs');
  const [activeDrawer, setActiveDrawer] = useState(null);
  const [stats, setStats] = useState({ totalHubs: 0, totalBranches: 0, activeRoutes: 0, totalCapacity: 0 });
  const [nodes, setNodes] = useState([]);
  const [routes, setRoutes] = useState([]);
  const [allNodes, setAllNodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [routeLoading, setRouteLoading] = useState(false);
  const [page, setPage] = useState(0);
  const [routePage, setRoutePage] = useState(0);
  const [size, setSize] = useState(10);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);
  const [routeTotalPages, setRouteTotalPages] = useState(0);
  const [routeTotalElements, setRouteTotalElements] = useState(0);
  const [search, setSearch] = useState('');
  const [routeSearch, setRouteSearch] = useState('');
  const [typeFilter, setTypeFilter] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [routeStatusFilter, setRouteStatusFilter] = useState('');
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedRoute, setSelectedRoute] = useState(null);
  const [nodeForm, setNodeForm] = useState(EMPTY_NODE_FORM);
  const [routeForm, setRouteForm] = useState(EMPTY_ROUTE_FORM);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleteBlock, setDeleteBlock] = useState(null);
  const [serviceNode, setServiceNode] = useState(null);
  const [servicePincodes, setServicePincodes] = useState([]);
  const [pincodeQuery, setPincodeQuery] = useState('');
  const [pincodeResults, setPincodeResults] = useState([]);
  const [selectedPincodeIds, setSelectedPincodeIds] = useState([]);
  const [serviceType, setServiceType] = useState('BOTH');

  const nodeOptions = useMemo(() => allNodes.map((node) => ({ value: node.id, label: `${node.code} - ${node.name}` })), [allNodes]);
  const tatRows = routes.filter((route) => route.transitHours !== null && route.transitHours !== undefined);

  useEffect(() => { loadStats(); loadAllNodes(); }, []);
  useEffect(() => { const timer = setTimeout(loadNodes, 350); return () => clearTimeout(timer); }, [page, size, search, typeFilter, statusFilter]);
  useEffect(() => { const timer = setTimeout(loadRoutes, 350); return () => clearTimeout(timer); }, [routePage, size, routeSearch, routeStatusFilter]);
  useEffect(() => {
    const timer = setTimeout(async () => {
      const query = pincodeQuery.trim();
      if (!query) return setPincodeResults([]);
      try {
        const response = await searchGeography(query);
        setPincodeResults((unwrap(response) || []).filter((item) => item.type === 'PINCODE'));
      } catch (error) {
        addToast(errorMessage(error, 'Unable to search pincodes'), 'error');
      }
    }, 350);
    return () => clearTimeout(timer);
  }, [pincodeQuery, addToast]);

  async function refreshNetwork() { await Promise.all([loadStats(), loadNodes(), loadRoutes(), loadAllNodes()]); }
  async function loadStats() { try { setStats(unwrap(await getNetworkStats()) || {}); } catch (error) { addToast(errorMessage(error, 'Failed to load network stats'), 'error'); } }
  async function loadAllNodes() { try { setAllNodes((unwrap(await getNetworkNodes({ page: 0, size: 100 })) || {}).content || []); } catch { setAllNodes([]); } }
  async function loadNodes() {
    setLoading(true);
    try {
      const result = unwrap(await getNetworkNodes({ page, size, search, type: typeFilter, status: statusFilter })) || {};
      setNodes(result.content || []); setTotalPages(result.totalPages || 0); setTotalElements(result.totalElements || 0);
    } catch (error) { addToast(errorMessage(error, 'Failed to load hubs and branches'), 'error'); }
    finally { setLoading(false); }
  }
  async function loadRoutes() {
    setRouteLoading(true);
    try {
      const result = unwrap(await getNetworkRoutes({ page: routePage, size, search: routeSearch, status: routeStatusFilter })) || {};
      setRoutes(result.content || []); setRouteTotalPages(result.totalPages || 0); setRouteTotalElements(result.totalElements || 0);
    } catch (error) { addToast(errorMessage(error, 'Failed to load network routes'), 'error'); }
    finally { setRouteLoading(false); }
  }
  function openCreateNode() { setSelectedNode(null); setNodeForm(EMPTY_NODE_FORM); setActiveDrawer('node-new'); }
  async function openViewNode(id) {
    try { setSelectedNode(unwrap(await getNetworkNode(id))); setActiveDrawer('node-view'); }
    catch (error) { addToast(errorMessage(error, 'Unable to load hub/branch'), 'error'); }
  }
  async function openEditNode(id) {
    try {
      const node = unwrap(await getNetworkNode(id));
      setSelectedNode(node);
      setNodeForm({ name: node.name || '', type: node.type || 'HUB', dailyCapacity: node.dailyCapacity || '', managerUserId: node.managerUserId || '', address: node.address || '', contactName: node.contactName || '', contactPhone: node.contactPhone || '', stateId: node.state?.id || '', zoneId: node.zone?.id || '', districtId: node.district?.id || '', talukId: node.taluk?.id || '', townId: node.town?.id || '', pincodeId: node.pincode?.id || '' });
      setActiveDrawer('node-edit');
    } catch (error) { addToast(errorMessage(error, 'Unable to load hub/branch'), 'error'); }
  }
  async function saveNode() {
    try {
      const payload = { name: nodeForm.name, type: nodeForm.type, dailyCapacity: Number(nodeForm.dailyCapacity), managerUserId: nodeForm.managerUserId ? Number(nodeForm.managerUserId) : null, address: nodeForm.address, contactName: nodeForm.contactName, contactPhone: nodeForm.contactPhone, stateId: Number(nodeForm.stateId), zoneId: Number(nodeForm.zoneId), districtId: Number(nodeForm.districtId), talukId: nodeForm.talukId ? Number(nodeForm.talukId) : null, townId: nodeForm.townId ? Number(nodeForm.townId) : null, pincodeId: nodeForm.pincodeId ? Number(nodeForm.pincodeId) : null };
      if (activeDrawer === 'node-edit') { await updateNetworkNode(selectedNode.id, payload); addToast('Hub/Branch updated successfully'); }
      else { await createNetworkNode(payload); addToast('Hub/Branch created successfully'); }
      setActiveDrawer(null); await refreshNetwork();
    } catch (error) { addToast(errorMessage(error, 'Unable to save network node'), 'error'); }
  }
  async function openServiceArea(node) {
    setServiceNode(node); setPincodeQuery(''); setPincodeResults([]); setSelectedPincodeIds([]); setServiceType('BOTH');
    try { setServicePincodes(unwrap(await getNodePincodes(node.id)) || []); }
    catch (error) { addToast(errorMessage(error, 'Unable to load service area'), 'error'); }
  }
  async function addServicePincodes() {
    if (!serviceNode || selectedPincodeIds.length === 0) return;
    try {
      setServicePincodes(unwrap(await addNodePincodes(serviceNode.id, { pincodeIds: selectedPincodeIds.map(Number), serviceType })) || []);
      setSelectedPincodeIds([]); setPincodeQuery(''); setPincodeResults([]); addToast('Service area updated');
    } catch (error) { addToast(errorMessage(error, 'Unable to update service area'), 'error'); }
  }
  async function removeServicePincode(pincodeId) {
    try { await removeNodePincode(serviceNode.id, pincodeId); setServicePincodes((prev) => prev.filter((item) => item.pincodeId !== pincodeId)); addToast('Pincode removed from service area'); }
    catch (error) { addToast(errorMessage(error, 'Unable to remove pincode'), 'error'); }
  }
  function openCreateRoute() { setSelectedRoute(null); setRouteForm(EMPTY_ROUTE_FORM); setActiveDrawer('route-new'); }
  async function openViewRoute(id) {
    try { setSelectedRoute(unwrap(await getNetworkRoute(id))); setActiveDrawer('route-view'); }
    catch (error) { addToast(errorMessage(error, 'Unable to load route'), 'error'); }
  }
  async function openEditRoute(id) {
    try {
      const route = unwrap(await getNetworkRoute(id));
      setSelectedRoute(route);
      setRouteForm({ originNodeId: route.origin?.id || '', destinationNodeId: route.destination?.id || '', distanceKm: route.distanceKm || '', transitHours: route.transitHours || '', dailyCapacity: route.dailyCapacity || '' });
      setActiveDrawer('route-edit');
    } catch (error) { addToast(errorMessage(error, 'Unable to load route'), 'error'); }
  }
  async function saveRoute() {
    try {
      const payload = { originNodeId: Number(routeForm.originNodeId), destinationNodeId: Number(routeForm.destinationNodeId), distanceKm: routeForm.distanceKm ? Number(routeForm.distanceKm) : null, transitHours: routeForm.transitHours ? Number(routeForm.transitHours) : null, dailyCapacity: Number(routeForm.dailyCapacity) };
      if (activeDrawer === 'route-edit') { await updateNetworkRoute(selectedRoute.id, payload); addToast('Route updated successfully'); }
      else { await createNetworkRoute(payload); addToast('Route created successfully'); }
      setActiveDrawer(null); await refreshNetwork();
    } catch (error) { addToast(errorMessage(error, 'Unable to save route'), 'error'); }
  }
  function openDelete(target, kind) { setDeleteTarget({ ...target, kind }); setDeleteBlock(null); }
  async function confirmDelete() {
    if (!deleteTarget) return;
    try {
      if (deleteTarget.kind === 'node') await deleteNetworkNode(deleteTarget.id); else await deleteNetworkRoute(deleteTarget.id);
      addToast(deleteTarget.kind === 'node' ? 'Hub/Branch deleted successfully' : 'Route deleted successfully');
      setDeleteTarget(null); await refreshNetwork();
    } catch (error) {
      const data = error?.response?.data;
      if (data?.code === 'NETWORK_NODE_IN_USE') { setDeleteBlock(data); return; }
      addToast(errorMessage(error, 'Unable to delete record'), 'error');
    }
  }
  async function disableInstead() {
    if (!deleteTarget) return;
    try {
      if (deleteTarget.kind === 'node') await updateNetworkNodeStatus(deleteTarget.id, false); else await updateNetworkRouteStatus(deleteTarget.id, false);
      addToast('Record disabled successfully'); setDeleteTarget(null); setDeleteBlock(null); await refreshNetwork();
    } catch (error) { addToast(errorMessage(error, 'Unable to disable record'), 'error'); }
  }

  return (
    <div className="p-8 w-full mx-auto space-y-8 animate-fade-in bg-gray-50 min-h-screen">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        <div><h1 className="text-2xl font-bold text-gray-900 tracking-tight">Hub, Branch & Route Management</h1><p className="text-gray-500 text-sm mt-1">Configure your physical network infrastructure and transit rules.</p></div>
        <div className="flex items-center gap-3"><button onClick={refreshNetwork} className="flex items-center gap-2 px-4 py-2 border border-gray-200 bg-white rounded-lg text-sm font-bold text-gray-700 hover:bg-gray-50"><RefreshCcw className="w-4 h-4" /> Refresh</button><button onClick={activeTab === 'routes' ? openCreateRoute : openCreateNode} className="flex items-center gap-2 bg-[#111111] text-white px-5 py-2.5 rounded-lg font-medium hover:bg-black transition-colors shadow-md text-sm"><Plus className="w-4 h-4" /> {activeTab === 'routes' ? 'Add Route' : 'Add Hub/Branch'}</button></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6"><StatCard icon={Building2} label="Total Hubs" value={stats.totalHubs} /><StatCard icon={Store} label="Total Branches" value={stats.totalBranches} /><StatCard icon={Waypoints} label="Active Routes" value={stats.activeRoutes} /><StatCard icon={Package} label="Total Capacity (pkgs/day)" value={stats.totalCapacity} /></div>
      <div className="flex gap-8 border-b border-gray-200">{[{ id: 'hubs', label: 'Hubs & Branches' }, { id: 'routes', label: 'Network Routes' }, { id: 'tat', label: 'TAT Matrix' }].map((tab) => <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`pb-4 text-sm font-bold transition-colors relative ${activeTab === tab.id ? 'text-[#E31837]' : 'text-gray-500 hover:text-gray-700'}`}>{tab.label}{activeTab === tab.id && <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E31837]" />}</button>)}</div>
      {activeTab === 'hubs' && <NodesTable nodes={nodes} loading={loading} page={page} size={size} totalPages={totalPages} totalElements={totalElements} search={search} typeFilter={typeFilter} statusFilter={statusFilter} setSearch={(value) => { setSearch(value); setPage(0); }} setTypeFilter={(value) => { setTypeFilter(value); setPage(0); }} setStatusFilter={(value) => { setStatusFilter(value); setPage(0); }} setSize={(value) => { setSize(value); setPage(0); setRoutePage(0); }} setPage={setPage} onView={openViewNode} onEdit={openEditNode} onServiceArea={openServiceArea} onDelete={(node) => openDelete(node, 'node')} />}
      {activeTab === 'routes' && <RoutesTable routes={routes} loading={routeLoading} page={routePage} size={size} totalPages={routeTotalPages} totalElements={routeTotalElements} search={routeSearch} statusFilter={routeStatusFilter} setSearch={(value) => { setRouteSearch(value); setRoutePage(0); }} setStatusFilter={(value) => { setRouteStatusFilter(value); setRoutePage(0); }} setSize={(value) => { setSize(value); setPage(0); setRoutePage(0); }} setPage={setRoutePage} onView={openViewRoute} onEdit={openEditRoute} onDelete={(route) => openDelete(route, 'route')} />}
      {activeTab === 'tat' && <TatTable rows={tatRows} />}
      <NodeDrawer mode={activeDrawer} form={nodeForm} setForm={setNodeForm} node={selectedNode} onClose={() => setActiveDrawer(null)} onSave={saveNode} />
      <RouteDrawer mode={activeDrawer} form={routeForm} setForm={setRouteForm} route={selectedRoute} nodeOptions={nodeOptions} onClose={() => setActiveDrawer(null)} onSave={saveRoute} />
      {serviceNode && <ServiceAreaModal node={serviceNode} mappings={servicePincodes} query={pincodeQuery} setQuery={setPincodeQuery} results={pincodeResults} selectedIds={selectedPincodeIds} setSelectedIds={setSelectedPincodeIds} serviceType={serviceType} setServiceType={setServiceType} onAdd={addServicePincodes} onRemove={removeServicePincode} onClose={() => setServiceNode(null)} />}
      {deleteTarget && <DeleteModal target={deleteTarget} block={deleteBlock} onConfirm={confirmDelete} onDisable={disableInstead} onClose={() => { setDeleteTarget(null); setDeleteBlock(null); }} />}
    </div>
  );
}
function StatCard({ icon: Icon, label, value }) {
  return <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex items-center gap-4"><div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center text-[#E31837]"><Icon className="w-6 h-6" /></div><div><p className="text-xs font-medium text-gray-500 mb-1">{label}</p><h3 className="text-2xl font-bold text-gray-900 leading-none">{formatNumber(value)}</h3></div></div>;
}
function NodesTable(props) {
  const { nodes, loading, page, size, totalPages, totalElements, search, typeFilter, statusFilter, setSearch, setTypeFilter, setStatusFilter, setSize, setPage, onView, onEdit, onServiceArea, onDelete } = props;
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"><TableControls count={totalElements} search={search} setSearch={setSearch} typeFilter={typeFilter} setTypeFilter={setTypeFilter} statusFilter={statusFilter} setStatusFilter={setStatusFilter} showType /><div className="overflow-x-auto"><table className="w-full text-left text-sm whitespace-nowrap"><thead className="bg-gray-50 text-gray-500 border-b border-gray-100"><tr><Header>Hub/Branch Name</Header><Header>Type</Header><Header>Location</Header><Header>Daily Capacity</Header><Header>Manager / Contact</Header><Header>Status</Header><Header center>Actions</Header></tr></thead><tbody className="divide-y divide-gray-50">{loading ? <EmptyRow text="Loading hubs and branches..." colSpan={7} /> : nodes.map((row) => <NodeRow key={row.id} row={row} onView={onView} onEdit={onEdit} onServiceArea={onServiceArea} onDelete={onDelete} />)}{!loading && nodes.length === 0 && <EmptyRow text="No hubs or branches found." colSpan={7} />}</tbody></table></div><Pagination page={page} size={size} totalPages={totalPages} totalElements={totalElements} setPage={setPage} setSize={setSize} /></div>;
}
function NodeRow({ row, onView, onEdit, onServiceArea, onDelete }) {
  const RowIcon = getNodeIcon(row.type);
  return <tr className="hover:bg-gray-50/50 transition-colors bg-white"><td className="px-6 py-4"><div className="flex items-center gap-4"><div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-[#E31837] shrink-0"><RowIcon className="w-5 h-5" /></div><div><p className="font-bold text-gray-900 text-sm">{row.name}</p><p className="text-xs text-gray-500 font-medium">{row.code}</p></div></div></td><td className="px-6 py-4"><span className="inline-flex px-2.5 py-1 rounded-md text-xs font-bold text-[#E31837] bg-red-50">{NODE_TYPE_LABELS[row.type] || row.type}</span></td><td className="px-6 py-4"><div className="flex items-center gap-2 text-gray-600"><MapPin className="w-4 h-4 text-gray-400 shrink-0" /><span className="font-medium text-sm">{nodeLocation(row)}</span></div></td><td className="px-6 py-4"><span className="font-bold text-gray-900">{formatNumber(row.dailyCapacity)}</span></td><td className="px-6 py-4"><div className="space-y-1"><div className="flex items-center gap-2 text-gray-700 text-sm"><User className="w-3.5 h-3.5 text-gray-400" /><span className="font-medium">{row.contactName || (row.managerUserId ? `Manager #${row.managerUserId}` : '-')}</span></div><div className="text-gray-500 text-xs font-medium">{row.contactPhone || '-'}</div></div></td><td className="px-6 py-4"><StatusBadge active={row.active} /></td><td className="px-6 py-4"><div className="flex items-center justify-center gap-2"><IconButton title="View" onClick={() => onView(row.id)} icon={Eye} /><IconButton title="Edit" onClick={() => onEdit(row.id)} icon={Edit} /><IconButton title="Service Area" onClick={() => onServiceArea(row)} icon={MapPin} /><IconButton title="Delete" onClick={() => onDelete(row)} icon={Trash2} danger /></div></td></tr>;
}
function RoutesTable(props) {
  const { routes, loading, page, size, totalPages, totalElements, search, statusFilter, setSearch, setStatusFilter, setSize, setPage, onView, onEdit, onDelete } = props;
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col"><TableControls count={totalElements} search={search} setSearch={setSearch} statusFilter={statusFilter} setStatusFilter={setStatusFilter} /><div className="overflow-x-auto"><table className="w-full text-left text-sm whitespace-nowrap"><thead className="bg-gray-50 text-gray-500 border-b border-gray-100"><tr><Header>Route</Header><Header>Origin</Header><Header>Destination</Header><Header>Distance</Header><Header>Transit</Header><Header>Capacity</Header><Header>Status</Header><Header center>Actions</Header></tr></thead><tbody className="divide-y divide-gray-50">{loading ? <EmptyRow text="Loading routes..." colSpan={8} /> : routes.map((row) => <RouteRow key={row.id} row={row} onView={onView} onEdit={onEdit} onDelete={onDelete} />)}{!loading && routes.length === 0 && <EmptyRow text="No network routes found." colSpan={8} />}</tbody></table></div><Pagination page={page} size={size} totalPages={totalPages} totalElements={totalElements} setPage={setPage} setSize={setSize} /></div>;
}
function RouteRow({ row, onView, onEdit, onDelete }) {
  return <tr className="hover:bg-gray-50/50 bg-white"><td className="px-6 py-4 font-bold text-gray-900">{row.routeCode}</td><td className="px-6 py-4">{row.origin?.name || '-'}</td><td className="px-6 py-4">{row.destination?.name || '-'}</td><td className="px-6 py-4">{row.distanceKm ?? '-'} km</td><td className="px-6 py-4">{row.transitHours ?? '-'} hrs</td><td className="px-6 py-4 font-bold">{formatNumber(row.dailyCapacity)}</td><td className="px-6 py-4"><StatusBadge active={row.active} /></td><td className="px-6 py-4"><div className="flex items-center justify-center gap-2"><IconButton title="View" onClick={() => onView(row.id)} icon={Eye} /><IconButton title="Edit" onClick={() => onEdit(row.id)} icon={Edit} /><IconButton title="Delete" onClick={() => onDelete(row)} icon={Trash2} danger /></div></td></tr>;
}
function TatTable({ rows }) {
  return <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"><div className="p-4 border-b border-gray-100"><p className="text-sm font-bold text-gray-900">TAT derived from route transit hours</p></div><div className="overflow-x-auto"><table className="w-full text-left text-sm"><thead className="bg-gray-50 text-gray-500"><tr><Header>Route</Header><Header>Lane</Header><Header>Transit Hours</Header><Header>Estimated TAT</Header><Header>Status</Header></tr></thead><tbody>{rows.map((route) => <tr key={route.id} className="border-t border-gray-50"><td className="px-6 py-4 font-bold">{route.routeCode}</td><td className="px-6 py-4">{route.origin?.name} to {route.destination?.name}</td><td className="px-6 py-4">{route.transitHours}</td><td className="px-6 py-4 font-semibold">{formatTat(route.transitHours)}</td><td className="px-6 py-4"><StatusBadge active={route.active} /></td></tr>)}{rows.length === 0 && <EmptyRow text="No TAT data available. Add routes with transit hours first." colSpan={5} />}</tbody></table></div></div>;
}
function TableControls({ count, search, setSearch, typeFilter, setTypeFilter, statusFilter, setStatusFilter, showType = false }) {
  return <div className="p-4 border-b border-gray-100 flex flex-col lg:flex-row lg:items-center justify-between gap-4 bg-white"><p className="text-sm font-bold text-gray-900">{formatNumber(count)} <span className="font-medium text-gray-500">records found</span></p><div className="flex flex-wrap items-center gap-3"><div className="relative"><Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or code..." className="pl-9 pr-4 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E31837] w-64" /></div>{showType && <select value={typeFilter} onChange={(e) => setTypeFilter(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"><option value="">All Types</option>{Object.entries(NODE_TYPE_LABELS).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select>}<select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)} className="px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white"><option value="">All Status</option><option value="ACTIVE">Active</option><option value="INACTIVE">Inactive</option></select><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><Filter className="w-4 h-4" /> Filter</button><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><FileSpreadsheet className="w-4 h-4" /> Export Excel</button><button className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50"><FileText className="w-4 h-4" /> Export PDF</button></div></div>;
}
function NodeDrawer({ mode, form, setForm, node, onClose, onSave }) {
  const open = ['node-new', 'node-edit', 'node-view'].includes(mode);
  const readOnly = mode === 'node-view';
  return <Drawer open={open} onClose={onClose} title={mode === 'node-new' ? 'Add Hub/Branch' : mode === 'node-edit' ? 'Edit Hub/Branch' : 'View Hub/Branch'} width="max-w-2xl" footer={readOnly ? <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onClose}>Close</button> : <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg" onClick={onClose}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onSave}>Save Changes</button></>}>
    {readOnly ? <Details item={node} /> : <div className="space-y-6"><div className="grid grid-cols-2 gap-4"><Input label="Name" value={form.name} onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))} placeholder="e.g. Mumbai Central Hub" /><Select label="Type" value={form.type} onChange={(e) => setForm((p) => ({ ...p, type: e.target.value }))} options={Object.entries(NODE_TYPE_LABELS).map(([value, label]) => ({ value, label }))} /><Input label="Capacity" type="number" value={form.dailyCapacity} onChange={(e) => setForm((p) => ({ ...p, dailyCapacity: e.target.value }))} /><Input label="Manager User ID" type="number" value={form.managerUserId} onChange={(e) => setForm((p) => ({ ...p, managerUserId: e.target.value }))} /><Input label="Contact Name" value={form.contactName} onChange={(e) => setForm((p) => ({ ...p, contactName: e.target.value }))} /><Input label="Contact Phone" value={form.contactPhone} onChange={(e) => setForm((p) => ({ ...p, contactPhone: e.target.value }))} /></div><Input label="Address" value={form.address} onChange={(e) => setForm((p) => ({ ...p, address: e.target.value }))} placeholder="Full address..." /><GeoHierarchyPicker maxLevel="pincode" value={form} onChange={(value) => setForm((prev) => ({ ...prev, ...value }))} /></div>}
  </Drawer>;
}
function RouteDrawer({ mode, form, setForm, route, nodeOptions, onClose, onSave }) {
  const open = ['route-new', 'route-edit', 'route-view'].includes(mode);
  const readOnly = mode === 'route-view';
  return <Drawer open={open} onClose={onClose} title={mode === 'route-new' ? 'Add Route' : mode === 'route-edit' ? 'Edit Route' : 'View Route'} width="max-w-xl" footer={readOnly ? <button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onClose}>Close</button> : <><button className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg" onClick={onClose}>Cancel</button><button className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg" onClick={onSave}>Save Changes</button></>}>
    {readOnly ? <RouteDetails route={route} /> : <div className="grid grid-cols-2 gap-4"><Select label="Origin Node" value={form.originNodeId} onChange={(e) => setForm((p) => ({ ...p, originNodeId: e.target.value }))} options={[{ value: '', label: 'Select Origin' }, ...nodeOptions]} /><Select label="Destination Node" value={form.destinationNodeId} onChange={(e) => setForm((p) => ({ ...p, destinationNodeId: e.target.value }))} options={[{ value: '', label: 'Select Destination' }, ...nodeOptions]} /><Input label="Distance (km)" type="number" value={form.distanceKm} onChange={(e) => setForm((p) => ({ ...p, distanceKm: e.target.value }))} /><Input label="Transit Hours" type="number" value={form.transitHours} onChange={(e) => setForm((p) => ({ ...p, transitHours: e.target.value }))} /><Input label="Daily Capacity" type="number" value={form.dailyCapacity} onChange={(e) => setForm((p) => ({ ...p, dailyCapacity: e.target.value }))} wrapperClassName="col-span-2" /></div>}
  </Drawer>;
}
function ServiceAreaModal({ node, mappings, query, setQuery, results, selectedIds, setSelectedIds, serviceType, setServiceType, onAdd, onRemove, onClose }) {
  function toggle(id) { setSelectedIds((prev) => prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]); }
  return <Modal open onClose={onClose} title={`Manage Service Area - ${node.name}`} size="lg" footer={<><button onClick={onClose} className="px-4 py-2 border border-gray-200 text-gray-700 font-medium rounded-lg">Close</button><button onClick={onAdd} className="px-4 py-2 bg-[#111111] text-white font-medium rounded-lg">Add Pincodes</button></>}><div className="space-y-5"><div className="grid grid-cols-3 gap-4"><Input label="Search Pincode" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="695121" wrapperClassName="col-span-2" /><Select label="Service Type" value={serviceType} onChange={(e) => setServiceType(e.target.value)} options={[{ value: 'BOTH', label: 'Both' }, { value: 'PICKUP', label: 'Pickup' }, { value: 'DELIVERY', label: 'Delivery' }]} /></div>{results.length > 0 && <div className="border border-gray-100 rounded-lg divide-y divide-gray-100 max-h-44 overflow-auto">{results.map((item) => <label key={item.id} className="flex items-center justify-between px-3 py-2 text-sm"><span>{item.name} <span className="text-gray-400">{item.path}</span></span><input type="checkbox" checked={selectedIds.includes(item.id)} onChange={() => toggle(item.id)} /></label>)}</div>}<div><h4 className="text-xs font-bold text-gray-500 uppercase mb-2">Mapped Pincodes</h4><div className="border border-gray-100 rounded-lg divide-y divide-gray-100">{mappings.map((item) => <div key={item.id} className="flex items-center justify-between px-3 py-2 text-sm"><span className="font-semibold">{item.pincode}</span><span className="text-xs font-bold text-[#E31837] bg-red-50 px-2 py-1 rounded">{item.serviceType}</span><button onClick={() => onRemove(item.pincodeId)} className="text-red-600 hover:text-red-700"><X className="w-4 h-4" /></button></div>)}{mappings.length === 0 && <p className="px-3 py-8 text-center text-sm text-gray-500">No service pincodes mapped yet.</p>}</div></div></div></Modal>;
}
function DeleteModal({ target, block, onConfirm, onDisable, onClose }) {
  const blocked = block?.code === 'NETWORK_NODE_IN_USE';
  const entries = Object.entries(block?.dependencies || {}).filter(([, value]) => Number(value) > 0);
  return <Modal open onClose={onClose} title={blocked ? 'Cannot Delete Hub' : 'Delete Record'} size="sm" footer={blocked ? <><button onClick={onClose} className="px-4 py-2 border rounded-lg">Close</button><button onClick={onDisable} className="px-4 py-2 bg-[#E31837] text-white rounded-lg">Disable Instead</button></> : <><button onClick={onClose} className="px-4 py-2 border rounded-lg">Cancel</button><button onClick={onConfirm} className="px-4 py-2 bg-red-600 text-white rounded-lg">Delete</button></>}><div className="space-y-4"><div className="flex gap-3"><AlertCircle className={blocked ? 'w-5 h-5 text-amber-500' : 'w-5 h-5 text-red-500'} /><p className="text-sm text-gray-700">{blocked ? 'This hub is currently in use.' : `Delete ${target.name || target.routeCode}?`}</p></div>{blocked && <div className="space-y-2">{entries.map(([key, value]) => <div key={key} className="flex items-center justify-between bg-gray-50 border border-gray-100 rounded-lg px-3 py-2 text-sm"><span>{key.replace(/([A-Z])/g, ' $1')}</span><b>{formatNumber(value)}</b></div>)}</div>}</div></Modal>;
}
function Details({ item }) {
  if (!item) return null;
  const rows = [['Code', item.code], ['Name', item.name], ['Type', NODE_TYPE_LABELS[item.type] || item.type], ['Capacity', formatNumber(item.dailyCapacity)], ['Address', item.address || '-'], ['Location', nodeLocation(item)], ['Status', item.active ? 'Active' : 'Inactive']];
  return <div className="grid grid-cols-2 gap-4">{rows.map(([label, value]) => <div key={label} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50"><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><p className="text-sm font-semibold text-gray-900">{value}</p></div>)}</div>;
}
function RouteDetails({ route }) {
  if (!route) return null;
  const rows = [['Route Code', route.routeCode], ['Origin', route.origin?.name || '-'], ['Destination', route.destination?.name || '-'], ['Distance', route.distanceKm ? `${route.distanceKm} km` : '-'], ['Transit', route.transitHours ? `${route.transitHours} hrs` : '-'], ['Capacity', formatNumber(route.dailyCapacity)], ['Status', route.active ? 'Active' : 'Inactive']];
  return <div className="grid grid-cols-2 gap-4">{rows.map(([label, value]) => <div key={label} className="border border-gray-100 rounded-lg p-3 bg-gray-50/50"><p className="text-xs font-bold text-gray-500 mb-1">{label}</p><p className="text-sm font-semibold text-gray-900">{value}</p></div>)}</div>;
}
function Pagination({ page, size, totalPages, totalElements, setPage, setSize }) {
  const start = totalElements === 0 ? 0 : page * size + 1;
  const end = Math.min((page + 1) * size, totalElements);
  return <div className="p-4 border-t border-gray-100 flex items-center justify-between bg-white"><p className="text-sm text-gray-500 font-medium">Showing <span className="font-bold text-gray-900">{start} to {end}</span> of <span className="font-bold text-gray-900">{formatNumber(totalElements)}</span> entries</p><div className="flex items-center gap-3"><button disabled={page <= 0} onClick={() => setPage(page - 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-500 disabled:text-gray-300"><ChevronLeft className="w-4 h-4" /></button><span className="text-sm font-bold text-gray-700">{page + 1} / {Math.max(totalPages, 1)}</span><button disabled={page + 1 >= totalPages} onClick={() => setPage(page + 1)} className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-md text-gray-500 disabled:text-gray-300"><ChevronRight className="w-4 h-4" /></button><select value={size} onChange={(event) => setSize(Number(event.target.value))} className="px-3 py-1.5 border border-gray-200 rounded-md text-sm"><option value={10}>10 / page</option><option value={20}>20 / page</option><option value={50}>50 / page</option></select></div></div>;
}
function Header({ children, center = false }) {
  return <th className={`px-6 py-4 font-bold text-[11px] uppercase tracking-wider ${center ? 'text-center' : ''}`}>{children}</th>;
}
function EmptyRow({ text, colSpan }) {
  return <tr><td colSpan={colSpan} className="px-6 py-12 text-center text-sm text-gray-500">{text}</td></tr>;
}
function StatusBadge({ active }) {
  return <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-bold border ${active ? 'text-green-700 bg-green-50 border-green-100' : 'text-red-700 bg-red-50 border-red-100'}`}><span className={`w-1.5 h-1.5 rounded-full ${active ? 'bg-green-500' : 'bg-red-500'}`} />{active ? 'Active' : 'Inactive'}</span>;
}
function IconButton({ icon: Icon, title, onClick, danger = false }) {
  return <button title={title} onClick={onClick} className={`p-1.5 border border-gray-200 rounded-md text-gray-400 transition-colors ${danger ? 'hover:text-red-600 hover:bg-red-50' : 'hover:text-[#E31837] hover:bg-red-50'}`}><Icon className="w-4 h-4" /></button>;
}
function formatTat(hours) {
  if (!hours && hours !== 0) return '-';
  const minDays = Math.max(1, Math.ceil(Number(hours) / 24));
  const maxDays = Math.max(minDays, Math.ceil((Number(hours) + 12) / 24));
  return minDays === maxDays ? `${minDays} Day${minDays > 1 ? 's' : ''}` : `${minDays}-${maxDays} Days`;
}
