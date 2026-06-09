import Heading from "@/Components/Heading";
import FAQSec from "@/Components/Home/FAQSec";
import BannerDetail from "@/Components/Services/BannerDetail";
import LogoBanner from "@/Components/Services/LogoBanner";
import ServiceHero from "@/Components/Services/ServiceHero";
import Services from "@/Components/Services/ServiceSec";
import ServiceFeature from "@/Components/Services/ServiceFeature";
import React from "react";

function ServicesPage() {
  return (
    <>
      <ServiceHero />
      <ServiceFeature />
      <Heading
        tagline="The Digital Ecosystem"
        title="Our Expertise"
        description="Comprehensive IT solutions enhanced by AI. From development and marketing to business studio branding and seamless communication."
      />
      <LogoBanner />
      <BannerDetail />
      <Services />
      <FAQSec />
    </>
  );
}

export default ServicesPage;
