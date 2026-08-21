import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import PortalLayout from '../../components/layout/PortalLayout';
import FranchiseDashboard from './pages/FranchiseDashboard';
import ConsignmentEntry from './pages/ConsignmentEntry';
import FranchiseNetwork from './pages/FranchiseNetwork';
import PickupRequests from './pages/PickupRequests';
import Manifests from './pages/Manifests';
import AgentAssignments from './pages/AgentAssignments';
import FranchiseCod from './pages/FranchiseCod';
import FranchiseEarnings from './pages/FranchiseEarnings';
import AgentMaster from '../admin/pages/AgentMaster'; 
import ReportsMaster from '../admin/pages/ReportsMaster';
import TicketDesk from '../admin/pages/TicketDesk';

import { 
  LayoutDashboard, Map, Package, ShoppingBag, Truck, MapPin, 
  Wallet, Percent, BarChart3, Users, LifeBuoy
} from 'lucide-react';

const FRANCHISE_LINKS = [
  { label: 'Overview', isDivider: true },
  { label: 'Dashboard', path: '/franchise/dashboard', icon: LayoutDashboard },
  
  { label: 'Operations', isDivider: true },
  { label: 'Network & Sub-agents', path: '/franchise/network', icon: Map },
  { label: 'Walk-in Booking', path: '/franchise/booking', icon: Package },
  { label: 'Pickup Requests', path: '/franchise/pickups', icon: ShoppingBag },
  { label: 'Manifests (In/Out)', path: '/franchise/manifests', icon: Truck },
  
  { label: 'Last Mile', isDivider: true },
  { label: 'Agent Assignments', path: '/franchise/assignments', icon: MapPin },
  { label: 'Delivery Personnel', path: '/franchise/agents', icon: Users },
  
  { label: 'Finance & Earnings', isDivider: true },
  { label: 'COD Remittance', path: '/franchise/cod', icon: Wallet },
  { label: 'Earnings & Commission', path: '/franchise/earnings', icon: Percent },
  
  { label: 'System', isDivider: true },
  { label: 'Reports', path: '/franchise/reports', icon: BarChart3 },
  { label: 'Help & Support', path: '/franchise/support', icon: LifeBuoy },
];

export default function FranchisePortal() {
  return (
    <PortalLayout links={FRANCHISE_LINKS} portalKey="franchise">
      <Routes>
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<FranchiseDashboard />} />
        <Route path="network" element={<FranchiseNetwork />} />
        <Route path="booking" element={<ConsignmentEntry />} />
        <Route path="pickups" element={<PickupRequests />} />
        <Route path="manifests" element={<Manifests />} />
        <Route path="assignments" element={<AgentAssignments />} />
        
        {/* Reuse Admin components where the logic is purely list/view based. In a real app, these would fetch franchise-specific data via API */}
        <Route path="agents" element={<AgentMaster />} />
        
        <Route path="cod" element={<FranchiseCod />} />
        <Route path="earnings" element={<FranchiseEarnings />} />
        
        {/* Reuse Admin components with specific data filters in real implementation */}
        <Route path="reports" element={<ReportsMaster />} />
        <Route path="support" element={<TicketDesk />} />
      </Routes>
    </PortalLayout>
  );
}
