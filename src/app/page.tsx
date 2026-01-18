import HeroSection from "@/components/HeroSection";
import CountdownTimer from "@/components/CountdownTimer";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import BookingSection from "@/components/BookingSection";
import InstagramFeed from "@/components/InstagramFeed";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <CountdownTimer />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <FAQSection />
      <BookingSection />
      <InstagramFeed />
      <Footer />
    </>
  );
}

