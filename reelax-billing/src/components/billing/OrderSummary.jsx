import { useState } from 'react';
import { Wallet, Tag, ChevronUp, ChevronDown, ArrowUpCircle } from 'lucide-react';

const COUPONS = {
  WELCOME20: { label: '20% off on your first month' },
  ANNUAL50:  { label: '50% off on annual plans' },
};

const PLAN_PRICE   = 14999;   // Subtotal shown in design
const TAX_AMOUNT   = 1079.64; // Exact value shown in design
const WALLET_AVAIL = 500;

export default function OrderSummary() {
  const [couponOpen,    setCouponOpen]    = useState(true);
  const [couponInput,   setCouponInput]   = useState('');
  const [selectedCoupon, setSelectedCoupon] = useState('WELCOME20'); 
  const [couponError,   setCouponError]   = useState('');
  const [walletApplied, setWalletApplied] = useState(false);

  const handleApplyCoupon = () => {
    const code = couponInput.trim().toUpperCase();
    if (COUPONS[code]) {
      setSelectedCoupon(code);
      setCouponError('');
      setCouponInput('');
    } else if (code === '') {
      setCouponError('Please enter a coupon code.');
    } else {
      setCouponError('Invalid coupon code. Try WELCOME20 or ANNUAL50.');
    }
  };

  const walletDeduction = walletApplied ? WALLET_AVAIL : 0;
  const total = PLAN_PRICE + TAX_AMOUNT - walletDeduction;

  const fmt = (n) =>
    n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

  return (
    <div className="w-full max-w-[440px] mx-auto bg-[#F4F5F6]  rounded-2xl flex flex-col gap-3 font-sans antialiased">
      
      {/* ── TOP SECTION: Plan Card ── */}
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-4">
        <h2 className="text-[22px] font-bold text-[#0F172A] tracking-tight">Order Summary</h2>
        
        {/* Selected Plan Details Box */}
        <div className="border border-[#DBEAFE] bg-white p-4 rounded-xl flex items-start justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-baseline">
              <span className="text-2xl font-black text-[#0F172A]">₹4,999</span>
              <span className="text-sm font-semibold text-gray-400 ml-1">/month</span>
            </div>
            <span className="text-xs font-medium text-gray-400">Includes 5,000 credits/mo.</span>
          </div>
          
          <div className="text-right flex flex-col">
            <span className="text-[10px] font-extrabold text-[#2563EB] tracking-wider uppercase">Selected Plan</span>
            <span className="text-lg font-bold text-[#0F172A]">Startup</span>
          </div>
        </div>

        {/* Upgrade Call to Action Button */}
        <button className="w-full py-3 border border-[#E2E8F0] bg-[#F8FAFC] text-sm font-bold text-[#2563EB] rounded-xl hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
          <ArrowUpCircle className="w-4 h-4" />
          Upgrade to Growth Plan
        </button>
      </div>

      {/* ── BOTTOM SECTION: Wallet, Coupon & Calculation Card ── */}
      <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)] flex flex-col gap-5">
        
        {/* Wallet Balance Widget */}
        <div className="flex items-center justify-between p-3.5 border border-[#E2E8F0] rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-[#EFF6FF] flex items-center justify-center flex-shrink-0 border border-[#DBEAFE]">
              <Wallet className="w-[18px] h-[18px] text-[#2563EB]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0F172A]">Wallet Balance</p>
              <p className="text-xs text-gray-400 font-medium">₹{WALLET_AVAIL}.00 available</p>
            </div>
          </div>
          <button
            onClick={() => setWalletApplied((p) => !p)}
            className="px-4 py-1.5 border border-[#E2E8F0] rounded-lg text-xs font-bold text-[#2563EB] bg-white hover:bg-gray-50 transition-colors shadow-sm"
          >
            {walletApplied ? 'Remove' : 'Apply'}
          </button>
        </div>

        {/* Coupon Dropdown Section */}
        <div className="border border-[#E2E8F0] rounded-xl overflow-hidden">
          <button
            onClick={() => setCouponOpen((p) => !p)}
            className="w-full flex items-center justify-between p-3.5 bg-white hover:bg-gray-50/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <Tag className="w-[18px] h-[18px] text-gray-500 transform -rotate-90" />
              <span className="text-sm font-bold text-[#0F172A]">Apply Coupon</span>
            </div>
            {couponOpen ? <ChevronUp className="w-4 h-4 text-gray-400" /> : <ChevronDown className="w-4 h-4 text-gray-400" />}
          </button>

          {couponOpen && (
            <div className="px-3.5 pb-3.5 pt-0.5 flex flex-col gap-3 border-t border-[#F1F5F9]">
              {/* Manual Input Code Box */}
              <div className="flex gap-2 mt-2">
                <input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponInput}
                  onChange={(e) => {
                    setCouponInput(e.target.value.toUpperCase());
                    setCouponError('');
                  }}
                  className="flex-1 px-3 py-2 text-sm border border-[#E2E8F0] rounded-lg placeholder-gray-400 font-medium text-gray-800 focus:outline-none focus:border-[#2563EB]"
                />
                <button
                  onClick={handleApplyCoupon}
                  className="px-4 py-2 border border-[#E2E8F0] text-xs font-bold text-[#2563EB] rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Apply
                </button>
              </div>

              {couponError && <p className="text-xs text-red-500 font-medium">{couponError}</p>}

              {/* Listed Coupons Option Toggles */}
              {Object.entries(COUPONS).map(([code, info]) => {
                const active = selectedCoupon === code;
                return (
                  <button
                    key={code}
                    onClick={() => setSelectedCoupon(active ? '' : code)}
                    className={`w-full flex items-center justify-between px-3.5 py-3 rounded-lg border text-left transition-all ${
                      active ? 'border-[#2563EB] bg-white' : 'border-[#E2E8F0] hover:border-gray-300'
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline gap-1">
                      <span className="text-sm font-bold text-[#0F172A] tracking-wide">{code}</span>
                      <span className="text-xs text-gray-400 font-medium">{info.label}</span>
                    </div>
                    <div className={`w-[18px] h-[18px] rounded-full border-2 flex items-center justify-center flex-shrink-0 ml-2 ${
                      active ? 'border-[#2563EB]' : 'border-gray-300'
                    }`}>
                      {active && <div className="w-[10px] h-[10px] rounded-full bg-[#2563EB]" />}
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Pricing Layout Breakdown */}
        <div className="flex flex-col gap-3 pt-1 text-[14px]">
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Subtotal</span>
            <span className="font-bold text-[#0F172A]">₹{fmt(PLAN_PRICE)}</span>
          </div>
          
          <div className="flex justify-between text-gray-500 font-medium">
            <span>Tax (18% GST)</span>
            <span className="font-bold text-[#0F172A]">₹{fmt(TAX_AMOUNT)}</span>
          </div>

          {walletApplied && (
            <div className="flex justify-between text-green-600 font-medium">
              <span>Wallet Applied</span>
              <span className="font-bold">- ₹{fmt(walletDeduction)}</span>
            </div>
          )}

          <div className="border-t border-gray-100 pt-4 mt-2 flex justify-between items-center">
            <span className="text-base font-bold text-[#0F172A]">Total due today</span>
            <span className="text-lg  font-black text-[#2563EB] tracking-tight">₹{fmt(total)}</span>
          </div>
        </div>

        {/* Payment Confirmation Button */}
        <button className="w-full py-3.5 text-sm font-bold text-white bg-[#2563EB] hover:bg-blue-700 rounded-xl transition-colors shadow-sm tracking-wide">
          Proceed to Payment
        </button>

      </div>
    </div>
  );
}
