# Sobre as tecnologias utilizadas no projeto:

Este relatório detalha as tecnologias e ferramentas que serão utilizadas em cada etapa do projeto com base nas arquiteturas MVC e de camadas que foram propostas.

## Em arquitetura MVC:
 ### Model: 
  
  **Tecnologias e ferramentas:**
  * Apache Tika: Utilizado para a extração de texto de documentos PDF.
  * Python: A linguagem de programação principal para a implementação do modelo.

 ### View: 
  
  **Tecnologias e ferramentas:**
  * HTML / CSS: Para criar interfaces de usuário.
  * Framework Front-End: Usado para criar uma interface amigável.
  * Bibliotecas gráficas como ChartJS e JSPDF: Utilizadas para gerar gráficos e relatórios.
  * Python: Para controlar as interações com o modelo e processar os resultados.

 ### Controller: 

 **Tecnologias e ferramentas:**
 * Python: Usado para criar a lógica de controle e coordenação das interações.

## Em arquitetura de camadas

### Grupo de interface de Usuário (UI):
  **Tecnologias e ferramentas:**
  * HTML / CSS: Para criar a interface de usuário.
  * Framework Front-End: Utilizado para tornar a interface interativa e responsiva
  * Bibliotecas gráficas como ChartJS e JSPDF: Usadas para criar gráficos e relatórios.
  * Python: Responsável por controlar as interações e processar os resultados.

### Grupo de lógica de aplicação:
**Tecnologias e ferramentas:**
* Python: Implementa a lógica de controle e coordenação das interações entre as camadas.

### Grupo de Manipulação de Entrada/ Saída de texto (Tika):
**Tecnologias e ferramentas:**
* Apache Tika: Utilizado para extrair texto de documentos PDF de forma eficaz.

### Grupo de processamento personalizado:
**Tecnologias e ferramentas:**
* Python: O script post_proc.py é implementado em Python.

### Grupo de processamento personalizado:
**Tecnologias e ferramentas:**
* Docker: Configura o ambiente com a versão mais recente do Apache Tika.
* Apache Tika: Usado em conjunto com o script 'extrair_diarios.py'.
* Python

### Grupo de gerenciamento de informações
**Tecnologias e ferramentas:**
* Script extrair_atos.sh: Realiza a extração dos atos.
* Python.



 
