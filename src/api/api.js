// Mock API layer - most data persisted in localStorage.
// Auth endpoints use the Spring Boot backend.

const STORAGE_KEY = 'cg_shipments';

// Seed some demo shipments if none exist
function getShipments() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) return JSON.parse(stored);

  const seed = [
    {
      awb: 'CG20240001',
      sender: { name: 'Rahul Sharma', phone: '9876543210', address: 'Andheri West, Mumbai' },
      receiver: { name: 'Priya Patel', phone: '9123456780', address: 'Koramangala, Bangalore' },
      weight: 2.5,
      dimensions: '30x20x15',
      paymentMode: 'Prepaid',
      codAmount: null,
      status: 'In Transit',
      statusHistory: [
        { status: 'Booked', timestamp: '2024-08-18T10:00:00Z' },
        { status: 'Picked Up', timestamp: '2024-08-18T16:30:00Z' },
        { status: 'In Transit', timestamp: '2024-08-19T08:00:00Z' },
      ],
      expectedDeliveryDate: '2024-08-23',
      createdAt: '2024-08-18T10:00:00Z',
      updatedAt: '2024-08-19T08:00:00Z',
    },
    {
      awb: 'CG20240002',
      sender: { name: 'Amit Kumar', phone: '9988776655', address: 'Connaught Place, Delhi' },
      receiver: { name: 'Sneha Reddy', phone: '9871234560', address: 'Banjara Hills, Hyderabad' },
      weight: 1.2,
      dimensions: '20x15x10',
      paymentMode: 'COD',
      codAmount: 1500,
      status: 'Delivered',
      statusHistory: [
        { status: 'Booked', timestamp: '2024-08-15T09:00:00Z' },
        { status: 'Picked Up', timestamp: '2024-08-15T14:00:00Z' },
        { status: 'In Transit', timestamp: '2024-08-16T07:00:00Z' },
        { status: 'Out for Delivery', timestamp: '2024-08-17T06:30:00Z' },
        { status: 'Delivered', timestamp: '2024-08-17T11:45:00Z' },
      ],
      expectedDeliveryDate: '2024-08-18',
      createdAt: '2024-08-15T09:00:00Z',
      updatedAt: '2024-08-17T11:45:00Z',
    },
    {
      awb: 'CG20240003',
      sender: { name: 'Vikram Singh', phone: '9012345678', address: 'MG Road, Pune' },
      receiver: { name: 'Neha Gupta', phone: '9345678901', address: 'Salt Lake, Kolkata' },
      weight: 5.0,
      dimensions: '50x40x30',
      paymentMode: 'Prepaid',
      codAmount: null,
      status: 'Booked',
      statusHistory: [
        { status: 'Booked', timestamp: '2024-08-20T12:00:00Z' },
      ],
      expectedDeliveryDate: '2024-08-26',
      createdAt: '2024-08-20T12:00:00Z',
      updatedAt: '2024-08-20T12:00:00Z',
    },
  ];

  localStorage.setItem(STORAGE_KEY, JSON.stringify(seed));
  return seed;
}

function saveShipments(shipments) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(shipments));
}

// Simulate async delay
const delay = (ms = 300) => new Promise((r) => setTimeout(r, ms));

