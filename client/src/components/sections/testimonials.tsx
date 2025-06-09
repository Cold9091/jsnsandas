import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const testimonials = [
    {
      name: "Ana Silva",
      role: "Proprietária de Restaurante",
      location: "Luanda",
      text: "Excelente serviço! Eliminaram completamente o problema de pragas no nosso restaurante. Equipe muito profissional e produtos sem odor.",
      rating: 5,
      image: "AS"
    },
    {
      name: "João Costa",
      role: "Administrador de Condomínio",
      location: "Ingombota",
      text: "Contratamos a JSM SANDA para desinfestação do condomínio. Resultado impecável e garantia cumprida. Recomendo totalmente!",
      rating: 5,
      image: "JC"
    },
    {
      name: "Maria Santos",
      role: "Gerente de Hotel",
      location: "Maianga",
      text: "Serviço de qualidade superior. Trataram nosso hotel com total discrição e eficiência. Sem interrupção das operações.",
      rating: 5,
      image: "MS"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 1,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-32 px-6 relative">
      {/* Subtle animated background */}
      <motion.div 
        className="absolute inset-0 opacity-10"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
          backgroundSize: '200% 200%'
        }}
      />
      
      <div className="max-w-7xl mx-auto relative">
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
            O que dizem nossos clientes
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white mx-auto rounded-full"
          />
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="apple-glass rounded-3xl p-8 relative overflow-hidden group"
              whileHover={{ 
                scale: 1.02,
                y: -8,
                transition: { duration: 0.4 }
              }}
            >
              {/* Quote icon with subtle animation */}
              <motion.div
                className="absolute top-6 right-6 opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                <Quote className="h-8 w-8" />
              </motion.div>

              {/* Rating stars */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                    transition={{ 
                      delay: 0.8 + (i * 0.1),
                      duration: 0.3,
                      type: "spring"
                    }}
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </motion.div>
                ))}
              </div>

              <p 
                className="apple-body mb-6 italic"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.6,
                  letterSpacing: '-0.022em'
                }}
              >
                "{testimonial.text}"
              </p>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mr-4 border border-white/20">
                  <span 
                    className="text-sm font-semibold"
                    style={{
                      fontSize: '14px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {testimonial.image}
                  </span>
                </div>
                <div>
                  <h4 
                    className="font-semibold"
                    style={{
                      fontSize: '17px',
                      fontWeight: 600,
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    className="apple-body text-sm"
                    style={{
                      fontSize: '15px',
                      opacity: 0.8
                    }}
                  >
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}