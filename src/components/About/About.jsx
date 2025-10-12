import React from "react";
import SiteMeta from "../SiteMeta";
import Accordion from "../Accordion/Accordion";
import "./About.css";
import { aboutSections, accordionData } from "./about.data";

/**
 * aboutSections: array of { title, text } used in "What We Do Best"
 * accordionData: array of { header, content } for the accordion (core values)
 */

export default function About() {
  return (
    <>
      <SiteMeta
        title="About Westampton Solutions"
        description="Westampton Solutions Limited is a boutique global business solutions and advisory firm helping organisations accelerate growth, strengthen resilience, and expand their global footprint through innovation and strategic execution."
        keywords="digital transformation, cybersecurity advisory, market entry Africa, business development advisory"
      />

      <section className="about-hero">
        <div className="container about-hero-inner">
          <div className="about-hero-copy">
            <h1>Empowering Businesses to Transform, Scale, and Succeed</h1>
            <p>
              We are a boutique advisory firm that helps organisations worldwide unlock digital potential,
              strengthen cybersecurity resilience, and achieve sustainable growth through tailored business and technology solutions.
            </p>
            <a className="btn btn-primary" href="/services">Explore Our Services</a>
            <a className="btn btn-outline" href="/contact" style={{ marginLeft: 12 }}>Talk to Our Advisory Team</a>
          </div>
        </div>
      </section>

      <section className="about-content container-section">
        <div className="container">
          <h2>Who We Are</h2>
          <p className="lead">
            Westampton Solutions Limited is a boutique global business solutions and advisory firm established in 2017. We operate at the intersection of strategy, technology, and risk,
            enabling clients to achieve measurable outcomes through solutions that combine innovation, governance, and disciplined execution.
          </p>

          <h3>Our Mission</h3>
          <p>To empower businesses worldwide to expand their digital and market reach through secure, innovative, and risk-aware transformation.</p>

          <h3>What We Do Best</h3>
          <div className="about-grid">
            {aboutSections.map((s, i) => (
              <article className="about-card" key={i}>
                <h4>{s.title}</h4>
                <p>{s.text}</p>
              </article>
            ))}
          </div>

          <h3 id="values" style={{marginTop: '2rem'}}>Why Clients Trust Westampton Solutions</h3>
          <p className="lead">Our clients choose us for our boutique approach, global perspective, and tailored execution.</p>

          <div style={{ marginTop: '1.25rem' }}>
            <Accordion accordionData={accordionData} />
          </div>
        </div>
      </section>
    </>
  );
}
