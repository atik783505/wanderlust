import { BookingDelete } from "@/components/BookingDelete";
import { auth } from "@/lib/auth";
import { Button, Card } from "@heroui/react";
import { headers } from "next/headers";
import Image from "next/image";
import { FaEye, FaLocationCrosshairs, FaTrash } from "react-icons/fa6";


const Mybokings = async () => {

    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })


    const { id } = session?.user
    console.log(id)
    const res = await fetch(`http://localhost:5000/booking/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const data = await res.json()
    console.log(data)

    return (
        <div>
            <h2 className="font-bold text-[45px] text-center">My Bookings</h2>
            <div>
                {
                    data.map(d => <div key={d._id}>
                        <div className="flex items-center gap-6 p-4 mb-4 w-10/12 mx-auto border rounded-lg bg-gray-200">
                            <Image src={d.iamge} className="w-[200px] h-[100px] object-cover rounded-md" alt="image" width={200} height={200}></Image>
                            <div className="w-9/12">
                                <p className="opacity-60 flex items-center "><FaLocationCrosshairs></FaLocationCrosshairs> {d.country}</p>
                                <h2 className="font-bold text-3xl">{d.destinationName}</h2>
                                <p className="opacity-60">departure: {d.departureDate}</p>
                                <div className="flex justify-between items-center gap-4 w-full">
                                    <div>
                                        <h2 className="text-blue-600 text-3xl font-bold">$ {d.price}</h2>

                                    </div>
                                    <div className="flex gap-4">
                                        <BookingDelete d={d}></BookingDelete>
                                        <Button className='rounded-none '>
                                            <FaEye></FaEye> View
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default Mybokings;