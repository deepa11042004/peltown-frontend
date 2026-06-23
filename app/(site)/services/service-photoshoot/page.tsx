"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";
import PhotoHero from "@/Components/Services/Photo/Photohero";

function ServicePhotoshootPage() {
  return (
    <>
      <PhotoHero/>
    
      <WebSec
        config={SERVICES_CONTENT["service-photoshoot"]}
        showHero={false}
        showDefinition={true}
        showAudience={true}
        showIndustryDeepDives={false}
        showFeatures={true}
        showAiAdvantage={false}
        showTechStackAccordion={false}
        showDeepDiveTabs={true}
        showProcess={true}
        showLocalDominance={false}
        showCostTable={true}
        showComparisonTable={true}
      />
      <FAQSec />
    </>
  );
}

export default ServicePhotoshootPage;
