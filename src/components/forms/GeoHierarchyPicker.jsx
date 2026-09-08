import React, { useEffect, useState } from 'react';
import Select from '../ui/Select';
import {
  getDistrictsByZone,
  getPincodesByTown,
  getStates,
  getTaluksByDistrict,
  getTownsByTaluk,
  getZonesByState,
} from '../../api/api';

const LEVELS = ['state', 'zone', 'district', 'taluk', 'town', 'pincode'];

function unwrap(response) {
  return response?.data ?? response ?? null;
}

function includesLevel(maxLevel, level) {
  return LEVELS.indexOf(level) <= LEVELS.indexOf(maxLevel);
}

export default function GeoHierarchyPicker({ value = {}, onChange, maxLevel = 'town', className = '' }) {
  const [stateId, setStateId] = useState(value.stateId || '');
  const [zoneId, setZoneId] = useState(value.zoneId || '');
  const [districtId, setDistrictId] = useState(value.districtId || '');
  const [talukId, setTalukId] = useState(value.talukId || '');
  const [townId, setTownId] = useState(value.townId || '');
  const [pincodeId, setPincodeId] = useState(value.pincodeId || '');

  const [states, setStates] = useState([]);
  const [zones, setZones] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [taluks, setTaluks] = useState([]);
  const [towns, setTowns] = useState([]);
  const [pincodes, setPincodes] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setStateId(value.stateId || '');
    setZoneId(value.zoneId || '');
    setDistrictId(value.districtId || '');
    setTalukId(value.talukId || '');
    setTownId(value.townId || '');
    setPincodeId(value.pincodeId || '');
  }, [value.stateId, value.zoneId, value.districtId, value.talukId, value.townId, value.pincodeId]);

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getStates()
      .then((response) => mounted && setStates(unwrap(response) || []))
      .catch(() => mounted && setStates([]))
      .finally(() => mounted && setLoading(false));
    return () => { mounted = false; };
  }, []);

  useEffect(() => {
    if (!stateId || !includesLevel(maxLevel, 'zone')) {
      setZones([]);
      return;
    }
    let mounted = true;
    getZonesByState(stateId).then((response) => mounted && setZones(unwrap(response) || [])).catch(() => mounted && setZones([]));
    return () => { mounted = false; };
  }, [stateId, maxLevel]);

  useEffect(() => {
    if (!zoneId || !includesLevel(maxLevel, 'district')) {
      setDistricts([]);
      return;
    }
    let mounted = true;
    getDistrictsByZone(zoneId).then((response) => mounted && setDistricts(unwrap(response) || [])).catch(() => mounted && setDistricts([]));
    return () => { mounted = false; };
  }, [zoneId, maxLevel]);

  useEffect(() => {
    if (!districtId || !includesLevel(maxLevel, 'taluk')) {
      setTaluks([]);
      return;
    }
    let mounted = true;
    getTaluksByDistrict(districtId).then((response) => mounted && setTaluks(unwrap(response) || [])).catch(() => mounted && setTaluks([]));
    return () => { mounted = false; };
  }, [districtId, maxLevel]);

  useEffect(() => {
    if (!talukId || !includesLevel(maxLevel, 'town')) {
      setTowns([]);
      return;
    }
    let mounted = true;
    getTownsByTaluk(talukId).then((response) => mounted && setTowns(unwrap(response) || [])).catch(() => mounted && setTowns([]));
    return () => { mounted = false; };
  }, [talukId, maxLevel]);

  useEffect(() => {
    if (!townId || !includesLevel(maxLevel, 'pincode')) {
      setPincodes([]);
      return;
    }
    let mounted = true;
    getPincodesByTown(townId, 0, 100)
      .then((response) => mounted && setPincodes((unwrap(response)?.content || [])))
      .catch(() => mounted && setPincodes([]));
    return () => { mounted = false; };
  }, [townId, maxLevel]);

  function emit(next) {
    onChange?.({ stateId, zoneId, districtId, talukId, townId, pincodeId, ...next });
  }

  function stateChanged(next) {
    setStateId(next); setZoneId(''); setDistrictId(''); setTalukId(''); setTownId(''); setPincodeId('');
    emit({ stateId: next, zoneId: '', districtId: '', talukId: '', townId: '', pincodeId: '' });
  }

  function zoneChanged(next) {
    setZoneId(next); setDistrictId(''); setTalukId(''); setTownId(''); setPincodeId('');
    emit({ zoneId: next, districtId: '', talukId: '', townId: '', pincodeId: '' });
  }

  function districtChanged(next) {
    setDistrictId(next); setTalukId(''); setTownId(''); setPincodeId('');
    emit({ districtId: next, talukId: '', townId: '', pincodeId: '' });
  }

  function talukChanged(next) {
    setTalukId(next); setTownId(''); setPincodeId('');
    emit({ talukId: next, townId: '', pincodeId: '' });
  }

  function townChanged(next) {
    setTownId(next); setPincodeId('');
    emit({ townId: next, pincodeId: '' });
  }

  function pincodeChanged(next) {
    setPincodeId(next);
    emit({ pincodeId: next });
  }

  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${className}`}>
      <Select label="State" value={stateId} onChange={(event) => stateChanged(event.target.value)} disabled={loading} options={[{ value: '', label: 'Select State' }, ...states.map((item) => ({ value: item.id, label: item.name }))]} />
      {includesLevel(maxLevel, 'zone') && <Select label="Zone" value={zoneId} onChange={(event) => zoneChanged(event.target.value)} disabled={!stateId} options={[{ value: '', label: 'Select Zone' }, ...zones.map((item) => ({ value: item.id, label: item.name }))]} />}
      {includesLevel(maxLevel, 'district') && <Select label="District" value={districtId} onChange={(event) => districtChanged(event.target.value)} disabled={!zoneId} options={[{ value: '', label: 'Select District' }, ...districts.map((item) => ({ value: item.id, label: item.name }))]} />}
      {includesLevel(maxLevel, 'taluk') && <Select label="Taluk" value={talukId} onChange={(event) => talukChanged(event.target.value)} disabled={!districtId} options={[{ value: '', label: 'Select Taluk' }, ...taluks.map((item) => ({ value: item.id, label: item.name }))]} />}
      {includesLevel(maxLevel, 'town') && <Select label="Town" value={townId} onChange={(event) => townChanged(event.target.value)} disabled={!talukId} options={[{ value: '', label: 'Select Town' }, ...towns.map((item) => ({ value: item.id, label: item.name }))]} />}
      {includesLevel(maxLevel, 'pincode') && <Select label="Pincode" value={pincodeId} onChange={(event) => pincodeChanged(event.target.value)} disabled={!townId} options={[{ value: '', label: 'Select Pincode' }, ...pincodes.map((item) => ({ value: item.id, label: item.pincode }))]} />}
    </div>
  );
}
