import React, { useContext } from 'react';

const Movie = ({ name, price, year }) => {

    return (
        <div>
            <h1>
                name: {name}
            </h1>
            <h2>
                price: {price}
            </h2>
            <h2>
                year: {year}
            </h2>
        </div>


    );
}

export default Movie;