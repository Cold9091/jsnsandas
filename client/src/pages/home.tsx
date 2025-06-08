import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import Services from "@/components/sections/services";
import Process from "@/components/sections/process";
import Areas from "@/components/sections/areas";
import Stats from "@/components/sections/stats";
import Testimonials from "@/components/sections/testimonials";
import Quote from "@/components/sections/quote";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden apple-particles">
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
      <Quote />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
