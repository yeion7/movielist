import React, { Component } from 'react';
import './App.css';

import Searcher from './components/Searcher/Searcher'
import Movies from './components/Movies/Movies'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionMovies: [],
      selectedMovies: [],
      valueSearch: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {

    const KEY = 'e912614a872157c18ae63dadb63773f5'
    const VALUE = this.state.valueSearch
    const LANGUAJE = 'en-US'
    const URL =  `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&language=${LANGUAJE}&query=${VALUE}&page=1`

    if(VALUE) {
      fetch(URL)
      .then(response => response.json())
      .then(data => {
        if(data.results) {
          const names = data.results.map(movie => movie.original_title)
          this.setState({optionMovies: names})
        }
      })
    }
}


  handleSelectMovie = ev => {
    this.setState(
      {
        selectedMovies: [...this.state.selectedMovies, ev],
        valueSearch: ''
      }
    )
  }

  handleInput = ev => {
    this.setState({valueSearch: ev.target.value})
    this.fetchData()
  }

  render() {
    return (
      <div className="App">
        <Searcher
          data={this.state.optionMovies}
          onSelected={this.handleSelectMovie}
          onInput={this.handleInput}
          filter={this.state.valueSearch}
          />
        <Movies data={this.state.selectedMovies}/>
      </div>
    );
  }
}

export default App;
