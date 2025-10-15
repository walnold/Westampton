import React from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import Contact from "../../components/Contact/Contact";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <Helmet>
        <title>Contact Us | Westampton Solutions Limited</title>
        <meta
          name="description"
          content="Reach out to Westampton Solutions Limited for business inquiries, collaborations, or service consultations. We’d love to hear from you!"
        />
      </Helmet>
      <Contact />
    </motion.div>
  );
};

export default ContactPage;
