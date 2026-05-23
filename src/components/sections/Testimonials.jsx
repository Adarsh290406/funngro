import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import StaggerChildren from '../animations/StaggerChildren';
import StaggerItem from '../animations/StaggerItem';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import './Testimonials.css';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Senjuti Manna',
      role: 'Active Earner',
      rating: '⭐⭐⭐⭐⭐',
      quote: 'Funngro gave me the platform to work with real brands while I was still studying! It\'s the perfect way to get experience and pocket money.',
      avatar: '👧'
    },
    {
      name: 'Sahil Mishra',
      role: 'Power Teenlancer',
      rating: '⭐⭐⭐⭐⭐',
      quote: 'I never thought earning money as a teen could be this professional and easy! The projects are incredibly fun and the pay is instant.',
      avatar: '👦'
    },
    {
      name: 'Sneha Sen',
      role: 'Content Creator',
      rating: '⭐⭐⭐⭐⭐',
      quote: 'As a content writer, I got three brand assignments in my first two weeks itself! The evaluations are super fair and helping me grow.',
      avatar: '👩'
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Loved by Teenlancers" 
          title="What our Teenlancers Say" 
          highlightText="Teenlancers Say"
        />

        {/* Global Review Stats Card */}
        <FadeInOnScroll delay={0.2} y={35} className="global-stats-card">
          <div className="stats-box glow-card">
            <span className="stats-rating mono">4.9 / 5</span>
            <span className="stats-stars">⭐⭐⭐⭐⭐</span>
            <span className="stats-count">Average rating from 3.5 Lakh+ app reviews</span>
          </div>
        </FadeInOnScroll>

        <StaggerChildren className="reviews-grid" staggerDelay={0.15}>
          {reviews.map((rev, index) => (
            <StaggerItem key={index} className="review-card glow-card">
              <div className="review-header">
                <div className="review-avatar-bg">
                  <span className="review-avatar">{rev.avatar}</span>
                </div>
                <div className="review-meta">
                  <h4 className="review-name">{rev.name}</h4>
                  <span className="review-role mono">{rev.role}</span>
                </div>
                <span className="review-stars-pill">{rev.rating}</span>
              </div>
              <p className="review-quote">"{rev.quote}"</p>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
