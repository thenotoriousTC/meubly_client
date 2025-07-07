
import React from 'react';
import Hero from '../components/Hero';
import CataloguePreview from '../components/CataloguePreview';
import AboutSection from '../components/AboutSection';
import ContactSection from '../components/ContactSection';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100">
      <Navigation />
      <Hero />
      <CataloguePreview />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
