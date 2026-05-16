import { Button, Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AllDestination = async () => {
    const res = await fetch('http://localhost:5000/destination')
    const data = await res.json()
    console.log(data)
    return (
        <div className='grid grid-cols-3 gap-6'>
            {
                data.map(d =>
                    <Card className=" p-4" key={d._id}>
                        <Image src={d.imageUrl} alt='iamge' width={400} height={250} className="w-full aspect-video object-cover rounded-xl"></Image>
                        <p>{d.country}</p>
                        <div className='flex justify-between'>
                            <h2>{d.destinationName}</h2>
                            <h2>{d.price}</h2>
                        </div>
                        <h2>{d.duration}</h2>
                        <Link href={`/all-destination/${d._id}`}>
                            <Button>Book Now</Button>
                        </Link>
                    </Card>
                )
            }
        </div>
    );
};

export default AllDestination;