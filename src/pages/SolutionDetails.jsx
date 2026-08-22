import React, { useEffect, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Lazy load the specialized pages
const D2CBrands = lazy(() => import('./solutions/D2CBrands'));

export default function SolutionDetails() {
  const { solutionId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [solutionId]);

  // Router for rendering specific components
  const renderContent = () => {
    switch(solutionId) {
      case 'd2c-brands': return <D2CBrands />;
      default:
        return (
          <div className="pt-48 pb-32 text-center text-gray-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Solution coming soon!</h2>
            <p>We are actively building the {solutionId} solution page.</p>
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
