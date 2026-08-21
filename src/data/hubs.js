export const hubs = [
  { id: 'HB001', name: 'Mumbai Central Hub', type: 'Hub', address: 'Andheri MIDC, Mumbai', stateId: 'ST001', districtId: 'DT001', capacity: 5000, franchiseId: null, managerId: 'US002', status: 'Active', createdAt: '2023-01-15' },
  { id: 'HB002', name: 'Pune Branch', type: 'Branch', address: 'Hinjewadi Phase 2, Pune', stateId: 'ST001', districtId: 'DT002', capacity: 2000, franchiseId: 'FR002', managerId: null, status: 'Active', createdAt: '2023-04-10' },
  { id: 'HB003', name: 'Bangalore Sorting Center', type: 'Sorting Center', address: 'Electronic City, Bangalore', stateId: 'ST002', districtId: 'DT003', capacity: 4000, franchiseId: null, managerId: 'US002', status: 'Active', createdAt: '2023-02-20' },
  { id: 'HB004', name: 'Delhi North Hub', type: 'Hub', address: 'Karol Bagh, Delhi', stateId: 'ST004', districtId: 'DT005', capacity: 3500, franchiseId: null, managerId: null, status: 'Active', createdAt: '2023-03-01' },
  { id: 'HB005', name: 'Hyderabad DC', type: 'Delivery Center', address: 'Madhapur, Hyderabad', stateId: 'ST005', districtId: 'DT006', capacity: 1500, franchiseId: 'FR006', managerId: null, status: 'Active', createdAt: '2023-08-15' },
  { id: 'HB006', name: 'Chennai Branch', type: 'Branch', address: 'Guindy, Chennai', stateId: 'ST003', districtId: 'DT004', capacity: 1800, franchiseId: 'FR004', managerId: null, status: 'Active', createdAt: '2024-01-20' },
];

export const routes = [
  { id: 'RT001', origin: 'HB001', destination: 'HB003', transitTime: '18 hours', vehicleType: 'Truck', distance: '980 km', frequency: 'Daily' },
  { id: 'RT002', origin: 'HB001', destination: 'HB004', transitTime: '24 hours', vehicleType: 'Truck', distance: '1400 km', frequency: 'Daily' },
  { id: 'RT003', origin: 'HB001', destination: 'HB002', transitTime: '4 hours', vehicleType: 'Van', distance: '150 km', frequency: 'Twice Daily' },
  { id: 'RT004', origin: 'HB003', destination: 'HB005', transitTime: '8 hours', vehicleType: 'Van', distance: '570 km', frequency: 'Daily' },
  { id: 'RT005', origin: 'HB003', destination: 'HB006', transitTime: '6 hours', vehicleType: 'Truck', distance: '350 km', frequency: 'Daily' },
  { id: 'RT006', origin: 'HB004', destination: 'HB005', transitTime: '20 hours', vehicleType: 'Truck', distance: '1500 km', frequency: '3x/week' },
];

export const tatRules = [
  { serviceType: 'Standard', originZone: 'ZN001', destZone: 'ZN001', maxHours: 48 },
  { serviceType: 'Standard', originZone: 'ZN001', destZone: 'ZN002', maxHours: 96 },
  { serviceType: 'Standard', originZone: 'ZN001', destZone: 'ZN003', maxHours: 72 },
  { serviceType: 'Express', originZone: 'ZN001', destZone: 'ZN001', maxHours: 24 },
  { serviceType: 'Express', originZone: 'ZN001', destZone: 'ZN002', maxHours: 48 },
  { serviceType: 'Next-Day', originZone: 'ZN001', destZone: 'ZN001', maxHours: 24 },
  { serviceType: 'Same-Day', originZone: 'ZN001', destZone: 'ZN001', maxHours: 12 },
];
