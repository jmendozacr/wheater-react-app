import React from 'react';

function Form() {

    const handleChange = e => {
        // console.log(e.target);
    }
    
    return(
        <form>
            <div className="input-field col s12">
                <input
                    type="text"
                    name="city"
                    id="city"
                    onChange={handleChange}
                />
                <label htmlFor="city">City</label>
            </div>
            <div className="input-field col s12">
                <select onChange={handleChange} name="country">
                    <option value="">Choose a country</option>
                    <option value="US">United State</option>
                    <option value="MX">Mexico</option>
                    <option value="AR">Argentina</option>
                    <option value="CO">Colombia</option>
                    <option value="CR">Costa Rica</option>
                    <option value="ES">Spain</option>
                    <option value="PR">Peru</option>
                </select>
            </div>
            <div className="input-field col s12">
                <input type="submit" className="waves-effect waves-light btn-large btn-block yellow accent-4" value="Get Wheater"/>
            </div>
        </form>

    );
}

export default Form;