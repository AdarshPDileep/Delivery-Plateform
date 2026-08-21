export const codTransactions = [
  { id: 'COD001', awb: 'CG20240002', amount: 1500, collectedBy: 'AG006', franchiseId: 'FR005', sellerId: 'SL001', collectedAt: '2024-08-17T11:45:00Z', remittedToFranchise: true, remittedToHO: true, settledToSeller: true, status: 'Settled' },
  { id: 'COD002', awb: 'CG20240007', amount: 3200, collectedBy: 'AG002', franchiseId: 'FR001', sellerId: 'SL002', collectedAt: '2024-08-20T14:00:00Z', remittedToFranchise: false, remittedToHO: false, settledToSeller: false, status: 'Collected' },
  { id: 'COD003', awb: 'CG20240009', amount: 4500, collectedBy: null, franchiseId: 'FR006', sellerId: 'SL004', collectedAt: null, remittedToFranchise: false, remittedToHO: false, settledToSeller: false, status: 'Pending' },
  { id: 'COD004', awb: 'CG20240011', amount: 1200, collectedBy: 'AG001', franchiseId: 'FR001', sellerId: 'SL001', collectedAt: '2024-08-10T16:00:00Z', remittedToFranchise: true, remittedToHO: true, settledToSeller: false, status: 'Remitted to HO' },
  { id: 'COD005', awb: 'CG20240014', amount: 2000, collectedBy: 'AG005', franchiseId: 'FR003', sellerId: 'SL006', collectedAt: '2024-08-12T10:00:00Z', remittedToFranchise: true, remittedToHO: false, settledToSeller: false, status: 'Remitted to Franchise' },
  { id: 'COD006', awb: 'CG20240017', amount: 3500, collectedBy: 'AG010', franchiseId: 'FR008', sellerId: 'SL002', collectedAt: '2024-08-14T12:00:00Z', remittedToFranchise: true, remittedToHO: true, settledToSeller: true, status: 'Settled' },
  { id: 'COD007', awb: 'CG20240020', amount: 800, collectedBy: 'AG004', franchiseId: 'FR002', sellerId: 'SL003', collectedAt: '2024-08-16T09:00:00Z', remittedToFranchise: true, remittedToHO: false, settledToSeller: false, status: 'Remitted to Franchise' },
  { id: 'COD008', awb: 'CG20240023', amount: 4200, collectedBy: null, franchiseId: 'FR004', sellerId: 'SL004', collectedAt: null, remittedToFranchise: false, remittedToHO: false, settledToSeller: false, status: 'Pending' },
];

export const codSummary = {
  totalCollected: 20900, pendingRemittance: 9700, settledToSellers: 5200, inDispute: 0,
  agentHolding: 3200, franchiseHolding: 4800, hoHolding: 1700,
};

export const sellerPayouts = [
  { sellerId: 'SL001', sellerName: 'TrendyCart India', period: 'Aug 1-15, 2024', codCollected: 4500, shippingDeduction: 680, codFee: 135, netPayable: 3685, status: 'Settled', paidOn: '2024-08-18' },
  { sellerId: 'SL002', sellerName: 'GadgetZone', period: 'Aug 1-15, 2024', codCollected: 8200, shippingDeduction: 1230, codFee: 246, netPayable: 6724, status: 'Pending', paidOn: null },
  { sellerId: 'SL003', sellerName: 'FreshBasket', period: 'Aug 1-15, 2024', codCollected: 1800, shippingDeduction: 270, codFee: 54, netPayable: 1476, status: 'Settled', paidOn: '2024-08-17' },
  { sellerId: 'SL004', sellerName: 'BookWorm Express', period: 'Aug 1-15, 2024', codCollected: 3200, shippingDeduction: 480, codFee: 96, netPayable: 2624, status: 'Pending', paidOn: null },
  { sellerId: 'SL006', sellerName: 'ArtisanCraft', period: 'Aug 1-15, 2024', codCollected: 2000, shippingDeduction: 300, codFee: 60, netPayable: 1640, status: 'Settled', paidOn: '2024-08-16' },
];

