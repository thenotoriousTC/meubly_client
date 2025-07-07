
import React from 'react';
import { Award, Users, Hammer, Heart } from 'lucide-react';
import { Armchair } from 'lucide-react';

const AboutSection = () => {
  const values = [
    {
      icon: Hammer,
      title: 'Savoir-faire Artisanal',
      description: 'Chaque meuble est façonné avec passion par nos artisans expérimentés'
    },
    {
      icon: Heart,
      title: 'Qualité Supérieure',
      description: 'Nous sélectionnons les meilleurs matériaux pour une durabilité optimale'
    },
    {
      icon: Users,
      title: 'Service Personnalisé',
      description: 'Un accompagnement sur mesure de la conception à la livraison'
    },
    {
      icon: Award,
      title: 'Expertise Locale',
      description: 'Meubly, fière de servir la région d\'Ain Oulmene avec excellence'
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Contenu textuel */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                À propos de{' '}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Meubly
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Depuis 2020, Meubly, située à Ain Oulmene, s'est spécialisée dans la création de meubles sur mesure 
                qui allient tradition artisanale et design contemporain. Chaque pièce est conçue avec soin pour 
                répondre aux besoins spécifiques de nos clients.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Notre équipe d'artisans passionnés met son expertise au service de vos projets d'aménagement, 
                qu'il s'agisse de mobilier résidentiel ou professionnel. Nous croyons que chaque espace mérite 
                des meubles uniques qui reflètent la personnalité de ses occupants.
              </p>
            </div>

            {/* Statistiques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">500+</div>
                <div className="text-gray-700 font-medium">Clients satisfaits</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200">
                <div className="text-3xl font-bold text-amber-600 mb-2">3+</div>
                <div className="text-gray-700 font-medium">Années d'expérience</div>
              </div>
            </div>
          </div>

          {/* Image et valeurs */}
          <div className="space-y-8">
            {/* Image placeholder */}
            <div className="relative">
              <div className="bg-gradient-to-br from-amber-200 to-orange-200 rounded-2xl h-80 flex items-center justify-center shadow-xl">
                <div className="text-center space-y-4">
                  <Armchair className="h-16 w-16 text-amber-700 mx-auto" />
                  <div className="text-2xl font-bold text-amber-800">Notre Atelier</div>
                  <div className="text-amber-700">Ain Oulmene, Sétif</div>
                </div>
              </div>
              {/* Effet décoratif */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-orange-400 to-amber-500 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Nos valeurs */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-4">Nos Valeurs</h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ce qui nous guide dans notre travail quotidien et notre relation avec nos clients
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-amber-200 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <value.icon className="h-7 w-7 text-white" />
                  </div>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-amber-600 transition-colors duration-200">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
