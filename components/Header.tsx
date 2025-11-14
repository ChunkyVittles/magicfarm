'use client';

import Link from 'next/link';
import { ShoppingCart, Leaf } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Header() {
  const itemCount = useCartStore((state) => state.getItemCount());
  
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-sage-600" />
            <div>
              <h1 className="text-2xl font-serif text-earth-800">Mágica</h1>
              <p className="text-xs text-earth-600">Magic Farm Taos</p>
            </div>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              href="/shop" 
              className="text-earth-700 hover:text-sage-600 transition-colors font-medium"
            >
              Shop
            </Link>
            <Link 
              href="/stay" 
              className="text-earth-700 hover:text-sage-600 transition-colors font-medium"
            >
              Stay
            </Link>
            <Link 
              href="/about" 
              className="text-earth-700 hover:text-sage-600 transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/cart" 
              className="relative text-earth-700 hover:text-sage-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-sage-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
