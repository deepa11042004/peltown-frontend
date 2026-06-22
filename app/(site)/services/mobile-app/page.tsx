"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";

function MobileAppPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["mobile-app"]}
        showHero={true}
        showDefinition={true}
        showAudience={true}
        showIndustryDeepDives={false}
        showFeatures={true}
        showAiAdvantage={false}
        showTechStackAccordion={true}
        showDeepDiveTabs={true}
        showProcess={true}
        showLocalDominance={false}
        showCostTable={true}
        showComparisonTable={false}
      />
      <FAQSec />
    </>
  );
}

export default MobileAppPage;
