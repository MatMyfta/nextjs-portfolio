import Image from "next/image";
import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import AboutSection from "./components/AboutSection";
import EmailSection from "./components/EmailSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mx-auto px-8 md:px-12 py-4 mt-48">
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <AboutSection />
        <EmailSection />
      </div>
    </main>
  );
}
