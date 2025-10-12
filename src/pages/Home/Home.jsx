import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import ServicesList from "../../components/ServiceList/ServiceList";
import Contact from "../../components/Contact/Contact";
import Footer from "../../components/Footer/Footer";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Westampton Solutions Limited | Empowering Businesses</title>
        <meta
          name="description"
          content="Westampton Solutions Limited provides innovative business solutions and strategic consultancy for organizations across Kenya and Sub-Saharan Africa."
        />
        <meta name="keywords" content="Westampton Solutions, Business Solutions, Consulting, Technology, Kenya" />
      </Helmet>

      <main>
        {/* HERO SECTION */}
        <Hero />

        {/* ABOUT SECTION */}
        <section id="about" className="homepage-section">
          <About />
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="homepage-section">
          <ServicesList />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="homepage-section">
          <Contact />
        </section>
      </main>

     
    </>
  );
};

export default Homepage;
