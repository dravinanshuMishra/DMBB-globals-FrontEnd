import React from "react";
import logo from "../assets/logo/logoSet.png";

const stats = [
  { value: "50+", label: "Freelance Experts" },
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

const AboutUs = () => {
  return (
    <section className="bg-linear-to-br from-[#eef2ff] via-[#ffffff] to-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-32 space-y-28">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          <div className="flex justify-center lg:justify-start">
            <img
              src={logo}
              alt="DMBB Global Hero"
              className="w-full max-w-lg rounded-3xl transform hover:scale-105 transition duration-500"
            />
          </div>

          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Building Technology <br />
              <span className="text-sky-500">Partnerships That Scale</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
              DMBB Global is a trusted freelance tech network helping startups
              and enterprises build secure, scalable, and future-ready digital
              products with top global talent.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className="p-8 bg-white/70 backdrop-blur-lg rounded-3xl border border-slate-200 shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 text-center"
            >
              <h4 className="text-4xl font-bold text-sky-500 mb-2">
                {item.value}
              </h4>
              <p className="text-slate-700 font-medium">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Who We Are & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {["Who We Are", "Our Mission"].map((title, idx) => (
            <div
              key={idx}
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
            </div>
          ))}
        </div>

        {/* Founding Partners Meta */}
        <div className="hidden lg:flex items-center justify-end gap-6">
          <div className="text-xs text-slate-600 text-right">
            <span className="font-medium text-slate-800">
              Dravinanshu Mishra
            </span>{" "}
            & <span className="font-medium text-slate-800">Biplab Biswas</span>
            <div className="text-[11px] text-slate-500">Founding Partners</div>
          </div>
          <div className="h-8 w-px bg-slate-300" />
          <div className="text-xs text-slate-500">Est. 5 Jan 2026</div>
        </div>

        {/* Co-Founders Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {coFounders.map((co, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-200 shadow-lg hover:shadow-2xl transition"
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
                    className={` hover:underline`}
                  >
                    GitHub
                  </a>
                )}
                {co.links.linkedin && (
                  <a
                    href={co.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` hover:underline`}
                  >
                    LinkedIn
                  </a>
                )}
                {co.links.email && (
                  <a
                    href={co.links.email}
                    className={` hover:underline`}
                  >
                    Email
                  </a>
                )}
                {co.links.portfolio && co.links.portfolio !== "NA" && (
                  <a
                    href={co.links.portfolio}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={` hover:underline`}
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
