import React from "react";
import { FaLinkedin, FaEnvelope, FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";

const Footer = () => {
  return (
    <footer className="footer-root relative pt-16 pb-8 overflow-hidden">
      {/* Decorative blobs */}
      <div className="footer-blob footer-blob-tl" />
      <div className="footer-blob footer-blob-br" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Logo & Tagline */}
          <div>
            <img
              src={logo}
              alt="Suktam Technologies Logo"
              className="h-12 mb-5 drop-shadow-md"
            />
            <p className="footer-tagline text-sm leading-relaxed">
              Transforming Businesses with Smart ERP Solutions. Your trusted
              Odoo partner.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading text-base font-semibold mb-5 tracking-wide">
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
                    className="footer-link group flex items-center transition-colors duration-300"
                  >
                    <span className="footer-link-bar w-0 group-hover:w-4 h-px mr-0 group-hover:mr-2 transition-all duration-300" />
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="footer-heading text-base font-semibold mb-5 tracking-wide">
              Contact
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="footer-icon-box footer-icon-phone flex-shrink-0">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <a
                  href="tel:+918208103515"
                  className="footer-link transition-colors duration-300"
                >
                  +91 82081 03515
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="footer-icon-box footer-icon-email flex-shrink-0">
                  <FaEnvelope className="text-xs" />
                </div>
                <a
                  href="mailto:contact@suktam.com"
                  className="footer-link transition-colors duration-300"
                >
                  contact@suktam.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="footer-icon-box footer-icon-linkedin flex-shrink-0">
                  <FaLinkedin className="text-xs" />
                </div>
                <a
                  href="https://www.linkedin.com/company/tech-square-erp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link transition-colors duration-300"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h4 className="footer-heading text-base font-semibold mb-5 tracking-wide">
              Let's Talk
            </h4>
            <p className="footer-tagline text-sm mb-5 leading-relaxed">
              Looking for ERP solutions tailored to your business? Let's start a
              conversation.
            </p>
            <NavLink
              to="/contact"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="footer-cta-btn group inline-flex items-center px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300"
            >
              Contact Us
              <FaArrowRight className="ml-2 text-xs group-hover:translate-x-1 transition-transform duration-300" />
            </NavLink>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom mt-12 pt-6 text-center">
          <p className="footer-copyright text-xs">
            © {new Date().getFullYear()} Suktam Technologies. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
