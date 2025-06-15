# JSM SANDA - Website de Desinfestação

Website profissional e responsivo para JSM SANDA, empresa de desinfestação em Angola, com design minimalista inspirado na Apple.

## 🚀 Deploy no Vercel

### Preparação para Deploy

1. **Conectar ao GitHub**
   - Faça push do código para um repositório GitHub
   - Conecte sua conta Vercel ao GitHub

2. **Configuração no Vercel**
   - Importe o projeto no Vercel
   - As configurações já estão prontas em `vercel.json`
   - Build Command: `vite build`
   - Output Directory: `client/dist`

3. **Variáveis de Ambiente (Opcional)**
   ```
   NODE_ENV=production
   ```

### Funcionalidades

- ✅ Design responsivo e moderno
- ✅ Seções: Hero, Sobre, Serviços, Produtos, Áreas, Galeria, Processo, FAQ, Depoimentos, Contato
- ✅ Formulário de orçamento com integração WhatsApp
- ✅ Botão flutuante WhatsApp
- ✅ Google Maps integrado
- ✅ Modo escuro/claro
- ✅ Animações suaves
- ✅ SEO otimizado
- ✅ API para orçamentos

### Contatos Configurados

- **Telefone Principal**: +244 940 354 740
- **Telefone Fixo**: 222 030955
- **Email**: jsmsanda@gmail.com
- **Endereço**: Prédio 6, Coqueiros – Ingombota, Luanda – Angola
- **Google Maps**: https://maps.app.goo.gl/nSht7bQujxWbc4DVA

### Estrutura do Projeto

```
├── client/                 # Frontend React + Vite
│   ├── src/
│   │   ├── components/    # Componentes React
│   │   ├── pages/         # Páginas da aplicação
│   │   └── lib/           # Utilidades
├── api/                   # Vercel Functions
│   └── quotes.ts         # API de orçamentos
├── shared/               # Código compartilhado
│   └── schema.ts        # Schemas Zod
└── vercel.json          # Configuração Vercel
```

### Tecnologias

- **Frontend**: React, TypeScript, Tailwind CSS, Framer Motion
- **Backend**: Vercel Functions, Node.js
- **Forms**: React Hook Form, Zod validation
- **UI**: Radix UI, Shadcn/ui
- **Deploy**: Vercel

### Comandos de Desenvolvimento

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Verificar tipos
npm run check
```

## 📱 Funcionalidades Principais

### Integração WhatsApp
- Botão flutuante sempre visível
- Formulário de orçamento envia dados diretamente para WhatsApp
- Botões de contato redirecionam para WhatsApp

### Google Maps
- Mapa interativo na seção de contato
- Localização exata da empresa
- Botão para abrir no Google Maps

### SEO Otimizado
- Meta tags completas
- Schema markup
- Open Graph tags
- Estrutura semântica

### Performance
- Lazy loading de imagens
- Otimização de assets
- Bundle splitting
- Animações otimizadas