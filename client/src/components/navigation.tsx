import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { scrollToSection } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";
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

  const handleCallClick = () => {
    window.location.href = "tel:+244940354740";
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
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Centered Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 text-blue-800 dark:text-blue-200 hover:text-blue-900 dark:hover:text-blue-100"
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

          {/* Theme Toggle & Call Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={handleCallClick}
              className="flex items-center px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-medium transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                background: 'var(--jsm-secondary)',
                fontSize: '16px',
                fontWeight: 500,
                letterSpacing: '-0.02em'
              }}
            >
              <Phone className="h-4 w-4 mr-2" />
              Ligar Agora
            </button>
          </div>

          {/* Theme Toggle & Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 rounded-full hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors duration-300 text-blue-800 dark:text-blue-200"
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
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-2xl mx-4 mb-4 border border-blue-200 dark:border-blue-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 text-blue-800 dark:text-blue-200"
                  style={{
                    fontSize: '17px',
                    fontWeight: 400,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.label}
                </button>
              ))}
              
              {/* Mobile Call Button */}
              <div className="pt-4 border-t border-blue-200 dark:border-blue-700">
                <button
                  onClick={handleCallClick}
                  className="flex items-center justify-center w-full px-6 py-3 text-white rounded-xl font-medium transition-all duration-300 shadow-lg"
                  style={{
                    background: 'var(--jsm-secondary)',
                    fontSize: '16px',
                    fontWeight: 500,
                    letterSpacing: '-0.02em'
                  }}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Ligar Agora
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}