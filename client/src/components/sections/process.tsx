import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, Calendar, Users, CheckCircle, Shield } from "lucide-react";

export default function Process() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const steps = [
    {
      icon: Phone,
      title: "Contacto Inicial",
      description: "Entre em contacto connosco por telefone, WhatsApp ou formulário online",
      details: ["Análise inicial gratuita", "Orçamento personalizado", "Esclarecimento de dúvidas"]
    },
    {
      icon: Calendar,
      title: "Agendamento",
      description: "Marcamos uma visita técnica no horário mais conveniente para si",
      details: ["Visita técnica gratuita", "Avaliação profissional", "Plano de ação detalhado"]
    },
    {
      icon: Users,
      title: "Execução",
      description: "Nossa equipe especializada realiza o serviço com máxima eficiência",
      details: ["Equipamentos modernos", "Produtos certificados", "Processo sem interrupções"]
    },
    {
      icon: CheckCircle,
      title: "Verificação",
      description: "Inspecção final para garantir a total eliminação das pragas",
      details: ["Controle de qualidade", "Teste de eficácia", "Relatório detalhado"]
    },
    {
      icon: Shield,
      title: "Garantia",
      description: "Oferecemos garantia e acompanhamento pós-serviço",
      details: ["Garantia até 6 meses", "Suporte contínuo", "Revisões periódicas"]
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
    hidden: { opacity: 0, x: -60, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section 
      className="py-32 px-6 relative"
      style={{
        background: 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)'
      }}
    >
      {/* Flowing background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute inset-0 opacity-10"
          animate={{
            background: [
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 50%, rgba(255,255,255,0.1) 0%, transparent 50%)"
            ]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
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
            Como trabalhamos
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
            Um processo estruturado que garante resultados excepcionais em cada etapa
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`flex flex-col lg:flex-row items-center gap-12 ${!isEven ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Content */}
                <div className="flex-1 text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-white/20 to-white/10 flex items-center justify-center mr-4 border border-white/20">
                      <span 
                        className="text-lg font-bold"
                        style={{
                          fontSize: '18px',
                          fontWeight: 700,
                          letterSpacing: '-0.022em'
                        }}
                      >
                        {index + 1}
                      </span>
                    </div>
                    <h3 
                      className="text-2xl font-semibold"
                      style={{
                        fontSize: '28px',
                        fontWeight: 600,
                        letterSpacing: '-0.022em'
                      }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  
                  <p 
                    className="apple-subheadline mb-6"
                    style={{
                      fontSize: '21px',
                      lineHeight: 1.38,
                      letterSpacing: '-0.022em'
                    }}
                  >
                    {step.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <motion.li
                        key={detailIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ 
                          delay: index * 0.2 + detailIndex * 0.1 + 0.5,
                          duration: 0.5
                        }}
                        className="flex items-center justify-center lg:justify-start"
                      >
                        <div className="w-2 h-2 rounded-full bg-white/60 mr-3" />
                        <span 
                          className="apple-body"
                          style={{
                            fontSize: '17px',
                            letterSpacing: '-0.022em'
                          }}
                        >
                          {detail}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Icon */}
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="w-24 h-24 lg:w-32 lg:h-32 apple-glass rounded-3xl flex items-center justify-center border border-white/20">
                    <IconComponent 
                      className="h-12 w-12 lg:h-16 lg:w-16"
                      style={{ strokeWidth: 1.5 }}
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Connection lines */}
        <div className="hidden lg:block absolute left-1/2 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent transform -translate-x-1/2" />
      </div>
    </section>
  );
}