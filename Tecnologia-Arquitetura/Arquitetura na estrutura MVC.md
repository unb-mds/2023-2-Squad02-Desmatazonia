# Arquitetura na estrutura MVC (Model – View - Controller)

## Sumário

1- [VIEW](#1--VIEW)

 * [1.1 - Tecnologias e métodos utilizados na View ](#1.1---Tecnologias-e-métodos-utilizados-na-View)

 2- [MODEL](#2--MODEL)
 
 * [2.1 - Tecnologias e métodos utilizados no Model ](#2.1---Tecnologias-e-métodos-utilizados-no-Model)

  3- [CONTROLLER](#3--CONTROLLER)

  * [3.1 - Tecnologias e métodos utilizados no Controller ](#3.1---Tecnologias-e-métodos-utilizados-no-controller)

4- [Como será o fluxo do Processamento](#4--Processamento)

5- [Diagrama MVC](#5--Diagrama-MVC)

## VIEW

**Função desta etapa:** É a parte do programa responsável pela interação do usuário com as informações exibidas. 

Desse modo, neste projeto em andamento, esta interação ocorrerá por meio de uma interface gráfica de um site, o qual apresentará informações sobre o projeto e permitirá ao usuário procurar dados do Diário Oficial relacionados à licitações no estado Amazonas.

* Para permitir a procura dos dados, a página do site terá uma interface de linha de comando que exibe os resultados do processamento.

### Tecnologias e métodos utilizados na View:

* HTML / CSS – Utilizados no desenvolvimento da estrutura do layout do site.

* Framework Front-End – Utilizado para criar um interface interativa com o usuário.
  
* Bibliotecas gráficas como ChartJS e JSPDF - Permite criar gráficos interativos (Planejamento para o site).
  
* Python – Como irá envolver processamento de texto, a linguagem python vai ser utilizada como programação para ler os arquivos e realizar as operações.
  
* Auxílio – Bootstrap – É um framework de código aberto que servirá de auxílio e consulta para a realização do site.

## MODEL

**Função desta etapa:** É a parte responsável por gerenciar a lógica e os dados manipulados no projeto.

Dessa maneira, neste projeto, o Modelo abrangerá a manipulação de arquivos PDF, extração de texto, processamento do texto e criação de arquivos Proc e Gabarito.

### Tecnologias e métodos utilizados no Model:

* Biblioteca Tika para extração de texto de PDF.
  
* Linguagem de programação Python para scripts de processamento (post_proc.py, criar_dataset_atos.py, extrair_diarios.py).
  
* Manipulação de arquivos e texto em Python.

## CONTROLLER

**Função desta etapa:** É responsável por coordenar a interação entre o Modelo e a Visão. 

Assim, neste projeto, está etapa controla a execução dos processos de coleta, de extração, de segmentação e de criação de datasets.

### Tecnologias e métodos utilizados no Controller:

* URL ou URI
  
* Scripts em Python para coordenar a execução do fluxo.
  
* Gerenciamento de entrada do usuário.

## Como será o fluxo do processamento

1. O usuário inicia a iteração com o site (View).
2. O Controlador coordena as ações do usuário.
3. O Controlador envia instruções ao Modelo.
4. O Modelo utiliza a Biblioteca Tika para extrair texto de arquivos PDF.
5. O Modelo realiza o processamento do texto (post_proc.py).
6. O Modelo cria arquivos Proc e Gabarito (método usando Python).
7. O Modelo retorna os resultados ao Controlador.
8.  O Controlador exibe os resultados ao usuário (Visão).

## Diagrama MVC

## Histórico de Versões

| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
| 0.1 | 15/10/2023  | Larissa Stéfane | Apresentação e Explicação |
