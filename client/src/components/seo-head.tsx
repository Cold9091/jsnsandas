import { useEffect } from 'react';

export default function SEOHead() {
  useEffect(() => {
    // Add additional schema markup for reviews and testimonials
    const reviewSchema = {
      "@context": "https://schema.org",
      "@type": "Review",
      "@id": "https://jsnsanda.com/#review1",
      "reviewBody": "Excelente serviço de desinfestação! A JSM SANDA eliminou completamente o problema de baratas em nosso restaurante. Equipe profissional e pontual.",
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "author": {
        "@type": "Person",
        "name": "Carlos Silva - Restaurante Sabores"
      },
      "itemReviewed": {
        "@type": "LocalBusiness",
        "name": "JSM SANDA",
        "@id": "https://jsnsanda.com/#business"
      }
    };

    const testimonialsSchema = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "Review",
          "position": 1,
          "reviewBody": "Serviço de desratização impecável. Resolveram nosso problema de roedores em 24 horas. Recomendo para toda Luanda!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Maria Santos - Condomínio Talatona"
          }
        },
        {
          "@type": "Review", 
          "position": 2,
          "reviewBody": "Equipe muito profissional da JSM SANDA. Fizeram desinfecção completa em nosso hotel. Clientes muito satisfeitos!",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "João Ferreira - Hotel Presidente"
          }
        },
        {
          "@type": "Review",
          "position": 3, 
          "reviewBody": "Melhor empresa de controle de pragas em Angola! Eliminaram cupins de forma definitiva. Atendimento 24h é diferencial.",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Ana Costa - Empresa Luanda Sul"
          }
        }
      ]
    };

    // Add service-specific schema
    const servicesSchema = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://jsnsanda.com/#professional-service",
      "name": "JSM SANDA - Controle de Pragas Angola",
      "description": "Serviços profissionais de desinfestação, desratização e controle de pragas em Luanda, Angola",
      "provider": {
        "@id": "https://jsnsanda.com/#business"
      },
      "serviceType": ["Desinfestação", "Desratização", "Controle de Pragas", "Desinfecção", "Fumigação"],
      "areaServed": [
        {
          "@type": "City",
          "name": "Luanda",
          "containedInPlace": {
            "@type": "Country",
            "name": "Angola"
          }
        }
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Serviços de Controle de Pragas",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Desinfestação de Baratas",
              "description": "Eliminação completa de baratas em residências e empresas"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AOA",
              "price": "A consultar"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service", 
              "name": "Desratização Profissional",
              "description": "Controle e eliminação de ratos e roedores"
            },
            "priceSpecification": {
              "@type": "PriceSpecification",
              "priceCurrency": "AOA", 
              "price": "A consultar"
            }
          }
        ]
      }
    };

    // Create and append script elements
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

    addSchema(reviewSchema, 'review-schema');
    addSchema(testimonialsSchema, 'testimonials-schema');
    addSchema(servicesSchema, 'services-schema');

    return () => {
      document.getElementById('review-schema')?.remove();
      document.getElementById('testimonials-schema')?.remove();
      document.getElementById('services-schema')?.remove();
    };
  }, []);

  return null;
}