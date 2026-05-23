import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import StaggerChildren from '../../animations/StaggerChildren';
import StaggerItem from '../../animations/StaggerItem';
import './BrandCapabilities.css';

export default function BrandCapabilities() {
  const capabilities = [
    {
      title: 'Content Creation',
      desc: 'Get highly authentic video reviews, reels, user testimonials, and social posts created directly by teenagers.',
      cost: 'Est. cost: ₹250 / Video',
      icon: '📹'
    },
    {
      title: 'Referral League',
      desc: 'Deploy thousands of students to promote app signups, referral links, and brand products in their colleges.',
      cost: 'Est. cost: ₹10 / Lead',
      icon: '🔗'
    },
    {
      title: 'Product Sampling',
      desc: 'Deliver physical product samples directly into the hands of target Gen Z userbases for active feedback.',
      cost: 'Est. cost: ₹50 / Sample',
      icon: '🎁'
    },
    {
      title: 'Market Insights',
      desc: 'Gather rapid feedback, focus group data, and surveys from verified teen audiences across the country.',
      cost: 'Est. cost: ₹15 / Survey',
      icon: '📊'
    }
  ];

  return (
    <section id="capabilities" className="capabilities-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Campaign Capabilities" 
          title="Supercharge your brand activation" 
          highlightText="brand activation"
        />

        <StaggerChildren className="cap-grid" staggerDelay={0.1}>
          {capabilities.map((cap, index) => (
            <StaggerItem key={index} className="cap-card glow-card">
              <div className="cap-header">
                <span className="cap-icon">{cap.icon}</span>
                <span className="cap-cost mono">{cap.cost}</span>
              </div>
              <h3 className="cap-title">{cap.title}</h3>
              <p className="cap-desc">{cap.desc}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
