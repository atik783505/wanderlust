"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { FaGoogle } from "react-icons/fa6";
import Link from "next/link";

export default function Signup() {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)
        const { data, error } = await authClient.signUp.email({
            name: user.name,
            email: user.email,
            password: user.password,
            image: user.image,
        });

        if (data) {
            console.log({ data, error })
        }
        if (error) {
            alert('failed')
        }
    };

    const handleGogle = async () => {
        await authClient.signIn.social({
            provider: "google",
        });
    }

    return (
        <div className="w-full min-h-[85vh] flex items-center justify-center py-16 px-4">
            <Card className="glass-panel max-w-md w-full rounded-3xl p-8 sm:p-10 shadow-2xl border border-white/10 backdrop-blur-2xl space-y-6">
                
                {/* Header Title */}
                <div className="text-center space-y-2">
                    <h2 className="font-black text-3xl text-white">Create <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Account</span></h2>
                    <p className="text-xs text-gray-400 font-light">Join Wanderlust to discover spectacular travels</p>
                </div>

                <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                    {/* Name Input */}
                    <TextField
                        isRequired
                        name="name"
                        type="text"
                        className="w-full"
                    >
                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 block">
                            Full Name
                        </Label>
                        <Input 
                            placeholder="Enter your name" 
                            className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white transition-all"
                        />
                    </TextField>

                    {/* Email Input */}
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        className="w-full"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 block">
                            Email Address
                        </Label>
                        <Input 
                            placeholder="john@example.com" 
                            className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white transition-all"
                        />
                        <FieldError className="text-red-400 text-xs mt-1" />
                    </TextField>

                    {/* Image URL Input */}
                    <TextField
                        name="image"
                        type="url"
                        className="w-full"
                    >
                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 block">
                            Profile Image URL (Optional)
                        </Label>
                        <Input 
                            placeholder="https://example.com/avatar.jpg" 
                            className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white transition-all"
                        />
                    </TextField>

                    {/* Password Input */}
                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        className="w-full"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }
                            return null;
                        }}
                    >
                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-1.5 block">
                            Password
                        </Label>
                        <Input 
                            placeholder="Enter secure password" 
                            className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white transition-all"
                        />
                        <Description className="text-[10px] text-gray-500 mt-1 leading-normal">
                            Must be 8+ characters with 1 uppercase letter and 1 digit
                        </Description>
                        <FieldError className="text-red-400 text-xs mt-1" />
                    </TextField>

                    {/* Submit Button */}
                    <Button 
                        className="w-full bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold py-3.5 rounded-2xl shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] active:scale-95 duration-200 cursor-pointer text-center mt-3" 
                        type="submit"
                    >
                        Create Account
                    </Button>
                </Form>

                {/* Divider */}
                <div className="relative flex items-center justify-center py-1">
                    <div className="absolute w-full h-[1px] bg-white/10"></div>
                    <span className="relative bg-slate-950 px-3 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">Or join with</span>
                </div>

                {/* Google OAuth Trigger */}
                <Button 
                    variant="bordered" 
                    className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-gray-200 font-semibold py-3.5 rounded-2xl flex items-center justify-center gap-2 cursor-pointer transition-colors duration-200" 
                    onClick={handleGogle}
                >
                    <FaGoogle size={14} className="text-cyan-400" /> Google
                </Button>

                {/* Return to Signin link */}
                <p className="text-xs text-center text-gray-400 font-light">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-cyan-400 hover:text-cyan-300 font-semibold hover:underline">
                        Login here
                    </Link>
                </p>

            </Card>
        </div>
    );
}