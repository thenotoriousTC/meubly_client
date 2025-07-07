
import React from 'react';
import { MessageCircle, Phone, Eye, Check, Clock } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

interface ProductCardProps {
  product: Product;
  className?: string;
  style?: React.CSSProperties;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, className = '', style }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('fr-DZ', {
      style: 'currency',
      currency: 'DZD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleWhatsAppContact = () => {
    const message = `Bonjour, je suis intéressé(e) par le produit: ${product.name} - ${formatPrice(product.price)}`;
    const whatsappUrl = `https://wa.me/213554746041?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  const handlePhoneContact = () => {
    window.location.href = 'tel:+213554746041';
  };

  return (
    <div 
      className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden border border-gray-100 ${className}`}
      style={style}
    >
      {/* Image du produit */}
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        
        {/* Badge de disponibilité */}
        <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center space-x-1 px-3 py-1 rounded-full text-xs font-medium ${
            product.available 
              ? 'bg-green-100 text-green-700' 
              : 'bg-orange-100 text-orange-700'
          }`}>
            {product.available ? <Check className="h-3 w-3" /> : <Clock className="h-3 w-3" />}
            <span>{product.available ? 'Disponible' : 'Sur commande'}</span>
          </span>
        </div>

        {/* Overlay avec actions */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
          <button className="bg-white/90 backdrop-blur-sm p-3 rounded-full hover:bg-white transition-all duration-200 hover:scale-110">
            <Eye className="h-5 w-5 text-gray-700" />
          </button>
        </div>

        {/* Catégorie */}
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-amber-600 transition-colors duration-200">
            {product.name}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Prix */}
        <div className="mb-6">
          <div className="text-2xl font-bold text-amber-600">
            {formatPrice(product.price)}
          </div>
          <p className="text-xs text-gray-500 mt-1">Prix indicatif - Devis personnalisé</p>
        </div>

        {/* Actions */}
        <div className="flex space-x-3">
          <button
            onClick={handleWhatsAppContact}
            className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-medium hover:from-green-600 hover:to-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <MessageCircle className="h-4 w-4" />
            <span>WhatsApp</span>
          </button>
          
          <button
            onClick={handlePhoneContact}
            className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-medium hover:from-blue-600 hover:to-blue-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
          >
            <Phone className="h-4 w-4" />
            <span>Appeler</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
