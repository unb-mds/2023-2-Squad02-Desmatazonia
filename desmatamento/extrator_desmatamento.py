import json
import os
import pandas as pd

# Carrega a base de dados a partir de um arquivo CSV
# Substitua pelo caminho real do seu arquivo CSV
csv_path = "desmatamento/amazonas_desmatamento.csv"
dados_desmatamento = pd.read_csv(csv_path, encoding="utf-8")

# Diretório para armazenar os arquivos JSON
path_json = "desmatamento/dados_desmatamento_json"

# Cria o diretório se não existir
os.makedirs(path_json, exist_ok=True)

# Agrupa os dados por município
dados_agrupados = dados_desmatamento.groupby('municipio').apply(
    lambda x: x.drop('municipio', axis=1).to_dict('records')).to_dict()

# Loop para criar arquivos JSON para cada município
for nome_municipio, info_municipios in dados_agrupados.items():
    # Cria o caminho do arquivo para o município
    file_path = os.path.join(path_json, f"{nome_municipio}.json")

    # Salva as informações do município em um arquivo JSON
    with open(file_path, "w", encoding="utf-8") as json_file:
        json.dump(info_municipios, json_file, indent=2, ensure_ascii=False)

print("Arquivos JSON criados com sucesso.")
