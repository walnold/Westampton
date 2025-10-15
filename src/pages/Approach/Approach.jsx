import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import "./Approach.css";
import { FaHandshake, FaChartLine, FaCogs, FaUsers, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import image from "../../assets/hero-image.jpg"

const Approach = () => {
  return (
    <>
      <Helmet>
        <title>
          Our Approach | Westampton Solutions | Boutique Advisory Firm for Global Transformation
        </title>
        <meta
          name="description"
          content="Discover how Westampton Solutions delivers boutique, tailored advisory services through a proven five-step approach — combining strategy, technology, and execution to drive secure, global business transformation."
        />
        <meta
          name="keywords"
          content="boutique advisory firm, digital transformation approach, cybersecurity consulting framework, business expansion strategy, risk management methodology, market entry advisory, consulting process"
        />
      </Helmet>

      {/* HERO SECTION */}
      <section className="approach-hero">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>A Boutique Advisory Approach. Tailored for Global Impact.</h1>
          <p>
            At Westampton Solutions, we believe meaningful transformation requires partnership, precision, and purpose. 
            Our approach integrates strategic insight, disciplined execution, and global experience to deliver outcomes that matter.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Talk to Our Advisory Team</Link>
            <Link to="/services" className="btn-secondary">Explore Our Services</Link>
          </div>
        </motion.div>
      </section>

      {/* INTRODUCTORY OVERVIEW */}
      <section className="approach-section light-bg">
        <h2>How We Deliver Lasting Value</h2>
        <p>
          Every client, industry, and market we serve is unique — that’s why our approach is never off-the-shelf.
          As a boutique advisory firm, we develop tailored strategies that connect business goals with technology capability, risk discipline, and market reality.
          Our engagements are collaborative, transparent, and measurable — ensuring every decision aligns with your long-term objectives.
        </p>
        <p>
          We don’t just design strategies; we help you execute them. From defining the problem to delivering sustainable solutions, 
          we work side-by-side with your teams to ensure results that endure.
        </p>
      </section>

      {/* FIVE-STEP FRAMEWORK */}
      <section className="approach-section">
        <h2>Our Advisory Framework</h2>
        <p>
          Our methodology combines global consulting standards with practical execution principles — 
          ensuring each engagement delivers immediate results and long-term value.
        </p>

        <div className="framework-grid">
          {[
            {
              step: "Understand",
              what: "We assess your business environment, objectives, and challenges through diagnostic assessments.",
              benefit: "Clarity on current-state realities and alignment with strategic direction.",
            },
            {
              step: "Design",
              what: "We translate insights into actionable strategies for digital transformation, cybersecurity, or market expansion.",
              benefit: "Solutions tailored to your organization’s capabilities and goals.",
            },
            {
              step: "Execute",
              what: "We operationalize plans, implement solutions, and establish governance mechanisms.",
              benefit: "Practical implementation with minimal disruption and strong accountability.",
            },
            {
              step: "Measure",
              what: "We define KPIs and conduct reviews to track performance and maturity scoring.",
              benefit: "Transparency, quantifiable success, and confidence in progress.",
            },
            {
              step: "Evolve",
              what: "We help clients continuously improve strategies, governance, and resilience.",
              benefit: "Sustained value and agility in changing environments.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="framework-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
            >
              <h3>{item.step}</h3>
              <p><strong>What We Do:</strong> {item.what}</p>
              <p><strong>How You Benefit:</strong> {item.benefit}</p>
            </motion.div>
          ))}
        </div>

        <div className="center-btn">
          <Link to="/contact" className="btn-primary">Discuss Our Framework in Action</Link>
        </div>
      </section>

      {/* ENGAGEMENT PRINCIPLES */}
      <section className="approach-section light-bg">
        <h2>Guiding Principles Behind Every Engagement</h2>
        <div className="principles-grid">
          {[
            { icon: <FaHandshake />, title: "Partnership", desc: "We work as an extension of your team — aligning priorities for shared success." },
            { icon: <FaChartLine />, title: "Precision", desc: "Every recommendation is evidence-based, data-driven, and governance-aligned." },
            { icon: <FaCogs />, title: "Agility", desc: "Our delivery models flex to your pace, budget, and internal capacity." },
            { icon: <FaUsers />, title: "Accountability", desc: "We measure success through impact, not activity." },
            { icon: <FaLock />, title: "Confidentiality", desc: "Trust defines our business. Every engagement is handled with integrity." },
          ].map((p, i) => (
            <motion.div
              key={i}
              className="principle-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15 }}
            >
              <div className="icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="approach-section">
        <h2>Why Our Approach Works</h2>
        <ul className="differentiators">
          <li>Direct Access to Senior Advisors – no layered teams.</li>
          <li>Tailored Methodologies aligned to your goals and regulations.</li>
          <li>Global Reach with Local Expertise in Sub-Saharan Africa.</li>
          <li>Execution-Oriented Advisory for measurable results.</li>
          <li>Trusted Partnerships built on transparency and impact.</li>
        </ul>
        <div className="center-btn">
          <Link to="/services" className="btn-secondary">Learn More About Our Services</Link>
        </div>
      </section>

      {/* CLIENT EXPERIENCE */}
      <section className="approach-section light-bg">
        <h2>Built for Collaboration and Measurable Success</h2>
        <p>
          Our clients — spanning financial institutions, fintechs, corporates, and investors — appreciate our ability to translate strategy into results.
          We combine foresight, operational insight, and disciplined risk management to deliver measurable business impact.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="approach-cta">
        <motion.div
          className="cta-inner"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2>Let’s Start the Conversation</h2>
          <p>
            Partner with Westampton Solutions to see how our boutique advisory approach can help your organization 
            transform securely, scale strategically, and thrive globally.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn-primary">Talk to Our Advisory Team</Link>
            <Link to="/contact" className="btn-secondary">Schedule a Consultation</Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Approach;
