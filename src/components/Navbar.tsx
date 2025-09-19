"use client";

import Link from "next/link";

export default function Navbar() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Left Side (Blank) */}
        <div className="w-1/3"></div>

        {/* Right Side Navigation */}
        <nav className="w-2/3 flex justify-end gap-10">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-200 font-medium tracking-wide transition-all duration-300 hover:text-blue-400"
            >
              {link.name}
              {/* Animated underline */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
