import ProductHero from "@/Components/Product/ProductHero";
import FeaturedSec from "@/Components/Product/FeaturedSec";
import DetailSec from "@/Components/Product/DetailSec";
import React from "react";
import { PRODUCTS_HERO_CONTENT, PRODUCTS_FEATURED_CONTENT, PRODUCTS_DETAIL_CONTENT } from "../products";

function ProductPage() {
  return (
    <>
      <ProductHero hero={PRODUCTS_HERO_CONTENT["restaurant-management"]} />
      <DetailSec detail={PRODUCTS_DETAIL_CONTENT["restaurant-management"]} />
      <FeaturedSec featured={PRODUCTS_FEATURED_CONTENT["restaurant-management"]} />
    </>
  );
}

export default ProductPage;
