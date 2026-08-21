// Mock API layer — all data persisted in localStorage
// Replace with real axios calls when backend is ready

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

// ===== Auth (mock) =====
export async function loginAdmin(email, password) {
  await delay(500);
  if (email === 'admin@commerza.com' && password === 'admin123') {
    return {
      data: {
        token: 'mock-jwt-token-' + Date.now(),
        admin: { id: 1, email },
      },
    };
  }
  const err = new Error('Invalid email or password.');
  err.response = { status: 401, data: { error: 'Invalid email or password.' } };
  throw err;
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
