import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import teamImg from "/consult.jpg";
import { useTheme } from "../ThemeContext";

const Odoo2 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const checkItems = [
    "Analyze your needs",
    "Configure it with your business",
    "Constant support and maintenance",
    "Develop your platform",
    "Train you to operate",
  ];

  return (
    <section className="py-16" style={{ backgroundColor: 'var(--bg-base)' }}>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-2/3" data-aos="fade-right">
          <h2 className="head text-3xl md:text-4xl font-bold mb-6 section-heading inline-block" style={{ color: 'var(--text-primary)' }}>
            Odoo Implementation
          </h2>

          <p className="mb-4 leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>
            Implementing Odoo ERP effectively requires strategic expertise —
            without it, things can go wrong fast. At{" "}
            <strong style={{ color: 'var(--text-primary)' }}>Suktam Technologies</strong>, we simplify this journey by
            delivering custom, user-friendly Odoo solutions tailored to your
            operations.
          </p>

          <p className="mb-6 leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>
            With years of hands-on experience and a refined methodology, we
            deliver seamless implementations, ensuring your teams can adopt Odoo
            smoothly — without compromising functionality or performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {checkItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl transition-all duration-300"
                style={{
                  backgroundColor: isDark ? 'var(--bg-subtle)' : '#f8fafc',
                  border: `1px solid ${isDark ? 'var(--border-default)' : '#f1f5f9'}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = isDark ? 'rgba(16,185,129,0.3)' : 'rgba(16,185,129,0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = isDark ? 'var(--border-default)' : '#f1f5f9';
                }}
              >
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                <span className="text-sm font-medium" style={{ color: 'var(--text-secondary)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-1/3" data-aos="fade-left">
          <div className="relative group">
            <img
              src={teamImg}
              alt="ERP Team Collaboration"
              className="rounded-2xl shadow-lg object-cover w-full h-auto group-hover:shadow-xl transition-shadow duration-400"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Odoo2;
