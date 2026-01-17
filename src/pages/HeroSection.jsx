import React from "react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[linear-gradient(to_bottom_right,#eef2ff,#ffffff,#e0e7ff)]">
      
      {/* Decorative Blur Elements */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-sky-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div>
          <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-sky-100 text-sky-600 text-sm font-semibold">
            Global Freelance Tech Network
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 leading-tight mb-6">
            Build Faster With <br />
            <span className="text-sky-500">Trusted Tech Partners</span>
          </h1>

          <p className="text-slate-600 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            DMBB Global connects startups and enterprises with world-class
            freelance developers, designers, and engineers to deliver scalable,
            future-ready digital solutions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            {/* Modern Gradient Button */}
            <button className="px-8 py-3.5 rounded-full bg-linear-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-xl transition transform duration-300">
              Get Free Consultation
            </button>

            {/* Outline Button with Glass Effect */}
            <button className="px-8 py-3.5 rounded-full border-2 border-sky-500 text-sky-500 font-semibold bg-white/30 backdrop-blur-md hover:bg-white/50 hover:scale-105 transition transform duration-300">
              Hire Tech Experts
            </button>
          </div>
        </div>

        {/* Right Stats Card */}
        <div className="hidden lg:block">
          <div className="bg-white/50 backdrop-blur-xl border border-slate-200 rounded-3xl p-10 shadow-2xl hover:shadow-3xl transition transform duration-300">
            <div className="grid grid-cols-2 gap-6">
              {[
                { value: "50+", label: "Verified Freelancers" },
                { value: "20+", label: "Global Clients" },
                { value: "100%", label: "Client Satisfaction" },
                { value: "24/7", label: "Tech Support" },
              ].map((stat, idx) => (
                <div key={idx} className="text-center">
                  <h4 className="text-3xl font-extrabold bg-clip-text text-transparent bg-linear-to-r from-sky-500 to-indigo-500 mb-2">
                    {stat.value}
                  </h4>
                  <p className="text-slate-700 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
