import React from "react";
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

const ContactUs = () => {
  return (
    <section className="py-28 bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)]">
      <div className="max-w-7xl mx-auto px-6 md:px-16 text-center">
        {/* Header */}
        <div className="max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-slate-600">
            Have a project in mind or want to collaborate with us? Reach out directly using the contact details below.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {contactInfo.map((info, idx) => (
            <div
              key={idx}
              className="bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-slate-200 shadow-lg hover:shadow-2xl transition"
            >
              <div className="flex items-center gap-3 mb-4 text-2xl justify-center">
                <span className={`${info.color}`}>{info.icon}</span>
                <h3 className="text-xl font-semibold text-slate-900">{info.type}</h3>
              </div>
              <ul className="space-y-3 text-slate-600">
                {info.details.map((item, i) => (
                  <li key={i}>
                    <span className="font-medium">{item.label}: </span>
                    <a
                      href={item.href}
                      className={`${info.color} font-medium hover:underline`}
                    >
                      {item.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Optional Social Links */}
        <div className="mt-16 flex justify-center gap-6 text-slate-600">
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
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
