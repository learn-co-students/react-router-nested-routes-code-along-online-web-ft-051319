import React from 'react';

const MovieShow = ({match, movies}) => {
  return (
    <div>
      <h3>{ movies[match.params.movieId].title }</h3>
    </div>
  );
}

export default MovieShow;

// Here, we've got our movies as an object in props. We've also got our Router props, from which we've extracted match. Within the match object is params, which contains any parameters from the URL path. In this case, we only have one, movieId, which we defined in MoviesPage. Combining info from these two props lets us access the specific movie that's ID matches the movieId from the path, resulting in the correct movie title being displayed!
