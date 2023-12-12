# **DesmataZônia**


<p>
Somos o Squad 2 da disciplina de Métodos de Desenvolvimento de Software. Este repositório centraliza nossos artefatos e documentações. A página oferece uma visão organizada de nossos trabalhos, incluindo especificações, diagramas e atas de reuniões.
</p>
## 🌳 Objetivo
O projeto PRODES realiza o monitoramento por satélites do desmatamento por corte raso na Amazônia Legal e produz, desde 1988, as taxas anuais de desmatamento na região, que são usadas pelo governo brasileiro para o estabelecimento de políticas públicas. As taxas anuais são estimadas a partir dos incrementos de desmatamento identificados em cada imagem de satélite que cobre a Amazônia Legal. A primeira apresentação dos dados é realizada para dezembro de cada ano, na forma de estimativa. Os dados consolidados são apresentados no primeiro semestre do ano seguinte. Resultados recentes, a partir de análises realizadas com especialistas independentes, indicam nível de precisão próximo a 95%.


O principal objetivo do projeto é coletar, e organizar por municípios os dados provenientes do projeto PRODES, que realiza o monitoramento do desmatamento por corte raso na Amazônia Legal por meio de satélites. Utilizamos a base de dados tratada disponível no site [basedosdados.org](https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0), a qual nos proporcionou informações públicas e gratuitas sobre o desmatamento anual, a hidrografia, a vegetação e o bioma de cada unidade estadual.

Projeto refina e analisa os dados de monitoramento de desmatamento do projeto PRODES do <a href="http://terrabrasilis.dpi.inpe.br/en/home-page/" target="_blank">Instituto Nacional de Pesquisas Espaciais (INPE)</a>. 

Estamos reutilizando o [exoonero/extrato](https://github.com/exoonero/extrator) como base do projeto.


## 🗃️ Funcionalidades
 O projeto possui as seguintes funcionalidades:
 
1. **Coleta de dados de monitoramento do desmatamento** 
  	- O sistema recolhe e acessa a base de dados do desmatamento de todos os municípios de Amazonas.
  
2. **Extração de informações referentes ao desmatamento**

	- Além da segmentação dos dados por município, as informações de cada unidade estadual são categorizadas em termos de área total desmatada e área desmatada por ano.
  
3. **Análise de Dados**
  	-  O projeto processa os dados extraídos, organizando-os de forma individual para cada município durante a análise, gerando gráficos que destacam as tendências.
  
4. **Interface de Usuário** 
  	- Possui uma interface de usúario que permite encontrar as informações das licitações realizadas pelos municípios de forma transparente.

## 📄 Dependências Globais
  Certifique-se de ter as seguintes dependências globais instaladas antes de prosseguir:

    python -v: 3.11

    docker -v: 24.0.4
      
    node -v : 18.8
      
    nvm -v : 9.8
      
    yarn --version: 0.32+git
      
    nextjs 13.5.6


## ⚙️ Execução
  Após instalar as dependências, você pode executar o projeto da seguinte maneira:

    npm run dev
    # or
    yarn dev
    # or
    pnpm dev


  Abra http://localhost:3000 com seu navegador para ver o resultado.

  Ou então basta acessar o link: [https://desmatazonia.netlify.app/](https://desmatazonia.netlify.app/)


## 👨‍💻 Contribuidores
## Equipe
<table>
  <tr>
     <td align="center"><a href="https://github.com/alanagabriele"><img style="border-radius: 50%;" src="https://github.com/alanagabriele.png" width="100px;" alt=""/><br /><sub><b>Alana Gabriele</b></sub></a><br />
    <td align="center"><a href="https://github.com/acamposs"><img style="border-radius: 50%;" src="https://github.com/acamposs.png" width="100px;" alt=""/><br /><sub><b>Amanda Campos</b></sub></a><br />
    <td align="center"><a href="https://github.com/daramariabs"><img style="border-radius: 50%;" src="https://github.com/daramariabs.png" width="100px;" alt=""/><br /><sub><b>Dara Maria</b></sub></a><br />
    <td align="center"><a href="https://github.com/souzagusta"><img style="border-radius: 50%;" src="https://github.com/souzagusta.png" width="100px;" alt=""/><br /><sub><b>Gustavo Lima</b></sub></a><br />
    <td align="center"><a href="https://github.com/Angelicahaas"><img style="border-radius: 50%;" src="https://github.com/Angelicahaas.png" width="100px;" alt=""/><br /><sub><b>Harleny Angelica</b></sub></a><br />
    <td align="center"><a href="https://github.com/IsaqueSH"><img style="border-radius: 50%;" src="https://github.com/IsaqueSH.png" width="100px;" alt=""/><br /><sub><b>Isaque Santos</b></sub></a><br />
    <td align="center"><a href="https://github.com/SkywalkerSupreme"><img style="border-radius: 50%;" src="https://github.com/SkywalkerSupreme.png" width="100px;" alt=""/><br /><sub><b>Larissa Stefane</b></sub></a><br />
</table>

### Histórico de Versões

| Versão | Data       | Descrição            | Autor          | Revisor          |
|--------|------------|----------------------|----------------|----------------|
| 1.0    | 10/10/2023 | Versão inicial       | [Isaque Santos](https://github.com/IsaqueSH)  |   |
| 2.0    | 24/10/2023 | Reformulação do pages       | [Amanda Campos](https://github.com/acamposs), [Dara Maria ](https://github.com/daramariabs)  |   |

