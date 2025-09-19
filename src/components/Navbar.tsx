// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, Variants, Transition } from "framer-motion";

interface NavLink {
  name: string;
  href: string;
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const links: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  // Variants for mobile menu animation
  const mobileMenuVariants: Variants = {
    hidden: { y: "-100%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.4, ease: "easeOut" } },
    exit: { y: "-100%", opacity: 0, transition: { duration: 0.3, ease: "easeIn" } },
  };

  // Common transition for hover effects
  const hoverTransition: Transition = { duration: 0.3, ease: "easeInOut" };

  return (
    <header className="fixed w-full top-0 left-0 z-50 bg-gray-900/90 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300">
          {/* Mayankesh Jha  */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <motion.div
              key={link.name}
              className="relative group"
              whileHover="hover"
              initial="rest"
              animate="rest"
            >
              <Link
                href={link.href}
                className="text-white font-medium transition-colors duration-300 group-hover:text-blue-400"
              >
                {link.name}
              </Link>
              <motion.span
                className="absolute left-0 -bottom-1 h-0.5 bg-blue-400 rounded"
                variants={{
                  rest: { width: 0 },
                  hover: { width: "100%" },
                }}
                transition={hoverTransition}
              />
            </motion.div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            className="md:hidden bg-gray-900 w-full py-6 flex flex-col items-center gap-6"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={mobileMenuVariants}
          >
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white font-medium text-lg hover:text-blue-400 transition-colors duration-300"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
