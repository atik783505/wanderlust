"use client";

import { AlertDialog, Button } from "@heroui/react";
import { FaTrash } from "react-icons/fa6";

export function BookingDelete({d}) {


    const handleDelete = async () => {
        const res = await fetch(`http://localhost:5000/booking/${d._id}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json' // এখানে ':' হবে এবং ডাবল 'p' হবে
            },
        })
        const data = await res.json()
        console.log(data)
        window.location.reload()

    }
    return (
        <AlertDialog>
            <Button variant="outline" className='rounded-none text-red-500 border-red-500'>
                <FaTrash></FaTrash> Cancel
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete Booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleDelete} slot="close" variant="danger">
                                Delete Booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}