import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { MessageSquare } from "lucide-react";
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
    submitQuote.mutate(data);
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
    <section id="quote" className="py-20 px-4 bg-black/10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Solicite seu Orçamento
          </h2>
          <div className="w-20 h-1 bg-white mx-auto rounded-full"></div>
          <p className="text-lg font-light mt-6 opacity-90">
            Entre em contacto connosco para receber um orçamento personalizado
          </p>
        </div>

        <div className="glass-effect rounded-3xl p-8 md:p-12">
          {isSubmitted ? (
            <div className="text-center py-12">
              <MessageSquare className="h-16 w-16 mx-auto mb-6 opacity-80" />
              <h3 className="text-2xl font-semibold mb-4">
                Orçamento enviado com sucesso!
              </h3>
              <p className="font-light opacity-90 mb-6">
                Recebemos a sua solicitação e entraremos em contacto em breve.
              </p>
              <Button
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Enviar outro orçamento
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Nome Completo</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="Seu nome completo"
                            className="form-input"
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
                        <FormLabel className="text-white">Telefone</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+244 xxx xxx xxx"
                            className="form-input"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-white">Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            placeholder="seu@email.com"
                            className="form-input"
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
                        <FormLabel className="text-white">Serviço Desejado</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="form-select">
                              <SelectValue placeholder="Selecione um serviço" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-[var(--jsn-primary-dark)] text-white border-white/20">
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
                      <FormLabel className="text-white">Local</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Endereço ou localização do serviço"
                          className="form-input"
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
                      <FormLabel className="text-white">Mensagem</FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Descreva detalhes do serviço necessário..."
                          className="form-input resize-none"
                          rows={4}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    type="submit"
                    disabled={submitQuote.isPending}
                    className="btn-primary"
                  >
                    {submitQuote.isPending ? "Enviando..." : "Enviar Orçamento"}
                  </Button>
                  <Button
                    type="button"
                    onClick={() => window.open("https://wa.me/244939103175", "_blank")}
                    className="btn-secondary"
                  >
                    <MessageSquare className="mr-2 h-5 w-5" />
                    WhatsApp
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
}
