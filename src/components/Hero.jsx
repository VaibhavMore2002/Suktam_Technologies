import React, { useState, useEffect } from "react";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  Shield,
  Users,
  Play,
  ArrowRight,
  Star,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuktamHero = () => {
  const navigate = useNavigate();

  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: "Lightning Fast Implementation" },
    { icon: TrendingUp, text: "Boost Productivity by 40%" },
    { icon: Shield, text: "Enterprise-Grade Security" },
    { icon: Users, text: "24/7 Expert Support" },
  ];

  const stats = [
    { number: "100+", label: "Successful Implementations" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="grid grid-cols-12 gap-4 h-full p-8 transform rotate-6">
          {Array.from({ length: 120 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-white/10 rounded-full animate-pulse"
              style={{ animationDelay: `${i * 50}ms` }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-12 py-20 pt-30 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-20 opacity-0"
            }`}
          >
            {/* Company Badge */}
            {/* <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-blue-600/20 to-green-600/20 backdrop-blur-sm border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium animate-bounce">
              <Star className="w-4 h-4 mr-2 text-yellow-400" />
              #1 Odoo ERP Solutions Provider
            </div> */}

            {/* Main Headlines */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight mt-12">
                <span className="head text-white">Suktam Technologies</span>
              </h1>

              <div className="head text-xl lg:text-2xl text-white font-medium">
                <div className="overflow-hidden h-8">
                  <div className="">
                    Transforming Businesses with Smart ERP Solutions
                  </div>
                </div>
              </div>

              <p className="text-lg text-gray-300 max-w-2xl leading-relaxed mt-12">
                Streamline operations, enhance productivity, and drive
                exponential growth with our
                <span className="text-green-400 font-semibold">
                  {" "}
                  tailored Odoo ERP solutions
                </span>
                . Join 100+ successful businesses already transforming their
                operations.
              </p>
            </div>

            {/* Rotating Features */}
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <div className="flex-shrink-0">
                {React.createElement(features[currentFeature].icon, {
                  className: "w-8 h-8 text-green-400 animate-pulse",
                })}
              </div>
              <span className="text-white font-medium text-lg">
                {features[currentFeature].text}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="font-bold text-white relative inline-flex items-center justify-center cursor-pointer group px-4 py-2 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-md shadow-md"
              >
                {/* Pulse Icon in Top Right */}
                <span className="absolute top-0 right-0 mt-[-6px] mr-[-6px] flex size-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                </span>
                {/* Button Content */}
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => navigate("/odoo-implementation")}
                className="cursor-pointer group flex items-center px-8 py-4 border-2 border-white/30 hover:border-white/60 text-white font-semibold rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
              >
                {/* <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" /> */}
                See Implementation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-20 opacity-0"
            }`}
          >
            {/* Main Dashboard Mockup */}
            <div className="relative">
              <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-all duration-500">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-red-400 rounded-full animate-pulse"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-200"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse delay-400"></div>
                  </div>
                  <div className="text-white/60 text-sm">Odoo Dashboard</div>
                </div>

                {/* Dashboard Content */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-500/20 rounded-xl p-4 border border-blue-500/30">
                      <div className="text-sky-300 text-sm mb-2">Revenue</div>
                      <div className="text-white text-2xl font-bold">$2.4M</div>
                      <div className="text-green-400 text-xs">↗ +23%</div>
                    </div>
                    <div className="bg-green-500/20 rounded-xl p-4 border border-green-500/30">
                      <div className="text-green-300 text-sm mb-2">Orders</div>
                      <div className="text-white text-2xl font-bold">1,847</div>
                      <div className="text-green-400 text-xs">↗ +18%</div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                    <div className="flex items-end space-x-2 h-20">
                      {Array.from({ length: 12 }).map((_, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-blue-600 to-green-400 rounded-t opacity-80 animate-pulse"
                          style={{
                            height: `${Math.random() * 60 + 20}%`,
                            width: "100%",
                            animationDelay: `${i * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl shadow-xl animate-bounce flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl shadow-xl animate-pulse flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-3xl blur-3xl transform scale-110 -z-10"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-6 h-6 text-white/60 transform rotate-90" />
      </div>
    </div>
  );
};

export default SuktamHero;
