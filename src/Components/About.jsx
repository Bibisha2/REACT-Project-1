import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center  from-[#f8fafc] to-[#eef2ff] px-6"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white rounded-2xl shadow-xl p-10 md:p-14 text-center transform transition hover:-translate-y-1">
          
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-gray-900">
            About Me
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed text-lg">
            I am a passionate web developer focused on building clean,
            responsive, and user-friendly web applications. I enjoy working
            with <span className="font-semibold text-gray-800">React</span> and
            continuously learning new technologies to create better digital
            experiences.
          </p>

          {/* Highlights */}
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="p-5 rounded-xl bg-blue-50 hover:bg-blue-100 transition">
              <h4 className="font-semibold text-gray-900 mb-2">
                Frontend Skills
              </h4>
              <p className="text-gray-600 text-sm">
                Strong foundation in HTML, CSS, JavaScript, and modern UI
                frameworks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-purple-50 hover:bg-purple-100 transition">
              <h4 className="font-semibold text-gray-900 mb-2">
                React Development
              </h4>
              <p className="text-gray-600 text-sm">
                Experience building fast, scalable single-page applications
                using React.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-pink-50 hover:bg-pink-100 transition">
              <h4 className="font-semibold text-gray-900 mb-2">
                Design Mindset
              </h4>
              <p className="text-gray-600 text-sm">
                Interested in UI/UX, accessibility, and clean modern web design.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
