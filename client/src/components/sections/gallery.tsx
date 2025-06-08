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
      category: "Residencial"
    },
    {
      type: "image", 
      title: "Desinfestação Residencial - Depois",
      description: "Resultado após tratamento completo",
      category: "Residencial"
    },
    {
      type: "image",
      title: "Controle de Roedores - Restaurante",
      description: "Tratamento profissional em estabelecimento comercial",
      category: "Comercial"
    },
    {
      type: "video",
      title: "Processo de Fumigação",
      description: "Demonstração da técnica de fumigação segura",
      category: "Processo"
    },
    {
      type: "image",
      title: "Desinfecção Hospitalar",
      description: "Desinfecção profissional em ambiente hospitalar", 
      category: "Hospitalar"
    },
    {
      type: "image",
      title: "Tratamento de Cupins",
      description: "Eliminação de cupins em estrutura de madeira",
      category: "Residencial"
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
                {/* Placeholder for actual media */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {item.type === "video" ? (
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </motion.div>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📷</span>
                    </div>
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
                  <span className="text-8xl opacity-20">
                    {filteredItems[selectedMedia]?.type === "video" ? "🎥" : "📷"}
                  </span>
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