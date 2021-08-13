import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext/MovieListProvider';
const Navbar = () => {
    const [movie, setMovie] = useContext(MovieContext)
    return (
        <header>
            moveList: {movie.length}

        </header>
    );
}

export default Navbar;
