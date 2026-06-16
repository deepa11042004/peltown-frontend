"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";

function ServiceBrandingPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["service-branding"]}
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
      />
      <FAQSec />
    </>
  );
}

export default ServiceBrandingPage;
