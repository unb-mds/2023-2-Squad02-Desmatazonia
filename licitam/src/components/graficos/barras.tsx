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
  const mostrarTodosAnos = ano === "todos";
  function dadosGeraisAnos() {
    const url =
      municipio === "geral"
        ? "https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json"
        : `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/${municipio}.json`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const detalhe = data.detalhe as Record<string, any>;
        const dadosDesmatamento = {};

        Object.keys(detalhe).forEach((localidade) => {
          const desmatamentoLocal = detalhe[localidade];
          const desmatadoAnos = {};

          Object.keys(desmatamentoLocal).forEach((ano) => {
            if (ano !== "nome" && ano !== "area_total") {
              desmatadoAnos[ano] = desmatamentoLocal[ano].desmatado;
            }
          });

          dadosDesmatamento[localidade] = desmatadoAnos;
        });

        setDataDesmatamento(dadosDesmatamento);
      });
  }

  function dadosAno() {
    const url = `https://raw.githubusercontent.com/unb-mds/2023-2-Squad02/Front/extrator/dados_desmatamento_json/dados_gerais/dados_gerais.json`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!data.detalhe) {
          console.error("Erro: 'detalhe' não encontrado nos dados recebidos.");
          return;
        }

        const detalhe = data.detalhe;
        const desmatamentoPorMunicipio = {};

        Object.keys(detalhe).forEach((localidade) => {
          const dadosMunicipio = detalhe[localidade];
          const anos = Object.keys(dadosMunicipio)
            .filter(
              (key) =>
                typeof dadosMunicipio[key] === "object" &&
                dadosMunicipio[key].desmatado
            )
            .sort((a, b) => a - b);

          const desmatamentoAnos: any = [];
          anos.forEach((year) => {
            desmatamentoAnos[year] = dadosMunicipio[year].desmatado;
            // teste =
          });

          desmatamentoPorMunicipio[localidade] = desmatamentoAnos;
        });
        console.log(desmatamentoPorMunicipio[municipio]);
        let dados: any = [];
        Object.values(desmatamentoPorMunicipio[municipio]).forEach(
          (item: any) => {
            dados.push(item);
          }
        );
        setDataDesmatamento(dados);
      });
  }
  useEffect(() => {
    mostrarTodosAnos ? dadosGeraisAnos() : dadosAno();
  }, [municipio]);
  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          {
            name: "Desmatamento" as const,
            data: dataDesmatamento,
          },
        ] as any,
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
        plotOptions: {
          bar: {
            horizontal: false,
            borderRadius: 4,
            columnWidth: "60%",
            endingShape: "rounded",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: [],
        },
        xaxis: {
          categories: [
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
          ],
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
        // colors: ["#57C5ED", "#EC6666"],
      },
    };
  }, [dataDesmatamento]);
  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[17rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl pt-[2rem]">
      {/* <h1 className="mb-3 font-bold text-xl text-center pt-5 text-[#433d87]">
        Desmatamento no Periodo:
      </h1> */}
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="bar"
        width="100%"
        height="92%"
      />
    </section>
  );
}
