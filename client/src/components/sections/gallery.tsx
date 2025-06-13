import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Play } from "lucide-react";

export default function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const galleryItems = [
    {
      type: "image",
      title: "Desinfestação Residencial - Antes",
      description: "Casa com infestação de baratas em Luanda",
      category: "Residencial",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#8B4513"/>
        <rect x="50" y="50" width="300" height="200" fill="#D2691E" stroke="#654321" stroke-width="2"/>
        <rect x="70" y="80" width="80" height="60" fill="#4169E1" stroke="#000080" stroke-width="1"/>
        <rect x="250" y="80" width="80" height="60" fill="#4169E1" stroke="#000080" stroke-width="1"/>
        <rect x="160" y="200" width="80" height="50" fill="#8B4513" stroke="#654321" stroke-width="2"/>
        <circle cx="200" cy="225" r="3" fill="#FFD700"/>
        <circle cx="100" cy="180" r="4" fill="#8B4513"/>
        <circle cx="120" cy="190" r="3" fill="#8B4513"/>
        <circle cx="110" cy="200" r="4" fill="#8B4513"/>
        <circle cx="280" cy="170" r="3" fill="#8B4513"/>
        <circle cx="300" cy="180" r="4" fill="#8B4513"/>
        <text x="200" y="280" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Infestação Detectada</text>
      </svg>`
    },
    {
      type: "image", 
      title: "Desinfestação Residencial - Depois",
      description: "Resultado após tratamento completo",
      category: "Residencial",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#87CEEB"/>
        <rect x="50" y="50" width="300" height="200" fill="#F5DEB3" stroke="#DEB887" stroke-width="2"/>
        <rect x="70" y="80" width="80" height="60" fill="#87CEFA" stroke="#4682B4" stroke-width="1"/>
        <rect x="250" y="80" width="80" height="60" fill="#87CEFA" stroke="#4682B4" stroke-width="1"/>
        <rect x="160" y="200" width="80" height="50" fill="#CD853F" stroke="#8B4513" stroke-width="2"/>
        <circle cx="200" cy="225" r="3" fill="#FFD700"/>
        <circle cx="100" cy="150" r="8" fill="#32CD32"/>
        <path d="M95 150 L98 153 L105 146" stroke="white" stroke-width="2" fill="none"/>
        <circle cx="300" cy="150" r="8" fill="#32CD32"/>
        <path d="M295 150 L298 153 L305 146" stroke="white" stroke-width="2" fill="none"/>
        <text x="200" y="280" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Ambiente Limpo</text>
      </svg>`
    },
    {
      type: "image",
      title: "Controle de Roedores - Restaurante",
      description: "Tratamento profissional em estabelecimento comercial",
      category: "Comercial",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#2F4F4F"/>
        <rect x="30" y="50" width="340" height="200" fill="#F5F5DC" stroke="#D3D3D3" stroke-width="2"/>
        <rect x="50" y="80" width="60" height="80" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
        <rect x="150" y="80" width="60" height="80" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
        <rect x="250" y="80" width="60" height="80" fill="#C0C0C0" stroke="#808080" stroke-width="1"/>
        <rect x="60" y="180" width="40" height="40" fill="#FF6347" stroke="#DC143C" stroke-width="1"/>
        <rect x="160" y="180" width="40" height="40" fill="#FF6347" stroke="#DC143C" stroke-width="1"/>
        <rect x="260" y="180" width="40" height="40" fill="#FF6347" stroke="#DC143C" stroke-width="1"/>
        <rect x="320" y="100" width="30" height="120" fill="#32CD32" stroke="#228B22" stroke-width="2"/>
        <text x="335" y="95" text-anchor="middle" fill="white" font-size="10" font-weight="bold">CONTROLE</text>
        <text x="200" y="280" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Cozinha Protegida</text>
      </svg>`
    },
    {
      type: "image",
      title: "Processo de Fumigação",
      description: "Demonstração da técnica de fumigação segura",
      category: "Processo",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#4682B4"/>
        <rect x="50" y="100" width="300" height="150" fill="#D3D3D3" stroke="#A9A9A9" stroke-width="2"/>
        <rect x="100" y="150" width="200" height="80" fill="#F0F0F0" stroke="#C0C0C0" stroke-width="1"/>
        <circle cx="150" cy="50" r="20" fill="#FFD700"/>
        <circle cx="250" cy="50" r="20" fill="#FFD700"/>
        <path d="M150 70 Q200 90 250 70" stroke="#90EE90" stroke-width="3" fill="none"/>
        <circle cx="170" cy="80" r="3" fill="#90EE90" opacity="0.7"/>
        <circle cx="190" cy="85" r="4" fill="#90EE90" opacity="0.6"/>
        <circle cx="210" cy="82" r="3" fill="#90EE90" opacity="0.8"/>
        <circle cx="230" cy="78" r="4" fill="#90EE90" opacity="0.5"/>
        <rect x="180" y="200" width="40" height="30" fill="#8B4513" stroke="#654321" stroke-width="1"/>
        <text x="200" y="280" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Fumigação Ativa</text>
      </svg>`
    },
    {
      type: "image",
      title: "Desinfecção Hospitalar",
      description: "Desinfecção profissional em ambiente hospitalar", 
      category: "Hospitalar",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#F0F8FF"/>
        <rect x="50" y="50" width="300" height="200" fill="#FFFFFF" stroke="#E0E0E0" stroke-width="2"/>
        <rect x="80" y="100" width="60" height="100" fill="#F5F5F5" stroke="#D3D3D3" stroke-width="1"/>
        <rect x="180" y="100" width="60" height="100" fill="#F5F5F5" stroke="#D3D3D3" stroke-width="1"/>
        <rect x="280" y="100" width="50" height="100" fill="#F5F5F5" stroke="#D3D3D3" stroke-width="1"/>
        <rect x="70" y="80" width="80" height="15" fill="#00CED1" stroke="#008B8B" stroke-width="1"/>
        <rect x="170" y="80" width="80" height="15" fill="#00CED1" stroke="#008B8B" stroke-width="1"/>
        <rect x="270" y="80" width="60" height="15" fill="#00CED1" stroke="#008B8B" stroke-width="1"/>
        <circle cx="200" cy="230" r="15" fill="#FF6347"/>
        <path d="M193 230 L200 237 L207 223" stroke="white" stroke-width="2" fill="none"/>
        <text x="200" y="280" text-anchor="middle" fill="#333" font-size="12" font-weight="bold">Ambiente Esterilizado</text>
      </svg>`
    },
    {
      type: "image",
      title: "Tratamento de Cupins",
      description: "Eliminação de cupins em estrutura de madeira",
      category: "Residencial",
      svg: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
        <rect width="400" height="300" fill="#8FBC8F"/>
        <rect x="50" y="150" width="300" height="100" fill="#8B4513" stroke="#654321" stroke-width="2"/>
        <rect x="80" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="120" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="160" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="200" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="240" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="280" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <rect x="320" y="120" width="20" height="130" fill="#D2691E" stroke="#A0522D" stroke-width="1"/>
        <circle cx="90" cy="180" r="2" fill="#8B4513"/>
        <circle cx="130" cy="190" r="2" fill="#8B4513"/>
        <circle cx="170" cy="185" r="2" fill="#8B4513"/>
        <rect x="150" y="80" width="100" height="30" fill="#32CD32" stroke="#228B22" stroke-width="2"/>
        <text x="200" y="100" text-anchor="middle" fill="white" font-size="10" font-weight="bold">TRATAMENTO APLICADO</text>
        <text x="200" y="280" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Madeira Protegida</text>
      </svg>`
    }
  ];

  const categories = ["Todos", "Residencial", "Comercial", "Hospitalar", "Processo"];
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredItems = activeCategory === "Todos" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 
            className="apple-headline mb-6"
            style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
          >
            Nossos Trabalhos
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="apple-subheadline mt-8 max-w-3xl mx-auto"
          >
            Exemplos reais dos nossos serviços de desinfestação e controle de pragas
          </motion.p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-white text-[var(--jsn-primary)] font-semibold"
                  : "apple-glass hover:bg-white/10"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{
                fontSize: '17px',
                fontWeight: activeCategory === category ? 600 : 400,
                letterSpacing: '-0.022em'
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              layout
              className="apple-glass rounded-3xl overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.03, y: -8 }}
              onClick={() => setSelectedMedia(index)}
            >
              {/* Media Container */}
              <div className="relative aspect-[4/3] bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                {/* Actual SVG Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </motion.div>
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: item.svg || '' }}
                    />
                  )}
                </div>
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-sm font-medium bg-white/20 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  className="text-lg font-semibold mb-2"
                  style={{
                    fontSize: '19px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="apple-body opacity-80"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.5,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedMedia !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedMedia(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[80vh] m-4"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedMedia(null)}
                className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <div className="apple-glass rounded-3xl p-8">
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl flex items-center justify-center mb-6">
                  {filteredItems[selectedMedia]?.type === "video" ? (
                    <span className="text-8xl opacity-20">🎥</span>
                  ) : (
                    <div 
                      className="w-full h-full flex items-center justify-center"
                      dangerouslySetInnerHTML={{ __html: filteredItems[selectedMedia]?.svg || '' }}
                    />
                  )}
                </div>
                
                <h3 
                  className="text-2xl font-semibold mb-4"
                  style={{
                    fontSize: '24px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {filteredItems[selectedMedia]?.title}
                </h3>
                <p 
                  className="apple-body"
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.5,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {filteredItems[selectedMedia]?.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="apple-glass rounded-3xl p-8 max-w-2xl mx-auto">
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '-0.022em'
              }}
            >
              Pronto para ver resultados assim?
            </h3>
            <p 
              className="apple-body mb-8"
              style={{
                fontSize: '19px',
                lineHeight: 1.42,
                letterSpacing: '-0.022em'
              }}
            >
              Entre em contacto connosco e receba uma avaliação gratuita do seu caso
            </p>
            <motion.button
              onClick={() => window.open("https://wa.me/244939103175", "_blank")}
              className="apple-button-primary apple-button-enhanced"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Solicitar Avaliação Gratuita
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}