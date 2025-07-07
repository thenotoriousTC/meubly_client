
import React from 'react';
import { ArrowRight, Star, Phone } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background avec image moderne */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3011&q=80"
          alt="Modern living room"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-amber-200">
            <Star className="h-4 w-4 text-amber-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">Artisanat de qualité depuis 2020</span>
          </div>

          {/* Titre principal */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Votre mobilier,{' '}
              <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
                notre savoir-faire
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Chez Meubly, nous créons des meubles sur mesure qui transforment votre intérieur en un espace unique et chaleureux
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a
              href="#catalogue"
              className="group inline-flex items-center space-x-2 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <span>Voir la collection</span>
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            
            <a
              href="tel:+213554746041"
              className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white border border-amber-200 hover:border-amber-300 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              <span>0554 74 60 41</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto pt-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">500+</div>
              <div className="text-sm text-white/80">Clients satisfaits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">3+</div>
              <div className="text-sm text-white/80">Années d&apos;expérience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-amber-400">100%</div>
              <div className="text-sm text-white/80">Sur mesure</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-amber-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-amber-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
