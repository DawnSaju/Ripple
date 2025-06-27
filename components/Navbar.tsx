"use client";

import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();
  const handleAuth = () => {
    router.push("/auth");
  };
  
  useEffect(() => {
    const getUser = async () => {
      const { data: session, error } = await authClient.getSession();
      if (session) {
        setIsLoggedIn(true);
      }
    }
    getUser();
  }, []);

  return (
    <div className="flex justify-center py-2">
      <div className="w-full max-w-2xl bg-[#FAE6D5] rounded-full m-4 border-1 border-black/8 px-2 sm:px-4 md:px-8 flex items-center h-14 relative">
        <div className="flex-shrink-0 flex items-center p-2 md:p-4">
          <img src="/mascot.svg" alt="Ripple mascot" className="w-8 h-8" />
        </div>
        <button
          className="flex md:hidden ml-auto p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className="hidden md:flex flex-1 justify-center items-center gap-4 md:gap-12">
          <a href="#" className="text-lg font-light px-2">Home</a>
          <a href="#" className="text-lg font-light px-2">About</a>
          <a href="#" className="text-lg font-light px-2">Contact</a>
        </nav>
        <div className="hidden md:flex flex-shrink-0 items-center p-2 md:p-4">
          <Button
            onClick={handleAuth}
            className="px-4 md:px-8 h-10 md:h-12 rounded-4xl bg-primary text-lg text-white"
          >
            Sign in
          </Button>
        </div>
        {open && (
          <div className="absolute top-full left-0 w-full bg-[#FAE6D5] rounded-b-2xl shadow-lg flex flex-col items-center z-50 py-4 md:hidden animate-fade-in">
            <a href="#" className="text-lg font-semibold py-2 w-full text-center hover:bg-secondary">Home</a>
            <a href="#" className="text-lg font-semibold py-2 w-full text-center hover:bg-secondary">About</a>
            <a href="#" className="text-lg font-semibold py-2 w-full text-center hover:bg-secondary">Contact</a>
            {IsLoggedIn ?
              <Button
                onClick={() => router.push("/dashboard")}
                className="mt-4 w-3/4 mx-auto px-4 h-10 rounded-4xl bg-primary text-lg text-white"
              >
                Dashboard
              </Button>
              : <Button
                onClick={handleAuth}
                className="mt-4 w-3/4 mx-auto px-4 h-10 rounded-4xl bg-primary text-lg text-white"
              >
                Sign in
              </Button>
            }
          </div>
        )}
      </div>
    </div>
  );
}

