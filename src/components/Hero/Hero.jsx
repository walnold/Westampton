import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import heroImg from "../../assets/hero-image2.jpg";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-grid">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1>Empowering Digital Transformation</h1>
          <p>
            We help organizations expand customer reach, manage technology risk,
            and unlock new markets through secure digital transformation and
            strategic advisory.
          </p>
          <div style={{ marginTop: "1rem" }}>
            <a href="/services" className="btn btn-primary">
              Explore Our Services
            </a>
            <a
              href="/contact"
              className="btn btn-outline"
              style={{ marginLeft: ".75rem" }}
            >
              Talk to Our Advisory Team
            </a>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="digital connectivity"
            style={{ width: "100%", borderRadius: "12px" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
