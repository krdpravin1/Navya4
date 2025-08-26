import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-green-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Navya</h1>
      <p className="text-gray-600 mb-6 text-center max-w-md">
        A simple, modern productivity companion to help you stay focused and
        organized.
      </p>
      <Link href="/onboarding">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-2xl shadow-md transition duration-200">
          Start Onboarding
        </button>
      </Link>
    </div>
  );
}
