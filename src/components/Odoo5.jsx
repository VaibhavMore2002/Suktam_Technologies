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
  { title: "Odoo Integration", icon: <FaPuzzlePiece />, color: "text-sky-500", bg: "from-sky-500/10 to-blue-500/10", border: "border-sky-200/60" },
  { title: "Odoo Consultancy", icon: <FaUserFriends />, color: "text-violet-500", bg: "from-violet-500/10 to-purple-500/10", border: "border-violet-200/60" },
  { title: "Custom Module Development", icon: <FaTools />, color: "text-amber-500", bg: "from-amber-500/10 to-yellow-500/10", border: "border-amber-200/60" },
  { title: "Odoo Implementation", icon: <FaClipboardCheck />, color: "text-emerald-500", bg: "from-emerald-500/10 to-green-500/10", border: "border-emerald-200/60" },
  { title: "Hire Odoo Expert", icon: <FaUserTie />, color: "text-rose-500", bg: "from-rose-500/10 to-red-500/10", border: "border-rose-200/60" },
  { title: "Odoo Support", icon: <FaPhoneAlt />, color: "text-blue-500", bg: "from-blue-500/10 to-indigo-500/10", border: "border-blue-200/60" },
  { title: "Odoo Training", icon: <FaGraduationCap />, color: "text-orange-500", bg: "from-orange-500/10 to-amber-500/10", border: "border-orange-200/60" },
  { title: "Odoo Migration", icon: <FaSync />, color: "text-teal-500", bg: "from-teal-500/10 to-cyan-500/10", border: "border-teal-200/60" },
  { title: "Odoo Licensing Help", icon: <FaCogs />, color: "text-slate-500", bg: "from-slate-500/10 to-gray-500/10", border: "border-slate-200/60" },
];

const Odoo5 = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-14 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800 section-heading"
          data-aos="fade-up"
        >
          Our Odoo Services
        </h2>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {services.map((item, index) => (
          <div
            key={index}
            className={`glow-card bg-gradient-to-br ${item.bg} rounded-2xl border ${item.border} p-6 text-center group`}
            data-aos="fade-up"
            data-aos-delay={index * 60}
          >
            <div className={`${item.color} text-2xl mb-3 flex justify-center`}>
              <div className="w-12 h-12 rounded-xl bg-white/80 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
            </div>
            <h3 className="text-base font-semibold text-gray-800">
              {item.title}
            </h3>
          </div>
        ))}
      </div>

      {/* WhatsApp CTA */}
      <div
        className="mt-14 text-center"
        data-aos="fade-up"
      >
        <p className="mb-5 text-gray-600 font-medium text-lg">
          Chat with us for more information
        </p>
        <a
          href="https://wa.me/+918208103515"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-7 py-3.5 rounded-xl font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-green-500/25 hover:scale-[1.02]"
        >
          <FaWhatsapp className="mr-2 text-xl group-hover:scale-110 transition-transform duration-300" />
          Whatsapp
        </a>
      </div>
    </section>
  );
};

export default Odoo5;
