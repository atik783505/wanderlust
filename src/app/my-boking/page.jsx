import { BookingDelete } from "@/components/BookingDelete";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";

// Gravity UI Icons import kora hoyeche
import { Eye, Pin, Calendar } from "@gravity-ui/icons";

const Mybokings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const { id } = session?.user
    console.log(id)
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/booking/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)

    if (data.length === 0) {
        return (
            <div className="max-w-md mx-auto py-24 px-4 text-center">
                <div className="glass-card border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl space-y-6 backdrop-blur-2xl">
                    <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/25 flex items-center justify-center text-cyan-400 mx-auto">
                        {/* Gravity UI Calendar Icon */}
                        <Calendar i18nSize={24} />
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-2xl font-bold text-white">No Bookings Yet</h2>
                        <p className="text-gray-400 text-sm font-light leading-relaxed">
                            You haven't scheduled any travels yet. Explore our breathtaking list of destinations and book your next dream vacation!
                        </p>
                    </div>
                    <Link href="/all-destination" className="block w-full bg-gradient-cyan-indigo text-white font-bold py-3.5 rounded-xl hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all duration-300">
                        Discover Destinations
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="w-11/12 max-w-4xl mx-auto py-16 px-4">
            <h1 className="text-4xl md:text-5xl font-black text-center mb-12">
                My <span className="text-transparent bg-clip-text bg-gradient-cyan-indigo text-glow-cyan">Bookings</span>
            </h1>
            
            <div className="space-y-6">
                {
                    data.map(d => (
                        <div key={d._id} className="group glass-card border border-white/5 hover:border-cyan-500/20 rounded-3xl p-5 flex flex-col md:flex-row gap-6 items-center shadow-lg">
                            
                            {/* Card Image */}
                            <div className="w-full md:w-[220px] aspect-video md:h-[120px] rounded-2xl overflow-hidden relative flex-shrink-0">
                                <Image 
                                    src={d.iamge} 
                                    className="w-full h-full object-cover group-hover:scale-105 duration-300 rounded-2xl" 
                                    alt="destination image" 
                                    width={220} 
                                    height={120}
                                />
                            </div>

                            {/* Card Content details */}
                            <div className="w-full flex flex-col justify-between flex-1 gap-4">
                                <div className="space-y-1">
                                    <p className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold flex items-center gap-1.5">
                                        {/* Gravity UI Pin Icon */}
                                        <Pin i18nSize={12} /> {d.country}
                                    </p>
                                    <h2 className="font-bold text-2xl text-white group-hover:text-cyan-400 duration-300">
                                        {d.destinationName}
                                    </h2>
                                    <p className="text-xs text-gray-400 flex items-center gap-1.5 font-light">
                                        {/* Gravity UI Calendar Icon */}
                                        <Calendar i18nSize={12} className="text-cyan-400/80" /> Departure: {new Date(d.departureDate).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:flex-row justify-between items-stretch sm:items-center gap-4 pt-3 border-t border-white/5 w-full">
                                    <div>
                                        <p className="text-[9px] text-gray-500 uppercase tracking-wider font-semibold">Total Price</p>
                                        <h2 className="text-cyan-400 text-2xl font-black">${d.price}</h2>
                                    </div>
                                    
                                    {/* Cancellation & View Details buttons */}
                                    <div className="flex gap-3">
                                        <BookingDelete d={d}></BookingDelete>
                                        <Button className="bg-white/5 border border-white/10 hover:bg-white/10 text-gray-200 text-sm font-semibold rounded-xl px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200">
                                            {/* Gravity UI Eye Icon */}
                                            <Eye i18nSize={14} /> View
                                        </Button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Mybokings;