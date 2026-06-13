"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "../service";

function SocialMediaPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["social-media"]}
        showHero={true}
        showDefinition={false}
        showAudience={true}
        showIndustryDeepDives={false}
        showFeatures={false}
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

export default SocialMediaPage;
