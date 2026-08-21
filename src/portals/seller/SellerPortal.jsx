import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from '../../components/layout/PortalLayout';
import SellerDashboard from './pages/SellerDashboard';
import SellerBooking from './pages/SellerBooking';
import SellerPickups from './pages/SellerPickups';
import SellerCod from './pages/SellerCod';
import SellerRto from './pages/SellerRto';
import SellerApi from './pages/SellerApi';
import { 
  LayoutDashboard, PackagePlus, CalendarClock, QrCode, 
  Wallet, RefreshCcw, FileJson
} from 'lucide-react';

const SELLER_LINKS = [
  { label: 'Overview', isDivider: true },
  { label: 'Dashboard', path: '/seller/dashboard', icon: LayoutDashboard },
  
  { label: 'Shipments', isDivider: true },
  { label: 'Book Order', path: '/seller/book', icon: PackagePlus },
  { label: 'Schedule Pickups', path: '/seller/pickups', icon: CalendarClock },
  { label: 'Labels & AWB', path: '/seller/labels', icon: QrCode },
  
  { label: 'Post-Shipment', isDivider: true },
  { label: 'RTO Management', path: '/seller/rto', icon: RefreshCcw },
  { label: 'COD Remittance', path: '/seller/cod', icon: Wallet },
  
  { label: 'Developers', isDivider: true },
  { label: 'API Console', path: '/seller/api', icon: FileJson },
];

export default function SellerPortal() {
  return (
    <PortalLayout links={SELLER_LINKS} portalKey="seller">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<SellerDashboard />} />
        
        <Route path="book" element={<SellerBooking />} />
        <Route path="pickups" element={<SellerPickups />} />
        {/* We can route labels to the same booking page for simplicity in UI, or keep it separated if needed */}
        <Route path="labels" element={<SellerBooking />} />
        
        <Route path="rto" element={<SellerRto />} />
        <Route path="cod" element={<SellerCod />} />
        <Route path="api" element={<SellerApi />} />
      </Routes>
    </PortalLayout>
  );
}
