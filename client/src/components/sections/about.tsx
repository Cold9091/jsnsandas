import { Target, Eye, Heart } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-light mb-6 tracking-tight"
            style={{
              background: 'linear-gradient(135deg, var(--jsm-text-warm) 0%, var(--jsm-blue) 50%, var(--jsm-text-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            JSM SANDA - Empresa de Desinfestação em Luanda
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg font-light leading-relaxed opacity-90 text-gray-700 dark:text-gray-300">
              A JSM SANDA é líder em desinfestação profissional em Angola, especializada em 
              controle de pragas, desratização e desinfecção em Luanda e região metropolitana. 
              Atendemos residências, empresas e indústrias com soluções seguras e eficazes.
            </p>
            <p className="text-lg font-light leading-relaxed opacity-90 text-gray-700 dark:text-gray-300">
              Nossa equipe certificada utiliza equipamentos modernos e produtos aprovados para 
              eliminação de baratas, ratos, cupins, formigas e demais pragas urbanas. Garantimos 
              resultados duradouros com atendimento 24 horas em toda Luanda.
            </p>
            
            {/* Fotos da Equipe e Equipamentos */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="glass-effect rounded-xl p-4 bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/50">
                <div className="aspect-square mb-3" dangerouslySetInnerHTML={{
                  __html: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="300" fill="#4682B4"/>
                    <circle cx="150" cy="120" r="40" fill="#F5DEB3" stroke="#DEB887" stroke-width="2"/>
                    <rect x="120" y="160" width="60" height="80" fill="#32CD32" stroke="#228B22" stroke-width="2"/>
                    <rect x="130" y="170" width="40" height="60" fill="#228B22"/>
                    <rect x="100" y="240" width="100" height="40" fill="#8B4513" stroke="#654321" stroke-width="1"/>
                    <rect x="140" y="200" width="20" height="20" fill="#FFD700"/>
                    <text x="150" y="295" text-anchor="middle" fill="white" font-size="14" font-weight="bold">Técnico Especializado</text>
                  </svg>`
                }} />
                <h4 className="text-sm font-semibold text-center text-gray-800 dark:text-gray-200">Equipe Técnica</h4>
              </div>
              
              <div className="glass-effect rounded-xl p-4">
                <div className="aspect-square mb-3" dangerouslySetInnerHTML={{
                  __html: `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
                    <rect width="300" height="300" fill="#2F4F4F"/>
                    <rect x="50" y="100" width="200" height="120" fill="#C0C0C0" stroke="#808080" stroke-width="2"/>
                    <circle cx="150" cy="160" r="30" fill="#FFD700" stroke="#FFA500" stroke-width="2"/>
                    <rect x="80" y="220" width="140" height="30" fill="#32CD32" stroke="#228B22" stroke-width="1"/>
                    <rect x="120" y="80" width="60" height="20" fill="#FF6347"/>
                    <circle cx="100" cy="130" r="8" fill="#FF0000"/>
                    <circle cx="200" cy="130" r="8" fill="#00FF00"/>
                    <text x="150" y="285" text-anchor="middle" fill="white" font-size="12" font-weight="bold">Equipamento Profissional</text>
                  </svg>`
                }} />
                <h4 className="text-sm font-semibold text-center">Equipamentos</h4>
              </div>
            </div>
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
