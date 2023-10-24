import React, {useEffect, useMemo, useState} from "react";
import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), {ssr: false})

export default function Periodo() {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        fetch("https://github.com/unb-mds/2023-2-Squad02/blob/main/extrator/docs/site/dados/geral.json")
        .then((res) => res.json())
        .then((data)=> {
            setData(data);
        });
    })
}