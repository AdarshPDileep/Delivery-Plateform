// ===== Status Enums =====
export const SHIPMENT_STATUSES = [
  'Booked', 'Picked Up', 'In Transit', 'Out for Delivery', 'Delivered', 'RTO', 'Failed',
];

export const STATUS_COLORS = {
  'Booked': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  'Picked Up': { bg: 'bg-purple-100', text: 'text-purple-700', dot: 'bg-purple-500' },
  'In Transit': { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  'Out for Delivery': { bg: 'bg-cyan-100', text: 'text-cyan-700', dot: 'bg-cyan-500' },
  'Delivered': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'RTO': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  'Failed': { bg: 'bg-rose-100', text: 'text-rose-700', dot: 'bg-rose-500' },
  'Pending': { bg: 'bg-yellow-100', text: 'text-yellow-700', dot: 'bg-yellow-500' },
  'Approved': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'Rejected': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  'Active': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'Suspended': { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
  'Terminated': { bg: 'bg-red-100', text: 'text-red-700', dot: 'bg-red-500' },
  'Under Review': { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  'Open': { bg: 'bg-blue-100', text: 'text-blue-700', dot: 'bg-blue-500' },
  'In Progress': { bg: 'bg-amber-100', text: 'text-amber-700', dot: 'bg-amber-500' },
  'Resolved': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'Closed': { bg: 'bg-slate-100', text: 'text-slate-700', dot: 'bg-slate-500' },
  'Settled': { bg: 'bg-green-100', text: 'text-green-700', dot: 'bg-green-500' },
  'Unsettled': { bg: 'bg-orange-100', text: 'text-orange-700', dot: 'bg-orange-500' },
};

// ===== Payment Modes =====
export const PAYMENT_MODES = ['Prepaid', 'COD'];

// ===== Geo Hierarchy Levels =====
export const GEO_LEVELS = ['State', 'Zone', 'District', 'Taluk', 'Town'];

// ===== Service Types =====
export const SERVICE_TYPES = ['Standard', 'Express', 'Same-Day', 'Next-Day', 'Economy'];

// ===== Packaging Types =====
export const PACKAGING_TYPES = ['Envelope', 'Small Box', 'Medium Box', 'Large Box', 'Pallet', 'Custom'];

// ===== Franchise Statuses =====
export const FRANCHISE_STATUSES = ['Active', 'Suspended', 'Terminated', 'Pending'];

// ===== KYC Statuses =====
export const KYC_STATUSES = ['Pending', 'Under Review', 'Approved', 'Rejected'];

// ===== Ticket Priorities =====
export const TICKET_PRIORITIES = ['Low', 'Medium', 'High', 'Critical'];

// ===== Ticket Statuses =====
export const TICKET_STATUSES = ['Open', 'In Progress', 'Resolved', 'Closed'];

// ===== Notification Channels =====
export const NOTIFICATION_CHANNELS = ['SMS', 'Email', 'WhatsApp', 'Push'];

// ===== Roles =====
export const ROLES = ['Super Admin', 'Admin', 'Operations Manager', 'Finance Manager', 'Support Agent'];

// ===== Commission Types =====
export const COMMISSION_TYPES = ['Percentage', 'Flat'];

// ===== Payout Frequencies =====
export const PAYOUT_FREQUENCIES = ['Weekly', 'Bi-Weekly', 'Monthly'];

// ===== Reason Codes =====
export const REASON_CODES = {
  exception: ['Address Incorrect', 'Customer Not Available', 'Refused Delivery', 'Damaged Package', 'Weather Delay'],
  rto: ['Customer Refused', 'Incorrect Address', 'Multiple Failed Attempts', 'COD Amount Mismatch'],
  return: ['Wrong Item', 'Damaged Item', 'Quality Issue', 'Changed Mind', 'Size Mismatch'],
};

// ===== Portal Config =====
export const PORTALS = {
  admin: { name: 'Super Admin', path: '/admin', color: 'navy' },
  franchise: { name: 'Franchise', path: '/franchise', color: 'purple' },
  seller: { name: 'Seller', path: '/seller', color: 'teal' },
};

// ===== Hub Types =====
export const HUB_TYPES = ['Hub', 'Branch', 'Sorting Center', 'Delivery Center'];

// ===== Weight Slabs =====
export const WEIGHT_SLABS = ['0-0.5 kg', '0.5-1 kg', '1-2 kg', '2-5 kg', '5-10 kg', '10-20 kg', '20+ kg'];
