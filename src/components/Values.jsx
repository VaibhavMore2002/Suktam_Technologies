import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaBullseye, FaEye, FaHeart } from "react-icons/fa";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* BG accent */}
      <div className="absolute top-1/2 right-0 w-[350px] h-[350px] bg-sky-100/30 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 head section-heading">
            Our Mission & Core Values
          </h2>
        </div>

        {/* Mission Section */}
        <div
          className="flex flex-col lg:flex-row items-center gap-10 mb-16"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle icon-circle-blue">
                <FaBullseye className="text-sky-600 text-xl" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-sky-600 uppercase">
                Our Mission
              </span>
            </div>
            <h3 className="head text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Empowering Businesses Through Innovation
            </h3>
            <p className="text-gray-500 text-[16px] leading-relaxed">
              To empower businesses with smart, scalable ERP solutions that
              enhance productivity, reduce operational friction, and
              accelerate growth using the power of Odoo.
            </p>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="100">
            <div className="relative group">
              <img
                src="./mission.avif"
                alt="Suktam Technologies Mission"
                className="rounded-2xl shadow-lg object-cover w-full h-auto group-hover:shadow-xl transition-shadow duration-400"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-sky-200 to-transparent mb-16" />

        {/* Vision Section */}
        <div
          className="flex flex-col lg:flex-row-reverse items-center gap-10 mb-16"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle icon-circle-green">
                <FaEye className="text-emerald-600 text-xl" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-emerald-600 uppercase">
                Our Vision
              </span>
            </div>
            <h3 className="head text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Leading Global Digital Transformation
            </h3>
            <p className="text-gray-500 text-[16px] leading-relaxed">
              To become a global leader in delivering innovative ERP services
              that help businesses of all sizes digitally transform and scale
              with confidence.
            </p>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-right" data-aos-delay="100">
            <div className="relative group">
              <img
                src="./vision.jpg"
                alt="Suktam Technologies Vision"
                className="rounded-2xl shadow-lg object-cover w-full h-auto group-hover:shadow-xl transition-shadow duration-400"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-emerald-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </div>
        </div>

        {/* Gradient Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent mb-16" />

        {/* Core Values Section */}
        <div
          className="flex flex-col lg:flex-row items-center gap-10"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="icon-circle icon-circle-orange">
                <FaHeart className="text-orange-500 text-xl" />
              </div>
              <span className="text-xs font-semibold tracking-widest text-orange-500 uppercase">
                Core Values
              </span>
            </div>
            <h3 className="head text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
              What Drives Us Every Day
            </h3>
            <div className="space-y-3">
              {[
                "Customer-Centric Excellence",
                "Integrity & Transparency",
                "Innovation-Driven Approach",
                "Commitment to Quality",
                "Collaborative Growth",
              ].map((value, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl bg-white border border-gray-100 hover:border-orange-200 hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex-shrink-0" />
                  <span className="text-gray-700 text-[15px] font-medium">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left" data-aos-delay="100">
            <div className="relative group">
              <img
                src="/values.jpg"
                alt="Suktam Technologies Values"
                className="rounded-2xl shadow-lg object-cover w-full h-auto group-hover:shadow-xl transition-shadow duration-400"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
