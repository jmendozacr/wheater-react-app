import React from 'react';

function Wheater({result}) {
    const { name, main } = result;
    const kelvin = 273.15;

    if(!name) return null;

    return(
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2>The wheater time of {name} is:</h2>
                <p className="wheater">
                    { parseInt(main.temp - kelvin, 10) } <span>&#x2103;</span>
                </p>
                <p>Maximum temp: { parseInt(main.temp_max - kelvin, 10) } &#x2103;</p>
                <p>Minimum temp: { parseInt(main.temp_min - kelvin, 10) } &#x2103;</p>
            </div>
        </div>
    );
}

export default Wheater;