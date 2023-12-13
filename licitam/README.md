<h1 align="center">

  <a href="https://desmatazonia.netlify.app/"><img 
width=30% src="https://github.com/unb-mds/2023-2-Squad02-Desmatazonia/blob/main/licitam/public/images/logo-desmatazonia.png" /> </a>
  <br>
  Site - DesmataZônia
    <br>
</h1>


Este é um projeto [Next.js](https://nextjs.org/) inicializado com [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Estamos reutilizando o [exoonero.github.io](https://github.com/exoonero/exoonero.github.io) como base do projeto.

# Getting Started 🌳

## Desmatamento na Amazônia - Painel de Informações

Este projeto é uma interface web que utiliza dados do projeto PRODES para monitoramento por satélites do desmatamento por corte raso na Amazônia Legal. O PRODES produz, desde 1988, as taxas anuais de desmatamento na região, fundamentais para as políticas públicas do governo brasileiro.

## Sobre o PRODES

O projeto PRODES realiza o monitoramento por satélites do desmatamento por corte raso na Amazônia Legal. Desde 1988, ele produz as taxas anuais de desmatamento na região, essenciais para o estabelecimento de políticas públicas pelo governo brasileiro. As taxas anuais são estimadas a partir dos incrementos de desmatamento identificados em cada imagem de satélite que cobre a Amazônia Legal. Os dados consolidados são apresentados no primeiro semestre do ano seguinte, com uma precisão de aproximadamente 95%.

## Objetivo do Projeto

O principal objetivo deste projeto é coletar e organizar por municípios os dados provenientes do projeto PRODES. Utilizamos a base de dados tratada disponível no [basedosdados.org](https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0), proporcionando informações públicas e gratuitas sobre o desmatamento anual, a hidrografia, a vegetação e o bioma de cada unidade estadual.

O projeto refina e analisa os dados de monitoramento de desmatamento do PRODES do [Instituto Nacional de Pesquisas Espaciais (INPE)](http://terrabrasilis.dpi.inpe.br/en/home-page/). Estamos reutilizando o [exoonero/extrato](https://github.com/exoonero/extrator) como base do projeto.
## Funcionalidades

- **Visualização Gráfica** 
    - Exiba informações sobre o desmatamento na Amazônia em gráficos interativos.
  
- **Filtro por Município** 
    - Utilize um filtro para selecionar municípios específicos e obter dados detalhados sobre o desmatamento em cada área.

- **Intervalo de Anos** 
    - Analise o desmatamento ao longo do tempo ajustando o intervalo de anos de 2000 a 2022.

## Como Usar

acesse o link [https://desmatazonia.netlify.app/](https://desmatazonia.netlify.app/)

## Instalação e Execução do Projeto

Primeiro, execute o servidor de desenvolvimento:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

Você pode começar a editar a página modificando `pages/index.tsx`. A página é atualizada automaticamente conforme você edita o arquivo.

As[rotas da API](https://nextjs.org/docs/api-routes/introduction) podem ser acessadas em [http://localhost:3000/api/hello](http://localhost:3000/api/hello). Este ponto final pode ser editado em `pages/api/hello.ts`.

O diretório  `pages/api` é mapeado para `/api/*`. Arquivos neste diretório são tratados como [rotas da API](https://nextjs.org/docs/api-routes/introduction) em vez de páginas React.


Este projeto utiliza[`next/font`](https://nextjs.org/docs/basic-features/font-optimization)para otimizar e carregar automaticamente a fonte Inter, uma fonte personalizada do Google.

## Saiba Mais

Para aprender mais sobre o Next.js, consulte os seguintes recursos:

- [Documentação do Next.js](https://nextjs.org/docs) - aprenda sobre os recursos e API do Next.js
- [Aprenda Next.js](https://nextjs.org/learn) - um tutorial interativo do Next.js.

## 👨‍💻 Contribuidores

| [Alana Gabriele](https://github.com/alanagabriele)            | [Amanda Campos](https://github.com/acamposs)              | [Dara Maria](https://github.com/daramariabs)                | [Gustavo Lima](https://github.com/souzagusta)              |
| ------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| <img src="https://github.com/alanagabriele.png" width="70"/> | <img src="https://github.com/acamposs.png" width="70" /> | <img src="https://github.com/daramariabs.png" width="70"/> | <img src="https://github.com/souzagusta.png" width="70"/> |

| [Isaque Santos](https://github.com/IsaqueSH)             | [Larissa Stéfane](https://github.com/SkywalkerSupreme)           | [Harleny Angelica](https://github.com/Angelicahaas)          |
| -------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| <img src="https://github.com/IsaqueSH.png" width="70"/> | <img src="https://github.com/SkywalkerSupreme.png" width="70"/> | <img src="https://github.com/Angelicahaas.png" width="70"/> |

## Licença ©

Este software está sob licença [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) ©