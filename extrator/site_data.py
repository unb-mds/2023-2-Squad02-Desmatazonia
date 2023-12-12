import glob
import json
import os

import pandas as pd

# Diretório contendo os arquivos JSON
diretorio_json = "./dados_desmatamento_json"

# Verificar se o diretório existe
if not os.path.exists(diretorio_json):
    print(f"O diretório '{diretorio_json}' não foi encontrado.")
else:
    # Dicionário para armazenar os dados gerais
    dados_gerais = {
        "detalhe": {},
        "ranking_desmatamento": {},

# Iterar sobre os arquivos no diretório
for nome_arquivo in os.listdir(diretorio_json):
    if nome_arquivo.endswith(".json"):
        caminho_arquivo = os.path.join(diretorio_json, nome_arquivo)

        with open(caminho_arquivo, encoding="utf-8") as json_file:
            dados_municipio = json.load(json_file)

            # Processar os dados e atualizar o dicionário de dados gerais
            id_municipio = dados_municipio[0]["nome_municipio"]

            detalhe_municipio = dados_gerais["detalhe"].get(id_municipio, {})
            detalhe_municipio["nome"] = id_municipio

            for ano_dados in dados_municipio:
                ano = ano_dados["ano"]

                # Coletar a área total apenas uma vez para cada município
                if "area_total" not in detalhe_municipio:
                    detalhe_municipio["area_total"] = ano_dados["area_total"]

                detalhe_ano = detalhe_municipio.get(ano, {})
                detalhe_ano["desmatado"] = detalhe_ano.get("desmatado", 0) + ano_dados["desmatado"]

                detalhe_municipio[ano] = detalhe_ano
                dados_gerais["detalhe"][id_municipio] = detalhe_municipio


    # Calcular ranking de desmatamento
    def top5_desmatamento():
        ranking = {}
        for id_municipio, detalhe_municipio in dados_gerais["detalhe"].items():
            total_desmatamento = detalhe_municipio["area_total"]
            ranking[id_municipio] = {
                "nome": detalhe_municipio["nome"],
                "total_desmatamento": total_desmatamento
            }

        # Ordenar o ranking
        ranking = dict(sorted(ranking.items(), key=lambda item: item[1]["total_desmatamento"], reverse=True)[:5])

        return ranking

    dados_gerais['ranking_desmatamento'] = top5_desmatamento()

    # Salvando dados consolidados
    with open("./dados_desmatamento_json/dados_gerais/dados_gerais.json", "w", encoding="utf-8") as json_file:
        json.dump(dados_gerais, json_file, indent=2, ensure_ascii=False)

    print("Arquivo JSON criado com sucesso.")