"use client";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const DropdownMenu = ({ navLinks }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="md:hidden">
      <button onClick={() => setMenuOpen(!menuOpen)} className="btn btn-sm px-2 btn-accent">
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
      {menuOpen && (
        <div ref={menuRef} className="absolute left-4 top-14 z-50 p-4 border border-base-300 bg-base-100 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="hover:text-accent">
                  {link.label}
              </Link>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
