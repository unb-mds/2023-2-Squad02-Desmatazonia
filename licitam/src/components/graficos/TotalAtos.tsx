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
  const mostrarTodosAnos = ano === "todos";
  function dadosGeraisAnos() {
    console.log(municipio);
    const url =
      municipio === "geral"
        ? "https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json"
        : `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/${municipio}.json`;

    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const detalhe = data.detalhe;
        const desmatado: number[] = [];
        const primeiroAnoComDados = Object.keys(detalhe);
        console.log(primeiroAnoComDados);
        for (let ano = 2014; ano < primeiroAnoComDados; ano++) {
          desmatado.push(0);
        }
        Object.values(detalhe).forEach((elemento) => {
          let desmatado = elemento.resumo.num_desmatado;
          console.log(desmatado);
          desmatado.push(desmatado);
        });
        setDataDesmatamento(desmatado);
      });
  }
  function dadosAno() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/${municipio}.json`;
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        const detalhe = data.filter((item: any) => item.ano === Number(ano));
        setDataDesmatamento(detalhe);
      });
  }
  useEffect(() => {
    mostrarTodosAnos ? dadosGeraisAnos() : dadosAno();
  }, [municipio, ano]);

  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          dataDesmatamento[0]?.desmatado,
          dataDesmatamento[0]?.hidrografia,
          dataDesmatamento[0]?.nao_vegetacao_natural,
          dataDesmatamento[0]?.vegetacao_natural,
        ],
        labels: [
          "Desmatado",
          "Hidrografia",
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
          show: true,
          width: 1,
          colors: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
          ],
        },

        tooltip: {
          intersect: false,
          shared: true,
        },
        grid: {
          show: false,
        },
        chart: {
          type: "pie",
        },
        fill: {
          opacity: 1,
        },
        // colors: ["#EC6666", "#57C5ED", "#f7eb0c", "#68bc44"],
        colors: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
      },
    };
  }, [dataDesmatamento]);

  return (
    <section className="w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5 text-[#433d87]">
        Desmatamento no Periodo:
      </h1>
      <Chart
        options={chartData?.options}
        series={chartData?.options.series}
        type="pie"
        width="100%"
        height="100%"
      />
    </section>
  );
}
