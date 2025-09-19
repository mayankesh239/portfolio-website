// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   const links = [
//     { name: "Home", href: "/" },
//     { name: "About", href: "/about" },
//     { name: "Projects", href: "/projects" },
//     { name: "Blogs", href: "/blog" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="w-full bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
//       <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
//         {/* Left Side (Blank) */}
//         <div className="w-1/3"></div>

//         {/* Right Side Navigation */}
//         <nav className="w-2/3 flex justify-end gap-10">
//           {links.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="relative text-gray-200 font-medium tracking-wide transition-all duration-300 hover:text-blue-400"
//             >
//               {link.name}
//               {/* Animated underline */}
//               <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
//             </Link>
//           ))}
//         </nav>
//       </div>
//     </header>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
        {/* Left Side (Blank for now) */}
        <div className="w-1/3"></div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex w-2/3 justify-end gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="relative text-gray-200 font-medium tracking-wide transition-all duration-300 hover:text-blue-400"
            >
              {link.name}
              {/* Underline on hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-200"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-gray-800">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-gray-200 font-medium hover:text-blue-400 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
