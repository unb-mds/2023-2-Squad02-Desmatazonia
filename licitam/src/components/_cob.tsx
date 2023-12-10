import React from "react";

const Cob = () => {
  return (
    <main className="min-h-screen h-[100%]">
      <div className="flex flex-col items-center justify-evenly h-[80%] mr-2 ">
        <div>
          <h1 className="text-center text-4xl mt-10 font-[PoppinsMedium]">
            Desmata<span className="text-green-500">Zônia</span>
          </h1>
          <div className="flex items-center justify-center">
            <img className="w-[14rem]" src="/images/logo-desmatazonia.png" />
          </div>
          {/* <p className="text-center text-sm font-[PoppinsRegular]">
            Desmatamentos do Estado de Amazonas no seu alcance
          </p> */}

          {/* <div className="flex flex-col gap-2">
            <h1 className="text-center text-xl mt-3 font-[PoppinsSemiBold]">
              O que é Desmatamento?
            </h1>
            <p className="text-center text-base pl-6 font-[PoppinsLight]">
              O desmatamento é a remoção da vegetação nativa de uma área,
              causado principalmente pela atuação humana para atividades
              produtivas como: agricultura, pecuária, exploração madeireira,
              mineração e infraestrutura e urbana.
            </p>
          </div> */}

          <p className="text-center text-base font-[PoppinsRegular] ">
            Coletamos e Organizamos <br />
            os Dadosdos <span className="text-green-500">
              62 municípios
            </span>{" "}
            <br /> do Amazonas para Impactar a <br /> Transparência e Eficiência{" "}
            <br /> dos desmatamentos Municipais.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-center font-[PoppinsLight]">Colaboradores</p>
          <img src="/images/colaboradores.png" className="w-72" />
        </div>
      </div>
    </main>
  );
};

export default Cob;
