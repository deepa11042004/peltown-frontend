"use client";

import WebSec from "@/Components/Services/Web/WebSec";
import FAQSec from "@/Components/Home/FAQSec";
import { SERVICES_CONTENT } from "@/Data/service";

function EmailSolutionsPage() {
  return (
    <>
      <WebSec
        config={SERVICES_CONTENT["email-solutions"]}
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
      />
      <FAQSec />
    </>
  );
}

export default EmailSolutionsPage;
