import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import Hero7 from '../Hero/Hero7';

export default function CaseStudyShowcaseHome() {
  pageTitle('Case Study Showcase');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const heroSocialLinks = [
    {
      name: 'Behance',
      links: '/',
    },
    {
      name: 'Twitter',
      links: '/',
    },
  ];

  const showcaseData = [
    {
      title: 'Your Path to <br /> Software Success <br /> Starts Here',
      imgUrl: '/images/wire.webp',
      href: '/case-study/case-study-details',
      button: 'Get a quote',
    },
    {
      title: 'One Line of Code <br /> at a Time',
      imgUrl: '/images/code.jpeg',
      href: '/case-study/case-study-details',
      button: 'About us',
    },
    {
      title: 'What We Do Best !!!',
      imgUrl: '/images/services.jpeg',
      href: '/case-study/case-study-details',
      button: 'Our Services',
    },
    {
      title: 'Have Questions?',
      imgUrl: '/images/triangle.jpg',
      href: '/case-study/case-study-details',
      button: 'Contact us',
    },
    // {
    //   title: 'Uber food app <br />case study',
    //   imgUrl: '/images/slider_9.jpeg',
    //   href: '/case-study/case-study-details',
    //   button: 'Get a quote',
    // },
  ];
  return (
    <>
      <Hero7
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
    </>
  );
}
