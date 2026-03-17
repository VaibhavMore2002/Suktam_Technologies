import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const AboveFooter = () => {
  return (
    <section className="relative h-[60vh] bg-center bg-cover bg-fixed flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: `url('/AboveFooter.avif')` }}>
      <div className="absolute inset-0 bg-gradient-to-br from-orange-700/95 via-orange-600/90 to-amber-600/85" />
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/8 rounded-full animate-float-slow" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border border-white/8 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border border-white/8 rounded-full animate-float-slow" style={{ animationDelay: "1.5s" }} />
      </div>
      <div className="relative z-20 px-6 max-w-3xl mx-auto">
        <p className="text-white/70 text-sm md:text-base mb-4 tracking-widest uppercase font-medium">Contact us for your Odoo ERP needs – we're here to help!</p>
        <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-8 leading-tight">
          NEED A{" "}<span className="gradient-text">CONSULTATION</span>?
        </h2>
        <Link to="/contact" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3.5 rounded-xl font-semibold tracking-wide transition-all duration-300 hover:shadow-xl hover:shadow-blue-800/30 hover:scale-[1.02]">
          CONTACT US
          <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </div>
    </section>
  );
};

export default AboveFooter;
