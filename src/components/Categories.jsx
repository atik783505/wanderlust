'use client'
import React from 'react';
import { FaUmbrellaBeach, FaMountain, FaCity, FaCompass, FaCrown, FaArrowRight } from 'react-icons/fa6';
import Link from 'next/link';

const Categories = () => {
    const categoriesList = [
        {
            icon: <FaUmbrellaBeach size={26} />,
            name: "Beach Escapes",
            count: "12+ Locations",
            bgGradient: "from-amber-500/20 via-orange-600/5 to-transparent",
            colorClass: "text-amber-400"
        },
        {
            icon: <FaMountain size={26} />,
            name: "Mountain Heights",
            count: "8+ Locations",
            bgGradient: "from-emerald-500/20 via-teal-600/5 to-transparent",
            colorClass: "text-emerald-400"
        },
        {
            icon: <FaCity size={26} />,
            name: "Metropolitan",
            count: "15+ Locations",
            bgGradient: "from-blue-500/20 via-indigo-600/5 to-transparent",
            colorClass: "text-blue-400"
        },
        {
            icon: <FaCrown size={26} />,
            name: "Luxury Cruises",
            count: "5+ Locations",
            bgGradient: "from-purple-500/20 via-pink-600/5 to-transparent",
            colorClass: "text-purple-400"
        },
        {
            icon: <FaCompass size={26} />,
            name: "Wild Adventure",
            count: "10+ Locations",
            bgGradient: "from-rose-500/20 via-red-600/5 to-transparent",
            colorClass: "text-rose-400"
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 w-11/12 max-w-7xl mx-auto border-t border-white/5">
            
            {/* Header Text */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
                <div className="space-y-4 max-w-2xl">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
                        Categories
                    </span>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-cyan-indigo text-glow-cyan">Vibe</span>
                    </h2>
                    <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                        Filter through our carefully selected categories to locate exactly the adventure your heart desires.
                    </p>
                </div>

                <Link href="/all-destination" className="group flex items-center gap-2 text-cyan-400 font-bold text-sm tracking-wide bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 hover:border-cyan-500/35 px-6 py-3.5 rounded-2xl cursor-pointer transition-all duration-300">
                    Explore All <FaArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {categoriesList.map((cat, idx) => (
                    <Link href="/all-destination" key={idx} className="block group">
                        <div className={`relative overflow-hidden glass-panel border border-white/5 group-hover:border-white/15 rounded-3xl p-6 sm:p-8 space-y-6 shadow-lg h-full transition-all duration-300 hover:scale-[1.03] bg-gradient-to-br ${cat.bgGradient}`}>
                            
                            {/* Category Icon */}
                            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center ${cat.colorClass} group-hover:scale-110 duration-300`}>
                                {cat.icon}
                            </div>

                            {/* Details */}
                            <div className="space-y-1 pt-4">
                                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 duration-200">
                                    {cat.name}
                                </h3>
                                <p className="text-xs text-gray-500 uppercase tracking-widest font-semibold">
                                    {cat.count}
                                </p>
                            </div>

                        </div>
                    </Link>
                ))}
            </div>

        </section>
    );
};

export default Categories;
