import React, { useRef, useState } from "react";
import "./Contact.css";
import { Helmet } from "react-helmet-async";
// import emailjs from "@emailjs/browser";

const Contact = () => {
    const emailjs="";
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage("✅ Message sent successfully!");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setMessage("❌ Failed to send message. Please try again later.");
        }
      )
      .finally(() => setIsSending(false));
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Westampton Solutions Limited</title>
        <meta
          name="description"
          content="Reach out to Westampton Solutions Limited for business inquiries, collaborations, or service consultations. We’d love to hear from you!"
        />
      </Helmet>

      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Have questions or want to work with us? Fill out the form below and we’ll get back to you.
          </p>

          <div className="contact-grid">
            <form ref={formRef} onSubmit={sendEmail} className="contact-form">
              <input type="text" name="user_name" placeholder="Full Name" required />
              <input type="email" name="user_email" placeholder="Email Address" required />
              <textarea name="message" rows="5" placeholder="Your Message" required></textarea>

              <button type="submit" className="btn-primary" disabled={isSending}>
                {isSending ? "Sending..." : "Send Message"}
              </button>

              {message && <p className="status-message">{message}</p>}
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
