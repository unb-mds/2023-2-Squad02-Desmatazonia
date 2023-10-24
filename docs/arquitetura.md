# Arquitetura

## Sumário
1- [Apresentação](#1--Apresentação)

2- [Fluxo de processamento](#1--Fluxo-processamento)

 *   [1.1 - Grupo de apresentação ](#2.1---Grupo-de-apresentação)
 *   [1.2 - Grupo de processamento de Dados ](#2.2---Grupo-de-processamento-de-Dados)
 *   [1.3 - Grupo de gerenciamento de dados ](#2.3---Grupo-de-gerenciamento-de-dados)
 *   [1.4 - Grupo de integração de testes](#2.4---Grupo-de-integração-de-testes)
 *   [1.5 - Grupo de pós-processamento](#2.5---Grupo-de-pós-processamento)
 *   [1.6 - Grupo de configuração e finalização](#2.6---Grupo-de-configuração-e-finalização)

3- [Diagrama de Camadas ](#3--Diagrama-Camadas)

## Apresentação

**Objetivo**: Este documento descreve a arquitetura de processamento em camadas do projeto que envolve a extração e processamento de diários em formato PDF a fim de procurar licitaçõs no estado do Amazonas.

## Fluxo de processamento

### Grupo de apresentação

#### Camada de interface de usuário
Esta camada é a interface com o usuário, ou seja, a interface gráfica do site do projeto. Portanto, nesta camada, são iniciadas as interações e o comando da pesquisa.

* **Tecnologias:** HTML / CSS , Framework Front-End, Bibliotecas gráficas como ChartJS e JSPDF, linguagem Pytho.

#### Camada de Lógica de Aplicação
A lógica de aplicação é gerenciada, assim, é coordenada as interações entre as camadas inferiores, controla o fluxo de processamento e gerencia eventos.

* **Tecnologias:** Linguagem python.

### Grupo de processamento de Dados

#### Camada de Manipulação de Entrada/Saida de Texto:
Ocorre a extração de texto dos documentos PDF e a preparação do texto para o processamento posteriormente.

* **Tecnologias:** Apache Tika (para extração de texto de documentos PDF).

#### Camada de processamento Personalizado (post_proc.py): 
Essa camada representa o script post_proc.py, que é responsável pelo processamento do texto extraído, o que permite a extração das informações relevantes.

* **Tecnologias:** Tecnologia: Script post_proc.py.

### Grupo de gerenciamento de dados

#### Camada de gerenciamento da informação:
Os dados processados são gerenciados. Isso inclui a organização dos arquivos de saída, como Arquivos de Processamento e Arquivos de Gabarito.

* **Tecnologias:** Os PDFs que foram lidos são processados de acordo com as informações pedidas pelo usuário.

### Grupo de integração de testes

#### Camada de integração com Docker (Manuseando contêiner Apache Tika):
É usado o Docker para realizar a a configuração do ambiente e permitir a utilização do Apache Tika.

* **Tecnologias:** Tecnologia: Docker.

#### Camada de gerenciamento de tarefas( com proc.sh):
Responsável por gerenciar a execução do script proc.sh. Desse modo, ela pode incluir a gestão de tarefas e a coordenação de processos.

* **Tecnologias:** Apache Tika, Script ‘extrair_diarios.py’

#### Camada de testes:
Esta camada abrange a execução de testes para garantir a funcionalidade correta do sistema.

* **Tecnologias:** Python 3, Testes unitários (unittest).

### Grupo de pós-processamento:

#### Camada de segmentação de Diários Municipais:
Segmentação do diário da AMA em diários municipais usando o script extrair_diarios.py.o que permite dividir o diário em seções menores.

* **Tecnologias:** Script extrair_diarios.py.

#### Camada de Extração de Atos:
Os atos dos diários municipais são extraídos pelo script extrair_atos.sh.

* **Tecnologias:** Tecnologia: Script extrair_atos.sh.

#### Camada de geração de base de análise:
A geração da base de dados para análise ocorre nesta camada usando o script criar_dataset_atos.py. Para isso, envolve-se o processamento dos arquivos -atos.json a fim prepará-los para análise.

* **Tecnologias:** Python 3, Script criar_dataset_atos.py.

#### Camada de Execução do ‘extrair_diarios.py’
A camada executa o script extrair_diarios.py, que recebe como parâmetro o texto extraído do PDF e gera os arquivos processados no mesmo diretório do texto extraído.

* **Tecnologias:** Python 3, Script extrair_diarios.py.

### Grupo de configuração e finalização

#### Camada de configuração do Docker:
Usa-se a configuração do Docker para garantir que a versão mais recente do Apache Tika seja utilizada.

* **Tecnologias:** Docker

#### Camada de finalização:
Envolve a etapa final do processo, onde os detalhes finais do gabarito são configurados, incluindo a remoção de linhas em branco e a formatação.

* **Tecnologias:** Ferramentas de manipulação de texto

## Diagrama MVC

<div align="center">
  <img src="Arquitetura de camadas.png">
  Figura 1: Diagrama MVC 1.0
</div>

## Histórico de Versões

| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
| 0.1 | 15/10/2023  | Larissa Stéfane | Apresentação e Explicação |












