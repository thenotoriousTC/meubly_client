
import React, { useState } from 'react';
import { Menu, X, Home, Package, Info, Phone } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { icon: Home, label: 'Accueil', href: '#accueil' },
    { icon: Package, label: 'Catalogue', href: '#catalogue' },
    { icon: Info, label: 'À propos', href: '#apropos' },
    { icon: Phone, label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md shadow-lg z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
              Meubly
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="group flex items-center space-x-2 text-gray-700 hover:text-amber-600 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-amber-50"
                >
                  <item.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-200" />
                  <span className="relative">
                    {item.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact rapide desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/213554746041"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:from-green-600 hover:to-green-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-amber-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="group flex items-center space-x-3 text-gray-700 hover:text-amber-600 block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 hover:bg-amber-50"
                >
                  <item.icon className="h-5 w-5 group-hover:scale-110 transition-transform duration-200" />
                  <span>{item.label}</span>
                </a>
              ))}
              <div className="pt-2 border-t border-gray-200">
                <a
                  href="https://wa.me/213554746041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-lg font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200"
                >
                  Contacter via WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
