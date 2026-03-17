import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../ThemeContext";

const Odoo1 = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  const steps = [
    { title: "Define Business Goals", desc: "We begin by understanding your key business goals to tailor the ERP effectively." },
    { title: "Allocate Budget", desc: "A realistic ERP budget is aligned with your expectations and solution scope." },
    { title: "Select Best Suitable ERP", desc: "Based on your needs, we shortlist the best-fit Odoo configurations." },
    { title: "Select Implementation Partner", desc: "Choose the right team to bring your ERP vision to life – that's where we come in!" },
    { title: "Define Implementation Phases", desc: "Break the implementation into manageable, measurable stages." },
    { title: "Select Hosting Plan", desc: "Decide between cloud, on-premise, or hybrid based on your infrastructure." },
    { title: "Installation & Configuration", desc: "We install Odoo and configure it to match your business processes." },
    { title: "Data Migration", desc: "Clean and securely migrate your data from legacy systems to Odoo." },
    { title: "Testing", desc: "Each module undergoes complete testing to ensure performance and accuracy." },
    { title: "Training", desc: "We train your staff to use the system effectively from day one." },
    { title: "Go Live", desc: "With everything validated, we go live with full support." },
    { title: "Support & Maintenance", desc: "We offer ongoing support, updates, and optimization assistance." },
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ background: isDark ? 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' : 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' }}>
      <div className={`absolute top-20 right-0 w-[300px] h-[300px] rounded-full blur-[100px] ${isDark ? 'bg-orange-500/5' : 'bg-orange-200/20'}`} />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="head text-3xl md:text-4xl font-bold text-center mb-14 section-heading" style={{ color: 'var(--text-primary)' }} data-aos="fade-up">Odoo Implementation Steps</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-blue-500 rounded-full hidden md:block" />
          <div className="flex flex-col space-y-6">
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <div key={i} className="flex justify-between items-center w-full" data-aos={isLeft ? "fade-right" : "fade-left"} data-aos-delay={i * 60}>
                  <div className={`w-5/12 ${isLeft ? "text-right" : ""} hidden md:block`}>
                    {isLeft && (
                      <div className="glow-card p-5 rounded-xl inline-block text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isDark ? 'text-orange-300 bg-orange-500/15' : 'text-blue-700 bg-orange-100'}`}>Step {i + 1}</span>
                        </div>
                        <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                      </div>
                    )}
                  </div>
                  <div className="hidden md:flex w-2/12 justify-center items-center relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full z-10 shadow-md shadow-orange-500/30 transition-all duration-300 hover:scale-125" />
                  </div>
                  <div className={`w-full md:w-5/12 ${!isLeft ? "text-left" : ""}`}>
                    {(!isLeft || true) && (
                      <div className={`glow-card p-5 rounded-xl ${isLeft ? "md:hidden" : ""}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${isDark ? 'text-orange-300 bg-orange-500/15' : 'text-blue-700 bg-orange-100'}`}>Step {i + 1}</span>
                        </div>
                        <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                        <p className="text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.desc}</p>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Odoo1;
