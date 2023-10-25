import React from "react";
import Navbar from "@/components/_navbar";
import Cob from "@/components/_cob";
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

      <div className=" projeto">
        <div className="text-center">
          <main
            className={`flex min-h-screen flex-col items-center justify-between p-15 ${inter.className}`}
          >
            <div className="text-center">
              <h1 className="h1 custom-title">Sobre o nosso Projeto</h1>
            </div>

            <div className="text-center lg:max-w-3xl lg:mb-0 lg:grid-cols-4t">
              <a>
                <p className="aumentar-fonte">
                  O propósito deste projeto é reunir as informações das
                  licitações realizadas pelos municípios do Amazonas e
                  apresentá-las de maneira transparente à sociedade, organizando
                  os dados em gráficos que destacam os anos e os respectivos
                  municípios.
                </p>
              </a>
            </div>

            <div>
              <img src="/images/mapa_ama.jpg" />
            </div>
            <div className="text-center lg:max-w-7xl lg:mb-0 lg:grid-cols-5t">
              <h1>Extrator de dados</h1>
              <p className="aumentar-fonte">
                Nosso site e extrator funcionam da seguinte maneira: <br></br>
                O usuário seleciona o município e o ano. O extrator busca em documentos PDF do Diário Oficial, usando o Apache Tika para extrair texto. Em seguida, fazemos pós-processamento para limpar e formatar o texto. Por fim, apresentamos os resultados para visualização e download das informações sobre licitações.
              </p>
            </div>
          </main>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }
        p {
          color: black;
        }
        img {
          width: 600px;
          height: 350px;
        }
        h1 {
          color: black;
        }

        .aumentar-fonte {
          font-size: 24px; /* Aumente o tamanho da fonte conforme necessário */
        }

        .box-container {
          display: flex;
          flex-wrap: wrap;
        }

        .box {
          width: 305px;
          height: 51px;
          padding: 20px;
          margin: 10px;
          flex-shrink: 0;
          border-radius: 20px;
          background: linear-gradient(to left, #7265ba, #b9b1ec, #d0cce9);
          display: inline-block;
        }
      `}</style>
    </div>
  );
};

export default Home;
