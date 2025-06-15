import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Contact() {
  const phones = [
    "+244 940 354 740",
    "222 030955",
  ];

  const emails = ["jortikisandas@gmail.com"];

  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
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
            Contato JSM SANDA - Desinfestação Luanda 24h
          </h2>
          <div className="w-20 h-1 bg-blue-500 dark:bg-blue-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-6 glass-effect bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Telefones</h3>
              </div>
              <div className="space-y-2 font-light">
                {phones.map((phone, index) => (
                  <p key={index}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:text-white/80 transition-colors duration-200"
                      onClick={() => {
                        // Track phone call event if analytics is available
                        if (typeof window !== 'undefined' && (window as any).gtag) {
                          (window as any).gtag('event', 'phone_call', {
                            event_category: 'contact',
                            event_label: phone,
                            value: 1
                          });
                        }
                      }}
                    >
                      {phone}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Mail className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Emails</h3>
              </div>
              <div className="space-y-2 font-light">
                {emails.map((email, index) => (
                  <p key={index}>
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-white/80 transition-colors duration-200"
                    >
                      {email}
                    </a>
                  </p>
                ))}
              </div>
            </div>

            <div className="p-6 glass-effect bg-white/10 dark:bg-gray-800/50 backdrop-blur-sm border border-white/20 dark:border-gray-600/50 rounded-2xl">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 mr-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Endereço</h3>
              </div>
              <div className="space-y-3 font-light text-gray-700 dark:text-gray-300">
                <p>
                  <strong>Sede Principal:</strong><br />
                  Prédio 6, Coqueiros – Ingombota<br />
                  Luanda – Angola
                </p>
                <button
                  onClick={() => window.open("https://maps.app.goo.gl/nSht7bQujxWbc4DVA", "_blank")}
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors duration-200 text-sm"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Ver localização exata
                </button>
                <div className="pt-2 border-t border-white/20 dark:border-gray-600/50">
                  <p className="text-sm opacity-75 mb-1">
                    📍 <strong>Áreas de Atendimento:</strong> Ingombota, Maianga, Rangel, Talatona, Kilamba
                  </p>
                  <p className="text-sm opacity-75">
                    ⏰ <strong>Funcionamento:</strong> 24 horas por dia, 7 dias por semana
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Facebook className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Redes Sociais</h3>
              </div>
              <div className="space-y-3 font-light">
                <p>
                  <a
                    href="https://facebook.com/jsmsanda"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors duration-200 flex items-center"
                  >
                    <Facebook className="h-5 w-5 mr-2" />
                    jsmsanda Lda
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.instagram.com/jsm_desinfestacao/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors duration-200 flex items-center"
                  >
                    <Instagram className="h-5 w-5 mr-2" />
                    @jsm_desinfestacao
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.linkedin.com/in/jsm-desinfestação-04673733b/?originalSubdomain=ao"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white/80 transition-colors duration-200 flex items-center"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    JSM Desinfestação
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Nossa Localização</h3>
            <div className="h-80 rounded-xl overflow-hidden mb-4 bg-gray-100 dark:bg-gray-800">
              <iframe
                src="https://maps.google.com/maps?q=Prédio+6,+Coqueiros,+Ingombota,+Luanda,+Angola&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JSM SANDA - Prédio 6, Coqueiros, Ingombota, Luanda"
              ></iframe>
            </div>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-gray-100">Endereço:</p>
                  <p className="font-light text-gray-700 dark:text-gray-300">
                    Prédio 6, Coqueiros – Ingombota<br />
                    Luanda – Angola
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/nSht7bQujxWbc4DVA",
                    "_blank"
                  )
                }
                className="w-full mt-4 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                <MapPin className="h-4 w-4 mr-2" />
                Abrir no Google Maps
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
