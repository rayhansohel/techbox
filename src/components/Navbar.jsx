"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <>
      <nav className="p-4 border-b border-base-300">
        <div className="flex justify-between items-center container mx-auto">
          <div>
            <Link href="/">
              <Image
                src="/tech-box-logo-text.png"
                alt="TechBox Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="space-x-4">
            <Link href="/">
              <button className="hover:text-accent transition">
                Home
              </button>
            </Link>
            <Link href="/profile">
              <button className="hover:text-accent transition">
                Profile
              </button>
            </Link>
            <button
              onClick={handleAuth}
              className="btn btn-sm btn-accent px-4 py-2 rounded-md"
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
