import React from "react";
import { motion } from "framer-motion";
import { services } from "./Services.data";
import "./Services.css";
import LazyImage from "../../utils/LazyImage";
import { Helmet } from "react-helmet";

export default function Services() {
  return (
    <section className="services container-section">
      <Helmet>
        <title>
          Services | Westampton Solutions | Boutique Advisory Firm for Digital
          Transformation & Market Expansion
        </title>
        <meta
          name="description"
          content="Explore Westampton Solutions’ boutique advisory services, including Digital Financial Services, Cybersecurity Risk Management, Market Entry Advisory, and Remote Staff Augmentation — tailored for global organizations."
        />
        <meta
          name="keywords"
          content="boutique advisory firm, digital financial services, cybersecurity risk management, market entry Africa, business development advisory, remote staff augmentation, digital transformation, fintech consulting"
        />
        <meta
          property="og:title"
          content="Services | Westampton Solutions Limited"
        />
        <meta
          property="og:description"
          content="Westampton Solutions Limited delivers technology-driven and risk-informed advisory services designed to help businesses transform securely, scale intelligently, and expand confidently across global markets."
        />
        <meta property="og:type" content="website" />
        {/* <meta property="og:url" content="https://www.westamptionsolutions.net/services" /> */}
        {/* <meta property="og:image" content="https://www.westamptionsolutions.net/images/services-hero.jpg" /> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Services | Westampton Solutions Limited"
        />
        <meta
          name="twitter:description"
          content="Learn more about Westampton Solutions’ tailored advisory offerings — from digital transformation to cybersecurity and market entry advisory."
        />
      </Helmet>

      <div className="container">
        <h2>Our Core Services</h2>
        <p
          style={{
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto 1.25rem",
          }}
        >
          We deliver strategic advisory and operational execution that empower
          organisations to thrive in the digital economy.
        </p>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article
              key={s.id}
              id={s.id}
              className="service-card fade-up"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
            >
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a className="learn-more" href="/contact">
                Contact us →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
