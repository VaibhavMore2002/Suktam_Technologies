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
import { useTheme } from "../ThemeContext";

const industries = [
  { title: "Education", icon: <FaSchool className="text-2xl text-indigo-500" />, gradient: "from-indigo-500/10 to-violet-500/10", border: "border-indigo-200/60", borderDark: "border-indigo-500/20" },
  { title: "Hotel Management", icon: <FaConciergeBell className="text-2xl text-amber-500" />, gradient: "from-amber-500/10 to-yellow-500/10", border: "border-amber-200/60", borderDark: "border-amber-500/20" },
  { title: "Restaurant Management", icon: <FaUtensils className="text-2xl text-rose-500" />, gradient: "from-rose-500/10 to-red-500/10", border: "border-rose-200/60", borderDark: "border-rose-500/20" },
  { title: "Service", icon: <FaHandsHelping className="text-2xl text-emerald-500" />, gradient: "from-emerald-500/10 to-green-500/10", border: "border-emerald-200/60", borderDark: "border-emerald-500/20" },
  { title: "POS", icon: <FaCashRegister className="text-2xl text-violet-500" />, gradient: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60", borderDark: "border-violet-500/20" },
  { title: "E-commerce & Website", icon: <FaLaptop className="text-2xl text-blue-500" />, gradient: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60", borderDark: "border-blue-500/20" },
  { title: "Manufacturing", icon: <FaIndustry className="text-2xl text-slate-500" />, gradient: "from-slate-500/10 to-gray-500/10", border: "border-slate-200/60", borderDark: "border-slate-500/20" },
  { title: "Trading", icon: <FaShoppingCart className="text-2xl text-orange-500" />, gradient: "from-orange-500/10 to-amber-500/10", border: "border-orange-200/60", borderDark: "border-orange-500/20" },
];

const Odoo4 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="py-16"
      style={{
        background: isDark
          ? 'linear-gradient(to bottom, var(--bg-subtle), var(--bg-base))'
          : 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      }}
    >
      <div className="text-center mb-14 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold section-heading"
          style={{ color: 'var(--text-primary)' }}
          data-aos="fade-up"
        >
          Business Industries in Odoo
        </h2>
        <p
          className="mt-6 max-w-2xl mx-auto text-[16px]"
          style={{ color: 'var(--text-secondary)' }}
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
            className={`glow-card bg-gradient-to-br ${item.gradient} rounded-2xl border ${isDark ? item.borderDark : item.border} p-6 text-center group`}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className="mb-4 flex justify-center">
              <div className={`w-14 h-14 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                {item.icon}
              </div>
            </div>
            <h3 className="text-base font-semibold" style={{ color: 'var(--text-primary)' }}>
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Odoo4;
