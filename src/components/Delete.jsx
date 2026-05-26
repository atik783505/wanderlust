"use client";

import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { FaTrash } from "react-icons/fa6";

export function Default({destination}) {
    const router = useRouter()

    const handleDelete = async () => {
        const apiHost = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
        const res = await fetch(`${apiHost}/destination/${destination._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
        })
        router.push('/all-destination')
    }

    return (
        <AlertDialog>
            <Button className="bg-red-500/10 hover:bg-red-500/20 text-red-400 font-semibold border border-red-500/20 rounded-xl px-4 py-2 flex items-center gap-2 cursor-pointer transition-all duration-200">
                <FaTrash size={12} /> Delete
            </Button>
            <AlertDialog.Backdrop className="backdrop-blur-md bg-slate-950/40">
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="glass-panel border border-white/10 backdrop-blur-3xl rounded-3xl p-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:max-w-[420px]">
                        <AlertDialog.CloseTrigger className="text-gray-400 hover:text-white" />
                        <AlertDialog.Header className="space-y-2">
                            <AlertDialog.Heading className="text-xl font-extrabold text-white text-glow-cyan flex items-center gap-2.5">
                                <span className="p-1.5 bg-red-500/20 rounded-lg text-red-400"><FaTrash size={16} /></span>
                                Delete Destination?
                            </AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body className="py-4">
                            <p className="text-sm text-gray-300 leading-relaxed font-light">
                                Are you sure you want to permanently delete <strong className="text-white font-semibold">{destination.destinationName}</strong>? This action will remove the listing and all related details from the portal forever.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer className="flex justify-end gap-3 mt-2">
                            <Button slot="close" className="bg-white/5 border border-white/10 hover:bg-white/10 text-gray-300 rounded-xl font-semibold px-4 py-2 cursor-pointer transition-colors">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" className="bg-red-600 hover:bg-red-500 text-white font-bold rounded-xl px-4 py-2 cursor-pointer transition-all shadow-lg shadow-red-600/20">
                                Delete Destination
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}