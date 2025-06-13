import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import logoPath from "@assets/286440570_3336173516614824_6308129545469397056_n - Editado_1749777094774.png";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Início" },
    { id: "about", label: "Quem Somos" },
    { id: "services", label: "Serviços" },
    { id: "products", label: "Produtos" },
    { id: "areas", label: "Áreas" },
    { id: "quote", label: "Orçamento" },
    { id: "contact", label: "Contactos" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 apple-nav ${
        isScrolled ? "scrolled" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavClick("home")}
              className="flex items-center"
            >
              <img 
                src={logoPath} 
                alt="JSMSANDA Logo" 
                className="h-12 w-auto"
                style={{ filter: 'drop-shadow(0 0 4px rgba(0, 0, 0, 0.1))' }}
              />
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-gray-100 text-gray-800 hover:text-gray-900"
                  style={{
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full hover:bg-gray-100 transition-colors duration-300 text-gray-800"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-md rounded-2xl mx-4 mb-4 border border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-gray-100 transition-all duration-300 text-gray-800"
                  style={{
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}