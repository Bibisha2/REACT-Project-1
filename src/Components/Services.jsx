import React from "react";

const Services = () => {
  return (
    <section
      id="services"
      className="min-h-screen  from-[#eef2ff] to-[#f8fafc] px-6 py-20 flex items-center"
    >
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
          My Services
        </h2>

        <div className="w-24 h-1 bg-blue-600 mx-auto mb-6 rounded-full"></div>

        <p className="text-gray-600 max-w-2xl mx-auto mb-14">
          I provide modern web development solutions focused on clean design,
          responsiveness, and smooth user experiences.
        </p>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Web Development
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Building responsive and interactive websites using React and
              modern frontend tools.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              UI / UX Design
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Crafting clean, intuitive, and user-friendly interfaces that
              enhance usability.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Performance Optimization
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Optimizing websites for speed, performance, and better SEO
              results.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
            <h3 className="text-xl font-semibold mb-3 text-gray-900">
              Maintenance & Support
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Providing ongoing updates, improvements, and technical support.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;
