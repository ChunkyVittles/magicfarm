import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function OrderConfirmationPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8 text-center">
        <CheckCircle className="h-20 w-20 text-green-600 mx-auto mb-6" />
        
        <h1 className="text-3xl font-serif text-earth-800 mb-4">
          Order Received!
        </h1>
        
        <p className="text-lg text-earth-700 mb-6">
          Thank you for your order from Mágica - Magic Farm Taos
        </p>
        
        <div className="bg-sage-50 rounded-lg p-6 mb-8">
          <h2 className="font-semibold text-earth-800 mb-3">What Happens Next?</h2>
          <ol className="text-left space-y-2 text-earth-700">
            <li>1. We'll verify your Venmo payment</li>
            <li>2. You'll receive an email confirmation with tracking information</li>
            <li>3. Your order will be carefully packaged and shipped</li>
            <li>4. Expect delivery within 2-7 business days depending on shipping method</li>
          </ol>
        </div>
        
        <div className="space-y-4">
          <Link 
            href="/shop"
            className="inline-block bg-sage-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <p className="text-sm text-earth-600">
            Questions? Contact us at{' '}
            <a href="mailto:contact@magicfarmtaos.com" className="text-sage-600 hover:underline">
              contact@magicfarmtaos.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
