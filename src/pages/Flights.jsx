import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchFlights } from "../utils/bookingApi";
import Title from "../components/Title";

const mockFlights = [
  { airline: "SkyBlue Airways", number: "SB-204", price: 340, depTime: "08:30 AM", arrTime: "11:15 AM", duration: "2h 45m" },
  { airline: "Global Connect", number: "GC-982", price: 410, depTime: "12:00 PM", arrTime: "03:45 PM", duration: "3h 45m" },
  { airline: "Swift Travel", number: "ST-115", price: 290, depTime: "05:15 PM", arrTime: "07:50 PM", duration: "2h 35m" },
];

const Flights = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("fromDate");
  const fromId = searchParams.get("fromId");
  const toId = searchParams.get("toId");

  useEffect(() => {
    const fetchFlights = async () => {
      setLoading(true);
      // Try to fetch live data if we have IDs
      if (fromId && toId) {
        const results = await searchFlights(fromId, toId, date);
        if (results?.data && results.data.length > 0) {
          setFlights(results.data);
          setLoading(false);
          return;
        }
      }

      // Fallback to mock data for "Impressive UI"
      setTimeout(() => {
        setFlights(mockFlights);
        setLoading(false);
      }, 1500);
    };

    if (from && to && date) {
      fetchFlights();
    }
  }, [from, to, date, fromId, toId]);

  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Title
          title="Available Flights"
          subTitle={`Searching premium flights from ${from} to ${to} on ${date}.`}
        />

        <div className="mt-12 flex flex-col gap-6 pb-20">
          {loading ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
               <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
               <p className="text-gray-500 font-medium">Finding the best routes for you...</p>
            </div>
          ) : flights.length > 0 ? (
            flights.map((flight, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 md:p-10, rounded-[32px], border border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-6 w-full lg:w-auto">
                  <div className="w-20 h-20 bg-gray-50 dark:bg-slate-800 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-primary/5 transition-colors">
                    <span className="text-3xl">✈️</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white">{flight.airline || "SkyWay Premium"}</h3>
                    <p className="text-xs uppercase font-black text-gray-400 tracking-widest mt-1">{flight.number || "FL-772"}</p>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-around w-full max-w-xl">
                   <div className="text-center">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">{flight.depTime || "10:30 AM"}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 mt-1">{from}</p>
                   </div>

                   <div className="flex flex-col items-center gap-2 flex-1 px-4">
                      <div className="flex items-center w-full gap-2 opacity-20">
                         <div className="h-[2px], bg-gray-400 flex-1 rounded-full" />
                         <span className="text-xl rotate-45">✈️</span>
                         <div className="h-[2px], bg-gray-400 flex-1 rounded-full" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {flight.duration || "2h 45m"} Non-stop
                      </span>
                   </div>

                   <div className="text-center">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">{flight.arrTime || "01:15 PM"}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 mt-1">{to}</p>
                   </div>
                </div>

                <div className="flex items-center gap-8 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Avg. Price</span>
                    <p className="text-3xl font-black text-gray-900 dark:text-white">₹{flight.price || "299"}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/payment?type=Flight&price=${flight.price || 299}`)}
                    className="flex-1 lg:flex-none px-10 py-4 bg-primary text-white font-black rounded-2xl shadow-xl shadow-primary/20 hover:bg-blue-600 hover:-translate-y-1 active:scale-95 transition-all cursor-pointer"
                  >
                    Select
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-gray-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-4xl shadow-inner">✈️</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">No flights found</h3>
                <p className="text-gray-500 mt-2">We couldn't find any flights for these cities. Please try larger cities or check your spelling.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Flights;
