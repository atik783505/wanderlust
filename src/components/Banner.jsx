import { Separator } from "@heroui/react";
import { FaLocationDot, FaCalendar, FaDollarSign, FaUsers, FaMagnifyingGlass } from "react-icons/fa6";

const Banner = () => {
  return (
    <div className="relative min-h-[90vh] bg-[url('/assets/banner.png')] bg-cover bg-center text-white flex justify-between flex-col items-center gap-5 pb-20 pt-32">
      
      {/* Immersive Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-slate-950/40 backdrop-brightness-[0.85] z-0"></div>

      {/* Hero Typography & CTAs */}
      <div className="relative z-10 p-4 max-w-4xl text-center flex justify-center flex-col items-center gap-6 flex-1">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight md:leading-none text-glow-cyan">
          Discover Your <br />
          <span className="text-glow-cyan">Next Adventure</span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl font-light">
          Explore breathtaking destinations and create unforgettable memories with our curated, high-end travel experiences.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-4 w-full justify-center px-6 sm:px-0">
          <button className="uppercase font-semibold tracking-wider bg-gradient-cyan-indigo px-8 py-4 rounded-full shadow-[0_4px_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] cursor-pointer hover:scale-105 transition-all duration-300">
            Explore Now
          </button>

          <button className="uppercase font-semibold tracking-wider px-8 py-4 rounded-full glass-panel hover:bg-white/10 cursor-pointer hover:scale-105 transition-all duration-300">
            View Destinations
          </button>
        </div>
      </div>

      {/* Floating Glassmorphic Search Panel */}
      <div className="relative z-10 w-11/12 max-w-5xl mx-auto glass-panel rounded-3xl p-6 sm:p-8 shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col md:flex-row justify-between gap-6 items-stretch md:items-center transform translate-y-12 backdrop-blur-2xl">
        
        {/* Location Picker */}
        <div className="flex-1 flex gap-4 items-center px-2">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
            <FaLocationDot size={20} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Location</h3>
            <p className="text-sm font-semibold text-gray-200 mt-0.5">Address, City or Zip</p>
          </div>
        </div>

        <div className="hidden md:block h-10 w-[1px] bg-white/10" />

        {/* Date / Duration Picker */}
        <div className="flex-1 flex gap-4 items-center px-2">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
            <FaCalendar size={20} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Date/Duration</h3>
            <p className="text-sm font-semibold text-gray-200 mt-0.5">Anytime / 3 Days</p>
          </div>
        </div>

        <div className="hidden md:block h-10 w-[1px] bg-white/10" />

        {/* Budget Picker */}
        <div className="flex-1 flex gap-4 items-center px-2">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
            <FaDollarSign size={20} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Budget</h3>
            <p className="text-sm font-semibold text-gray-200 mt-0.5">$0 - $3000</p>
          </div>
        </div>

        <div className="hidden md:block h-10 w-[1px] bg-white/10" />

        {/* People Picker */}
        <div className="flex-1 flex gap-4 items-center px-2">
          <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400">
            <FaUsers size={20} />
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">People</h3>
            <p className="text-sm font-semibold text-gray-200 mt-0.5">5 - 10 Persons</p>
          </div>
        </div>

        {/* Search Call to Action */}
        <button className="flex items-center justify-center gap-2 bg-gradient-cyan-indigo px-8 py-4 rounded-2xl hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] cursor-pointer text-white font-bold transition-all duration-300 md:self-stretch">
          <FaMagnifyingGlass size={16} />
          <span className="md:hidden lg:inline">Search</span>
        </button>
      </div>

    </div>
  );
};

export default Banner;