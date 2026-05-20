"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import API from "../lib/api";
import RegisterForm from "../components/RegisterForm";


export default function RegisterPage() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      await API.post("/auth/register", formData);

      alert("Register success");

      router.push("/login");
    } catch (error: any) {
      alert(
        error.response?.data?.message ||
          "Register failed"
      );
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black">
      <RegisterForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </main>
  );
}