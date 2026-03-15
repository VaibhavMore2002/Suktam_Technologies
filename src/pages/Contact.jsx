import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaUser, FaEnvelope, FaPhone, FaCommentDots } from "react-icons/fa";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    comments: "",
  });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSend = (e) => {
    e.preventDefault();

    const { name, email, phone, comments } = form;

    if (!name || !email || !phone || !comments) {
      alert("Please fill out all fields.");
      return;
    }

    const message = `Hello Suktam Technologies,\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nComments: ${comments}`;

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "918208103515";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Hero */}
      <section
        className="mt-[72px] relative h-[30vh] bg-center bg-cover flex items-center justify-center text-center overflow-hidden"
        style={{
          backgroundImage: `url('/contact.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#0c2d57]/85 to-[#0e3a6e]/80" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-4 right-8 w-20 h-20 border border-white/5 rounded-full animate-float-slow" />
        </div>
        <div className="relative z-20 px-6" data-aos="fade-up">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white">
            Contact Us
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-orange-400 rounded-full mx-auto mt-4" />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-xl mx-auto" data-aos="fade-up">
          {/* Glass Card Wrapper */}
          <div className="bg-white rounded-2xl shadow-lg shadow-black/5 border border-gray-100 p-8 md:p-10">
            <div className="text-center mb-8">
              <h3 className="head text-2xl font-bold text-gray-800">
                Get In Touch
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                We'd love to hear from you. Fill out the form and we'll get back to you shortly.
              </p>
            </div>

            <form className="space-y-5" onSubmit={handleSend}>
              {/* Name */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaUser className="text-sky-500 text-xs" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your full name"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaEnvelope className="text-sky-500 text-xs" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="your.email@example.com"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaPhone className="text-sky-500 text-xs" />
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XXXXX XXXXX"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all duration-300 bg-gray-50/50 hover:bg-white"
                  required
                />
              </div>

              {/* Comments */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-sm font-medium text-gray-700">
                  <FaCommentDots className="text-sky-500 text-xs" />
                  Comments
                </label>
                <textarea
                  name="comments"
                  placeholder="Tell us about your project or requirements..."
                  rows="4"
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500/30 focus:border-sky-400 transition-all duration-300 bg-gray-50/50 hover:bg-white resize-none"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4 pt-2">
                <button
                  type="reset"
                  className="flex-1 cursor-pointer border border-gray-200 text-gray-500 px-6 py-3 rounded-xl text-sm font-medium hover:bg-red-50 hover:border-red-200 hover:text-red-500 transition-all duration-300"
                >
                  Reset
                </button>
                <button
                  type="submit"
                  className="flex-1 cursor-pointer bg-gradient-to-r from-sky-600 to-sky-500 text-white px-6 py-3 rounded-xl text-sm font-medium hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.01] transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
