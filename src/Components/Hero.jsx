import React from "react";

const Hero = () => {
  return (
    <section id="home" className="bg-gray-50 min-h-screen flex items-center">
      <div className="container mx-auto px-6 md:px-16 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Left Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Build Beautiful <br /> Web Experiences
          </h1>

          <p className="text-gray-600 mb-8">
            I create modern, responsive websites using React, focusing on clean
            design, performance, and user-friendly interfaces.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
              Get Started
            </button>
            <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
              View Projects
            </button>
          </div>
        </div>

        
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Hero"
            className="rounded-xl shadow-lg mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
