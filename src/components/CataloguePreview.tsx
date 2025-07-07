import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { Search, Filter, ArrowRight } from 'lucide-react';

// Données de démonstration des produits
const products = [{
  id: 1,
  name: 'Salon Moderne Deluxe',
  category: 'Salon',
  price: 85000,
  image: 'https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&w=800&q=80',
  description: 'Salon 3+2+1 en cuir véritable avec coussins rembourrés',
  available: true
}, {
  id: 2,
  name: 'Chambre Complète Classique',
  category: 'Chambre',
  price: 120000,
  image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80',
  description: 'Lit 2 places + 2 chevets + armoire 4 portes + coiffeuse',
  available: true
}, {
  id: 3,
  name: 'Table à Manger Familiale',
  category: 'Salle à manger',
  price: 45000,
  image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?auto=format&fit=crop&w=800&q=80',
  description: 'Table extensible 6-8 personnes en bois massif',
  available: true
}, {
  id: 4,
  name: 'Cuisine Équipée Moderne',
  category: 'Cuisine',
  price: 200000,
  image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80',
  description: 'Cuisine complète avec électroménager intégré',
  available: false
}, {
  id: 5,
  name: 'Bureau Exécutif',
  category: 'Bureau',
  price: 65000,
  image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=800&q=80',
  description: 'Bureau directionnel avec retour et caisson mobile',
  available: true
}, {
  id: 6,
  name: 'Bibliothèque Murale',
  category: 'Salon',
  price: 35000,
  image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&w=800&q=80',
  description: 'Bibliothèque moderne avec éclairage LED intégré',
  available: true
}];
const categories = ['Tous', 'Salon', 'Chambre', 'Salle à manger', 'Cuisine', 'Bureau'];
const CataloguePreview = () => {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [searchTerm, setSearchTerm] = useState('');
  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'Tous' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  return <section id="catalogue" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* En-tête de section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Notre <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">Collection</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Découvrez notre gamme complète de meubles conçus avec passion et savoir-faire artisanal
          </p>
        </div>

        {/* Filtres et recherche */}
        <div className="mb-12 space-y-6">
          {/* Barre de recherche */}
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input type="text" placeholder="Rechercher un meuble..." value={searchTerm} onChange={e => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-200" />
          </div>

          {/* Filtres par catégorie */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map(category => <button key={category} onClick={() => setSelectedCategory(category)} className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${selectedCategory === category ? 'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'}`}>
                {category}
              </button>)}
          </div>
        </div>

        {/* Grille de produits */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProducts.map((product, index) => <ProductCard key={product.id} product={product} className={`animate-fade-in`} style={{
          animationDelay: `${index * 0.1}s`
        }} />)}
        </div>

        {/* Message si aucun produit */}
        {filteredProducts.length === 0 && <div className="text-center py-12">
            <Filter className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-500 text-lg">Aucun produit trouvé pour cette recherche</p>
          </div>}

        {/* CTA vers catalogue complet */}
        <div className="text-center">
          
        </div>
      </div>
    </section>;
};
export default CataloguePreview;