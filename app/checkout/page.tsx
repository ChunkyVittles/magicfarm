'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/store/cartStore';

export default function CheckoutPage() {
  const router = useRouter();
  const { items, getTotal, clearCart } = useCartStore();
  const total = getTotal();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    shippingMethod: 'standard',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const shippingCosts = {
    standard: 8.00,
    priority: 15.00,
    express: 25.00,
  };
  
  const shippingCost = shippingCosts[formData.shippingMethod as keyof typeof shippingCosts];
  const finalTotal = total + shippingCost;
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create order object
    const order = {
      id: `MFT-${Date.now()}`,
      items,
      total: finalTotal,
      customerInfo: formData,
      createdAt: new Date().toISOString(),
    };
    
    // In a real app, you'd send this to your backend
    console.log('Order created:', order);
    
    // Store order in localStorage for confirmation page
    localStorage.setItem('currentOrder', JSON.stringify(order));
    
    // Clear cart and redirect to payment page
    clearCart();
    router.push('/payment');
  };
  
  if (items.length === 0) {
    router.push('/cart');
    return null;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-serif text-earth-800 mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-serif text-earth-800 mb-6">Shipping Information</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  name="address"
                  required
                  value={formData.address}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-earth-700 font-medium mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label className="block text-earth-700 font-medium mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    name="state"
                    required
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  ZIP Code *
                </label>
                <input
                  type="text"
                  name="zip"
                  required
                  value={formData.zip}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                />
              </div>
              
              <div>
                <label className="block text-earth-700 font-medium mb-2">
                  Shipping Method *
                </label>
                <select
                  name="shippingMethod"
                  value={formData.shippingMethod}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-earth-300 rounded-lg focus:ring-2 focus:ring-sage-600 focus:border-transparent"
                >
                  <option value="standard">Standard (5-7 days) - $8.00</option>
                  <option value="priority">Priority (2-3 days) - $15.00</option>
                  <option value="express">Express (1-2 days) - $25.00</option>
                </select>
              </div>
            </div>
            
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full mt-6 bg-sage-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors disabled:bg-earth-300"
            >
              {isSubmitting ? 'Processing...' : 'Continue to Payment'}
            </button>
          </form>
        </div>
        
        {/* Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-md p-6 sticky top-20">
            <h2 className="text-2xl font-serif text-earth-800 mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              {items.map((item) => (
                <div key={item.product.id} className="flex justify-between text-sm text-earth-700">
                  <span>{item.product.name} × {item.quantity}</span>
                  <span>${(item.product.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              
              <div className="border-t border-earth-200 pt-3">
                <div className="flex justify-between text-earth-700">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-earth-700 mt-2">
                  <span>Shipping</span>
                  <span>${shippingCost.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="border-t border-earth-200 pt-3">
                <div className="flex justify-between text-lg font-bold text-earth-800">
                  <span>Total</span>
                  <span>${finalTotal.toFixed(2)}</span>
                </div>
              </div>
            </div>
            
            <div className="bg-sage-50 p-4 rounded-lg">
              <p className="text-sm text-earth-700">
                💳 Next step: You'll be directed to complete payment via Venmo
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
