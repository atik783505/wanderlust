import { auth } from '@/lib/auth';
import { Button, Card } from '@heroui/react';
import { headers } from 'next/headers';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaLocationCrosshairs, FaClock, FaArrowRight } from 'react-icons/fa6';

const AllDestination = async () => {

    const { token } = await auth.api.getToken({
        headers: await headers()
    })
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/destination`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)
    
    return (
        <div className="w-11/12 max-w-7xl mx-auto py-16 px-4">
            
            {/* Header Description */}
            <div className="mb-12 text-center md:text-left space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">
                    Explore Our <span >Destinations</span>
                </h1>
                <p className="text-gray-400 max-w-2xl text-sm sm:text-base font-light leading-relaxed">
                    Select from our curated list of world-class locations. Click Book Now to plan your dream vacation and start your journey today.
                </p>
            </div>

            {/* Responsive Destination Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    data.map(d =>
                        <Card className="group glass-card border border-white/5 hover:border-cyan-500/30 rounded-3xl p-4 overflow-hidden flex flex-col justify-between" key={d._id}>
                            <div>
                                {/* Image Container with Hover zoom and floating badge */}
                                <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-5">
                                    <Image 
                                        src={d.imageUrl} 
                                        alt={d.destinationName} 
                                        width={400} 
                                        height={250} 
                                        className="w-full h-full object-cover group-hover:scale-110 duration-500 ease-out rounded-2xl"
                                    />
                                    <span className="absolute top-4 left-4 bg-slate-950/80 border border-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-semibold text-cyan-400 flex items-center gap-2">
                                        <FaLocationCrosshairs size={12} /> {d.country}
                                    </span>
                                </div>

                                {/* Content Details */}
                                <div className="space-y-2">
                                    <h2 className="font-bold text-2xl text-white group-hover:text-cyan-400 duration-300">
                                        {d.destinationName}
                                    </h2>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <FaClock className="text-cyan-400" size={14} />
                                        <span className="text-xs font-medium">{d.duration}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Divider & Purchase Block */}
                            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between items-center">
                                <div>
                                    <p className="text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Starting at</p>
                                    <h3 className="text-2xl font-black text-cyan-400">${d.price}</h3>
                                </div>
                                <Link href={`/all-destination/${d._id}`}>
                                    <Button className="bg-gradient-cyan-indigo text-white font-bold px-6 py-2.5 rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] group-hover:scale-105 duration-300 cursor-pointer flex items-center gap-2">
                                        Book Now <FaArrowRight size={14} />
                                    </Button>
                                </Link>
                            </div>
                        </Card>
                    )
                }
            </div>
        </div>
    );
};

export default AllDestination;