import { assets, testimonials } from "../assets/assets"
import Title from "./Title"

const Testimonial = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-gray-50/50 dark:bg-slate-900/20 transition-all duration-300">
        <Title title="What Our Guests Say" subTitle="Hear from our travelers who have experienced unparalleled luxury and comfort at our handpicked destinations." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-20">
            {testimonials.map((testimonial, index) => (
                <div key={index} className="flex flex-col p-8 rounded-3xl bg-white dark:bg-slate-800 border border-gray-100 dark:border-slate-700 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 group">
                    <div className="flex items-center gap-4 mb-6">
                        <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-full object-cover border-2 border-primary/20 group-hover:border-primary transition-colors" />
                        <div>
                            <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-none">{testimonial.name}</h3>
                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1.5">{testimonial.address}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <img
                                key={i}
                                src={i < testimonial.rating ? assets.starIconFilled : assets.starIconOutlined}
                                alt="star"
                                className="h-3.5"
                            />
                        ))}
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 italic leading-relaxed font-light flex-1">
                        "{testimonial.review}"
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-700 flex items-center justify-between">
                        <span className="text-[10px] uppercase font-bold tracking-widest text-primary">Verified Stay</span>
                        <img src={assets.logo} alt="logo" className="h-4 dark:invert opacity-20" />
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Testimonial
