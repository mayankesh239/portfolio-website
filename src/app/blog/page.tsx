"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "How Small Habits Shape Success — Insights from Make Your Bed",
    link: "https://medium.com/@mayankesh.ss/how-small-habits-shape-success-insights-from-make-your-bed-a60e1b19228e",
    description:
      "Explore how tiny daily habits can compound into major achievements. Insights from Admiral William H. McRaven's 'Make Your Bed' reveal the power of discipline, consistency, and small actions in shaping a successful life.",
    image: "/makeYourBed.jpg",
  },
  {
    title: "6 Simple Financial Habits Worth Trying",
    link: "https://medium.com/@mayankesh.ss/6-simple-financial-habits-worth-trying-f0948493d50f",
    description:
      "Learn six practical financial habits that can help you manage money better, build savings, and improve long-term financial security. Simple, actionable steps for anyone wanting to achieve financial wellness.",
    image: "/finance.jpg",
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 p-10">
      <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 text-center mb-12 tracking-tight">
        My Blogs
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {blogs.map((blog, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
          >
            {/* Blog Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-48 md:h-56 object-cover"
            />

            {/* Blog Content */}
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                {blog.title}
              </h3>
              <p className="text-gray-600 mb-6 flex-1">{blog.description}</p>

              {/* Button */}
              <a
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="self-start px-5 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow hover:shadow-xl transition-all duration-300"
              >
                Read on Medium
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
