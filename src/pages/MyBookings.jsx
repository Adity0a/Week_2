import { assets, userBookingsDummyData } from "../assets/assets";

const MyBookings = () => {
  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-playfair font-bold text-gray-900 dark:text-white">My Bookings</h1>
        <p className="text-sm md:text-base text-gray-500 dark:text-gray-400 mt-3 max-w-2xl leading-relaxed">
          Easily manage your past, current, and upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.
        </p>

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Header Row */}
            <div className="grid grid-cols-6 pb-4 border-b border-gray-100 dark:border-slate-800 text-[10px] uppercase font-black text-gray-400 tracking-widest">
              <div className="col-span-2">Hotels</div>
              <div className="col-span-3">Date & Timings</div>
              <div className="text-right">Payment</div>
            </div>

            {/* Booking Items */}
            <div className="flex flex-col">
              {userBookingsDummyData.map((booking, index) => (
                <div key={index} className="grid grid-cols-6 py-8 border-b border-gray-50 dark:border-slate-900 items-center gap-6">
                  {/* Hotel Info */}
                  <div className="col-span-2 flex items-center gap-4">
                    <img
                      src={booking.room.images[0]}
                      alt="hotel"
                      className="w-24 h-20 md:w-32 md:h-24 rounded-xl object-cover shadow-sm"
                    />
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <h3 className="text-base font-bold text-gray-900 dark:text-white truncate">
                        {booking.hotel.name} <span className="text-xs font-light opacity-60">({booking.room.roomType})</span>
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-gray-400">
                        <img src={assets.locationIcon} alt="loc" className="h-3 dark:invert opacity-60" />
                        <span className="truncate">{booking.hotel.address}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Guests: {booking.guests}</p>
                      <p className="text-sm font-bold text-gray-900 dark:text-gray-100 mt-1">Total: ${booking.totalPrice}</p>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="col-span-3 grid grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Check-In:</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {new Date(booking.checkInDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-tighter">Check-Out:</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                        {new Date(booking.checkOutDate).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                      </span>
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
