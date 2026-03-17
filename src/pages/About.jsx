import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTheme } from "../ThemeContext";

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <>
      <section className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: `url('/about.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-amber-500/88 to-yellow-500/82" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/8 rounded-full animate-float-slow" />
          <div className="absolute bottom-4 left-8 w-14 h-14 border border-white/8 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">About Us</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white via-blue-200 to-blue-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: isDark ? 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' : 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' }}>
        <div className="mb-14 max-w-4xl mx-auto" data-aos="fade-up">
          <p className="text-lg md:text-xl leading-relaxed text-center" style={{ color: 'var(--text-secondary)' }}>
            We specialize in driving digital transformation for businesses of all sizes. With over a decade of experience in the IT industry, our expert team brings deep technical knowledge and a results-driven approach to every project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="glow-card group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="100">
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/10 to-sky-500/10 flex items-center justify-center"><span className="text-blue-600 text-lg">🎯</span></div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Our Mission</h3>
              </div>
              <p className="leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>Our mission is simple — to help you embrace digital solutions that streamline operations, enhance customer experiences, and improve overall productivity. Our clients have seen productivity increases of up to 50% through our tailored strategies.</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-blue-600 to-sky-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>

          <div className="glow-card group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay="200">
            <div className="p-8 relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center"><span className="text-orange-500 text-lg">🤝</span></div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--text-primary)' }}>Building Partnerships</h3>
              </div>
              <p className="leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>We don't just deliver services — we build long-term partnerships by understanding your unique challenges and providing scalable, efficient, and future-ready solutions.</p>
            </div>
            <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;