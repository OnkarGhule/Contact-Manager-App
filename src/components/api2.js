import React, { useState, useEffect } from "react";

function Api2() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
      );
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
      <h1>Global COVID-19 Historical Data</h1>
      <p>Cases:</p>
      <ul>
        {Object.keys(data.cases).map((date) => (
          <li key={date}>
            {date}: {data.cases[date]}
          </li>
        ))}
      </ul>
      <p>Deaths:</p>
      <ul>
        {Object.keys(data.deaths).map((date) => (
          <li key={date}>
            {date}: {data.deaths[date]}
          </li>
        ))}
      </ul>
      <p>Recovered:</p>
      <ul>
        {Object.keys(data.recovered).map((date) => (
          <li key={date}>
            {date}: {data.recovered[date]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api2;
