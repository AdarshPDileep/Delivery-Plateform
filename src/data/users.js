export const users = [
  { id: 'US001', name: 'Admin User', email: 'admin@commerza.com', role: 'Super Admin', portal: 'admin', status: 'Active', lastLogin: '2024-08-21T09:00:00Z', createdAt: '2023-01-01T10:00:00Z' },
  { id: 'US002', name: 'Priya Kapoor', email: 'priya@commerza.com', role: 'Operations Manager', portal: 'admin', status: 'Active', lastLogin: '2024-08-20T14:30:00Z', createdAt: '2023-03-15T10:00:00Z' },
  { id: 'US003', name: 'Rahul Joshi', email: 'rahul@commerza.com', role: 'Finance Manager', portal: 'admin', status: 'Active', lastLogin: '2024-08-19T11:00:00Z', createdAt: '2023-04-01T10:00:00Z' },
  { id: 'US004', name: 'Neha Singh', email: 'neha@commerza.com', role: 'Support Agent', portal: 'admin', status: 'Active', lastLogin: '2024-08-21T08:00:00Z', createdAt: '2023-06-10T10:00:00Z' },
  { id: 'US005', name: 'Rajesh Mehta', email: 'rajesh@mumbaiexpress.in', role: 'Franchise Admin', portal: 'franchise', status: 'Active', lastLogin: '2024-08-21T07:30:00Z', createdAt: '2023-06-15T10:00:00Z', franchiseId: 'FR001' },
  { id: 'US006', name: 'Anita Deshmukh', email: 'anita@puneswift.in', role: 'Franchise Admin', portal: 'franchise', status: 'Active', lastLogin: '2024-08-20T09:00:00Z', createdAt: '2023-09-01T10:00:00Z', franchiseId: 'FR002' },
  { id: 'US007', name: 'Arvind Shah', email: 'arvind@trendycart.in', role: 'Seller Admin', portal: 'seller', status: 'Active', lastLogin: '2024-08-21T10:00:00Z', createdAt: '2023-05-10T10:00:00Z', sellerId: 'SL001' },
  { id: 'US008', name: 'Prashant Mehra', email: 'prashant@gadgetzone.in', role: 'Seller Admin', portal: 'seller', status: 'Active', lastLogin: '2024-08-20T16:00:00Z', createdAt: '2023-03-15T10:00:00Z', sellerId: 'SL002' },
  { id: 'US009', name: 'Vikram Singh', email: 'vikram@delhirapid.in', role: 'Franchise Admin', portal: 'franchise', status: 'Suspended', lastLogin: '2024-06-30T12:00:00Z', createdAt: '2023-11-05T10:00:00Z', franchiseId: 'FR005' },
  { id: 'US010', name: 'Sanjay Gupta', email: 'sanjay@commerza.com', role: 'Admin', portal: 'admin', status: 'Active', lastLogin: '2024-08-18T15:00:00Z', createdAt: '2024-01-15T10:00:00Z' },
];

export const roles = [
  { id: 'RL001', name: 'Super Admin', portal: 'admin', permissions: ['all'] },
  { id: 'RL002', name: 'Admin', portal: 'admin', permissions: ['dashboard', 'shipments', 'franchises', 'sellers', 'reports', 'cod', 'support'] },
  { id: 'RL003', name: 'Operations Manager', portal: 'admin', permissions: ['dashboard', 'shipments', 'hubs', 'agents', 'manifests'] },
  { id: 'RL004', name: 'Finance Manager', portal: 'admin', permissions: ['dashboard', 'cod', 'commissions', 'reports', 'rate-cards'] },
  { id: 'RL005', name: 'Support Agent', portal: 'admin', permissions: ['shipments.view', 'support'] },
  { id: 'RL006', name: 'Franchise Admin', portal: 'franchise', permissions: ['all'] },
  { id: 'RL007', name: 'Seller Admin', portal: 'seller', permissions: ['all'] },
];

export const permissions = [
  'dashboard', 'shipments', 'shipments.view', 'shipments.edit', 'shipments.create',
  'franchises', 'franchises.view', 'franchises.edit', 'franchises.create',
  'sellers', 'sellers.view', 'sellers.edit', 'sellers.create',
  'agents', 'agents.view', 'agents.edit',
  'hubs', 'hubs.view', 'hubs.edit',
  'rate-cards', 'rate-cards.view', 'rate-cards.edit',
  'commissions', 'cod', 'reports', 'users', 'support',
  'geo', 'masters', 'notifications', 'audit',
];
