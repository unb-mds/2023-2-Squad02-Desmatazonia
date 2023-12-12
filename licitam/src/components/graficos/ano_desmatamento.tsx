// "/home/daramariabas/Documentos/UNB/2023-2/2023-2-Squad02/extrator/dados_desmatamento_json/dados_gerais/total_desmatado_ano.json"

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DesmatamentoPorAno = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/total_desmatado_ano.json"
        );
        const data = await response.json();

        if (Array.isArray(data)) {
          setJsonData(data);
        } else {
          console.error("Os dados do JSON não estão no formato esperado:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar dados do JSON:", error);
      }
    };

    fetchData();
  }, []);

  const anos = jsonData.map((item) => item.ano);
  const desmatados = jsonData.map((item) => item.desmatado);

  const chartData = {
    options: {
      chart: {
        type: "bar",
        height: 400,
        width: 500,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: anos,
      },
      yaxis: {
        title: {
          text: "Desmatamento",
        },
      },
      fill: {
        opacity: 1,
      },
    },
    series: [
      {
        name: "Desmatamento",
        data: desmatados,
      },
    ],
  };

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[17rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl pb-6">
      <h1 className="mb-3 text-base text-center text-[#228B22] pt-5 font-[PoppinsMedium]">
        Desmatamento por Ano (km²)
      </h1>
      {chartData && (
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="bar"
          width="100%"
          height="90%"
        />
      )}
    </section>
  );
};

export default DesmatamentoPorAno;

