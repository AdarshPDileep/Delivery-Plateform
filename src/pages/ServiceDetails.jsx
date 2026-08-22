import React, { useEffect, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { serviceDetails } from '../data/services';

// Lazy load the specialized pages
const ExpressParcel = lazy(() => import('./services/ExpressParcel'));
const LocalDelivery = lazy(() => import('./services/LocalDelivery'));
const TransportOne = lazy(() => import('./services/TransportOne'));
const DataIntelligence = lazy(() => import('./services/DataIntelligence'));
const CommerzaMaps = lazy(() => import('./services/CommerzaMaps'));
const GenericMarketingPage = lazy(() => import('./services/GenericMarketingPage'));
const Warehousing = lazy(() => import('./services/Warehousing'));
const PartTruckload = lazy(() => import('./services/PartTruckload'));
const FullTruckload = lazy(() => import('./services/FullTruckload'));
const International = lazy(() => import('./services/International'));

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  
  const service = serviceDetails[serviceId];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col bg-gray-50 font-sans">
        <Navbar />
        <div className="flex-1 flex flex-col items-center justify-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4 font-display">Service Not Found</h1>
          <button 
            onClick={() => navigate('/')}
            className="text-[#E31837] font-medium hover:underline"
          >
            Return to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Router for rendering specific components
  const renderContent = () => {
    switch(serviceId) {
      case 'express-parcel': return <ExpressParcel />;
      case 'local-delivery': return <LocalDelivery />;
      case 'transport-one': return <TransportOne />;
      case 'data-intelligence': return <DataIntelligence />;
      case 'commerza-maps': return <CommerzaMaps />;
      case 'warehousing': return <Warehousing />;
      case 'part-truckload': return <PartTruckload />;
      case 'full-truckload': return <FullTruckload />;
      case 'international': return <International />;
      // Fallback to marketing template for FTL, PTL, International
      default: return <GenericMarketingPage service={service} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans bg-white overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <Suspense fallback={<div className="h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div></div>}>
          {renderContent()}
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