export const tickets = [
  { id: 'TK001', subject: 'Delayed delivery - CG20240001', priority: 'High', status: 'Open', category: 'Delivery Issue', assignee: 'Neha Singh', raisedBy: 'Rahul Sharma', portal: 'public', awb: 'CG20240001', createdAt: '2024-08-20T10:00:00Z', updatedAt: '2024-08-20T10:00:00Z',
    messages: [
      { sender: 'Rahul Sharma', message: 'My shipment CG20240001 is delayed by 2 days. Can you check?', timestamp: '2024-08-20T10:00:00Z' },
      { sender: 'Neha Singh', message: 'Let me check with the logistics team. Your shipment is currently in transit.', timestamp: '2024-08-20T10:30:00Z' },
    ],
  },
  { id: 'TK002', subject: 'COD amount mismatch', priority: 'Medium', status: 'In Progress', category: 'COD Issue', assignee: 'Neha Singh', raisedBy: 'Arvind Shah', portal: 'seller', awb: 'CG20240002', createdAt: '2024-08-18T14:00:00Z', updatedAt: '2024-08-19T09:00:00Z',
    messages: [
      { sender: 'Arvind Shah', message: 'COD collected was ₹1500 but only ₹1200 was credited.', timestamp: '2024-08-18T14:00:00Z' },
      { sender: 'Neha Singh', message: 'Investigating the discrepancy. Will update within 24 hours.', timestamp: '2024-08-18T16:00:00Z' },
    ],
  },
  { id: 'TK003', subject: 'Franchise suspension query', priority: 'Low', status: 'Resolved', category: 'Account Issue', assignee: 'Priya Kapoor', raisedBy: 'Vikram Singh', portal: 'franchise', awb: null, createdAt: '2024-07-15T10:00:00Z', updatedAt: '2024-07-20T14:00:00Z',
    messages: [
      { sender: 'Vikram Singh', message: 'Why was my franchise suspended?', timestamp: '2024-07-15T10:00:00Z' },
      { sender: 'Priya Kapoor', message: 'Due to pending COD remittance of ₹45,000. Please clear the dues.', timestamp: '2024-07-16T09:00:00Z' },
      { sender: 'Vikram Singh', message: 'Payment done. Reference: NEFT-12345', timestamp: '2024-07-18T11:00:00Z' },
      { sender: 'Priya Kapoor', message: 'Verified. Account will be reactivated within 24 hours.', timestamp: '2024-07-20T14:00:00Z' },
    ],
  },
  { id: 'TK004', subject: 'Wrong delivery address', priority: 'High', status: 'Open', category: 'Delivery Issue', assignee: null, raisedBy: 'Prashant Mehra', portal: 'seller', awb: 'CG20240004', createdAt: '2024-08-20T08:00:00Z', updatedAt: '2024-08-20T08:00:00Z',
    messages: [
      { sender: 'Prashant Mehra', message: 'Shipment CG20240004 is being delivered to wrong address. Please reroute.', timestamp: '2024-08-20T08:00:00Z' },
    ],
  },
  { id: 'TK005', subject: 'Rate card update request', priority: 'Low', status: 'Closed', category: 'Billing', assignee: 'Rahul Joshi', raisedBy: 'Nandini Rao', portal: 'seller', awb: null, createdAt: '2024-08-01T10:00:00Z', updatedAt: '2024-08-05T10:00:00Z',
    messages: [
      { sender: 'Nandini Rao', message: 'Can we get a discount on our rate card? We\'re shipping 150+ orders/month.', timestamp: '2024-08-01T10:00:00Z' },
      { sender: 'Rahul Joshi', message: 'Based on your volume, we can offer the Premium rate card. Updated.', timestamp: '2024-08-05T10:00:00Z' },
    ],
  },
];

export const escalationMatrix = [
  { level: 1, timeThreshold: '4 hours', assignTo: 'Support Agent', action: 'Auto-assign to available agent' },
  { level: 2, timeThreshold: '12 hours', assignTo: 'Operations Manager', action: 'Escalate to manager' },
  { level: 3, timeThreshold: '24 hours', assignTo: 'Super Admin', action: 'Critical escalation' },
];

export const auditLogs = [
  { id: 'AL001', timestamp: '2024-08-21T09:15:00Z', user: 'Admin User', action: 'Login', entity: 'Session', entityId: null, oldValue: null, newValue: 'Logged in from 192.168.1.1', ip: '192.168.1.1' },
  { id: 'AL002', timestamp: '2024-08-21T09:20:00Z', user: 'Admin User', action: 'Status Update', entity: 'Shipment', entityId: 'CG20240001', oldValue: 'Picked Up', newValue: 'In Transit', ip: '192.168.1.1' },
  { id: 'AL003', timestamp: '2024-08-20T16:30:00Z', user: 'Priya Kapoor', action: 'Create', entity: 'Franchise', entityId: 'FR007', oldValue: null, newValue: 'Kolkata Express Cargo created', ip: '192.168.1.5' },
  { id: 'AL004', timestamp: '2024-08-20T14:00:00Z', user: 'Rajesh Mehta', action: 'Booking', entity: 'Shipment', entityId: 'CG20240010', oldValue: null, newValue: 'New shipment booked', ip: '10.0.0.15' },
  { id: 'AL005', timestamp: '2024-08-20T11:00:00Z', user: 'Rahul Joshi', action: 'Update', entity: 'Rate Card', entityId: 'RC002', oldValue: 'Within Zone: ₹32', newValue: 'Within Zone: ₹30', ip: '192.168.1.8' },
  { id: 'AL006', timestamp: '2024-08-19T15:00:00Z', user: 'Admin User', action: 'Suspend', entity: 'Franchise', entityId: 'FR005', oldValue: 'Active', newValue: 'Suspended', ip: '192.168.1.1' },
  { id: 'AL007', timestamp: '2024-08-19T10:00:00Z', user: 'Neha Singh', action: 'Assign', entity: 'Ticket', entityId: 'TK001', oldValue: 'Unassigned', newValue: 'Assigned to Neha Singh', ip: '192.168.1.12' },
  { id: 'AL008', timestamp: '2024-08-18T14:30:00Z', user: 'Priya Kapoor', action: 'Approve', entity: 'Seller', entityId: 'SL003', oldValue: 'Under Review', newValue: 'Approved', ip: '192.168.1.5' },
  { id: 'AL009', timestamp: '2024-08-18T09:00:00Z', user: 'Admin User', action: 'Create', entity: 'User', entityId: 'US010', oldValue: null, newValue: 'Sanjay Gupta created as Admin', ip: '192.168.1.1' },
  { id: 'AL010', timestamp: '2024-08-17T16:00:00Z', user: 'Rahul Joshi', action: 'Settlement', entity: 'COD', entityId: 'COD001', oldValue: 'Remitted to HO', newValue: 'Settled to Seller', ip: '192.168.1.8' },
];

