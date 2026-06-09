import Heading from "@/Components/Heading";
import FAQSec from "@/Components/Home/FAQSec";
import BannerDetail from "@/Components/Services/BannerDetail";
import LogoBanner from "@/Components/Services/LogoBanner";
import Services from "@/Components/Services/ServiceSec";
import React from "react";

function ServicesPage() {
  return (
    <>
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
