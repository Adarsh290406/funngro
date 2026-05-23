import { useCountUp } from '../../../hooks/useCountUp';
import FadeInOnScroll from '../../animations/FadeInOnScroll';
import './BrandsHero.css';

export default function BrandsHero() {
  const [reachRef, reachValue] = useCountUp(70, 2000, 'L+', '');
  const [brandsRef, brandsValue] = useCountUp(5000, 2000, '+', '');
  const [paidRef, paidValue] = useCountUp(60, 2000, 'Cr+', '₹');
  const [ageRef, ageValue] = useCountUp(18, 2000, '+ Categories', '');

  return (
    <section className="brands-hero section-padding">
      <div className="bg-ambient" style={{ top: '-10%', right: '-15%', opacity: 0.5 }}></div>
      <div className="bg-ambient" style={{ bottom: '-10%', left: '-10%', animationDelay: '-4s' }}></div>

      <div className="container brands-hero-container">
        
        {/* Left Info Column */}
        <div className="brands-hero-content">
          <FadeInOnScroll delay={0.1}>
            <span className="brands-hero-badge">🏢 India's Largest Gen Z Activation Hub</span>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <h1 className="brands-hero-title font-heading">
              Reach <span className="accent-text highlight-glow">70 Lakh</span> Gen Z Earners who trust us
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3}>
            <p className="brands-hero-desc">
              India's most engaged youth marketing platform. Transform your brand presence with authentic, user-generated content, product sampling, surveys, and organic peer-to-peer influence.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.4} className="brands-hero-btns">
            <a href="#contact" className="btn btn-primary animate-pulse-glow">Launch a Campaign</a>
            <a href="#pricing" className="btn btn-outline">View Pricing</a>
          </FadeInOnScroll>
        </div>

        {/* Right Dashboard Mockup Column */}
        <FadeInOnScroll delay={0.3} y={50} className="brands-hero-visual">
          <div className="dashboard-mockup animate-float">
            
            {/* Dashboard Mockup Bar */}
            <div className="dash-bar">
              <div className="dash-dots">
                <span></span><span></span><span></span>
              </div>
              <span className="dash-address mono">funngro.com/brand-dashboard</span>
            </div>

            {/* Dashboard Main Area */}
            <div className="dash-main">
              
              {/* Sidebar Preview */}
              <div className="dash-sidebar">
                <span className="dash-logo">FG</span>
                <div className="sidebar-items">
                  <span className="active">📊</span>
                  <span>🚀</span>
                  <span>👥</span>
                  <span>💳</span>
                </div>
              </div>

              {/* Body Preview */}
              <div className="dash-body">
                
                {/* Stats Widgets */}
                <div className="dash-widgets-grid">
                  <div className="widget-card">
                    <span className="w-label">Live Campaigns</span>
                    <span className="w-val">12 Active</span>
                  </div>
                  <div className="widget-card">
                    <span className="w-label">Total Submissions</span>
                    <span className="w-val">4,250</span>
                  </div>
                  <div className="widget-card">
                    <span className="w-label">Spent this week</span>
                    <span className="w-val">₹42,500</span>
                  </div>
                </div>

                {/* Submissions List */}
                <div className="dash-submissions-box">
                  <span className="box-title">Recent Creator Submissions</span>
                  
                  <div className="submission-item">
                    <span className="sub-user">👦 Rohan S. (Figma Audit)</span>
                    <span className="sub-status approved">Approved</span>
                    <span className="sub-payout">₹250</span>
                  </div>

                  <div className="submission-item">
                    <span className="sub-user">👧 Meera G. (Instagram Video)</span>
                    <span className="sub-status pending">Pending Review</span>
                    <span className="sub-payout">₹1,200</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </FadeInOnScroll>

      </div>

      {/* Stats Counter Bar Section */}
      <div className="container brands-stats-bar">
        <div className="stats-bar-grid">
          
          <div ref={reachRef} className="bar-stat-item">
            <span className="bar-stat-val mono">{reachValue}</span>
            <span className="bar-stat-label">Gen Z Reach</span>
          </div>

          <div ref={brandsRef} className="bar-stat-item">
            <span className="bar-stat-val mono">{brandsValue}</span>
            <span className="bar-stat-label">Brands Onboarded</span>
          </div>

          <div ref={paidRef} className="bar-stat-item">
            <span className="bar-stat-val mono">{paidValue}</span>
            <span className="bar-stat-label">Paid to Teens</span>
          </div>

          <div ref={ageRef} className="bar-stat-item">
            <span className="bar-stat-val mono">{ageValue}</span>
            <span className="bar-stat-label">Campaign Categories</span>
          </div>

        </div>
      </div>

    </section>
  );
}
