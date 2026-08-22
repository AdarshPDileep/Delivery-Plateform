import React, { useEffect, Suspense, lazy } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

// Lazy load the specialized company pages
const AboutUs = lazy(() => import('./company/AboutUs'));
const Governance = lazy(() => import('./company/Governance'));
const PressRelease = lazy(() => import('./company/PressRelease'));
const Careers = lazy(() => import('./company/Careers'));

export default function CompanyDetails() {
  const { companyId } = useParams();
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [companyId]);

  // Router for rendering specific components
  const renderContent = () => {
    switch(companyId) {
      case 'about-us': return <AboutUs />;
      case 'governance': return <Governance />;
      case 'press-release': return <PressRelease />;
      case 'careers': return <Careers />;
      default:
        return (
          <div className="pt-48 pb-32 text-center text-gray-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Page not found</h2>
            <p>We could not find the {companyId} company page.</p>
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
