import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import whyChooseUsData from "../data/whyChooseUsData";
import { useTheme } from "../ThemeContext";

const WhyChooseUs = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);

  return (
    <>
      <section className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: `url('/question.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-700/92 via-orange-600/87 to-amber-600/82" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/8 rounded-full animate-float-slow" />
          <div className="absolute bottom-4 left-8 w-14 h-14 border border-white/8 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">Why Choose Us?</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white via-blue-200 to-blue-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      <section className="py-16 px-6 md:px-16 lg:px-24" style={{ background: isDark ? 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' : 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' }}>
        <div className="text-center mb-14" data-aos="fade-up">
          <h3 className="head text-2xl md:text-3xl font-bold section-heading" style={{ color: 'var(--text-primary)' }}>What Makes Us Stand Out?</h3>
          <p className="mt-6 max-w-2xl mx-auto text-[16px]" style={{ color: 'var(--text-secondary)' }}>Discover why businesses trust us to drive their digital transformation.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {whyChooseUsData.map((item, i) => (
            <div key={i} className="glow-card group rounded-2xl overflow-hidden" data-aos="fade-up" data-aos-delay={i * 80}>
              <div className="p-7 relative z-10">
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{item.title}</h3>
                <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{item.description}</p>
              </div>
              <div className="h-1 w-full bg-gradient-to-r from-orange-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default WhyChooseUs;