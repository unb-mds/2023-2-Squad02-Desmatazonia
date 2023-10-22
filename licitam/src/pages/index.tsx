import React from 'react';
import Navbar from '@/components/_navbar';
import Cob from '@/components/_cob';
import Municipios from '@/components/_municipios';
import Anos from '@/components/_anos';
import { Inter, Source_Sans_3 } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
  return (
    <div className="container">
      <div className="navbar">
        <div className=''>

        </div>
        <Navbar /> {}
      </div>
      
      <div className="cob">
        <Cob /> {/* Componente Cob à esquerda */}
      </div>
      <div className="right-column">
        <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
              Acompanhe as licitações dos Municípios de Amazonas!
            </p>
          </div>

          <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
            <a
            >
              <h2>
                Reunimos os Diários Oficiais Municipais do Estado do Amazonas, disponibilizados pela Associação dos Municípios Amazonenses (AMA). Ao selecionar uma cidade e período específico, forneceremos informações sobre as licitações realizadas nessa região. Escolha o município desejado e explore as oportunidades de negócios públicos na Amazônia!
              </h2>
            </a>
            
          </div>

          <div className='municipio-box'>
            <div className='center-box'>
              <Municipios /> {}
            </div>
          </div>
          
          <div className='anos-box'>
            <div className='center-box'>
              <Anos /> {}
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
          width: 30%; /* Define a largura da coluna esquerda */
          background-color: gray; /* Cor de fundo cinza */
          padding: 20px; /* Espaçamento interno */
        }

        .right-column {
          flex: 1; /* A coluna da direita ocupa o espaço restante */
          padding: 20px; /* Espaçamento interno */
        }
      `}</style>
    </div>
  );
};

export default Home;
