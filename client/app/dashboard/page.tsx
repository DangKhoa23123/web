"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
    const router = useRouter();
    const { user, logout } = useAuth();

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            router.push("/login");
        }
    }, [router]);
    const handleLogout = () => {
        logout();
        router.push("/login");
    };

    return (
        <main className="min-h-screen bg-black text-white p-10">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-4xl font-bold">Dashboard</h1>
                    <p className="mt-2 text-zinc-400">
                        Welcome {user?.name}
                    </p>
                </div>

                <button
                    onClick={handleLogout}
                    className="bg-red-600 px-5 py-2 rounded-lg"
                >
                    Logout
                </button>
            </div>
        </main>
    );
}