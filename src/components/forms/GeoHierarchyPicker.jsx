import React, { useState, useEffect } from 'react';
import Select from '../ui/Select';
import { states, zones, districts, taluks, towns } from '../../data/geo';

export default function GeoHierarchyPicker({ 
  value, onChange, maxLevel = 'town', className = '' 
}) {
  const [stateId, setStateId] = useState(value?.stateId || '');
  const [zoneId, setZoneId] = useState(value?.zoneId || '');
  const [districtId, setDistrictId] = useState(value?.districtId || '');
  const [talukId, setTalukId] = useState(value?.talukId || '');
  const [townId, setTownId] = useState(value?.townId || '');

  // Filter options based on selections
  const filteredZones = stateId ? zones.filter(z => z.stateIds.includes(stateId)) : zones;
  const filteredDistricts = districtId ? districts : 
    (zoneId ? districts.filter(d => d.zoneId === zoneId) : 
    (stateId ? districts.filter(d => d.stateId === stateId) : districts));
  const filteredTaluks = districtId ? taluks.filter(t => t.districtId === districtId) : taluks;
  const filteredTowns = talukId ? towns.filter(t => t.talukId === talukId) : towns;

  useEffect(() => {
    onChange?.({ stateId, zoneId, districtId, talukId, townId });
  }, [stateId, zoneId, districtId, talukId, townId]);

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      <Select 
        label="State" 
        value={stateId} 
        onChange={e => { setStateId(e.target.value); setZoneId(''); setDistrictId(''); setTalukId(''); setTownId(''); }}
        options={[{ value: '', label: 'Select State' }, ...states.map(s => ({ value: s.id, label: s.name }))]} 
      />
      
      {['zone', 'district', 'taluk', 'town'].includes(maxLevel) && (
        <Select 
          label="Zone" 
          value={zoneId} 
          onChange={e => { setZoneId(e.target.value); setDistrictId(''); setTalukId(''); setTownId(''); }}
          options={[{ value: '', label: 'Select Zone' }, ...filteredZones.map(z => ({ value: z.id, label: z.name }))]} 
        />
      )}
      
      {['district', 'taluk', 'town'].includes(maxLevel) && (
        <Select 
          label="District" 
          value={districtId} 
          onChange={e => { setDistrictId(e.target.value); setTalukId(''); setTownId(''); }}
          options={[{ value: '', label: 'Select District' }, ...filteredDistricts.map(d => ({ value: d.id, label: d.name }))]} 
        />
      )}
      
      {['taluk', 'town'].includes(maxLevel) && (
        <Select 
          label="Taluk / Area" 
          value={talukId} 
          onChange={e => { setTalukId(e.target.value); setTownId(''); }}
          options={[{ value: '', label: 'Select Taluk' }, ...filteredTaluks.map(t => ({ value: t.id, label: t.name }))]} 
        />
      )}
      
      {maxLevel === 'town' && (
        <Select 
          label="Town / Pincode" 
          value={townId} 
          onChange={e => setTownId(e.target.value)}
          options={[{ value: '', label: 'Select Town' }, ...filteredTowns.map(t => ({ value: t.id, label: `${t.name} (${t.pinCode})` }))]} 
        />
      )}
    </div>
  );
}
