import React, { Component } from 'react';
import './App.css';

import Searcher from './components/Searcher/Searcher'
import Movies from './components/Movies/Movies'

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {

    const KEY = 'e912614a872157c18ae63dadb63773f5'
    const { valueSearch: VALUE } = this.props.store.getState()
    const LANGUAJE = 'en-US'
    const URL =  `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=${LANGUAJE}&query=${VALUE}&page=1`
    if(VALUE) {
      fetch(URL)
      .then(response => response.json())
      .then(data => {
        if(data.results) {
          this.props.store.dispatch(
            {
              type: 'FETCH_DATA',
              payload: data.results
            }
          )
        }
      })
    }
}


  handleSelectMovie = ev => {
    const { optionMovies } = this.props.store.getState()

    const selected = optionMovies.filter(movie => movie.original_title == ev)

    this.props.store.dispatch(
      {
        type: 'SELECT_MOVIE',
        payload: selected,
      }
    )
  }

  handleInput = ev => {
    this.props.store.dispatch(
      {
        type: 'SET_VALUE',
        payload: ev.target.value
      }
    )
    this.fetchData()
  }

  render() {
    //console.log('store',this.props.store.getState())
    const {optionMovies, selectedMovies, valueSearch} = this.props.store.getState()
    return (
      <div className="App">
        <Searcher
          data={optionMovies}
          onSelected={this.handleSelectMovie}
          onInput={this.handleInput}
          filter={valueSearch}
          />
        <Movies data={selectedMovies}/>
      </div>
    );
  }
}

export default App;
