import React from "react";
import { motion } from "framer-motion";
import { services } from "./Services.data";
import "./Services.css";
import LazyImage from "../../utils/LazyImage";

export default function Services(){
  return (
    <section className="services container-section">
      <div className="container">
        <h2>Our Core Services</h2>
        <p style={{textAlign:'center', maxWidth:800, margin:'0 auto 1.25rem'}}>We deliver strategic advisory and operational execution that empower organisations to thrive in the digital economy.</p>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.article key={s.id} id={s.id} className="service-card fade-up"
              initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay: i*0.12}}>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a className="learn-more" href="/contact">Contact us →</a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
