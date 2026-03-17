import React, { useState, useEffect, useMemo } from "react";
import { ChevronRight, Zap, TrendingUp, Shield, Users, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SuktamHero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [currentFeature, setCurrentFeature] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => setCurrentFeature((p) => (p + 1) % 4), 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    { icon: Zap, text: "Lightning Fast Implementation", color: "text-white" },
    { icon: TrendingUp, text: "Boost Productivity by 40%", color: "text-blue-200" },
    { icon: Shield, text: "Enterprise-Grade Security", color: "text-yellow-200" },
    { icon: Users, text: "24/7 Expert Support", color: "text-white" },
  ];

  const stats = [
    { number: "100+", label: "Successful Implementations" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
  ];

  const barHeights = useMemo(() => Array.from({ length: 12 }, () => Math.random() * 55 + 25), []);

  return (
    <div className="relative min-h-screen overflow-hidden animated-gradient-bg">
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-yellow-400/12 rounded-full blur-[100px] animate-blob" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "2s" }} />
        <div className="absolute -bottom-32 left-1/3 w-[450px] h-[450px] bg-red-500/6 rounded-full blur-[100px] animate-blob" style={{ animationDelay: "4s" }} />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="absolute w-1 h-1 bg-white/25 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, animation: `float ${5 + Math.random() * 8}s ease-in-out infinite`, animationDelay: `${Math.random() * 5}s` }}
          />
        ))}
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div className="w-full h-full" style={{ backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)`, backgroundSize: "40px 40px" }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 py-20 pt-28 md:pt-32 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
          {/* Left Content */}
          <div className={`space-y-8 transform transition-all duration-1000 ease-out ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
              <span className="text-sm text-white/80 font-medium">Trusted by 100+ Businesses</span>
            </div>

            <div className="space-y-5">
              <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1]">
                <span className="head text-white">Suktam</span>
                <br />
                <span className="head text-blue-100">Technologies</span>
              </h1>
              <div className="text-xl lg:text-2xl text-white/95 font-medium">Transforming Businesses with Smart ERP Solutions</div>
              <p className="text-[17px] text-white/80 max-w-xl leading-relaxed">
                Streamline operations, enhance productivity, and drive exponential growth with our{" "}
                <span className="text-white font-semibold underline decoration-blue-300 underline-offset-4 decoration-2">tailored Odoo ERP solutions</span>.
                Join 100+ successful businesses already transforming their operations.
              </p>
            </div>

            {/* Rotating Features */}
            <div className="glass rounded-xl p-4 flex items-center space-x-4 max-w-md">
              <div className="flex-shrink-0 p-2 rounded-lg bg-white/10">
                {React.createElement(features[currentFeature].icon, { className: `w-7 h-7 ${features[currentFeature].color} transition-all duration-500` })}
              </div>
              <span className="text-white/90 font-medium text-[15px]">{features[currentFeature].text}</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => navigate("/contact")}
                className="group relative inline-flex items-center justify-center px-7 py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl font-semibold text-white text-[15px] overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-blue-800/30 hover:scale-[1.02] cursor-pointer"
              >
                <span className="absolute top-1.5 right-1.5 flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-white/80" />
                </span>
                Get Free Consultation
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <button onClick={() => navigate("/odoo-implementation")}
                className="group flex items-center justify-center px-7 py-3.5 border border-white/30 hover:border-white/60 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 text-[15px] cursor-pointer"
              >See Implementation</button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4">
              {stats.map((stat, i) => (
                <div key={i} className="text-center group">
                  <div className="text-2xl lg:text-3xl font-bold text-white group-hover:scale-105 transition-transform duration-300">{stat.number}</div>
                  <div className="text-xs text-white/60 mt-1 group-hover:text-white/80 transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Visual — Dashboard Mockup */}
          <div className={`relative transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}>
            <div className="relative">
              <div className="glass rounded-3xl p-7 shadow-2xl shadow-black/20 hover:scale-[1.02] transition-all duration-500">
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400/80 rounded-full" />
                    <div className="w-3 h-3 bg-amber-400/80 rounded-full" />
                    <div className="w-3 h-3 bg-emerald-400/80 rounded-full" />
                  </div>
                  <div className="text-white/40 text-xs font-medium tracking-wide">Odoo Dashboard</div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-xl p-4 bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-300">
                      <div className="text-blue-200/80 text-xs mb-1.5 font-medium">Revenue</div>
                      <div className="text-white text-xl font-bold">$2.4M</div>
                      <div className="text-emerald-300 text-xs mt-1 font-medium">↗ +23%</div>
                    </div>
                    <div className="rounded-xl p-4 bg-white/8 border border-white/10 hover:bg-white/12 transition-colors duration-300">
                      <div className="text-blue-200/80 text-xs mb-1.5 font-medium">Orders</div>
                      <div className="text-white text-xl font-bold">1,847</div>
                      <div className="text-emerald-300 text-xs mt-1 font-medium">↗ +18%</div>
                    </div>
                  </div>

                  <div className="rounded-xl p-4 bg-white/[0.04] border border-white/[0.08]">
                    <div className="flex items-end space-x-1.5 h-20">
                      {barHeights.map((h, i) => (
                        <div key={i}
                          className="bg-gradient-to-t from-white/40 to-blue-200/60 rounded-t-sm opacity-70 hover:opacity-100 transition-opacity"
                          style={{ height: `${h}%`, width: "100%", animation: `bar-grow 0.8s ease-out forwards`, animationDelay: `${0.5 + i * 0.08}s`, transform: "scaleY(0)", transformOrigin: "bottom" }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-xl shadow-blue-800/30 animate-float flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white rounded-xl shadow-xl shadow-black/10 animate-float flex items-center justify-center" style={{ animationDelay: "2s" }}>
                <TrendingUp className="w-5 h-5 text-orange-600" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-r from-orange-400/5 to-yellow-400/5 rounded-3xl blur-3xl scale-110 -z-10" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronRight className="w-5 h-5 text-white/50 transform rotate-90" />
      </div>
    </div>
  );
};

export default SuktamHero;
