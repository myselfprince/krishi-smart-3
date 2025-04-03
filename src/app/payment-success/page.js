// app/payment-success/page.js (or pages/payment-success.js)
'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';

export default function PaymentSuccess() {
  const router = useRouter();

  useEffect(() => {
    toast.success('Payment successful! Redirecting to homepage...');
    setTimeout(() => {
      router.push('/marketplace');
    }, 1500);
  }, [router]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <h1 className="text-2xl font-bold">Payment Successful!</h1>
    </div>
  );
}