"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Card, Description, FieldError, Form, Input, Label, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";


export default function Signup() {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        console.log(user)
        const { data, error } = await authClient.signIn.email({
            // required
            email: user.email, // required
            password: user.password,
            callbackURL: '/' // required
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
        <Card className="w-5/12 mx-auto">
            <h2 className="text-center font-bold text-[24px]">Login</h2>
            <Form className="flex flex-col gap-4" onSubmit={onSubmit}>
                <TextField
                    isRequired
                    name="email"
                    type="email"
                    validate={(value) => {
                        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                            return "Please enter a valid email address";
                        }

                        return null;
                    }}
                >
                    <Label>Email</Label>
                    <Input placeholder="john@example.com" />
                    <FieldError />
                </TextField>
                <TextField
                    isRequired
                    minLength={8}
                    name="password"
                    type="password"
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
                    <Label>Password</Label>
                    <Input placeholder="Enter your password" />
                    <Description>Must be at least 8 characters with 1 uppercase and 1 number</Description>
                    <FieldError />
                </TextField>

                <div className="flex justify-center w-full rounded-none">
                    <Button className='rounded-none w-full' type="submit">
                        Login
                    </Button>
                </div>
            </Form>
            <div className="mt-6">
                <Button variant="outline" className='w-full rounded-none' onClick={handleGogle}>Continue With Google</Button>
            </div>
        </Card>
    );
}