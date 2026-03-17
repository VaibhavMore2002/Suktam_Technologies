import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowRight, FaCheckCircle, FaArrowLeft, FaLightbulb, FaCog, FaChartLine, FaShieldAlt, FaUsers, FaQuestionCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import servicesData from "./odooServices.json";
import { useTheme } from "../ThemeContext";

const Services = () => {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);
  const { theme } = useTheme();
  const isDark = theme === "dark";
  useEffect(() => { AOS.init({ duration: 800, once: true }); window.scrollTo(0, 0); }, [type]);
  const serviceData = servicesData.services[type];
  if (!serviceData) return <Navigate to="/services" replace />;
  const toggleFaq = (i) => setActiveFaq(activeFaq === i ? null : i);
  const tabs = [
    { id: "overview", label: "Overview", icon: FaLightbulb },
    { id: "features", label: "Key Features", icon: FaCog },
    { id: "process", label: "Our Process", icon: FaChartLine },
    { id: "benefits", label: "Benefits", icon: FaShieldAlt },
    { id: "faq", label: "FAQ", icon: FaQuestionCircle },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--bg-base)' }}>
      {/* Breadcrumb */}
      <div style={{ backgroundColor: 'var(--bg-card)', borderBottom: `1px solid var(--border-default)` }}>
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">Home</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <Link to="/" className="text-blue-600 hover:text-blue-800 transition-colors">Services</Link>
            <span style={{ color: 'var(--text-muted)' }}>/</span>
            <span className="font-medium" style={{ color: 'var(--text-secondary)' }}>{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero — warm orange */}
      <section className="relative animated-gradient-bg text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-white/5 rounded-full blur-[80px] animate-blob" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-300/5 rounded-full blur-[60px] animate-blob" style={{ animationDelay: "3s" }} />
        </div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-6 right-12 w-16 h-16 border border-white/8 rounded-full animate-float-slow" />
          <div className="absolute bottom-6 left-12 w-12 h-12 border border-white/8 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Link to="/" className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors text-sm font-medium" data-aos="fade-right"><FaArrowLeft className="mr-2" />Back to All Services</Link>
            <h1 className="head text-4xl md:text-6xl font-bold mb-6" data-aos="fade-up">{serviceData.title}</h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed text-white/85 max-w-3xl" data-aos="fade-up" data-aos-delay="200">{serviceData.subtitle}</p>
            <div className="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
              <Link to="/contact" className="group inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-800/30 hover:scale-[1.02]">
                Get Started<FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button onClick={() => setActiveTab("process")} className="border border-white/30 text-white hover:bg-white/10 hover:border-white/60 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer">View Our Process</button>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <div className="shadow-sm sticky top-0 z-40" style={{ backgroundColor: 'var(--bg-card)', borderBottom: '1px solid var(--border-default)' }}>
        <div className="container mx-auto px-4">
          <nav className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center py-4 px-4 font-medium text-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id ? "text-orange-600" : isDark ? "text-gray-500 hover:text-gray-300" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <tab.icon className="mr-2 text-xs" />{tab.label}
                {activeTab === tab.id && <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-400 rounded-full" />}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14">
        {activeTab === "overview" && (
          <div className="space-y-14" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="head text-3xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>{serviceData.overview.title}</h2>
                <p className="mb-5 leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>{serviceData.overview.description}</p>
                <p className="leading-relaxed text-[15px]" style={{ color: 'var(--text-secondary)' }}>{serviceData.overview.fullDescription}</p>
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-primary)' }}>Technologies We Use:</h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceData.technologies.map((tech, i) => (
                      <span key={i} className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border ${isDark ? "bg-blue-500/10 text-blue-300 border-blue-500/20" : "bg-gradient-to-r from-orange-50 to-amber-50 text-blue-700 border-orange-200/40"}`}>{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="lg:order-first">
                <div className="relative group"><img src={serviceData.heroImage} alt={serviceData.title} className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-400" /></div>
              </div>
            </div>
            <div className="p-8 rounded-2xl" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
              <h3 className="head text-2xl font-bold mb-6" style={{ color: 'var(--text-primary)' }}>Industries We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceData.industries.map((industry, i) => (
                  <div key={i} className="text-center p-4 rounded-xl transition-all duration-300 group" style={{ border: `1px solid var(--border-default)` }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(240,123,26,0.3)' : 'rgba(240,123,26,0.3)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; }}
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🏢</div>
                    <span className="text-xs font-medium" style={{ color: 'var(--text-secondary)' }}>{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "features" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14"><h2 className="head text-3xl font-bold mb-4 section-heading" style={{ color: 'var(--text-primary)' }}>Key Features</h2><p className="max-w-3xl mx-auto text-[16px] mt-6" style={{ color: 'var(--text-secondary)' }}>Discover the powerful features that make our {serviceData.title.toLowerCase()} stand out.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.keyFeatures.map((f, i) => (
                <div key={i} className="glow-card p-7 rounded-2xl group" data-aos="fade-up" data-aos-delay={i * 80}>
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                  <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>{f.title}</h3>
                  <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{f.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "process" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="text-center mb-14"><h2 className="head text-3xl font-bold mb-4 section-heading" style={{ color: 'var(--text-primary)' }}>Our Process</h2><p className="max-w-3xl mx-auto text-[16px] mt-6" style={{ color: 'var(--text-secondary)' }}>Our proven methodology ensures successful project delivery.</p></div>
            <div className="relative max-w-3xl mx-auto">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 via-amber-400 to-blue-500 hidden lg:block rounded-full" />
              <div className="space-y-6">
                {serviceData.process.map((step, i) => (
                  <div key={i} className="relative flex items-start space-x-6" data-aos="fade-up" data-aos-delay={i * 80}>
                    <div className="flex-shrink-0"><div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-orange-500/20">{step.step}</div></div>
                    <div className="flex-grow glow-card p-6 rounded-2xl">
                      <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>{step.title}</h3>
                      <p className="text-[14.5px] leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "benefits" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14"><h2 className="head text-3xl font-bold mb-4 section-heading" style={{ color: 'var(--text-primary)' }}>Benefits</h2><p className="max-w-3xl mx-auto text-[16px] mt-6" style={{ color: 'var(--text-secondary)' }}>Tangible benefits for your business.</p></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {serviceData.benefits.map((b, i) => (
                <div key={i} className="flex items-center space-x-4 p-5 rounded-xl transition-all duration-300" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = isDark ? 'rgba(240,123,26,0.3)' : 'rgba(240,123,26,0.3)'; e.currentTarget.style.boxShadow = '0 4px 15px rgba(240,123,26,0.08)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-default)'; e.currentTarget.style.boxShadow = 'none'; }}
                  data-aos="fade-up" data-aos-delay={i * 50}
                >
                  <FaCheckCircle className="text-blue-600 text-lg flex-shrink-0" />
                  <span className="font-medium text-[15px]" style={{ color: 'var(--text-primary)' }}>{b}</span>
                </div>
              ))}
            </div>
            {/* CTA */}
            <div className="animated-gradient-bg text-white p-10 rounded-2xl text-center mt-14 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden"><div className="absolute top-4 right-8 w-16 h-16 border border-white/8 rounded-full animate-float-slow" /></div>
              <div className="relative z-10">
                <h3 className="head text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-lg mb-6 text-white/85 max-w-lg mx-auto">Transform your business with our expert {serviceData.title.toLowerCase()}.</p>
                <Link to="/contact" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-blue-800/30 hover:scale-[1.02]">
                  Contact Us Now<FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {activeTab === "faq" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14"><h2 className="head text-3xl font-bold mb-4 section-heading" style={{ color: 'var(--text-primary)' }}>Frequently Asked Questions</h2></div>
            <div className="max-w-3xl mx-auto space-y-3">
              {serviceData.faqs.map((faq, i) => (
                <div key={i} className="rounded-xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: 'var(--bg-card)', border: `1px solid ${activeFaq === i ? (isDark ? 'rgba(240,123,26,0.3)' : 'rgba(240,123,26,0.3)') : 'var(--border-default)'}`, boxShadow: activeFaq === i ? '0 4px 15px rgba(240,123,26,0.08)' : 'var(--shadow-card)' }} data-aos="fade-up" data-aos-delay={i * 60}>
                  <button onClick={() => toggleFaq(i)} className="w-full px-6 py-4 text-left flex items-center justify-between transition-colors cursor-pointer" style={{ color: 'var(--text-primary)' }}>
                    <span className="font-medium text-[15px]">{faq.question}</span>
                    {activeFaq === i ? <FaChevronUp className="text-orange-500 flex-shrink-0 text-xs" /> : <FaChevronDown className="flex-shrink-0 text-xs" style={{ color: 'var(--text-muted)' }} />}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeFaq === i ? "max-h-96" : "max-h-0"}`}>
                    <div className="px-6 pb-4" style={{ borderTop: '1px solid var(--border-subtle)' }}><p className="leading-relaxed pt-4 text-[14.5px]" style={{ color: 'var(--text-secondary)' }}>{faq.answer}</p></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-center mt-14 p-8 rounded-2xl max-w-2xl mx-auto" style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-default)' }}>
              <h3 className="head text-xl font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>Still Have Questions?</h3>
              <p className="mb-6 text-[15px]" style={{ color: 'var(--text-secondary)' }}>Our team is here to help.</p>
              <Link to="/contact" className="group inline-flex items-center bg-gradient-to-r from-blue-600 to-blue-700 text-white px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-[1.02]"><FaUsers className="mr-2" />Contact Our Team</Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
