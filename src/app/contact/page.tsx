"use client";

import { FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function Contact() {
  // Custom X (Twitter) SVG
  const XIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 1227"
      fill="currentColor"
      className="w-8 h-8"
    >
      <path d="M714.163 519.284L1160.89 0H1051.9L667.137 450.887L357.99 0H0L468.447 681.821L0 1226.37H109.988L514.936 750.218L842.01 1226.37H1200L714.137 519.284H714.163ZM569.18 693.983L520.648 626.012L150.011 79.6944H306.545L598.705 501.697L647.236 569.668L1021.59 1146.3H865.057L569.18 693.983Z" />
    </svg>
  );

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-300/25 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-6 tracking-tight">
        Let&apos;s Connect
      </h2>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        I&apos;m always open to collaborations, new opportunities, or even just a friendly chat.  
        Feel free to reach out through any of the platforms below 👇
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-10 flex-wrap">
        {[
          { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/mayankesh-jha-15446b206/", label: "LinkedIn", color: "from-blue-500 to-blue-700" },
          { icon: <FaGithub />, url: "https://github.com/mayankesh239", label: "GitHub", color: "from-gray-700 to-black" },
          { icon: XIcon, url: "https://x.com/MayankeshJha_", label: "X", color: "from-black to-gray-800" },
          { icon: <FaMedium />, url: "https://medium.com/@mayankesh.ss", label: "Medium", color: "from-gray-800 to-gray-900" },
        ].map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className={`
              w-16 h-16 flex items-center justify-center 
              rounded-2xl text-white text-3xl
              shadow-lg backdrop-blur-md 
              bg-gradient-to-br ${social.color}
              transform transition-all duration-500 
              hover:scale-110 hover:shadow-xl
            `}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
