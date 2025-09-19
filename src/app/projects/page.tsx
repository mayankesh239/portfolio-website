"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "STM32 FreeRTOS Project Collection",
    description:
      "Real-time embedded applications on STM32 Nucleo-F401RE using STM32CubeIDE, FreeRTOS, and CMSIS-RTOS API. Demonstrated mutexes, semaphores, queues, task scheduling, inter-task communication, and GPIO synchronization.",
    technologies: ["STM32", "FreeRTOS", "CMSIS-RTOS", "USART2", "Moserial"],
    url: "https://github.com/mayankesh239/FreeRTOS-STM32-Projects",
    image: "/FreeRTOS.png",
  },
  {
    title: "Arduino Uno Projects",
    description:
      "Built multiple Arduino-based embedded systems including 7-segment counter, LED blinker, PWM brightness control, and buzzer-LED alarm systems to reinforce sensor-based event handling and microcontroller programming.",
    technologies: ["Arduino", "C++", "Embedded Systems", "Sensors"],
    url: "https://github.com/mayankesh239/Arduino-Uno-Projects",
    image: "/arduino.png",
  },
  {
    title: "PII Tracker: Personal Data Pattern Synchronizer",
    description:
      "A Python application that fetches PII patterns from a GitHub repository and synchronizes them with a MongoDB collection, aiding in data privacy and compliance.",
    technologies: ["Python", "MongoDB", "GitHub API", "Cron Jobs"],
    url: "https://github.com/mayankesh239/PII_Tracker",
    image: "/PII.png",
  },
  {
    title: "MatrixMart",
    description:
      "Full-fledged e-commerce web application using Node.js, Express.js, RESTful API, Redux, React.js, and MongoDB.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB", "Redux"],
    url: "https://github.com/mayankesh239/MatrixMart",
    image: "/matrixMart.png",
  },
  {
    title: "JSEF &apos;22 Website",
    description:
      "Website for Jharkhand Science and Environment Festival (JSEF) &apos;22, built using TypeScript and Next.js for EPAC, BIT Mesra.",
    technologies: ["TypeScript", "Next.js", "React", "Web Development"],
    url: "https://github.com/mayankesh239/jsef-wesite",
    liveUrl: "https://jsef.vercel.app/",
    image: "/jsef.png",
  },
  {
    title: "CoffeeDapp: Decentralized Coffee Marketplace",
    description:
      "A decentralized application (DApp) built on the Ethereum blockchain, enabling users to buy and sell coffee beans directly, ensuring transparency and traceability in every transaction.",
    technologies: [
      "Solidity",
      "Hardhat",
      "Ethers.js",
      "React",
      "Tailwind CSS",
      "Vercel",
    ],
    url: "https://github.com/mayankesh239/coffeeDapp",
    liveUrl: "https://coffee-dapp-mayankesh239.vercel.app/",
    image: "/Dapp.png",
  },
  {
    title: "Crypto Tracker",
    description:
      "A real-time cryptocurrency price tracker built with React.js, utilizing the CoinGecko API for up-to-date market data.",
    technologies: ["React.js", "CoinGecko API", "Netlify"],
    url: "https://github.com/mayankesh239/crypto-tracker",
    liveUrl: "https://crypto-price-tracker239.netlify.app/",
    image: "/crypto-tracker.png",
  },
];

export default function Projects() {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-white to-cyan-100 px-6 py-12">
      {/* Section Heading */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-center text-blue-700 mb-12">
        Projects
      </h2>

      {/* Project Grid */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 40 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.2, duration: 0.6 },
          },
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-md border border-gray-200 overflow-hidden flex flex-col"
          >
            {/* Project Image */}
            <div className="h-44 w-full overflow-hidden">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Project Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{proj.title}</h3>
              <p className="text-gray-600 flex-1 mb-4">{proj.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-6">
                {proj.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs px-3 py-1 bg-gradient-to-r from-blue-200 to-blue-300 text-blue-900 rounded-full font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 py-4 bg-gray-50 border-t flex gap-4">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-colors"
              >
                <FaGithub /> Code
              </a>
              {proj.liveUrl && (
                <a
                  href={proj.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-700 hover:text-green-600 font-semibold transition-colors"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
