import React from "react";
import Odoo1 from "../components/Odoo1";
import Odoo2 from "../components/Odoo2";
import Odoo3 from "../components/Odoo3";
import Odoo4 from "../components/Odoo4";
import Odoo5 from "../components/Odoo5";

const OdooImplementation = () => {
  return (
    <>
      <section
        className="mt-[96px] relative h-[25vh] bg-center bg-cover flex items-center justify-center text-center"
        style={{
          backgroundImage: `url('/odoo.jpg')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/75"></div>

        {/* Content */}
        <div className="relative z-20 px-6">
          <h2 className="head text-4xl md:text-6xl font-extrabold text-white my-12">
            Odoo Implementation
          </h2>
        </div>
      </section>

      <Odoo1 />
      <Odoo2 />
      {/* <Odoo3 /> */}
      <Odoo4 />
      <Odoo5 />
    </>
  );
};

export default OdooImplementation;
