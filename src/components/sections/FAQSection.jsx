import React from 'react';
import SectionHeading from '../ui/SectionHeading';
import AccordionFAQ from '../ui/AccordionFAQ';
import './FAQSection.css';

export default function FAQSection({ isBrandPage = false }) {
  const teenFaqs = [
    {
      question: 'Who can register on Funngro?',
      answer: 'Any teen aged 14 to 19 with a passion to learn and earn online! All you need is parental approval to complete onboarding and start tasks.'
    },
    {
      question: 'How do I get paid?',
      answer: 'Once your task is completed and verified by the brand, the reward is instantly credited to your wallet in the Funngro app, which can be withdrawn directly to your parent\'s or your personal UPI ID.'
    },
    {
      question: 'Do I need any prior experience?',
      answer: 'Absolutely not! Funngro is designed to help you get your very first experience. We provide detailed learning guides, checklists, and evaluations to prep you for the live tasks.'
    },
    {
      question: 'Are there any registration fees?',
      answer: 'Funngro is 100% free, forever. We never charge teens for registration, skill tests, or payouts.'
    }
  ];

  const brandFaqs = [
    {
      question: 'How do you ensure brand safety?',
      answer: 'Every piece of content and task submission is fully reviewed and verified by our automated pipelines and expert moderation teams before going live, guaranteeing total brand compliance.'
    },
    {
      question: 'Can we target specific colleges or locations?',
      answer: 'Yes! Our advanced campaign dashboards let you filter target demographics by age, gender, exact interests, locations, and specific colleges or universities across India.'
    },
    {
      question: 'How long does a campaign take to launch?',
      answer: 'You can launch a basic campaign in under 15 minutes! Once you submit your campaign brief, our matching algorithms go to work to connect you with verified creators within hours.'
    },
    {
      question: 'What is the CPA/CPC model?',
      answer: 'We operate on a pure performance model. You only pay for successful task completions, app downloads, or leads generated, ensuring maximum ROI for your marketing budget.'
    }
  ];

  const activeFaqs = isBrandPage ? brandFaqs : teenFaqs;

  return (
    <section id="faq" className="faq-section section-padding">
      <div className="container">
        
        <SectionHeading 
          subtitle="Common Questions" 
          title="Frequently Asked Questions" 
          highlightText="Asked Questions"
        />

        <AccordionFAQ faqs={activeFaqs} />

      </div>
    </section>
  );
}
