import React, { useState }  from 'react';
import Header               from './components/Header';
import Form                 from './components/Form';
import Error                from './components/Error';

function App() {
  const [city, setCity]       = useState("");
  const [country, setCountry] = useState("");
  const [error, setError]     = useState(false);

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
  } else {
    component = null;
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
