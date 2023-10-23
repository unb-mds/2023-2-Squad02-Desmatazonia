import React from 'react';
import Navbar from '@/components/_navbar';
import Cob from '@/components/_cob';
import Municipios from '@/components/_municipios';
import Anos from '@/components/_anos';
import { Inter, Source_Sans_3 } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className=""></div>
        <Navbar />
      </div>

      <div className="cob">
        <Cob />
      </div>

      <div className="text-center">
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
          <div className=" text-center">
            <p className="h1 custom-title">
              Acompanhe as licitações dos Municípios de Amazonas!
            </p>
          </div>


          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4t">
            <a>
              <h2 className="font-inria-serif text-center">
                   Reunimos os Diários Oficiais Municipais do Estado do Amazonas, disponibilizados pela Associação dos Municípios Amazonenses (AMA). Ao selecionar uma cidade e período específico, forneceremos informações sobre as licitações realizadas nessa região. Escolha o município desejado e explore as oportunidades de negócios públicos na Amazônia!
              </h2>
            </a>
          </div>


          <div className="box-container">
            <div className="box">
              <Municipios />
            </div>
            <div className="box">
              <Anos />
            </div>
          </div>
        </main>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
        }

        .left-column {
          width: 30%;
          background-color: gray;
          padding: 20px;
        }

        .right-column {
          flex: 1;
          padding: 20px;
        }

        .box-container {
          display: flex;
          flex-wrap: wrap; /* Para que as caixas possam quebrar para a próxima linha quando não houver espaço suficiente na largura */
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
