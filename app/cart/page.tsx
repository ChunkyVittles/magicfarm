'use client';

import Link from 'next/link';
import { useCartStore } from '@/store/cartStore';
import { Minus, Plus, Trash2 } from 'lucide-react';

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore();
  const total = getTotal();
  
  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-serif text-earth-800 mb-8">Shopping Cart</h1>
        <div className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-earth-600 mb-4">Your cart is empty</p>
          <Link 
            href="/shop"
            className="inline-block bg-sage-600 text-white px-6 py-2 rounded-lg hover:bg-sage-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-earth-800 mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.product.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="font-semibold text-lg text-earth-800 mb-1">
                    {item.product.name}
                  </h3>
                  <p className="text-earth-600 text-sm mb-3">
                    ${item.product.price.toFixed(2)} each
                  </p>
                  
                  {/* Quantity Controls */}
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center border border-earth-300 rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="p-2 hover:bg-earth-100 transition-colors"
                      >
                        <Minus className="h-4 w-4 text-earth-700" />
                      </button>
                      <span className="px-4 py-2 text-earth-800 font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="p-2 hover:bg-earth-100 transition-colors"
                      >
                        <Plus className="h-4 w-4 text-earth-700" />
                      </button>
                    </div>
                    
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-600 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>
                
                <div className="text-right ml-4">
                  <p className="text-xl font-bold text-sage-700">
                    ${(item.product.price * item.quantity).toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-serif text-earth-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-earth-700">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-earth-700">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-earth-200 pt-3">
                <div className="flex justify-between text-lg font-bold text-earth-800">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <Link 
              href="/checkout"
              className="block w-full bg-sage-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors"
            >
              Proceed to Checkout
            </Link>
            
            <Link 
              href="/shop"
              className="block w-full text-center text-sage-600 hover:text-sage-700 mt-4 transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
