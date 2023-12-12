import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function Desmatamunicipios() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json"
        );
        const jsonData = await response.json();
        setData(jsonData.detalhe);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, []);

  const chartData = useMemo(() => {
    if (!data || Object.keys(data).length === 0) return {};

    const years = Object.keys(data[Object.keys(data)[0]] || {})
      .filter((key) => !["nome", "area_total"].includes(key))
      .sort();

    const totalDesmatado = years.map((year) =>
      Object.values(data).reduce(
        (total, munic) => total + (munic?.[year]?.desmatado || 0),
        0
      )
    );

    return {
      options: {
        chart: {
          type: "bar",
          height: 400,
        },
        plotOptions: {
          bar: {
            horizontal: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: years,
        },
        colors: ["rgba(75, 192, 192)"],
        tooltip: {
          enabled: true,
          y: {
            formatter: function (value) {
              return value + " km²";
            },
          },
        },
      },
      series: [
        {
          name: "Total Desmatado (km²)",
          data: totalDesmatado,
        },
      ],
    };
  }, [data]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[17rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl pb-6">
      <h1 className="mb-3 text-base text-center text-[#228B22] pt-5 font-[PoppinsMedium]">
        Desmatamento total por ano (em km²)
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
}
