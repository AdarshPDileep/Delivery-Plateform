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

  return (
    <div className="flex h-screen overflow-hidden bg-slate-50 text-slate-900 font-sans">
      <Sidebar links={links} portalName={portalConfig.name} color={colors[portalConfig.color]} />
      
      <div className="flex-1 flex flex-col h-screen overflow-hidden">
        <Topbar />
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="max-w-7xl mx-auto space-y-6">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
