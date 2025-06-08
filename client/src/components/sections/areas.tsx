import {
  Building,
  Home,
  Users,
  Utensils,
  University,
  Store,
  Warehouse,
  Bed,
  Leaf,
  Building2,
} from "lucide-react";

export default function Areas() {
  const areas = [
    { icon: Building2, title: "Hospitais" },
    { icon: Building, title: "Escritórios" },
    { icon: Home, title: "Moradias" },
    { icon: Building, title: "Apartamentos" },
    { icon: Users, title: "Condomínios" },
    { icon: Utensils, title: "Restaurantes" },
    { icon: University, title: "Bancos" },
    { icon: Store, title: "Lojas" },
    { icon: Warehouse, title: "Armazéns" },
    { icon: Bed, title: "Hotéis" },
  ];

  return (
    <section id="areas" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Áreas de Atuação
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        {/* Special highlight */}
        <div className="text-center mb-12">
          <div className="inline-block p-6 glass-effect rounded-2xl">
            <Leaf className="h-12 w-12 mx-auto mb-4" />
            <h3 className="text-2xl font-semibold mb-2">
              Realizamos desinfestação sem cheiro!
            </h3>
            <p className="font-light opacity-90">
              Tecnologia avançada para tratamentos inodoros e seguros
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {areas.map((area, index) => {
            const IconComponent = area.icon;
            return (
              <div
                key={index}
                className="text-center p-6 glass-effect rounded-xl hover:bg-white/20 transition-all duration-300"
              >
                <IconComponent className="h-8 w-8 mx-auto mb-3" />
                <h4 className="font-medium">{area.title}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
