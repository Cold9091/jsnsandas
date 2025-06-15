import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MessageSquare, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertQuoteSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { z } from "zod";

const formSchema = insertQuoteSchema.extend({
  name: z.string().min(2, "Nome deve ter pelo menos 2 caracteres"),
  phone: z.string().min(9, "Telefone deve ter pelo menos 9 dígitos"),
  email: z.string().email("Email inválido"),
  service: z.string().min(1, "Selecione um serviço"),
  location: z.string().min(5, "Localização deve ter pelo menos 5 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function Quote() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      service: "",
      location: "",
      message: "",
    },
  });

  const submitQuote = useMutation({
    mutationFn: async (data: FormData) => {
      return apiRequest("POST", "/api/quotes", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      form.reset();
      toast({
        title: "Orçamento enviado com sucesso!",
        description: "Entraremos em contacto em breve.",
      });
    },
    onError: (error: any) => {
      toast({
        title: "Erro ao enviar orçamento",
        description: error.message || "Tente novamente mais tarde.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: FormData) => {
    // Send to database
    submitQuote.mutate(data);
    
    // Send to WhatsApp
    const whatsappMessage = `*Novo Orçamento JSM SANDA*%0A%0A*Nome:* ${data.name}%0A*Telefone:* ${data.phone}%0A*Email:* ${data.email}%0A*Serviço:* ${data.service}%0A*Localização:* ${data.location}%0A*Mensagem:* ${data.message}`;
    window.open(`https://wa.me/244940354740?text=${whatsappMessage}`, "_blank");
  };

  const services = [
    { value: "desinfestacao", label: "Desinfestação" },
    { value: "desinfeccao", label: "Desinfecção" },
    { value: "desratizacao", label: "Desratização" },
    { value: "desbaratizacao", label: "Desbaratização" },
    { value: "fumigacao", label: "Fumigação" },
    { value: "limpeza", label: "Limpeza" },
    { value: "pulverizacao", label: "Pulverização" },
  ];

  return (
    <section 
      id="quote" 
      className="py-32 px-6"
      style={{
        background: 'rgba(0, 0, 0, 0.05)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center mb-20"
        >
          <h2 
            className="apple-headline mb-6"
            style={{ 
              fontSize: 'clamp(40px, 6vw, 64px)',
              background: 'linear-gradient(135deg, var(--jsm-text-warm) 0%, var(--jsm-blue) 50%, var(--jsm-text-secondary) 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            Solicite seu Orçamento
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 80 } : { width: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="h-1 bg-white mx-auto rounded-full"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="apple-subheadline mt-8"
          >
            Entre em contacto connosco para receber um orçamento personalizado
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40, scale: 0.95 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 40, scale: 0.95 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="apple-glass rounded-3xl p-10 md:p-16"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center py-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, duration: 0.5, type: "spring" }}
              >
                <CheckCircle className="h-20 w-20 mx-auto mb-8 text-green-400" />
              </motion.div>
              <h3 
                className="text-3xl font-semibold mb-6"
                style={{
                  fontSize: '32px',
                  fontWeight: 600,
                  letterSpacing: '-0.022em'
                }}
              >
                Orçamento enviado com sucesso!
              </h3>
              <p 
                className="apple-body mb-10 max-w-2xl mx-auto"
                style={{
                  fontSize: '19px',
                  lineHeight: 1.42,
                  letterSpacing: '-0.022em'
                }}
              >
                Recebemos a sua solicitação e entraremos em contacto em breve.
              </p>
              <motion.button
                onClick={() => setIsSubmitted(false)}
                className="apple-button-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Enviar outro orçamento
              </motion.button>
            </motion.div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel 
                          className="text-white text-lg font-medium"
                          style={{
                            fontSize: '17px',
                            fontWeight: 500,
                            letterSpacing: '-0.022em'
                          }}
                        >
                          Nome Completo
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Seu nome completo"
                            className="apple-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel 
                          className="text-white text-lg font-medium"
                          style={{
                            fontSize: '17px',
                            fontWeight: 500,
                            letterSpacing: '-0.022em'
                          }}
                        >
                          Telefone
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+244 xxx xxx xxx"
                            className="apple-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel 
                          className="text-white text-lg font-medium"
                          style={{
                            fontSize: '17px',
                            fontWeight: 500,
                            letterSpacing: '-0.022em'
                          }}
                        >
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="seu@email.com"
                            className="apple-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="service"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel 
                          className="text-white text-lg font-medium"
                          style={{
                            fontSize: '17px',
                            fontWeight: 500,
                            letterSpacing: '-0.022em'
                          }}
                        >
                          Serviço Desejado
                        </FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="apple-select">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[var(--jsn-accent)] text-white border-white/20">
                            {services.map((service) => (
                              <SelectItem
                                key={service.value}
                                value={service.value}
                                className="hover:bg-white/10"
                              >
                                {service.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="location"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel 
                        className="text-white text-lg font-medium"
                        style={{
                          fontSize: '17px',
                          fontWeight: 500,
                          letterSpacing: '-0.022em'
                        }}
                      >
                        Local
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Endereço ou localização do serviço"
                          className="apple-input"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel 
                        className="text-white text-lg font-medium"
                        style={{
                          fontSize: '17px',
                          fontWeight: 500,
                          letterSpacing: '-0.022em'
                        }}
                      >
                        Mensagem
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Descreva detalhes do serviço necessário..."
                          className="apple-textarea"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
                  <motion.button
                    type="submit"
                    disabled={submitQuote.isPending}
                    className="apple-button-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {submitQuote.isPending ? "Enviando..." : "Enviar Orçamento"}
                  </motion.button>
                  <motion.button
                    type="button"
                    onClick={() => window.open("https://wa.me/244940354740", "_blank")}
                    className="apple-button-blue flex items-center justify-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp
                  </motion.button>
                </div>
              </form>
            </Form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
