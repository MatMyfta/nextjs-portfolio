import HeroSection from "./components/HeroSection";
import StatsSection from "./components/StatsSection";
import ServicesSection from "./components/ServicesSection";
import EmailSection from "./components/EmailSection";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <EmailSection />
    </main>
  );
}
