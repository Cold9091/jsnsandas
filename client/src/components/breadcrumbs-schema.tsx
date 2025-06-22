import { useEffect } from 'react';

export default function BreadcrumbsSchema() {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://jsmsanda.com/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Serviços de Desinfestação",
          "item": "https://jsmsanda.com/#services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Áreas de Atendimento",
          "item": "https://jsmsanda.com/#areas"
        },
        {
          "@type": "ListItem",
          "position": 4,
          "name": "Sobre a JSM SANDA",
          "item": "https://jsmsanda.com/#about"
        },
        {
          "@type": "ListItem",
          "position": 5,
          "name": "Orçamento Gratuito",
          "item": "https://jsmsanda.com/#quote"
        },
        {
          "@type": "ListItem",
          "position": 6,
          "name": "Contacto",
          "item": "https://jsmsanda.com/#contact"
        }
      ]
    };

    const howToSchema = {
      "@context": "https://schema.org",
      "@type": "HowTo",
      "name": "Como Solicitar Serviço de Desinfestação em Luanda",
      "description": "Passos para contratar serviços de desinfestação profissional da JSM SANDA em Angola",
      "image": "https://jsnsanda.com/images/como-solicitar-servico.jpg",
      "totalTime": "PT15M",
      "estimatedCost": {
        "@type": "MonetaryAmount",
        "currency": "AOA",
        "value": "A consultar"
      },
      "supply": [
        {
          "@type": "HowToSupply",
          "name": "Telefone ou WhatsApp"
        },
        {
          "@type": "HowToSupply", 
          "name": "Informações sobre o problema de pragas"
        }
      ],
      "tool": [
        {
          "@type": "HowToTool",
          "name": "Equipamentos profissionais de desinfestação"
        }
      ],
      "step": [
        {
          "@type": "HowToStep",
          "name": "Entre em Contacto",
          "text": "Ligue para +244 940 354 740 ou envie WhatsApp para solicitar orçamento gratuito",
          "image": "https://jsnsanda.com/images/passo-1-contacto.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Avaliação Técnica",
          "text": "Nossa equipe fará visita técnica gratuita para avaliar o problema de pragas",
          "image": "https://jsnsanda.com/images/passo-2-avaliacao.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Orçamento Personalizado",
          "text": "Apresentamos proposta detalhada com preços transparentes e prazo de execução",
          "image": "https://jsnsanda.com/images/passo-3-orcamento.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Execução do Serviço",
          "text": "Realizamos o tratamento com equipamentos modernos e produtos seguros",
          "image": "https://jsnsanda.com/images/passo-4-execucao.jpg"
        },
        {
          "@type": "HowToStep",
          "name": "Acompanhamento",
          "text": "Oferecemos garantia e acompanhamento pós-tratamento para garantir eficácia",
          "image": "https://jsnsanda.com/images/passo-5-acompanhamento.jpg"
        }
      ]
    };

    const addSchema = (schema: any, id: string) => {
      const existingScript = document.getElementById(id);
      if (existingScript) {
        existingScript.remove();
      }
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.id = id;
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    };

    addSchema(breadcrumbSchema, 'breadcrumb-schema');
    addSchema(howToSchema, 'howto-schema');

    return () => {
      document.getElementById('breadcrumb-schema')?.remove();
      document.getElementById('howto-schema')?.remove();
    };
  }, []);

  return null;
}