import { assets } from "../assets/assets";
import Title from "../components/Title";

const About = () => {
  return (
    <div className="pt-32 min-h-screen bg-white dark:bg-slate-950 transition-colors duration-300">

      {/* Brand Story */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 mb-24 md:mb-32">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
            <img
              src={assets.regImage}
              alt="Our Story"
              className="relative w-full rounded-[40px] shadow-2xl z-10 border-8 border-white dark:border-slate-900"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col items-start">
            <span className="px-4 py-1.5 bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] rounded-full mb-6">
              Our Journey
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-8">
              Redefining the Art of <span className="text-primary italic">Luxury</span> Stays
            </h1>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light mb-6">
              QuickStay was born out of a simple passion: to make world-class luxury accessible to everyone. We believe that every traveler deserves a stay that isn't just a room, but a memory.
            </p>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed font-light">
              Since 2018, we've handpicked over 500 exclusive resorts and hotels across the globe. Each destination is vetted for its commitment to comfort, unique design, and unparalleled service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 dark:bg-slate-900/40 py-20 px-6 md:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-2">500+</h2>
            <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Luxury Hotels</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-2">12k+</h2>
            <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Happy Travelers</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-2">45+</h2>
            <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Global Cities</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-5xl font-playfair font-black text-primary mb-2">4.9/5</h2>
            <p className="text-xs uppercase font-bold text-gray-400 tracking-widest">Average Rating</p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 py-24 md:py-32">
        <div className="max-w-6xl mx-auto">
          <Title
            title="Our Core Values"
            subTitle="The principles that guide every booking and every traveler experience we create."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-20">
            <div className="p-10 rounded-[32px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-8">
                    <img src={assets.homeIcon} alt="Comfort" className="h-5 dark:invert" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Ultimate Comfort</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
                    We prioritize properties that go above and beyond in providing a restful, rejuvenating environment for every guest.
                </p>
            </div>

            <div className="p-10 rounded-[32px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 transform md:-translate-y-8">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center mb-8">
                    <img src={assets.starIconFilled} alt="Luxury" className="h-5 dark:invert" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Curated Luxury</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
                    Our selection isn't about the number of rooms; it's about the quality of the experience and the attention to detail.
                </p>
            </div>

            <div className="p-10 rounded-[32px] bg-white dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-green-50 dark:bg-green-900/20 flex items-center justify-center mb-8">
                    <img src={assets.heartIcon} alt="Trust" className="h-5 dark:invert" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Unwavering Trust</h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed font-light">
                    Transparent pricing, verified reviews, and 24/7 support ensure you can book with complete confidence.
                </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-16 lg:px-24 xl:px-32 pb-32">
        <div className="max-w-6xl mx-auto rounded-[48px] bg-primary relative overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full -ml-32 -mb-32 blur-3xl" />

            <h2 className="font-playfair text-3xl md:text-5xl font-bold text-white mb-8 relative z-10">Ready for your next adventure?</h2>
            <p className="text-white/80 max-w-xl mx-auto mb-10 text-lg font-light relative z-10">
                Join thousands of luxury travelers who have found their perfect getaway destination with QuickStay.
            </p>
            <button className="relative z-10 px-12 py-4 bg-white text-primary font-black rounded-full shadow-2xl hover:bg-gray-100 hover:scale-105 active:scale-95 transition-all">
                Explore Destinations
            </button>
        </div>
      </section>

    </div>
  );
};

export default About;
