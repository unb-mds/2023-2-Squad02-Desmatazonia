import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Desmatamunicipios() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json",
      {}
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.ranking_desmatamento);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);

  const series = useMemo(() => {
    if (!data) return [];

    return Object.values(data).map((item) => item.total_desmatamento);
  }, [data]);

  const labels = useMemo(() => {
    if (!data) return [];

    return Object.values(data).map((item) => item.nome);
  }, [data]);
  const chartData = useMemo(() => {
    return {
      options: {
        dataLabels: {
          enabled: true,
        },
        stroke: {
          width: 0.5,
          dashArray: 0,
        },
        plotOptions: {
          pie: {
            customScale: 1.08,
          },
        },
        series: series,
        chart: {
          type: "donut" as const,
          donut: {
            size: "100%",
          },
          height: 200,
          width: 500,
        },
        legend: {
          position: "bottom" as const,
          fontSize: "12px",
          formatter: function (val: string, opts: any) {
            return (
              val +
              " (<strong>" +
              opts.w.globals.series[opts.seriesIndex] +
              "</strong>)"
            );
          },
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 400,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
        labels: labels,
        // colors: ["#800080", "#A020F0", "#9932CC", "#8A2BE2", "#9370DB"],
        colors: [
          "rgba(255, 99, 132)",
          "rgba(54, 162, 235)",
          "rgba(255, 206, 86)",
          "rgba(75, 192, 192)",
          "rgba(153, 102, 255)",
        ],
      },
    };
  }, [labels, series]);

  return (
    <section className=" mt-14 w-[100%] 2xl:w-[48%] 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 text-base text-center text-[#433d87c4] pt-5 font-[PoppinsMedium]">
        Ranking dos Municípios
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="donut"
        width="100%"
        height="80%"
      />
    </section>
  );
}
