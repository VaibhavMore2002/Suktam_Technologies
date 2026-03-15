import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section
        className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/about.jpg')`,
        }}
      >
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0c2d57]/85 to-[#0e3a6e]/80" />

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/5 rounded-full animate-float-slow" />
          <div className="absolute bottom-4 left-8 w-14 h-14 border border-white/5 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        {/* Content */}
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">
            About Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 px-6 md:px-16 lg:px-24 bg-gradient-to-b from-white to-slate-50">
        {/* First Paragraph */}
        <div className="mb-14 max-w-4xl mx-auto" data-aos="fade-up">
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed text-center">
            We specialize in driving digital transformation for businesses of
            all sizes. With over a decade of experience in the IT industry, our
            expert team brings deep technical knowledge and a results-driven
            approach to every project. Our on-growing projects reflect our
            commitment to delivering excellence and innovation.
          </p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div
            className="glow-card group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 flex items-center justify-center">
                  <span className="text-sky-600 text-lg">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Our Mission
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                Our mission is simple — to help you embrace digital solutions
                that streamline operations, enhance customer experiences, and
                improve overall productivity. In fact, our clients have seen
                productivity increases of up to 50% through our tailored
                strategies and cutting-edge technologies.
              </p>
            </div>
            {/* Accent gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>

          {/* Card 2 */}
          <div
            className="glow-card group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center">
                  <span className="text-orange-600 text-lg">🤝</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  Building Partnerships
                </h3>
              </div>
              <p className="text-gray-500 leading-relaxed text-[15px]">
                We don't just deliver services — we build long-term partnerships
                by understanding your unique challenges and providing scalable,
                efficient, and future-ready solutions. Whether you're just
                starting your digital journey or looking to optimize existing
                systems, we're here to guide you every step of the way.
              </p>
            </div>
            {/* Accent gradient bar */}
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;