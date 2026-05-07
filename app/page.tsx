import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoMarquee from "@/components/LogoMarquee";
import SectionShift from "@/components/SectionShift";
import FeaturesTabs from "@/components/FeaturesTabs";
import AIAgents from "@/components/AIAgents";
import Integrations from "@/components/Integrations";
import CustomerStories from "@/components/CustomerStories";
import LatestUpdates from "@/components/LatestUpdates";
import FAQ from "@/components/FAQ";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import WatchDemoFloat from "@/components/WatchDemoFloat";

export default function HomePage() {
  return (
    <main>
      <AnnouncementBar />
      <Navbar />
      <Hero />
      <LogoMarquee />
      <SectionShift />
      <FeaturesTabs />
      <AIAgents />
      <Integrations />
      <CustomerStories />
      <LatestUpdates />
      <FAQ />
      <ClosingCTA />
      <Footer />
      <WatchDemoFloat />
    </main>
  );
}
