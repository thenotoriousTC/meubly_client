
import React from 'react';
import { MessageCircle, Phone, MapPin, Clock, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* Contenu principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Informations entreprise */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Meubly
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Votre partenaire de confiance pour tous vos projets d'ameublement sur mesure. 
              Artisanat local, qualité garantie et service personnalisé depuis 2020.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-amber-600 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Contact rapide */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <div className="space-y-4">
              <a
                href="tel:+213554746041"
                className="flex items-center space-x-3 text-gray-300 hover:text-amber-400 transition-colors duration-200"
              >
                <Phone className="h-5 w-5" />
                <span>0554 74 60 41</span>
              </a>
              <a
                href="https://wa.me/213554746041"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-300 hover:text-green-400 transition-colors duration-200"
              >
                <MessageCircle className="h-5 w-5" />
                <span>WhatsApp</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-5 w-5" />
                <span>Ain Oulmene, Sétif</span>
              </div>
            </div>
          </div>

          {/* Horaires */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Horaires</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5" />
                <div>
                  <div>Sam - Jeu</div>
                  <div className="text-sm text-gray-400">8h00 - 17h00</div>
                </div>
              </div>
              <div className="text-sm text-gray-400 ml-8">
                Fermé le vendredi
              </div>
              <div className="text-sm text-amber-400 ml-8">
                Visite sur rendez-vous
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="md:flex md:items-center md:justify-between">
            <div className="text-gray-400 text-sm">
              © {currentYear} Meubly. Tous droits réservés.
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400 text-sm">
                Développé par{' '}
                <a
                  href="tel:+213554746041"
                  className="text-amber-400 hover:text-amber-300 transition-colors duration-200"
                >
                  SiSoft - 0554 74 60 41
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact flottant */}
      <div className="fixed bottom-4 right-4 z-[9999]">
        <a
          href="https://wa.me/213554746041"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-2xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-110 group flex items-center justify-center w-14 h-14"
        >
          <MessageCircle className="h-6 w-6 group-hover:rotate-12 transition-transform duration-200" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
