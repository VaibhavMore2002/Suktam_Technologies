import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";
import { useTheme } from "../ThemeContext";

const Contact = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [form, setForm] = useState({ name: "", email: "", phone: "", comments: "" });
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSend = (e) => {
    e.preventDefault();
    const { name, email, phone, comments } = form;
    if (!name || !email || !phone || !comments) { alert("Please fill out all fields."); return; }
    const message = `Hello Suktam Technologies,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComments: ${comments}`;
    window.open(`https://wa.me/918208103515?text=${encodeURIComponent(message)}`, "_blank");
  };

  const inputClasses = `w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400 transition-all duration-300 ${
    isDark ? "bg-white/5 border border-white/10 text-white placeholder-gray-500 hover:bg-white/8" : "bg-orange-50/30 border border-orange-200/40 text-gray-800 hover:bg-white hover:border-orange-300/50"
  }`;

  return (
    <>
      <section className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden" style={{ backgroundImage: `url('/contact.jpg')` }}>
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/90 via-amber-500/88 to-yellow-500/82" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/8 rounded-full animate-float-slow" />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">Contact Us</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-white via-blue-200 to-blue-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      <section className="py-16 px-4" style={{ background: isDark ? 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' : 'linear-gradient(to bottom, var(--bg-base), var(--bg-subtle))' }}>
        <div className="max-w-xl mx-auto" data-aos="fade-up">
          <div className="rounded-2xl shadow-lg p-8 md:p-10" style={{ backgroundColor: isDark ? 'var(--bg-card)' : '#ffffff', border: `1px solid ${isDark ? 'var(--border-default)' : 'rgba(240,123,26,0.12)'}`, boxShadow: isDark ? '0 4px 30px rgba(0,0,0,0.3)' : '0 4px 30px rgba(240,123,26,0.06)' }}>
            <div className="text-center mb-8">
              <h3 className="head text-2xl font-bold" style={{ color: 'var(--text-primary)' }}>Get In Touch</h3>
              <p className="text-sm mt-2" style={{ color: 'var(--text-muted)' }}>We'd love to hear from you.</p>
            </div>
            <form className="space-y-5" onSubmit={handleSend}>
              <div>
                <label className={`flex items-center gap-2 mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}><FaUser className="text-blue-600 text-xs" />Name</label>
                <input type="text" name="name" placeholder="Your full name" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className={`flex items-center gap-2 mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}><FaEnvelope className="text-blue-600 text-xs" />Email</label>
                <input type="email" name="email" placeholder="your.email@example.com" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className={`flex items-center gap-2 mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}><FaPhone className="text-blue-600 text-xs" />Phone</label>
                <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX" onChange={handleChange} className={inputClasses} required />
              </div>
              <div>
                <label className={`flex items-center gap-2 mb-2 text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}><FaCommentDots className="text-blue-600 text-xs" />Comments</label>
                <textarea name="comments" placeholder="Tell us about your project..." rows="4" onChange={handleChange} className={`${inputClasses} resize-none`} required />
              </div>
              <div className="flex gap-4 pt-2">
                <button type="reset" className={`flex-1 cursor-pointer px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${isDark ? "border border-white/10 text-gray-400 hover:bg-red-500/10 hover:border-red-500/20 hover:text-red-400" : "border border-gray-200 text-gray-500 hover:bg-red-50 hover:border-red-200 hover:text-red-500"}`}>Reset</button>
                <button type="submit" className="flex-1 cursor-pointer bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.01] transition-all duration-300">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
