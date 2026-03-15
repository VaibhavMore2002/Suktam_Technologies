import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhyChooseUs from "./pages/WhyChooseUs";
import OdooImplementation from "./pages/OdooImplementation";
import Services from "./pages/Services";
import ScrollToTop from "./components/ScrollToTop";

import Nav from "./components/Nav";
import Footer from "./components/Footer";

import "aos/dist/aos.css";
import AOS from "aos";

import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from "react-icons/fa";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init();

    const handleScroll = () => {
      setShowScroll(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <ScrollToTop />
        <Nav />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/why-choose-us" element={<WhyChooseUs />} />
            <Route
              path="/odoo-implementation"
              element={<OdooImplementation />}
            />
            <Route path="/services/:type" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </Router>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-6 right-4 flex flex-col items-center gap-3 z-50">
        {/* WhatsApp */}
        <a
          href="https://wa.me/8208103515"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group bg-white shadow-lg border border-gray-200 p-3 rounded-full hover:scale-110 transition-all duration-300 hover:shadow-xl"
        >
          <FaWhatsapp className="text-emerald-500 text-xl" />
          {/* Pulse ring */}
          <span className="absolute inset-0 rounded-full border-2 border-emerald-400 opacity-0 group-hover:opacity-40 group-hover:animate-ping" />
        </a>

        {/* Phone */}
        <a
          href="tel:+918208103515"
          className="bg-gradient-to-br from-sky-700 to-sky-600 text-white p-3 rounded-full hover:scale-110 transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30"
        >
          <FaPhoneAlt className="text-lg" />
        </a>

        {/* Scroll to Top */}
        <button
          onClick={scrollToTop}
          className={`bg-gradient-to-br from-sky-700 to-sky-600 text-white p-3 rounded-full transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-xl hover:shadow-sky-500/30 hover:scale-110 cursor-pointer ${
            showScroll
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          <FaArrowUp className="text-lg" />
        </button>
      </div>
    </div>
  );
}

export default App;
