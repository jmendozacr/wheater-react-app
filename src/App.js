import React, { useState, useEffect }  from 'react';
import Header               from './components/Header';
import Form                 from './components/Form';
import Error                from './components/Error';
import Wheater              from './components/Wheater';

function App() {
  const [city, setCity]       = useState("");
  const [country, setCountry] = useState("");
  const [error, setError]     = useState(false);
  const [result, setResult] = useState({});

  useEffect(() => {
    const apiRequest = async () => {

      if(city === "") return;

      const appId = "dc2da2d33c522744fa9b2f5a99b74e23";
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${appId}`;
  
      const response = await fetch(url);
      const results = await response.json();
  
      setResult(results);
    }

    apiRequest();
  }, [city, country]);

  const requestData = (data) => {
    if(data.city === "" || data.country === "") {
      setError(true);
      return;
    }

    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  let component;
  if(error) {
    component = <Error message="Both fields are required."/>
  } else if(result.cod === "404") {
    component = <Error message="The city does not exist in our records." />
  } else {
    component = <Wheater result={result} />;
  }

  return (
    <div className="App">
      <Header
        title="Wheater React App"
      />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form
                requestData={requestData}
              />
            </div>
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
