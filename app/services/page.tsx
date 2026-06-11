import Heading from "@/Components/Heading";
import FAQSec from "@/Components/Home/FAQSec";
import Services from "@/Components/Services/ServiceSec";

function ServicesPage() {
  return (
    <>
      <Heading
        tagline="The Digital Ecosystem"
        title="Our Expertise"
        description="Comprehensive IT solutions enhanced by AI. From development and marketing to business studio branding and seamless communication."
      />
      <Services />
      <FAQSec />
    </>
  );
}

export default ServicesPage;
