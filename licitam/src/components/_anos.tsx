import React from "react";

const Anos = ({ setAnoSelecionado }: any) => {
  const handleAnoChange = (event: any) => {
    setAnoSelecionado(event.target.value);
  };
  return (
    <select id="anos" name="anos" className="box" onChange={handleAnoChange}>
      <option value="todos">Todos os anos</option>
      <option value={2000}>2000</option>
      <option value={2001}>2001</option>
      <option value={2002}>2002</option>
      <option value={2003}>2003</option>
      <option value={2004}>2004</option>
      <option value={2005}>2005</option>
      <option value={2006}>2006</option>
      <option value={2007}>2007</option>
      <option value={2008}>2008</option>
      <option value={2009}>2009</option>
      <option value={2010}>2010</option>
      <option value={2011}>2011</option>
      <option value={2012}>2012</option>
      <option value={2013}>2013</option>
      <option value={2014}>2014</option>
      <option value={2015}>2015</option>
      <option value={2016}>2016</option>
      <option value={2017}>2017</option>
      <option value={2018}>2018</option>
      <option value={2019}>2019</option>
      <option value={2020}>2020</option>
      <option value={2021}>2021</option>
      <option value={2022}>2022</option>
    </select>
  );
};

export default Anos;
