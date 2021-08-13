import React, { useState } from 'react';

export const MovieContext = React.createContext();
const MovieListProvider = ({ children }) => {
    const [movie, setMovie] = useState([
        {
            name: "gameOfThrons", year: 2015, price: "51$"
        },
        {
            name: "greenBiik", year: 2018, price: "10$"
        },
        {
            name: "inception", year: 2010, price: "20$"
        }
    ])
    return (
        <MovieContext.Provider value={[movie, setMovie]} >
            {children}
        </MovieContext.Provider>


    );
}

export default MovieListProvider;