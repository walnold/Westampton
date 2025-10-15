import React from "react";
import { motion } from "motion/react";
import { services } from "../Services/Services.data";
import "./ServiceList.css";

export default function ServiceList() {
  return (
    <section className="services-section">
      <div className="container">
        <h2>Our Core Services</h2>
        <p className="services-sub">
          We deliver strategic advisory and operational execution that empower
          organisations to thrive in the digital economy.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              id={s.id}
              className="service-card"
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
            >
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a className="service-cta" href="/contact">
                Contact us →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
