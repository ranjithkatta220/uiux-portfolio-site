
import React from "react";
import { motion } from "framer-motion";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-gray-900 text-white font-sans px-4">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Hi, I'm Ranjith Katta</h1>
        <h2 className="text-xl md:text-2xl mb-6 text-gray-400">UI/UX Designer & Frontend Developer</h2>
        <p className="max-w-xl text-lg text-gray-300 mb-10">
          I craft responsive and performance-driven digital experiences using React, Tailwind CSS, and Figma. Passionate about user-centered design and clean interfaces.
        </p>
        <div className="flex gap-6">
          <a href="#projects" className="bg-white text-black px-6 py-3 rounded hover:bg-gray-200 transition">See Projects</a>
          <a href="#contact" className="border border-white px-6 py-3 rounded hover:bg-white hover:text-black transition">Contact Me</a>
        </div>
      </motion.section>

      {/* Projects Section */}
      <section id="projects" className="py-20 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-10 text-center">Projects</h3>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">DXC Technology Dashboard</h4>
            <p className="text-gray-400">Enterprise dashboard redesign using React.js, Tailwind, GraphQL & Figma components. Improved load time by 42%.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-2">Hexaware Angular Portal</h4>
            <p className="text-gray-400">Responsive B2C portal using Angular & Firebase. Boosted mobile engagement by 47% and form accuracy by 31%.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 text-center">
        <h3 className="text-3xl font-bold mb-8">Get in Touch</h3>
        <p className="text-gray-400 mb-6">Interested in working together? Let’s connect!</p>
        <a
          href="mailto:ranjithkatta220@gmail.com"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded hover:bg-blue-700 transition"
        >
          Send Email
        </a>
      </section>

      {/* Footer */}
      <footer className="text-center text-sm text-gray-500 pt-10 pb-4">
        &copy; {new Date().getFullYear()} Ranjith Katta. All rights reserved.
      </footer>
    </main>
  );
}
