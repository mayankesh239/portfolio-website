// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const mobileMenuVariants: Variants = {
    hidden: { y: -300, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" as any }, 
    },
    exit: {
      y: -300,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" as any }, 
    },
  };

  return (
    <header className="w-full top-0 left-0 z-50 bg-gray-900/95 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name with hover animation */}
        <motion.div
          whileHover={{
            scale: 1.05,
            textShadow: "0px 0px 8px rgba(59, 130, 246, 0.8)",
          }}
          transition={{ duration: 0.3 }}
        >
          {/* <Link
            href="/"
            className="text-2xl font-bold text-white hover:text-blue-400 transition-colors duration-300"
          >
            Mayankesh Jha
          </Link> */}
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <div key={link.name} className="relative group cursor-pointer">
              <Link
                href={link.href}
                className="text-white font-medium transition-colors duration-300 group-hover:text-blue-400"
              >
                {link.name}
              </Link>
              {/* Animated Underline */}
              <motion.div
                className="absolute left-0 bottom-0 h-0.5 bg-blue-400 rounded"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3, ease: "easeInOut" as any }}
              />
            </div>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <div
          className="md:hidden text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
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
              <motion.div
                key={link.name}
                whileHover={{
                  scale: 1.1,
                  color: "#3B82F6",
                  transition: { duration: 0.2 },
                }}
                className="text-white font-medium text-lg cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                <Link href={link.href}>{link.name}</Link>
              </motion.div>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
