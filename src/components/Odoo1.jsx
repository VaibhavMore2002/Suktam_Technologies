import React from "react";

const Odoo1 = () => {
  const steps = [
    {
      title: "Define Business Goals",
      desc: "We begin by understanding your key business goals to tailor the ERP effectively.",
    },
    {
      title: "Allocate Budget",
      desc: "A realistic ERP budget is aligned with your expectations and solution scope.",
    },
    {
      title: "Select Best Suitable ERP",
      desc: "Based on your needs, we shortlist the best-fit Odoo configurations.",
    },
    {
      title: "Select Implementation Partner",
      desc: "Choose the right team to bring your ERP vision to life – that’s where we come in!",
    },
    {
      title: "Define Implementation Phases",
      desc: "Break the implementation into manageable, measurable stages.",
    },
    {
      title: "Select Hosting Plan",
      desc: "Decide between cloud, on-premise, or hybrid based on your infrastructure.",
    },
    {
      title: "Installation & Configuration",
      desc: "We install Odoo and configure it to match your business processes.",
    },
    {
      title: "Data Migration",
      desc: "Clean and securely migrate your data from legacy systems to Odoo.",
    },
    {
      title: "Testing",
      desc: "Each module undergoes complete testing to ensure performance and accuracy.",
    },
    {
      title: "Training",
      desc: "We train your staff to use the system effectively from day one.",
    },
    {
      title: "Go Live",
      desc: "With everything validated, we go live with full support.",
    },
    {
      title: "Support & Maintenance",
      desc: "We offer ongoing support, updates, and optimization assistance.",
    },
  ];

  return (
    <div className="relative container mx-auto px-4">
      <h2
        className="head text-3xl md:text-4xl font-bold text-center my-12 text-gray-800"
        data-aos="fade-up"
      >
        Odoo Implementation Steps
      </h2>

      {/* Vertical Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-sky-500 z-0"></div>

      <div className="flex flex-col space-y-4 relative z-10">
        {steps.map((step, index) => {
          const isLeft = index % 2 === 0;
          return (
            <div
              key={index}
              className="flex justify-between items-center w-full"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Left Side Content */}
              <div className={`w-1/2 px-4 ${isLeft ? "text-right" : ""}`}>
                {isLeft && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Step {index + 1}
                    </h4>
                    <h3 className="text-xl font-bold text-sky-600 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                )}
              </div>

              {/* Timeline Dot */}
              <div className="w-0 flex justify-center items-center relative">
                <div className="w-4 h-4 bg-sky-600 rounded-full z-10"></div>
              </div>

              {/* Right Side Content */}
              <div className={`w-1/2 px-4 ${!isLeft ? "text-left" : ""}`}>
                {!isLeft && (
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      Step {index + 1}
                    </h4>
                    <h3 className="text-xl font-bold text-sky-600 mb-1">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.desc}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Odoo1;
