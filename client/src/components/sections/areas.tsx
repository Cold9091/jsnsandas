import {
  Building,
  Home,
  Users,
  Utensils,
  University,
  Store,
  Warehouse,
  Bed,
  Leaf,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Areas() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [highlightRef, highlightInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const areas = [
    { icon: Building2, title: "Hospitais" },
    { icon: Building, title: "Escritórios" },
    { icon: Home, title: "Moradias" },
    { icon: Building, title: "Apartamentos" },
    { icon: Users, title: "Condomínios" },
    { icon: Utensils, title: "Restaurantes" },
    { icon: University, title: "Bancos" },
    { icon: Store, title: "Lojas" },
    { icon: Warehouse, title: "Armazéns" },
    { icon: Bed, title: "Hotéis" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section id="areas" className="py-32 px-6">
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
            Desinfestação em Toda Luanda
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white mx-auto rounded-full"
          />
        </motion.div>

        {/* Special highlight */}
        <motion.div
          ref={highlightRef}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={highlightInView ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0, scale: 0.9, y: 40 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="inline-block apple-glass rounded-3xl p-10 max-w-2xl">
            <motion.div
              animate={highlightInView ? { 
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              } : {}}
              transition={{ 
                duration: 2,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <Leaf className="h-16 w-16 mx-auto mb-6" />
            </motion.div>
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '-0.022em'
              }}
            >
              Realizamos desinfestação sem cheiro!
            </h3>
            <p 
              className="apple-body"
              style={{
                fontSize: '19px',
                lineHeight: 1.42,
                letterSpacing: '-0.022em'
              }}
            >
              Tecnologia avançada para tratamentos inodoros e seguros
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"
        >
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center apple-glass rounded-2xl p-6 cursor-pointer"
                whileHover={{ 
                  scale: 1.1,
                  y: -8,
                  transition: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  whileHover={{ 
                    scale: 1.3,
                    rotate: 15,
                    transition: { duration: 0.2 }
                  }}
                >
                  <IconComponent 
                    className="h-10 w-10 mx-auto mb-4"
                    style={{ strokeWidth: 1.5 }}
                  />
                </motion.div>
                <h4 
                  className="font-medium"
                  style={{
                    fontSize: '17px',
                    fontWeight: 500,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {area.title}
                </h4>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
