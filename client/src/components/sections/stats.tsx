import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function Stats() {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const stats = [
    {
      number: 500,
      suffix: "+",
      label: "Clientes Satisfeitos",
      description: "Em toda Angola"
    },
    {
      number: 15,
      suffix: " Anos",
      label: "de Experiência",
      description: "No mercado angolano"
    },
    {
      number: 1000,
      suffix: "+",
      label: "Serviços Realizados",
      description: "Com garantia de qualidade"
    },
    {
      number: 24,
      suffix: "/7",
      label: "Atendimento",
      description: "Todos os dias"
    }
  ];

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)',
              background: 'linear-gradient(135deg, var(--jsm-text-warm) 0%, var(--jsm-blue) 50%, var(--jsm-text-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Números que falam por si
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
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} inView={inView} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, inView }: { stat: any, index: number, inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        let start = 0;
        const increment = stat.number / 100;
        const counter = setInterval(() => {
          start += increment;
          if (start >= stat.number) {
            setCount(stat.number);
            clearInterval(counter);
          } else {
            setCount(Math.floor(start));
          }
        }, 20);
        return () => clearInterval(counter);
      }, index * 200);
      return () => clearTimeout(timer);
    }
  }, [inView, stat.number, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.9 }}
      transition={{ 
        delay: index * 0.1 + 0.3,
        duration: 0.8, 
        ease: [0.25, 0.46, 0.45, 0.94] 
      }}
      className="apple-glass rounded-3xl p-8 text-center group hover:scale-105 transition-transform duration-500"
      whileHover={{ y: -8 }}
    >
      <motion.div
        className="text-4xl lg:text-5xl font-bold mb-2"
        style={{
          fontSize: 'clamp(32px, 4vw, 48px)',
          fontWeight: 700,
          letterSpacing: '-0.04em',
          background: 'linear-gradient(135deg, #ffffff 0%, rgba(255, 255, 255, 0.8) 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
        animate={inView ? { scale: [1, 1.1, 1] } : {}}
        transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
      >
        {count}{stat.suffix}
      </motion.div>
      <h3 
        className="text-lg font-semibold mb-2"
        style={{
          fontSize: '19px',
          fontWeight: 600,
          letterSpacing: '-0.022em'
        }}
      >
        {stat.label}
      </h3>
      <p 
        className="apple-body text-sm"
        style={{
          fontSize: '15px',
          opacity: 0.8,
          letterSpacing: '-0.022em'
        }}
      >
        {stat.description}
      </p>
    </motion.div>
  );
}