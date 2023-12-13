# Testes


## Teste do Extrator_Desmatamento 


**Objetivo do Teste:**

Verificar se a lógica de extração de desmatamento e a criação de arquivos JSON para cada município estão funcionando corretamente.

**Configuração Inicial**

- Foi criado um DataFrame de exemplo `dados_desmatamento` contendo dados fictícios.
- Foi criado um diretório temporário `temp_dados_desmatamento_json` para armazenar os arquivos JSON gerados durante o teste.

**Teste 1: Agrupamento de Dados e Criação de Arquivos JSON**

   - **Passos**

    - Os dados no DataFrame foram agrupados por município.
    - Para cada município, foram removidas as colunas "bioma" e "id" dos dados.
    - Foi adicionada a chave "nome_municipio" aos dados.
    - Foi criado um arquivo JSON para cada município no diretório temporário.

  - **Expectativas**

    - Os arquivos JSON devem ser criados corretamente para cada município.
    - Os arquivos JSON devem conter os dados esperados.

**Teste 2: Verificação dos Resultados**

   - **Passos**

    - Cada arquivo JSON foi lido e os dados foram comparados com os dados originais.
  
  - **Expectativas**

    - Cada arquivo JSON deve existir no diretório temporário.
    - O conteúdo de cada arquivo JSON deve corresponder aos dados originais após a remoção das colunas "bioma" e "id".

**Configuração Final**
  
O diretório temporário foi removido após a conclusão do teste.

**Resultado do Teste**

  - O teste foi executado com sucesso, e todas as expectativas foram atendidas.
  - Os arquivos JSON foram criados corretamente, e o conteúdo de cada arquivo correspondeu aos dados originais.

**Observações Adicionais**

  - Este teste cobre a criação de arquivos JSON para cada município e a verificação de seus conteúdos.
  - A lógica de agrupamento e criação de arquivos foi encapsulada em funções, tornando o teste mais modular e facilitando futuras manutenções.


## Teste do site_data 

**Objetivo**

  O objetivo deste teste é verificar se o segundo extrator (site_data.py) está funcionando corretamente ao criar o arquivo JSON contendo dados gerais, incluindo detalhes por município e um ranking de desmatamento.

**Configuração**

  - Um diretório temporário é criado para armazenar os arquivos JSON (`setUp`).
  - O teste simula dados gerais para dois municípios com detalhes e ranking de desmatamento para os anos de 2020 e 2021 (`test_segundo_extrator`).
  - O arquivo JSON é criado pelo segundo extrator simulado (`test_segundo_extrator`).
  - Verifica-se se o arquivo JSON foi criado corretamente (`test_segundo_extrator`).
  - O conteúdo do arquivo JSON é lido e comparado com os dados gerais simulados para garantir que corresponda ao esperado (`test_segundo_extrator`).
  - O diretório temporário é removido após o teste (`tearDown`).

**Resultados**

1. **Criação do Diretório Temporário**
    - Sucesso: O diretório temporário para armazenar os arquivos JSON foi criado corretamente.

2. **Simulação do Segundo Extrator**
    - Sucesso: Os dados gerais, incluindo detalhes por município e ranking de desmatamento, foram simulados com sucesso.

3. **Criação do Arquivo JSON**
    - Sucesso: O arquivo JSON foi criado pelo segundo extrator simulado.

4. **Verificação da Existência do Arquivo JSON**
    - Sucesso: O arquivo JSON foi encontrado no diretório especificado.

5. **Comparação do Conteúdo do Arquivo JSON**
    - Sucesso: O conteúdo do arquivo JSON corresponde aos dados gerais simulados.

**Conclusão**

O teste do segundo extrator foi bem-sucedido, indicando que o extrator está criando o arquivo JSON esperado com os dados gerais, detalhes por município e ranking de desmatamento. O código do segundo extrator está funcionando conforme o esperado, com base nos dados simulados neste teste.

## Robustez do extrator

**Objetivo do Teste**

O objetivo principal do teste foi avaliar a robustez do extrator Desmatazonia, especialmente em relação ao tratamento de dados faltantes em conjuntos de dados variados.

**Configuração do Teste**

- **Conjunto de Dados:** Utilizou-se um conjunto de dados representativo da região amazônica.
- **Campos de Interesse:** Foram analisados campos como "ano", "area_total", "desmatado", "vegetacao_natural", "nao_vegetacao_natural", "hidrografia", e "nome_municipio".
- **Ferramentas:** O extrator foi executado em um ambiente virtualizado com Python 3.8 e bibliotecas relevantes instaladas.


**Resultados do Teste**

- **Identificação de Dados Faltantes:** 

    - O extrator demonstrou capacidade em identificar corretamente os dados faltantes nos itens 4 e 7 do conjunto de dados.

- **Campos com Dados Faltantes:**
    - Os campos "desmatado" e "area_total" foram destacados como potenciais para terem dados faltantes, conforme evidenciado nos itens 4 e 7.

- **Manuseio de Dados Faltantes:**
    - Atualmente, o extrator não preenche automaticamente os campos com dados faltantes. Sugere-se incluir uma funcionalidade para preenchimento automático ou notificação ao usuário.

- **Tratamento de Dados Nulos:**
    - Recomenda-se considerar diferentes estratégias para tratar dados faltantes, como substituição por um valor padrão, interpolação com base em dados existentes ou remoção de entradas.

**Prints do Teste**

   - **Dados faltantes (item 4):**

        {
          "ano": 2020,
          "area_total": 11427,
          "desmatado": null,
          "vegetacao_natural": 8594.0,
          "nao_vegetacao_natural": 2.3,
          "hidrografia": 1556.5,
          "nome_municipio": "Manaus"
        }

   - **Dados faltantes (item 7):**

        {
          "ano": 2021,
          "area_total": null,
          "desmatado": 996.0,
          "vegetacao_natural": 1521.7,
          "nao_vegetacao_natural": 1128.9,
          "hidrografia": 2305.4,
          "nome_municipio": "Parintins"
        }


**Conclusões**

O teste de robustez revelou que o extrator Desmatazonia é capaz de identificar dados faltantes, mas atualmente não trata automaticamente esses dados. Recomenda-se implementar melhorias para tornar o extrator mais resiliente a dados incompletos, proporcionando uma experiência mais confiável aos usuários.

