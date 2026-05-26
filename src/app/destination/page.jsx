'use client'
import { Button, FieldError, Input, Label, ListBox, TextArea, TextField, Select, Card } from "@heroui/react";
import { redirect } from "next/navigation";
import { FaPaperPlane, FaMountain, FaWater, FaCity, FaCompass, FaMasksTheater, FaCrown } from "react-icons/fa6";

const Destination = () => {

    const onSubmit = async(e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiHost}/destination`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        console.log(res)
        if(res.ok){
            redirect('/all-destination')
        }
    }

    return (
        <div className="w-11/12 max-w-2xl mx-auto py-16 px-4">
            <Card className="glass-panel rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl space-y-6 backdrop-blur-2xl">
                
                {/* Header Title */}
                <div className="text-center space-y-2 mb-6">
                    <h1 className="text-3xl sm:text-4xl font-black text-white">
                        Add Destination
                    </h1>
                    <p className="text-xs text-gray-400 font-light">Share a spectacular new travel location with the community</p>
                </div>

                <form onSubmit={onSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        
                        {/* Destination Name */}
                        <div className="sm:col-span-2">
                            <TextField name="destinationName" isRequired className="w-full">
                                <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Destination Name</Label>
                                <Input 
                                    placeholder="Bali Paradise" 
                                    className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                                />
                                <FieldError className="text-red-400 text-xs mt-1" />
                            </TextField>
                        </div>

                        {/* Country */}
                        <TextField name="country" isRequired className="w-full">
                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Country</Label>
                            <Input 
                                placeholder="Indonesia" 
                                className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>

                        {/* Category - Select Dropdown */}
                        <div className="w-full">
                            <Select
                                name="category"
                                isRequired
                                className="w-full"
                                placeholder="Select category"
                            >
                                <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Category</Label>
                                <Select.Trigger className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white border border-white/10 transition-all flex items-center justify-between">
                                    <Select.Value />
                                    <Select.Indicator />
                                </Select.Trigger>
                                <Select.Popover className="glass-panel border border-white/15 rounded-2xl shadow-xl overflow-hidden mt-1 z-50">
                                    <ListBox className="p-1 space-y-0.5 text-gray-200">
                                        <ListBox.Item id="Beach" textValue="Beach" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            Beach
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Mountain" textValue="Mountain" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            Mountain
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="City" textValue="City" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            City
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Adventure" textValue="Adventure" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            Adventure
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Cultural" textValue="Cultural" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            Cultural
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                        <ListBox.Item id="Luxury" textValue="Luxury" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">
                                            Luxury
                                            <ListBox.ItemIndicator />
                                        </ListBox.Item>
                                    </ListBox>
                                </Select.Popover>
                            </Select>
                        </div>

                        {/* Price */}
                        <TextField name="price" type="number" isRequired className="w-full">
                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Price (USD)</Label>
                            <Input
                                type="number"
                                placeholder="1299"
                                className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>

                        {/* Duration */}
                        <TextField name="duration" isRequired className="w-full">
                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Duration</Label>
                            <Input
                                placeholder="7 Days / 6 Nights"
                                className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                            />
                            <FieldError className="text-red-400 text-xs mt-1" />
                        </TextField>

                        {/* Departure Date */}
                        <div className="sm:col-span-2">
                            <TextField name="departureDate" type="date" isRequired className="w-full">
                                <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Departure Date</Label>
                                <Input 
                                    type="date" 
                                    className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                                />
                                <FieldError className="text-red-400 text-xs mt-1" />
                            </TextField>
                        </div>

                        {/* Image URL */}
                        <div className="sm:col-span-2">
                            <TextField name="imageUrl" isRequired className="w-full">
                                <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Image URL</Label>
                                <Input
                                    type="url"
                                    placeholder="https://images.unsplash.com/photo-example..."
                                    className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" 
                                />
                                <FieldError className="text-red-400 text-xs mt-1" />
                            </TextField>
                        </div>

                        {/* Description */}
                        <div className="sm:col-span-2">
                            <TextField name="description" isRequired className="w-full">
                                <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Description</Label>
                                <TextArea
                                    placeholder="Describe the travel experience and unforgettable sights..."
                                    className="w-full glass-input rounded-3xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all min-h-[120px]" 
                                />
                                <FieldError className="text-red-400 text-xs mt-1" />
                            </TextField>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-gradient-cyan-indigo text-white font-bold py-4 rounded-2xl shadow-[0_4px_15px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95 duration-200 cursor-pointer flex items-center justify-center gap-2 mt-4"
                    >
                        <FaPaperPlane size={14} /> Add New Destination
                    </Button>
                </form>
            </Card>
        </div>
    );
};

export default Destination;