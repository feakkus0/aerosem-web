import Hero from "@/components/sections/Hero";
import TrustedBy from "@/components/sections/TrustedBy";

import WhyChoose from "@/components/sections/WhyChoose";
import ProductSpotlight from "@/components/sections/ProductSpotlight";
import { Reveal } from "@/components/ui/Reveal";

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal width="100%">
        <TrustedBy />
      </Reveal>

      <Reveal width="100%">
        <WhyChoose />
      </Reveal>
      <Reveal width="100%">
        <ProductSpotlight />
      </Reveal>
    </>
  );
}
