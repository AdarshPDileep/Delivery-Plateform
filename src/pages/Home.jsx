import React from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import TrustedPartnersSection from '../components/home/TrustedPartnersSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';
import Footer from '../components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col font-sans overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TrustedPartnersSection />
        <StatsSection />
        <CTASection />
      </main>
      
      <Footer />
    </div>
  );
}
