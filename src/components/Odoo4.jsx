import React, { useEffect } from "react";
import {
  FaIndustry,
  FaUtensils,
  FaShoppingCart,
  FaLaptop,
  FaConciergeBell,
  FaSchool,
  FaHandsHelping,
  FaCashRegister,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const industries = [
  { title: "Education", icon: <FaSchool className="text-2xl text-sky-500" />, gradient: "from-sky-500/10 to-blue-500/10", border: "border-sky-200/60" },
  { title: "Hotel Management", icon: <FaConciergeBell className="text-2xl text-amber-500" />, gradient: "from-amber-500/10 to-yellow-500/10", border: "border-amber-200/60" },
  { title: "Restaurant Management", icon: <FaUtensils className="text-2xl text-rose-500" />, gradient: "from-rose-500/10 to-red-500/10", border: "border-rose-200/60" },
  { title: "Service", icon: <FaHandsHelping className="text-2xl text-emerald-500" />, gradient: "from-emerald-500/10 to-green-500/10", border: "border-emerald-200/60" },
  { title: "POS", icon: <FaCashRegister className="text-2xl text-violet-500" />, gradient: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60" },
  { title: "E-commerce & Website", icon: <FaLaptop className="text-2xl text-blue-500" />, gradient: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60" },
  { title: "Manufacturing", icon: <FaIndustry className="text-2xl text-slate-500" />, gradient: "from-slate-500/10 to-gray-500/10", border: "border-slate-200/60" },
  { title: "Trading", icon: <FaShoppingCart className="text-2xl text-orange-500" />, gradient: "from-orange-500/10 to-amber-500/10", border: "border-orange-200/60" },
];

const Odoo4 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="text-center mb-14 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800 section-heading"
          data-aos="fade-up"
        >
          Business Industries in Odoo
        </h2>
        <p
          className="text-gray-500 mt-6 max-w-2xl mx-auto text-[16px]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Each module performs certain functions which are interlinked with each
          other.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {industries.map((item, index) => (
          <div
            key={index}
            className={`glow-card bg-gradient-to-br ${item.gradient} rounded-2xl border ${item.border} p-6 text-center group`}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className="mb-4 flex justify-center">
              <div className="w-14 h-14 rounded-xl bg-white/80 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Odoo4;
