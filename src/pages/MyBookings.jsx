import { assets } from "../assets/assets";

const MyBookings = () => {
  const today = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

  const mixedBookings = [
    {
      type: 'Flight',
      name: 'SkyBlue Airways',
      details: 'Economy (SB-204)',
      address: 'NYC to LON',
      guests: 1,
      totalPrice: 299,
      checkIn: today,
      checkOut: today,
      isPaid: true,
      status: 'Confirmed',
      image: "https://images.pexels.com/photos/1089306/pexels-photo-1089306.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      type: 'Hotel',
      name: 'Crystal Waters Resort',
      details: 'Single Bed',
      address: 'Night Sky Parkway, AZ, USA',
      guests: 2,
      totalPrice: 200,
      checkIn: today,
      checkOut: 'September 26, 2025',
      isPaid: true,
      status: 'Confirmed',
      image: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800"
    },
    {
      type: 'Train',
      name: 'Express Explorer',
      details: 'First Class',
      address: 'DEL to MUM',
      guests: 2,
      totalPrice: 170,
      checkIn: today,
      checkOut: today,
      isPaid: false,
      status: 'Pending',
      image: "https://images.pexels.com/photos/333525/pexels-photo-333525.jpeg?auto=compress&cs=tinysrgb&w=800"
    }
  ];

  const currentBooking = mixedBookings[0];

  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300 pb-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">Travel History</h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-3 max-w-2xl leading-relaxed font-light">
          Review your upcoming adventures and past explorations. Everything you need for a smooth journey is right here.
        </p>

        {/* Current / Recent Booking Highlight */}
        {currentBooking && (
          <div className="mt-12 group">
             <h2 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6">Current Booking</h2>
             <div className="relative overflow-hidden rounded-[40px] bg-primary/5 dark:bg-slate-900 border border-primary/10 dark:border-slate-800 p-8 md:p-12 flex flex-col lg:flex-row items-center gap-12 transition-all hover:shadow-2xl hover:shadow-primary/5">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl" />

                <div className="w-full lg:w-1/3 relative z-20">
                  <img
                    src={currentBooking.image}
                    alt="current"
                    key={currentBooking.image}
                    className="w-full h-64 object-cover rounded-[32px] shadow-2xl group-hover:scale-105 transition-transform duration-700 relative z-10"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?auto=format&fit=crop&q=80&w=800";
                    }}
                  />
                  <div className="absolute top-4 left-4 bg-primary text-white text-[10px] font-black uppercase px-4 py-1.5 rounded-full shadow-lg z-30">
                    {currentBooking.type}
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-start gap-6">
                  <div>
                    <h3 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white leading-tight">
                      {currentBooking.name}
                    </h3>
                    <p className="text-gray-500 mt-2 font-medium tracking-wide">{currentBooking.address}</p>
                  </div>

                  <div className="flex flex-wrap gap-8 w-full border-t border-gray-200/50 dark:border-slate-800 pt-6">
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Schedule</span>
                      <span className="text-sm font-bold text-gray-800 dark:text-gray-200">{currentBooking.checkIn}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Status</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                        <span className="text-sm font-bold text-green-600">{currentBooking.status}</span>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-black text-gray-400 tracking-widest mb-1">Total Paid</span>
                      <span className="text-sm font-black text-gray-900 dark:text-white">₹{currentBooking.totalPrice}</span>
                    </div>
                  </div>

                  <button className="px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 transition-all active:scale-95 cursor-pointer mt-4">
                    View Details
                  </button>
                </div>
             </div>
          </div>
        )}

        {/* List Section */}
        <div className="mt-20 overflow-x-auto">
          <div className="min-w-[800px]">
            <h2 className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-8 px-4">All Reservations</h2>
            <div className="grid grid-cols-6 pb-4 border-b border-gray-100 dark:border-slate-800 text-[10px] uppercase font-black text-gray-400 tracking-widest px-4">
              <div className="col-span-2">Service & Details</div>
              <div className="col-span-3">Date & Timings</div>
              <div className="text-right">Payment</div>
            </div>

            <div className="flex flex-col">
              {mixedBookings.map((booking, index) => (
                <div key={index} className="grid grid-cols-6 py-8 border-b border-gray-50 dark:border-slate-900 items-center gap-6 hover:bg-gray-50/50 dark:hover:bg-slate-900/50 transition-colors px-4 rounded-2xl">
                  {/* Info */}
                  <div className="col-span-2 flex items-center gap-4">
                    <div className="relative shrink-0">
                      <img
                        src={booking.image}
                        alt="service"
                        className="w-24 h-20 md:w-32 md:h-24 rounded-2xl object-cover shadow-sm"
                      />
                      <div className="absolute -top-2 -left-2 bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 text-gray-900 dark:text-white text-[8px] font-black uppercase px-2 py-1 rounded-md shadow-lg">
                        {booking.type}
                      </div>
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">
                        {booking.name}
                      </h3>
                      <p className="text-xs text-gray-400 font-medium truncate italic">{booking.address}</p>
                      <p className="text-[10px] text-gray-500 mt-1 uppercase font-bold tracking-tighter">{booking.details}</p>
                      <p className="text-sm font-black text-gray-900 dark:text-gray-100 mt-2">₹{booking.totalPrice}</p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Check-In / Dept:</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{booking.checkIn}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Check-Out / Arr:</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">{booking.checkOut}</span>
                    </div>
                  </div>

                  {/* Payment Status */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${booking.isPaid ? 'bg-green-500' : 'bg-red-500'}`} />
                      <span className={`text-xs font-bold ${booking.isPaid ? 'text-green-600' : 'text-red-600'}`}>
                        {booking.isPaid ? 'Paid' : 'Unpaid'}
                      </span>
                    </div>
                    {!booking.isPaid && (
                      <button className="px-5 py-2 text-xs font-bold border border-gray-200 dark:border-slate-800 rounded-full hover:bg-gray-50 dark:hover:bg-slate-900 transition-all shadow-sm active:scale-95">
                        Pay now
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyBookings;
