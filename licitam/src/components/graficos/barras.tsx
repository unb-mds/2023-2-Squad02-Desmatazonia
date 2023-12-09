"use client";
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";

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

export default function Barras({ municipio, ano }: TotalAtosProps) {
  const [dataDesmatamento, setDataDesmatamento] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const mostrarTodosAnos = ano === "todos" ? true : false;
  async function dadosGeraisAnos() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json`;
    const res = await fetch(url);
    const data = await res.json();

    if (!data.detalhe) {
      console.error("Erro: 'detalhe' não encontrado nos dados recebidos.");
      return;
    }

    const detalhe = data.detalhe;
    const desmatamentoPorMunicipio: any = {};

    Object.keys(detalhe).forEach((localidade) => {
      const dadosMunicipio = detalhe[localidade];
      const anos = Object.keys(dadosMunicipio)
        .filter(
          (key) =>
            typeof dadosMunicipio[key] === "object" &&
            dadosMunicipio[key].desmatado
        )
        .sort((a, b) => parseInt(a) - parseInt(b));

      const desmatamentoAnos: any = [];
      anos.forEach((year) => {
        desmatamentoAnos[year] = dadosMunicipio[year].desmatado;
      });

      desmatamentoPorMunicipio[localidade] = desmatamentoAnos;
    });
    let dados: any = [];
    Object.values(desmatamentoPorMunicipio[municipio]).forEach((item: any) => {
      dados.push(item);
    });
    setDataDesmatamento(dados);
  }

  async function dadosAno() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      const detalhe = data.detalhe;
      const desmatamentoPorMunicipio: any = {};

      Object.keys(detalhe).forEach((localidade) => {
        const dadosMunicipio = detalhe[localidade];
        const anos = Object.keys(dadosMunicipio)
          .filter(
            (key) =>
              typeof dadosMunicipio[key] === "object" &&
              dadosMunicipio[key].desmatado
          )
          .sort((a, b) => parseInt(a) - parseInt(b));

        const desmatamentoAnos: any = {};
        anos.forEach((year) => {
          desmatamentoAnos[year] = dadosMunicipio[year].desmatado;
        });

        desmatamentoPorMunicipio[localidade] = desmatamentoAnos;
      });

      setDataDesmatamento([desmatamentoPorMunicipio[municipio][ano]]);
    } catch (error) {
      console.error("Error fetching or processing data", error);
    }
  }

  useEffect(() => {
    mostrarTodosAnos ? dadosGeraisAnos() : dadosAno();
  }, [municipio, ano]);
  const cores = [
    "#9678B6",
    "#8E70B5",
    "#8579B4",
    "#7C82B3",
    "#738BB2",
    "#6A94B1",
    "#619DB0",
    "#58A6AF",
    "#4FAFAE",
    "#46B8AD",
    "#3DC1AC",
    "#34CAAB",
    "#2BD3AA",
    "#22DCA9",
    "#19E5A8",
    "#10EEA7",
    "#07F7A6",
    "#00FFA5",
    "#00F6B0",
    "#00EDBB",
    "#00E4C6",
    "#00DBD1",
    "#00C2B2",
  ];
  const chartData = useMemo(() => {
    return {
      options: {
        chart: {
          type: "bar" as const,
        },
        series: [
          {
            name: "Desmatamento" as const,
            data: dataDesmatamento,
          },
        ] as any,
        legend: {
          show: false,
        },
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: "60%",
            endingShape: "rounded",
            distributed: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: false,
          // width: 4,
          // colors: cores,
        },
        xaxis: {
          categories: mostrarTodosAnos
            ? [
                "2000",
                "2001",
                "2002",
                "2003",
                "2004",
                "2005",
                "2006",
                "2007",
                "2008",
                "2009",
                "2010",
                "2011",
                "2012",
                "2013",
                "2014",
                "2015",
                "2016",
                "2017",
                "2018",
                "2019",
                "2020",
                "2021",
                "2022",
              ]
            : [ano.toString()],
          labels: {
            style: {
              fontFamily: "Source Sans Pro, sans-serif",
              fontSize: "10" as const,
              fontWeight: 800,
            },
          },
        },
        yaxis: {
          labels: {
            formatter: function (val: number) {
              return val.toLocaleString();
            },
          },
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
        colors: mostrarTodosAnos
          ? cores
          : [cores[Math.floor(Math.random() * cores.length)]],
      },
    };
  }, [dataDesmatamento, ano, municipio]);
  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[17rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl pb-6">
      <h1 className="mb-3 text-base text-center text-[#433d87c4] pt-5 font-[PoppinsMedium]">
        Desmatamento (km²)
      </h1>

      {chartData.options && (
        <Chart
          options={chartData.options}
          series={chartData.options.series}
          type="bar"
          width="100%"
          height="85%"
        />
      )}
    </section>
  );
}
