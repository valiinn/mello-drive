# Mello Transportes

Landing page premium monocromática para transporte particular e executivo, focada em WhatsApp.

## Estrutura

1. Hero  
2. Conheça-me  
3. Serviços  
4. Veículos  
5. Diferenciais  
6. Opiniões (exibida apenas com avaliações reais)  
7. CTA final  

## Como rodar

```bash
npm install
npm run dev
```

## Configuração

Edite `src/config/site.ts` e `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=5511999999999
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Fotos dos veículos

- `public/vehicles/geely-ex2-max.webp`
- `public/vehicles/renault-kwid.webp`

Atualize os caminhos em `src/config/site.ts`. Use fotos com o carro inteiro (sem cortes).

### Avaliações

Adicione avaliações reais no array `testimonials` em `src/config/site.ts`. O carrossel infinito só aparece quando houver itens.
