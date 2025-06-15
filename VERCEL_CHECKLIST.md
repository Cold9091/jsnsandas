# ✅ JSM SANDA - Checklist de Deploy Vercel

## Arquivos de Configuração Criados
- [x] `vercel.json` - Configuração principal do Vercel
- [x] `api/quotes.ts` - API serverless para orçamentos
- [x] `README.md` - Documentação do projeto
- [x] `DEPLOY.md` - Guia de deploy detalhado
- [x] `.env.example` - Exemplo de variáveis de ambiente
- [x] `.gitignore` - Arquivos ignorados pelo Git

## Funcionalidades Implementadas
- [x] Website responsivo com todas as seções
- [x] Formulário de orçamento funcional
- [x] Integração WhatsApp (+244 940 354 740 e 222 030955)
- [x] Google Maps integrado (https://maps.app.goo.gl/nSht7bQujxWbc4DVA)
- [x] API de orçamentos serverless
- [x] SEO otimizado
- [x] Modo escuro/claro

## Estrutura para Deploy
```
jsm-sanda/
├── api/
│   └── quotes.ts          # Vercel Function para API
├── client/
│   ├── dist/              # Build output (gerado automaticamente)
│   └── src/               # Código fonte React
├── shared/
│   └── schema.ts          # Schemas compartilhados
├── vercel.json           # Configuração Vercel
├── package.json          # Dependências
└── README.md            # Documentação
```

## Comandos de Deploy

### Método 1: Via GitHub
1. Criar repositório no GitHub
2. Push do código
3. Conectar ao Vercel
4. Deploy automático

### Método 2: Via Vercel CLI
```bash
npm i -g vercel
vercel --prod
```

## Configurações Vercel
- **Build Command**: `vite build`
- **Output Directory**: `client/dist`
- **Node.js Version**: 18.x
- **Functions**: API em `/api/*`

## URLs Pós-Deploy
- **Site**: https://[seu-projeto].vercel.app
- **API**: https://[seu-projeto].vercel.app/api/quotes

## Testes Pós-Deploy
1. Testar formulário de orçamento
2. Verificar links WhatsApp
3. Confirmar Google Maps
4. Testar responsividade
5. Verificar SEO (meta tags)

## Pronto para Deploy! 🚀