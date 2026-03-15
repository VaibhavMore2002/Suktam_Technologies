import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Odoo1 from "../components/Odoo1";
import Odoo2 from "../components/Odoo2";
import Odoo4 from "../components/Odoo4";
import Odoo5 from "../components/Odoo5";

const OdooImplementation = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero */}
      <section
        className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/odoo.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0c2d57]/85 to-[#0e3a6e]/80" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/5 rounded-full animate-float-slow" />
          <div className="absolute bottom-4 left-8 w-14 h-14 border border-white/5 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">
            Odoo Implementation
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      <Odoo1 />
      <Odoo2 />
      <Odoo4 />
      <Odoo5 />
    </>
  );
};

export default OdooImplementation;
