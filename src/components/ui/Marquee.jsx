import React from 'react';
import './Marquee.css';

export default function Marquee({ items }) {
  // Duplicate list of items to ensure seamless loop
  const listItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container">
      <div className="marquee-gradient-left"></div>
      <div className="marquee-track animate-marquee">
        {listItems.map((item, index) => (
          <div key={index} className="marquee-item">
            <span className="brand-logo-text mono">{item}</span>
          </div>
        ))}
      </div>
      <div className="marquee-gradient-right"></div>
    </div>
  );
}
