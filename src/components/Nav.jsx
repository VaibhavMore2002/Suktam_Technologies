import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown, FaDownload } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOdooServicesOpen, setIsOdooServicesOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const serviceLinks = [
    { name: "Odoo Migration", path: "/services/migration" },
    { name: "Odoo Customization", path: "/services/customization" },
    { name: "Odoo Integration", path: "/services/integration" },
    { name: "Odoo Web/App Development", path: "/services/development" },
    { name: "Odoo Training", path: "/services/training" },
    { name: "Support & Maintenance", path: "/services/support" },
  ];

  const otherServices = [
    { name: "Graphic Designing", path: "/services/graphic-designing" },
    { name: "Web/App Development", path: "/services/development" },
    { name: "Automation Testing", path: "/services/automation-testing" },
  ];

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Odoo Implementation", path: "/odoo-implementation" },
  ];

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-500 ${
        isScrolled
          ? "glass-nav shadow-lg shadow-black/5"
          : "bg-white/95"
      }`}
    >
      <nav
        className={`transition-all duration-500 ${
          isScrolled ? "py-1.5" : "py-3"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <div className="flex items-center space-x-2 group">
              <img
                src={logo}
                className={`w-auto transition-all duration-500 ${
                  isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"
                }`}
                alt="Suktam Technologies Logo"
              />
            </div>
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                  setIsOpen(false);
                }}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
                    isActive
                      ? "text-sky-700"
                      : "text-gray-700 hover:text-sky-600"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {/* Animated underline */}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-sky-600 to-blue-400 rounded-full transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}

            {/* Odoo Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOdooServicesOpen(true)}
              onMouseLeave={() => setIsOdooServicesOpen(false)}
            >
              <button
                className={`flex items-center text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
                  isOdooServicesOpen
                    ? "text-sky-700"
                    : "text-gray-700 hover:text-sky-600"
                }`}
              >
                Odoo Services
                <FaAngleDown
                  className={`ml-1.5 text-xs transition-transform duration-300 ${
                    isOdooServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 mt-2 w-64 bg-white rounded-xl shadow-xl shadow-black/8 border border-gray-100 overflow-hidden transition-all duration-300 origin-top ${
                  isOdooServicesOpen
                    ? "opacity-100 visible scale-100 translate-y-0"
                    : "opacity-0 invisible scale-95 -translate-y-2"
                }`}
              >
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block px-5 py-3 text-[14px] text-gray-600 hover:bg-gradient-to-r hover:from-sky-50 hover:to-blue-50 hover:text-sky-700 transition-all duration-200 border-b border-gray-50 last:border-b-0"
                    onClick={() => {
                      setIsOdooServicesOpen(false);
                      setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="relative group bg-gradient-to-r from-sky-700 to-sky-600 text-white px-6 py-2.5 rounded-lg font-medium text-[14px] tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.02]"
            >
              <span className="relative z-10">Talk to Our Experts</span>
              <div className="absolute inset-0 bg-gradient-to-r from-sky-800 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-400 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/98 border-t border-gray-100`}
        >
          <div className="px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? "text-sky-700 bg-sky-50"
                      : "text-gray-600 hover:text-sky-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Services Dropdown (Mobile) */}
            <div>
              <button
                onClick={() =>
                  setActiveMobileDropdown((prev) =>
                    prev === "services" ? null : "services"
                  )
                }
                className="flex justify-between w-full items-center py-2.5 px-3 text-[15px] font-medium text-gray-600 hover:text-sky-600 rounded-lg hover:bg-gray-50 transition-all"
              >
                Odoo Services
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    activeMobileDropdown === "services" ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 space-y-1 ${
                  activeMobileDropdown === "services"
                    ? "max-h-64 mt-1"
                    : "max-h-0"
                }`}
              >
                {serviceLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block py-2 px-3 text-[14px] text-gray-500 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* Other Services Dropdown (Mobile) */}
            <div>
              <button
                onClick={() =>
                  setActiveMobileDropdown((prev) =>
                    prev === "other-services" ? null : "other-services"
                  )
                }
                className="flex justify-between w-full items-center py-2.5 px-3 text-[15px] font-medium text-gray-600 hover:text-sky-600 rounded-lg hover:bg-gray-50 transition-all"
              >
                Other Services
                <FaAngleDown
                  className={`transition-transform duration-300 ${
                    activeMobileDropdown === "other-services"
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
              <div
                className={`pl-4 overflow-hidden transition-all duration-300 space-y-1 ${
                  activeMobileDropdown === "other-services"
                    ? "max-h-64 mt-1"
                    : "max-h-0"
                }`}
              >
                {otherServices.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className="block py-2 px-3 text-[14px] text-gray-500 hover:text-sky-600 rounded-lg hover:bg-sky-50 transition-all"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-3 space-y-3">
              <button
                onClick={() => {
                  setIsOpen(false);
                }}
                className="w-full flex items-center justify-center bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 rounded-xl font-medium text-[14px] hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <FaDownload className="mr-2" />
                Download Brochure
              </button>

              <NavLink
                to="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-sky-700 to-sky-600 text-white py-3 rounded-xl font-medium text-[14px] hover:shadow-lg hover:shadow-sky-500/25 transition-all duration-300"
              >
                Talk to Our Experts
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
