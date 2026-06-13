import CostSec from "@/Components/About/Cost/CostSec";
import Heading from "@/Components/Heading";

function CostCalculatorPage() {
  return (
    <>
      <Heading
        theme="black"
        tagline="Estimation"
        title="Cost Calculator"
        description="Estimate the development cost for your next app, web portal, or custom software solution."
      />
      <CostSec />
    </>
  );
}

export default CostCalculatorPage;
