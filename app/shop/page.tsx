'use client';

import { useState } from 'react';
import ProductCard from '@/components/ProductCard';
import { sampleProducts } from '@/data/products';
import { ProductCategory } from '@/types';

const categories: (ProductCategory | 'All')[] = [
  'All',
  'Plants & Seeds',
  'Herbal Remedies',
  'Natural Products',
  'Spring Water',
  'Gifts',
];

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'All'>('All');
  
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(p => p.category === selectedCategory);
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-earth-800 mb-2">Shop</h1>
      <p className="text-earth-600 mb-8">
        Discover our sacred herbs, natural remedies, and handcrafted products
      </p>
      
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`
              px-4 py-2 rounded-lg font-medium transition-colors
              ${selectedCategory === category
                ? 'bg-sage-600 text-white'
                : 'bg-white text-earth-700 hover:bg-earth-100'
              }
            `}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-earth-600">No products found in this category.</p>
        </div>
      )}
    </div>
  );
}
