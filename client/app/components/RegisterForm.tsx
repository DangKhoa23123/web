import Link from "next/link";
import { RegisterFormProps } from "../types/registerFormProps";

export default function RegisterForm({
  formData,
  handleChange,
  handleSubmit,
}: RegisterFormProps) {
  return (
    <form
      onSubmit={handleSubmit}
      className="w-[420px] bg-[#111111]/80 backdrop-blur-md border border-purple-500/20 rounded-3xl p-8 shadow-2xl shadow-purple-500/10"
    >
      <div className="mb-8 text-center">
        <h1 className="text-5xl font-bold text-white mb-2">
          Create Account
        </h1>

        <p className="text-zinc-400">
          Register a new account
        </p>
      </div>

      <div className="space-y-5">
        <div>
          <label className="text-sm text-zinc-300">
            Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-purple-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">
            Email
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-purple-500 transition"
          />
        </div>

        <div>
          <label className="text-sm text-zinc-300">
            Password
          </label>

          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className="mt-2 w-full p-4 rounded-xl bg-zinc-900 border border-zinc-800 text-white outline-none focus:border-purple-500 transition"
          />
        </div>

        <button className="w-full bg-gradient-to-r from-purple-600 to-fuchsia-500 hover:scale-[1.02] transition-all duration-300 p-4 rounded-xl text-white font-semibold text-lg shadow-lg shadow-purple-500/20">
          Register
        </button>
      </div>

      <p className="text-center text-zinc-400 mt-6">
        You already have an account?{" "}
        <Link
          href="/login"
          className="text-purple-400 cursor-pointer hover:text-purple-300">
          login
        </Link>
      </p>
    </form>
  );
}