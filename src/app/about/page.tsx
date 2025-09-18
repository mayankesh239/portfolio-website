"use client";

import { motion } from "framer-motion";

const skills = [
  "Embedded C",
  "C++ / Python / Java",
  "React.js & Next.js",
  "RTOS & Microcontrollers",
  "ARM / TriCore / STM32 / AVR",
  "Debugging & Optimization",
  "Machine Learning & Arduino",
  "Autosar / FreeRTOS",
];

const experiences = [
  {
    company: "Infineon Technologies",
    role: "Embedded Software Engineer",
    duration: "Jul 2024 - Present",
    logo: "/infineon.jpeg",
    highlights: [
      "As an Embedded Software Engineer at Infineon Technologies, I am responsible for designing and implementing device drivers for Infineon's microcontrollers used in the automotive industry.",
      "Involved in the design and development of Flash EEPROM Emulation driver (MCAL in AUTOSAR) for the Aurix 3G microcontroller.",
      "Adhered to MISRA C coding standards, used Polyspace, and followed embedded coding standards and best practices.",
      "Exposure to safety standard ISO 26262, including requirements analysis and implementation.",
      "Experience in AUTOSAR requirements analysis, implementation and traceability. Experience in UML design",
      "Exposure to Make and Makefile for build automation.",
      "Tools and Technologies: C, Java, Python, EB Tresos, AUTOSAR, MCAL, Enterprise Architect, UDE, Jama, LemonTree, Reqtify, Polyspace, Bitbucket, Jira.",
    ],
  },
  {
    company: "Infineon Technologies",
    role: "R&D Engineer Intern",
    duration: "Jan 2024 - Jun 2024",
    logo: "/infineon.jpeg",
    highlights: [
      "Developed Java plugin for MCU, GPT, Watchdog MCAL modules.",
      "Tools: Java, EB Tresos, XPath, XDM, Git, Bitbucket, AUTOSAR, MCAL.",
    ],
  },
  {
    company: "Akto.io",
    role: "SDE Intern",
    duration: "Jun 2023 - Dec 2023",
    logo: "/akto.jpg",
    highlights: [
      "Added support for auth proxy in its BurpSuite extension and tested it using nginx, tinyproxy and squid.",
      "Automated API related CVEs acquisition for website display using python. It has saved 4-5 hrs of work per week",
      "Automated test templates (1000+) display on the Akto website using python script. It has saved 3-4 hrs of work per week.",
      "Modified a template used in AWS. Changed launch configuration to launch template.",
      "Integrated Mixpanel to track some events in the Akto's backend.",
    ],
  },
  {
    company: "Crio.Do",
    role: "DSA Intern",
    duration: "Nov 2022 - Dec 2023",
    logo: "/crio.jpeg",
    highlights: [
      "Created algorithmic problems and editorials in C++, Java, JS, Python.",
      "Performed user trials and resolved 50+ tickets on content updates.",
      "Resolved 50+ tickets raised by the users concerning updating problems.",
    ],
  },
];

// Skill badge component
const SkillBadge = ({ skill, index }: { skill: string; index: number }) => (
  <motion.span
    whileHover={{
      scale: 1.15,
      rotate: index % 2 === 0 ? 3 : -3,
      boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.5)",
    }}
    className="px-5 py-2 bg-gradient-to-r from-blue-200 via-blue-100 to-blue-200 text-blue-800 rounded-full font-medium text-sm shadow-lg cursor-pointer transform transition-transform duration-300"
  >
    {skill}
  </motion.span>
);

// Timeline card component
const TimelineCard = ({ exp, index }: { exp: typeof experiences[0]; index: number }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="relative flex flex-col md:flex-row w-full justify-between items-center"
    >
      {/* Card */}
      <div
        className={`md:w-1/2 ${isLeft ? "pr-8 md:ml-auto" : "pl-8 md:mr-auto"}`}
      >
        <div className="bg-white rounded-3xl shadow-2xl p-6 hover:scale-105 hover:shadow-blue-300 transition-transform duration-500 cursor-pointer">
          <div className="flex items-center gap-4 mb-4">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-md" />
            <div className="text-left">
              <h3 className="text-xl font-bold text-gray-900">{exp.role}</h3>
              <p className="text-gray-600">{exp.company} | {exp.duration}</p>
            </div>
          </div>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-left">
            {exp.highlights.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Timeline dot with pulse */}
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-500 rounded-full border-4 border-white z-10"
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 p-10">
      {/* Intro */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-5xl mx-auto text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Hi, I'm Mayankesh Jha</h1>
        <p className="text-gray-700 text-lg leading-relaxed mb-3">
          Passionate about solving complex challenges, specializing in <span className="font-semibold text-blue-600">Software Development</span>, <span className="font-semibold text-blue-600">Embedded Systems</span>, and <span className="font-semibold text-blue-600">Competitive Programming</span>.
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          I strive to build impactful solutions while embracing creativity, technology, and life experiences. 🚀🎸📚📷♟️
        </p>
      </motion.div>

      {/* Skills */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-5xl mx-auto mb-16 text-center"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-6">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => <SkillBadge key={skill} skill={skill} index={idx} />)}
        </div>
      </motion.div>

      {/* Work Experience */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl font-semibold text-gray-900 mb-12 text-center">Work Experience</h2>

        <div className="relative">
          {/* Timeline line with glow */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200 rounded-lg shadow-lg"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          />

          <div className="space-y-12 flex flex-col">
            {experiences.map((exp, idx) => <TimelineCard key={idx} exp={exp} index={idx} />)}
          </div>
        </div>
      </motion.div>

      {/* Hobbies */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="max-w-5xl mx-auto text-center mt-20 text-gray-600 text-lg"
      >
        <p>
          Outside tech, I enjoy traveling, watching movies/web series, reading, blogging, and investing. I play musical instruments like guitar, violin, harmonica, and flute, and I'm improving my chess and photography skills.
          <br></br>I'm also the author of{" "}
        <a
          href="https://superprofile.bio/vp/the-hidden-economics-of-attention---master-your-time--focus--and-energy"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 font-semibold hover:underline"
          >
          “The Hidden Economics of Attention”
        </a>
        , a short ebook on managing time, focus, and mental energy.
    </p>
      </motion.div>
    </div>
  );
}
