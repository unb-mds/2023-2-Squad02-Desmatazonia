import React from "react";

const Cob = () => {
  return (
    <main className="min-h-screen h-[100%]">
      <div className="flex flex-col items-center justify-between h-[80%] mr-2 ">
        <div>
          <h1 className="text-center text-4xl mt-10 font-[PoppinsMedium]">
            Desmata<span className="text-green-500">Zônia</span>
          </h1>
          <p className="text-center text-sm font-[PoppinsRegular]">
            Desmatamentos do Estado de Amazonas no seu alcance
          </p>

          <div className="flex flex-col items-center mt-8 ">
            <p className="text-center font-[PoppinsLight]">Colaboradores</p>
            <img src="/images/colaboradores.png" className="w-72" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-xl mt-8 font-[PoppinsSemiBold]">
              O que é Desmatamento?
            </h1>
            <p className="text-center text-base pl-6 font-[PoppinsLight]">
              O desmatamento é a remoção da vegetação nativa de uma área,
              causado principalmente pela atuação humana para atividades
              produtivas como: agricultura, pecuária, exploração madeireira,
              mineração e infraestrutura e urbana.
            </p>
          </div>

          <p className="text-center text-base font-[PoppinsRegular] mt-10">
            Coletamos e Organizamos os Dados <br /> dos{" "}
            <span className="text-green-500">62 municípios</span> do Amazonas
            <br />
            para Impactar a Transparência e Eficiência <br /> dos desmatamentos
            Municipais.
          </p>
        </div>

        <img className="w-[12rem] " src="/images/mapa_ama_cob.png" />
      </div>
    </main>
  );
};

export default Cob;
