import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";

const Hero = () => {
  return (
    <div
      className="relative flex flex-col items-start justify-center px-6 md:px-16 lg:px-24 xl:px-32 text-white bg-no-repeat bg-cover bg-center h-screen pt-20 md:pt-0"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0" />

      <div className="relative z-10 w-full flex flex-col items-start">
        <p className="bg-[#49B9FF]/50 dark:bg-[#49B9FF]/30 px-4 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10 mt-10 md:mt-20">
          The Ultimate Hotel Experience
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold max-w-2xl mt-4 md:mt-6 leading-tight">
          Discover Your Perfect <span className="text-secondary">Gateway</span> Destination
        </h1>
        <p className="max-w-[560px] mt-4 text-base md:text-lg text-gray-100 dark:text-gray-200 leading-relaxed font-light">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>

        <form className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-xl shadow-2xl p-6 md:p-8 mt-12 flex flex-col md:flex-row items-stretch md:items-end gap-6 w-full max-w-5xl backdrop-blur-md">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.locationIcon} alt="" className="h-4 dark:invert" />
              <label htmlFor="destinationInput" className="text-sm font-semibold uppercase tracking-wider">Destination</label>
            </div>
            <input
              list="destinations"
              id="destinationInput"
              type="text"
              className="w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="Where are you going?"
              required
            />
            <datalist id="destinations">
              {cities.map((city, index) => (
                <option key={index} value={city} />
              ))}
            </datalist>
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.calenderIcon} alt="" className="h-4 dark:invert" />
              <label htmlFor="checkIn" className="text-sm font-semibold uppercase tracking-wider">Check in</label>
            </div>
            <input
              id="checkIn"
              type="date"
              className="w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <svg
                className="w-4 h-4 text-gray-600 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 10h16M8 14h8m-4-7V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
                />
              </svg>
              <label htmlFor="checkOut" className="text-sm font-semibold uppercase tracking-wider">Check out</label>
            </div>
            <input
              id="checkOut"
              type="date"
              className="w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
          </div>

          <div className="w-full md:w-32">
            <div className="flex items-center gap-2 mb-2">
              <img src={assets.guestsIcon} alt="" className="h-4 dark:invert" />
              <label htmlFor="guests" className="text-sm font-semibold uppercase tracking-wider">Guests</label>
            </div>
            <input
              min={1}
              max={10}
              id="guests"
              type="number"
              className="w-full rounded-lg border border-gray-200 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/50 transition-all"
              placeholder="0"
            />
          </div>

          <button className="flex items-center justify-center gap-2 rounded-lg bg-black dark:bg-primary py-3 px-8 text-white font-bold hover:bg-gray-800 dark:hover:bg-blue-600 transition-all shadow-lg hover:shadow-xl active:scale-95 cursor-pointer w-full md:w-auto self-end h-[42px] md:h-[46px]">
            <img src={assets.searchIcon} alt="" className="h-5 invert" />
            <span>Search</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
