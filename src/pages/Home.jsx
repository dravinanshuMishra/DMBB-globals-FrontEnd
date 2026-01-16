import React from "react";

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
    color: "bg-indigo-600 text-white",
    tag: "Full-Stack Development & Product Focus",
    tagColor: "text-indigo-700 bg-indigo-50",
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
    color: "bg-emerald-600 text-white",
    tag: "Full-Stack Development & System Design",
    tagColor: "text-emerald-700 bg-emerald-50",
  },
];

const Home = () => {
  return (
    <div className="bg-gray-700 min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-16 grid gap-10 md:grid-cols-2">
        {coFounders.map((co, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300"
          >
            <div className="flex items-center gap-4 mb-6">
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center font-semibold ${co.color}`}
              >
                {co.initials}
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900">{co.name}</h2>
                <p className="text-sm text-gray-600">{co.role}</p>
              </div>
            </div>

            <p className="text-sm font-medium text-gray-700 mb-3">Technical Expertise</p>

            <ul className="text-sm text-gray-600 space-y-2">
              {co.expertise.map((item, i) => (
                <li key={i}>• {item}</li>
              ))}
            </ul>

            {/* Links */}
            <div className="mt-6 flex flex-wrap gap-4 text-sm">
              {co.links.github && (
                <a
                  href={co.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${co.tagColor.split(" ")[0]} hover:underline font-medium`}
                >
                  GitHub
                </a>
              )}
              {co.links.linkedin && (
                <a
                  href={co.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${co.tagColor.split(" ")[0]} hover:underline font-medium`}
                >
                  LinkedIn
                </a>
              )}
              {co.links.email && (
                <a
                  href={co.links.email}
                  className={`${co.tagColor.split(" ")[0]} hover:underline font-medium`}
                >
                  Email
                </a>
              )}
              {co.links.portfolio && (
                <a
                  href={co.links.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${co.tagColor.split(" ")[0]} hover:underline font-medium`}
                >
                  Portfolio
                </a>
              )}
            </div>

            <span
              className={`inline-block mt-6 text-xs font-medium px-3 py-1 rounded-full ${co.tagColor}`}
            >
              {co.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
