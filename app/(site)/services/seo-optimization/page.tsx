"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";

function SeoOptimizationPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["seo-optimization"]}
        showHero={true}
        showDefinition={false}
        showAudience={true}
        showIndustryDeepDives={false}
        showFeatures={true}
        showAiAdvantage={false}
        showTechStackAccordion={false}
        showDeepDiveTabs={false}
        showProcess={false}
        showLocalDominance={false}
        showCostTable={false}
        showComparisonTable={false}
        showLogoBanner={true}
        showBannerDetail={true}
      />
      <FAQSec />
    </>
  );
}

export default SeoOptimizationPage;
