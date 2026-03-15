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

const industries = [
  {
    icon: <FaIndustry className="text-3xl text-sky-500" />,
    title: "Manufacturing",
    desc: "Automate workflows, manage inventory, and streamline production lines.",
    gradient: "from-sky-500/10 to-blue-500/10",
    border: "border-sky-200/60",
  },
  {
    icon: <FaShoppingCart className="text-3xl text-emerald-500" />,
    title: "Retail & E-commerce",
    desc: "Smart ERP for inventory, orders, and customer experience.",
    gradient: "from-emerald-500/10 to-green-500/10",
    border: "border-emerald-200/60",
  },
  {
    icon: <FaTruck className="text-3xl text-amber-500" />,
    title: "Logistics & Supply Chain",
    desc: "Real-time tracking, fleet management, and inventory control.",
    gradient: "from-amber-500/10 to-yellow-500/10",
    border: "border-amber-200/60",
  },
  {
    icon: <FaHospital className="text-3xl text-rose-500" />,
    title: "Healthcare",
    desc: "Manage appointments, billing, and compliance in one system.",
    gradient: "from-rose-500/10 to-red-500/10",
    border: "border-rose-200/60",
  },
  {
    icon: <FaBriefcase className="text-3xl text-violet-500" />,
    title: "Professional Services",
    desc: "Project tracking, timesheets, and invoicing made easy.",
    gradient: "from-violet-500/10 to-purple-500/10",
    border: "border-violet-200/60",
  },
];

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-14 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800 section-heading"
          data-aos="fade-up"
        >
          Industries We Empower
        </h2>
        <p
          className="mt-6 text-gray-500 max-w-2xl mx-auto text-[16px]"
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
              className={`flex-none w-72 p-6 bg-gradient-to-br ${industry.gradient} rounded-2xl border ${industry.border} hover:shadow-lg transition-all duration-300 text-center group cursor-default`}
            >
              <div className="mb-4 flex justify-center">
                <div className="w-14 h-14 rounded-xl bg-white/80 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
