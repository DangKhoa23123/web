import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center space-y-5">
        <h1 className="text-5xl font-bold">Auth System</h1>

        <div className="space-x-4">
          <Link
            href="/login"
            className="bg-purple-600 px-5 py-2 rounded-lg"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-white text-black px-5 py-2 rounded-lg"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}