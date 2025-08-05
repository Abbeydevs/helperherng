import AboutPreview from "@/components/sections/about-preview";
import CallToAction from "@/components/sections/call-to-action";
import Hero from "@/components/sections/hero";
import ServicesPreview from "@/components/sections/services-preview";

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <CallToAction />
    </main>
  );
}
