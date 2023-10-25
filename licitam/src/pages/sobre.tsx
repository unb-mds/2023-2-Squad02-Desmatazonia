import React from "react";
import Navbar from "@/components/_navbar";
import Cob from "@/components/_cob";
import { Inter, Source_Sans_3 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home = () => {
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
              <p className="text-3xl font-[PoppinsSemiBold] text-[#433d87]">
                Sobre o nosso Projeto
              </p>
            </div>

            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
              <h2 className="font-[PoppinsRegular] text-center mt-4 text-lg text-[#433d87]">
                  O propósito deste projeto é reunir as informações das
                  licitações realizadas pelos municípios do Amazonas e
                  apresentá-las de maneira transparente à sociedade, organizando
                  os dados em gráficos que destacam os anos e os respectivos
                  municípios.
              </h2>
            </div>

            <div>
              <img src="/images/mapa_ama_cob.png" />
            </div>
            
            <div className="text-left">
              <p className="text-3xl font-[PoppinsSemiBold] text-[#433d87]">
                Extrator de Dados
              </p>
            </div>

            <div className="mb-32 text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
              <h2 className="font-[PoppinsRegular] text-center mt-4 text-lg text-[#433d87]">
              Nosso site e extrator funcionam da seguinte maneira: <br></br>
                O usuário seleciona o município e o ano. O extrator busca em documentos PDF do Diário Oficial, usando o Apache Tika para extrair texto. Em seguida, fazemos pós-processamento para limpar e formatar o texto. Por fim, apresentamos os resultados para visualização e download das informações sobre licitações.
              </h2>
            </div>

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
