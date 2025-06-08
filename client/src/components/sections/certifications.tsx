import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Award, CheckCircle, Leaf, Users, Building } from "lucide-react";

export default function Certifications() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const certifications = [
    {
      icon: Shield,
      title: "Licença Sanitária",
      description: "Autorizada pelo Ministério da Saúde de Angola",
      number: "MS-2024-001",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Award,
      title: "ISO 9001:2015",
      description: "Certificação de Qualidade Internacional",
      number: "ISO-9001-2024",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Leaf,
      title: "Certificação Ambiental",
      description: "Práticas sustentáveis e eco-friendly",
      number: "ENV-2024-003",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Users,
      title: "Formação Técnica",
      description: "Equipe certificada em controle de pragas",
      number: "TEC-2024-007",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Building,
      title: "Registro Comercial",
      description: "Empresa registada e licenciada em Angola",
      number: "RC-2024-ANG",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: CheckCircle,
      title: "Segurança no Trabalho",
      description: "Certificação em saúde e segurança ocupacional",
      number: "SST-2024-002",
      color: "from-red-400 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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
            Certificações e Licenças
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
            Credibilidade e confiança através de certificações reconhecidas
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="apple-glass rounded-3xl p-8 text-center relative overflow-hidden group"
                whileHover={{ 
                  scale: 1.05,
                  y: -8,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Animated background gradient */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                {/* Floating particles effect */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white/30 rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>

                <motion.div
                  className="mb-6 relative z-10"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 10,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br ${cert.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent 
                      className="h-10 w-10 text-white"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                </motion.div>
                
                <h3 
                  className="text-xl font-semibold mb-3 relative z-10"
                  style={{
                    fontSize: '21px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {cert.title}
                </h3>
                
                <p 
                  className="apple-body mb-4 relative z-10"
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.47,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {cert.description}
                </p>
                
                <div className="relative z-10">
                  <span 
                    className="text-sm font-mono opacity-70 bg-white/10 px-3 py-1 rounded-full"
                    style={{
                      fontSize: '14px',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {cert.number}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center mt-20"
        >
          <div className="apple-glass rounded-3xl p-8 max-w-4xl mx-auto">
            <h3 
              className="text-2xl font-semibold mb-4"
              style={{
                fontSize: '28px',
                fontWeight: 600,
                letterSpacing: '-0.022em'
              }}
            >
              Comprometidos com a Excelência
            </h3>
            <p 
              className="apple-body leading-relaxed"
              style={{
                fontSize: '19px',
                lineHeight: 1.42,
                letterSpacing: '-0.022em'
              }}
            >
              Todas as nossas certificações são válidas e verificáveis. Mantemos os mais altos 
              padrões de qualidade, segurança e responsabilidade ambiental em todos os nossos serviços. 
              Sua confiança é construída através da nossa credibilidade profissional.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}