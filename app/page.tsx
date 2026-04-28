import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import EthosStrip from "@/components/EthosStrip";
import MenuSection from "@/components/MenuSection";
import EventsSection from "@/components/EventsSection";
import BokkeSection from "@/components/BokkeSection";
import GallerySection from "@/components/GallerySection";
import BoardGamesCallout from "@/components/BoardGamesCallout";
import AboutSection from "@/components/AboutSection";
import ReservationSection from "@/components/ReservationSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex flex-col flex-1">
      <Navbar />
      <HeroSection />
      <EthosStrip />
      <MenuSection />
      <EventsSection />
      <BokkeSection />
      <GallerySection />
      <BoardGamesCallout />
      <AboutSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}
