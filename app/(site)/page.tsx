import Hero from "@/Components/Home/Home";
import OurModelSec from "@/Components/Home/OurModelSec";
import BrandSec from "@/Components/Home/BrandSec";
import ServiceSec from "@/Components/Home/ServiceSec";
import FAQSec from "@/Components/Home/FAQSec";
import BannerSec from "@/Components/Home/BannerSec";
import Projects from "@/Components/Home/Projects";

function main() {
  return (
    <>
      <Hero />
      <OurModelSec />
      <BrandSec />
      <ServiceSec />
      <Projects/>
      <BannerSec />
      <FAQSec />
    </>
  );
}

export default main;
