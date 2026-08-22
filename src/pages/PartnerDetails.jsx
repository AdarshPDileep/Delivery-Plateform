import React, { useEffect, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Lazy load the specialized partner pages
const FranchiseOpportunities = lazy(() => import('./partners/FranchiseOpportunities'));
const DeliveryPartner = lazy(() => import('./partners/DeliveryPartner'));
const FleetOwners = lazy(() => import('./partners/FleetOwners'));
const SchoolOfLogistics = lazy(() => import('./partners/SchoolOfLogistics'));

export default function PartnerDetails() {
  const { partnerId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [partnerId]);

  // Router for rendering specific components
  const renderContent = () => {
    switch(partnerId) {
      case 'franchise-opportunities': return <FranchiseOpportunities />;
      case 'delivery-partner': return <DeliveryPartner />;
      case 'fleet-owners': return <FleetOwners />;
      case 'school-of-logistics': return <SchoolOfLogistics />;
      default:
        return (
          <div className="pt-48 pb-32 text-center text-gray-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partner page not found</h2>
            <p>We could not find the {partnerId} partner program.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#e31837] border-t-transparent rounded-full animate-spin"></div></div>}>
          {renderContent()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
