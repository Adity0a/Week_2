import { useState } from "react";
import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";
import ServiceSelector from "./ServiceSelector";

const Hero = () => {
  const [activeService, setActiveService] = useState('hotels');

  return (
    <div
      className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen pt-20 md:pt-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0" />

      <div className="relative z-10 w-full flex flex-col items-start">
        <ServiceSelector
          activeService={activeService}
          onServiceChange={setActiveService}
        />

        <p className="bg-[#49B9FF]/50 dark:bg-[#49B9FF]/30 px-4 py-1.5 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10 mt-6">
          The Ultimate {activeService.charAt(0).toUpperCase() + activeService.slice(1)} Experience
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold max-w-2xl mt-4 md:mt-6 leading-tight">
          Discover Your Perfect <span className="text-secondary">Gateway</span> Destination
        </h1>
        <p className="max-w-[560px] mt-4 text-base md:text-lg text-gray-100 dark:text-gray-200 leading-relaxed font-light">
          Unparalleled luxury and comfort await at the world's most exclusive
          destinations. Start your journey today.
        </p>

        <form className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-2xl shadow-2xl p-6 md:p-10 mt-10 flex flex-col md:flex-row items-stretch md:items-end gap-6 w-full max-w-6xl backdrop-blur-md border border-gray-100 dark:border-slate-800">
          {activeService === 'hotels' ? (
            <>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="loc" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="destinationInput" className="text-xs font-black uppercase tracking-widest opacity-80">Destination</label>
                </div>
                <input
                  list="destinations"
                  id="destinationInput"
                  type="text"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Where are you going?"
                  required
                />
                <datalist id="destinations">
                  {cities.map((city, index) => (
                    <option key={index} value={city} />
                  ))}
                </datalist>
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="check-in" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="checkIn" className="text-xs font-black uppercase tracking-widest opacity-80">Check In</label>
                </div>
                <input
                  id="checkIn"
                  type="date"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="check-out" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="checkOut" className="text-xs font-black uppercase tracking-widest opacity-80">Check Out</label>
                </div>
                <input
                  id="checkOut"
                  type="date"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>

              <div className="w-full md:w-40 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.guestsIcon} alt="guests" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="guests" className="text-xs font-black uppercase tracking-widest opacity-80">Guests</label>
                </div>
                <input
                  min={1}
                  max={10}
                  id="guests"
                  type="number"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="0"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="from" className="h-4 dark:invert opacity-70" />
                  <label className="text-xs font-black uppercase tracking-widest opacity-80">From</label>
                </div>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Departure City"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="to" className="h-4 dark:invert opacity-70" />
                  <label className="text-xs font-black uppercase tracking-widest opacity-80">To</label>
                </div>
                <input
                  type="text"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Destination City"
                />
              </div>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="date" className="h-4 dark:invert opacity-70" />
                  <label className="text-xs font-black uppercase tracking-widest opacity-80">Date</label>
                </div>
                <input
                  type="date"
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </>
          )}

          <button className="flex items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm tracking-widest py-4 px-10 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl active:scale-95 cursor-pointer w-full md:w-auto h-[50px]">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
