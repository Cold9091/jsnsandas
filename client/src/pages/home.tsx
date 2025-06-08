import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Areas from "@/components/sections/areas";
import Quote from "@/components/sections/quote";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SmoothScroll />
      <Navigation />
      <Hero />
      <About />
      <Services />
      <Areas />
      <Quote />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
