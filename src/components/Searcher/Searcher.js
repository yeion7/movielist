import React from 'react';
import ReactDatalist from 'react-datalist'

function mostrar() {
  console.log('se muestra')
}
function Searcher(props) {
    console.log(props)
    return(
      <ReactDatalist
        list="movies"
        options={props.data}
        onOptionSelected={props.onSelected}
        placeholder='Search a movie'
        forcePoly={true}
        autoPosition={false}
        />
    )
}

export default Searcher;
