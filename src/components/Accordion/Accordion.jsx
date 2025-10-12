import React, { useState } from "react";
import "./Accordion.css";

/**
 * Props:
 *  - accordionData: [{ header: string, content: string }, ...]
 */
export default function Accordion({ accordionData = [] }) {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div className="accordion">
      {accordionData.map((item, i) => (
        <div className="accordion-item" key={i}>
          <button
            className={`accordion-header ${openIndex === i ? "open" : ""}`}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            <span>{item.header}</span>
            <span className="accordion-icon">{openIndex === i ? "−" : "+"}</span>
          </button>

          <div
            className={`accordion-body ${openIndex === i ? "open" : ""}`}
            style={openIndex === i ? { maxHeight: 500 } : { maxHeight: 0 }}
            aria-hidden={openIndex !== i}
          >
            <div className="accordion-body-inner">{item.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
