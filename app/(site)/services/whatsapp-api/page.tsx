"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";

function WhatsappApiPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["whatsapp-api"]}
        showHero={true}
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

export default WhatsappApiPage;
