import {
  Bug,
  Shield,
  Mouse,
  Zap,
  Cloud,
  SprayCan,
  Fan,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Services() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const services = [
    {
      icon: Bug,
      title: "Desinfestação",
      description:
        "Eliminação completa de pragas urbanas com técnicas modernas e produtos seguros.",
    },
    {
      icon: Shield,
      title: "Desinfecção",
      description:
        "Desinfecção profissional de ambientes para eliminar vírus, bactérias e fungos.",
    },
    {
      icon: Mouse,
      title: "Desratização",
      description:
        "Controle eficaz de roedores com métodos seguros e monitoramento contínuo.",
    },
    {
      icon: Zap,
      title: "Desbaratização",
      description:
        "Eliminação de baratas e outros insetos rasteiros com garantia de resultado.",
    },
    {
      icon: Cloud,
      title: "Fumigação",
      description:
        "Tratamento por fumigação para controle de pragas em espaços fechados.",
    },
    {
      icon: SprayCan,
      title: "Pulverização",
      description:
        "Aplicação localizada de produtos específicos para controle direcionado.",
    },
    {
      icon: Fan,
      title: "Limpeza",
      description:
        "Serviços de limpeza profissional pós-tratamento e manutenção preventiva.",
    },
  ];

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
    <section 
      id="services" 
      className="py-32 px-6"
      style={{
        background: 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)'
      }}
    >
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
            Nossos Serviços
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="apple-glass rounded-3xl p-8 text-center group cursor-pointer"
                whileHover={{ 
                  scale: 1.05,
                  y: -12,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="mb-6"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <IconComponent 
                    className="h-16 w-16 mx-auto"
                    style={{ strokeWidth: 1.5 }}
                  />
                </motion.div>
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontSize: '21px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {service.title}
                </h3>
                <p 
                  className="apple-body leading-relaxed"
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.47,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
