import React, { Component } from 'react';

function Searcher(props) {
    return(
      <div>
        <input list="browsers" name="myBrowser" />
        <datalist id="browsers">
          {
            props.data.map(movie =>
              (<option value={movie} />)
            )
          }
        </datalist>
      </div>
    )
}


export default Searcher;
