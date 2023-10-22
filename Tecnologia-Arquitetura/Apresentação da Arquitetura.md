# Apresentação da arquitetura do projeto:

## Sumário

 * [1.0 - Introdução](#1.0---Introdução)

 * [2.0 - Arquitetura MVC](#2.0---Arquitetura-MVC)

 * [3.0 - Arquitetura de Camadas](#3.0---Arquitetura-de-Camadas)

 * [4.0 - Sobre o projeto](#4.0---SObre-o-Projeto)



## Introdução
  Para o desenvolvimento de um software ser organizado, é necessário que ele seja dividido em diversas etapas e uma dessas etapas, uma das mais essenciais, é a formulação de uma arquitetura adequada para o projeto, uma vez que ela é quem auxilia na organização e na estruturação do código. Além disso, também é responsável por auxiliar na eficiência da implementação do código. 

  Sendo assim, devido à importância da arquitetura, este projeto adota como base duas arquiteturas de software fundamentais: a **arquitetura Modelo-Visão-Controlador (MVC)** e a **arquitetura em camadas**. 

## Arquitetura MVC (Modelo-Visão-Controlador)

**O que é:** A arquitetura Modelo-Visão-Controlador, ou MVC, é um padrão de projeto que tem sido amplamente utilizado no desenvolvimento de aplicativos e de sites. Isso porque ela tem como objetivo principal separar as principais preocupações do desenvolvimento de software em três grupos: a lógica de negócios, a apresentação e a interação do usuário, nomeados de modelo, visão e controlador.

* **Model (Modelo)**: Esta camada representa a lógica de negócios e a estrutura de dados do sistema. Desse modo, nela, nós lidamos com a manipulação e com o processamento dos dados, bem como com as regras de negócios subjacentes.

* **Visão (View)**: A camada de Visualização é responsável por apresentar os dados aos usuários e interagir com eles. Sendo assim, essa parte é quem lida com a interface do usuário, a exibição de informações e a captura de entradas do usuário.
*   * Um ponto importante sobre a View é que ela não possui lógica de negócios, o que a torna altamente adaptável e fácil de manter.

* **Controlador (Controller)**: O Controlador atua como um intermediário entre as camadas de Modelo e Visualização. Portanto, ele é quem gerencia a interação entre essas camadas ao controlar o fluxo de processamento e ao responde a eventos do usuário. Ademais, o Controlador também é responsável por rotear as solicitações dos usuários para a camada de Modelo e atualizar a camada de Visualização com os dados apropriados.

## Arquitetura de camadas:

Já a arquitetura em camadas é uma abordagem de design a qual divide um sistema de software em várias camadas, cada uma com uma responsabilidade específica. Assim, cada camada é independente e se comunica com as camadas adjacentes por meio de interfaces ou ligações bem definidas.

Nós escolhemos usá-la também porque essa arquitetura promove a modularidade, a escalabilidade e a facilidade de manutenção do software.

* Para isso, no projeto, nós dividimos a implementação em 4 grupos, cada um com suas prórpias camadas. Os grupos são:

  **Grupo de interface de Usuário (UI)**: Esta camada representa a interface gráfica do site do projeto, onde as interações com o usuário são iniciadas e onde os comandos de pesquisa são executados primeiramente. Com isso, ela usa tecnologias como HTML/CSS, frameworks front-end e bibliotecas gráficas para criar uma experiência de usuário amigável.

  **Grupo de lógica de aplicação**: A Lógica de Aplicação gerencia as interações entre as camadas inferiores, controla o fluxo de processamento e gerencia eventos. É implementada em Python, fornecendo a lógica de negócios do sistema.

  **Grupo de Manipulação de Entrada/ Saída de texto (Tika)**: Responsável pela extração de texto de documentos PDF e pela preparação deste texto para processamento posterior. Ela utiliza o Apache Tika como tecnologia para a extração de texto.

  **Grupo de processamento personalizado**: É quando o script post_proc.py realiza o processamento personalizado do texto extraído, permitindo a extração das informações relevantes.

  **Grupo de gerenciamento de informações**:Os dados processados são gerenciados nesta camada, incluindo a organização de arquivos de saída, como Arquivos de Processamento e Arquivos de Gabarito.

## Sobre o projeto: 

  Existe um documento/relatório específico o qual é mostrado como cada arquitetura foi implementada para o projeto, você pode encontrálos em Tecnologia-Arquitetura.

## Histórico de Versões

| Versão  |  Data  | Autora  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
| 0.1 | 15/10/2023  | Larissa Stéfane | Apresentação inicial da arquitetura|
