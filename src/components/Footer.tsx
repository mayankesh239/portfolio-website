// src/components/Footer.tsx
"use client";

import { FaArrowUp } from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-100 py-5 relative">
      {/* Footer Content */}
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm md:text-base">
          &copy; {new Date().getFullYear()} Mayankesh Jha. All rights reserved.
        </p>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-4 p-3 rounded-full bg-blue-700 text-white shadow hover:bg-blue-600 hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Back to Top"
      >
        <FaArrowUp className="animate-bounce" />
      </button>
    </footer>
  );
}
