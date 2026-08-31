import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from '../../components/layout/PortalLayout';
import AdminDashboard from './pages/AdminDashboard';
import GeoMaster from './pages/GeoMaster';
import RateCardMaster from './pages/RateCardMaster';
import CommissionsMaster from './pages/CommissionsMaster';
import SellerMaster from './pages/SellerMaster';
import ManageSeller from './pages/ManageSeller';
import EditSeller from './pages/EditSeller';
import ShipmentControl from './pages/ShipmentControl';
import PickupManifestControl from './pages/PickupManifestControl';
import HubMaster from './pages/HubMaster';
import FranchiseMaster from './pages/FranchiseMaster';
import CodSettlement from './pages/CodSettlement';
import ReportsMaster from './pages/ReportsMaster';
import UserMaster from './pages/UserMaster';
import NotificationMaster from './pages/NotificationMaster';
import SystemMasters from './pages/SystemMasters';
import AuditLog from './pages/AuditLog';
import TicketDesk from './pages/TicketDesk';
import { 
  LayoutDashboard, Map, FileText, Percent, Users, Package, 
  Share2, Contact2, Wallet, BarChart3, Shield, Bell, Settings, 
  History, LifeBuoy, Truck, Store
} from 'lucide-react';

const ADMIN_LINKS = [
  { label: 'Overview', isDivider: true },
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  
  { label: 'Network Management', isDivider: true },
  { label: 'Geography', path: '/admin/geo', icon: Map },
  { label: 'Hubs & Branches', path: '/admin/hubs', icon: Share2 },
  
  { label: 'Seller Management', isDivider: true },
  { label: 'All Sellers', path: '/admin/sellers', icon: Users },
  
  { label: 'Shipment Management', isDivider: true },
  { label: 'All Shipments', path: '/admin/shipments', icon: Package },
  
  { label: 'Operations', isDivider: true },
  { label: 'Pickups & Manifests', path: '/admin/operations', icon: Truck },
  
  { label: 'Franchise Management', isDivider: true },
  { label: 'All Franchises', path: '/admin/franchises', icon: Store },
  
  { label: 'Pricing', isDivider: true },
  { label: 'Rate Cards', path: '/admin/rate-cards', icon: FileText },
  
  { label: 'Commission', isDivider: true },
  { label: 'Commission Rules', path: '/admin/commissions', icon: Percent },
  
  { label: 'Finance', isDivider: true },
  { label: 'COD & Settlements', path: '/admin/cod', icon: Wallet },
  
  { label: 'System', isDivider: true },
  { label: 'Reports', path: '/admin/reports', icon: BarChart3 },
  { label: 'Support', path: '/admin/tickets', icon: LifeBuoy },
  { label: 'Notifications', path: '/admin/notifications', icon: Bell },
  { label: 'Users & Roles', path: '/admin/users', icon: Shield },
  { label: 'Masters', path: '/admin/masters', icon: Settings },
  { label: 'Audit Logs', path: '/admin/audit', icon: History },
];

export default function AdminPortal() {
  return (
    <PortalLayout links={ADMIN_LINKS} portalKey="admin">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="geo" element={<GeoMaster />} />
        <Route path="rate-cards" element={<RateCardMaster />} />
        <Route path="commissions" element={<CommissionsMaster />} />
        <Route path="sellers" element={<SellerMaster />} />
        <Route path="sellers/:id" element={<ManageSeller />} />
        <Route path="sellers/:id/edit" element={<EditSeller />} />
        <Route path="shipments" element={<ShipmentControl />} />
        <Route path="operations" element={<PickupManifestControl />} />
        <Route path="hubs" element={<HubMaster />} />
        <Route path="franchises" element={<FranchiseMaster />} />
        <Route path="cod" element={<CodSettlement />} />
        <Route path="reports" element={<ReportsMaster />} />
        <Route path="users" element={<UserMaster />} />
        <Route path="notifications" element={<NotificationMaster />} />
        <Route path="masters" element={<SystemMasters />} />
        <Route path="audit" element={<AuditLog />} />
        <Route path="tickets" element={<TicketDesk />} />
      </Routes>
    </PortalLayout>
  );
}
