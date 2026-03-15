import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whyChooseUsData from "../data/whyChooseUsData";

const WhyChooseUs = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/question.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0c2d57]/85 to-[#0e3a6e]/80" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/5 rounded-full animate-float-slow" />
          <div className="absolute bottom-4 left-8 w-14 h-14 border border-white/5 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">
            Why Choose Us?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-slate-50">
        <div className="text-center mb-14" data-aos="fade-up">
          <h3 className="head text-2xl md:text-3xl font-bold text-gray-800 section-heading">
            What Makes Us Stand Out?
          </h3>
          <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-[16px]">
            Discover why businesses trust us to drive their digital
            transformation. Our expertise, innovation, and commitment to
            excellence set us apart.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseUsData.map((item, index) => (
            <div
              key={index}
              className="glow-card group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 80}
            >
              <div className="p-7 relative z-10">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-[14.5px] leading-relaxed">
                  {item.description}
                </p>
              </div>
              {/* Accent gradient bar */}
              <div className="h-1 w-full bg-gradient-to-r from-sky-500 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;