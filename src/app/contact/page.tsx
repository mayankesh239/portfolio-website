"use client";

import { FaLinkedin, FaGithub, FaTwitter, FaMedium } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 px-6 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-blue-300/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-72 h-72 bg-cyan-300/25 rounded-full blur-3xl"></div>
      </div>

      {/* Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-800 mb-6 tracking-tight">
        Let's Connect
      </h2>
      <p className="text-center text-gray-600 mb-14 max-w-2xl mx-auto text-lg">
        I'm always open to collaborations, new opportunities, or even just a friendly chat.  
        Feel free to reach out through any of the platforms below 👇
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-10 flex-wrap">
        {[
          { icon: <FaLinkedin />, url: "https://linkedin.com/in/mayankeshjha", label: "LinkedIn", color: "from-blue-500 to-blue-700" },
          { icon: <FaGithub />, url: "https://github.com/mayankesh239", label: "GitHub", color: "from-gray-700 to-black" },
          { icon: <FaTwitter />, url: "https://twitter.com/mayankesh239", label: "Twitter", color: "from-sky-400 to-sky-600" },
          { icon: <FaMedium />, url: "https://medium.com/@mayankesh239", label: "Medium", color: "from-gray-800 to-gray-900" },
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
