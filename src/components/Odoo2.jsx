import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import teamImg from "/consult.jpg";

const Odoo2 = () => {
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
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Block */}
        <div className="lg:w-2/3" data-aos="fade-right">
          <h2 className="head text-3xl md:text-4xl font-bold text-gray-800 mb-6 section-heading inline-block">
            Odoo Implementation
          </h2>

          <p className="text-gray-500 mb-4 leading-relaxed text-[15px]">
            Implementing Odoo ERP effectively requires strategic expertise —
            without it, things can go wrong fast. At{" "}
            <strong className="text-gray-700">Suktam Technologies</strong>, we simplify this journey by
            delivering custom, user-friendly Odoo solutions tailored to your
            operations.
          </p>

          <p className="text-gray-500 mb-6 leading-relaxed text-[15px]">
            With years of hands-on experience and a refined methodology, we
            deliver seamless implementations, ensuring your teams can adopt Odoo
            smoothly — without compromising functionality or performance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
            {checkItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-gray-100 hover:border-emerald-200 hover:shadow-sm transition-all duration-300"
              >
                <FaCheckCircle className="text-emerald-500 flex-shrink-0" />
                <span className="text-gray-600 text-sm font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/3" data-aos="fade-left">
          <div className="relative group">
            <img
              src={teamImg}
              alt="ERP Team Collaboration"
              className="rounded-2xl shadow-lg object-cover w-full h-auto group-hover:shadow-xl transition-shadow duration-400"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Odoo2;
