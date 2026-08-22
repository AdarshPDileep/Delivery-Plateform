import React from 'react';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { PORTALS } from '../../utils/constants';

export default function PortalLayout({ children, links, portalKey }) {
  const { user, isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) return <div className="h-screen flex items-center justify-center bg-slate-50"><div className="w-8 h-8 border-4 border-navy-500 border-t-transparent rounded-full animate-spin" /></div>;

  // Protect route
  if (!isAuthenticated || user?.portal !== portalKey) {
    return <Navigate to={`/${portalKey}/login`} state={{ from: location }} replace />;
  }

  const portalConfig = PORTALS[portalKey] || PORTALS.admin;
  
  const colors = {
    navy: 'bg-navy-900',
    purple: 'bg-purple-900',
    teal: 'bg-teal-900'
  };

  const isSeller = portalKey === 'seller';
  const isFranchise = portalKey === 'franchise';

  let sidebarBg = 'bg-[#111111]';
  let activeBg = 'bg-[#E31837]';
  let activeShadow = 'shadow-red-900/20';

  if (isSeller) {
    sidebarBg = 'bg-[#022c22]';
    activeBg = 'bg-[#065f46]';
    activeShadow = 'shadow-emerald-900/20';
  } else if (isFranchise) {
    sidebarBg = 'bg-[#0f172a]';
    activeBg = 'bg-[#1d4ed8]';
    activeShadow = 'shadow-blue-900/20';
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 text-slate-900 font-sans">
      <Sidebar 
        links={links} 
        portalName={portalConfig.name} 
        color={sidebarBg}
        activeColor={activeBg}
        activeShadow={activeShadow}
      />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto no-scrollbar p-6 md:p-8">
          <div className="w-full mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
