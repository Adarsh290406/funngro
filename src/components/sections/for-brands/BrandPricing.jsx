import React from 'react';
import SectionHeading from '../../ui/SectionHeading';
import StaggerChildren from '../../animations/StaggerChildren';
import StaggerItem from '../../animations/StaggerItem';
import './BrandPricing.css';

export default function BrandPricing() {
  const tiers = [
    {
      name: 'Starter',
      price: '₹15,000',
      period: 'per campaign',
      features: [
        'Up to 100 Creators',
        'Basic Analytics Dashboard',
        'Standard Moderation Support',
        'Verified Submissions'
      ],
      popular: false,
      btnText: 'Get Started'
    },
    {
      name: 'Growth',
      price: '₹50,000',
      period: 'per campaign',
      features: [
        'Up to 1,000 Creators',
        'Priority Campaign Manager',
        'Advanced Demographic Filters',
        'API Integration & White-labeling',
        'Verified Submissions'
      ],
      popular: true,
      btnText: 'Contact Sales'
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'for scaled requirements',
      features: [
        'Unlimited Creators',
        'Dedicated Account Director',
        'Custom Payout Workflows',
        'Custom API Connectors',
        'SLA & Brand Safety Guarantees'
      ],
      popular: false,
      btnText: 'Talk to us'
    }
  ];

  return (
    <section id="pricing" className="pricing-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Pricing Plans" 
          title="Simple, Scalable Pricing" 
          highlightText="Scalable Pricing"
        />

        <StaggerChildren className="pricing-grid" staggerDelay={0.15}>
          {tiers.map((tier, index) => (
            <StaggerItem key={index} className={`pricing-card glow-card ${tier.popular ? 'popular' : ''}`}>
              {tier.popular && <span className="popular-badge mono">MOST POPULAR</span>}
              
              <div className="pricing-header">
                <span className="tier-name">{tier.name}</span>
                <div className="price-box">
                  <span className="price-val text-gradient mono">{tier.price}</span>
                  <span className="price-period">{tier.period}</span>
                </div>
              </div>

              <ul className="pricing-features">
                {tier.features.map((feature, fIdx) => (
                  <li key={fIdx} className="feature-item">
                    <span className="bullet">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`btn pricing-btn ${tier.popular ? 'btn-primary' : 'btn-outline'}`}
              >
                {tier.btnText}
              </a>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
