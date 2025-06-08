import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Quais tipos de pragas vocês eliminam?",
      answer: "Eliminamos todos os tipos de pragas urbanas incluindo baratas, ratos, formigas, cupins, mosquitos, aranhas, pulgas, carrapatos e outros insetos. Nossa equipe é especializada em pragas comuns em Angola."
    },
    {
      question: "Os produtos utilizados são seguros para crianças e animais?",
      answer: "Sim, utilizamos apenas produtos certificados e seguros. Nossos tratamentos são desenvolvidos para serem eficazes contra pragas, mas seguros para pessoas e animais domésticos quando aplicados corretamente."
    },
    {
      question: "Quanto tempo demora para ver resultados?",
      answer: "Os resultados variam conforme o tipo de praga e o grau de infestação. Geralmente, você verá uma redução significativa dentro de 24-48 horas. Para eliminação completa, pode levar de 1 a 2 semanas."
    },
    {
      question: "Vocês oferecem garantia nos serviços?",
      answer: "Sim, oferecemos garantia de até 6 meses em nossos serviços, dependendo do tipo de tratamento. Se as pragas retornarem durante o período de garantia, retornamos gratuitamente."
    },
    {
      question: "É necessário sair de casa durante o tratamento?",
      answer: "Depende do tipo de tratamento. Para a maioria dos nossos serviços, não é necessário sair de casa. Nossa equipe orientará sobre as precauções necessárias caso a caso."
    },
    {
      question: "Vocês atendem em emergências?",
      answer: "Sim, temos atendimento de emergência 24/7. Para casos urgentes, nossa equipe pode estar no local em até 2 horas, dependendo da localização em Luanda."
    },
    {
      question: "Como é feito o orçamento?",
      answer: "O orçamento é gratuito e personalizado. Realizamos uma visita técnica para avaliar a situação e apresentamos um plano de ação detalhado com preços transparentes."
    },
    {
      question: "Vocês trabalham com empresas e condomínios?",
      answer: "Sim, atendemos residências, empresas, condomínios, hotéis, restaurantes e qualquer tipo de estabelecimento. Temos contratos de manutenção preventiva para empresas."
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <HelpCircle className="h-16 w-16 mr-4 opacity-80" />
            </motion.div>
            <h2 
              className="apple-headline"
              style={{ fontSize: 'clamp(40px, 6vw, 64px)' }}
            >
              Dúvidas Frequentes
            </h2>
          </div>
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
            className="apple-subheadline mt-8"
          >
            Respostas para as perguntas mais comuns sobre nossos serviços
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="apple-glass rounded-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.05)" }}
              >
                <h3 
                  className="text-lg font-semibold pr-4"
                  style={{
                    fontSize: '19px',
                    fontWeight: 600,
                    letterSpacing: '-0.022em',
                    lineHeight: 1.4
                  }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <ChevronDown className="h-5 w-5 opacity-70" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ 
                      duration: 0.4,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <div className="w-full h-px bg-white/10 mb-4" />
                      <p 
                        className="apple-body leading-relaxed"
                        style={{
                          fontSize: '17px',
                          lineHeight: 1.6,
                          letterSpacing: '-0.022em',
                          opacity: 0.9
                        }}
                      >
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <p 
            className="apple-body mb-6"
            style={{
              fontSize: '19px',
              lineHeight: 1.42,
              letterSpacing: '-0.022em'
            }}
          >
            Não encontrou sua dúvida? Entre em contacto connosco!
          </p>
          <motion.button
            onClick={() => window.open("https://wa.me/244939103175", "_blank")}
            className="apple-button-primary apple-button-enhanced"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Falar com Especialista
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}