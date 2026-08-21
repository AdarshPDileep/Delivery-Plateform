import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from '../../components/layout/PortalLayout';
import AdminDashboard from './pages/AdminDashboard';
import GeoMaster from './pages/GeoMaster';
import FranchiseMaster from './pages/FranchiseMaster';
import RateCardMaster from './pages/RateCardMaster';
import CommissionsMaster from './pages/CommissionsMaster';
import SellerMaster from './pages/SellerMaster';
import ShipmentControl from './pages/ShipmentControl';
import HubMaster from './pages/HubMaster';
import AgentMaster from './pages/AgentMaster';
import CodSettlement from './pages/CodSettlement';
import ReportsMaster from './pages/ReportsMaster';
import UserMaster from './pages/UserMaster';
import NotificationMaster from './pages/NotificationMaster';
import SystemMasters from './pages/SystemMasters';
import AuditLog from './pages/AuditLog';
import TicketDesk from './pages/TicketDesk';
import { 
  LayoutDashboard, Map, Store, FileText, Percent, Users, Package, 
  Share2, Contact2, Wallet, BarChart3, Shield, Bell, Settings, 
  History, LifeBuoy
} from 'lucide-react';

const ADMIN_LINKS = [
  { label: 'Overview', isDivider: true },
  { label: 'Dashboard', path: '/admin/dashboard', icon: LayoutDashboard },
  
  { label: 'Network & Hierarchy', isDivider: true },
  { label: 'Geo Master', path: '/admin/geo', icon: Map },
  { label: 'Hubs & Routes', path: '/admin/hubs', icon: Share2 },
  
  { label: 'Partners & Clients', isDivider: true },
  { label: 'Franchises', path: '/admin/franchises', icon: Store },
  { label: 'Sellers', path: '/admin/sellers', icon: Users },
  { label: 'Delivery Agents', path: '/admin/agents', icon: Contact2 },
  
  { label: 'Operations', isDivider: true },
  { label: 'Shipments', path: '/admin/shipments', icon: Package },
  { label: 'Support Tickets', path: '/admin/tickets', icon: LifeBuoy },
  
  { label: 'Finance & Billing', isDivider: true },
  { label: 'Rate Cards', path: '/admin/rate-cards', icon: FileText },
  { label: 'Commissions', path: '/admin/commissions', icon: Percent },
  { label: 'COD Settlement', path: '/admin/cod', icon: Wallet },
  
  { label: 'System', isDivider: true },
  { label: 'Reports', path: '/admin/reports', icon: BarChart3 },
  { label: 'Users & Roles', path: '/admin/users', icon: Shield },
  { label: 'Notifications', path: '/admin/notifications', icon: Bell },
  { label: 'Masters Config', path: '/admin/masters', icon: Settings },
  { label: 'Audit Log', path: '/admin/audit', icon: History },
];

export default function AdminPortal() {
  return (
    <PortalLayout links={ADMIN_LINKS} portalKey="admin">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="geo" element={<GeoMaster />} />
        <Route path="franchises" element={<FranchiseMaster />} />
        <Route path="rate-cards" element={<RateCardMaster />} />
        <Route path="commissions" element={<CommissionsMaster />} />
        <Route path="sellers" element={<SellerMaster />} />
        <Route path="shipments" element={<ShipmentControl />} />
        <Route path="hubs" element={<HubMaster />} />
        <Route path="agents" element={<AgentMaster />} />
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
