import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// Replace with actual client images
const testimonials = [
  {
    name: "Ankit Shah",
    quote:
      "Suktam Technologies transformed our operations with streamlined Odoo solutions.",
    image:
      "https://images.unsplash.com/photo-1534339480783-6816b68be29c?q=80&w=1974",
  },
  {
    name: "Priya Mehra",
    quote: "Seamless integration and proactive support – true professionals!",
    image: "https://plus.unsplash.com/premium_photo-1682089810582-f7b200217b67?q=80&w=1974",
  },
  {
    name: "David Kim",
    quote: "Their expertise helped us scale faster and smarter.",
    image: "https://images.unsplash.com/photo-1611403119860-57c4937ef987?q=80&w=1974",
  },
  {
    name: "Meenal Joshi",
    quote: "Quick deployment, helpful team, and outstanding results.",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727",
  },
  {
    name: "Rohit Jain",
    quote: "I’d recommend Suktam Technologies to any business going digital.",
    image: "https://images.unsplash.com/photo-1607081692251-d689f1b9af84?q=80&w=1974",
  },
];

const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-20 bg-sky-50 overflow-hidden">
      <div className="text-center mb-12 px-4">
        <h2
          className="head text-3xl md:text-4xl font-bold text-gray-800"
          data-aos="fade-up"
        >
          What Our Clients Say
        </h2>
        <p
          className="mt-2 text-gray-600"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Real feedback from businesses that trust Suktam Technologies
        </p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex space-x-6 animate-marquee px-4"
          style={{ width: "fit-content" }}
        >
          {[...testimonials, ...testimonials].map((client, idx) => (
            <div
              key={idx}
              className="flex-none w-80 bg-white rounded-xl shadow-lg hover:shadow-xl p-6 text-center transition-transform duration-300 transform hover:scale-105"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <img
                src={client.image}
                alt={client.name}
                className="w-20 h-20 object-cover rounded-full mx-auto mb-4 border-4 border-sky-500"
              />
              <p className="text-gray-700 italic mb-3">"{client.quote}"</p>
              <h4 className="text-gray-900 font-semibold">{client.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
