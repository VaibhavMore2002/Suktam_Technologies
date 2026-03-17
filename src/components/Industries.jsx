import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaIndustry,
  FaShoppingCart,
  FaTruck,
  FaHospital,
  FaBriefcase,
} from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const industries = [
  {
    icon: <FaIndustry className="text-3xl text-indigo-500" />,
    title: "Manufacturing",
    desc: "Automate workflows, manage inventory, and streamline production lines.",
    gradient: "from-indigo-500/10 to-violet-500/10",
    border: "border-indigo-200/60",
    borderDark: "border-indigo-500/20",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-emerald-500" />,
    title: "Retail & E-commerce",
    desc: "Smart ERP for inventory, orders, and customer experience.",
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "border-emerald-200/60",
    borderDark: "border-emerald-500/20",
  },
  {
    icon: <FaTruck className="text-3xl text-amber-500" />,
    title: "Logistics & Supply Chain",
    desc: "Real-time tracking, fleet management, and inventory control.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-200/60",
    borderDark: "border-amber-500/20",
  },
  {
    icon: <FaHospital className="text-3xl text-rose-500" />,
    title: "Healthcare",
    desc: "Manage appointments, billing, and compliance in one system.",
    gradient: "from-rose-500/10 to-red-500/10",
    border: "border-rose-200/60",
    borderDark: "border-rose-500/20",
  },
  {
    icon: <FaBriefcase className="text-3xl text-violet-500" />,
    title: "Professional Services",
    desc: "Project tracking, timesheets, and invoicing made easy.",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-200/60",
    borderDark: "border-violet-500/20",
  },
];

const Industries = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 overflow-hidden" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="text-center mb-14 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold section-heading"
          style={{ color: 'var(--text-primary)' }}
          data-aos="fade-up"
        >
          Industries We Empower
        </h2>
        <p
          className="mt-6 max-w-2xl mx-auto text-[16px]"
          style={{ color: 'var(--text-secondary)' }}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Customized ERP solutions crafted for your domain-specific needs
        </p>
      </div>

      {/* Marquee with fade masks */}
      <div className="relative w-full overflow-hidden marquee-mask">
        <div
          className="flex space-x-5 animate-marquee px-4"
          style={{ width: "fit-content" }}
        >
          {[...industries, ...industries].map((industry, idx) => (
            <div
              key={idx}
              className={`flex-none w-72 p-6 bg-gradient-to-br ${industry.gradient} rounded-2xl border ${isDark ? industry.borderDark : industry.border} hover:shadow-lg transition-all duration-300 text-center group cursor-default`}
            >
              <div className="mb-4 flex justify-center">
                <div className={`w-14 h-14 rounded-xl shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${isDark ? 'bg-white/10' : 'bg-white/80'}`}>
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                {industry.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
