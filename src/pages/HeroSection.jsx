import React from "react";
import { motion as Motion } from "framer-motion";
import AnimatedCounter from "../components/shared/AnimatedCounter.jsx";
import { useNavigate } from "react-router-dom";

const stats = [
  { value: 10, suffix: "+", label: "Projects Delivered Globally" },
  { value: 2, suffix: "+", label: "Countries Served" },
  { value: 100, suffix: "%", label: "Client Satisfaction" },
  { value: 24, suffix: "/7", label: "Remote Tech Support" },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const float = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 6,
    repeat: Infinity,
    ease: "easeInOut",
  },
};

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex flex-col lg:flex-row items-center overflow-hidden bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)] py-10 md:py-0">
      {/* Ambient Blur Elements */}
      <Motion.div
        {...float}
        className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl"
      />
      <Motion.div
        {...float}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl"
      />

      <Motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full"
      >
        {/* LEFT CONTENT */}
        <div className="flex flex-col">
          <Motion.span
            variants={fadeUp}
            className="inline-flex mb-6 px-3 w-full md:w-[70%] py-1.5 text-center rounded-full bg-linear-to-r from-sky-400 to-indigo-500 text-white text-sm font-semibold shadow-md hover:shadow-lg transition-all"
          >
            DMBB Global Freelance Tech Partners & Network
          </Motion.span>

          <Motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6"
          >
            Build Faster With <br />
            <span className="text-sky-500">Trusted Tech Partners</span>
          </Motion.h1>

          <Motion.p
            variants={fadeUp}
            className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed"
          >
            DMBB Global connects startups and enterprises with world-class
            freelance developers, designers, and engineers to deliver scalable,
            future-ready digital solutions.
          </Motion.p>

          <Motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4 mb-10"
          >
            <Motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full bg-linear-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Get Free Consultation
            </Motion.button>

            <Motion.button
              whileHover={{ scale: 1.06 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-full border-2 border-sky-500 text-sky-500 font-semibold bg-white/30 backdrop-blur-md cursor-pointer"
              onClick={() => navigate("/contact")}
            >
              Hire Tech Experts
            </Motion.button>
          </Motion.div>

          {/* MOBILE STATS */}
          <div className="grid grid-cols-2 gap-4 lg:hidden">
            {stats.map((stat, idx) => (
              <Motion.div
                key={idx}
                variants={fadeUp}
                className="bg-white/50 backdrop-blur-xl border border-slate-200 rounded-2xl p-4 flex flex-col items-center shadow-lg"
              >
                <h4 className="text-2xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-indigo-500 mb-1">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </h4>
                <p className="text-slate-700 text-sm font-medium text-center">
                  {stat.label}
                </p>
              </Motion.div>
            ))}
          </div>
        </div>

        {/* RIGHT STATS CARD (Desktop) */}
        <Motion.div
          variants={fadeUp}
          whileHover={{ y: -6 }}
          className="hidden lg:block"
        >
          <div className="bg-white/50 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 shadow-2xl">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, idx) => (
                <Motion.div key={idx} variants={fadeUp} className="text-center">
                  <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-indigo-500 mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </h4>
                  <p className="text-slate-700 font-medium">{stat.label}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        </Motion.div>
      </Motion.div>
    </section>
  );
};

export default HeroSection;
