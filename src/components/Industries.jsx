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
    icon: <FaIndustry className="text-5xl text-sky-600" />,
    title: "Manufacturing",
    desc: "Automate workflows, manage inventory, and streamline production lines.",
  },
  {
    icon: <FaShoppingCart className="text-5xl text-green-600" />,
    title: "Retail & E-commerce",
    desc: "Smart ERP for inventory, orders, and customer experience.",
  },
  {
    icon: <FaTruck className="text-5xl text-yellow-600" />,
    title: "Logistics & Supply Chain",
    desc: "Real-time tracking, fleet management, and inventory control.",
  },
  {
    icon: <FaHospital className="text-5xl text-red-600" />,
    title: "Healthcare",
    desc: "Manage appointments, billing, and compliance in one system.",
  },
  {
    icon: <FaBriefcase className="text-5xl text-purple-600" />,
    title: "Professional Services",
    desc: "Project tracking, timesheets, and invoicing made easy.",
  },
];

const Industries = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          Industries We Empower
        </h2>
        <p
          className="mt-2 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Customized ERP solutions crafted for your domain-specific needs.
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex space-x-6 animate-marquee px-4"
          style={{ width: "fit-content" }}
        >
          {[...industries, ...industries].map((industry, idx) => (
            <div
              key={idx}
              className="flex-none w-72 p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="mb-4 flex justify-center">{industry.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {industry.title}
              </h3>
              <p className="text-gray-600 text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
