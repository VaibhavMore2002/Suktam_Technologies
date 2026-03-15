import React from "react";
import { Link } from "react-router-dom";

const AboveFooter = () => {
  return (
    <section
      className="relative h-[60vh] bg-center bg-cover flex items-center justify-center text-center"
      style={{
        backgroundImage: `url('/AboveFooter.avif')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#000000E6]"></div>

      {/* Content */}
      <div className="relative z-20 px-6">
        <p className="text-gray-300 text-md md:text-base mb-2 tracking-wider">
          Contact us for your Odoo ERP needs – we're here to help!
        </p>
        <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
          NEED A CONSULTATION?
        </h2>
        <Link
          to="/contact"
          className="inline-block bg-sky-800 hover:bg-sky-900 text-white px-8 py-3 rounded transition font-semibold tracking-wide"
        >
          CONTACT US
        </Link>
      </div>
    </section>
  );
};

export default AboveFooter;
