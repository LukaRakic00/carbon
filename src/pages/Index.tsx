import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ProductGrid from '@/components/ProductGrid';
import WarrantySection from '@/components/WarrantySection';
import ServiceSection from '@/components/ServiceSection';
import Footer from '@/components/Footer';
import ScrollToSection from '@/components/ScrollToSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <ScrollToSection />
      <HeroSection />
      <ProductGrid />
      <WarrantySection />
      <ServiceSection />
      <Footer />
    </div>
  );
};

export default Index;
