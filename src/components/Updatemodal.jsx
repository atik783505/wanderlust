"use client";

import { Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select } from "@heroui/react";
import { FaPenToSquare, FaFloppyDisk } from "react-icons/fa6";

export function Updatemodal({ destination }) {
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        console.log(data)

        const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiHost}/destination/${destination._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (res.ok) {
            window.location.reload();
        }
    }

    return (
        <Modal>
            <Button className="bg-white/5 border border-white/10 hover:bg-white/10 text-gray-200 text-sm font-semibold rounded-xl px-4 py-2 flex items-center gap-2 cursor-pointer transition-colors duration-200">
                <FaPenToSquare size={13} /> Edit
            </Button>
            <Modal.Backdrop className="backdrop-blur-md bg-slate-950/40">
                <Modal.Container placement="center">
                    <Modal.Dialog className="glass-panel border border-white/10 backdrop-blur-3xl rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:max-w-xl max-h-[85vh] overflow-y-auto">
                        <Modal.CloseTrigger className="text-gray-400 hover:text-white" />
                        <Modal.Header className="space-y-1">
                            <Modal.Heading className="text-2xl font-extrabold text-white text-glow-cyan">
                                Edit Destination
                            </Modal.Heading>
                            <p className="text-xs text-gray-400 font-light">
                                Update the listing details for this spectacular journey below.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="py-4">
                            <form onSubmit={onSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                    {/* Destination Name */}
                                    <div className="sm:col-span-2">
                                        <TextField defaultValue={destination.destinationName} name="destinationName" isRequired className="w-full">
                                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Destination Name</Label>
                                            <Input placeholder="Bali Paradise" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                            <FieldError className="text-red-400 text-xs mt-1" />
                                        </TextField>
                                    </div>

                                    {/* Country */}
                                    <TextField defaultValue={destination.country} name="country" isRequired className="w-full">
                                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Country</Label>
                                        <Input placeholder="Indonesia" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                        <FieldError className="text-red-400 text-xs mt-1" />
                                    </TextField>

                                    {/* Category - Select Dropdown */}
                                    <div className="w-full">
                                        <Select
                                            defaultValue={destination.category}
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
                                                    <ListBox.Item id="Beach" textValue="Beach" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">Beach</ListBox.Item>
                                                    <ListBox.Item id="Mountain" textValue="Mountain" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">Mountain</ListBox.Item>
                                                    <ListBox.Item id="City" textValue="City" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">City</ListBox.Item>
                                                    <ListBox.Item id="Adventure" textValue="Adventure" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">Adventure</ListBox.Item>
                                                    <ListBox.Item id="Cultural" textValue="Cultural" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">Cultural</ListBox.Item>
                                                    <ListBox.Item id="Luxury" textValue="Luxury" className="flex items-center gap-2 px-3 py-2 text-sm rounded-xl hover:bg-cyan-500/20 hover:text-cyan-400 cursor-pointer">Luxury</ListBox.Item>
                                                </ListBox>
                                            </Select.Popover>
                                        </Select>
                                    </div>

                                    {/* Price */}
                                    <TextField defaultValue={destination.price} name="price" type="number" isRequired className="w-full">
                                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Price (USD)</Label>
                                        <Input type="number" placeholder="1299" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                        <FieldError className="text-red-400 text-xs mt-1" />
                                    </TextField>

                                    {/* Duration */}
                                    <TextField defaultValue={destination.duration} name="duration" isRequired className="w-full">
                                        <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Duration</Label>
                                        <Input placeholder="7 Days / 6 Nights" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                        <FieldError className="text-red-400 text-xs mt-1" />
                                    </TextField>

                                    {/* Departure Date */}
                                    <div className="sm:col-span-2">
                                        <TextField defaultValue={destination.departureDate} name="departureDate" type="date" isRequired className="w-full">
                                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Departure Date</Label>
                                            <Input type="date" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                            <FieldError className="text-red-400 text-xs mt-1" />
                                        </TextField>
                                    </div>

                                    {/* Image URL */}
                                    <div className="sm:col-span-2">
                                        <TextField defaultValue={destination.imageUrl} name="imageUrl" isRequired className="w-full">
                                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Image URL</Label>
                                            <Input type="url" placeholder="https://example.com/bali-paradise.jpg" className="w-full glass-input rounded-2xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all" />
                                            <FieldError className="text-red-400 text-xs mt-1" />
                                        </TextField>
                                    </div>

                                    {/* Description */}
                                    <div className="sm:col-span-2">
                                        <TextField defaultValue={destination.description} name="description" isRequired className="w-full">
                                            <Label className="text-xs font-bold text-gray-300 uppercase tracking-wider mb-2 block">Description</Label>
                                            <TextArea placeholder="Describe the travel experience..." className="w-full glass-input rounded-3xl py-3 px-4 text-sm text-white focus:glass-input-focus transition-all min-h-[100px]" />
                                            <FieldError className="text-red-400 text-xs mt-1" />
                                        </TextField>
                                    </div>
                                </div>

                                <div className="flex justify-end gap-3 pt-4 border-t border-white/5">
                                    <Button slot="close" className="bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-xl font-semibold px-4 py-2 cursor-pointer transition-colors">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close" className="bg-gradient-cyan-indigo text-white font-bold rounded-xl px-5 py-2 flex items-center gap-2 cursor-pointer transition-all shadow-lg hover:shadow-[0_0_15px_rgba(6,182,212,0.4)]">
                                        <FaFloppyDisk size={12} /> Save Changes
                                    </Button>
                                </div>
                            </form>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}