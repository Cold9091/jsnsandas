import { scrollToSection } from "@/lib/utils";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-light leading-tight mb-6 tracking-tight">
          Cuidando do seu espaço
          <br />
          <span className="font-medium">com segurança e profissionalismo</span>
        </h1>
        <p className="text-xl md:text-2xl font-light mb-12 opacity-90 max-w-3xl mx-auto leading-relaxed">
          Soluções em desinfestação, limpeza e controle de pragas para sua casa
          ou empresa.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => scrollToSection("services")}
            className="btn-primary"
          >
            Conheça nossos serviços
          </button>
          <button
            onClick={() => scrollToSection("quote")}
            className="btn-secondary"
          >
            Solicite um orçamento
          </button>
        </div>

        {/* Quick highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-slide-up">
          <div className="text-center p-6 glass-effect rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Missão</h3>
            <p className="font-light opacity-90">
              Proteger o meio ambiente e os espaços afetados por infestações
            </p>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Visão</h3>
            <p className="font-light opacity-90">
              Tornar-se referência em serviços de desinfestação em Angola
            </p>
          </div>
          <div className="text-center p-6 glass-effect rounded-2xl">
            <h3 className="font-semibold text-lg mb-2">Valores</h3>
            <p className="font-light opacity-90">
              Ética, responsabilidade social, excelência e relacionamento com a
              comunidade
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
