import React from 'react';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import './SharkTankBanner.css';

export default function SharkTankBanner() {
  return (
    <section id="shark-tank" className="shark-tank-section section-padding">
      <div className="container">
        <FadeInOnScroll delay={0.2} y={45}>
          <div className="shark-card glow-card">
            
            {/* Left Content Column */}
            <div className="shark-content">
              <span className="shark-badge">📺 SHARK TANK INDIA SEASON 2</span>
              <h3 className="shark-title">
                Funngro on <span className="accent-text">Shark Tank India</span>
              </h3>
              <p className="shark-desc">
                Watch our journey as we pitched the future of teen-earning on the Shark Tank India platform. Empowering 70 Lakh+ teens to become financially independent.
              </p>
              <a 
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline shark-btn"
              >
                <span>Watch the Full Pitch</span>
                <span className="play-icon">▶</span>
              </a>
            </div>

            {/* Right Graphic/Visual Column */}
            <div className="shark-visual">
              <div className="tv-frame">
                <div className="tv-screen">
                  <div className="pitch-image-placeholder">
                    <span className="pitch-tag font-heading">FULL PITCH</span>
                    <span className="pitch-headline">I AM A TEENLANCER!</span>
                    <div className="play-button-overlay">
                      <span className="play-triangle">▶</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </FadeInOnScroll>
      </div>
    </section>
  );
}
