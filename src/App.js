import React from 'react';
import MovieListProvider from './Components/MovieContext/MovieListProvider';
import MovieList from './Components/MovieList/MovieList';
import Navbar from './Components/Navbar/Navbar';


class App extends React.Component {

    render() {
        return (
            <div>
                <MovieListProvider>
                    <Navbar />
                    <MovieList />
                </MovieListProvider>

            </div>

        );
    }
}


export default App;