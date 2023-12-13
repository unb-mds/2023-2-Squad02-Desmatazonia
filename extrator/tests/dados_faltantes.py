import json
import os

import pandas as pd

'''
Esse teste tem como objetvo simular dados faltantes para avaliar a robustez do extrator.
Para isso, vamos utilizar a base de dados de desmatamento do Amazonas.
Simulando dados faltantes para o município de Manaus em 2020 e para o município de Parintins em 2021.
Depois, observar se o extrator consegue lidar com esses dados faltantes.

'''

# Carregamento da base de dados original
csv_path = os.path.abspath('/Users/amandacampos/UnB/2023-2-Squad02-Desmatazonia/extrator/amazonas_desmatamento.csv')
dados_desmatamento = pd.read_csv(csv_path, encoding="utf-8")
print(dados_desmatamento.columns)
print()
# Diretório para armazenar os arquivos JSON
path_json = "dados_desmatamento_json/dados_faltantes_json"

# Criação do diretório se não existir
os.makedirs(path_json, exist_ok=True)

# Agrupamento dos dados por município
dados_agrupados = dados_desmatamento.groupby('municipio').apply(
    lambda x: x.drop('municipio', axis=1).to_dict('records')).to_dict()

# Criação de arquivos JSON para cada município
for nome_municipio, info_municipios in dados_agrupados.items():
    
    for info in info_municipios:
        info.pop("bioma", None)
        info.pop("id", None)
        info["nome_municipio"] = nome_municipio 
        
    file_path = os.path.join(path_json, f"{nome_municipio}.json")

    with open(file_path, "w", encoding="utf-8") as json_file:
        json.dump(info_municipios, json_file, indent=2, ensure_ascii=False)

print("Arquivos JSON criados com sucesso.")
print()

# Simulação de dados faltantes nos arquivos JSON
# Vamos adicionar 'desmatado' ausente para Manaus em 2020 e 'area_total' ausente para Parintins em 2021
for nome_arquivo in os.listdir(path_json):
    if nome_arquivo.endswith(".json"):
        caminho_arquivo = os.path.join(path_json, nome_arquivo)

        with open(caminho_arquivo, encoding="utf-8") as json_file:
            dados_municipio = json.load(json_file)

            for info in dados_municipio:
                if info["nome_municipio"] == "Manaus" and info["ano"] == 2020:
                    info["desmatado"] = None
                elif info["nome_municipio"] == "Parintins" and info["ano"] == 2021:
                    info["area_total"] = None

        # Sobrescreve o arquivo JSON com os dados modificados
        with open(caminho_arquivo, "w", encoding="utf-8") as json_file:
            json.dump(dados_municipio, json_file, indent=2, ensure_ascii=False)
import json

# Seus arquivos JSON
caminho_Manaus = 'dados_desmatamento_json/dados_faltantes_json/Manaus.json'
caminho_Parintins = 'dados_desmatamento_json/dados_faltantes_json/Parintins.json'

import json


def imprimir_dados_faltantes(arquivo):
    with open(arquivo, 'r') as json_file:
        data = json.load(json_file)

    # Itera sobre cada item no arquivo JSON
    for idx, item in enumerate(data, start=1):
        # Verifica se há dados faltantes em algum campo
        dados_faltantes = {chave: valor for chave, valor in item.items() if valor is None}
        
        # Se houver dados faltantes, imprime o bloco inteiro
        if dados_faltantes:
            print(f'\n Dados faltantes (item {idx}):')
            print(json.dumps(item, indent=2))


# Chama a função para imprimir dados faltantes para cada arquivo
print("Observar se o extrator consegue lidar com esses dados faltantes")
imprimir_dados_faltantes(caminho_Manaus)
imprimir_dados_faltantes(caminho_Parintins)
