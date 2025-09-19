"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-cyan-100 px-6 sm:px-8 py-12">
      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center">
        {/* Left Column - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
          className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto"
        >
          <Image
            src="/MayankeshJha.jpeg"
            alt="Mayankesh Jha"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* Right Column - Text + CTA */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4 leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
              Mayankesh Jha
            </span>
          </h1>

          {/* Typewriter Effect */}
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 mb-6">
            <Typewriter
              words={["Software Engineer", "Tech Enthusiast"]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={2000}
            />
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto md:mx-0">
            Passionate about building scalable and efficient software systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 sm:gap-6">
            <a
              href="/projects"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              View My Work
            </a>
            <a
              href="/contact"
              className="px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl border-2 border-blue-400 text-blue-600 font-semibold hover:bg-blue-50 shadow-md transition-all duration-300"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
