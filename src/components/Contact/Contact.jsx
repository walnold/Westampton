import React from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <>
      

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or want to work with us? Fill out the form below and we’ll get back to you.
          </p>

          <div className="contact-grid">
            <form className="contact-form">
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email Address" required />
              <textarea rows="5" placeholder="Your Message" required></textarea>
              <button type="submit" className="btn-primary">Send Message</button>
            </form>

            <div className="contact-info">
              <h3>Contact Details</h3>
              <p><strong>Address:</strong> 12 Riverside Drive, Nairobi, Kenya</p>
              <p><strong>Phone:</strong> +254 700 123 456</p>
              <p><strong>Email:</strong> info@westampton.co.ke</p>

              <div className="cta">
                <h4>Partner With Us</h4>
                <p>Let’s build something great together. Reach out today!</p>
                <a href="#services" className="btn-outline">Explore Services</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
