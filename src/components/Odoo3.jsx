import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import odooLogo from "/odoo-2.avif";

const Odoo3 = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-12">
        {/* Left Text */}
        <div className="lg:w-2/3" data-aos="fade-right">
          <h2 className="head text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Why Odoo Official Partner?
          </h2>

          <p className="text-gray-700 mb-4">
            Odoo implementation requires strategic decisions — and partnering
            with certified experts makes all the difference. Choosing an
            official Odoo Partner ensures you're working with professionals who
            bring deep implementation knowledge and proven success across
            industries.
          </p>

          <p className="text-gray-700">
            While costs may appear higher initially, official partners deliver
            more value through tested practices, smoother deployment, and
            long-term performance. Their expertise helps avoid critical issues
            and ensures your ERP system drives maximum efficiency and business
            growth.
          </p>
        </div>

        {/* Right Image */}
        <div className="lg:w-1/3" data-aos="fade-left">
          <img
            src={odooLogo}
            alt="Odoo Logo"
            className="rounded-xl shadow-md object-cover w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Odoo3;
