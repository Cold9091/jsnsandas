import { useEffect } from 'react';

export default function FinalSEOBoost() {
  useEffect(() => {
    // Add Google My Business optimized schema
    const googleMyBusinessSchema = {
      "@context": "https://schema.org",
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://jsnsanda.com/#pest-control-business",
      "name": "JSN SANDA - Desinfestação Angola",
      "alternateName": ["JSN SANDA", "JSN SANDA Lda", "JSN SANDA Angola"],
      "description": "Empresa líder em desinfestação, controle de pragas e desratização em Luanda, Angola. Serviços profissionais 24h com garantia de resultado.",
      "url": "https://jsnsanda.com",
      "logo": "https://jsnsanda.com/logo.png",
      "image": [
        "https://jsnsanda.com/images/desinfestacao-luanda.jpg",
        "https://jsnsanda.com/images/controle-pragas-angola.jpg",
        "https://jsnsanda.com/images/equipe-jsn-sanda.jpg"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Prédio 6, Coqueiros",
        "addressLocality": "Ingombota",
        "addressRegion": "Luanda",
        "postalCode": "",
        "addressCountry": "AO"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -8.8159,
        "longitude": 13.2306
      },
      "telephone": ["+244939103175", "+244990103175"],
      "email": "jortikisandas@gmail.com",
      "openingHours": "Mo-Su 00:00-24:00",
      "priceRange": "$$",
      "paymentAccepted": ["Cash", "Bank Transfer", "Mobile Payment"],
      "currenciesAccepted": ["AOA", "USD"],
      "serviceArea": [
        {
          "@type": "City",
          "name": "Luanda",
          "containedInPlace": {
            "@type": "Country",
            "name": "Angola"
          }
        }
      ],
      "areaServed": [
        "Luanda",
        "Ingombota",
        "Maianga", 
        "Rangel",
        "Samba",
        "Sambizanga",
        "Kilamba Kiaxi",
        "Talatona",
        "Viana",
        "Cacuaco",
        "Cazenga",
        "Belas"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Licença Sanitária Angola",
          "credentialCategory": "Certificação Profissional"
        }
      ],
      "knowsAbout": [
        "Desinfestação",
        "Controle de Pragas", 
        "Desratização",
        "Desinfecção",
        "Fumigação",
        "Eliminação de Baratas",
        "Controle de Cupins",
        "Eliminação de Formigas",
        "Desinsetização",
        "Controle de Roedores"
      ],
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desinfestação Residencial",
            "description": "Eliminação de pragas em residências"
          },
          "areaServed": "Luanda, Angola"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Controle de Pragas Comercial",
            "description": "Serviços para empresas e estabelecimentos comerciais"
          },
          "areaServed": "Luanda, Angola"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "127",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5"
          },
          "author": {
            "@type": "Person",
            "name": "Cliente Luanda"
          },
          "reviewBody": "Excelente serviço de desinfestação em Luanda. JSN SANDA resolveu problema de baratas rapidamente."
        }
      ],
      "founder": {
        "@type": "Person",
        "name": "JSN SANDA"
      },
      "foundingDate": "2020",
      "slogan": "Protegendo sua saúde e bem-estar em Angola"
    };

    // Event schema for emergency services
    const emergencyServiceSchema = {
      "@context": "https://schema.org",
      "@type": "EmergencyService",
      "name": "JSN SANDA Emergência 24h",
      "description": "Atendimento de emergência para desinfestação em Luanda 24 horas por dia",
      "provider": {
        "@id": "https://jsnsanda.com/#pest-control-business"
      },
      "telephone": "+244939103175",
      "availableChannel": {
        "@type": "ServiceChannel",
        "servicePhone": "+244939103175",
        "availableLanguage": "Portuguese"
      }
    };

    // Product schema for services
    const servicesProductSchema = {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Serviços de Desinfestação JSN SANDA",
      "description": "Pacote completo de serviços de controle de pragas em Luanda, Angola",
      "brand": {
        "@type": "Brand",
        "name": "JSN SANDA"
      },
      "category": "Pest Control Services",
      "offers": {
        "@type": "Offer",
        "priceCurrency": "AOA",
        "price": "A consultar",
        "availability": "https://schema.org/InStock",
        "seller": {
          "@id": "https://jsnsanda.com/#pest-control-business"
        }
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "ratingCount": "127"
      }
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

    // Add all schemas
    addSchema(googleMyBusinessSchema, 'google-my-business-schema');
    addSchema(emergencyServiceSchema, 'emergency-service-schema');
    addSchema(servicesProductSchema, 'services-product-schema');

    // Add additional meta tags for enhanced SEO
    const additionalMetaTags = [
      { name: 'classification', content: 'Business' },
      { name: 'category', content: 'Pest Control Services' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'distribution', content: 'Global' },
      { name: 'rating', content: 'General' },
      { name: 'revisit-after', content: '7 days' },
      { name: 'target', content: 'all' },
      { name: 'HandheldFriendly', content: 'True' },
      { name: 'MobileOptimized', content: '320' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
      { name: 'format-detection', content: 'telephone=yes' },
      { name: 'skype_toolbar', content: 'skype_toolbar_parser_compatible' },
      { property: 'business:hours:day', content: 'monday,tuesday,wednesday,thursday,friday,saturday,sunday' },
      { property: 'business:hours:start', content: '00:00' },
      { property: 'business:hours:end', content: '23:59' }
    ];

    additionalMetaTags.forEach(tag => {
      const existingTag = document.querySelector(`meta[name="${tag.name}"]`) || 
                         document.querySelector(`meta[property="${tag.property}"]`);
      if (!existingTag) {
        const meta = document.createElement('meta');
        if (tag.name) meta.name = tag.name;
        if (tag.property) meta.setAttribute('property', tag.property);
        meta.content = tag.content;
        document.head.appendChild(meta);
      }
    });

    return () => {
      document.getElementById('google-my-business-schema')?.remove();
      document.getElementById('emergency-service-schema')?.remove();
      document.getElementById('services-product-schema')?.remove();
    };
  }, []);

  return null;
}