import React, { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaArrowRight,
  FaCheckCircle,
  FaArrowLeft,
  FaLightbulb,
  FaCog,
  FaChartLine,
  FaShieldAlt,
  FaUsers,
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import servicesData from "./odooServices.json";

const Services = () => {
  const { type } = useParams();
  const [activeTab, setActiveTab] = useState("overview");
  const [activeFaq, setActiveFaq] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
    window.scrollTo(0, 0);
  }, [type]);

  const serviceData = servicesData.services[type];
  if (!serviceData) {
    return <Navigate to="/services" replace />;
  }

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const tabs = [
    { id: "overview", label: "Overview", icon: FaLightbulb },
    { id: "features", label: "Key Features", icon: FaCog },
    { id: "process", label: "Our Process", icon: FaChartLine },
    { id: "benefits", label: "Benefits", icon: FaShieldAlt },
    { id: "faq", label: "FAQ", icon: FaQuestionCircle },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-sky-600 hover:text-sky-800 transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link to="/" className="text-sky-600 hover:text-sky-800 transition-colors">
              Services
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-500 font-medium">{serviceData.title}</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a1628] via-[#0c2d57] to-[#0e3a6e] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-sky-500/5 rounded-full blur-[80px] animate-blob" />
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-orange-500/5 rounded-full blur-[60px] animate-blob" style={{ animationDelay: "3s" }} />
        </div>

        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-6 right-12 w-16 h-16 border border-white/5 rounded-full animate-float-slow" />
          <div className="absolute bottom-6 left-12 w-12 h-12 border border-white/5 rounded-lg rotate-45 animate-float-slow" style={{ animationDelay: "2s" }} />
        </div>

        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl">
            <Link
              to="/"
              className="inline-flex items-center text-white/60 hover:text-white mb-6 transition-colors text-sm font-medium"
              data-aos="fade-right"
            >
              <FaArrowLeft className="mr-2" />
              Back to All Services
            </Link>

            <h1
              className="head text-4xl md:text-6xl font-bold mb-6"
              data-aos="fade-up"
            >
              {serviceData.title}
            </h1>

            <p
              className="text-lg md:text-xl mb-8 leading-relaxed text-white/80 max-w-3xl"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {serviceData.subtitle}
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <Link
                to="/contact"
                className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02]"
              >
                Get Started
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              <button
                onClick={() => setActiveTab("process")}
                className="border border-white/25 text-white hover:bg-white/5 hover:border-white/50 px-8 py-3.5 rounded-xl font-medium transition-all duration-300 cursor-pointer"
              >
                View Our Process
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <div className="bg-white shadow-sm sticky top-0 z-40 border-b border-gray-100">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-1 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center py-4 px-4 font-medium text-sm transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === tab.id
                    ? "text-sky-600"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <tab.icon className="mr-2 text-xs" />
                {tab.label}
                {/* Active indicator */}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-sky-500 to-blue-400 rounded-full" />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-14">
        {/* Overview */}
        {activeTab === "overview" && (
          <div className="space-y-14" data-aos="fade-up">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="head text-3xl font-bold text-gray-800 mb-6">
                  {serviceData.overview.title}
                </h2>
                <p className="text-gray-500 mb-5 leading-relaxed text-[15px]">
                  {serviceData.overview.description}
                </p>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  {serviceData.overview.fullDescription}
                </p>

                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    Technologies We Use:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gradient-to-r from-sky-50 to-blue-50 text-sky-700 px-3.5 py-1.5 rounded-lg text-xs font-medium border border-sky-100"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:order-first">
                <div className="relative group">
                  <img
                    src={serviceData.heroImage}
                    alt={serviceData.title}
                    className="w-full h-full object-cover rounded-2xl shadow-lg group-hover:shadow-xl transition-shadow duration-400"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-sky-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                </div>
              </div>
            </div>

            {/* Industries */}
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
              <h3 className="head text-2xl font-bold text-gray-800 mb-6">
                Industries We Serve
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {serviceData.industries.map((industry, index) => (
                  <div
                    key={index}
                    className="text-center p-4 rounded-xl border border-gray-100 hover:border-sky-200 hover:shadow-sm transition-all duration-300 group"
                  >
                    <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">🏢</div>
                    <span className="text-xs font-medium text-gray-600">
                      {industry}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Key Features */}
        {activeTab === "features" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="head text-3xl font-bold text-gray-800 mb-4 section-heading">
                Key Features
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-[16px] mt-6">
                Discover the powerful features that make our{" "}
                {serviceData.title.toLowerCase()} stand out from the competition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {serviceData.keyFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="glow-card bg-white p-7 rounded-2xl shadow-sm border border-gray-100 group"
                  data-aos="fade-up"
                  data-aos-delay={index * 80}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-[14.5px] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Process */}
        {activeTab === "process" && (
          <div className="space-y-12" data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="head text-3xl font-bold text-gray-800 mb-4 section-heading">
                Our Process
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-[16px] mt-6">
                Our proven methodology ensures successful project delivery with
                minimal disruption to your business.
              </p>
            </div>

            <div className="relative max-w-3xl mx-auto">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-sky-400 to-orange-400 hidden lg:block rounded-full" />

              <div className="space-y-6">
                {serviceData.process.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start space-x-6"
                    data-aos="fade-up"
                    data-aos-delay={index * 80}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-sky-500 to-sky-400 text-white rounded-2xl flex items-center justify-center font-bold text-lg shadow-lg shadow-sky-500/20">
                        {step.step}
                      </div>
                    </div>
                    <div className="flex-grow glow-card bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-500 text-[14.5px] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Benefits */}
        {activeTab === "benefits" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="head text-3xl font-bold text-gray-800 mb-4 section-heading">
                Benefits
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-[16px] mt-6">
                Discover the tangible benefits your business will gain from our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
              {serviceData.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 bg-white p-5 rounded-xl shadow-sm border border-gray-100 hover:border-emerald-200 hover:shadow-md transition-all duration-300"
                  data-aos="fade-up"
                  data-aos-delay={index * 50}
                >
                  <div className="flex-shrink-0">
                    <FaCheckCircle className="text-emerald-500 text-lg" />
                  </div>
                  <span className="text-gray-700 font-medium text-[15px]">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="animated-gradient-bg text-white p-10 rounded-2xl text-center mt-14 relative overflow-hidden">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 right-8 w-16 h-16 border border-white/5 rounded-full animate-float-slow" />
              </div>
              <div className="relative z-10">
                <h3 className="head text-2xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-lg mb-6 text-white/80 max-w-lg mx-auto">
                  Transform your business with our expert{" "}
                  {serviceData.title.toLowerCase()}. Contact us today for a free
                  consultation.
                </p>
                <Link
                  to="/contact"
                  className="group inline-flex items-center bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02]"
                >
                  Contact Us Now
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* FAQ */}
        {activeTab === "faq" && (
          <div className="space-y-8" data-aos="fade-up">
            <div className="text-center mb-14">
              <h2 className="head text-3xl font-bold text-gray-800 mb-4 section-heading">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-500 max-w-3xl mx-auto text-[16px] mt-6">
                Get answers to the most common questions about our{" "}
                {serviceData.title.toLowerCase()}.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-3">
              {serviceData.faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`bg-white rounded-xl border transition-all duration-300 overflow-hidden ${
                    activeFaq === index
                      ? "border-sky-200 shadow-md"
                      : "border-gray-100 shadow-sm"
                  }`}
                  data-aos="fade-up"
                  data-aos-delay={index * 60}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors cursor-pointer"
                  >
                    <span className="font-medium text-gray-800 text-[15px]">
                      {faq.question}
                    </span>
                    {activeFaq === index ? (
                      <FaChevronUp className="text-sky-500 flex-shrink-0 text-xs" />
                    ) : (
                      <FaChevronDown className="text-gray-400 flex-shrink-0 text-xs" />
                    )}
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      activeFaq === index ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <div className="px-6 pb-4 border-t border-gray-50">
                      <p className="text-gray-500 leading-relaxed pt-4 text-[14.5px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-14 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
              <h3 className="head text-xl font-semibold text-gray-800 mb-3">
                Still Have Questions?
              </h3>
              <p className="text-gray-500 mb-6 text-[15px]">
                Our team of experts is here to help you with any additional
                questions about our services.
              </p>
              <Link
                to="/contact"
                className="group inline-flex items-center bg-gradient-to-r from-sky-600 to-sky-500 text-white px-7 py-3 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-sky-500/25 hover:scale-[1.02]"
              >
                <FaUsers className="mr-2" />
                Contact Our Team
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Services;
