import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import SiteMeta from "../../components/SiteMeta";
import About from "../../components/About/About";

const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <SiteMeta
        title="About Westampton Solutions"
        description="Westampton Solutions Limited is a boutique global business solutions and advisory firm helping organisations accelerate growth, strengthen resilience, and expand their global footprint through innovation and strategic execution."
        keywords="digital transformation, cybersecurity advisory, market entry Africa, business development advisory"
      />
      <About />
    </motion.div>
  );
};

export default AboutPage;
