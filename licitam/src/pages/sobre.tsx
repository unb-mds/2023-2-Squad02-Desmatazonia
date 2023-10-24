import React from 'react';
import Navbar from '@/components/_navbar';
import Cob from '@/components/_cob';
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

      <div className=" projeto">
        <div className="text-center">
            <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
            <div className=" text-center">
                <p className="h1 custom-title">
                Sobre o nosso Projeto
                </p>
            </div>


            <div className=" text-center lg:max-w-5xl  lg:mb-0 lg:grid-cols-4t">
                <a>
                <h2>
                 O propósito deste projeto é reunir as informações das licitações realizadas pelos municípios do Amazonas e apresentá-las de maneira transparente à sociedade, organizando os dados em gráficos que destacam os anos e os respectivos municípios.
                </h2>
                </a>
            </div>

             <div>
             <img src="/images/mapa_ama.jpg" />
            </div>

         </main>
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          width: 100%;
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
