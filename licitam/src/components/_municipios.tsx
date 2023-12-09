import React, { useState } from "react";

const Municipios = ({ setMunicipioSelecionado }: any) => {
  const handleMunicipioChange = (event: any) => {
    setMunicipioSelecionado(event.target.value);
  };
  return (
    <select
      id="municipio"
      name="municipio"
      className="box"
      onChange={handleMunicipioChange}
    >
      <option value="geral">Selecione um Município</option>
      <option value="Alvarães">Alvarães</option>
      <option value="Amaturá">Amaturá</option>
      <option value="Anamã">Anamã</option>
      <option value="Anori">Anori</option>
      <option value="Apuí">Apuí</option>
      <option value="Atalaia do Norte">Atalaia do Norte</option>
      <option value="Autazes">Autazes</option>
      <option value="Barcelos">Barcelos</option>
      <option value="Barreirinha">Barreirinha</option>
      <option value="Benjamin Constant">Benjamin Constant</option>
      <option value="Beruri">Beruri</option>
      <option value="Boa Vista do Ramos">Boa Vista do Ramos</option>
      <option value="Boca do Acre">Boca do Acre</option>
      <option value="Borba">Borba</option>
      <option value="Caapiranga">Caapiranga</option>
      <option value="Canutama">Canutama</option>
      <option value="Carauari">Carauari</option>
      <option value="Careiro">Careiro</option>
      <option value="Careiro da Várzea">Careiro da Várzea</option>
      <option value="Coari">Coari</option>
      <option value="Codajás">Codajás</option>
      <option value="Eirunepé">Eirunepé</option>
      <option value="Envira">Envira</option>
      <option value="Fonte Boa">Fonte Boa</option>
      <option value="Guajará">Guajará</option>
      <option value="Humaitá">Humaitá</option>
      <option value="Ipixuna">Ipixuna</option>
      <option value="Iranduba">Iranduba</option>
      <option value="Itacoatiara">Itacoatiara</option>
      <option value="Itamarati">Itamarati</option>
      <option value="Itapiranga">Itapiranga</option>
      <option value="Japurá">Japurá</option>
      <option value="Juruá">Juruá</option>
      <option value="Jutaí">Jutaí</option>
      <option value="Lábrea">Lábrea</option>
      <option value="Manacapuru">Manacapuru</option>
      <option value="Manaquiri">Manaquiri</option>
      <option value="Manaus">Manaus</option>
      <option value="Manicoré">Manicoré</option>
      <option value="Maraã">Maraã</option>
      <option value="Maués">Maués</option>
      <option value="Nhamundá">Nhamundá</option>
      <option value="Nova Olinda do Norte">Nova Olinda do Norte</option>
      <option value="Novo Airão">Novo Airão</option>
      <option value="Novo Aripuanã">Novo Aripuanã</option>
      <option value="Parintins">Parintins</option>
      <option value="Pauini">Pauini</option>
      <option value="Presidente Figueiredo">Presidente Figueiredo</option>
      <option value="Rio Preto da Eva">Rio Preto da Eva</option>
      <option value="Santa Isabel do Rio Negro">
        Santa Isabel do Rio Negro
      </option>
      <option value="Santo Antônio do Içá">Santo Antônio do Içá</option>
      <option value="São Gabriel da Cachoeira">São Gabriel da Cachoeira</option>
      <option value="São Paulo de Olivença">São Paulo de Olivença</option>
      <option value="São Sebastião do Uatumã">São Sebastião do Uatumã</option>
      <option value="Silves">Silves</option>
      <option value="Tabatinga">Tabatinga</option>
      <option value="Tapauá">Tapauá</option>
      <option value="Tefé">Tefé</option>
      <option value="Tonantins">Tonantins</option>
      <option value="Uarini">Uarini</option>
      <option value="Urucará">Urucará</option>
      <option value="Urucurituba">Urucurituba</option>
    </select>
  );
};

export default Municipios;
