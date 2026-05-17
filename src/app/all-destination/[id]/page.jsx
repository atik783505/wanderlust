
import Bokingcard from "@/components/Bokingcard";
import { Default } from "@/components/Delete";
import { Updatemodal } from "@/components/Updatemodal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import { FaArrowRight, FaLocationCrosshairs } from "react-icons/fa6";


const destinationDetails = async ({ params }) => {


    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    // console.log(token)

    const { id } = await params
    const res = await fetch(`http://localhost:5000/destination/${id}`,{
        headers:{
            authorization:`Bearer ${token}`
        }
    })
    const destination = await res.json()
    console.log(destination)
    console.log('this is new')
    return (
        <div className="w-11/12 mx-auto">
            <div key={destination._id}>
                <div className="flex justify-end my-2">
                    <Updatemodal destination={destination}></Updatemodal>
                    <Default destination={destination}></Default>
                </div>
                <div className="w-full  mx-auto">
                    <Image className="rounded-lg w-full h-100" src={destination.imageUrl} alt="image" width={400} height={400} ></Image>
                </div>
                <div className="flex justify-around py-5 items-center">
                    <div className="space-y-3">
                        <p className="opacity-70 flex items-center gap-2"><FaLocationCrosshairs></FaLocationCrosshairs> {destination.country}</p>
                        <h2 className="font-bold text-[26px]">{destination.destinationName}</h2>
                        <p>{destination.duration}</p>
                        <h2 className="font-bold text-[22px] py-2">Overveiw</h2>
                        <p>{destination.description}</p>
                        <h2 className="font-bold text-[22px] py-2">Highlights</h2>
                        <p>{destination.description}</p>
                    </div>
                    <div>
                        <Bokingcard destination={destination}></Bokingcard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default destinationDetails;