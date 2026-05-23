import React from 'react';
import SEO from '../components/layout/SEO';
import { SEO_DATA } from '../utils/seo';
import HeroSection from '../components/sections/HeroSection';
import SharkTankBanner from '../components/sections/SharkTankBanner';
import Marquee from '../components/ui/Marquee';
import HowToEarn from '../components/sections/HowToEarn';
import Categories from '../components/sections/Categories';
import GrowthSection from '../components/sections/GrowthSection';
import Testimonials from '../components/sections/Testimonials';
import FAQSection from '../components/sections/FAQSection';
import CTABanner from '../components/sections/CTABanner';

export default function Home() {
  const brandLogos = [
    'HDFC Bank', 'Shadow Ninja', 'Tofu', 'Durex', 'BoAt', 'Mamaearth', 'Myntra', 'Snitch'
  ];

  return (
    <>
      <SEO {...SEO_DATA.home} />
      <HeroSection />
      <SharkTankBanner />
      <Marquee items={brandLogos} />
      <HowToEarn />
      <Categories />
      <GrowthSection />
      <Testimonials />
      <FAQSection />
      <CTABanner />
    </>
  );
}
