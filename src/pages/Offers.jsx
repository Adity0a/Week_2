import { exclusiveOffers, assets } from "../assets/assets";
import Title from "../components/Title";

const Offers = () => {
  return (
    <div className="pt-32 px-6 md:px-16 lg:px-24 xl:px-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <Title
            title="Exclusive Travel Offers"
            subTitle="Unbeatable deals for your next dream escape. Book now and experience luxury for less."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-20">
          {exclusiveOffers.map((offer) => (
            <div key={offer._id} className="group relative flex flex-col bg-gray-50 dark:bg-slate-900 rounded-[32px] overflow-hidden border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-2xl transition-all duration-500">

              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Badge */}
                <div className="absolute top-6 right-6 bg-secondary text-black font-black px-4 py-2 rounded-2xl shadow-xl transform group-hover:scale-110 transition-transform">
                  {offer.priceOff}% OFF
                </div>

                {/* Status */}
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-[10px] text-white uppercase font-bold tracking-widest">Available Now</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors leading-tight">
                  {offer.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-4 text-sm leading-relaxed font-light line-clamp-3">
                  {offer.description}
                </p>

                <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-200/50 dark:border-slate-800">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">Limited Time Until</span>
                    <span className="text-sm text-gray-800 dark:text-gray-200 font-bold">{offer.expiryDate}</span>
                  </div>
                  <button className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white font-bold rounded-xl hover:bg-blue-600 shadow-lg hover:shadow-primary/30 active:scale-95 transition-all cursor-pointer">
                    Claim Deal
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gray-50 dark:bg-slate-900/50 rounded-[40px] p-10 md:p-16 mb-24 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <img src={assets.badgeIcon} alt="trust" className="h-6 dark:invert" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Best Rate Guarantee</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light">We promise you'll find the best price for your stay right here.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center">
                    <img src={assets.heartIcon} alt="flexibility" className="h-6 dark:invert" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">Flexible Booking</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light">Free cancellation on most offers to keep your plans stress-free.</p>
            </div>
            <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center">
                    <img src={assets.userIcon} alt="support" className="h-6 dark:invert" />
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white">24/7 VIP Support</h4>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-light">Our dedicated team is always ready to assist with your luxury stay.</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Offers;