// Generate AWB: CG + timestamp + random 4 digits
function generateAWB() {
  const ts = Date.now().toString().slice(-8);
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `CG${ts}${rand}`;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '';

// ===== Auth =====
export async function loginAdmin(email, password) {
  const response = await fetch(`${API_BASE_URL}/api/admin/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.message || data.error || 'Invalid admin credentials';
    const err = new Error(message);
    err.response = { status: response.status, data };
    throw err;
  }

  return { data };
}

export async function logoutAdmin(token) {
  const headers = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}/api/admin/logout`, {
    method: 'POST',
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    const message = data.message || data.error || 'Admin logout failed';
    const err = new Error(message);
    err.response = { status: response.status, data };
    throw err;
  }

  return { data };
}
// ===== Shipments =====
export async function createShipment(data) {
  await delay(400);
  const awb = generateAWB();
  const now = new Date().toISOString();
  const expectedDate = new Date();
  expectedDate.setDate(expectedDate.getDate() + Math.floor(5 + Math.random() * 3));

  const shipment = {
    awb,
    sender: { name: data.senderName, phone: data.senderPhone, address: data.senderAddress },
    receiver: { name: data.receiverName, phone: data.receiverPhone, address: data.receiverAddress },
    weight: data.weight || null,
    dimensions: data.dimensions || null,
    paymentMode: data.paymentMode,
    codAmount: data.paymentMode === 'COD' ? data.codAmount : null,
    status: 'Booked',
    statusHistory: [{ status: 'Booked', timestamp: now }],
    expectedDeliveryDate: expectedDate.toISOString().split('T')[0],
    createdAt: now,
    updatedAt: now,
  };

  const shipments = getShipments();
  shipments.unshift(shipment);
  saveShipments(shipments);

  return { data: { message: 'Shipment created successfully.', awb, expectedDeliveryDate: shipment.expectedDeliveryDate } };
}

export async function getShipment(awb) {
  await delay(300);
  const shipments = getShipments();
  const found = shipments.find((s) => s.awb === awb);
  if (!found) {
    const err = new Error('Not found');
    err.response = { status: 404, data: { error: 'Shipment not found.' } };
    throw err;
  }
  return { data: found };
}

export async function getAllShipments() {
  await delay(300);
  return { data: getShipments() };
}

export async function updateShipmentStatus(awb, status) {
  await delay(300);
  const shipments = getShipments();
  const idx = shipments.findIndex((s) => s.awb === awb);
  if (idx === -1) {
    const err = new Error('Not found');
    err.response = { status: 404, data: { error: 'Shipment not found.' } };
    throw err;
  }
  const now = new Date().toISOString();
  shipments[idx].status = status;
  shipments[idx].updatedAt = now;
  shipments[idx].statusHistory.push({ status, timestamp: now });
  saveShipments(shipments);
  return { data: { message: 'Status updated successfully.', awb, status } };
}



function getAdminToken() {
  return localStorage.getItem('cg_admin_token') || JSON.parse(localStorage.getItem('cg_user') || '{}')?.token || '';
}

async function apiRequest(path, options = {}) {
  const token = getAdminToken();
  const headers = {
    'Content-Type': 'application/json',
    ...(options.headers || {}),
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    ...options,
    headers,
  });

  const data = await response.json().catch(() => ({}));

  if (!response.ok || data.success === false) {
    const message = data.message || data.error || 'Request failed';
    const err = new Error(message);
    err.response = { status: response.status, data };
    throw err;
  }

  return data;
}

export async function getGeographyStats() {
  return apiRequest('/api/admin/geography/stats');
}

export async function getGeoStates() {
  return apiRequest('/api/admin/geography/states');
}

export async function createGeoState(payload) {
  return apiRequest('/api/admin/geography/states', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoState(id, payload) {
  return apiRequest(`/api/admin/geography/states/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function getGeoZones(stateId) {
  return apiRequest(`/api/admin/geography/states/${stateId}/zones`);
}

export async function createGeoZone(payload) {
  return apiRequest('/api/admin/geography/zones', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoZone(id, payload) {
  return apiRequest(`/api/admin/geography/zones/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function getGeoDistricts(zoneId) {
  return apiRequest(`/api/admin/geography/zones/${zoneId}/districts`);
}

export async function createGeoDistrict(payload) {
  return apiRequest('/api/admin/geography/districts', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoDistrict(id, payload) {
  return apiRequest(`/api/admin/geography/districts/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function getGeoTaluks(districtId) {
  return apiRequest(`/api/admin/geography/districts/${districtId}/taluks`);
}

export async function createGeoTaluk(payload) {
  return apiRequest('/api/admin/geography/taluks', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoTaluk(id, payload) {
  return apiRequest(`/api/admin/geography/taluks/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function getGeoTowns(talukId) {
  return apiRequest(`/api/admin/geography/taluks/${talukId}/towns`);
}

export async function createGeoTown(payload) {
  return apiRequest('/api/admin/geography/towns', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoTown(id, payload) {
  return apiRequest(`/api/admin/geography/towns/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function getGeoPincodes(townId, page = 0, size = 20) {
  return apiRequest(`/api/admin/geography/towns/${townId}/pincodes?page=${page}&size=${size}`);
}

export async function createGeoPincode(payload) {
  return apiRequest('/api/admin/geography/pincodes', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateGeoPincode(id, payload) {
  return apiRequest(`/api/admin/geography/pincodes/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function updateGeoPincodeServiceability(id, payload) {
  return apiRequest(`/api/admin/geography/pincodes/${id}/serviceability`, { method: 'PATCH', body: JSON.stringify(payload) });
}

export async function searchGeography(query) {
  return apiRequest(`/api/admin/geography/search?q=${encodeURIComponent(query)}`);
}

export const getStates = getGeoStates;
export const getZonesByState = getGeoZones;
export const getDistrictsByZone = getGeoDistricts;
export const getTaluksByDistrict = getGeoTaluks;
export const getTownsByTaluk = getGeoTowns;
export const getPincodesByTown = getGeoPincodes;

export async function getGeoState(id) {
  return apiRequest(`/api/admin/geography/states/${id}`);
}

export async function deleteGeoState(id) {
  return apiRequest(`/api/admin/geography/states/${id}`, { method: 'DELETE' });
}

export async function getGeoZone(id) {
  return apiRequest(`/api/admin/geography/zones/${id}`);
}

export async function deleteGeoZone(id) {
  return apiRequest(`/api/admin/geography/zones/${id}`, { method: 'DELETE' });
}

export async function getGeoDistrict(id) {
  return apiRequest(`/api/admin/geography/districts/${id}`);
}

export async function deleteGeoDistrict(id) {
  return apiRequest(`/api/admin/geography/districts/${id}`, { method: 'DELETE' });
}

export async function getGeoTaluk(id) {
  return apiRequest(`/api/admin/geography/taluks/${id}`);
}

export async function deleteGeoTaluk(id) {
  return apiRequest(`/api/admin/geography/taluks/${id}`, { method: 'DELETE' });
}

export async function getGeoTown(id) {
  return apiRequest(`/api/admin/geography/towns/${id}`);
}

export async function deleteGeoTown(id) {
  return apiRequest(`/api/admin/geography/towns/${id}`, { method: 'DELETE' });
}

export async function getGeoPincodeById(id) {
  return apiRequest(`/api/admin/geography/pincodes/id/${id}`);
}

export async function deleteGeoPincode(id) {
  return apiRequest(`/api/admin/geography/pincodes/${id}`, { method: 'DELETE' });
}

export async function getNetworkStats() {
  return apiRequest('/api/admin/network/stats');
}

export async function getNetworkNodes({ page = 0, size = 10, search = '', type = '', status = '' } = {}) {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('size', size);
  if (search) params.set('search', search);
  if (type) params.set('type', type);
  if (status) params.set('status', status);
  return apiRequest(`/api/admin/network/nodes?${params.toString()}`);
}

export async function getNetworkNode(id) {
  return apiRequest(`/api/admin/network/nodes/${id}`);
}

export async function createNetworkNode(payload) {
  return apiRequest('/api/admin/network/nodes', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateNetworkNode(id, payload) {
  return apiRequest(`/api/admin/network/nodes/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function updateNetworkNodeStatus(id, active) {
  return apiRequest(`/api/admin/network/nodes/${id}/status`, { method: 'PATCH', body: JSON.stringify({ active }) });
}

export async function deleteNetworkNode(id) {
  return apiRequest(`/api/admin/network/nodes/${id}`, { method: 'DELETE' });
}

export async function getNodePincodes(nodeId) {
  return apiRequest(`/api/admin/network/nodes/${nodeId}/pincodes`);
}

export async function addNodePincodes(nodeId, payload) {
  return apiRequest(`/api/admin/network/nodes/${nodeId}/pincodes`, { method: 'POST', body: JSON.stringify(payload) });
}

export async function removeNodePincode(nodeId, pincodeId) {
  return apiRequest(`/api/admin/network/nodes/${nodeId}/pincodes/${pincodeId}`, { method: 'DELETE' });
}

export async function getNetworkRoutes({ page = 0, size = 10, search = '', status = '' } = {}) {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('size', size);
  if (search) params.set('search', search);
  if (status) params.set('status', status);
  return apiRequest(`/api/admin/network/routes?${params.toString()}`);
}

export async function getNetworkRoute(id) {
  return apiRequest(`/api/admin/network/routes/${id}`);
}

export async function createNetworkRoute(payload) {
  return apiRequest('/api/admin/network/routes', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateNetworkRoute(id, payload) {
  return apiRequest(`/api/admin/network/routes/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function updateNetworkRouteStatus(id, active) {
  return apiRequest(`/api/admin/network/routes/${id}/status`, { method: 'PATCH', body: JSON.stringify({ active }) });
}

export async function deleteNetworkRoute(id) {
  return apiRequest(`/api/admin/network/routes/${id}`, { method: 'DELETE' });
}
export async function getFranchises({ page = 0, size = 10, search = '', status = '', type = '' } = {}) {
  const params = new URLSearchParams();
  params.set('page', page);
  params.set('size', size);
  if (search) params.set('search', search);
  if (status) params.set('status', status);
  if (type) params.set('type', type);
  return apiRequest(`/api/admin/franchises?${params.toString()}`);
}

export async function getFranchise(id) {
  return apiRequest(`/api/admin/franchises/${id}`);
}

export async function createFranchise(payload) {
  return apiRequest('/api/admin/franchises', { method: 'POST', body: JSON.stringify(payload) });
}

export async function updateFranchise(id, payload) {
  return apiRequest(`/api/admin/franchises/${id}`, { method: 'PUT', body: JSON.stringify(payload) });
}

export async function updateFranchiseStatus(id, status) {
  return apiRequest(`/api/admin/franchises/${id}/status`, { method: 'PATCH', body: JSON.stringify({ status }) });
}

export async function deleteFranchise(id) {
  return apiRequest(`/api/admin/franchises/${id}`, { method: 'DELETE' });
}
