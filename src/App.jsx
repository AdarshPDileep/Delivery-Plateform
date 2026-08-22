import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ToastProvider } from './context/ToastContext';

// Portals
import AdminPortal from './portals/admin/AdminPortal';
import AdminLogin from './portals/admin/pages/AdminLogin';
import FranchisePortal from './portals/franchise/FranchisePortal';
import FranchiseLogin from './portals/franchise/pages/FranchiseLogin';

// Public Pages (to be updated later)
import Home from './pages/Home';
import TrackShipment from './pages/TrackShipment';
import ServiceDetails from './pages/ServiceDetails';
import SolutionDetails from './pages/SolutionDetails';
import PartnerDetails from './pages/PartnerDetails';
import CompanyDetails from './pages/CompanyDetails';

// Auth Pages
import LoginSelection from './pages/auth/LoginSelection';
import SellerSignup from './pages/auth/SellerSignup';

import SellerPortal from './portals/seller/SellerPortal';
import SellerLogin from './portals/seller/pages/SellerLogin';

function App() {
  return (
    <BrowserRouter>
      <ToastProvider>
        <AuthProvider>
          <Routes>
            {/* Public */}
            <Route path="/" element={<Home />} />
            <Route path="/track" element={<TrackShipment />} />
            <Route path="/track/:awb" element={<TrackShipment />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/solutions/:solutionId" element={<SolutionDetails />} />
            <Route path="/partners/:partnerId" element={<PartnerDetails />} />
            <Route path="/company/:companyId" element={<CompanyDetails />} />

            {/* Global Auth */}
            <Route path="/auth/login" element={<LoginSelection />} />
            <Route path="/seller/signup" element={<SellerSignup />} />

            {/* Super Admin Portal */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin/*" element={<AdminPortal />} />

            {/* Franchise Portal */}
            <Route path="/franchise/login" element={<FranchiseLogin />} />
            <Route path="/franchise/*" element={<FranchisePortal />} />

            {/* Seller Portal */}
            <Route path="/seller/login" element={<SellerLogin />} />
            <Route path="/seller/*" element={<SellerPortal />} />

            {/* Fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </AuthProvider>
      </ToastProvider>
    </BrowserRouter>
  );
}

export default App;
