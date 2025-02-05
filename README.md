# Next.js Weather App

Este projeto é um boilerplate baseado em Next.js, configurado com uma integração à API [Open-Meteo](https://open-meteo.com/) para consulta de previsão do tempo e informações sobre cidades.

## 📋 Funcionalidades

- **Consulta de previsão do tempo**: Busca dados de temperatura, condições climáticas, entre outros, fornecidos pela Open-Meteo API.
- **Busca de cidades**: Permite ao usuário procurar cidades pelo nome para visualizar suas condições climáticas.
- **Configuração completa de desenvolvimento**: Inclui Husky, lint-staged, ESLint, Prettier, Jest, Storybook e Plop para automatizar tarefas de desenvolvimento e padronização de código.
- **UI com Tailwind CSS**: Utiliza Tailwind para estilização rápida e customizável.
- **Teste automatizado**: Configuração com Jest e React Testing Library para testes de unidade e integração.

---

## 🛠️ Configuração do Projeto

### Requisitos

- Node.js v18.20.2 ou superior
- PNPM como gerenciador de pacotes

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/WillFelisberto/Weather-Forecast
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd Weather-Forecast
   ```

3. Instale as dependências:
   ```bash
   pnpm install
   ```

## Variáveis de Ambiente

```env
  NEXT_PUBLIC_APP_DOMAIN=
  NEXT_PUBLIC_WEATHER_API_URL=
  NEXT_PUBLIC_GEOCODING_API_URL=
```

## 🚀 Scripts Disponíveis

- `pnpm dev`: Inicia o servidor de desenvolvimento.
- `pnpm build`: Compila a aplicação para produção.
- `pnpm start`: Inicia o servidor de produção.
- `pnpm lint`: Analisa o código em busca de problemas.
- `pnpm test`: Executa os testes automatizados.
- `pnpm storybook`: Inicia o Storybook.
- `pnpm generate`: Gera novos componentes ou páginas usando Plop.

## 📚 Tecnologias Utilizadas

- **Framework:** [Next.js](https://nextjs.org/)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Teste:** Jest e React Testing Library
- **Componentização:** Storybook
- **Automação:** Husky, lint-staged, Plop

## 🌐 API Utilizada

- **[Open-Meteo API](https://open-meteo.com/)**: Uma API gratuita para consulta de previsão do tempo.

## 📄 Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE` para mais informações.
