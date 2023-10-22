import json
import re


def extrair(texto_diario: str):
    atos = []
    matches = re.findall(
        r"^[\s\S]*?Código Identificador:.*$(?:\n|)", texto_diario, re.MULTILINE)
    for match in matches:
        atos.append(AtoNormativo(match.strip()))
    return atos


class AtoNormativo:

    # re_dispensa = r"(Dispensa Licitação|Dispensa Licitações|dispensa  de  licitação|Dispensa licitação|DISPENSA  DE  LICITAÇÃO|Dispensa de Licitação|EXTRATO DE DISPENSA DE LICITAÇÃO)( |,|)"
    re_licitacao = r"(Licitação|licitações|licitação|LICITAÇÃO|LICITAÇÕES)( |,|)"

    def __init__(self, texto: str):
        self.texto = texto
        self.cod = self._extrai_cod(texto)
        self.possui_licitacao = self._possui_licitacao()

    def _extrai_cod(self, texto: str):
        matches = re.findall(r'Código Identificador:(.*)', texto)
        return matches[0].strip()

    def _possui_licitacao(self):
        matches = re.findall(self.re_licitacao, self.texto)
        return len(matches)

    def __str__(self):
        return json.dumps(self.__dict__, indent=2, ensure_ascii=False)
