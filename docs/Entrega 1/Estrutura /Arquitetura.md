# Arquitetura de Software

A arquitetura de software é a estrutura organizacional de um sistema de software, que inclui a divisão de tarefas, componentes e a comunicação entre eles. Ela desempenha um papel fundamental na criação de sistemas de software robustos, escaláveis e eficientes.

## Arquiteturas estudadas

### 1. Arquitetura Monolítica

Nesse tipo de arquitetura, todo o sistema é construído como um único bloco de código. Todos os componentes e funcionalidades estão integrados em um único aplicativo.

#### Prós:
  - Facilidade de desenvolvimento, pois tudo está em um único código base.
  - Menos complexidade de implantação, já que não há necessidade de coordenar vários serviços.
#### Contras:
  - Dificuldade em escalar horizontalmente, o que pode levar a problemas de desempenho.
  - Mudanças em um módulo podem afetar outros, tornando o desenvolvimento mais arriscado.

### 2. Arquitetura de Microserviços

Nesse modelo, o sistema é dividido em pequenos serviços independentes, cada um responsável por uma função específica. Os serviços se comunicam por meio de APIs.

#### Prós:
  - Alta escalabilidade e flexibilidade, pois os serviços podem ser dimensionados independentemente.
  - Facilita a manutenção e evolução, uma vez que os serviços podem ser atualizados sem afetar o sistema inteiro.
#### Contras:
  - Complexidade na gestão de vários serviços.
  - Overhead de comunicação entre serviços.

### 3. Arquitetura em Camadas

 Nessa abordagem, o sistema é dividido em camadas, cada uma com responsabilidades específicas. As camadas se comunicam verticalmente, passando dados de uma camada para outra.

#### Prós:
  - Separação clara de responsabilidades, facilitando a manutenção e a compreensão do sistema.
  - Facilita a reutilização de código.
#### Contras:
  - Pode ser menos eficiente, já que os dados precisam passar por várias camadas.

### 5. Arquitetura Model-View-Controller (MVC)

 A arquitetura MVC divide um sistema em três componentes principais: Model (Modelo), View (Visão) e Controller (Controlador). O Modelo lida com a lógica de negócios e os dados, a Visão lida com a apresentação e a interface do usuário, e o Controlador atua como um intermediário entre o Modelo e a Visão, gerenciando as interações do usuário.

#### Prós:
  - Separação clara de responsabilidades, tornando o código mais organizado e fácil de manter.
  - Facilita a reutilização de componentes, uma vez que o Modelo e a Visão são independentes um do outro.
  - Permite o desenvolvimento paralelo, pois diferentes equipes podem trabalhar em diferentes componentes.

#### Contras:
  - Pode introduzir complexidade adicional, especialmente em aplicativos simples.
  - Em aplicativos pequenos, a sobrecarga de implementar o MVC completo pode parecer desnecessária.
  - A interpretação errada ou má implementação do padrão pode levar a uma arquitetura confusa.


## Escolhendo a Arquitetura Monolítica

A escolha da arquitetura monolítica foi a opção mais adequada para este projeto, levando em consideração que se trata de um projeto simples e de pequeno porte. Com apenas um extrator de dados e uma interface de usuário (front-end), a unificação de todo o projeto em um único bloco de código torna-se a abordagem mais prática e menos complexa.

Nesse contexto, os benefícios da arquitetura monolítica, como a facilidade de desenvolvimento e implantação, são maximizados. Não há uma necessidade imediata de dimensionar ou escalar componentes separados, e a simplicidade da arquitetura monolítica reduz o overhead de gerenciamento que poderia ser necessário em abordagens mais complexas.

No entanto, é importante lembrar que a escolha da arquitetura deve ser sempre baseada nas necessidades específicas do projeto e em suas metas de longo prazo. À medida que o projeto cresce em complexidade ou escopo, pode ser necessário considerar a transição para uma arquitetura mais escalável, como a de microserviços, para atender às demandas futuras. A flexibilidade e escalabilidade devem ser avaliadas à medida que o projeto evolui.


## Histórico de versões:

| Versão  |  Data  | Autor  |  Descrição  |
| ------------------- | ------------------- | ------------------- | ------------------- |
| 0.1 | 15/10/2023  | Amanda Campos | Documentação Arquitetura |