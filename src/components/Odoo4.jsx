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
  {
    title: "Education",
    icon: <FaSchool className="text-3xl text-sky-600" />,
  },
  {
    title: "Hotel Management",
    icon: <FaConciergeBell className="text-3xl text-sky-600" />,
  },
  {
    title: "Restaurant Management",
    icon: <FaUtensils className="text-3xl text-sky-600" />,
  },
  {
    title: "Service",
    icon: <FaHandsHelping className="text-3xl text-sky-600" />,
  },
  {
    title: "POS",
    icon: <FaCashRegister className="text-3xl text-sky-600" />,
  },
  {
    title: "E-commerce & Website",
    icon: <FaLaptop className="text-3xl text-sky-600" />,
  },
  {
    title: "Manufacturing",
    icon: <FaIndustry className="text-3xl text-sky-600" />,
  },
  {
    title: "Trading",
    icon: <FaShoppingCart className="text-3xl text-sky-600" />,
  },
];

const Odoo4 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-14 bg-gray-50">
      <div className="text-center mb-12 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          Business Industries in Odoo
        </h2>
        <p
          className="text-gray-600 mt-2"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Each module performs certain functions which are interlinked with each
          other.
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {industries.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg p-6 text-center transition-transform hover:-translate-y-1 duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Odoo4;
