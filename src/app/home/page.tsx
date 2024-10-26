'use client';

import { logout } from "../actions/auth";

export default function HomePage() {
  const handleLogout = async () => {
    // Call the server action for signout
    await logout();
  };

  return (
    <div className="w-full max-w-2xl p-8 mx-auto space-y-6 bg-white rounded-lg shadow-lg text-black">
      <h1 className="text-3xl font-bold text-center">Welcome to the Home Page</h1>
      <p className="text-center">You are successfully logged in!</p>
      <button
        onClick={handleLogout}
        className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}
