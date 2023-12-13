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

    <div className="proj ">
       <div className="text-left text-[#000000]">
        <main className={`flex flex-col  justify-between px-8 py-8 ${inter.className}`}>
            <div className="flex items-center">
              <div className="mr-4">
                <img className="w-[8rem]" src="/images/logo-desmatazonia.png" alt="Descrição da imagem" />
              </div>
              <div className="text-left w-1/2">
                <p className="text-4xl font-[PoppinsSemiBold] text-[#000000]">
                  Conheça um pouco mais sobre o nosso projeto
                </p>
              </div>
            </div>

            <div className="mb-32 text-left lg:w-full lg:mb-4 lg:grid-cols-4t">
                <p className="font-[PoppinsRegular] text-left mt-4 text-lg text-[#000000] lg:mb-4 ">
                Esse projeto surgiu durante a disciplina Métodos de Desenvolvimento de Software ministrada pela professora doutora Carla Silva Rocha Aguiar na Universidade de Brasília, com o intuito de simplificar informações sobre o desmatamento que ocorre no estado do Amazonas 
                </p>
            </div>

            <div className="mb-32 text-left  lg:w-full lg:mb-4 lg:grid-cols-4t">
              <p className="text-1xl font-[PoppinsSemiBold] text-[#000000]">
                  Integrantes do projeto:
              </p>
              <p className="font-[PoppinsRegular] mt-4 text-lg text-[#000000]">
                Alana Gabriele Amorim Silva <br />
                Amanda Alves Campos <br />
                Dara Maria Barbosa de Sousa <br />
                Harnely Angelica Araujo de Sousa <br />
                Isaque Santos <br />
                Larissa Stefane Barboza Santos
              </p>
            </div>

            <div className="mb-32 text-left lg:w-full lg:mb-4 lg:grid-cols-4t">
              <p className="text-1xl font-[PoppinsSemiBold] text-[#000000]">
                Dados utilizados:
              </p>
              <p className="font-[PoppinsRegular] mt-4 text-lg text-[#000000]">
                Os dados utilizados para a construção do gráfico foram retirados do site <a href="https://basedosdados.org/dataset/e5c87240-ecce-4856-97c5-e6b84984bf42?table=d7a76d45-c363-4494-826d-1580e997ebf0" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                   base dos dados
                </a>,
                onde é disponibilizada uma base de dados já tratada. É possível verificar o número de desmatamento que ocorreu nos 62 municípios do Amazonas. A fonte desses dados é o <a href="http://www.obt.inpe.br/OBT/assuntos/programas/amazonia/prodes" className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                    PRODES
                </a>,
                um projeto que realiza o monitoramento por satélites do desmatamento por corte raso na Amazônia Legal e produz, desde 1988, as taxas anuais de desmatamento na região, as quais são utilizadas pelo governo brasileiro para o estabelecimento de políticas públicas.
              </p>
            </div>


            <div className="mb-32 text-left lg:w-full lg:mb-4 lg:grid-cols-4t">
              <div className="bg-white p-6 rounded-md shadow-md">
                <p className="text-2xl font-[PoppinsSemiBold] text-[#000000]">
                  O que é Desmatamento?
                </p>
                <p className="font-[PoppinsRegular] text-[#000000] text-left mt-4 text-lg">
                  O desmatamento é a remoção da vegetação nativa de uma área, causado principalmente pela atuação humana para atividades produtivas como agricultura, pecuária, exploração madeireira, mineração e infraestrutura urbana.
                </p>
              </div>
            </div>
            
          </main>
        </div>
      </div>
    </div>
  );
};

export default Home;
