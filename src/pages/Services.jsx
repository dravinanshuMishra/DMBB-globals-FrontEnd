import React from "react";
import { motion as Motion, useMotionValue, useTransform } from "framer-motion";
import { FiGlobe, FiSmartphone, FiPenTool, FiServer, FiCloud, FiUsers } from "react-icons/fi";

const services = [
  { title: "Web Development", description: "Modern, scalable web applications using React, Next.js, Node.js, and modern frameworks.", icon: <FiGlobe size={28} />, gradient: "from-sky-400 to-blue-600" },
  { title: "Mobile App Development", description: "High-performance iOS and Android apps using Flutter, React Native, and native technologies.", icon: <FiSmartphone size={28} />, gradient: "from-pink-500 to-rose-500" },
  { title: "UI / UX Design", description: "User-centric, clean, and intuitive designs that improve engagement and conversions.", icon: <FiPenTool size={28} />, gradient: "from-indigo-400 to-violet-600" },
  { title: "Backend & API Development", description: "Secure and scalable backend systems, REST & GraphQL APIs, and microservices architecture.", icon: <FiServer size={28} />, gradient: "from-emerald-400 to-green-600" },
  { title: "Cloud & DevOps", description: "Cloud infrastructure, CI/CD pipelines, monitoring, and scalable deployments on AWS & Azure.", icon: <FiCloud size={28} />, gradient: "from-yellow-400 to-orange-500" },
  { title: "Dedicated Freelance Teams", description: "Hire vetted freelance developers and designers as dedicated resources for your projects.", icon: <FiUsers size={28} />, gradient: "from-purple-400 to-pink-500" },
];

// Motion variants
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, type: "spring", stiffness: 120 } },
};

const floatIcon = {
  animate: { y: [0, -8, 0] },
  transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
};

// Separate ServiceCard component
const ServiceCard = ({ service }) => {
  const ref = React.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-50, 50], [15, -15]);
  const rotateY = useTransform(x, [-50, 50], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const px = e.clientX - rect.left - rect.width / 2;
    const py = e.clientY - rect.top - rect.height / 2;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Motion.div
      ref={ref}
      variants={cardVariant}
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.07 }}
      className="p-8 rounded-3xl bg-white/60 backdrop-blur-xl border border-slate-200 shadow-lg cursor-pointer transition-transform duration-300"
    >
      <Motion.div
        variants={floatIcon}
        animate="animate"
        className={`w-16 h-16 flex items-center justify-center rounded-full mb-6 text-white bg-linear-to-br ${service.gradient}`}
      >
        {service.icon}
      </Motion.div>

      <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
      <p className="text-slate-700 leading-relaxed">{service.description}</p>
    </Motion.div>
  );
};

const Services = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#f8fafc,#ffffff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Motion.h2
            className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Our Services
          </Motion.h2>
          <Motion.p
            className="text-slate-600 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            End-to-end technology solutions to help businesses build, scale, and succeed in the digital world.
          </Motion.p>
        </div>

        {/* Services Grid */}
        <Motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Services;
