import TestimonialSec from "@/Components/About/Testimonial/TestimonialSec";
import Heading from "@/Components/Heading";

function TestimonialsPage() {
  return (
    <>
      <Heading
        theme="white"
        tagline="Client Stories"
        title="What Our Clients Say"
        description="Trusted by 1000+ businesses worldwide."
      />
      <TestimonialSec />
    </>
  );
}

export default TestimonialsPage;
