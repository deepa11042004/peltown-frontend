import About from "@/Components/About/AboutSec";
import Heading from "@/Components/Heading";
import FAQSec from "@/Components/Home/FAQSec";
function AboutPage() {
  return (
    <>
      <Heading
        theme="black"
        tagline="Since 2020"
        title="About PELTOWN"
        description="We are a full-service IT factory dedicated to transforming ideas into scalable, end-to-end digital ecosystems."
      />
      <About />
      <FAQSec />
    </>
  );
}

export default AboutPage;
