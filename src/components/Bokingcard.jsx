'use client'
import { authClient, useSession } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, TextField } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa6';
import { FaCalendarAlt } from 'react-icons/fa';

const Bokingcard = ({ destination }) => {
    const { data } = useSession()
    const user = data?.user
    const [departureDate, setDepartureDate] = useState(null)

    const handleBooking = async () => {
        if (!user) {
            toast.error("Please login to book a destination");
            return;
        }
        if (!departureDate) {
            toast.error("Please select a departure date");
            return;
        }

        const bookingData = {
            destinationName: destination.destinationName,
            name: user?.name,
            email: user?.email,
            id: user?.id,
            departureDate : new Date(departureDate),
            country: destination.country,
            category: destination.category,
            price: destination.price,
            iamge:destination.imageUrl
        }
        console.log(bookingData)
        const {data:tokenData} = await authClient.token()
        console.log(tokenData)

        const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiHost}/booking`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${tokenData.token}`
            },
            body: JSON.stringify(bookingData)
        });
        
        if (res.ok) {
            toast.success(`Successfully booked ${destination.destinationName}!`)
        } else {
            toast.error("Booking failed. Please try again.")
        }
    }

    return (
        <Card className="glass-card border border-white/10 rounded-3xl p-6 shadow-2xl space-y-6 backdrop-blur-xl">
            
            {/* Header Pricing Tag */}
            <div className="space-y-1 pb-4 border-b border-white/5">
                <p className="text-xs uppercase tracking-wider text-cyan-400 font-semibold">Starting From</p>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-cyan-indigo text-glow-cyan">${destination.price}</span>
                    <span className="text-xs text-gray-400">/ per person</span>
                </div>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
                <TextField onChange={setDepartureDate} name="departureDate" type="date" isRequired className="w-full">
                    <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">
                        Departure Date
                    </Label>
                    <div className="relative flex items-center">
                        <Input 
                            type="date" 
                            className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all duration-300" 
                        />
                    </div>
                    <FieldError className="text-red-400 text-xs mt-1" />
                </TextField>
            </div>

            {/* Book Now Button */}
            <Button 
                onClick={handleBooking} 
                className="w-full bg-gradient-cyan-indigo text-white font-bold py-4 rounded-2xl shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95 duration-200 cursor-pointer flex items-center justify-center gap-2"
            >
                Book Now <FaArrowRight size={14} />
            </Button>
            
            {/* Guarantee Badge */}
            <p className="text-[10px] text-center text-gray-500 font-medium">
                No immediate booking fees • Free cancellation up to 48h
            </p>
        </Card>
    );
};

export default Bokingcard;