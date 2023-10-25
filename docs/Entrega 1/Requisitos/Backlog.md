| Épicos                                       | Features                                       | Critérios de Aceitação                                   |
|----------------------------------------------|------------------------------------------------|----------------------------------------------------------|
| **Extração de Dados de Licitações**            | *Coleta de Dados Automatizada*                 | O sistema deve coletar dados de todas as fontes necessárias e gerar um arquivo JSON atualizado.                         |
|                                                 | *Atualização Periódica*                        | O sistema deve ser capaz de atualizar os dados regularmente.                                                             |
| **Interface do Usuário de Busca e Análise**       | *Página de Pesquisa de Licitações*             | Os usuários devem poder inserir critérios de pesquisa e receber resultados relevantes.                               |
|                                                 | *Listagem de Resultados*                       | A lista deve ser clara e ordenada por relevância.                                                                         |
|                                                 | *Detalhes da Licitação*                        | Os detalhes devem incluir todas as informações relevantes.                                                                |
|                                                 | *Análise de Dados*                            | As ferramentas de análise devem ser intuitivas e informativas.                                                           |


## Personas

### Cidadão Interessado em Licitações (Persona Principal)

- **Descrição**: Interessado em acompanhar licitações no Amazonas por motivos públicos ou de conhecimento.
- **Necessidades**:
  - Acesso simples aos dados de licitações.
  - Compreensão fácil dos resultados das licitações.
  - Capacidade de busca de licitações relevantes.

### Pesquisador em Políticas Públicas e Finanças (Pesquisador)

- **Descrição**: Acadêmicos, jornalistas e analistas que utilizam dados de licitações para pesquisas em políticas públicas e finanças.
- **Necessidades**:
  - Acesso a dados detalhados e completos de licitações.
  - Ferramentas de análise avançadas para investigações profundas.
  - Acesso a informações históricas e tendências.

### Aluno de Ciências Sociais ou Economia (Estudante)

- **Descrição**: Estudantes que desejam aprender sobre processos de licitação e políticas públicas.
- **Necessidades**:
  - Acesso a dados de licitações para pesquisa acadêmica.
  - Conteúdo educacional sobre licitações e processos governamentais.
  - Acesso a exemplos e estudos de caso para fins de aprendizado.


## Requisitos Funcionais

1. **Coleta Automatizada de Dados**
    - Coletar dados de fontes diversas para gerar um documento JSON atualizado.

2. **Ferramentas de Busca Avançada**
    - Permitir buscas avançadas com critérios como data, valor e categoria.

3. **Listagem de Resultados de Busca**
    - Apresentar uma lista de licitações ordenada por relevância.

4. **Detalhes da Licitação**
    - Oferecer informações detalhadas sobre cada licitação, incluindo documentos associados.

5. **Envio de Licitações por Agentes Públicos**
    - Permitir agentes públicos a enviar informações sobre licitações por meio de uma interface de envio.

6. **Análise de Dados**
    - Incluir ferramentas de análise para identificar tendências, como análise de séries temporais e análise de categorias de licitações.

## Requisitos Não Funcionais

1. **Segurança de Dados**
    - Garantir armazenamento seguro dos dados de licitações.

2. **Atualização Periódica**
    - Atualizar os dados pelo menos uma vez por dia.

3. **Desempenho**
    - Garantir que o sistema seja responsivo e capaz de lidar com um grande volume de dados e buscas simultâneas.

4. **Usabilidade**
    - Oferecer uma interface do usuário intuitiva e amigável.

5. **Conformidade com a Lei de Acesso à Informação (LAI)**
    - Cumprir as regulamentações da Lei de Acesso à Informação para garantir transparência nas licitações públicas.

6. **Manutenção e Suporte**
    - Implementar um plano de manutenção e suporte contínuo para manter o sistema atualizado.
