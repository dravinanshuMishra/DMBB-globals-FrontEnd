import React from "react";
import { motion as Motion, useMotionValue, useTransform } from "framer-motion";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const contactInfo = [
  {
    type: "Phone",
    icon: <FaPhoneAlt />,
    details: [
      { label: "Dravinanshu Mishra", value: "+91 9651244924", href: "tel:+919651244924" },
      { label: "Biplab Biswas", value: "+91 8637861054", href: "tel:+918637861054" },
    ],
    color: "text-emerald-500",
  },
  {
    type: "Email",
    icon: <FaEnvelope />,
    details: [
      { label: "Dravinanshu Mishra", value: "dravinanshu98@gmail.com", href: "mailto:dravinanshu98@gmail.com" },
      { label: "Biplab Biswas", value: "bbiplab165@gmail.com", href: "mailto:bbiplab165@gmail.com" },
    ],
    color: "text-sky-500",
  },
];

// Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 120, damping: 15 } },
};

const iconFloat = {
  animate: { y: [0, -6, 0] },
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

const ContactCard = ({ info }) => {
  // For 3D tilt on hover
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
      style={{ rotateX, rotateY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={cardVariants}
      whileHover={{ scale: 1.05 }}
      className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-lg cursor-pointer transition-transform duration-300"
    >
      <Motion.div
        variants={iconFloat}
        animate="animate"
        className={`flex items-center justify-center text-2xl gap-3 mb-4 text-center ${info.color}`}
      >
        {info.icon}
        <h3 className="text-xl font-semibold text-slate-900">{info.type}</h3>
      </Motion.div>
      <ul className="space-y-3 text-slate-600 text-sm md:text-base">
        {info.details.map((item, i) => (
          <li key={i}>
            <span className="font-medium">{item.label}: </span>
            <a href={item.href} className={`${info.color} font-medium hover:underline`}>
              {item.value}
            </a>
          </li>
        ))}
      </ul>
    </Motion.div>
  );
};

const ContactUs = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto space-y-4">
          <Motion.h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Get in Touch
          </Motion.h2>
          <Motion.p
            className="text-lg md:text-xl text-slate-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Have a project in mind or want to collaborate with us? Reach out directly using the contact details below.
          </Motion.p>
        </div>

        {/* Contact Cards */}
        <Motion.div
          className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, idx) => (
            <ContactCard key={idx} info={info} />
          ))}
        </Motion.div>

        {/* Social Links */}
        <Motion.div
          className="mt-16 flex justify-center gap-6 text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
        >
          <a
            href="https://www.linkedin.com/company/dmmb-global"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/dmmbglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            GitHub
          </a>
          <a
            href="https://twitter.com/dmmbglobal"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-500 transition"
          >
            Twitter
          </a>
        </Motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
