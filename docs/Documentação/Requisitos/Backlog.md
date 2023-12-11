| Épicos                                       | Features                                       | Critérios de Aceitação                                   |
|----------------------------------------------|------------------------------------------------|----------------------------------------------------------|
| **Extração de Dados de Desmatamento**            | *Coleta de Dados*                 | O sistema deve ser capaz de exibir os dados atualizados fornecidos por fontes necessárias, os quais foram gerados e estão disponíveis em um arquivo JSON.
|
 **Interface do Usuário de Busca e Análise**       | *Página de Pesquisa de desmatamentos*             | Os usuários devem poder inserir critérios de pesquisa e receber resultados relevantes.                              
|                                               | *Listagem de Resultados*                       | A lista deve ser clara e ordenada por ordem alfabética. E devem ser apresentados gráficos referentes a cada municipio.                                                                        |
|                                                 | *Detalhes do desmatamento*                        | Os detalhes devem incluir todas as informações relevantes.                                                                |
|                                                 | *Análise de Dados*                            | As ferramentas de análise devem ser intuitivas e informativas.                                                           |


## Personas

### Cidadão Interessado em Desmatamentos (Persona Principal)

Interessado em acompanhar desmatamentos no Amazonas por motivos públicos ou de conhecimento.

**Necessidades**:

- Acesso simples aos dados de desmatamentos.
- Compreensão fácil dos resultados dos desmatamentos.
- Capacidade de busca de desmatamentos mais agravantes.

### Pesquisador em Políticas de Conservação Ambiental (Pesquisador)

Os desmatamentos no Amazonas despertam interesse em diversos grupos, como ambientalistas, defensores da natureza, comunidades indígenas, cientistas e pesquisadores. Eles buscam informações detalhadas sobre o desmatamento para fundamentar campanhas de conservação, compreender os impactos ambientais, preservar territórios e recursos naturais. Esses dados são essenciais para embasar estudos, promover a conscientização e direcionar ações que visam à preservação do Amazonas e de suas diversas interconexões ecológicas.

**Necessidades**:

  - Acesso a dados detalhados e completos de desmatamentos.
  - Ferramentas de análise avançadas para informações profundas.
  - Acesso a informações históricas e tendências.



## Requisitos Funcionais

1. **Coleta Atualizada de Dados**
    
    - Informações já coletadas de uma base de dados que possuem dados de 2000 a 2022.

2. **Ferramentas de Busca Avançada**
    - Permitir buscas diretas com critérios como município e ano.

3. **Listagem de Resultados de Busca**
    - Apresentar uma lista de 62 municípios ordenada por ordem alfabética e gráficos referentes aos desmatamentos de acordo com o ano selecionado.

4. **Detalhes do Desmatamento**
    - Oferecer informações detalhadas sobre cada desmatamento, incluindo gráficos associados.

5. **Análise de Dados**
    - Coleta e Organização de Dados: Reunir dados relevantes de desmatamento de fontes confiáveis, e formatar para análise.   

## Requisitos Não Funcionais

1. **Segurança de Dados**
    - Garantir armazenamento seguro dos dados de desmatamento.

3. **Desempenho**
    - Garantir que o sistema seja responsivo e capaz de lidar com um grande volume de dados e buscas. Os gráficos devem ser gerados de maneira rápida e eficiente, mesmo com grandes conjuntos de dados.

4. **Usabilidade**
    - Oferecer uma interface do usuário intuitiva e amigável que facilite a compreensão.

5. **Conformidade com a Lei de Acesso à Informação (LAI)**
    - Cumprir as regulamentações da Lei de Acesso à Informação para garantir transparência nos dados de desmatamento.

6. **Manutenção e Suporte**
    - Implementar um plano de manutenção e suporte contínuo para manter o sistema funcional e otimizado, e garantir que os gráficos possam ser facilmente modificados ou atualizados sem grandes complicações técnicas.
