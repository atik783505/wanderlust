'use client'
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from '../../public/assets/Wanderlast.png';
import { signOut, useSession } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { FaBars, FaXmark, FaUser, FaRightToBracket, FaRightFromBracket } from "react-icons/fa6";

const Navber = () => {
    const { data, isPending } = useSession();
    const user = data?.user;
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="sticky top-0 z-50 bg-[#030712]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
            <div className="w-full mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-20">

                    {/* Mobile Hamburger Trigger */}
                    <div className="flex md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white hover:text-cyan-400 p-2 focus:outline-none transition-colors"
                            aria-label="Toggle Menu"
                        >
                            {isOpen ? <FaXmark className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
                        </button>
                    </div>

                    {/* Left Side: Desktop Links */}
                    <ul className="hidden md:flex items-center space-x-8 flex-1">
                        <li>
                            <Link href="/" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors duration-200">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/all-destination" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors duration-200">
                                Destinations
                            </Link>
                        </li>
                        <li>
                            <Link href="/my-boking" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors duration-200">
                                My Bookings
                            </Link>
                        </li>
                        <li>
                            <Link href="/destination" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors duration-200">
                                Add Destination
                            </Link>
                        </li>
                    </ul>

                    {/* Center: Brand Logo */}
                    <div className="flex-shrink-0 flex justify-center items-center px-4">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={130}
                                height={45}
                                priority
                                className="cursor-pointer brightness-125 filter duration-300 hover:scale-105"
                            />
                        </Link>
                    </div>

                    {/* Right Side: Desktop Search & Auth */}
                    <ul className="hidden md:flex items-center justify-end space-x-8 flex-1">
                        <li>
                            <Link href="/all-destination" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors duration-200">
                                Search
                            </Link>
                        </li>
                        {user ? (
                            <li className="flex items-center gap-4 bg-white/10 border border-white/15 rounded-full px-4 py-1.5 backdrop-blur-md">
                                <div className="flex items-center gap-2">
                                    <div className="w-6 h-6 rounded-full bg-cyan-500/30 flex items-center justify-center text-cyan-400 text-xs font-bold border border-cyan-500/40">
                                        {user.name ? user.name[0].toUpperCase() : <FaUser size={10} />}
                                    </div>
                                    <span className="text-sm font-semibold text-white">{user.name}</span>
                                </div>
                                <button
                                    onClick={() => signOut()}
                                    className="text-black hover:text-red-400 transition-colors cursor-pointer"
                                    title="Sign Out"
                                >
                                    <FaRightFromBracket size={16} />
                                </button>
                            </li>
                        ) : (
                            <>
                                <li>
                                    <Link href="/signup" className="text-white font-semibold tracking-wide hover:text-cyan-400 text-sm transition-colors">
                                        Register
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/signin" className="bg-gradient-cyan-indigo text-white font-bold px-6 py-2.5 rounded-full hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] transition-all duration-300 ease-out text-sm">
                                        Login
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>

                    {/* Mobile Logo Placement on Right if Open */}
                    <div className="flex md:hidden items-center gap-3">
                        {user ? (
                            <div className="flex items-center gap-2 bg-white/10 border border-white/15 rounded-full px-3 py-1">
                                <span className="text-xs font-semibold text-white max-w-[80px] truncate">{user.name}</span>
                                <button onClick={() => signOut()} className="text-black hover:text-red-400">
                                    <FaRightFromBracket size={12} />
                                </button>
                            </div>
                        ) : (
                            <Link href="/signin" className="bg-gradient-cyan-indigo text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                                Login
                            </Link>
                        )}
                    </div>

                </div>
            </div>

            {/* Mobile Sidebar Navigation Menu */}
            <div className={`fixed inset-0 z-40 bg-black/70 backdrop-blur-md transition-opacity duration-300 md:hidden ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`} onClick={toggleMenu}>
                <div className={`fixed top-0 left-0 bottom-0 w-3/4 max-w-xs bg-[#030712]/95 border-r border-white/10 p-6 flex flex-col justify-between transform transition-transform duration-300 ease-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`} onClick={(e) => e.stopPropagation()}>
                    <div className="space-y-6">
                        <div className="flex justify-between items-center pb-4 border-b border-white/10">
                            <Image
                                src={logo}
                                alt="Logo"
                                width={110}
                                height={38}
                                className="brightness-125 filter"
                            />
                            <button onClick={toggleMenu} className="text-white hover:text-cyan-400">
                                <FaXmark className="h-6 w-6" />
                            </button>
                        </div>
                        <ul className="space-y-4">
                            <li>
                                <Link href="/" onClick={toggleMenu} className="block text-lg text-white font-semibold hover:text-cyan-400 py-1 transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link href="/all-destination" onClick={toggleMenu} className="block text-lg text-white font-semibold hover:text-cyan-400 py-1 transition-colors">
                                    Destinations
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-boking" onClick={toggleMenu} className="block text-lg text-white font-semibold hover:text-cyan-400 py-1 transition-colors">
                                    My Bookings
                                </Link>
                            </li>
                            <li>
                                <Link href="/destination" onClick={toggleMenu} className="block text-lg text-white font-semibold hover:text-cyan-400 py-1 transition-colors">
                                    Add Destination
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="pt-6 border-t border-white/10 space-y-4">
                        {user ? (
                            <div className="space-y-3">
                                <p className="text-sm text-gray-400">Signed in as <span className="font-semibold text-white">{user.name}</span></p>
                                <Button className="w-full bg-red-500/20 border border-red-500/30 text-red-300 font-bold rounded-xl py-3.5" onClick={() => { signOut(); toggleMenu(); }}>
                                    Sign Out
                                </Button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                <Link href="/signup" onClick={toggleMenu} className="block text-center text-white font-semibold py-2 border border-white/10 rounded-xl transition-all hover:bg-white/5">
                                    Register
                                </Link>
                                <Link href="/signin" onClick={toggleMenu} className="block text-center bg-gradient-cyan-indigo text-white font-bold py-2 rounded-xl transition-all">
                                    Login
                                </Link>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navber;