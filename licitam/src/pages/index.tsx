import React, { useState } from "react";
import Navbar from "@/components/_navbar";
import Cob from "@/components/_cob";
import Municipios from "@/components/_municipios";
import Anos from "@/components/_anos";
import TotalAtos from "@/components/graficos/TotalAtos";
import Licitamunicipios from "@/components/graficos/licitamunicipios";
import { Inter, Source_Sans_3 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [municipioSelecionado, setMunicipioSelecionado] = useState("Alvarães");
  const [anoSelecionado, setAnoSelecionado] = useState("2022");

  return (
    <div className="container">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="cob rounded-r-[4rem]">
        <Cob />
      </div>

      <div className="projet proj ">
        <div className="text-center">
          <main
            className={`flex flex-col items-center justify-between px-24 py-12 ${inter.className}`}
          >
            <div className="text-left">
              <p className="text-3xl font-[PoppinsSemiBold] text-[#433d87] text-center">
                Acompanhe sobre o desmatamento dos Municípios do Amazonas
              </p>
            </div>

            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
              <h2 className="font-[PoppinsRegular] text-center mt-4 text-lg text-[#433d87]">
                Reunimos os Diários Oficiais Municipais do Estado do Amazonas,
                disponibilizados pela Associação dos Municípios Amazonenses
                (AMA).
              </h2>

              <h2 className="font-[PoppinsMedium] text-[#433d87] text-center mt-10 text-base">
                Escolha o município desejado <br />e explore os dados de
                negócios públicos na Amazônia!
              </h2>
            </div>

            <div className="flex gap-2 w-full mt-4">
              <Municipios setMunicipioSelecionado={setMunicipioSelecionado} />
              <Anos setAnoSelecionado={setAnoSelecionado} />
            </div>

            <TotalAtos
              municipio={municipioSelecionado}
              ano={anoSelecionado}
            ></TotalAtos>

            <Licitamunicipios></Licitamunicipios>
          </main>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }
        .proj {
          display: flex;
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          overflow: auto;
        }
      `}</style>
    </div>
  );
};

export default Home;
