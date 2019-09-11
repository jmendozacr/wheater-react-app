import React from 'react';

function Error({ message }) {
    return(
        <div className="card-panel red darken-4 error s12">
            {message}
        </div>
    );
}

export default Error;
