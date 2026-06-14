import { roomsDummyData } from "../assets/assets"
import HotelCard from "./HotelCard"
import Title from "./Title"
import { useNavigate } from "react-router-dom"

const FeatureDestination = () => {
    const navigate = useNavigate()
  return (
      <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-gray-50/50 dark:bg-slate-900/20 py-16 md:py-24 transition-all duration-300">
        <Title title='Featured Destination' subTitle='Discover out handpicked selection of exceptional properties around the world, offering unparalleled luxury and unforgettable experiences.' />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 w-full mt-12 md:mt-20">
            {roomsDummyData.slice(0,4).map((room, index)=>(
                <HotelCard key={room._id} room={room} index={index} />
            ))}
        </div>

        <button onClick={()=>{navigate('/rooms'); window.scrollTo(0,0)}} className="mt-12 md:mt-16 px-10 py-3 text-sm font-bold border border-gray-300 dark:border-slate-700 rounded-full bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 transition-all cursor-pointer shadow-md hover:shadow-lg active:scale-95">
            View All Destinations
        </button>
    </div>
  )
}

export default FeatureDestination