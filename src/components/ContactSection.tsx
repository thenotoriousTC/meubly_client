
import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Send, Clock } from 'lucide-react';
import { toast } from 'sonner';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation d'envoi de formulaire
    toast.success('Message envoyé avec succès ! Nous vous recontacterons rapidement.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Téléphone',
      info: '0554 74 60 41',
      action: 'tel:+213554746041',
      description: 'Appelez-nous directement'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      info: '0554 74 60 41',
      action: 'https://wa.me/213554746041',
      description: 'Chat instantané'
    },
    {
      icon: MapPin,
      title: 'Adresse',
      info: 'Ain Oulmene, Sétif',
      action: '#',
      description: 'Venez visiter notre showroom'
    },
    {
      icon: Clock,
      title: 'Horaires',
      info: 'Sam-Jeu: 8h-17h',
      action: '#',
      description: 'Fermé le vendredi'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Contactez-<span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">nous</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une question, un projet sur mesure ? Notre équipe est à votre disposition pour vous conseiller
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Informations de contact */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Parlons de votre projet</h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Que vous ayez besoin d'un meuble unique ou d'un aménagement complet, nous sommes là pour 
                concrétiser vos idées. Contactez-nous pour un devis gratuit et personnalisé.
              </p>
            </div>

            {/* Moyens de contact */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.action}
                  target={item.action.startsWith('http') ? '_blank' : '_self'}
                  rel={item.action.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="group bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gray-800 mb-1 group-hover:text-amber-600 transition-colors duration-200">
                        {item.title}
                      </h4>
                      <p className="text-amber-600 font-semibold mb-1">{item.info}</p>
                      <p className="text-sm text-gray-500">{item.description}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Actions rapides */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-2xl text-white">
              <h4 className="text-xl font-bold mb-3">Contact immédiat</h4>
              <p className="mb-4 opacity-90">Pour une réponse rapide, contactez-nous directement :</p>
              <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://wa.me/213554746041"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span className="font-medium">WhatsApp</span>
                </a>
                <a
                  href="tel:+213554746041"
                  className="flex items-center justify-center space-x-2 bg-white/20 backdrop-blur-sm hover:bg-white/30 py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-medium">Appeler</span>
                </a>
              </div>
            </div>
          </div>

          {/* Formulaire de contact */}
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Demande de devis</h3>
              <p className="text-gray-600">Décrivez-nous votre projet et nous vous recontacterons rapidement</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                    placeholder="0555 xx xx xx"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Description du projet *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Décrivez votre projet : type de meuble, dimensions, style souhaité, budget approximatif..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-amber-700 hover:to-orange-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Envoyer la demande</span>
              </button>

              <p className="text-sm text-gray-500 text-center">
                * Champs obligatoires - Réponse sous 24h
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
