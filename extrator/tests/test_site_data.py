import json
import os
import shutil
import unittest

import pandas as pd


class TestSegundoExtrator(unittest.TestCase):

    def setUp(self):
        # Cria um diretório temporário para armazenar os arquivos JSON
        self.path_json_temp = "temp_dados_desmatamento_json"
        os.makedirs(self.path_json_temp, exist_ok=True)

    def tearDown(self):
        # Remove o diretório temporário após o teste
        shutil.rmtree(self.path_json_temp)

    def test_segundo_extrator(self):
        # Criar arquivos JSON de exemplo para o teste
        dados_gerais = {
            "detalhe": {
                "MunicipioA": {
                    "nome": "MunicipioA",
                    "area_total": 100,
                    "2020": {"ano": 2020, "desmatado": 30},
                    "2021": {"ano": 2021, "desmatado": 20}
                },
                "MunicipioB": {
                    "nome": "MunicipioB",
                    "area_total": 150,
                    "2020": {"ano": 2020, "desmatado": 40},
                    "2021": {"ano": 2021, "desmatado": 25}
                }
            },
            "ranking_desmatamento": {
                "MunicipioB": {"nome": "MunicipioB", "total_desmatamento": 150},
                "MunicipioA": {"nome": "MunicipioA", "total_desmatamento": 100}
            }
        }

        # Criar o arquivo JSON simulando o resultado do segundo extrator
        file_path = os.path.join(self.path_json_temp, "dados_gerais.json")
        with open(file_path, "w", encoding="utf-8") as json_file:
            json.dump(dados_gerais, json_file, indent=2, ensure_ascii=False)

        # Verificar se o arquivo JSON foi criado corretamente
        self.assertTrue(os.path.exists(file_path), f"Arquivo {file_path} não foi criado.")

        with open(file_path, "r", encoding="utf-8") as json_file:
            dados_gerais_lido = json.load(json_file)

        # Verificar se o conteúdo do arquivo corresponde ao esperado
        self.assertEqual(dados_gerais, dados_gerais_lido, f"Conteúdo de {file_path} não corresponde ao esperado.")

if __name__ == '__main__':
    unittest.main()
