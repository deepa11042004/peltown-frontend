import HowWeDoSec from "@/Components/About/How-we-do/HowWeDoSec";
import Heading from "@/Components/Heading";
function HowWeDoPage() {
  return (
    <>
      <Heading
        theme="black"
        tagline="Our Process"
        title="How We Do It"
        description="A transparent, agile, and results-driven approach to every project."
      />
      <HowWeDoSec />
    </>
  );
}

export default HowWeDoPage;
