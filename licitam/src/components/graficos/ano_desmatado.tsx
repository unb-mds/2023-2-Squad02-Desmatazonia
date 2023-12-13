"use client";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DadosDesmatamento = {
  total_ano: {
    "0": {
      ano: 2000,
      desmatado: 25567.4,
    },
    "1": {
      ano: 2001,
      desmatado: 26969.1,
    },
    "2": {
      ano: 2002,
      desmatado: 27994.5,
    },
    "3": {
      ano: 2003,
      desmatado: 29552.4,
    },
    "4": {
      ano: 2004,
      desmatado: 30556.5,
    },
    "5": {
      ano: 2005,
      desmatado: 31428.0,
    },
    "6": {
      ano: 2006,
      desmatado: 32155.5,
    },
    "7": {
      ano: 2007,
      desmatado: 32699.0,
    },
    "8": {
      ano: 2008,
      desmatado: 33311.2,
    },
    "9": {
      ano: 2009,
      desmatado: 33655.1,
    },
    "10": {
      ano: 2010,
      desmatado: 34200.5,
    },
    "11": {
      ano: 2011,
      desmatado: 34707.8,
    },
    "12": {
      ano: 2012,
      desmatado: 35178.7,
    },
    "13": {
      ano: 2013,
      desmatado: 35660.0,
    },
    "14": {
      ano: 2014,
      desmatado: 36212.3,
    },
    "15": {
      ano: 2015,
      desmatado: 36900.3,
    },
    "16": {
      ano: 2016,
      desmatado: 37904.0,
    },
    "17": {
      ano: 2017,
      desmatado: 38913.3,
    },
    "18": {
      ano: 2018,
      desmatado: 39965.0,
    },
    "19": {
      ano: 2019,
      desmatado: 41521.3,
    },
    "20": {
      ano: 2020,
      desmatado: 42941.4,
    },
    "21": {
      ano: 2021,
      desmatado: 45106.2,
    },
    "22": {
      ano: 2022,
      desmatado: 48154.1,
    },
  },
};

const BarrasDesmatamento = () => {
  const anos = useMemo(() => Object.values(DadosDesmatamento.total_ano).map((item) => item.ano), []);
  const desmatamento = useMemo(() => Object.values(DadosDesmatamento.total_ano).map((item) => item.desmatado), []);

  const chartData = useMemo(() => {
    return {
      options: {
        chart: {
          type: "bar",
        },
        series: [
          {
            name: "Desmatamento",
            data: desmatamento,
          },
        ],
        xaxis: {
          categories: anos,
        },
        yaxis: {
          title: {
            text: "Desmatamento (km²)",
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
    };
  }, [anos, desmatamento]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[17rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl pb-6">
      <h1 className="mb-3 text-base text-center text-[#228B22] pt-5 font-[PoppinsMedium]">
        Desmatamento por Ano</h1>
      {chartData && (
        <Chart
          options={chartData.options}
          series={chartData.options.series}
          type="bar"
          width="100%"
          height="80%"
        />
      )}
    </section>
      

  );
};

export default BarrasDesmatamento;
