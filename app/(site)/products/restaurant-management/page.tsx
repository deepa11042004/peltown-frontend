"use client";

import React from "react";
import ProductHero from "@/Components/Product/ProductHero";
import ProductIntro from "@/Components/Product/ProductIntro";
import FeaturedSec from "@/Components/Product/FeaturedSec";
import DetailSec from "@/Components/Product/DetailSec";
import FAQSec from "@/Components/Home/FAQSec";
import WhyChooseUs from "@/Components/Product/WhyChooseUs";
import IndustriesServe from "@/Components/Product/IndustriesServe";
import PricingSec from "@/Components/Product/PricingSec";
import DevProcess from "@/Components/Product/DevProcess";
import { 
  PRODUCTS_HERO_CONTENT, 
  PRODUCTS_FEATURED_CONTENT, 
  PRODUCTS_DETAIL_CONTENT,
  PRODUCTS_WHY_CHOOSE_US_CONTENT,
  PRODUCTS_INDUSTRIES_SERVE_CONTENT,
  PRODUCTS_PRICING_CONTENT,
  PRODUCTS_INTRO_CONTENT
} from "@/Data/products";

function ProductPage() {
  const whyChooseUsData = PRODUCTS_WHY_CHOOSE_US_CONTENT["restaurant-management"];
  const industriesData = PRODUCTS_INDUSTRIES_SERVE_CONTENT["restaurant-management"];
  const pricingData = PRODUCTS_PRICING_CONTENT["restaurant-management"];
  const introData = PRODUCTS_INTRO_CONTENT["restaurant-management"];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <ProductHero hero={PRODUCTS_HERO_CONTENT["restaurant-management"]} />

      {/* Introduction Section */}
      {introData && (
        <ProductIntro
          title={introData.title}
          subtitle={introData.subtitle}
          description={introData.description}
          bullets={introData.bullets}
          finalText={introData.finalText}
        />
      )}

      {/* Detail Section */}
      <DetailSec detail={PRODUCTS_DETAIL_CONTENT["restaurant-management"]} />

      {/* Featured Section */}
      <FeaturedSec featured={PRODUCTS_FEATURED_CONTENT["restaurant-management"]} />

      {/* Why Choose Us Section */}
      {whyChooseUsData && (
        <WhyChooseUs
          title={whyChooseUsData.title}
          subtitle={whyChooseUsData.subtitle}
          desc={whyChooseUsData.desc}
          items={whyChooseUsData.items}
        />
      )}

      {/* Industries We Serve Section */}
      {industriesData && (
        <IndustriesServe
          title={industriesData.title}
          subtitle={industriesData.subtitle}
          desc={industriesData.desc}
          items={industriesData.items}
        />
      )}

      {/* Development Process Section */}
      <DevProcess />

      {/* Pricing Section */}
      {pricingData && (
        <PricingSec
          title={pricingData.title}
          subtitle={pricingData.subtitle}
          desc={pricingData.desc}
          plans={pricingData.plans}
        />
      )}

      {/* FAQ Section */}
      <FAQSec tag="Restaurant FAQs" />
    </div>
  );
}

export default ProductPage;
