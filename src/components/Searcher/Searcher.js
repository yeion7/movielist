import React from 'react';
import ReactDatalist from 'react-datalist'

function Searcher(props) {
    return(
      <ReactDatalist
        list="movies"
        options={props.data.map(m => m.original_title)}
        id={props.data.map(m => m.id)}
        onOptionSelected={props.onSelected}
        placeholder='Search a movie'
        forcePoly={true}
        autoPosition={false}
        onInputChange={props.onInput}
        />
    )
}

export default Searcher;
