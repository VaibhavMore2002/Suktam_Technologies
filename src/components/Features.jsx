import React, { useEffect } from "react";
import { FaCogs, FaPlug, FaUsers, FaChartLine } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    icon: <FaCogs className="text-sky-600 text-4xl mb-4" />,
    title: "Custom Odoo Implementation",
    desc: "Deploy Odoo tailored to your exact business requirements for faster ROI.",
  },
  {
    icon: <FaPlug className="text-green-600 text-4xl mb-4" />,
    title: "Seamless Integration",
    desc: "Integrate ERP with your existing systems – CRM, E-commerce, and more.",
  },
  {
    icon: <FaUsers className="text-purple-600 text-4xl mb-4" />,
    title: "Expert Support",
    desc: "Get help from certified Odoo pros at every step, from setup to scaling.",
  },
  {
    icon: <FaChartLine className="text-orange-600 text-4xl mb-4" />,
    title: "Scalable Solutions",
    desc: "Grow with ease using modular ERP components that adapt to your business.",
  },
];

const Features = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
          data-aos="fade-up"
        >
          What We Offer
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition duration-300 text-center"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
