import ContactSec from "@/Components/About/Contact/ContactSec";
import Heading from "@/Components/Heading";

function LocationsPage() {
  return (
    <>
      <Heading
        theme="black"
        tagline="Locations"
        title="Our Offices & Presence"
        description="Find our physical office addresses, regional contact points, and operating regions."
      />
      <ContactSec />
    </>
  );
}

export default LocationsPage;
