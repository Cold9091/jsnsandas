import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Clock, Award, Users, Leaf, Phone } from "lucide-react";

export default function Features() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const features = [
    {
      icon: Shield,
      title: "Produtos Seguros",
      description: "Utilizamos apenas produtos certificados e seguros para pessoas e pets",
      color: "from-blue-400 to-blue-600"
    },
    {
      icon: Clock,
      title: "Resposta Rápida",
      description: "Atendimento em até 24 horas para emergências",
      color: "from-green-400 to-green-600"
    },
    {
      icon: Award,
      title: "Garantia de Resultado",
      description: "Garantimos a eficácia dos nossos serviços por até 6 meses",
      color: "from-purple-400 to-purple-600"
    },
    {
      icon: Users,
      title: "Equipe Especializada",
      description: "Profissionais certificados e com mais de 10 anos de experiência",
      color: "from-orange-400 to-orange-600"
    },
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Métodos sustentáveis que respeitam o meio ambiente",
      color: "from-emerald-400 to-emerald-600"
    },
    {
      icon: Phone,
      title: "Suporte 24/7",
      description: "Atendimento disponível todos os dias da semana",
      color: "from-red-400 to-red-600"
    }
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
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>
      
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
            Por que escolher a JSM SANDA?
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
            Oferecemos soluções completas com os mais altos padrões de qualidade e segurança
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="apple-glass rounded-3xl p-8 text-center group cursor-pointer relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  y: -12,
                  transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
                }}
              >
                {/* Gradient background on hover */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                />
                
                <motion.div
                  className="mb-6 relative"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                    <IconComponent 
                      className="h-8 w-8 text-white"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                </motion.div>
                
                <h3 
                  className="text-xl font-semibold mb-4"
                  style={{
                    fontSize: '21px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {feature.title}
                </h3>
                <p 
                  className="apple-body leading-relaxed"
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.47,
                    letterSpacing: '-0.022em'
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}