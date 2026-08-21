export const rateCards = [
  { id: 'RC001', name: 'Standard Rate Card', type: 'Default', applicableTo: 'All Sellers', createdAt: '2023-01-01',
    slabs: [
      { weightRange: '0-0.5 kg', withinZone: 35, adjacentZone: 55, nationalZone: 80 },
      { weightRange: '0.5-1 kg', withinZone: 45, adjacentZone: 70, nationalZone: 100 },
      { weightRange: '1-2 kg', withinZone: 60, adjacentZone: 90, nationalZone: 130 },
      { weightRange: '2-5 kg', withinZone: 80, adjacentZone: 120, nationalZone: 180 },
      { weightRange: '5-10 kg', withinZone: 120, adjacentZone: 180, nationalZone: 280 },
      { weightRange: '10-20 kg', withinZone: 200, adjacentZone: 300, nationalZone: 450 },
      { weightRange: '20+ kg', withinZone: 350, adjacentZone: 500, nationalZone: 750 },
    ],
  },
  { id: 'RC002', name: 'Premium Seller Card', type: 'Custom', applicableTo: 'GadgetZone, ArtisanCraft', createdAt: '2023-06-01',
    slabs: [
      { weightRange: '0-0.5 kg', withinZone: 30, adjacentZone: 48, nationalZone: 70 },
      { weightRange: '0.5-1 kg', withinZone: 40, adjacentZone: 62, nationalZone: 90 },
      { weightRange: '1-2 kg', withinZone: 52, adjacentZone: 80, nationalZone: 115 },
      { weightRange: '2-5 kg', withinZone: 70, adjacentZone: 105, nationalZone: 160 },
      { weightRange: '5-10 kg', withinZone: 105, adjacentZone: 160, nationalZone: 250 },
      { weightRange: '10-20 kg', withinZone: 175, adjacentZone: 265, nationalZone: 400 },
      { weightRange: '20+ kg', withinZone: 310, adjacentZone: 450, nationalZone: 680 },
    ],
  },
  { id: 'RC003', name: 'Economy Card', type: 'Custom', applicableTo: 'BookWorm Express', createdAt: '2023-09-01',
    slabs: [
      { weightRange: '0-0.5 kg', withinZone: 25, adjacentZone: 40, nationalZone: 60 },
      { weightRange: '0.5-1 kg', withinZone: 32, adjacentZone: 50, nationalZone: 75 },
      { weightRange: '1-2 kg', withinZone: 45, adjacentZone: 68, nationalZone: 100 },
      { weightRange: '2-5 kg', withinZone: 60, adjacentZone: 90, nationalZone: 140 },
      { weightRange: '5-10 kg', withinZone: 90, adjacentZone: 140, nationalZone: 220 },
      { weightRange: '10-20 kg', withinZone: 150, adjacentZone: 230, nationalZone: 360 },
      { weightRange: '20+ kg', withinZone: 270, adjacentZone: 400, nationalZone: 600 },
    ],
  },
];

export const surcharges = [
  { id: 'SC001', name: 'Fuel Surcharge', type: 'Percentage', value: 5, enabled: true },
  { id: 'SC002', name: 'Remote Area Surcharge', type: 'Flat', value: 50, enabled: true },
  { id: 'SC003', name: 'COD Handling Fee', type: 'Flat', value: 30, enabled: true },
  { id: 'SC004', name: 'Oversize Package', type: 'Flat', value: 100, enabled: false },
  { id: 'SC005', name: 'Insurance (per ₹1000)', type: 'Flat', value: 10, enabled: true },
];

export const commissionRules = [
  { id: 'CM001', franchiseLevel: 'State', type: 'Percentage', rate: 15, condition: 'All Shipments', minVolume: 0, effectiveFrom: '2023-01-01', status: 'Active' },
  { id: 'CM002', franchiseLevel: 'District', type: 'Percentage', rate: 12, condition: 'All Shipments', minVolume: 0, effectiveFrom: '2023-01-01', status: 'Active' },
  { id: 'CM003', franchiseLevel: 'Taluk', type: 'Percentage', rate: 10, condition: 'Prepaid Only', minVolume: 100, effectiveFrom: '2023-06-01', status: 'Active' },
  { id: 'CM004', franchiseLevel: 'Taluk', type: 'Flat', rate: 25, condition: 'COD Shipments', minVolume: 0, effectiveFrom: '2023-06-01', status: 'Active' },
  { id: 'CM005', franchiseLevel: 'State', type: 'Percentage', rate: 18, condition: 'Volume > 500/month', minVolume: 500, effectiveFrom: '2024-01-01', status: 'Active' },
];

export const payoutConfig = {
  frequency: 'Weekly', cutoffDay: 'Sunday', processingDays: 2, minPayout: 500, bankTransferMode: 'NEFT',
};

export const franchiseEarnings = [
  { franchiseId: 'FR001', franchiseName: 'Mumbai Express Logistics', period: 'Aug 2024 W1-W2', totalShipments: 145, grossEarnings: 28500, deductions: 2850, netPayable: 25650, status: 'Settled' },
  { franchiseId: 'FR002', franchiseName: 'Pune Swift Couriers', period: 'Aug 2024 W1-W2', totalShipments: 98, grossEarnings: 17640, deductions: 1764, netPayable: 15876, status: 'Pending' },
  { franchiseId: 'FR003', franchiseName: 'Bangalore Quick Delivery', period: 'Aug 2024 W1-W2', totalShipments: 120, grossEarnings: 22800, deductions: 2280, netPayable: 20520, status: 'Settled' },
  { franchiseId: 'FR004', franchiseName: 'Chennai Metro Logistics', period: 'Aug 2024 W1-W2', totalShipments: 72, grossEarnings: 12960, deductions: 1296, netPayable: 11664, status: 'Pending' },
  { franchiseId: 'FR006', franchiseName: 'Hyderabad Hub Partners', period: 'Aug 2024 W1-W2', totalShipments: 105, grossEarnings: 19950, deductions: 1995, netPayable: 17955, status: 'Settled' },
  { franchiseId: 'FR008', franchiseName: 'Ahmedabad City Couriers', period: 'Aug 2024 W1-W2', totalShipments: 65, grossEarnings: 11700, deductions: 1170, netPayable: 10530, status: 'Pending' },
];
