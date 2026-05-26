
import Bokingcard from "@/components/Bokingcard";
import { Default } from "@/components/Delete";
import { Updatemodal } from "@/components/Updatemodal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaLocationCrosshairs, FaClock, FaHeart } from "react-icons/fa6";

const destinationDetails = async ({ params }) => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })

    const { id } = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/destination/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const destination = await res.json()

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-12 px-4">
            <div key={destination._id} className="space-y-8">
                
                {/* Admin Action Bar (Update & Delete) */}
                <div className="flex justify-between items-center bg-white/5 border border-white/10 backdrop-blur-md rounded-2xl p-4">
                    <span className="text-xs font-semibold text-gray-400">ADMIN CONTROL PANEL</span>
                    <div className="flex gap-3">
                        <Updatemodal destination={destination}></Updatemodal>
                        <Default destination={destination}></Default>
                    </div>
                </div>

                {/* Hero Image Block */}
                <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-[0_15px_30px_rgba(0,0,0,0.5)] border border-white/10">
                    <Image 
                        className="w-full h-full object-cover" 
                        src={destination.imageUrl} 
                        alt={destination.destinationName} 
                        width={1200} 
                        height={600} 
                        priority
                    />
                    {/* Visual Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                    
                    {/* Floating Info */}
                    <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:justify-between md:items-end gap-4">
                        <div>
                            <span className="bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 backdrop-blur-md text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full flex items-center gap-2 w-max mb-3">
                                <FaLocationCrosshairs size={12} /> {destination.country}
                            </span>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white text-glow-cyan leading-tight">
                                {destination.destinationName}
                            </h1>
                        </div>
                        <div className="bg-slate-950/65 border border-white/10 backdrop-blur-md px-4 py-2 rounded-2xl flex items-center gap-2 text-gray-200 text-sm font-semibold w-max">
                            <FaClock className="text-cyan-400" /> {destination.duration}
                        </div>
                    </div>
                </div>

                {/* Content Grid Layout: Desktop 2-Column, Mobile Stacked */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    
                    {/* Left Column: Details (2 cols on large screen) */}
                    <div className="lg:col-span-2 space-y-8">
                        
                        {/* Overview Card */}
                        <div className="glass-card border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4">
                            <h2 className="text-2xl font-extrabold text-white pb-3 border-b border-white/5">Overview</h2>
                            <p className="text-gray-300 leading-relaxed text-sm sm:text-base font-light">
                                {destination.description}
                            </p>
                        </div>

                        {/* Highlights Card */}
                        <div className="glass-card border border-white/5 rounded-3xl p-6 sm:p-8 space-y-4">
                            <h2 className="text-2xl font-extrabold text-white pb-3 border-b border-white/5">Trip Highlights</h2>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="p-1 bg-cyan-500/20 rounded-full text-cyan-400 mt-0.5">✓</span>
                                    <span>Premium glassmorphic private accommodations.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="p-1 bg-cyan-500/20 rounded-full text-cyan-400 mt-0.5">✓</span>
                                    <span>Guided immersive local culture and sightseeing tours.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="p-1 bg-cyan-500/20 rounded-full text-cyan-400 mt-0.5">✓</span>
                                    <span>Gourmet dining and authentic cuisine tastings.</span>
                                </li>
                                <li className="flex items-start gap-3 text-sm text-gray-300">
                                    <span className="p-1 bg-cyan-500/20 rounded-full text-cyan-400 mt-0.5">✓</span>
                                    <span>Complimentary travel insurance and 24/7 concierge support.</span>
                                </li>
                            </ul>
                        </div>

                    </div>

                    {/* Right Column: Checkout Widget */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-28">
                            <Bokingcard destination={destination}></Bokingcard>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default destinationDetails;