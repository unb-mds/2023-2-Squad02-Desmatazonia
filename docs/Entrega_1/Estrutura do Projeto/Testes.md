# Relatórios do Tests Unitário 


## Teste do Extrator_Desmatamento

- **Objetivo do Teste:**
  - Verificar se a lógica de extração de desmatamento e a criação de arquivos JSON para cada município estão funcionando corretamente.

- **Configuração Inicial:**
  - Foi criado um DataFrame de exemplo `dados_desmatamento` contendo dados fictícios.
  - Foi criado um diretório temporário `temp_dados_desmatamento_json` para armazenar os arquivos JSON gerados durante o teste.

- **Teste 1: Agrupamento de Dados e Criação de Arquivos JSON**
  - **Passos:**
    - Os dados no DataFrame foram agrupados por município.
    - Para cada município, foram removidas as colunas "bioma" e "id" dos dados.
    - Foi adicionada a chave "nome_municipio" aos dados.
    - Foi criado um arquivo JSON para cada município no diretório temporário.

  - **Expectativas:**
    - Os arquivos JSON devem ser criados corretamente para cada município.
    - Os arquivos JSON devem conter os dados esperados.

- **Teste 2: Verificação dos Resultados**
  - **Passos:**
    - Cada arquivo JSON foi lido e os dados foram comparados com os dados originais.
  
  - **Expectativas:**
    - Cada arquivo JSON deve existir no diretório temporário.
    - O conteúdo de cada arquivo JSON deve corresponder aos dados originais após a remoção das colunas "bioma" e "id".

- **Configuração Final:**
  - O diretório temporário foi removido após a conclusão do teste.

**Resultado do Teste:**
- O teste foi executado com sucesso, e todas as expectativas foram atendidas.
- Os arquivos JSON foram criados corretamente, e o conteúdo de cada arquivo correspondeu aos dados originais.

**Observações Adicionais:**
- Este teste cobre a criação de arquivos JSON para cada município e a verificação de seus conteúdos.
- A lógica de agrupamento e criação de arquivos foi encapsulada em funções, tornando o teste mais modular e facilitando futuras manutenções.
