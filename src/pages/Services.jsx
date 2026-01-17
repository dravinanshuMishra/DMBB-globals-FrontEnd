import React from "react";
import { FiGlobe, FiSmartphone, FiPenTool, FiServer, FiCloud, FiUsers } from "react-icons/fi";

const services = [
  {
    title: "Web Development",
    description:
      "Modern, scalable web applications using React, Next.js, Node.js, and modern frameworks.",
    icon: <FiGlobe size={28} />,
    gradient: "from-sky-400 to-blue-600",
  },
  {
    title: "Mobile App Development",
    description:
      "High-performance iOS and Android apps using Flutter, React Native, and native technologies.",
    icon: <FiSmartphone size={28} />,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "UI / UX Design",
    description:
      "User-centric, clean, and intuitive designs that improve engagement and conversions.",
    icon: <FiPenTool size={28} />,
    gradient: "from-indigo-400 to-violet-600",
  },
  {
    title: "Backend & API Development",
    description:
      "Secure and scalable backend systems, REST & GraphQL APIs, and microservices architecture.",
    icon: <FiServer size={28} />,
    gradient: "from-emerald-400 to-green-600",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure, CI/CD pipelines, monitoring, and scalable deployments on AWS & Azure.",
    icon: <FiCloud size={28} />,
    gradient: "from-yellow-400 to-orange-500",
  },
  {
    title: "Dedicated Freelance Teams",
    description:
      "Hire vetted freelance developers and designers as dedicated resources for your projects.",
    icon: <FiUsers size={28} />,
    gradient: "from-purple-400 to-pink-500",
  },
];

const Services = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#f8fafc,#ffffff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Our Services
          </h2>
          <p className="text-slate-600 text-lg md:text-xl">
            End-to-end technology solutions to help businesses build, scale,
            and succeed in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-2 duration-300 cursor-pointer`}
            >
              {/* Icon Circle */}
              <div
                className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 text-white bg-linear-to-br ${service.gradient}`}
              >
                {service.icon}
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-3">
                {service.title}
              </h3>
              <p className="text-slate-700 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
