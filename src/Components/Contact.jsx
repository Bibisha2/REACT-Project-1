import React from "react";


const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-header">
        <h2>Let's Work Together</h2>
        <p>Have a project in mind or just want to say hi? Reach out and let's create something amazing.</p>
      </div>

      <div className="contact-body">

        {/* Form Card */}
        <div className="contact-card">
          <h3>Send a Message</h3>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Info Card */}
        
      </div>
    </section>
  );
};

export default Contact;