export const notificationTemplates = [
  { id: 'NT001', name: 'Shipment Booked', channel: 'SMS', event: 'shipment.booked', template: 'Your shipment {{awb}} has been booked. Track at {{trackUrl}}', status: 'Active' },
  { id: 'NT002', name: 'Out for Delivery', channel: 'SMS', event: 'shipment.out_for_delivery', template: 'Your shipment {{awb}} is out for delivery. Expected by {{expectedTime}}.', status: 'Active' },
  { id: 'NT003', name: 'Delivered', channel: 'WhatsApp', event: 'shipment.delivered', template: 'Hi {{receiverName}}, your package {{awb}} has been delivered. Rate your experience: {{feedbackUrl}}', status: 'Active' },
  { id: 'NT004', name: 'Pickup Scheduled', channel: 'Email', event: 'pickup.scheduled', template: 'Dear {{sellerName}}, pickup for {{count}} orders scheduled on {{date}} at {{time}}.', status: 'Active' },
  { id: 'NT005', name: 'COD Remittance', channel: 'Email', event: 'cod.settled', template: 'Dear {{sellerName}}, ₹{{amount}} COD remittance processed. Ref: {{reference}}', status: 'Inactive' },
];

export const manifests = [
  { id: 'MF001', type: 'Outbound', sealNumber: 'SEAL-2024-001', origin: 'HB001', destination: 'HB003', awbCount: 45, totalWeight: 120, status: 'Dispatched', dispatchedAt: '2024-08-20T22:00:00Z', receivedAt: null, createdBy: 'FR001', createdAt: '2024-08-20T20:00:00Z' },
  { id: 'MF002', type: 'Inbound', sealNumber: 'SEAL-2024-002', origin: 'HB004', destination: 'HB001', awbCount: 32, totalWeight: 85, status: 'Received', dispatchedAt: '2024-08-19T21:00:00Z', receivedAt: '2024-08-20T15:00:00Z', createdBy: 'FR005', createdAt: '2024-08-19T19:00:00Z' },
  { id: 'MF003', type: 'Outbound', sealNumber: 'SEAL-2024-003', origin: 'HB002', destination: 'HB001', awbCount: 18, totalWeight: 45, status: 'Created', dispatchedAt: null, receivedAt: null, createdBy: 'FR002', createdAt: '2024-08-21T08:00:00Z' },
  { id: 'MF004', type: 'Outbound', sealNumber: 'SEAL-2024-004', origin: 'HB003', destination: 'HB006', awbCount: 28, totalWeight: 72, status: 'Dispatched', dispatchedAt: '2024-08-20T23:00:00Z', receivedAt: null, createdBy: 'FR003', createdAt: '2024-08-20T21:00:00Z' },
  { id: 'MF005', type: 'Inbound', sealNumber: 'SEAL-2024-005', origin: 'HB001', destination: 'HB005', awbCount: 22, totalWeight: 58, status: 'Received', dispatchedAt: '2024-08-18T22:00:00Z', receivedAt: '2024-08-19T16:00:00Z', createdBy: 'FR001', createdAt: '2024-08-18T20:00:00Z' },
];

export const reportDefinitions = [
  { id: 'RPT001', name: 'Daily Delivery Report', description: 'Shipments delivered today with details', category: 'Operations', parameters: ['date', 'franchise', 'zone'] },
  { id: 'RPT002', name: 'COD Collection Summary', description: 'COD amounts collected, remitted, and settled', category: 'Finance', parameters: ['dateRange', 'franchise', 'seller'] },
  { id: 'RPT003', name: 'SLA Breach Report', description: 'Shipments exceeding TAT thresholds', category: 'Operations', parameters: ['dateRange', 'serviceType', 'zone'] },
  { id: 'RPT004', name: 'Franchise Performance', description: 'Delivery metrics per franchise', category: 'Performance', parameters: ['dateRange', 'franchise'] },
  { id: 'RPT005', name: 'Seller Billing Statement', description: 'Shipping charges and COD settlement per seller', category: 'Finance', parameters: ['dateRange', 'seller'] },
  { id: 'RPT006', name: 'Agent Productivity', description: 'Deliveries, success rates, and timing per agent', category: 'Performance', parameters: ['dateRange', 'franchise', 'agent'] },
];
