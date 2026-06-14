import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const HotelCard = ({ room, index }) => {
  return (
    <Link
      to={"/rooms/" + room._id}
      onClick={() => window.scrollTo(0, 0)}
      key={room._id}
      className="relative flex flex-col w-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800 text-gray-500/90 dark:text-gray-400 shadow-sm hover:shadow-2xl transition-all duration-500 group border border-gray-100 dark:border-slate-700 h-full"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={room.images[0]}
          alt={room.hotel.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {index % 2 === 0 && (
          <p className="px-3 py-1.5 absolute top-3 left-3 text-[10px] uppercase font-bold tracking-widest bg-white/90 dark:bg-slate-900/90 text-primary dark:text-blue-400 rounded-lg shadow-xl backdrop-blur-md">
            Best Seller
          </p>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-playfair text-xl font-bold text-gray-900 dark:text-white leading-tight">
            {room.hotel.name}
          </h3>
          <div className="flex items-center gap-1 px-2 py-1 bg-secondary/10 dark:bg-secondary/20 rounded-lg text-xs text-secondary font-black shrink-0 border border-secondary/20">
            <img className="h-3" src={assets.starIconFilled} alt="star" />
            4.5
          </div>
        </div>

        <div className="flex items-center gap-1.5 mt-3 text-sm text-gray-500 dark:text-gray-400">
          <img className="h-4 dark:invert opacity-60" src={assets.locationFilledIcon} alt="location" />
          <span className="truncate italic font-light">{room.hotel.address}</span>
        </div>

        <div className='flex items-center justify-between mt-auto pt-6'>
          <div className="flex flex-col">
            <span className='text-2xl text-primary font-black'>${room.pricePerNight}</span>
            <span className='text-[10px] font-bold uppercase tracking-tighter opacity-60'>per night</span>
          </div>
          <button className='px-6 py-2.5 text-sm font-bold bg-primary text-white rounded-xl hover:bg-blue-600 active:scale-95 transition-all shadow-md hover:shadow-primary/40 cursor-pointer'>
            Book
          </button>
        </div>
      </div>
    </Link>
  );
}

export default HotelCard
