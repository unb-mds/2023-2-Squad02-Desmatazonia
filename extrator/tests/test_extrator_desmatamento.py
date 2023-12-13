import json
import os
import shutil
import unittest

import pandas as pd


class TestExtratorDesmatamento(unittest.TestCase):

    def setUp(self):
        # Cria um DataFrame de exemplo para teste
        self.dados_desmatamento = pd.DataFrame({
            'municipio': ['MunicipioA', 'MunicipioA', 'MunicipioB'],
            'coluna1': [1, 2, 3],
            'coluna2': [4, 5, 6]
        })

        # Cria um diretório temporário para armazenar os arquivos JSON
        self.path_json_temp = "temp_dados_desmatamento_json"
        os.makedirs(self.path_json_temp, exist_ok=True)

    def tearDown(self):
        # Remove o diretório temporário após o teste
        shutil.rmtree(self.path_json_temp)

    def test_extrair_desmatamento(self):
        # Agrupa os dados por município (reproduza a lógica do seu código principal)
        dados_agrupados = self.dados_desmatamento.groupby('municipio').apply(
            lambda x: x.drop('municipio', axis=1).to_dict('records')).to_dict()

        # Cria arquivos JSON para cada município
        for nome_municipio, info_municipios in dados_agrupados.items():
            for info in info_municipios:
                info.pop("bioma", None)
                info.pop("id", None)
                info["nome_municipio"] = nome_municipio

            file_path = os.path.join(self.path_json_temp, f"{nome_municipio}.json")

            with open(file_path, "w", encoding="utf-8") as json_file:
                json.dump(info_municipios, json_file, indent=2, ensure_ascii=False)

            # Verifica se os arquivos JSON foram criados corretamente
            self.assertTrue(os.path.exists(file_path), f"Arquivo {file_path} não foi criado.")

            with open(file_path, "r", encoding="utf-8") as json_file:
                info_municipios_lido = json.load(json_file)

            self.assertEqual(info_municipios, info_municipios_lido, f"Conteúdo de {file_path} não corresponde ao esperado.")

if __name__ == '__main__':
    unittest.main()
