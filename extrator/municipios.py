import glob
import json
import os

diretorio_json = "./dados_desmatamento_json"

if not os.path.exists(diretorio_json):
    print(f"O diretório '{diretorio_json}' não foi encontrado.")
else:
    dados_nomes_municipios = {"nomes_municipios": []}

    for nome_arquivo in os.listdir(diretorio_json):
        if nome_arquivo.endswith(".json"):
            caminho_arquivo = os.path.join(diretorio_json, nome_arquivo)

            with open(caminho_arquivo, encoding="utf-8") as json_file:
                dados_municipio = json.load(json_file)
                nome_municipio = dados_municipio[0]["nome_municipio"]

                if nome_municipio not in dados_nomes_municipios["nomes_municipios"]:
                    dados_nomes_municipios["nomes_municipios"].append(nome_municipio)

    # Salvando dados consolidados
    with open("./dados_desmatamento_json/dados_gerais/nomes_municipios.json", "w", encoding="utf-8") as json_file:
        json.dump(dados_nomes_municipios, json_file, indent=2, ensure_ascii=False)

print("Arquivo JSON com nomes de municípios criado com sucesso.")
