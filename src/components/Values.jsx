import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 flex flex-col gap-16">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-800 head">
          Our Mission & Core Values
        </h2>

        {/* Mission Section */}
        <div
          className="flex flex-col lg:flex-row items-center gap-8"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="head text-3xl font-semibold text-sky-700 mb-3">
                Our Mission
              </h3>
              <p className="text-xl text-gray-700">
                To empower businesses with smart, scalable ERP solutions that
                enhance productivity, reduce operational friction, and
                accelerate growth using the power of Odoo.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src="./mission.avif"
              alt="Suktam Technologies Mission"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Vision Section */}
        <div
          className="flex flex-col lg:flex-row-reverse items-center gap-8"
          data-aos="fade-right"
        >
          <div className="w-full lg:w-1/2">
            <div className="mb-6">
              <h3 className="head text-3xl font-semibold text-green-700 mb-3">
                Our Vision
              </h3>
              <p className="text-xl text-gray-700">
                To become a global leader in delivering innovative ERP services
                that help businesses of all sizes digitally transform and scale
                with confidence.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src="./vision.jpg"
              alt="Suktam Technologies Vision"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>

        {/* Core Values Section */}
        <div
          className="flex flex-col lg:flex-row items-center gap-8"
          data-aos="fade-up"
        >
          <div className="w-full lg:w-1/2">
            <h3 className="head text-3xl font-semibold text-purple-700 mb-4">
              Core Values
            </h3>
            <ul className="list-disc list-inside text-xl text-gray-700 space-y-2">
              <li>Customer-Centric Excellence</li>
              <li>Integrity & Transparency</li>
              <li>Innovation-Driven Approach</li>
              <li>Commitment to Quality</li>
              <li>Collaborative Growth</li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2" data-aos="fade-left">
            <img
              src="/values.jpg"
              alt="Suktam Technologies Values"
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
