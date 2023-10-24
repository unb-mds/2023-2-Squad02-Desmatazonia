"use client"
import React, { useMemo, useState, useEffect } from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

interface Detalhe {
  resumo: {
    num_licitacoes: number;
  };
  num_licitacoes: number;
}
interface DetalheAno {
  num_licitacoes: number;
}

interface TotalAtosProps {
  municipio: string;
  ano: "todos" | string;
}

export default function TotalAtos({ municipio, ano }: TotalAtosProps) {
  const [dataLicitacoes, setDataLicitacoes] = useState<number[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const mostrarTodosAnos = ano === "todos";
  function dadosGeraisAnos(){
    const url =
      municipio === "geral"
        ? "https://github.com/unb-mds/2023-2-Squad02/blob/main/extrator/docs/site/dados/geral.json"
        : `https://github.com/unb-mds/2023-2-Squad02/blob/main/extrator/docs/site/dados/${municipio}.json`;
    
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
        const detalhe = data.detalhe as Record<string, Detalhe>;
        const licitacao: number[] = [];
        const primeiroAnoComDados = Number(Object.keys(detalhe).sort()[0]);
        for (let ano = 2014; ano < primeiroAnoComDados; ano++) {
          licitacao.push(0);
        }
        Object.values(detalhe).forEach((elemento) => {
          let licitacao = elemento.resumo.num_licitacoes;
            licitacao.push(licitacao)
        });
        setDataLicitacoes(licitacao);
      });
  }
  function dadosAno() {
    const url = `https://github.com/unb-mds/2023-2-Squad02/blob/main/extrator/docs/site/dados/${municipio}.json`;
    fetch(url, {})
      .then((res) => res.json())
      .then((data) => {
          const detalhe = ano in data.detalhe ? data.detalhe[ano] as Record<string, DetalheAno> : {};
          const licitacao: number[] = Array(12).fill(0);
          delete detalhe.resumo;
        for (const [mes, dados] of Object.entries(detalhe)) {
          const index = Number(mes) - 1;
          licitacao[index] = dados.num_licitacoes;
        }
        setDataLicitacoes(licitacao);
      });
  }
  useEffect(() => {
    mostrarTodosAnos? dadosGeraisAnos(): dadosAno()
  }, [municipio]);

  const chartData = useMemo(() => {
    return {
      options: {
        series: [
          {
            name: "Licitações" as const,
            data: dataLicitacoes,
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
          colors: ["transparent"],
        },
        xaxis: {
          categories: mostrarTodosAnos? [
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
          ] : ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
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
        colors: ["#57C5ED", "#EC6666"],
      },
    };
  }, [dataLicitacoes]);

  return (
    <section className="bg-white w-full 4xl:w-[31%] h-[19rem] 4xl:h-[22.68rem] mt-[1.875rem] 4xl:mt-[2.31rem] px-2 rounded-3xl">
      <h1 className="mb-3 font-bold text-xl text-center pt-5">
        Licitações no Periodo:
      </h1>
      <Chart
        options={chartData.options}
        series={chartData.options.series}
        type="bar"
        width="100%"
        height="70%"
      />
    </section>
  );
}