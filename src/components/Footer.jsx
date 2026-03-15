import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0a1628] via-[#0c2340] to-[#0e3050] text-gray-300 pt-16 pb-8 overflow-hidden">
      {/* Subtle BG accent */}
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 left-0 w-[200px] h-[200px] bg-orange-500/5 rounded-full blur-[80px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo & Tagline */}
          <div>
            <img
              src={logo}
              alt="Suktam Technologies Logo"
              className="h-12 mb-5"
            />
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming Businesses with Smart ERP Solutions. Your trusted
              Odoo partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Why Choose Us", path: "/why-choose-us" },
              ].map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() =>
                      window.scrollTo({ top: 0, behavior: "smooth" })
                    }
                    className="group flex items-center text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-gradient-to-r from-sky-400 to-blue-400 mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-emerald-400 text-xs" />
                </div>
                <a
                  href="tel:+918208103515"
                  className="hover:text-white transition-colors duration-300"
                >
                  +91 82081 03515
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-sky-400 text-xs" />
                </div>
                <span className="text-gray-400">contact@suktam.com</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                  <FaLinkedin className="text-blue-400 text-xs" />
                </div>
                <a
                  href="https://www.linkedin.com/company/tech-square-erp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-base font-semibold mb-5 text-white tracking-wide">
              Let's Talk
            </h4>
            <p className="text-sm text-gray-400 mb-5 leading-relaxed">
              Looking for ERP solutions tailored to your business? Let's start a
              conversation.
            </p>
            <NavLink
              to="/contact"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="group inline-flex items-center bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-700 hover:to-sky-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/20"
            >
              Contact Us
              <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </NavLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-white/8 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Suktam Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
