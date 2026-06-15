import { useNavigate } from "react-router-dom";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-32 px-6 min-h-screen bg-white dark:bg-slate-950 flex flex-col items-center justify-center text-center transition-colors duration-300">
      <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mb-8 animate-bounce">
        <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white mb-4">Booking Successful!</h1>
      <p className="text-gray-500 dark:text-gray-400 max-w-md mx-auto text-lg font-light leading-relaxed">
        Your reservation has been confirmed. A confirmation email with your booking ID **#QS-202688** has been sent.
      </p>

      <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
        <button
          onClick={() => navigate("/my-bookings")}
          className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95"
        >
          View My Bookings
        </button>
        <button
          onClick={() => navigate("/")}
          className="px-10 py-4 border border-gray-200 dark:border-slate-800 text-gray-700 dark:text-gray-300 font-bold rounded-2xl hover:bg-gray-50 dark:hover:bg-slate-900 transition-all"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default BookingSuccess;
