import React, { useEffect } from "react";
import { FaCogs, FaPlug, FaUsers, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../ThemeContext";

const features = [
  {
    icon: <FaCogs className="text-indigo-500 text-2xl" />,
    title: "Custom Odoo Implementation",
    desc: "Deploy Odoo tailored to your exact business requirements for faster ROI.",
    colorClass: "icon-circle-indigo",
  },
  {
    icon: <FaPlug className="text-emerald-500 text-2xl" />,
    title: "Seamless Integration",
    desc: "Integrate ERP with your existing systems – CRM, E-commerce, and more.",
    colorClass: "icon-circle-emerald",
  },
  {
    icon: <FaUsers className="text-violet-500 text-2xl" />,
    title: "Expert Support",
    desc: "Get help from certified Odoo pros at every step, from setup to scaling.",
    colorClass: "icon-circle-violet",
  },
  {
    icon: <FaChartLine className="text-amber-500 text-2xl" />,
    title: "Scalable Solutions",
    desc: "Grow with ease using modular ERP components that adapt to your business.",
    colorClass: "icon-circle-amber",
  },
];

const Features = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      className="py-20 relative overflow-hidden"
      style={{
        background: isDark
          ? 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))'
          : 'linear-gradient(to bottom, #f8fafc, #ffffff)',
      }}
    >
      {/* Subtle BG Accent */}
      <div className={`absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 ${isDark ? 'bg-indigo-500/5' : 'bg-indigo-100/40'}`} />
      <div className={`absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 ${isDark ? 'bg-emerald-500/5' : 'bg-emerald-100/30'}`} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14" data-aos="fade-up">
          <h2 className="head text-3xl md:text-4xl font-bold section-heading" style={{ color: 'var(--text-primary)' }}>
            What We Offer
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-[16px]" style={{ color: 'var(--text-secondary)' }}>
            Empower your business with our comprehensive suite of ERP solutions
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="glow-card p-7 rounded-2xl text-center group"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              <div className={`icon-circle ${feature.colorClass} mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2.5" style={{ color: 'var(--text-primary)' }}>
                {feature.title}
              </h3>
              <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
