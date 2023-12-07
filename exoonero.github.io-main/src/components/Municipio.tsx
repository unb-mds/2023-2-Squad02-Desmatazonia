"use client"
import { BackIcon } from "@/assets/svgs/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { If, Then } from "react-if";
import Title from "./Title";
import Charts from "./charts/Charts";
import { anoSelect } from "../app/al/[municipio]/[ano]/anos"
import { useMemo } from "react";
interface MunicipioProps {
  municipioId: string;
  children: React.ReactNode;
  backActive?: boolean;
  ano: string;
}



export default function Municipio({
  municipioId,
  children,
  backActive,
  ano
}: MunicipioProps) {
  const listaAnos = useMemo(() => anoSelect, []);
  const router = useRouter();
  const selecionarMunicipio = (e: any) => {
    router.push(`/al/${e.target.value}`);
  }
  const selecionarAno = (e: any) => {
    const valor = e.target.value;
    if (backActive === false) {
      router.push(`/al/geral/${valor}`);
    } else if (backActive === true && municipioId === "geral" && valor !== "geral") {
      router.push(`/al/geral/${valor}`);
    } else if (backActive === true && valor === "geral" && municipioId === "geral") {
      router.push(`/`);
    }
    else if (backActive === true && municipioId !== "geral" && valor === "geral") {
      router.push(`/al/${municipioId}/`);
    } else {
      router.push(`/al/${municipioId}/${valor}`);
    }
  }

  return (
    <main>
      <header className="flex gap-x-6 flex-row lg:flex-row gap-y-3 ">
        <If condition={backActive}>
          <Then>
            <Link
              href="/"
              className="bg-[#5AB290] px-6 pt-5 rounded-[82px] w-[4.5rem] h-16"
            >
              <BackIcon />
            </Link>
          </Then>
        </If>
        <Title municipio={municipioId} ano={ano} />
      </header>
      <div className="flex flex-col mt-5 mb-5">
        <p className="font-normal text-[#7C828A] 3xl:mx-auto 4xl:w-[59rem]">
          Coletamos os diários oficiais municipais publicados pela Associação
          dos Municípios Alagoanos (AMA). Escolhendo a localidade em um
          determinado período, te apresentaremos as nomeações e exonerações que
          ocorreram.
        </p>
      </div>
      <div className="gap-x-5 gap-y-5 md:mx-[25%] flex flex-col xl:flex-row ">
        <select
          className="md:w-[28.56rem] h-16 md:p-4 rounded-2xl text-lg"
          id="municipio-select"
          onChange={selecionarMunicipio}
          value={municipioId}
        >
          <option value="geral" selected>Escolha uma cidade do Amazonas</option>
          <option value="alvaraes">Alvarães</option>
          <option value="amatura">Amaturá</option>
          <option value="anama">Anamã</option>
          <option value="anori">Anori</option>
          <option value="apui">Apuí</option>
          <option value="atalaia-do-norte">Atalaia do Norte</option>
          <option value="autazes">Autazes</option>
          <option value="barcelos">Barcelos</option>
          <option value="barreirinha">Barreirinha</option>
          <option value="boca-do-acre">Boca do Acre</option>
          <option value="borba">Borba</option>
          <option value="brazil">Brazil</option>
          <option value="caapiranga">Caapiranga</option>
          <option value="careiro">Careiro</option>
          <option value="careiro-da-varzea">Careiro da Várzea</option>
          <option value="codajas">Codajás</option>
          <option value="coari">Coari</option>
          <option value="fonte-boa">Fonte Boa</option>
          <option value="guaJara">Guajará</option>
          <option value="humaita">Humaitá</option>
          <option value="itacoatiara">Itacoatiara</option>
          <option value="itamarati">Itamarati</option>
          <option value="japura">Japurá</option>
          <option value="jutai">Jutaí</option>
          <option value="jurua">Juruá</option>
          <option value="maes">Maués</option>
          <option value="manacapuru">Manacapuru</option>
          <option value="manaus">Manaus</option>
          <option value="manicore">Manicoré</option>
          <option value="maura">Maraã</option>
          <option value="nhamunda">Nhamundá</option>
          <option value="novo-airao">Novo Airão</option>
          <option value="novo-aripuana">Novo Aripuanã</option>
          <option value="pariconha">Pariconha</option>
          <option value="parintins">Parintins</option>
          <option value="pauini">Pauini</option>
          <option value="presidente-figueiredo">Presidente Figueiredo</option>
          <option value="rio-largo">Rio Largo</option>
          <option value="rio-preto-da-eva">Rio Preto da Eva</option>
          <option value="saint-paul">Saint Paul</option>
          <option value="santa-isabel-do-rio-negro">Santa Isabel do Rio Negro</option>
          <option value="santo-antonio-do-ica">Santo Antônio do Içá</option>
          <option value="sao-gabriel-da-cachoeira">São Gabriel da Cachoeira</option>
          <option value="sao-paulo-de-olivenca">São Paulo de Olivença</option>
          <option value="sao-sebastiao-do-uatuma">São Sebastião do Uatumã</option>
          <option value="silves">Silves</option>
          <option value="tabatinga">Tabatinga</option>
          <option value="tapaua">Tapauá</option>
          <option value="tefe">Tefé</option>
          <option value="tonantins">Tonantins</option>
          <option value="uarini">Uarini</option>
          <option value="urucara">Urucará</option>
          <option value="urucurituba">Urucurituba</option>
        </select>
        <select
          className="md:w-[28.56rem] h-16 p-4 rounded-2xl text-lg"
          id="municipio-select" value={ano}
          onChange={selecionarAno}>
          <option value="geral">
            Todos os anos
          </option>
          {listaAnos.map(({ ano }) => (
            <option key={ano} value={ano}>
              {ano}
            </option>
          ))}
        </select>
      </div>
      <main className="flex flex-col gap-y-6 3xl:mb-14 mb-8">
        <Charts>
          {children}
        </Charts>
      </main>
    </main>
  );
}