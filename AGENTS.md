# AGENTS.md - Contexto do Projeto Art Odonto Digital

## 1. Identidade do Projeto
- **Nome:** Art Odonto Digital
- **Nicho:** Clínica Odontológica 
- **Local:** Montes Claros, MG 
- **Objetivo Principal:** Conversão para WhatsApp (Agendamento)
- **Autoridade:** Dra. Hanne Fiuza (Especialista em Estética)

## 2. Stack Tecnológica (Mandatório)
- **Framework:** Next.js 14+ (App Router)
- **Estilização:** Tailwind CSS (Mobile-first)
- **Ícones:** Lucide React
- **Animações:** Framer Motion (para interações sutis, estilo "Apple")
- **Fontes:** Inter ou Montserrat (Legibilidade máxima)

## 3. Design System & Tokens (Baseado na Referência "Dr. Max")
- **Tema:** Dark Mode Premium (Sofisticado, passa autoridade).
- **Layout:**
  - Mobile First: Tudo deve ser empilhado e legível em telas pequenas.
  - Sticky CTA: Botão de WhatsApp fixo visível em todas as dobras.

## 4. Estrutura de Conteúdo (Copywriting Persuasivo)
- **Hero:** Promessa forte + Foto Dra. Hanne + CTA.
- **Prova Social:** "Sorrisos Transformados" (Antes/Depois) + Depoimentos.
- **Serviços:** Lista geral.
- **Localização:** Mapa integrado google, Endereço, Horários.
- **Footer:** Dados legais, CNPJ, Links.

## 5. Regras de Comportamento do Agente
- **Infraestrutura:** Todo componente deve pensar em SEO local e performance (Lighthouse 100).
- **Imagens:** Use placeholders inteligentes (`/placeholder.svg`) mas prepare o código para receber as fotos reais (Dra. Hanne, Antes/Depois).
- **Tracking:** Deixe IDs prontos nos botões para GTM (ex: `id="btn-whatsapp-hero"`).