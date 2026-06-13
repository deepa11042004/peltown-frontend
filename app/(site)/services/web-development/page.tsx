"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "../service";

function WebDevelopmentPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["web-development"]}
        showHero={true}
        showDefinition={true}
        showAudience={true}
        showIndustryDeepDives={true}
        showFeatures={true}
        showAiAdvantage={true}
        showTechStackAccordion={true}
        showDeepDiveTabs={true}
        showProcess={true}
        showLocalDominance={true}
        showCostTable={true}
        showComparisonTable={true}
      />
      <FAQSec />
    </>
  );
}

export default WebDevelopmentPage;
