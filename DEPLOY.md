# Guia de Deploy JSM SANDA - Vercel

## Passos para Deploy no Vercel

### 1. Preparar o Repositório GitHub
```bash
# Inicializar Git (se não existir)
git init
git add .
git commit -m "Projeto JSM SANDA pronto para deploy"

# Conectar ao repositório GitHub
git remote add origin https://github.com/SEU_USUARIO/jsm-sanda.git
git push -u origin main
```

### 2. Importar no Vercel
1. Acesse [vercel.com](https://vercel.com)
2. Conecte sua conta GitHub
3. Clique "New Project"
4. Selecione o repositório JSM SANDA
5. Configure conforme abaixo:

### 3. Configurações de Build
- **Framework Preset**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `client/dist`
- **Install Command**: `npm install`

### 4. Variáveis de Ambiente (Opcionais)
```
NODE_ENV=production
```

### 5. Domínio Personalizado (Opcional)
1. No dashboard do Vercel, vá para "Domains"
2. Adicione seu domínio personalizado
3. Configure DNS conforme instruções

## Estrutura de Deploy

### Frontend (Static)
- Build com Vite
- Arquivos estáticos servidos pelo Vercel CDN
- Otimização automática de imagens

### Backend (Serverless Functions)
- API em `/api/quotes.ts`
- Execução serverless no Vercel
- CORS configurado para produção

## Verificações Pós-Deploy

### ✅ Checklist
- [ ] Site carrega corretamente
- [ ] Formulário de orçamento funciona
- [ ] WhatsApp abre corretamente
- [ ] Google Maps exibe localização
- [ ] Modo escuro/claro funciona
- [ ] Site é responsivo
- [ ] SEO tags estão presentes

### URLs Importantes
- **Produção**: https://SEU_PROJETO.vercel.app
- **API**: https://SEU_PROJETO.vercel.app/api/quotes
- **Dashboard**: https://vercel.com/dashboard

## Troubleshooting

### Erro de Build
```bash
# Testar build localmente
npm run build
```

### Erro de API
- Verificar logs no dashboard Vercel
- Testar endpoint `/api/quotes` no browser

### Performance
- Vercel Analytics disponível no dashboard
- Web Vitals monitoramento automático