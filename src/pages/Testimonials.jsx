import React from "react";
import { motion as Motion, useMotionValue, useTransform } from "framer-motion";

const testimonials = [
  {
    name: "John Carter",
    role: "CTO, FinTech Company",
    rating: 5,
    feedback:
      "DMBB Global provided us with highly skilled developers who delivered our product on time with excellent quality.",
  },
  {
    name: "Sarah Williams",
    role: "Product Manager, Healthcare Startup",
    rating: 4,
    feedback:
      "Professional, reliable, and technically strong team. Communication and delivery were seamless.",
  },
  {
    name: "Michael Lee",
    role: "Founder, SaaS Startup",
    rating: 5,
    feedback:
      "Working with DMBB Global felt like having an in-house tech team. Highly recommended for startups.",
  },
];

// Star rating with subtle motion
const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Motion.svg
          key={star}
          className={`w-4 h-4 ${star <= rating ? "text-amber-400" : "text-slate-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          initial={{ y: 0 }}
          animate={{ y: [0, -3, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: star * 0.1, ease: "easeInOut" }}
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.378-2.455a1 1 0 00-1.175 0l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.97z" />
        </Motion.svg>
      ))}
    </div>
  );
};

// Single testimonial card
const TestimonialCard = ({ testimonial }) => {
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
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 120, damping: 15 }}
      className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-200 shadow-lg cursor-pointer transition-transform duration-300"
    >
      <StarRating rating={testimonial.rating} />
      <p className="mt-6 text-slate-700 leading-relaxed text-[15px]">
        “{testimonial.feedback}”
      </p>
      <div className="mt-8 pt-6 border-t border-slate-200">
        <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
        <p className="text-sm text-slate-500">{testimonial.role}</p>
      </div>
    </Motion.div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 space-y-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <Motion.h2
            className="text-4xl md:text-5xl font-extrabold text-slate-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Trusted by Global Clients
          </Motion.h2>
          <Motion.p
            className="text-slate-600 text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            Our clients trust DMBB Global for delivering high-quality, scalable, and reliable technology solutions.
          </Motion.p>
        </div>

        {/* Testimonials Grid */}
        <Motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
