import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaAngleDown, FaDownload } from "react-icons/fa";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import logo from "/logo.jpg";
import { useTheme } from "../ThemeContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOdooServicesOpen, setIsOdooServicesOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
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

  const isDark = theme === "dark";

  return (
    <div
      className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? "shadow-lg" : ""}`}
      style={{
        backgroundColor: isScrolled
          ? (isDark ? 'rgba(26, 26, 46, 0.95)' : 'rgba(255, 251, 245, 0.95)')
          : (isDark ? 'rgba(26, 26, 46, 0.8)' : 'rgba(255, 251, 245, 0.95)'),
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        borderBottom: isScrolled ? `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(240,123,26,0.12)'}` : 'none',
      }}
    >
      <nav className={`transition-all duration-500 ${isScrolled ? "py-1.5" : "py-3"}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <NavLink to="/" onClick={() => setIsOpen(false)}>
            <img src={logo} className={`w-auto transition-all duration-500 ${isScrolled ? "h-10 md:h-12" : "h-12 md:h-14"}`} alt="Suktam Technologies Logo" />
          </NavLink>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-7">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path}
                onClick={() => { window.scrollTo({ top: 0, behavior: "smooth" }); setIsOpen(false); }}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
                    isActive ? "text-blue-700" : isDark ? "text-gray-300 hover:text-orange-400" : "text-gray-700 hover:text-blue-700"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    <span className={`absolute -bottom-0.5 left-0 h-[2px] bg-gradient-to-r from-orange-500 to-amber-400 rounded-full transition-all duration-300 ${isActive ? "w-full" : "w-0"}`} />
                  </>
                )}
              </NavLink>
            ))}

            {/* Odoo Services Dropdown */}
            <div className="relative" onMouseEnter={() => setIsOdooServicesOpen(true)} onMouseLeave={() => setIsOdooServicesOpen(false)}>
              <button className={`flex items-center text-[15px] font-medium tracking-wide transition-all duration-300 py-1 ${
                isOdooServicesOpen ? "text-blue-700" : isDark ? "text-gray-300 hover:text-orange-400" : "text-gray-700 hover:text-blue-700"
              }`}>
                Odoo Services
                <FaAngleDown className={`ml-1.5 text-xs transition-transform duration-300 ${isOdooServicesOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`absolute left-0 mt-2 w-64 rounded-xl shadow-xl overflow-hidden transition-all duration-300 origin-top ${
                isOdooServicesOpen ? "opacity-100 visible scale-100 translate-y-0" : "opacity-0 invisible scale-95 -translate-y-2"
              }`} style={{
                backgroundColor: isDark ? '#22223a' : '#ffffff',
                border: `1px solid ${isDark ? 'rgba(240,123,26,0.15)' : 'rgba(240,123,26,0.1)'}`,
                boxShadow: isDark ? '0 20px 40px rgba(0,0,0,0.4)' : '0 20px 40px rgba(0,0,0,0.08)',
              }}>
                {serviceLinks.map((link) => (
                  <NavLink key={link.name} to={link.path}
                    className={`block px-5 py-3 text-[14px] transition-all duration-200 ${
                      isDark ? "text-gray-400 hover:bg-orange-500/10 hover:text-orange-300 border-b border-white/5 last:border-b-0"
                        : "text-gray-600 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 hover:text-blue-700 border-b border-gray-50 last:border-b-0"
                    }`}
                    onClick={() => { setIsOdooServicesOpen(false); setIsOpen(false); }}
                  >{link.name}</NavLink>
                ))}
              </div>
            </div>

            {/* Theme Toggle — improved icons */}
            <button
              onClick={toggleTheme}
              className={`relative p-2.5 rounded-xl transition-all duration-300 cursor-pointer overflow-hidden group ${
                isDark
                  ? "bg-amber-500/10 text-amber-400 hover:bg-amber-500/20"
                  : "bg-blue-600/10 text-blue-700 hover:bg-blue-600/15"
              }`}
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5">
                {/* Moon icon for light mode (click to go dark) */}
                <HiOutlineMoon className={`absolute inset-0 w-5 h-5 transition-all duration-400 ${isDark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`} />
                {/* Sun icon for dark mode (click to go light) */}
                <HiOutlineSun className={`absolute inset-0 w-5 h-5 transition-all duration-400 ${isDark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`} />
              </div>
            </button>

            {/* CTA Button */}
            <NavLink to="/contact"
              className="relative group bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium text-[14px] tracking-wide overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"
            >
              <span className="relative z-10">Talk to Our Experts</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </NavLink>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors cursor-pointer ${isDark ? "text-amber-400 hover:bg-white/5" : "text-blue-700 hover:bg-blue-50"}`}
            >
              {isDark ? <HiOutlineSun size={20} /> : <HiOutlineMoon size={20} />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${isDark ? "text-gray-300 hover:bg-white/5" : "text-gray-700 hover:bg-gray-100"}`}
            >
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-400 ease-in-out ${isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"} overflow-hidden`}
          style={{
            backgroundColor: isDark ? 'rgba(26, 26, 46, 0.98)' : 'rgba(255, 251, 245, 0.98)',
            borderTop: `1px solid ${isDark ? 'rgba(255,255,255,0.06)' : 'rgba(240,123,26,0.1)'}`,
          }}
        >
          <div className="px-6 py-5 space-y-3">
            {navLinks.map((link) => (
              <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `block py-2.5 px-3 rounded-lg text-[15px] font-medium transition-all duration-200 ${
                    isActive
                      ? isDark ? "text-orange-400 bg-orange-500/10" : "text-blue-700 bg-blue-50"
                      : isDark ? "text-gray-400 hover:text-orange-400 hover:bg-white/5" : "text-gray-600 hover:text-blue-700 hover:bg-orange-50"
                  }`
                }
              >{link.name}</NavLink>
            ))}

            <div>
              <button onClick={() => setActiveMobileDropdown((p) => p === "services" ? null : "services")}
                className={`flex justify-between w-full items-center py-2.5 px-3 text-[15px] font-medium rounded-lg transition-all ${
                  isDark ? "text-gray-400 hover:text-orange-400 hover:bg-white/5" : "text-gray-600 hover:text-blue-700 hover:bg-orange-50"
                }`}
              >
                Odoo Services
                <FaAngleDown className={`transition-transform duration-300 ${activeMobileDropdown === "services" ? "rotate-180" : ""}`} />
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-300 space-y-1 ${activeMobileDropdown === "services" ? "max-h-64 mt-1" : "max-h-0"}`}>
                {serviceLinks.map((link) => (
                  <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 text-[14px] rounded-lg transition-all ${
                      isDark ? "text-gray-500 hover:text-orange-400 hover:bg-orange-500/10" : "text-gray-500 hover:text-blue-700 hover:bg-orange-50"
                    }`}
                  >{link.name}</NavLink>
                ))}
              </div>
            </div>

            <div>
              <button onClick={() => setActiveMobileDropdown((p) => p === "other" ? null : "other")}
                className={`flex justify-between w-full items-center py-2.5 px-3 text-[15px] font-medium rounded-lg transition-all ${
                  isDark ? "text-gray-400 hover:text-orange-400 hover:bg-white/5" : "text-gray-600 hover:text-blue-700 hover:bg-orange-50"
                }`}
              >
                Other Services
                <FaAngleDown className={`transition-transform duration-300 ${activeMobileDropdown === "other" ? "rotate-180" : ""}`} />
              </button>
              <div className={`pl-4 overflow-hidden transition-all duration-300 space-y-1 ${activeMobileDropdown === "other" ? "max-h-64 mt-1" : "max-h-0"}`}>
                {otherServices.map((link) => (
                  <NavLink key={link.name} to={link.path} onClick={() => setIsOpen(false)}
                    className={`block py-2 px-3 text-[14px] rounded-lg transition-all ${
                      isDark ? "text-gray-500 hover:text-orange-400 hover:bg-orange-500/10" : "text-gray-500 hover:text-blue-700 hover:bg-orange-50"
                    }`}
                  >{link.name}</NavLink>
                ))}
              </div>
            </div>

            <div className="pt-3 space-y-3">
              <button onClick={() => setIsOpen(false)}
                className="w-full flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white py-3 rounded-xl font-medium text-[14px] hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300"
              ><FaDownload className="mr-2" />Download Brochure</button>
              <NavLink to="/contact" onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 rounded-xl font-medium text-[14px] hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >Talk to Our Experts</NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
