"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../lib/api";
import { useAuth } from "../context/AuthContext";
import LoginForm from "../components/LoginForm";

export default function LoginPage() {
    const router = useRouter();
    const { login } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await API.post("/auth/login", formData);

            login(res.data.token, res.data.user);

            router.push("/dashboard");
        } catch (error: any) {
            alert(error.response?.data?.message || "Login failed");
        }
    };
    return (
        <main className="min-h-screen flex items-center justify-center bg-black">
            <LoginForm
                formData={formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </main>
    );
}