import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaPuzzlePiece,
  FaUserTie,
  FaTools,
  FaCogs,
  FaSync,
  FaGraduationCap,
  FaUserFriends,
  FaClipboardCheck,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

const services = [
  { title: "Odoo Integration", icon: <FaPuzzlePiece />, delay: 0 },
  { title: "Odoo Consultancy", icon: <FaUserFriends />, delay: 100 },
  { title: "Custom Module Development", icon: <FaTools />, delay: 200 },
  { title: "Odoo Implementation", icon: <FaClipboardCheck />, delay: 300 },
  { title: "Hire Odoo Expert", icon: <FaUserTie />, delay: 400 },
  { title: "Odoo Support", icon: <FaPhoneAlt />, delay: 500 },
  { title: "Odoo Training", icon: <FaGraduationCap />, delay: 600 },
  { title: "Odoo Migration", icon: <FaSync />, delay: 700 },
  { title: "Odoo Licensing Help", icon: <FaCogs />, delay: 800 },
];

const Odoo5 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-14 bg-white">
      <div className="text-center mb-12 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          Our Odoo Services
        </h2>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 text-center shadow hover:shadow-lg transition-transform hover:-translate-y-1 duration-300"
            data-aos="fade-up"
            data-aos-delay={item.delay}
          >
            <div className="text-sky-700 text-3xl mb-3 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-lg font-semibold text-sky-700">{item.title}</h3>
          </div>
        ))}
      </div>

      <div
        className="mt-10 text-center"
        data-aos="fade-up"
        data-aos-delay="900"
      >
        <p className="mb-4 text-gray-700 font-bold text-lg">
          Chat with us for more information
        </p>
        <a
          href="https://wa.me/+918208103515"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded font-bold text-lg"
        >
          <FaWhatsapp className="mr-2 text-2xl" />
          Whatsapp
        </a>
      </div>
    </section>
  );
};

export default Odoo5;
