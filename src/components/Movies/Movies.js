import React, { Component } from 'react';

function Movies(props) {
    return(
      <ul className="movie-list">
        {
          props.data.map(movie =>
            (<li> {movie} </li>)
          )
        }
      </ul>
    )
}


export default Movies;
