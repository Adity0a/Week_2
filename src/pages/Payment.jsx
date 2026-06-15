import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Title from "../components/Title";

const Payment = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [paymentMethod, setPaymentMethod] = useState("card");

  const service = searchParams.get("type") || "Booking";
  const price = searchParams.get("price") || "0";

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      navigate("/booking-success");
    }, 2000);
  };

  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pb-20">
      <div className="max-w-4xl mx-auto">
        <Title title="Secure Checkout" subTitle="Complete your booking by choosing a payment method." />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Payment Options */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
              {['card', 'upi', 'netbanking'].map((method) => (
                <button
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`px-6 py-3 rounded-2xl font-bold text-sm uppercase tracking-widest border transition-all ${
                    paymentMethod === method
                      ? "bg-primary text-white border-primary shadow-lg"
                      : "bg-gray-50 dark:bg-slate-900 text-gray-500 border-gray-100 dark:border-slate-800 hover:border-primary/50"
                  }`}
                >
                  {method}
                </button>
              ))}
            </div>

            <form onSubmit={handlePayment} className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[32px] border border-gray-100 dark:border-slate-800 shadow-sm">
              {paymentMethod === 'card' && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-gray-400">Card Number</label>
                    <input type="text" placeholder="xxxx xxxx xxxx xxxx" className="w-full bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20" required />
                  </div>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase text-gray-400">Expiry</label>
                      <input type="text" placeholder="MM/YY" className="w-full bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20" required />
                    </div>
                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase text-gray-400">CVV</label>
                      <input type="password" placeholder="***" className="w-full bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20" required />
                    </div>
                  </div>
                </div>
              )}

              {paymentMethod === 'upi' && (
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-black uppercase text-gray-400">UPI ID</label>
                    <input type="text" placeholder="username@bank" className="w-full bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20" required />
                  </div>
                  <p className="text-xs text-gray-400 italic">You will receive a request on your UPI app.</p>
                </div>
              )}

              {paymentMethod === 'netbanking' && (
                <div className="flex flex-col gap-6">
                  <label className="text-xs font-black uppercase text-gray-400">Select Bank</label>
                  <select className="w-full bg-white dark:bg-slate-950 border border-gray-200 dark:border-slate-800 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-primary/20">
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}

              <button type="submit" className="mt-10 w-full py-4 bg-primary text-white font-black uppercase tracking-widest rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 active:scale-95 transition-all">
                Pay ₹{price}
              </button>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 dark:bg-slate-900 p-8 rounded-[32px] border border-gray-100 dark:border-slate-800 sticky top-36">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 font-playfair">Order Summary</h3>
              <div className="flex flex-col gap-4 border-b border-gray-200 dark:border-slate-800 pb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">{service}</span>
                  <span className="font-bold">₹{price}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service Fee</span>
                  <span className="font-bold">₹0</span>
                </div>
              </div>
              <div className="flex justify-between pt-6">
                <span className="font-black uppercase text-xs text-gray-400 tracking-widest">Total</span>
                <span className="text-2xl font-black text-primary">₹{price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
