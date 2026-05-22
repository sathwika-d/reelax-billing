import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Header from './components/layout/Header';
import BillingForm from './components/billing/BillingForm';
import OrderSummary from './components/billing/OrderSummary';

export default function App() {
  const [toast, setToast] = useState('');

  const handleSave = (formData) => {
    console.log('saved:', formData);
    setToast('Billing details saved successfully!');
    setTimeout(() => setToast(''), 3000);
  };

  const handleCancel = () => {
    setToast('Navigating back to plans...');
    setTimeout(() => setToast(''), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />

      <main className="max-w-[1120px] mx-auto px-4 py-6">
        {/* back to plans */}
        <button
          onClick={handleCancel}
          className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-5 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to plans
        </button>

        {/* toast notification */}
        {toast && (
          <div className="mb-4 px-4 py-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-700 font-medium transition-all">
            {toast}
          </div>
        )}

        {/* two-column layout on lg+, stacked on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-5 items-start">
          <BillingForm onCancel={handleCancel} onSave={handleSave} />
          <div className="lg:sticky lg:top-[72px]">
            <OrderSummary />
          </div>
        </div>
      </main>
    </div>
  );
}
