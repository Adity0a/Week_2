import Title from "./Title"
import {assets, exclusiveOffers} from "../assets/assets"
 
const ExcclusiveOffers = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-white dark:bg-slate-900 transition-all duration-300">
        <div className="flex flex-col md:flex-row items-center md:items-end justify-between gap-8 text-center md:text-left">
            <Title align='left' title='Exclusive Offers' subTitle='Take advantage of our limited offers and special packages to enhance your stay and create unforgettable memories.' />
            <button className="flex items-center gap-3 px-8 py-3 bg-primary text-white rounded-full font-bold hover:bg-blue-600 transition-all shrink-0 shadow-lg hover:shadow-primary/30 active:scale-95 group">
                View All Offers
                <img src={assets.arrowIcon} alt="arrow-icon" className="h-3 invert group-hover:translate-x-1.5 transition-transform" />
            </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-12 md:mt-16">
          {exclusiveOffers.map((offer) => (
            <div key={offer._id} className="group flex flex-col h-full rounded-3xl bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="relative overflow-hidden rounded-t-3xl aspect-[16/10]">
                <img src={offer.image} alt={offer.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 bg-secondary text-black font-black px-4 py-1.5 rounded-xl shadow-xl animate-pulse">
                  {offer.priceOff}% OFF
                </div>
                <div className="absolute bottom-4 left-4">
                   <span className="text-[10px] text-white/80 uppercase font-black tracking-widest bg-black/20 backdrop-blur-md px-3 py-1 rounded-full"> Limited Time </span>
                </div>
              </div>
              <div className="p-8 flex flex-col flex-1">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white leading-tight">{offer.title}</h3>
                <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-relaxed font-light">{offer.description}</p>
                <div className="flex items-center justify-between mt-auto pt-8">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-gray-400 uppercase font-bold tracking-tighter">Valid Until</span>
                    <span className="text-sm text-gray-700 dark:text-gray-300 font-bold">{offer.expiryDate}</span>
                  </div>
                  <button className="px-6 py-2 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-bold text-sm hover:scale-105 transition-all shadow-md">
                    Claim Offer
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default ExcclusiveOffers