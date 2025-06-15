import { useState } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Features from "@/components/sections/features";
import Services from "@/components/sections/services";
import Products from "@/components/sections/products";
import Process from "@/components/sections/process";
import Areas from "@/components/sections/areas";
import Stats from "@/components/sections/stats";

import Gallery from "@/components/sections/gallery";


import Quote from "@/components/sections/quote";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import SmoothScroll from "@/components/smooth-scroll";
import ScrollProgress from "@/components/scroll-progress";
import BackToTop from "@/components/back-to-top";
import LoadingScreen from "@/components/sections/loading-screen";
import SEOHead from "@/components/seo-head";
import PerformanceOptimizer from "@/components/performance-optimizer";
import BreadcrumbsSchema from "@/components/breadcrumbs-schema";
import FinalSEOBoost from "@/components/final-seo-boost";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden apple-particles">
      <SEOHead />
      <ScrollProgress />
      <SmoothScroll />
      <Navigation />
      <Hero />
      <Features />
      <About />
      <Services />
      <Products />
      <Process />
      <Areas />
      <Stats />

      <Gallery />

      <Quote />
      <Contact />
      <Footer />
      <WhatsAppFloat />
      <BackToTop />
    </div>
  );
}
