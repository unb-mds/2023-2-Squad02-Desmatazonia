import React, { useState } from "react";
import Navbar from "@/components/_navbar";
import Cob from "@/components/_cob";
import Municipios from "@/components/_municipios";
import Anos from "@/components/_anos";
import TotalAtos from "@/components/graficos/TotalAtos";
import Licitamunicipios from "@/components/graficos/licitamunicipios";
import { Inter, Source_Sans_3 } from "next/font/google";
import Barras from "@/components/graficos/barras";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  const [municipioSelecionado, setMunicipioSelecionado] = useState("geral");
  const [anoSelecionado, setAnoSelecionado] = useState("todos");

  return (
    <div className="container w-screen">
      <div className="navbar">
        <Navbar />
      </div>

      <div className="cob rounded-r-[4rem]">
        <Cob />
      </div>

      <div className="proj ">
        <div className="text-center w-full">
          <main
            className={`flex flex-col items-center justify-between px-24 py-12 ${inter.className}`}
          >
            <div className="text-left">
              <p className="text-3xl font-[PoppinsSemiBold] text-[#433d87] text-center">
                Acompanhe dados sobre os Municípios do Amazonas
              </p>
            </div>

            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
              <h2 className="font-[PoppinsMedium] text-[#433d87] text-center mt-10 mb-3 text-base">
                Escolha o município desejado e explore os dados na Amazônia!
              </h2>
            </div>

            <div className="flex gap-2 w-full mt-4">
              <Municipios setMunicipioSelecionado={setMunicipioSelecionado} />
              <Anos setAnoSelecionado={setAnoSelecionado} />
            </div>

            {municipioSelecionado && municipioSelecionado !== "geral" && (
              <Barras
                municipio={municipioSelecionado}
                ano={anoSelecionado}
              ></Barras>
            )}
            {municipioSelecionado && municipioSelecionado !== "geral" && (
              <TotalAtos
                municipio={municipioSelecionado}
                ano={anoSelecionado}
              ></TotalAtos>
            )}
            {/* <Ano_desmatamento></Ano_desmatamento> */}
            <Licitamunicipios></Licitamunicipios>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
