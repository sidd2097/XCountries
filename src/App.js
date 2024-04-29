import React, { useState, useEffect } from "react";
import "./App.css";
import CountryItem from "./components/CountryItem";

const App = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Filed to fetch country data");
        }
        return response.json();
      })
      .then((data) => {
        setCountries(data);
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className="App">
      <h1>Country Flags</h1>
      <div className="country-list">
        {countries.map(country => (
          <CountryItem key={country.cca2} country={country}/>
        ))}
      </div>
    </div>
  );
};

export default App;
