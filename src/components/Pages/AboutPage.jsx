import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import FunFact from "../FunFact";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Spacing from "../Spacing";

export default function AboutPage() {
  pageTitle("About");

  const funfaceData = [
    {
      title: "Global Happy Clients",
      factNumber: "100+",
    },
    {
      title: "Project Completed",
      factNumber: "100+",
    },
    {
      title: "Team Members",
      factNumber: "50",
    },
    {
      title: "Digital products",
      factNumber: "10",
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="About Us"
        bgSrc="images/about_hero_bg.jpeg"
        pageLinkText=""
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="We're dedicated to transforming ideas into digital reality"
              subtitle="About us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                We are more than just software developers; we are architects of
                digital innovation, builders of technological solutions, and
                partners in your journey towards success. With a passion for
                pushing boundaries and a commitment to excellence, we craft
                software that transforms ideas into reality, making the complex
                simple and the innovative accessible.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/innova1.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <img
              src="/images/innova2.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <img
              src="/images/innova3.jpeg"
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our Core Values"
          subtitle="Our core values revolve around innovation, excellence, integrity, and unwavering customer focus."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <img
                  src="/images/innova3.jpeg"
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Our Commitment to Your Success"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Clients choose us because we offer more than just software
                development; we provide dedicated partnerships in turning
                digital dreams into reality. Our commitment to excellence,
                innovation, and client-centricity sets us apart. We pride
                ourselves on delivering high-quality solutions, staying at the
                forefront of technology, and operating with honesty and
                integrity in every interaction. With a track record of success
                and a team of skilled professionals.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We're your trusted choice for software development. Discover why
                businesses consistently turn to us as their preferred technology
                partner
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Let's huddle"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
