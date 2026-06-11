import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturesShell from "@/components/features/FeaturesShell";

export const metadata: Metadata = {
  title: "Features — iNGEN",
  description:
    "Two AI agents, one proof-first workspace. Aristotle plans the work; Sherlock and Columbus verify the evidence. Built for startup recruiters and FORGE students.",
};

export default function FeaturesPage() {
  return (
    <main>
      <Navbar />
      <FeaturesShell />
      <Footer />
    </main>
  );
}
