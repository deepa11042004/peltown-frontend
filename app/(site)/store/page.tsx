import Heading from "@/Components/Heading";
import StoreSec from "@/Components/Store/StoreSec";
import React from "react";

function StorePage() {
  return (
    <>
      <Heading
        tagline="Store"
        title="Explore Store"
        description="Discover the best store curated by Peltown."
      />
      <StoreSec />
    </>
  );
}

export default StorePage;
