import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './AccordionFAQ.css';

export default function AccordionFAQ({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="accordion-faq-container">
      {faqs.map((faq, index) => {
        const isOpen = activeIndex === index;
        return (
          <div key={index} className={`faq-item ${isOpen ? 'open' : ''}`}>
            <button 
              className="faq-trigger" 
              onClick={() => toggleAccordion(index)}
              aria-expanded={isOpen}
            >
              <span className="faq-question">{faq.question}</span>
              <span className={`faq-icon-wrapper ${isOpen ? 'rotate' : ''}`}>
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="faq-content-wrapper"
                >
                  <div className="faq-content">
                    <p>{faq.answer}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
