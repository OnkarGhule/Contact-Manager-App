import React, { useState, useEffect } from "react";

function Api3() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://disease.sh/v3/covid-19/countries");
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
      <h1>COVID-19 Cases by Country</h1>
      <ul>
        {data.map((country) => (
          <li key={country.country}>
            {country.country}: {country.cases}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Api3;
