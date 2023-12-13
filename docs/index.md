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

## Requisitos Funcionais

1. **Coleta Atualizada de Dados**
    - Informações já coletadas de uma base de dados que possuem dados de 2000 a 2022.

2.  **Ferramentas de Busca Avançada**
    - Permitir pesquisas diretas com critérios como município e ano .

3.  **Lista de resultados de busca**
    - Apresentar uma lista de 62 municípios ordenados por ordem alfabética e gráficos referentes aos desmatamentos de acordo com o ano selecionado .

4.  **Detalhes do Desmatamento**
    - Oferecer informações fornecidas sobre cada desmatamento, incluindo gráficos associados.

5.  **Análise de Dados**
    - Coleta e Organização de Dados: Reunir dados relevantes de desmatamento de fontes confiáveis, e formatar para análise.   

## Requisitos Não Funcionais

1.  **Segurança de Dados**
    - Garantir armazenamento seguro dos dados de desmatamento.

3.  **Desempenho**
    - Garantir que o sistema seja responsivo e capaz de lidar com um grande volume de dados e pesquisas . Os gráficos devem ser gerados de maneira rápida e eficiente, mesmo com grandes conjuntos de dados .

4.  **Usabilidade**
    - Oferece uma interface de usuário intuitiva e amigável que facilita a compreensão .

5.  **Conformidade com a Lei de Acesso à Informação (LAI)**
    - Cumprir as regulamentações da Lei de Acesso à Informação para garantir a transparência nos dados de desmatamento.

<h1 align="center">

  <a href="https://desmatazonia.netlify.app/"><img 
width=30% src="https://raw.githubusercontent.com/unb-mds/2023-2-Squad02-Desmatazonia/main/licitam/public/images/logo-desmatazonia.png" /> </a>
  <br>
   DesmataZônia
</h1>
<h3 align="center">
  Acesse o link: <a href="https://desmatazonia.netlify.app/" target="_blank">https://desmatazonia.netlify.app/</a>
</h3>


## 👨‍💻 Contribuidores
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



