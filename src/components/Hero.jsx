import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { assets, cities } from "../assets/assets";
import heroImage from "../assets/heroImage.png";
import ServiceSelector from "./ServiceSelector";
import { searchLocations } from "../utils/bookingApi";

const Hero = () => {
  const [activeService, setActiveService] = useState('hotels');
  const navigate = useNavigate();
  const dropdownRef = useRef(null);

  // Form State
  const [formData, setFormData] = useState({
    destination: "",
    from: "",
    to: "",
    date: "",
    guests: 1
  });

  const [locationIds, setLocationIds] = useState({
    from: "",
    to: ""
  });

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState({ from: false, to: false });
  const [loadingSuggestions, setLoadingLoadingSuggestions] = useState(false);

  // Handle Input Changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));

    // Clear ID if user manually types
    if (id === 'from' || id === 'to') {
      setLocationIds(prev => ({ ...prev, [id]: "" }));
    }
  };

  // Debounced Suggestion Fetching
  useEffect(() => {
    const fetchSuggestions = async (query, type) => {
      setLoadingLoadingSuggestions(true);
      const results = await searchLocations(query);
      setSuggestions(results);
      setLoadingLoadingSuggestions(false);
      setShowSuggestions({ from: type === 'from', to: type === 'to' });
    };

    const timer = setTimeout(() => {
      if (formData.from.length > 1 && !locationIds.from) {
        fetchSuggestions(formData.from, 'from');
      } else if (formData.to.length > 1 && !locationIds.to) {
        fetchSuggestions(formData.to, 'to');
      } else {
        setSuggestions([]);
        setShowSuggestions({ from: false, to: false });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [formData.from, formData.to, locationIds.from, locationIds.to]);

  // Click Outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowSuggestions({ from: false, to: false });
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectSuggestion = (suggestion, type) => {
    setFormData(prev => ({ ...prev, [type]: suggestion.name }));
    setLocationIds(prev => ({ ...prev, [type]: suggestion.dest_id }));
    setShowSuggestions({ from: false, to: false });
    setSuggestions([]);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (activeService === 'hotels') {
      navigate('/rooms');
    } else {
      const params = new URLSearchParams({
        from: formData.from,
        to: formData.to,
        fromDate: formData.date,
        fromId: locationIds.from,
        toId: locationIds.to
      }).toString();
      navigate(`/${activeService}?${params}`);
    }
    window.scrollTo(0, 0);
  };

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

        <p className="bg-[#49B9FF]/50 dark:bg-[#49B9FF]/30 px-4 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm border border-white/10 mt-6">
          The Ultimate {activeService.charAt(0).toUpperCase() + activeService.slice(1)} Experience
        </p>
        <h1 className="font-playfair text-3xl md:text-5xl lg:text-6xl font-bold md:font-extrabold max-w-2xl mt-4 md:mt-6 leading-tight">
          Discover Your Perfect <span className="text-secondary">Gateway</span> Destination
        </h1>
        <p className="max-w-[560px] mt-4 text-base md:text-lg text-gray-100 dark:text-gray-200 leading-relaxed font-light">
          Unparalleled luxury and comfort await at the world's most exclusive
          destinations. Start your journey today.
        </p>

        <form
          onSubmit={handleSearch}
          className="bg-white dark:bg-slate-900 text-gray-700 dark:text-gray-300 rounded-2xl shadow-2xl p-6 md:p-10 mt-10 flex flex-col md:flex-row items-stretch md:items-end gap-6 w-full max-w-6xl backdrop-blur-md border border-gray-100 dark:border-slate-800"
        >
          {activeService === 'hotels' ? (
            <>
              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="loc" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="destination" className="text-xs font-black uppercase tracking-widest opacity-80">Destination</label>
                </div>
                <input
                  list="destinations"
                  id="destination"
                  type="text"
                  value={formData.destination}
                  onChange={handleInputChange}
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
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="0"
                />
              </div>
            </>
          ) : (
            <>
              <div className="flex-1 flex flex-col gap-3 relative" ref={dropdownRef}>
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="from" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="from" className="text-xs font-black uppercase tracking-widest opacity-80">From</label>
                </div>
                <input
                  id="from"
                  type="text"
                  value={formData.from}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Departure City"
                  required
                  autoComplete="off"
                />

                {/* Suggestions Dropdown */}
                {showSuggestions.from && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 z-50 max-h-60 overflow-y-auto">
                    {loadingSuggestions ? (
                      <p className="p-4 text-xs text-gray-500 italic">Finding places...</p>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <div
                          key={item.dest_id}
                          onClick={() => selectSuggestion(item, 'from')}
                          className="px-5 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer flex flex-col gap-0.5 border-b border-gray-50 dark:border-slate-800 last:border-none"
                        >
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{item.name}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">{item.country}</span>
                        </div>
                      ))
                    ) : (
                      <p className="p-4 text-xs text-gray-500">No matches found</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-3 relative">
                <div className="flex items-center gap-2">
                  <img src={assets.locationIcon} alt="to" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="to" className="text-xs font-black uppercase tracking-widest opacity-80">To</label>
                </div>
                <input
                  id="to"
                  type="text"
                  value={formData.to}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder="Destination City"
                  required
                  autoComplete="off"
                />

                {/* Suggestions Dropdown */}
                {showSuggestions.to && (
                  <div className="absolute top-full left-0 w-full mt-2 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-gray-100 dark:border-slate-800 z-50 max-h-60 overflow-y-auto">
                    {loadingSuggestions ? (
                      <p className="p-4 text-xs text-gray-500 italic">Finding places...</p>
                    ) : suggestions.length > 0 ? (
                      suggestions.map((item) => (
                        <div
                          key={item.dest_id}
                          onClick={() => selectSuggestion(item, 'to')}
                          className="px-5 py-3 hover:bg-gray-50 dark:hover:bg-slate-800 cursor-pointer flex flex-col gap-0.5 border-b border-gray-50 dark:border-slate-800 last:border-none"
                        >
                          <span className="text-sm font-bold text-gray-900 dark:text-white">{item.name}</span>
                          <span className="text-[10px] text-gray-400 uppercase tracking-tighter">{item.country}</span>
                        </div>
                      ))
                    ) : (
                      <p className="p-4 text-xs text-gray-500">No matches found</p>
                    )}
                  </div>
                )}
              </div>

              <div className="flex-1 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <img src={assets.calenderIcon} alt="date" className="h-4 dark:invert opacity-70" />
                  <label htmlFor="date" className="text-xs font-black uppercase tracking-widest opacity-80">Date</label>
                </div>
                <input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full rounded-xl border border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-950/50 px-5 py-3 text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  required
                />
              </div>
            </>
          )}

          <button
            type="submit"
            className="flex items-center justify-center rounded-xl bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm tracking-widest py-4 px-10 hover:bg-gray-800 dark:hover:bg-gray-100 transition-all shadow-xl active:scale-95 cursor-pointer w-full md:w-auto h-[50px]"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Hero;
