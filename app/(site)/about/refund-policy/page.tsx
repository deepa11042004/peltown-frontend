import RefundSec from "@/Components/About/Refund/RefundSec";
import Heading from "@/Components/Heading";

function RefundPolicyPage() {
  return (
    <>
      <Heading
        theme="black"
        tagline="Legal"
        title="Refund Policy"
        description="Our policy regarding refunds, cancellations, and service agreements."
      />
      <RefundSec />
    </>
  );
}

export default RefundPolicyPage;
