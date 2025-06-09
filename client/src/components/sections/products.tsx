import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Package, Truck, Wrench, Zap, ShoppingCart, MapPin } from "lucide-react";

export default function Products() {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const products = [
    {
      icon: Zap,
      title: "Produtos de Desinfestação",
      description: "Inseticidas profissionais, raticidas e produtos específicos para controle de pragas urbanas.",
      features: ["Produtos licenciados", "Uso profissional", "Alta eficácia", "Segurança garantida"]
    },
    {
      icon: Package,
      title: "Produtos de Limpeza",
      description: "Desinfetantes, detergentes profissionais e produtos de higienização para empresas.",
      features: ["Grau hospitalar", "Biodegradáveis", "Concentrados", "Múltiplas aplicações"]
    },
    {
      icon: Wrench,
      title: "Máquinas de Desinfestação",
      description: "Equipamentos profissionais para aplicação de produtos e tratamentos de desinfestação.",
      features: ["Tecnologia avançada", "Durabilidade", "Manutenção incluída", "Treinamento gratuito"]
    }
  ];

  return (
    <section id="products" className="py-32 px-6 relative overflow-hidden">
      {/* Background Pattern */}
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
            Venda de Produtos & Máquinas
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
            Fornecemos produtos profissionais de desinfestação, limpeza e equipamentos especializados com entrega em toda Angola
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              variants={itemVariants}
              className="apple-glass rounded-3xl p-8 text-center apple-hover-lift"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 rounded-full apple-glass flex items-center justify-center">
                  <product.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <h3 
                className="text-xl font-semibold mb-4"
                style={{
                  fontSize: '24px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em'
                }}
              >
                {product.title}
              </h3>
              
              <p 
                className="apple-body mb-6"
                style={{
                  fontSize: '17px',
                  lineHeight: 1.47,
                  letterSpacing: '-0.022em'
                }}
              >
                {product.description}
              </p>

              <ul className="space-y-2 mb-6">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center justify-center text-sm opacity-80">
                    <div className="w-1.5 h-1.5 bg-white rounded-full mr-2"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Delivery Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="apple-glass rounded-3xl p-12 text-center"
        >
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full apple-glass flex items-center justify-center">
              <Truck className="w-10 h-10 text-white" />
            </div>
          </div>
          
          <h3 
            className="text-2xl font-semibold mb-4"
            style={{
              fontSize: '28px',
              fontWeight: 600,
              letterSpacing: '-0.022em'
            }}
          >
            Entrega em Toda Angola
          </h3>
          
          <p 
            className="apple-subheadline mb-8 max-w-2xl mx-auto"
          >
            Realizamos entregas de produtos e equipamentos em todas as províncias de Angola com logística segura e eficiente
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-white" />
              <span className="text-lg">Cobertura Nacional</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <ShoppingCart className="w-6 h-6 text-white" />
              <span className="text-lg">Pedidos Online</span>
            </div>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
          >
            <motion.button
              className="apple-button-primary apple-button-enhanced apple-hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('contact');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Solicitar Catálogo
            </motion.button>
            <motion.button
              className="apple-button-secondary apple-button-enhanced apple-hover-lift"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.getElementById('quote');
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Fazer Pedido
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}