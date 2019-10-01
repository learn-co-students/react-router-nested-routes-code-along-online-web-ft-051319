import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
    const renderMovies = Object.keys(movies).map(movieId => {
        return <Link key={movieId} to={`/movies/${movieId}`}>{movies[movieId].title}</Link>
    });

    return (
        <div>
            {renderMovies}
        </div>
    )
}

export default MoviesList