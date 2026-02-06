import React from "react";


const Services = () => {
  return (
    <section id="services" className="services">
      <h2>My Services</h2>
      <p>
        I provide modern web development solutions, focused on responsive design,
        user-friendly interfaces, and smooth functionality.
      </p>

      <div className="service-list">
        <div className="service-item">
          <h3>Web Development</h3>
          <p>Building responsive and interactive websites using React.</p>
        </div>

        <div className="service-item">
          <h3>UI/UX Design</h3>
          <p>Crafting clean and user-friendly interfaces.</p>
        </div>

        <div className="service-item">
          <h3>Performance Optimization</h3>
          <p>Improving website speed and performance.</p>
        </div>

        <div className="service-item">
          <h3>Maintenance & Support</h3>
          <p>Ongoing website updates and support.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
