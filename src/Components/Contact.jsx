import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen px-12 py-24  from-[#f0f4ff] to-[#e0eaff] font-sans"
    >
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-[#111] mb-4">
          Let&apos;s Work Together
        </h2>
        <p className="text-base text-gray-600">
          Have a project in mind or just want to say hi? Reach out and let&apos;s create something amazing.
        </p>
      </div>

      {/* Body */}
      <div className="flex flex-wrap justify-center gap-10">

        {/* Form Card */}
        <div className="bg-white p-10 rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] flex-1 min-w-[320px] max-w-md transform transition hover:-translate-y-1">
          <h3 className="text-xl font-semibold text-[#111] mb-6">
            Send a Message
          </h3>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none focus:border-blue-500 transition"
              required
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 text-sm border border-gray-300 rounded-lg outline-none resize-none focus:border-blue-500 transition"
              required
            ></textarea>

            <button
              type="submit"
              className="mt-2 px-4 py-3 bg-blue-600 text-white text-base font-semibold rounded-lg cursor-pointer transition hover:bg-blue-700 hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
