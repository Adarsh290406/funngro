import React from 'react';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import './SectionHeading.css';

export default function SectionHeading({ 
  subtitle, 
  title, 
  highlightText, 
  align = 'center',
  className = '' 
}) {
  const renderTitle = () => {
    if (!highlightText) return title;
    
    const parts = title.split(highlightText);
    return (
      <>
        {parts[0]}
        <span className="accent-text highlight-glow">{highlightText}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <FadeInOnScroll className={`section-heading-container align-${align} ${className}`}>
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title text-gradient">{renderTitle()}</h2>
      <div className="title-bar"></div>
    </FadeInOnScroll>
  );
}
