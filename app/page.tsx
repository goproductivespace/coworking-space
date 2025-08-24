import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import FeaturesSection from "@/components/features-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <PricingSection />
      <FeaturesSection />
      <TestimonialsCarousel />
      <ContactSection />
      <Footer />
    </main>
  );
}
