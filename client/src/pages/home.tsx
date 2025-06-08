import { useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Areas from "@/components/sections/areas";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import Gallery from "@/components/sections/gallery";
import Certifications from "@/components/sections/certifications";
import FAQ from "@/components/sections/faq";
import Quote from "@/components/sections/quote";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import BackToTop from "@/components/back-to-top";
import LoadingScreen from "@/components/sections/loading-screen";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden apple-particles">
      <ScrollProgress />
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Process />
      <Areas />
      <Stats />
      <Testimonials />
      <Gallery />
      <Certifications />
      <FAQ />
      <Quote />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
