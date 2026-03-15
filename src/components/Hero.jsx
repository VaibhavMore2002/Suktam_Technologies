import React, { useState, useEffect, useMemo } from "react";
import {
  ChevronRight,
  Zap,
  TrendingUp,
  Shield,
  Users,
  ArrowRight,
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
    { icon: Zap, text: "Lightning Fast Implementation", color: "text-amber-400" },
    { icon: TrendingUp, text: "Boost Productivity by 40%", color: "text-emerald-400" },
    { icon: Shield, text: "Enterprise-Grade Security", color: "text-sky-400" },
    { icon: Users, text: "24/7 Expert Support", color: "text-violet-400" },
  ];

  const stats = [
    { number: "100+", label: "Successful Implementations" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  // Memoize random bar heights so they don't change on re-render
  const barHeights = useMemo(
    () => Array.from({ length: 12 }, () => Math.random() * 55 + 25),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden animated-gradient-bg">
      {/* Animated Mesh Background Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-sky-500/8 rounded-full blur-[100px] animate-blob" />
        <div
          className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-orange-500/6 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] bg-blue-400/6 rounded-full blur-[100px] animate-blob"
          style={{ animationDelay: "4s" }}
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 8}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 pt-28 md:pt-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div
            className={`space-y-8 transform transition-all duration-1000 ease-out ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            {/* Main Headlines */}
            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                <span className="head gradient-text">Suktam</span>
                <br />
                <span className="head text-white">Technologies</span>
              </h1>

              <div className="text-xl lg:text-2xl text-white/90 font-medium">
                Transforming Businesses with Smart ERP Solutions
              </div>

              <p className="text-[17px] text-gray-300/90 max-w-xl leading-relaxed">
                Streamline operations, enhance productivity, and drive
                exponential growth with our{" "}
                <span className="text-transparent bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text font-semibold">
                  tailored Odoo ERP solutions
                </span>
                . Join 100+ successful businesses already transforming their
                operations.
              </p>
            </div>

            {/* Rotating Features */}
            <div className="glass rounded-xl p-4 flex items-center space-x-4 max-w-md">
              <div className="flex-shrink-0 p-2 rounded-lg bg-white/5">
                {React.createElement(features[currentFeature].icon, {
                  className: `w-7 h-7 ${features[currentFeature].color} transition-all duration-500`,
                })}
              </div>
              <span className="text-white/90 font-medium text-[15px] transition-all duration-500">
                {features[currentFeature].text}
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate("/contact")}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/25 hover:scale-[1.02] cursor-pointer"
              >
                {/* Pulse dot */}
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white/80" />
                </span>
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => navigate("/odoo-implementation")}
                className="group flex items-center justify-center px-7 py-3.5 border border-white/25 hover:border-white/50 text-white font-medium rounded-xl hover:bg-white/5 transition-all duration-300 text-[15px] cursor-pointer"
              >
                See Implementation
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold gradient-text-blue group-hover:scale-105 transition-transform duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual - Dashboard Mockup */}
          <div
            className={`relative transform transition-all duration-1000 delay-300 ${
              isVisible
                ? "translate-x-0 opacity-100"
                : "translate-x-10 opacity-0"
            }`}
          >
            <div className="relative">
              {/* Dashboard Card */}
              <div className="glass rounded-3xl p-7 shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all duration-500">
                {/* Window Controls */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400/80 rounded-full" />
                    <div className="w-3 h-3 bg-amber-400/80 rounded-full" />
                    <div className="w-3 h-3 bg-emerald-400/80 rounded-full" />
                  </div>
                  <div className="text-white/40 text-xs font-medium tracking-wide">
                    Odoo Dashboard
                  </div>
                </div>

                {/* Metric Cards */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-4 bg-sky-500/10 border border-sky-500/20 hover:bg-sky-500/15 transition-colors duration-300">
                      <div className="text-sky-300/80 text-xs mb-1.5 font-medium">
                        Revenue
                      </div>
                      <div className="text-white text-xl font-bold">$2.4M</div>
                      <div className="text-emerald-400 text-xs mt-1 font-medium">
                        ↗ +23%
                      </div>
                    </div>
                    <div className="rounded-xl p-4 bg-emerald-500/10 border border-emerald-500/20 hover:bg-emerald-500/15 transition-colors duration-300">
                      <div className="text-emerald-300/80 text-xs mb-1.5 font-medium">
                        Orders
                      </div>
                      <div className="text-white text-xl font-bold">1,847</div>
                      <div className="text-emerald-400 text-xs mt-1 font-medium">
                        ↗ +18%
                      </div>
                    </div>
                  </div>

                  {/* Chart Area */}
                  <div className="rounded-xl p-4 bg-white/[0.03] border border-white/[0.06]">
                    <div className="flex items-end space-x-1.5 h-20">
                      {barHeights.map((height, i) => (
                        <div
                          key={i}
                          className="bg-gradient-to-t from-sky-600 to-sky-400 rounded-t-sm opacity-70 hover:opacity-100 transition-opacity duration-300"
                          style={{
                            height: `${height}%`,
                            width: "100%",
                            animation: `bar-grow 0.8s ease-out forwards`,
                            animationDelay: `${0.5 + i * 0.08}s`,
                            transform: "scaleY(0)",
                            transformOrigin: "bottom",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge - Top Right */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-xl shadow-orange-500/30 animate-float flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>

              {/* Floating Badge - Bottom Left */}
              <div
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-emerald-400 to-sky-500 rounded-xl shadow-xl shadow-sky-500/25 animate-float flex items-center justify-center"
                style={{ animationDelay: "2s" }}
              >
                <TrendingUp className="w-5 h-5 text-white" />
              </div>

              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-600/10 to-orange-600/5 rounded-3xl blur-3xl scale-110 -z-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-5 h-5 text-white/40 transform rotate-90" />
      </div>
    </div>
  );
};

export default SuktamHero;
