import React, { useState } from 'react';
import { 
  Plus, Search, Globe, Map as MapIcon, Folder, Navigation, 
  MapPin, CheckCircle2, MoreVertical, Edit, Maximize2, Filter, 
  X, Check, Download, Upload, ChevronLeft, ChevronRight, DownloadCloud
} from 'lucide-react';

// --- MOCK DATA (Hierarchy Tree) ---
const TREE_MOCK_DATA = [
  {
    id: 'kerala', type: 'state', name: 'Kerala', children: [
      {
        id: 'south-zone', type: 'zone', name: 'South Zone', children: [
          {
            id: 'tvm', type: 'district', name: 'Thiruvananthapuram', children: [
              {
                id: 'neyyattinkara-taluk', type: 'taluk', name: 'Neyyattinkara Taluk', children: [
                  {
                    id: 'neyyattinkara-town', type: 'town', name: 'Neyyattinkara Town', children: [
                      { id: '695121', type: 'pincode', name: '695121', serviceable: true },
                      { id: '695122', type: 'pincode', name: '695122', serviceable: true },
                      { id: '695123', type: 'pincode', name: '695123', serviceable: true },
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  }
];

// --- MOCK DATA (Tables) ---
const STATES_DATA = [
  { state: 'Kerala', code: 'KL', zones: 3, districts: 14, towns: 325, pincodes: 1102, serviceable: 985, status: 'Active' },
  { state: 'Tamil Nadu', code: 'TN', zones: 4, districts: 38, towns: 612, pincodes: 2105, serviceable: 1756, status: 'Active' },
  { state: 'Karnataka', code: 'KA', zones: 5, districts: 31, towns: 578, pincodes: 1986, serviceable: 1542, status: 'Active' },
  { state: 'Maharashtra', code: 'MH', zones: 6, districts: 36, towns: 814, pincodes: 2654, serviceable: 2043, status: 'Active' },
  { state: 'Gujarat', code: 'GJ', zones: 3, districts: 26, towns: 407, pincodes: 1287, serviceable: 1001, status: 'Inactive' },
];

const ZONES_DATA = [
  { zone: 'South Zone', code: 'KL-SOUTH', state: 'Kerala', districts: 4, taluks: 27, towns: 184, pincodes: 320, status: 'Active' },
  { zone: 'Central Zone', code: 'KL-CENTRAL', state: 'Kerala', districts: 5, taluks: 31, towns: 96, pincodes: 412, status: 'Active' },
  { zone: 'North Zone', code: 'KL-NORTH', state: 'Kerala', districts: 5, taluks: 30, towns: 45, pincodes: 370, status: 'Inactive' },
];

const DISTRICTS_DATA = [
  { district: 'Thiruvananthapuram', code: 'TVM', state: 'Kerala', zone: 'South Zone', taluks: 3, towns: 57, pincodes: 216, serviceable: 185, status: 'Active' },
  { district: 'Kollam', code: 'KLM', state: 'Kerala', zone: 'South Zone', taluks: 3, towns: 41, pincodes: 164, serviceable: 125, status: 'Active' },
  { district: 'Pathanamthitta', code: 'PTA', state: 'Kerala', zone: 'South Zone', taluks: 2, towns: 31, pincodes: 112, serviceable: 86, status: 'Active' },
  { district: 'Alappuzha', code: 'ALP', state: 'Kerala', zone: 'Central Zone', taluks: 3, towns: 26, pincodes: 106, serviceable: 78, status: 'Active' },
  { district: 'Kottayam', code: 'KTM', state: 'Kerala', zone: 'Central Zone', taluks: 3, towns: 34, pincodes: 125, serviceable: 97, status: 'Active' },
];

const TALUKS_DATA = [
  { taluk: 'Neyyattinkara', district: 'Thiruvananthapuram', zone: 'South Zone', towns: 15, pincodes: 56, serviceable: 46, status: 'Active' },
  { taluk: 'Nedumangad', district: 'Thiruvananthapuram', zone: 'South Zone', towns: 14, pincodes: 54, serviceable: 48, status: 'Active' },
  { taluk: 'Kattakkada', district: 'Thiruvananthapuram', zone: 'South Zone', towns: 12, pincodes: 42, serviceable: 32, status: 'Active' },
  { taluk: 'Varkala', district: 'Kollam', zone: 'South Zone', towns: 13, pincodes: 38, serviceable: 30, status: 'Active' },
  { taluk: 'Chadayamangalam', district: 'Kollam', zone: 'South Zone', towns: 9, pincodes: 31, serviceable: 24, status: 'Active' },
];

const TOWNS_DATA = [
  { town: 'Neyyattinkara', taluk: 'Neyyattinkara', district: 'Thiruvananthapuram', zone: 'South Zone', pincodes: 8, serviceable: 7, status: 'Active' },
  { town: 'Nedumangad', taluk: 'Nedumangad', district: 'Thiruvananthapuram', zone: 'South Zone', pincodes: 6, serviceable: 5, status: 'Active' },
  { town: 'Varkala', taluk: 'Varkala', district: 'Kollam', zone: 'South Zone', pincodes: 5, serviceable: 4, status: 'Active' },
  { town: 'Kayamkulam', taluk: 'Kayamkulam', district: 'Alappuzha', zone: 'Central Zone', pincodes: 7, serviceable: 6, status: 'Active' },
  { town: 'Kanjirappally', taluk: 'Kanjirappally', district: 'Kottayam', zone: 'Central Zone', pincodes: 6, serviceable: 5, status: 'Active' },
];

const PINCODES_DATA = [
  { pincode: '695121', town: 'Neyyattinkara', district: 'Thiruvananthapuram', pickup: true, delivery: true, cod: true, reverse: true, status: 'Serviceable' },
  { pincode: '695122', town: 'Neyyattinkara', district: 'Thiruvananthapuram', pickup: true, delivery: true, cod: true, reverse: false, status: 'Serviceable' },
  { pincode: '695123', town: 'Neyyattinkara', district: 'Thiruvananthapuram', pickup: false, delivery: false, cod: false, reverse: false, status: 'Not Serviceable' },
  { pincode: '695124', town: 'Neyyattinkara', district: 'Thiruvananthapuram', pickup: true, delivery: true, cod: true, reverse: true, status: 'Serviceable' },
  { pincode: '695125', town: 'Neyyattinkara', district: 'Thiruvananthapuram', pickup: true, delivery: true, cod: true, reverse: true, status: 'Serviceable' },
];


const ICONS = { state: Globe, zone: MapIcon, district: Folder, taluk: Navigation, town: MapPin, pincode: MapPin };
const COLORS = { state: 'text-indigo-500', zone: 'text-blue-500', district: 'text-emerald-500', taluk: 'text-amber-500', town: 'text-[#E31837]', pincode: 'text-gray-500' };

const TAB_ITEMS = [
  { id: 'tree', label: 'Hierarchy Tree' },
  { id: 'states', label: 'States' },
  { id: 'zones', label: 'Zones' },
  { id: 'districts', label: 'Districts' },
  { id: 'taluks', label: 'Taluks' },
  { id: 'towns', label: 'Towns' },
  { id: 'pincodes', label: 'Pincodes' },
];

export default function GeoMaster() {
  const [activeTab, setActiveTab] = useState('tree');
  const [activePath, setActivePath] = useState([
    TREE_MOCK_DATA[0], TREE_MOCK_DATA[0].children[0], TREE_MOCK_DATA[0].children[0].children[0]
  ]);

  // Form states
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formType, setFormType] = useState('add_geo'); // 'add_geo', 'edit_geo', 'add_pincode'

  const selectedNode = activePath[activePath.length - 1] || { children: TREE_MOCK_DATA, type: 'root', name: 'India' };
  
  const handlePathClick = (index) => setActivePath(activePath.slice(0, index + 1));
  const handleChildClick = (child) => {
    if (child.type === 'pincode') return;
    setActivePath([...activePath, child]);
  };

  const openForm = (type) => {
    setFormType(type);
    setIsFormOpen(true);
  };

  const closeForm = () => setIsFormOpen(false);

  const getAddButtonText = () => {
    switch(activeTab) {
      case 'states': return 'Add State';
      case 'zones': return 'Add Zone';
      case 'districts': return 'Add District';
      case 'taluks': return 'Add Taluk';
      case 'towns': return 'Add Town';
      case 'pincodes': return 'Add Pincode';
      default: return 'Add Geography';
    }
  };

  const renderStatusBadge = (status) => {
    const isActive = status === 'Active' || status === 'Serviceable';
    return (
      <span className={`px-2.5 py-1 text-xs font-bold rounded ${isActive ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'}`}>
        {status}
      </span>
    );
  };

  const renderBooleanIcon = (val) => {
    return val ? <Check className="w-4 h-4 text-green-500 mx-auto" /> : <X className="w-4 h-4 text-red-500 mx-auto" />;
  };

  const PaginationRow = ({ total, itemName }) => (
    <div className="flex items-center justify-between py-4 mt-2">
      <span className="text-sm text-gray-500 font-medium">Showing 1 to 5 of {total} {itemName}</span>
      <div className="flex items-center gap-2">
        <button className="p-2 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><ChevronLeft className="w-4 h-4" /></button>
        <button className="w-8 h-8 rounded border border-red-200 bg-red-50 text-[#E31837] text-sm font-medium">1</button>
        <button className="w-8 h-8 rounded border border-transparent text-gray-600 hover:bg-gray-50 text-sm font-medium">2</button>
        <button className="w-8 h-8 rounded border border-transparent text-gray-600 hover:bg-gray-50 text-sm font-medium">3</button>
        <span className="text-gray-400">...</span>
        <button className="w-8 h-8 rounded border border-transparent text-gray-600 hover:bg-gray-50 text-sm font-medium">6</button>
        <button className="p-2 border border-gray-200 rounded text-gray-600 hover:bg-gray-50"><ChevronRight className="w-4 h-4" /></button>
        <div className="ml-4 border border-gray-200 rounded px-3 py-1.5 text-sm text-gray-600 flex items-center gap-2 bg-white">
          10 / page <ChevronRight className="w-3 h-3 rotate-90 text-gray-400" />
        </div>
      </div>
    </div>
  );

  const renderTable = () => {
    switch (activeTab) {
      case 'states':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">States (28)</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4 rounded-tl-lg">State</th>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">Zones</th>
                    <th className="py-3 px-4">Districts</th>
                    <th className="py-3 px-4">Towns</th>
                    <th className="py-3 px-4">Pincodes</th>
                    <th className="py-3 px-4">Serviceable Pincodes</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center rounded-tr-lg">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {STATES_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.state}</td>
                      <td className="py-4 px-4 text-gray-600">{row.code}</td>
                      <td className="py-4 px-4 text-gray-600">{row.zones}</td>
                      <td className="py-4 px-4 text-gray-600">{row.districts}</td>
                      <td className="py-4 px-4 text-gray-600">{row.towns}</td>
                      <td className="py-4 px-4 text-gray-600">{row.pincodes.toLocaleString()}</td>
                      <td className="py-4 px-4 text-gray-600">{row.serviceable.toLocaleString()}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('edit_geo')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={28} itemName="states" />
          </div>
        );
      case 'zones':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Zones (3)</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4">Zone Name</th>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">State</th>
                    <th className="py-3 px-4">Districts</th>
                    <th className="py-3 px-4">Taluks</th>
                    <th className="py-3 px-4">Towns</th>
                    <th className="py-3 px-4">Pincodes</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {ZONES_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.zone}</td>
                      <td className="py-4 px-4 text-gray-600">{row.code}</td>
                      <td className="py-4 px-4 text-gray-600">{row.state}</td>
                      <td className="py-4 px-4 text-gray-600">{row.districts}</td>
                      <td className="py-4 px-4 text-gray-600">{row.taluks}</td>
                      <td className="py-4 px-4 text-gray-600">{row.towns}</td>
                      <td className="py-4 px-4 text-gray-600">{row.pincodes}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('edit_geo')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={3} itemName="zones" />
          </div>
        );
      case 'districts':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Districts (14)</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Code</th>
                    <th className="py-3 px-4">State</th>
                    <th className="py-3 px-4">Zone</th>
                    <th className="py-3 px-4">Taluks</th>
                    <th className="py-3 px-4">Towns</th>
                    <th className="py-3 px-4">Pincodes</th>
                    <th className="py-3 px-4">Serviceable</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {DISTRICTS_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.district}</td>
                      <td className="py-4 px-4 text-gray-600">{row.code}</td>
                      <td className="py-4 px-4 text-gray-600">{row.state}</td>
                      <td className="py-4 px-4 text-gray-600">{row.zone}</td>
                      <td className="py-4 px-4 text-gray-600">{row.taluks}</td>
                      <td className="py-4 px-4 text-gray-600">{row.towns}</td>
                      <td className="py-4 px-4 text-gray-600">{row.pincodes}</td>
                      <td className="py-4 px-4 text-gray-600">{row.serviceable}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('edit_geo')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={14} itemName="districts" />
          </div>
        );
      case 'taluks':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Taluks (78)</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4">Taluk</th>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Zone</th>
                    <th className="py-3 px-4">Towns</th>
                    <th className="py-3 px-4">Pincodes</th>
                    <th className="py-3 px-4">Serviceable</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {TALUKS_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.taluk}</td>
                      <td className="py-4 px-4 text-gray-600">{row.district}</td>
                      <td className="py-4 px-4 text-gray-600">{row.zone}</td>
                      <td className="py-4 px-4 text-gray-600">{row.towns}</td>
                      <td className="py-4 px-4 text-gray-600">{row.pincodes}</td>
                      <td className="py-4 px-4 text-gray-600">{row.serviceable}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('edit_geo')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={78} itemName="taluks" />
          </div>
        );
      case 'towns':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Towns (325)</h3>
            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4">Town</th>
                    <th className="py-3 px-4">Taluk</th>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4">Zone</th>
                    <th className="py-3 px-4">Pincodes</th>
                    <th className="py-3 px-4">Serviceable Pincodes</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {TOWNS_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.town}</td>
                      <td className="py-4 px-4 text-gray-600">{row.taluk}</td>
                      <td className="py-4 px-4 text-gray-600">{row.district}</td>
                      <td className="py-4 px-4 text-gray-600">{row.zone}</td>
                      <td className="py-4 px-4 text-gray-600">{row.pincodes}</td>
                      <td className="py-4 px-4 text-gray-600">{row.serviceable}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('edit_geo')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={325} itemName="towns" />
          </div>
        );
      case 'pincodes':
        return (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col min-h-[500px]">
            <div className="flex justify-between items-center mb-6">
               <h3 className="text-lg font-bold text-gray-900">Pincodes (1,102)</h3>
               <div className="flex gap-2">
                 <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50"><Upload className="w-4 h-4"/> Import</button>
                 <button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50"><DownloadCloud className="w-4 h-4"/> Export</button>
               </div>
            </div>
            
            <div className="flex gap-3 mb-6 flex-wrap">
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>State</option></select>
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>Zone</option></select>
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>District</option></select>
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>Taluk</option></select>
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>Town</option></select>
               <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 bg-white"><option>Serviceability</option></select>
            </div>

            <div className="overflow-x-auto flex-1">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="border-b-2 border-gray-100 text-gray-900 font-bold bg-gray-50/50">
                    <th className="py-3 px-4">Pincode</th>
                    <th className="py-3 px-4">Town</th>
                    <th className="py-3 px-4">District</th>
                    <th className="py-3 px-4 text-center">Pickup</th>
                    <th className="py-3 px-4 text-center">Delivery</th>
                    <th className="py-3 px-4 text-center">COD</th>
                    <th className="py-3 px-4 text-center">Reverse Pickup</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {PINCODES_DATA.map((row, i) => (
                    <tr key={i} className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-4 font-semibold text-gray-900">{row.pincode}</td>
                      <td className="py-4 px-4 text-gray-600">{row.town}</td>
                      <td className="py-4 px-4 text-gray-600">{row.district}</td>
                      <td className="py-4 px-4 text-center">{renderBooleanIcon(row.pickup)}</td>
                      <td className="py-4 px-4 text-center">{renderBooleanIcon(row.delivery)}</td>
                      <td className="py-4 px-4 text-center">{renderBooleanIcon(row.cod)}</td>
                      <td className="py-4 px-4 text-center">{renderBooleanIcon(row.reverse)}</td>
                      <td className="py-4 px-4 text-center">{renderStatusBadge(row.status)}</td>
                      <td className="py-4 px-4 text-center">
                        <button className="text-gray-400 hover:text-[#E31837]" onClick={() => openForm('add_pincode')}><MoreVertical className="w-4 h-4 mx-auto" /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <PaginationRow total={1102} itemName="pincodes" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-8 w-full mx-auto animate-fade-in bg-gray-50 min-h-screen font-sans">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Geography Management</h1>
          <p className="text-gray-500 text-sm">Configure the 5-level geographic network hierarchy.</p>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input 
              type="text" 
              placeholder={`Search ${activeTab === 'tree' ? 'pincode or area' : activeTab}...`} 
              className="pl-9 pr-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent w-72 shadow-sm"
            />
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-200 text-gray-700 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors shadow-sm">
             <Filter className="w-4 h-4" /> Filters
          </button>
          <button 
            className="flex items-center gap-2 bg-[#E31837] text-white px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors shadow-md"
            onClick={() => openForm(activeTab === 'pincodes' ? 'add_pincode' : 'add_geo')}
          >
            <Plus className="w-4 h-4" /> {getAddButtonText()}
          </button>
        </div>
      </div>

      {/* Summary Cards - Always visible */}
      <div className="grid grid-cols-5 gap-4 mb-8">
          {[
            { label: 'States', value: '28', icon: Globe, color: 'text-[#E31837]', bg: 'bg-red-50' },
            { label: 'Zones', value: '72', icon: MapIcon, color: 'text-blue-500', bg: 'bg-blue-50' },
            { label: 'Districts', value: '687', icon: Folder, color: 'text-emerald-500', bg: 'bg-emerald-50' },
            { label: 'Towns', value: '3,842', icon: MapPin, color: 'text-purple-500', bg: 'bg-purple-50' },
            { label: 'Serviceable Pincodes', value: '1,25,673', icon: CheckCircle2, color: 'text-amber-500', bg: 'bg-amber-50' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm flex items-center gap-4">
              <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-xs text-gray-400 mt-1">Total {stat.label.toLowerCase()}</p>
              </div>
            </div>
          ))}
        </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        {TAB_ITEMS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab.id 
                ? 'border-[#E31837] text-[#E31837]' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Content Area */}
      {activeTab === 'tree' ? (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex flex-col h-[700px]">
          {/* ... (Previous Tree Implementation) ... */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">Geographic Network</h2>
            <button className="flex items-center gap-2 text-sm font-medium text-[#E31837] hover:underline">
              Expand All <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <div className="flex-1 grid grid-cols-1 md:grid-cols-12 gap-6 min-h-0">
            {/* Column 1: Hierarchy Explorer */}
            <div className="md:col-span-3 border-r border-gray-100 md:pr-6 flex flex-col h-full overflow-y-auto">
              <h3 className="text-sm font-bold text-gray-900 mb-1">Hierarchy Explorer</h3>
              <p className="text-xs text-gray-500 mb-6">Navigate through the geographic hierarchy</p>
              
              <div className="space-y-4 relative">
                <div className="absolute left-6 top-6 bottom-6 w-px bg-gray-200 z-0 hidden lg:block"></div>
                {activePath.map((node, index) => {
                  const NodeIcon = ICONS[node.type];
                  const isActive = index === activePath.length - 1;
                  return (
                    <div 
                      key={node.id} 
                      className={`relative z-10 flex items-center justify-between p-3 rounded-lg border cursor-pointer transition-all ${isActive ? 'border-red-200 bg-red-50 shadow-sm' : 'border-gray-100 bg-white hover:border-gray-200 hover:bg-gray-50'}`}
                      onClick={() => handlePathClick(index)}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-md bg-white border ${isActive ? 'border-red-100' : 'border-gray-100'}`}>
                           <NodeIcon className={`w-4 h-4 ${COLORS[node.type]}`} />
                        </div>
                        <span className={`font-semibold text-sm ${isActive ? 'text-gray-900' : 'text-gray-700'}`}>{node.name}</span>
                      </div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 bg-white px-2 py-0.5 rounded border border-gray-100">{node.type}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Column 2: Child Nodes */}
            <div className="md:col-span-4 border-r border-gray-100 md:px-6 flex flex-col h-full overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Child {selectedNode.type === 'town' ? 'Pincodes' : 'Regions'} <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full ml-2">{selectedNode.children?.length || 0}</span></h3>
                  <p className="text-xs text-gray-500 mt-1">Under {selectedNode.name}</p>
                </div>
                <div className="flex gap-2">
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><Search className="w-4 h-4" /></button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><Filter className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="space-y-3 pb-6">
                {selectedNode.children && selectedNode.children.map((child, index) => (
                  <div 
                    key={child.id} 
                    className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-lg hover:border-gray-300 hover:shadow-sm cursor-pointer transition-all"
                    onClick={() => handleChildClick(child)}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xs font-medium text-gray-400 w-4">{index + 1}</span>
                      <span className="font-semibold text-sm text-gray-800">{child.name}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      {child.serviceable !== false ? (
                        <div className="flex items-center gap-1 bg-green-50 text-green-600 px-2 py-1 rounded text-xs font-medium"><CheckCircle2 className="w-3 h-3" /> Serviceable</div>
                      ) : (
                        <div className="flex items-center gap-1 bg-red-50 text-red-600 px-2 py-1 rounded text-xs font-medium"><CheckCircle2 className="w-3 h-3" /> Unserviceable</div>
                      )}
                      <button className="text-gray-400 hover:text-gray-600 p-1" onClick={(e) => { e.stopPropagation(); openForm('edit_geo'); }}><MoreVertical className="w-4 h-4" /></button>
                    </div>
                  </div>
                ))}
                {(!selectedNode.children || selectedNode.children.length === 0) && (
                  <div className="text-center py-12"><p className="text-sm text-gray-500">No child items found.</p></div>
                )}
              </div>
            </div>

            {/* Column 3: Node Details */}
            <div className="md:col-span-5 md:pl-6 flex flex-col h-full overflow-y-auto">
              <div className="flex items-start justify-between mb-8">
                <div className="flex items-center gap-3">
                   <div className={`p-2.5 rounded-lg bg-red-50`}>{React.createElement(ICONS[selectedNode.type] || Globe, { className: `w-6 h-6 text-[#E31837]` })}</div>
                   <div>
                     <div className="flex items-center gap-2">
                       <h2 className="text-lg font-bold text-gray-900">{selectedNode.name}</h2>
                       <span className="text-[10px] uppercase font-bold text-[#E31837] bg-red-50 border border-red-100 px-2 py-0.5 rounded">{selectedNode.type}</span>
                     </div>
                     <p className="text-xs text-gray-500 mt-1">Overview & Status</p>
                   </div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => openForm('edit_geo')} className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded text-sm font-medium text-gray-600 hover:bg-gray-50 transition-colors">
                    <Edit className="w-3.5 h-3.5" /> Edit
                  </button>
                  <button onClick={() => openForm(selectedNode.type === 'town' ? 'add_pincode' : 'add_geo')} className="flex items-center gap-1.5 px-3 py-1.5 bg-[#E31837] text-white rounded text-sm font-medium hover:bg-red-600 transition-colors shadow-sm">
                    {selectedNode.type === 'town' ? 'Add Pincode' : 'Add Child'}
                  </button>
                  <button className="p-1.5 border border-gray-200 rounded text-gray-400 hover:bg-gray-50"><MoreVertical className="w-4 h-4" /></button>
                </div>
              </div>

              {/* Hierarchy Table */}
              <div className="mb-8 border-b border-gray-100 pb-8">
                 <table className="w-full text-sm">
                   <tbody>
                     {activePath.map((node) => (
                       <tr key={node.id} className="border-b border-gray-50 last:border-0">
                         <td className="py-2.5 text-gray-500 capitalize w-32">{node.type}</td>
                         <td className="py-2.5 font-medium text-gray-900">{node.name}</td>
                       </tr>
                     ))}
                   </tbody>
                 </table>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="border border-gray-100 rounded-lg p-4 flex items-center gap-4 bg-gray-50/50">
                  <div className="bg-purple-100 p-2.5 rounded-lg text-purple-600"><MapPin className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Total {selectedNode.type === 'town' ? 'Pincodes' : 'Children'}</p>
                    <p className="text-xl font-bold text-gray-900 mt-0.5">{selectedNode.children?.length || 0}</p>
                    <p className="text-[10px] text-gray-400 mt-1 uppercase tracking-wider">Under this {selectedNode.type}</p>
                  </div>
                </div>
                <div className="border border-green-100 rounded-lg p-4 flex items-center gap-4 bg-green-50/30">
                  <div className="bg-green-100 p-2.5 rounded-lg text-green-600"><CheckCircle2 className="w-5 h-5" /></div>
                  <div>
                    <p className="text-xs text-gray-500 font-medium">Serviceable {selectedNode.type === 'town' ? 'Pincodes' : 'Children'}</p>
                    <p className="text-xl font-bold text-gray-900 mt-0.5">{selectedNode.children?.filter(c => c.serviceable !== false).length || 0}</p>
                    <p className="text-[10px] text-green-600 mt-1 uppercase tracking-wider font-bold">
                       {selectedNode.children?.length ? Math.round((selectedNode.children.filter(c => c.serviceable !== false).length / selectedNode.children.length) * 100) : 0}% Serviceable
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        renderTable()
      )}

      {/* Forms Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
           <div className="w-[450px] bg-white h-full shadow-2xl flex flex-col animate-slide-in-right">
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div>
                  <h2 className="text-xl font-bold text-gray-900">
                    {formType === 'add_geo' ? 'Add Geography' : formType === 'edit_geo' ? 'Edit Geography' : 'Add Pincode'}
                  </h2>
                  <p className="text-sm text-gray-500 mt-1">
                    {formType === 'add_geo' ? 'Add a new location to your geographic network.' : 
                     formType === 'edit_geo' ? 'Update the location details.' : 'Add a new pincode to the selected location.'}
                  </p>
                </div>
                <button onClick={closeForm} className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg"><X className="w-5 h-5" /></button>
              </div>

              <div className="p-6 flex-1 overflow-y-auto space-y-5">
                 {formType !== 'add_pincode' ? (
                   <>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Geography Type <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white">
                         <option>Town</option>
                         <option>Taluk</option>
                         <option>District</option>
                         <option>Zone</option>
                         <option>State</option>
                       </select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">State <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white"><option>Kerala</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Zone <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white"><option>South Zone</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">District <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white"><option>Thiruvananthapuram</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Taluk <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white"><option>Neyyattinkara Taluk</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Town Name <span className="text-red-500">*</span></label>
                       <input type="text" defaultValue={formType === 'edit_geo' ? 'Neyyattinkara Town' : ''} placeholder="Enter town name" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent" />
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Town Code</label>
                       <input type="text" defaultValue={formType === 'edit_geo' ? 'NYT-TOWN' : ''} placeholder="Enter town code" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent" />
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Status</label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] focus:border-transparent bg-white">
                         <option>Active</option>
                         <option>Inactive</option>
                       </select>
                     </div>
                   </>
                 ) : (
                   <>
                     <div className="flex gap-4">
                       <div className="space-y-1.5 flex-1">
                         <label className="text-xs font-bold text-gray-700">State <span className="text-red-500">*</span></label>
                         <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white"><option>Kerala</option></select>
                       </div>
                       <div className="space-y-1.5 flex-1">
                         <label className="text-xs font-bold text-gray-700">Zone <span className="text-red-500">*</span></label>
                         <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white"><option>South Zone</option></select>
                       </div>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Taluk <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white"><option>Neyyattinkara Taluk</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Town <span className="text-red-500">*</span></label>
                       <select className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837] bg-white"><option>Neyyattinkara Town</option></select>
                     </div>
                     <div className="space-y-1.5">
                       <label className="text-xs font-bold text-gray-700">Pincode <span className="text-red-500">*</span></label>
                       <input type="text" placeholder="Enter pincode" className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#E31837]" />
                     </div>

                     <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Serviceability</h4>
                        <div className="space-y-3">
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">Serviceable</span></label>
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">Pickup Available</span></label>
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">Delivery Available</span></label>
                        </div>
                     </div>
                     
                     <div className="pt-4 border-t border-gray-100">
                        <h4 className="text-sm font-bold text-gray-900 mb-3">Additional Services</h4>
                        <div className="space-y-3">
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">COD Available</span></label>
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">Prepaid Available</span></label>
                           <label className="flex items-center gap-3"><input type="checkbox" defaultChecked className="w-4 h-4 rounded text-[#E31837] focus:ring-[#E31837] border-gray-300" /><span className="text-sm font-medium text-gray-700">Reverse Pickup</span></label>
                        </div>
                     </div>
                   </>
                 )}
              </div>
              
              <div className="p-6 border-t border-gray-100 flex items-center justify-end gap-3 bg-gray-50/50">
                 <button onClick={closeForm} className="px-5 py-2.5 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-white transition-colors text-sm">Cancel</button>
                 <button className="px-5 py-2.5 bg-[#E31837] text-white font-medium rounded-lg hover:bg-red-700 transition-colors shadow-md text-sm">
                   {formType === 'edit_geo' ? 'Save Changes' : formType === 'add_geo' ? 'Add Geography' : 'Add Pincode'}
                 </button>
              </div>
           </div>
        </div>
      )}

    </div>
  );
}
