import Navbar from "@/components/restaurant/Navbar";
import HeroSection from "@/components/restaurant/HeroSection";
import AboutSection from "@/components/restaurant/AboutSection";
import WhyDineSection from "@/components/restaurant/WhyDineSection";
import MenuSection from "@/components/restaurant/MenuSection";
import GallerySection from "@/components/restaurant/GallerySection";
import ReservationSection from "@/components/restaurant/ReservationSection";
import ContactSection from "@/components/restaurant/ContactSection";
import Footer from "@/components/restaurant/Footer";
import CartDrawer from "@/components/restaurant/CartDrawer";
import WhatsAppButton from "@/components/restaurant/WhatsAppButton";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <AboutSection />
    <WhyDineSection />
    <MenuSection />
    <GallerySection />
    <ReservationSection />
    <ContactSection />
    <Footer />
    <CartDrawer />
    <WhatsAppButton />
  </div>
);

export default Index;
