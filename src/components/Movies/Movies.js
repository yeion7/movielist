import React from 'react';

function Movies(props) {
    return(
      <ul className="movie-list">
        {
          props.data.map(movie =>
            (<li key={movie[0].id}> {movie[0].original_title} </li>)
          )
        }
      </ul>
    )
}


export default Movies;
