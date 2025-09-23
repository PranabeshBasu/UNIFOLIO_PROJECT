import React from "react";

const Hero = () => (
  <section
    className="relative h-[70vh] bg-cover bg-center text-white flex items-center justify-center"
    // Make sure 'graduates-2.jpg' is inside 'public' folder
    style={{ backgroundImage: "url('/graduates-2.jpg')" }}
  >
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-black/50 backdrop-brightness-75"></div>

    {/* Content */}
    <div className="relative z-10 text-center px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
        Your Entire University Journey,{" "}
        <span className="text-blue-400">Digitized.</span>
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-200 mb-8">
        Unifolio is the definitive platform empowering students, faculty, and
        institutions with AI-driven portfolio management and verified academic
        records.
      </p>
      <div className="flex justify-center gap-4 flex-wrap">
        <a
          href="#features"
          className="bg-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-blue-700 transition-transform transform hover:scale-105"
        >
          Get Started Now
        </a>
        <a
          href="#"
          className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          Request a Demo
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
