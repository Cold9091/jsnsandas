import {
  Bug,
  Shield,
  Mouse,
  Zap,
  Cloud,
  SprayCan,
  Fan,
} from "lucide-react";

export default function Services() {
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

  return (
    <section id="services" className="py-20 px-4 bg-black/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Nossos Serviços
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={index}
                className="p-8 glass-effect rounded-2xl hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="text-center">
                  <IconComponent className="h-12 w-12 mx-auto mb-6" />
                  <h3 className="text-xl font-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="font-light opacity-90 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
