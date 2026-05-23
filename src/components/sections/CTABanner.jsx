import React from 'react';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import './CTABanner.css';

export default function CTABanner({ isBrandPage = false }) {
  const title = isBrandPage 
    ? "Ready to reach India's most engaged youth?"
    : "Ready to earn your first rupee?";

  const subtitle = isBrandPage
    ? "Join 5,000+ brands winning the Gen Z economy with Funngro's hyper-targeted organic campaigns."
    : "Join the largest community of teen earners in India. Your journey to financial independence starts today!";

  const btnText1 = isBrandPage ? "Launch a Campaign" : "Get Funngro App";
  const btnText2 = isBrandPage ? "Schedule Demo" : "Explore Projects";

  const targetId = isBrandPage ? "contact" : "download";

  return (
    <section id={targetId} className="cta-banner-section section-padding">
      <div className="bg-ambient" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', opacity: 0.6 }}></div>
      <div className="container">
        
        <FadeInOnScroll delay={0.2} y={40}>
          <div className="cta-box glow-card">
            
            <h2 className="cta-title font-heading">{title}</h2>
            <p className="cta-subtitle">{subtitle}</p>
            
            <div className="cta-btn-group">
              <a href={`#${targetId}`} className="btn btn-primary animate-pulse-glow">{btnText1}</a>
              <a href="#projects" className="btn btn-outline">{btnText2}</a>
            </div>

            <div className="cta-floating-badges mono">
              <span className="badge-item">⚡ 100% Secure</span>
              <span className="badge-item">🔥 UPI Payouts</span>
              <span className="badge-item">✨ ISO Certified</span>
            </div>

          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}
