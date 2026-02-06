import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Build Beautiful <br /> Web Experiences
          </h1>

          <p className="text-gray-600 mb-8 max-w-lg">
            I build clean, responsive, and user-friendly websites using React
            with a strong focus on performance and usability.
          </p>

          <div className="flex justify-center md:justify-start gap-4">
            <button className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition">
              Get Started
            </button>

            <button className="border border-black px-6 py-3 rounded-md hover:bg-black hover:text-white transition">
              View Projects
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex-1">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
            alt="Hero"
            className="rounded-lg shadow-md mx-auto"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;
