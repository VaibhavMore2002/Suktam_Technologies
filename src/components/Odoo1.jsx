import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Odoo1 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

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
    <section className="py-16 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-20 right-0 w-[300px] h-[300px] bg-sky-100/30 rounded-full blur-[100px]" />

      <div className="container mx-auto px-4 relative z-10">
        <h2
          className="head text-3xl md:text-4xl font-bold text-center mb-14 text-gray-800 section-heading"
          data-aos="fade-up"
        >
          Odoo Implementation Steps
        </h2>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Gradient Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-sky-500 via-sky-400 to-orange-400 rounded-full hidden md:block" />

          <div className="flex flex-col space-y-6">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div
                  key={index}
                  className="flex justify-between items-center w-full"
                  data-aos={isLeft ? "fade-right" : "fade-left"}
                  data-aos-delay={index * 60}
                >
                  {/* Left Side */}
                  <div className={`w-5/12 ${isLeft ? "text-right" : ""} hidden md:block`}>
                    {isLeft && (
                      <div className="glow-card bg-white p-5 rounded-xl shadow-sm border border-gray-100 inline-block text-left">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-sky-500 bg-sky-50 px-2 py-0.5 rounded-full">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    )}
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center items-center relative">
                    <div className="w-4 h-4 bg-gradient-to-br from-sky-500 to-sky-400 rounded-full z-10 shadow-md shadow-sky-500/30 transition-all duration-300 hover:scale-125" />
                  </div>

                  {/* Right Side */}
                  <div className={`w-full md:w-5/12 ${!isLeft ? "text-left" : ""}`}>
                    {(!isLeft || true) && (
                      <div className={`glow-card bg-white p-5 rounded-xl shadow-sm border border-gray-100 ${isLeft ? "md:hidden" : ""}`}>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs font-bold text-sky-500 bg-sky-50 px-2 py-0.5 rounded-full">
                            Step {index + 1}
                          </span>
                        </div>
                        <h3 className="text-base font-semibold text-gray-800 mb-1">
                          {step.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
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
