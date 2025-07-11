import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { X } from "lucide-react";

export default function Gallery() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [selectedMedia, setSelectedMedia] = useState<number | null>(null);

  const galleryItems = [
    {
      type: "image",
      title: "Equipe Técnica Profissional",
      description: "Profissionais da JSM SANDA preparados para desinfestação",
      category: "Profissional",
      image: "/attached_assets/274850947_2758544324291650_4729739738716685467_n_1749958998174.jpeg"
    },
    {
      type: "image",
      title: "Serviço de Desinfestação Residencial",
      description: "Equipe especializada realizando tratamento em residência",
      category: "Residencial",
      image: "/attached_assets/jsm_desinfestacao_1749958515424_1749958998173.jpeg"
    },
    {
      type: "image",
      title: "Controle de Pragas Comercial",
      description: "Desinfestação profissional em estabelecimento comercial",
      category: "Comercial",
      image: "/attached_assets/jsm_desinfestacao_1749958614430_1749958998144.jpeg"
    },
    {
      type: "image",
      title: "Equipe em Ação - Campo",
      description: "Profissionais da JSM SANDA equipados com EPIs completos",
      category: "Profissional",
      image: "/attached_assets/468222082_1139561631065742_7759769024999292054_n_1749958732190.jpg"
    },
    {
      type: "image",
      title: "Desinfestação em Restaurante",
      description: "Tratamento especializado em estabelecimento alimentício",
      category: "Comercial",
      image: "/attached_assets/474481279_1178157057206199_5459946826216720631_n_1749958748252.jpg"
    },
    {
      type: "image",
      title: "Tratamento de Cozinha Industrial",
      description: "Desinfestação especializada em ambiente industrial",
      category: "Industrial",
      image: "/attached_assets/474464151_1178157053872866_7117392131971112148_n_1749958760903.jpg"
    }
  ];

  const categories = ["Todos", "Profissional", "Comercial", "Industrial", "Residencial"];
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
            style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)',
              background: 'linear-gradient(135deg, var(--jsm-text-warm) 0%, var(--jsm-blue) 50%, var(--jsm-text-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
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
                  ? "text-white font-semibold"
                  : "apple-glass hover:bg-white/10"
              }`}
              style={{
                backgroundColor: activeCategory === category ? 'var(--jsm-blue)' : undefined,
                fontSize: '17px',
                fontWeight: activeCategory === category ? 600 : 400,
                letterSpacing: '-0.022em'
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
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
                <img 
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                
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
                  className="text-xl font-semibold mb-3"
                  style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {item.title}
                </h3>
                <p 
                  className="opacity-80"
                  style={{
                    fontSize: '15px',
                    lineHeight: 1.5,
                    letterSpacing: '-0.016em'
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
                <div className="aspect-video bg-gradient-to-br from-white/10 to-white/5 rounded-2xl overflow-hidden flex items-center justify-center mb-6">
                  <img 
                    src={filteredItems[selectedMedia]?.image}
                    alt={filteredItems[selectedMedia]?.title}
                    className="w-full h-full object-cover"
                  />
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
          transition={{ delay: 0.8, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.a
            href="#quote"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105"
            style={{
              background: 'linear-gradient(135deg, var(--jsm-blue), var(--jsm-blue-dark))',
              fontSize: '17px',
              fontWeight: 600,
              letterSpacing: '-0.022em'
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Orçamento
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}