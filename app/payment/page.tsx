'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CheckCircle } from 'lucide-react';

export default function PaymentPage() {
  const router = useRouter();
  const [order, setOrder] = useState<any>(null);
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);
  
  useEffect(() => {
    const orderData = localStorage.getItem('currentOrder');
    if (!orderData) {
      router.push('/cart');
      return;
    }
    setOrder(JSON.parse(orderData));
  }, [router]);
  
  if (!order) {
    return null;
  }
  
  const venmoUsername = '@MagicFarmTaos'; // Replace with actual Venmo username
  const orderNote = `Order ${order.id}`;
  
  // Venmo deep link for mobile
  const venmoUrl = `venmo://paycharge?txn=pay&recipients=${venmoUsername}&amount=${order.total}&note=${encodeURIComponent(orderNote)}`;
  
  const handleConfirmPayment = () => {
    setPaymentConfirmed(true);
    // In a real app, you'd notify your backend here
    setTimeout(() => {
      localStorage.removeItem('currentOrder');
      router.push('/order-confirmation');
    }, 2000);
  };
  
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-white rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-serif text-earth-800 mb-6">Complete Payment</h1>
        
        {!paymentConfirmed ? (
          <>
            <div className="bg-sage-50 border border-sage-200 rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-earth-800 mb-4">
                Pay with Venmo
              </h2>
              
              <div className="space-y-4">
                <div>
                  <p className="text-earth-700 mb-2">
                    <strong>Amount:</strong> ${order.total.toFixed(2)}
                  </p>
                  <p className="text-earth-700 mb-2">
                    <strong>Order ID:</strong> {order.id}
                  </p>
                  <p className="text-earth-700">
                    <strong>Venmo Username:</strong> {venmoUsername}
                  </p>
                </div>
                
                <div className="border-t border-sage-200 pt-4">
                  <h3 className="font-semibold text-earth-800 mb-3">
                    Payment Instructions:
                  </h3>
                  <ol className="list-decimal list-inside space-y-2 text-earth-700">
                    <li>Open your Venmo app</li>
                    <li>Send <strong>${order.total.toFixed(2)}</strong> to <strong>{venmoUsername}</strong></li>
                    <li>In the note field, include: <strong>{order.id}</strong></li>
                    <li>Come back here and click "I've Sent Payment"</li>
                  </ol>
                </div>
                
                <div className="flex flex-col space-y-3 pt-4">
                  <a
                    href={venmoUrl}
                    className="block w-full bg-blue-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  >
                    Open Venmo App
                  </a>
                  
                  <button
                    onClick={handleConfirmPayment}
                    className="w-full bg-sage-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sage-700 transition-colors"
                  >
                    I've Sent Payment
                  </button>
                </div>
              </div>
            </div>
            
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <p className="text-sm text-amber-800">
                <strong>Note:</strong> Your order will be processed once we verify your payment. 
                You'll receive a confirmation email at {order.customerInfo.email}
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-8">
            <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-earth-800 mb-2">
              Thank You!
            </h2>
            <p className="text-earth-700">
              We'll verify your payment and send you a confirmation email shortly.
            </p>
          </div>
        )}
        
        <div className="mt-8 text-center">
          <p className="text-sm text-earth-600">
            Questions? Email us at{' '}
            <a href="mailto:magicfarmtaos@example.com" className="text-sage-600 hover:underline">
              contact@magicfarmtaos.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
