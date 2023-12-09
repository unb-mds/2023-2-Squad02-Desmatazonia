"use client";
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Detalhe {
  resumo: {
    num_desmatado: number;
  };
  num_desmatado: number;
}

interface DetalheAno {
  num_desmatado: number;
}

interface TotalAtosProps {
  municipio: string;
  ano: "todos" | string;
}

ChartJS.register(ArcElement, Tooltip, Legend);

export default function TotalAtos({ municipio, ano }: TotalAtosProps) {
  const [dataDesmatamento, setDataDesmatamento] = useState<any[]>([]);
  const mostrarTodosAnos = ano === "todos" ? true : false;
  async function dadosGeraisAnos() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/${municipio}.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const detalhe = data.filter((item: any) => item.ano === 2022);
      setDataDesmatamento(detalhe);
    } catch (error) {
      console.error("Error fetching or processing data", error);
    }
  }
  async function dadosAno() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/${municipio}.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      const detalhe = data.filter((item: any) => item.ano === Number(ano));
      setDataDesmatamento(detalhe);
    } catch (error) {
      console.error("Error fetching or processing data", error);
    }
  }
  useEffect(() => {
    mostrarTodosAnos ? dadosGeraisAnos() : dadosAno();
  }, [municipio, ano]);

  const chartData = useMemo(() => {
    return {
      options: {
        chart: {
          type: "pie",
        },
        series: [
          // dataDesmatamento[0]?.desmatado,
          // dataDesmatamento[0]?.hidrografia,
          dataDesmatamento[0]?.nao_vegetacao_natural,
          dataDesmatamento[0]?.vegetacao_natural,
        ],
        labels: [
          // "Desmatado",
          // "Hidrografia",
          "Vegetação não natural",
          "Vegetação natural",
        ],

        legend: {
          position: "top" as const,
          horizontalAlign: "center" as const,
          markers: {
            width: 8,
            height: 8,
            padding: 8,
            radius: 12,
            offsetX: -4,
          },
          itemMargin: {
            horizontal: 12,
          },
          fontSize: "16" as string,
          fontFamily: "Source Sans Pro, sans-serif",
        },

        dataLabels: {
          enabled: true,
        },
        stroke: {
          show: false,
        },

        tooltip: {
          intersect: false,
          shared: true,
        },
        grid: {
          show: false,
        },

        fill: {
          opacity: 1,
        },
        colors: ["rgba(255, 206, 86)", "#34CAAB"],
      },
    };
  }, [dataDesmatamento]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[20rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 text-base text-center text-[#433d87c4] pt-5 font-[PoppinsMedium]">
        Vegetação
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="pie"
        width="100%"
        height="80%"
      />
    </section>
  );
}
