import React from "react";

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

const StarRating = ({ rating }) => {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`w-4 h-4 ${
            star <= rating ? "text-amber-400" : "text-slate-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.377 2.455a1 1 0 00-.364 1.118l1.287 3.971c.3.921-.755 1.688-1.54 1.118l-3.378-2.455a1 1 0 00-1.175 0l-3.378 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.971a1 1 0 00-.364-1.118L2.05 9.397c-.783-.57-.38-1.81.588-1.81h4.173a1 1 0 00.95-.69l1.287-3.97z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Trusted by Global Clients
          </h2>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Our clients trust DMBB Global for delivering high-quality, scalable,
            and reliable technology solutions.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-10 border border-slate-200 shadow-lg hover:shadow-2xl transition"
            >
              {/* Rating */}
              <StarRating rating={item.rating} />

              {/* Feedback */}
              <p className="mt-6 text-slate-700 leading-relaxed text-[15px]">
                “{item.feedback}”
              </p>

              {/* User */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <h4 className="font-semibold text-slate-900">
                  {item.name}
                </h4>
                <p className="text-sm text-slate-500">
                  {item.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
