import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import teamImg from "/consult.jpg";

const Odoo2 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Text Block */}
        <div className="lg:w-2/3" data-aos="fade-right">
          <h2 className="head text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Odoo Implementation
          </h2>

          <p className="text-gray-700 mb-4">
            Implementing Odoo ERP effectively requires strategic expertise —
            without it, things can go wrong fast. At{" "}
            <strong>Suktam Technologies</strong>, we simplify this journey by
            delivering custom, user-friendly Odoo solutions tailored to your
            operations.
          </p>

          <p className="text-gray-700 mb-4">
            With years of hands-on experience and a refined methodology, we
            deliver seamless implementations, ensuring your teams can adopt Odoo
            smoothly — without compromising functionality or performance.
          </p>

          <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-6">
            {[
              "Analyze your needs",
              "Configure it with your business",
              "Constant support and maintenance",
              "Develop your platform",
              "Train you to operate",
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-gray-600 text-sm"
              >
                <FaCheckCircle className="text-green-600" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/3" data-aos="fade-left">
          <img
            src={teamImg}
            alt="ERP Team Collaboration"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Odoo2;
