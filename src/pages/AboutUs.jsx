import React from "react";
import { motion as Motion } from "framer-motion";
import logo from "../assets/logo/logoSet.png";
 import AnimatedCounter from "../components/shared/AnimatedCounter.jsx";

const stats = [
  { value: "5+", label: "Freelance Experts" },
  { value: "20+", label: "Global Clients" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24/7", label: "Project Support" },
];

const coFounders = [
  {
    initials: "DM",
    name: "Dravinanshu Mishra",
    role: "Co-Founder · Full-Stack Engineer (MERN / PERN)",
    expertise: [
      "Frontend & Backend Development",
      "React, Node.js, REST APIs",
      "PostgreSQL / MongoDB",
      "UI Engineering, Performance & UX",
    ],
    links: {
      github: "https://github.com/dravinanshuMishra",
      linkedin: "https://www.linkedin.com/in/dravinanshu-mishra-0909b430b",
      email: "mailto:dravinanshu98@gmail.com",
      portfolio: "NA",
    },
    accent: "bg-indigo-600 text-white",
  },
  {
    initials: "BB",
    name: "Biplab Biswas",
    role: "Co-Founder · Full-Stack Engineer (MERN / PERN)",
    expertise: [
      "Frontend & Backend Development",
      "Node.js, API Design & Architecture",
      "PostgreSQL / MongoDB",
      "System Design & Code Quality",
    ],
    links: {
      github: "https://github.com/bbiplab165",
      linkedin: "https://www.linkedin.com/in/biplab-biswas-7246571ba",
      email: "mailto:bbiplab165@gmail.com",
      portfolio: "https://biplab-biswas.netlify.app/",
    },
    accent: "bg-emerald-600 text-white",
  },
];

// Motion Variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const slideInFrom = (direction = "bottom") => {
  const positions = {
    bottom: { opacity: 0, y: 50 },
    top: { opacity: 0, y: -50 },
    left: { opacity: 0, x: -50 },
    right: { opacity: 0, x: 50 },
  };
  return {
    hidden: positions[direction],
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };
};

const AboutUs = () => {
  return (
    <section className="bg-linear-to-br from-[#eef2ff] via-[#ffffff] to-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-32 space-y-28">
        {/* Hero Section */}
        <Motion.div
          className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Floating Logo */}
          <Motion.div
            variants={float}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={logo}
              alt="DMBB Global Hero"
              className="w-full max-w-lg rounded-3xl transform hover:scale-105 transition duration-500"
            />
          </Motion.div>

          {/* Hero Text */}
          <Motion.div
            variants={container}
            className="text-center lg:text-left space-y-6"
          >
            {["Building Technology", "Partnerships That Scale"].map(
              (line, i) => (
                <Motion.h1
                  key={i}
                  variants={fadeUp}
                  className={`text-4xl md:text-5xl font-extrabold leading-tight ${
                    i === 1 ? "text-sky-500" : "text-slate-900"
                  }`}
                >
                  {line}
                </Motion.h1>
              ),
            )}
            <Motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-slate-600 leading-relaxed"
            >
              DMBB Global is a trusted freelance tech network helping startups
              and enterprises build secure, scalable, and future-ready digital
              products with top global talent.
            </Motion.p>
          </Motion.div>
        </Motion.div>
       
        {/* Stats Section */}
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {stats.map((item, idx) => {
            // Determine numeric value and suffix
            const numericValue = parseInt(item.value); // e.g., "50+" -> 50
            const suffix = item.value.replace(numericValue, ""); // "+" or "%" or "24/7" logic

            return (
              <Motion.div
                key={idx}
                variants={slideInFrom(idx % 2 === 0 ? "left" : "right")}
                whileHover={{
                  scale: 1.08,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.15)",
                }}
                className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl border border-slate-200 shadow-md transform transition duration-500 text-center"
              >
                <h4 className="text-4xl font-bold text-sky-500 mb-2">
                  <AnimatedCounter value={numericValue} suffix={suffix} />
                </h4>
                <p className="text-slate-700 font-medium">{item.label}</p>
              </Motion.div>
            );
          })}
        </Motion.div>
        {/* Who We Are & Mission */}
        <Motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {["Who We Are", "Our Mission"].map((title, idx) => (
            <Motion.div
              key={idx}
              variants={slideInFrom("bottom")}
              whileHover={{ rotate: 1.5 }}
              className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl border border-slate-200 shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-semibold text-slate-900 mb-3">
                {title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {title === "Who We Are"
                  ? "We operate as an extension of your in-house team. Our global network of vetted freelance developers, designers, and engineers ensures fast execution without compromising quality."
                  : "To empower businesses with flexible, reliable, and cost-effective technology solutions by connecting them with world-class freelance professionals."}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
        {/* Co-Founders Section */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {coFounders.map((co, idx) => (
            <Motion.div
              key={idx}
              variants={slideInFrom("bottom")}
              whileHover={{
                y: -10,
                rotate: 1.5,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.15)",
              }}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-200 shadow-lg transition"
            >
              <div className="flex items-center gap-5 mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg ${co.accent.replace(
                    "text",
                    "bg",
                  )}`}
                >
                  {co.initials}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {co.name}
                  </h3>
                  <p className="text-sm text-slate-600">{co.role}</p>
                </div>
              </div>

              <p className="text-sm font-semibold text-slate-700 mb-3">
                Core Expertise
              </p>
              <ul className="space-y-2 text-slate-600 text-sm mb-8">
                {co.expertise.map((item, i) => (
                  <li key={i}>• {item}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-4 text-sm font-medium">
                {co.links.github && (
                  <a
                    href={co.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    GitHub
                  </a>
                )}
                {co.links.linkedin && (
                  <a
                    href={co.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
                {co.links.email && (
                  <a href={co.links.email} className="hover:underline">
                    Email
                  </a>
                )}
                {co.links.portfolio && co.links.portfolio !== "NA" && (
                  <a
                    href={co.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
