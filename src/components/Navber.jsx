'use client'
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/assets/Wanderlast.png'
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";


const Navber = () => {


    const { data, isPending } = useSession()

    const user = data?.user
 


    return (
        <nav className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">

                    {/* Left Side: 4 Items */}
                    <ul className="hidden md:flex items-center space-x-8 flex-1">
                        <li><Link href="/" className="text-gray-600 hover:text-black">Home</Link></li>
                        <li><Link href="/all-destination" className="text-gray-600 hover:text-black">Destinations</Link></li>
                        <li><Link href="/my-boking" className="text-gray-600 hover:text-black">My Bookings</Link></li>
                        <li><Link href="/destination" className="text-gray-600 hover:text-black">Add Destination</Link></li>
                    </ul>

                    {/* Center: Next.js Image */}
                    <div className="flex-shrink-0 flex justify-center items-center px-4">
                        <Link href="/">
                            <Image
                                src={logo} // Replace with your image path
                                alt="Logo"
                                width={120}
                                height={40}
                                priority
                                className="cursor-pointer"
                            />
                        </Link>
                    </div>

                    {/* Right Side: 3 Items */}
                    <ul className="hidden md:flex items-center justify-end space-x-8 flex-1">
                        <li><Link href="/search" className="text-gray-600 hover:text-black">Search</Link></li>
                        {
                            user ?
                                <div>
                                    <h2>{user.name}</h2>
                                    <Button onClick={() => signOut()}>SignOut</Button>
                                </div>
                                :
                                <>
                                    <li><Link href="/signup" className="text-gray-600 hover:text-black">signUp</Link></li>
                                    <li><Link href="/signin" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">Login</Link></li>
                                </>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navber;