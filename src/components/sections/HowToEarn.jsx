import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import StaggerChildren from '../animations/StaggerChildren';
import StaggerItem from '../animations/StaggerItem';
import './HowToEarn.css';

export default function HowToEarn() {
  const steps = [
    {
      number: '01',
      title: 'Register',
      desc: 'Download the app, complete onboarding, and register as a verified Teenlancer with your parent\'s approval.',
      icon: '📝'
    },
    {
      number: '02',
      title: 'Learn',
      desc: 'Participate in skill assessments, read tips, and complete quick interactive evaluations to unlock higher tiers.',
      icon: '🎓'
    },
    {
      number: '03',
      title: 'Apply',
      desc: 'Browse hundreds of live campaigns. Select campaigns aligned with your talents and submit simple applications.',
      icon: '💼'
    },
    {
      number: '04',
      title: 'Earn',
      desc: 'Execute tasks according to company briefs, submit proof, and get paid instantly in your UPI wallet!',
      icon: '💵'
    }
  ];

  return (
    <section id="how-to-earn" className="how-to-earn-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="How to Earn Money" 
          title="Simple steps to start earning" 
          highlightText="start earning"
        />

        <StaggerChildren className="steps-grid" staggerDelay={0.15}>
          {steps.map((step, index) => (
            <StaggerItem key={index} className="step-card glow-card">
              <div className="step-number mono">{step.number}</div>
              <div className="step-icon-bg">
                <span className="step-card-icon">{step.icon}</span>
              </div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-desc">{step.desc}</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
