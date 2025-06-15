#!/bin/bash

# JSM SANDA - Script de Deploy para Vercel

echo "🚀 Preparando JSM SANDA para deploy no Vercel..."

# 1. Limpar builds anteriores
echo "🧹 Limpando builds anteriores..."
rm -rf client/dist
rm -rf dist

# 2. Instalar dependências
echo "📦 Instalando dependências..."
npm install

# 3. Build do projeto
echo "🔨 Fazendo build do projeto..."
npm run build

# 4. Verificar se o build foi bem-sucedido
if [ -d "client/dist" ]; then
    echo "✅ Build concluído com sucesso!"
    echo "📁 Arquivos gerados em client/dist/"
    ls -la client/dist/
else
    echo "❌ Erro no build!"
    exit 1
fi

# 5. Verificar configurações
echo "🔍 Verificando configurações..."
if [ -f "vercel.json" ]; then
    echo "✅ vercel.json encontrado"
else
    echo "❌ vercel.json não encontrado!"
fi

if [ -f "api/quotes.ts" ]; then
    echo "✅ API configurada"
else
    echo "❌ API não encontrada!"
fi

echo ""
echo "🎉 Projeto pronto para deploy no Vercel!"
echo ""
echo "📋 Próximos passos:"
echo "1. Fazer push para GitHub"
echo "2. Conectar repositório no Vercel"
echo "3. Deploy automático"
echo ""
echo "🔗 Links importantes:"
echo "- Vercel: https://vercel.com"
echo "- Documentação: README.md"
echo "- Guia de deploy: DEPLOY.md"