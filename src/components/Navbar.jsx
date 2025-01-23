"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "profile", label: "Profile" },
  ];

  return (
    <>
      <nav className="border-b border-base-300 sticky top-0 z-50 bg-base-100">
        <div className="flex justify-between items-center p-4 container mx-auto">
          <div>
            <Link href="/">
              <Image
                src="/tech-box-logo-text.png"
                alt="Techbox Logo"
                width={150}
                height={50}
                priority
              />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <button className="hover:text-accent transition">{link.label}</button>
              </Link>
            ))}
            <button
              onClick={handleAuth}
              className="btn btn-sm btn-accent px-4 py-2 rounded-md"
            >
              {isAuthenticated ? "Logout" : "Login"}
            </button>
          </div>
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-sm px-2 btn-accent">
              {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
        {menuOpen && (
          <div className="md:hidden p-4 border border-base-300 bg-base-100 absolute right-4 top-14 z-50">
            <nav>
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <button className="block w-full text-left p-2 hover:text-accent transition">{link.label}</button>
                </Link>
              ))}
              <button
                onClick={handleAuth}
                className="block w-full text-left p-2 btn btn-sm btn-accent rounded-md"
              >
                {isAuthenticated ? "Logout" : "Login"}
              </button>
            </nav>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

