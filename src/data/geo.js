// ===== Geographical Hierarchy Mock Data =====
export const states = [
  { id: 'ST001', name: 'Maharashtra', code: 'MH' },
  { id: 'ST002', name: 'Karnataka', code: 'KA' },
  { id: 'ST003', name: 'Tamil Nadu', code: 'TN' },
  { id: 'ST004', name: 'Delhi', code: 'DL' },
  { id: 'ST005', name: 'Telangana', code: 'TS' },
  { id: 'ST006', name: 'West Bengal', code: 'WB' },
  { id: 'ST007', name: 'Gujarat', code: 'GJ' },
];

export const zones = [
  { id: 'ZN001', name: 'West Zone', stateIds: ['ST001', 'ST007'] },
  { id: 'ZN002', name: 'South Zone', stateIds: ['ST002', 'ST003', 'ST005'] },
  { id: 'ZN003', name: 'North Zone', stateIds: ['ST004'] },
  { id: 'ZN004', name: 'East Zone', stateIds: ['ST006'] },
];

export const districts = [
  { id: 'DT001', name: 'Mumbai', stateId: 'ST001', zoneId: 'ZN001' },
  { id: 'DT002', name: 'Pune', stateId: 'ST001', zoneId: 'ZN001' },
  { id: 'DT003', name: 'Bangalore Urban', stateId: 'ST002', zoneId: 'ZN002' },
  { id: 'DT004', name: 'Chennai', stateId: 'ST003', zoneId: 'ZN002' },
  { id: 'DT005', name: 'New Delhi', stateId: 'ST004', zoneId: 'ZN003' },
  { id: 'DT006', name: 'Hyderabad', stateId: 'ST005', zoneId: 'ZN002' },
  { id: 'DT007', name: 'Kolkata', stateId: 'ST006', zoneId: 'ZN004' },
  { id: 'DT008', name: 'Ahmedabad', stateId: 'ST007', zoneId: 'ZN001' },
  { id: 'DT009', name: 'Nagpur', stateId: 'ST001', zoneId: 'ZN001' },
  { id: 'DT010', name: 'Mysore', stateId: 'ST002', zoneId: 'ZN002' },
];

export const taluks = [
  { id: 'TK001', name: 'Andheri', districtId: 'DT001' },
  { id: 'TK002', name: 'Bandra', districtId: 'DT001' },
  { id: 'TK003', name: 'Hinjewadi', districtId: 'DT002' },
  { id: 'TK004', name: 'Koramangala', districtId: 'DT003' },
  { id: 'TK005', name: 'Whitefield', districtId: 'DT003' },
  { id: 'TK006', name: 'T Nagar', districtId: 'DT004' },
  { id: 'TK007', name: 'Connaught Place', districtId: 'DT005' },
  { id: 'TK008', name: 'Banjara Hills', districtId: 'DT006' },
  { id: 'TK009', name: 'Salt Lake', districtId: 'DT007' },
  { id: 'TK010', name: 'SG Highway', districtId: 'DT008' },
  { id: 'TK011', name: 'Borivali', districtId: 'DT001' },
  { id: 'TK012', name: 'Kothrud', districtId: 'DT002' },
];

export const towns = [
  { id: 'TW001', name: 'Andheri West', talukId: 'TK001', pinCode: '400053' },
  { id: 'TW002', name: 'Andheri East', talukId: 'TK001', pinCode: '400069' },
  { id: 'TW003', name: 'Bandra West', talukId: 'TK002', pinCode: '400050' },
  { id: 'TW004', name: 'Hinjewadi Phase 1', talukId: 'TK003', pinCode: '411057' },
  { id: 'TW005', name: 'Koramangala 1st Block', talukId: 'TK004', pinCode: '560034' },
  { id: 'TW006', name: 'Whitefield Main', talukId: 'TK005', pinCode: '560066' },
  { id: 'TW007', name: 'T Nagar Main', talukId: 'TK006', pinCode: '600017' },
  { id: 'TW008', name: 'CP Inner Circle', talukId: 'TK007', pinCode: '110001' },
  { id: 'TW009', name: 'Banjara Hills Road 1', talukId: 'TK008', pinCode: '500034' },
  { id: 'TW010', name: 'Salt Lake Sector V', talukId: 'TK009', pinCode: '700091' },
  { id: 'TW011', name: 'SG Highway Bodakdev', talukId: 'TK010', pinCode: '380054' },
  { id: 'TW012', name: 'Borivali West', talukId: 'TK011', pinCode: '400092' },
  { id: 'TW013', name: 'Kothrud Paud Road', talukId: 'TK012', pinCode: '411038' },
];

export const pinCodes = towns.map(t => ({
  pinCode: t.pinCode,
  townId: t.id,
  townName: t.name,
  serviceable: true,
}));

// Helper: get full geo path for a town
export function getGeoPath(townId) {
  const town = towns.find(t => t.id === townId);
  if (!town) return null;
  const taluk = taluks.find(t => t.id === town.talukId);
  const district = districts.find(d => d.id === taluk?.districtId);
  const state = states.find(s => s.id === district?.stateId);
  const zone = zones.find(z => z.id === district?.zoneId);
  return { state, zone, district, taluk, town };
}
