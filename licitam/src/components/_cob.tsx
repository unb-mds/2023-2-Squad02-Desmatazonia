import React from "react";

const Cob = () => {
  return (
    <main className="min-h-screen h-[100%]">
      <div className="flex flex-col items-center justify-between h-[80%] mr-2 ">
        {Cob}
        <div>
          <h1 className="text-center text-4xl mt-10 font-[PoppinsMedium]">
            Licita <span className="text-green-500">Amazonas</span>
          </h1>
          <p className="text-center text-sm font-[PoppinsRegular]">
            Licitações do Estado de Amazonas no seu alcance
          </p>

          <div className="flex flex-col items-center mt-8 ">
            <p className="text-center font-[PoppinsLight]">Colaboradores</p>
            <img src="/images/colaboradores.png" className="w-72" />
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-center text-xl mt-8 font-[PoppinsSemiBold]">
              O que é Licitação?
            </h1>
            <p className="text-center text-base pl-6 font-[PoppinsLight]">
              É um serviço administrativo que permite a contratação de um
              serviço terceirizado ou a aquisição de um determinado bem.
            </p>
          </div>

          <p className="text-center text-base font-[PoppinsRegular] mt-10">
            Coletamos e Organizamos os Dados <br /> dos{" "}
            <span className="text-green-500">62 municípios</span> do Amazonas
            <br />
            para Impactar a Transparência e Eficiência <br /> dos Processos de
            Compras Públicas Municipais.
          </p>
        </div>

        <img className="w-[12rem] " src="/images/mapa_ama_cob.png" />
      </div>
    </main>
  );
};

export default Cob;
