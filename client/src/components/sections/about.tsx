import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            JSN SANDA - Empresa de Desinfestação em Luanda
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed opacity-90">
              A JSN SANDA é líder em desinfestação profissional em Angola, especializada em 
              controle de pragas, desratização e desinfecção em Luanda e região metropolitana. 
              Atendemos residências, empresas e indústrias com soluções seguras e eficazes.
            </p>
            <p className="text-lg font-light leading-relaxed opacity-90">
              Nossa equipe certificada utiliza equipamentos modernos e produtos aprovados para 
              eliminação de baratas, ratos, cupins, formigas e demais pragas urbanas. Garantimos 
              resultados duradouros com atendimento 24 horas em toda Luanda.
            </p>
          </div>

          <div className="space-y-8">
            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Missão</h3>
              </div>
              <p className="font-light opacity-90">
                Proteger o meio ambiente e os espaços afetados por infestações
                com soluções sustentáveis e eficazes.
              </p>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Visão</h3>
              </div>
              <p className="font-light opacity-90">
                Tornar-se referência em serviços de desinfestação em Angola,
                expandindo nossa atuação com excelência.
              </p>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Valores</h3>
              </div>
              <p className="font-light opacity-90">
                Ética, responsabilidade social, excelência e relacionamento
                duradouro com a comunidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
