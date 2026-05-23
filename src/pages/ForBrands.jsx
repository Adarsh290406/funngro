import React from 'react';
import SEO from '../components/layout/SEO';
import { SEO_DATA } from '../utils/seo';
import BrandsHero from '../components/sections/for-brands/BrandsHero';
import WhyBrands from '../components/sections/for-brands/WhyBrands';
import BrandCapabilities from '../components/sections/for-brands/BrandCapabilities';
import BrandPricing from '../components/sections/for-brands/BrandPricing';
import FAQSection from '../components/sections/FAQSection';
import CTABanner from '../components/sections/CTABanner';

export default function ForBrands() {
  return (
    <>
      <SEO {...SEO_DATA.brands} />
      <BrandsHero />
      <WhyBrands />
      <BrandCapabilities />
      <BrandPricing />
      <FAQSection isBrandPage={true} />
      <CTABanner isBrandPage={true} />
    </>
  );
}
