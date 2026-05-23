import { useCountUp } from '../../hooks/useCountUp';
import FadeInOnScroll from '../animations/FadeInOnScroll';
import './HeroSection.css';

export default function HeroSection() {
  const [teensRef, teensValue] = useCountUp(3.5, 2000, ' Lakh+', '');
  const [tasksRef, tasksValue] = useCountUp(3800, 2000, '+', '');

  return (
    <section className="hero-section section-padding">
      <div className="bg-ambient" style={{ top: '-10%', left: '-10%' }}></div>
      <div className="bg-ambient" style={{ bottom: '0%', right: '-10%', animationDelay: '-5s' }}></div>

      <div className="container hero-container">
        
        {/* Left Content Side */}
        <div className="hero-content">
          <FadeInOnScroll delay={0.1}>
            <span className="hero-badge">⚡ Active in Teen Work Ecosystem</span>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.2}>
            <h1 className="hero-title">
              Smart way for Teens to <br />
              <span className="accent-text highlight-glow">Earn Money</span>
            </h1>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.3}>
            <p className="hero-description">
              Earn your first income by working with real companies. Funngro helps you build your passion into a career. Secure payments, actual learnings, and certified works.
            </p>
          </FadeInOnScroll>

          <FadeInOnScroll delay={0.4} className="hero-btn-group">
            <a href="#download" className="btn btn-primary animate-pulse-glow">Get Funngro App</a>
            <a href="#projects" className="btn btn-outline">Explore Projects</a>
          </FadeInOnScroll>

          {/* Stat Counters */}
          <div className="hero-stats">
            <FadeInOnScroll delay={0.5} className="stat-item">
              <span ref={teensRef} className="stat-number mono">{teensValue}</span>
              <span className="stat-label">Teens Registered</span>
            </FadeInOnScroll>
            
            <FadeInOnScroll delay={0.6} className="stat-item">
              <span ref={tasksRef} className="stat-number mono">{tasksValue}</span>
              <span className="stat-label">Live Tasks Completed</span>
            </FadeInOnScroll>
          </div>
        </div>

        {/* Right Phone Mockup Side */}
        <FadeInOnScroll delay={0.3} y={50} className="hero-visual">
          <div className="phone-mockup animate-float">
            <div className="phone-screen">
              
              {/* App Status Bar */}
              <div className="phone-header">
                <span className="phone-time">09:41</span>
                <div className="phone-notch"></div>
                <div className="phone-icons">
                  <span>📶</span>
                  <span>🔋</span>
                </div>
              </div>

              {/* App Main Area */}
              <div className="app-content">
                
                {/* Profile Widget */}
                <div className="app-profile">
                  <div className="avatar">👦</div>
                  <div className="profile-details">
                    <span className="welcome">Welcome Back,</span>
                    <span className="name">Kushal Kahar</span>
                  </div>
                  <span className="level-badge">LEVEL 3</span>
                </div>

                {/* Balance Widget */}
                <div className="balance-card">
                  <div className="balance-left">
                    <span className="balance-label">GroMoney Balance</span>
                    <span className="balance-val">₹4,250.00</span>
                  </div>
                  <span className="wallet-icon">💳</span>
                </div>

                {/* Tasks Widget */}
                <div className="section-widget">
                  <div className="widget-header">
                    <span className="widget-title">Active Tasks</span>
                    <span className="widget-more">See All</span>
                  </div>
                  
                  <div className="task-widget-item">
                    <div className="task-icon bg-inst">📸</div>
                    <div className="task-info">
                      <span className="task-name">Instagram Reel creation</span>
                      <span className="task-brand">Shadow Ninja</span>
                    </div>
                    <span className="task-reward">₹120</span>
                  </div>

                  <div className="task-widget-item">
                    <div className="task-icon bg-hfdc">💳</div>
                    <div className="task-info">
                      <span className="task-name">Debit Card Signup Promo</span>
                      <span className="task-brand">HDFC Bank</span>
                    </div>
                    <span className="task-reward">₹220</span>
                  </div>
                </div>

                {/* Leaderboard Widget */}
                <div className="section-widget">
                  <span className="widget-title">Weekly Leaderboard</span>
                  <div className="leaderboard-preview">
                    <span className="rank">🥇 Rank #1</span>
                    <span className="prize">🏆 +₹500 Bonus!</span>
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
