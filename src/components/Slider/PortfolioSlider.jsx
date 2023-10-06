import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';

export default function PortfolioSlider() {
  const portfolioData = [
    {
      title:'The Colloseum  ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_1.jpeg'
    },
    {
      title:'Ram Mandir ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_2.jpeg'
    },
    {
      title:'Zee Business ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_0.jpg'
    },
    {
      title:'W3 Summit ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg'
    },
    {
      title:'Sportsverse  ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg'
    }
    ,{
      title:'Akshaya NFTs  ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg'
    },
    {
      title:'Kyyte  ',
      subtitle:'See Details',
      href:'/portfolio/portfolio-details',
      src:'/images/portfolio_3.jpeg'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-24'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
