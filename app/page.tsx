import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import LiveDemo from "@/components/sections/LiveDemo";
import GlobeWaitlist from "@/components/GlobeWaitlist";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <HowItWorks />
      <LiveDemo />
      <GlobeWaitlist />
      <FAQ />
      <Footer />
    </main>
  );
}
