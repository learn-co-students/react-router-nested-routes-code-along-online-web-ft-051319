import React from 'react';
import { Link } from 'react-router-dom';

const MoviesList = ({ movies }) => {
  const renderMovies = Object.keys(movies).map(movieID =>
    <Link key={movieID} to={`/movies/${movieID}`}>{movies[movieID].title}</Link>
  );

  return (
    <div>
      {renderMovies}
    </div>
  );
};

export default MoviesList;

// Since the prop movies is an object containing each movie, in order to iterate over it, we'll need to use Object.keys(movies).map(). Since the keys in the object are also the id values for each movie, we can use movieID directly in some of the attributes, but also use it to get information from the movies object, as we see with movies[movieID].title. Now, when our app runs, if a user hits to the /movies route, MoviesList will render a list of clickable router links.
