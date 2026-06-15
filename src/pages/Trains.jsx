import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { searchTrains } from "../utils/bookingApi";
import Title from "../components/Title";

const mockTrains = [
  { company: "Express Explorer", number: "TR-5022", price: 885, depTime: "08:00 AM", arrTime: "01:30 PM", duration: "5h 30m" },
  { company: "Bullet Master", number: "BM-110", price: 155, depTime: "11:00 AM", arrTime: "02:45 PM", duration: "3h 45m" },
  { company: "Night Rider", number: "NR-998", price: 665, depTime: "09:30 PM", arrTime: "05:15 AM", duration: "7h 45m" },
];

const Trains = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [trains, setTrains] = useState([]);
  const [loading, setLoading] = useState(true);

  const from = searchParams.get("from");
  const to = searchParams.get("to");
  const date = searchParams.get("fromDate");
  const fromId = searchParams.get("fromId");
  const toId = searchParams.get("toId");

  useEffect(() => {
    const fetchTrains = async () => {
      setLoading(true);
      if (fromId && toId) {
        const results = await searchTrains(fromId, toId, date);
        if (results?.data && results.data.length > 0) {
          setTrains(results.data);
          setLoading(false);
          return;
        }
      }

      // Fallback
      setTimeout(() => {
        setTrains(mockTrains);
        setLoading(false);
      }, 1500);
    };

    if (from && to && date) {
      fetchTrains();
    }
  }, [from, to, date, fromId, toId]);

  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Title
          title="Train Expeditions"
          subTitle={`Comfortable rail journeys from ${from} to ${to} on ${date}.`}
        />

        <div className="mt-12 flex flex-col gap-6 pb-20">
          {loading ? (
            <div className="py-20 text-center flex flex-col items-center gap-4">
               <div className="w-12 h-12 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
               <p className="text-gray-500 font-medium">Tracking available rail routes...</p>
            </div>
          ) : trains.length > 0 ? (
            trains.map((train, index) => (
              <div key={index} className="bg-white dark:bg-slate-900 p-6 md:p-10 rounded-[32px] border border-gray-100 dark:border-slate-800 flex flex-col lg:flex-row items-center justify-between gap-10 shadow-sm hover:shadow-2xl transition-all duration-500 group">
                <div className="flex items-center gap-6 w-full lg:w-auto">
                  <div className="w-20 h-20 bg-amber-50/50 dark:bg-amber-900/10 rounded-3xl flex items-center justify-center shadow-inner group-hover:bg-amber-500/5 transition-colors">
                    <span className="text-3xl text-amber-600 dark:text-amber-500">🚆</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white">{train.company}</h3>
                    <p className="text-xs uppercase font-black text-gray-400 tracking-widest mt-1">{train.number}</p>
                  </div>
                </div>

                <div className="flex flex-1 items-center justify-around w-full max-w-xl">
                   <div className="text-center">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">{train.depTime}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 mt-1">{from}</p>
                   </div>

                   <div className="flex flex-col items-center gap-2 flex-1 px-4">
                      <div className="flex items-center w-full gap-2 opacity-20">
                         <div className="h-[2px] bg-gray-400 flex-1 rounded-full" />
                         <span className="text-xl">🚆</span>
                         <div className="h-[2px] bg-gray-400 flex-1 rounded-full" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-3 py-1 rounded-full">
                        {train.duration} Direct
                      </span>
                   </div>

                   <div className="text-center">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">{train.arrTime}</p>
                      <p className="text-xs uppercase font-bold text-gray-400 mt-1">{to}</p>
                   </div>
                </div>

                <div className="flex items-center gap-8 w-full lg:w-auto border-t lg:border-t-0 lg:border-l border-gray-100 dark:border-slate-800 pt-6 lg:pt-0 lg:pl-10">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase font-bold text-gray-400">Seat Price</span>
                    <p className="text-3xl font-black text-gray-900 dark:text-white">₹{train.price}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/payment?type=Train&price=${train.price}`)}
                    className="flex-1 lg:flex-none px-10 py-4 bg-amber-500 text-white font-black rounded-2xl shadow-xl shadow-amber-500/20 hover:bg-amber-600 hover:-translate-y-1 active:scale-95 transition-all cursor-pointer"
                  >
                    Book Seat
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-20 text-center flex flex-col items-center gap-6">
              <div className="w-24 h-24 bg-gray-50 dark:bg-slate-900 rounded-full flex items-center justify-center text-4xl shadow-inner">🚆</div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">No trains found</h3>
                <p className="text-gray-500 mt-2">We couldn't find any rail routes for these cities. Please try alternative destinations.</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Trains;
