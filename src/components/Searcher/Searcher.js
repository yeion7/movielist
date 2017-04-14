import React from 'react';
import ReactDatalist from 'react-datalist'

function Searcher(props) {
    return(
      <ReactDatalist
        list="movies"
        options={props.data}
        onOptionSelected={props.onSelected}
        placeholder='Search a movie'
        forcePoly={true}
        autoPosition={false}
        onInputChange={props.onInput}
        />
    )
}

export default Searcher;
