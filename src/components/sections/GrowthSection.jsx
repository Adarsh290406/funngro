import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import StaggerChildren from '../animations/StaggerChildren';
import StaggerItem from '../animations/StaggerItem';
import './GrowthSection.css';

export default function GrowthSection() {
  const tiers = [
    {
      level: 'BRONZE',
      earning: '0 - ₹2,000 completed',
      perks: 'Basic certifications, live projects applications',
      icon: '🥉',
      percent: '100%',
      color: '#cd7f32'
    },
    {
      level: 'SILVER',
      earning: '₹2,000 - ₹10,000 completed',
      perks: 'Priority task approvals, exclusive skill badges',
      icon: '🥈',
      percent: '75%',
      color: '#c0c0c0'
    },
    {
      level: 'GOLD',
      earning: '₹10,000 - ₹50,000 completed',
      perks: 'Brand champion tags, higher paying tasks, direct invites',
      icon: '🥇',
      percent: '40%',
      color: '#ffd700'
    },
    {
      level: 'PLATINUM',
      earning: '₹50,000+ completed',
      perks: 'Ambassador opportunities, mentorship roles, lifetime perks',
      icon: '👑',
      percent: '10%',
      color: '#e5e4e2'
    }
  ];

  return (
    <section id="growth" className="growth-section section-padding">
      <div className="bg-ambient" style={{ top: '30%', right: '-15%', opacity: 0.4 }}></div>
      <div className="container growth-container">
        
        {/* Left Info Column */}
        <div className="growth-content">
          <SectionHeading 
            subtitle="Your Growth on Funngro" 
            title="Climb the ladder to unlock premium tasks" 
            highlightText="unlock premium tasks"
            align="left"
          />
          
          <p className="growth-intro">
            Build your portfolio as you complete work! Funngro features a fully gamified journey where consistency and high ratings unlock massive earnings and top-tier features.
          </p>

          <StaggerChildren className="perks-list" staggerDelay={0.1}>
            <StaggerItem className="perk-bullet">
              <span className="perk-check">✓</span>
              <div>
                <span className="perk-title">Build Portfolio</span>
                <span className="perk-subtitle">Generate a live verified resume with real ratings.</span>
              </div>
            </StaggerItem>
            
            <StaggerItem className="perk-bullet">
              <span className="perk-check">✓</span>
              <div>
                <span className="perk-title">Unlock High-Payout Tasks</span>
                <span className="perk-subtitle">Reach silver or gold to unlock tasks paying up to ₹2,500!</span>
              </div>
            </StaggerItem>

            <StaggerItem className="perk-bullet">
              <span className="perk-check">✓</span>
              <div>
                <span className="perk-title">Exclusive Brand Leads</span>
                <span className="perk-subtitle">Become platinum to work directly with top-tier brands.</span>
              </div>
            </StaggerItem>
          </StaggerChildren>
        </div>

        {/* Right Gamification Ladder Card */}
        <FadeInOnScroll delay={0.3} x={40} className="growth-visual">
          <div className="ladder-card glow-card">
            <h4 className="ladder-header mono">🚀 EARNING LADDER</h4>
            
            <div className="ladder-list">
              {tiers.map((tier, idx) => (
                <div key={idx} className="ladder-item">
                  <div className="ladder-badge" style={{ backgroundColor: `${tier.color}15`, border: `1px solid ${tier.color}30` }}>
                    <span className="ladder-icon">{tier.icon}</span>
                  </div>
                  
                  <div className="ladder-details">
                    <div className="ladder-meta">
                      <span className="ladder-name" style={{ color: tier.color }}>{tier.level}</span>
                      <span className="ladder-percent mono">{tier.percent}</span>
                    </div>
                    <span className="ladder-earning">{tier.earning}</span>
                    <span className="ladder-perks">{tier.perks}</span>
                    
                    {/* Visual Progress Bar */}
                    <div className="ladder-progress-bar">
                      <div className="ladder-progress-fill" style={{ width: tier.percent, backgroundColor: tier.color, boxShadow: `0 0 8px ${tier.color}` }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeInOnScroll>

      </div>
    </section>
  );
}
