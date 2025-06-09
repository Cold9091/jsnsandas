import { Phone, Mail, MapPin, Facebook } from "lucide-react";

export default function Contact() {
  const phones = [
    "+244 939 103 175",
    "+244 990 103 175",
    "940 354 740",
    "222 030 955",
  ];

  const emails = ["jortikisandas@gmail.com", "jsmsanda@gmail.com"];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Contato JSN SANDA - Desinfestação Luanda 24h
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Phone className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Telefones</h3>
              </div>
              <div className="space-y-2 font-light">
                {phones.map((phone, index) => (
                  <p key={index}>
                    <a
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="hover:text-white/80 transition-colors duration-200"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.gtag) {
                          window.gtag('event', 'phone_call', {
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

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <MapPin className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Endereço</h3>
              </div>
              <p className="font-light">
                Prédio 6, Coqueiros – Ingombota
                <br />
                Luanda – Angola
                <br />
                <span className="text-sm opacity-75 mt-2 block">
                  📍 Atendemos: Ingombota, Maianga, Rangel, Talatona, Kilamba
                </span>
                <span className="text-sm opacity-75">
                  ⏰ Funcionamento: 24 horas por dia, 7 dias por semana
                </span>
              </p>
            </div>

            <div className="p-6 glass-effect rounded-2xl">
              <div className="flex items-center mb-4">
                <Facebook className="h-8 w-8 mr-4" />
                <h3 className="text-xl font-semibold">Facebook</h3>
              </div>
              <p className="font-light">
                <a
                  href="https://facebook.com/jsmsanda"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white/80 transition-colors duration-200"
                >
                  jsmsanda Lda
                </a>
              </p>
            </div>
          </div>

          {/* Map placeholder */}
          <div className="glass-effect rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">Localização</h3>
            <div className="h-80 bg-white/10 rounded-xl flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-60" />
                <p className="font-light opacity-90">Mapa do Google Maps</p>
                <p className="text-sm font-light opacity-70 mt-2">
                  Prédio 6, Coqueiros – Ingombota, Luanda
                </p>
                <button
                  onClick={() =>
                    window.open(
                      "https://maps.google.com/maps?q=Coqueiros,+Ingombota,+Luanda,+Angola",
                      "_blank"
                    )
                  }
                  className="mt-4 px-4 py-2 glass-effect rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  Ver no Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
