import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants = {
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
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
      style={{ paddingTop: '120px' }}
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-5xl mx-auto text-center"
      >
        <motion.h1
          variants={itemVariants}
          className="apple-headline apple-gradient-text mb-8"
        >
          Desinfestação, desinfecção e Limpeza Profissional
          <br />
          <span style={{ fontWeight: 700 }}>Controle de Pragas 24h em Angola</span>
        </motion.h1>
        
        <motion.p
          variants={itemVariants}
          className="apple-subheadline mb-16 max-w-4xl mx-auto"
        >
          JSM SANDA oferece desinfestação, desratização, limpeza e desinfecção profissional em todo territorio angolano. 
          Eliminação de baratas, ratos, cupins e todas as pragas urbanas e rústica com garantia de resultado.
        </motion.p>
        
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
        >
          <motion.button
            onClick={() => scrollToSection("services")}
            className="apple-button-primary apple-button-enhanced apple-hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Conheça nossos serviços
          </motion.button>
          <motion.button
            onClick={() => scrollToSection("quote")}
            className="apple-button-secondary apple-button-enhanced apple-hover-lift"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicite um orçamento
          </motion.button>
        </motion.div>

        {/* Mission, Vision, Values Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {[
            {
              title: "Missão",
              description: "Proteger o meio ambiente e os espaços afetados por infestações com soluções sustentáveis"
            },
            {
              title: "Visão", 
              description: "Tornar-se referência em serviços de desinfestação em Angola"
            },
            {
              title: "Valores",
              description: "Ética, responsabilidade social, excelência e relacionamento duradouro com a comunidade"
            }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              custom={index}
              className="apple-glass rounded-3xl p-8 text-center apple-hover-lift apple-float"
              style={{ animationDelay: `${index * 0.5}s` }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <h3 
                className="text-xl font-semibold mb-4"
                style={{
                  fontSize: '21px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em'
                }}
              >
                {item.title}
              </h3>
              <p 
                className="apple-body text-center"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.47,
                  letterSpacing: '-0.022em'
                }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
