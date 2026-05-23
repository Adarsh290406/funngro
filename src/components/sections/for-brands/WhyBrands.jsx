import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import StaggerChildren from '../../animations/StaggerChildren';
import StaggerItem from '../../animations/StaggerItem';
import './WhyBrands.css';

export default function WhyBrands() {
  const points = [
    {
      title: 'Authentic Reach',
      desc: 'Real teenagers sharing your brand messages with their peer circles, groups, and families. Zero bot accounts, pure organic engagement.',
      icon: '🛡️'
    },
    {
      title: 'Performance Based',
      desc: 'Pay only for actual results. Whether it\'s app installs, content views, completed surveys, or leads. Zero waste, maximum accountability.',
      icon: '📈'
    },
    {
      title: 'Full Spectrum',
      desc: 'From custom content creation and viral reels to micro-influencer networks, product sampling, and direct student outreach campaigns.',
      icon: '🎯'
    }
  ];

  return (
    <section id="why-funngro" className="why-brands-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Why Funngro" 
          title="Why Leading Brands Choose Funngro" 
          highlightText="Brands Choose"
        />

        <StaggerChildren className="why-grid" staggerDelay={0.15}>
          {points.map((pt, index) => (
            <StaggerItem key={index} className="why-card glow-card">
              <div className="why-icon-wrapper">{pt.icon}</div>
              <h3 className="why-card-title">{pt.title}</h3>
              <p className="why-desc">{pt.desc}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
