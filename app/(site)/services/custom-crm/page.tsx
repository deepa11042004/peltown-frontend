"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "../service";

function CustomCrmPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["custom-crm"]}
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
        showComparisonTable={true}
      />
      <FAQSec />
    </>
  );
}

export default CustomCrmPage;
