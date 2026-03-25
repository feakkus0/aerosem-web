import HeroHome from "@/components/sections/home/HeroHome";
import VisionHome from "@/components/sections/home/VisionHome";
import ShowcaseHome from "@/components/sections/home/ShowcaseHome";
import CtaHome from "@/components/sections/home/CtaHome";

export default function Home() {
  return (
    <main className="bg-[#FAFAF7] min-h-screen">
      <HeroHome />
      <VisionHome />
      <ShowcaseHome />
      <CtaHome />
    </main>
  );
}
