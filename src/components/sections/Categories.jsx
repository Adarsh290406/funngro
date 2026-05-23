import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import StaggerChildren from '../animations/StaggerChildren';
import StaggerItem from '../animations/StaggerItem';
import './Categories.css';

export default function Categories() {
  const categoriesList = [
    {
      title: 'Social Media',
      desc: 'Manage pages, create engaging posts, and grow community outreach for brands.',
      earning: 'Earn ₹500+ / task',
      icon: '📣',
      skills: ['Reels', 'TikTok', 'Memes', 'Branding']
    },
    {
      title: 'Content Writing',
      desc: 'Write blog articles, social media captions, newsletters, and engaging reviews.',
      earning: 'Earn ₹800+ / task',
      icon: '✍️',
      skills: ['Copywriting', 'SEO', 'Blogs', 'Scripting']
    },
    {
      title: 'Graphic Design',
      desc: 'Design eye-catching logos, poster designs, and thumbnails for social media posts.',
      earning: 'Earn ₹900+ / task',
      icon: '🎨',
      skills: ['Posters', 'Logos', 'Illustrations', 'Figma']
    },
    {
      title: 'Research & Survey',
      desc: 'Conduct market research, gather feedback, and complete survey programs.',
      earning: 'Earn ₹250+ / task',
      icon: '🔍',
      skills: ['Surveys', 'Data Entry', 'Focus Groups', 'Audits']
    }
  ];

  return (
    <section id="categories" className="categories-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Categories to Explore" 
          title="Earn money through various skills" 
          highlightText="various skills"
        />

        <StaggerChildren className="categories-grid" staggerDelay={0.1}>
          {categoriesList.map((cat, index) => (
            <StaggerItem key={index} className="category-card glow-card">
              <div className="cat-header">
                <div className="cat-icon-wrapper">{cat.icon}</div>
                <span className="cat-earning mono">{cat.earning}</span>
              </div>
              
              <h3 className="cat-title">{cat.title}</h3>
              <p className="cat-desc">{cat.desc}</p>
              
              <div className="cat-skills">
                {cat.skills.map((skill, sIdx) => (
                  <span key={sIdx} className="skill-pill mono">{skill}</span>
                ))}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>

      </div>
    </section>
  );
}
