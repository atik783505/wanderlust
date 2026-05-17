'use client'
import { authClient, useSession } from '@/lib/auth-client';
import { Button, Card, FieldError, Input, Label, TextField } from '@heroui/react';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { FaArrowRight } from 'react-icons/fa6';

const Bokingcard = ({ destination }) => {

    

    const { data } = useSession()

    const user = data?.user

    const [departureDate, setDepartureDate] = useState(null)

    const handleBooking = async () => {
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

        const res = await fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization:`Bearer ${tokenData.token}`
            },
            body: JSON.stringify(bookingData) // এই লাইনটি যোগ করতে হবে
        });
        toast.success(`${destination.destinationName} added succefully`)
    }


    return (
        <div>
            <Card className="px-5 space-y-3">
                <p className="opacity-70 text-[14px]">Starting from</p>
                <h2 className="text-blue-600 font-bold text-[26px]">${destination.price}</h2>
                <p className="opacity-70 text-[14px]">per person</p>
                <div className="md:col-span-2">
                    <TextField onChange={setDepartureDate} name="departureDate" type="date" isRequired>
                        <Label>Departure Date</Label>
                        <Input type="date" className="rounded-2xl" />
                        <FieldError />
                    </TextField>
                </div>
                <Button onClick={handleBooking} className='w-full rounded-none'>Book Now <FaArrowRight></FaArrowRight></Button>
            </Card>
        </div>
    );
};

export default Bokingcard;