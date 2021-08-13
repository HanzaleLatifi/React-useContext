import React, { useContext } from 'react';
import Movie from '../Movie/Movie';
import { MovieContext } from '../MovieContext/MovieListProvider';
const MovieList = () => {
    const [movie, setMovie] = useContext(MovieContext);


    return (
        <div>
            {movie.map((m, index) => {
                return <Movie name={m.name} price={m.price} year={m.year} key={index} />
            })}
        </div>

    );
}

export default MovieList;