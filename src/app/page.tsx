import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ClinicSection from "@/components/ClinicSection";
import SocialProof from "@/components/SocialProof";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ClinicSection />
        <SocialProof />
        <LocationSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
