import React from "react";
import Navbar from "@/components/_navbar";
import Cob from "@/components/_cob";
import Municipios from "@/components/_municipios";
import Anos from "@/components/_anos";
import { Inter, Source_Sans_3 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className=""></div>
        <Navbar />
      </div>

      <div className="cob rounded-r-[4rem]">
        <Cob />
      </div>

      <div className="projet">
        <div className="text-center">
          <main
            className={`flex  flex-col items-center justify-between p-24 ${inter.className}`}
          >
            <div className=" text-left">
              <p className="text-3xl font-[PoppinsSemiBold] text-[#433d87]">
                Acompanhe as licitações dos Municípios do Amazonas
              </p>
            </div>

            <div className="mb-32  text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
              <h2 className="font-[PoppinsRegular] text-center mt-4 text-lg text-[#433d87]">
                Reunimos os Diários Oficiais Municipais do Estado do Amazonas,
                disponibilizados pela Associação dos Municípios Amazonenses
                (AMA).
              </h2>

              <h2 className="font-[PoppinsMedium] text-[#433d87] text-center mt-10 text-base font-[PoppinsMedium]">
                Escolha o município desejado <br />e explore os dados de
                negócios públicos na Amazônia!
              </h2>
            </div>

            <div className="flex gap-2 w-full mt-4 ">
              <Municipios />

              <Anos />
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Home;
