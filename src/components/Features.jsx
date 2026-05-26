'use client'
import React from 'react';
import { FaShieldHalved, FaHeadphones, FaWallet, FaEarthAmericas } from 'react-icons/fa6';

const Features = () => {
    const featuresList = [
        {
            icon: <FaEarthAmericas size={24} className="text-cyan-400" />,
            title: "Diverse Destinations",
            description: "Explore hundreds of unique, hand-picked travel spots tailored to your exact wanderlust desires."
        },
        {
            icon: <FaShieldHalved size={24} className="text-cyan-400" />,
            title: "Secure Bookings",
            description: "Every payment and reservation is backed by industry-leading security and instant confirmations."
        },
        {
            icon: <FaWallet size={24} className="text-cyan-400" />,
            title: "Best Price Guarantee",
            description: "Enjoy high-end luxury without high-end prices. We match any price for equivalent experiences."
        },
        {
            icon: <FaHeadphones size={24} className="text-cyan-400" />,
            title: "24/7 Premium Support",
            description: "Our dedicated travel concierges are always awake and ready to help you anywhere in the world."
        }
    ];

    return (
        <section className="py-24 px-6 md:px-12 w-11/12 max-w-7xl mx-auto">
            
            {/* Header Title */}
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-bold bg-cyan-500/10 border border-cyan-500/20 px-4 py-1.5 rounded-full">
                    Why Wanderlust
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight">
                    Crafting <span>Unforgettable</span> Memories
                </h2>
                <p className="text-gray-400 font-light text-sm sm:text-base leading-relaxed">
                    We redefine global travel by providing exceptionally curated list of destinations, frosted visual glass tools, and premium care.
                </p>
            </div>

            {/* Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {featuresList.map((item, index) => (
                    <div 
                        key={index} 
                        className="group glass-card border border-white/5 hover:border-cyan-500/20 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            {/* Icon Wrapper */}
                            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center group-hover:scale-110 duration-300">
                                {item.icon}
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 duration-200">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-light leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default Features;
