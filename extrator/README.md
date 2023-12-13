
<h1 align="center">

  <a href="https://desmatazonia.netlify.app/"><img 
width=30% src="https://github.com/unb-mds/2023-2-Squad02-Desmatazonia/blob/main/licitam/public/images/logo-desmatazonia.png" /> </a>
  <br>
  Extrator - DesmataZônia
    <br>
</h1>
<h4 align="center">Extrator do desmatamento nos municípios do Amazonas e apurador dos dados recolhidos dos anos 2000 a 2022 pelo  <a href="http://terrabrasilis.dpi.inpe.br/en/home-page/" target="_blank">Instituto Nacional de Pesquisas Espaciais (INPE)</a>.</h4>

<p align="center">
    <img src="https://img.shields.io/badge/python-%230095D5.svg?&style=for-the-badge&logo=python&logoColor=white"/>
</p>

<p align="center">
  <a href="#sobre">Sobre</a> •
  <a href="#fluxo-de-processamento">Fluxo de Processamento</a> •
  <a href="#manual">Manual</a> •
  <a href="#como-usar">Como Usar</a> •
  <a href="#related">Related</a> 
</p>

## Sobre
O projeto PRODES realiza o monitoramento por satélites do desmatamento por corte raso na Amazônia Legal e produz, desde 1988, as taxas anuais de desmatamento na região, que são usadas pelo governo brasileiro para o estabelecimento de políticas públicas. As taxas anuais são estimadas a partir dos incrementos de desmatamento identificados em cada imagem de satélite que cobre a Amazônia Legal. A primeira apresentação dos dados é realizada para dezembro de cada ano, na forma de estimativa. Os dados consolidados são apresentados no primeiro semestre do ano seguinte. Resultados recentes, a partir de análises realizadas com especialistas independentes, indicam nível de precisão próximo a 95%.


O principal objetivo do projeto é coletar, converter em texto e organizar por municípios os dados provenientes do projeto PRODES, que realiza o monitoramento do desmatamento por corte raso na Amazônia Legal por meio de satélites. Utilizamos a base de dados tratada disponível no site [basedosdados.org](https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0), a qual nos proporcionou informações públicas e gratuitas sobre o desmatamento anual, a hidrografia, a vegetação e o bioma de cada unidade estadual.

Além da segmentação dos dados por município, as informações de cada unidade estadual são categorizadas em termos de área total desmatada e área desmatada por ano.

### Fluxo de Processamento
Para tornar mais fácil o fluxo de processamento, o projeto foi dividido em duas fases.

1. Na primeira fase, o principal objetivo foi propor e avaliar com sucesso um algoritmo capaz de separar o conteúdo do monitoramento de desmatamento do PRODES por município. Essa etapa foi concluída com êxito na primeira versão, concentrando-se na coleta e na segmentação por municípios.

2. A segunda fase abordou a extração de informações relevantes. O objetivo principal dessa etapa foi utilizar algoritmos computacionais para classificar e extrair informações mais específicas sobre o desmatamento. Dado que o monitoramento continha informações abrangentes sobre vegetação, hidrografia, bioma, entre outros, o foco do nosso projeto foi direcionado para monitorar e analisar exclusivamente informações relacionadas ao desmatamento.

 
### Manual
```
Carregamento da bade de dados tratada -> pré-processamento dos dados -> Arquivo csv 
-> extrator_desmatamento.py -> Arquivos processados do csv em formato JSON -> 
extrair_dados_gerais.py -> Arquivo processado do desmatamento por ano por município.
```
## Carregamento dos dados
```
import basedosdados as bd

# Para carregar o dado direto no pandas
df = bd.read_table(dataset_id='br_inpe_prodes',
table_id='municipio_bioma',
billing_project_id="<YOUR_PROJECT_ID>")
```

## Como Usar
Ao coletar a base de dados do [basedosdados.org](https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0) realize os seguintes passos: <br><br>
1. Carregamento dos dados<br>
```
import basedosdados as bd

# Para carregar o dado direto no pandas
df = bd.read_table(dataset_id='br_inpe_prodes',
table_id='municipio_bioma',
billing_project_id="<YOUR_PROJECT_ID>")
```
> **Note**
> No [site](https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0), as opções para carregar os dados utilizando SQL, R, Stata, e realizar o download estão disponíveis.<br>
2. Pré-processar a base de dados e salvá-la em um arquivo CSV usando o `database_desmatamento.ipynb`.<br>

3. Extrair informações relevantes do arquivo CSV, separando-as por municípios, e salvá-las em arquivos JSON usando o `extrator_desmatamento.py`.<br>

4. Extrair informações sobre a área total desmatada e a área desmatada por ano de cada município, salvando-as em um único arquivo JSON com o `extrator_dados_gerais.py`.<br>

5. Criar um JSON contendo o nome de todos os municípios usando o `municípios.py`.
<br>

## Related

[DesmataZônia](https://desmatazonia.netlify.app) - Website do Projeto onde os dados aqui capturados são exibidos.

Os dados exibidos no site estão na pasta: extrator/dados_desmatamento 

## 👨‍💻 Contribuidores

| [Alana Gabriele](https://github.com/alanagabriele)            | [Amanda Campos](https://github.com/acamposs)              | [Dara Maria](https://github.com/daramariabs)                | [Gustavo Lima](https://github.com/souzagusta)              |
| ------------------------------------------------------------- | --------------------------------------------------------- | ----------------------------------------------------------- | ---------------------------------------------------------- |
| <img src="https://github.com/alanagabriele.png" width="70"/> | <img src="https://github.com/acamposs.png" width="70" /> | <img src="https://github.com/daramariabs.png" width="70"/> | <img src="https://github.com/souzagusta.png" width="70"/> |

| [Isaque Santos](https://github.com/IsaqueSH)             | [Larissa Stéfane](https://github.com/SkywalkerSupreme)           | [Harleny Angelica](https://github.com/Angelicahaas)          |
| -------------------------------------------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------ |
| <img src="https://github.com/IsaqueSH.png" width="70"/> | <img src="https://github.com/SkywalkerSupreme.png" width="70"/> | <img src="https://github.com/Angelicahaas.png" width="70"/> |

## Licença ©

Este software está sob licença [MIT](https://github.com/nhn/tui.editor/blob/master/LICENSE) ©