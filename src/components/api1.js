import React, { useState, useEffect } from "react";
import "./App.css";

function Api1() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();
      setData(data);
    }

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Pol">
      <h1>Global COVID-19 Cases</h1>
      <h3>Cases: {data.cases}</h3>
      <h3>Deaths: {data.deaths}</h3>
      <h3>Recovered: {data.recovered}</h3>
      <h3>Active: {data.active}</h3>
      <h3>Critical: {data.critical}</h3>
      <h3>Cases per Million: {data.casesPerOneMillion}</h3>
      <h3>Deaths per Million: {data.deathsPerOneMillion}</h3>
      <h3>Tests: {data.tests}</h3>
      <h3>Tests per Million: {data.testsPerOneMillion}</h3>
      <h3>Population: {data.population}</h3>
    </div>
  );
}
export default Api1;
