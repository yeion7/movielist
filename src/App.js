import React, { Component } from 'react';
import './App.css';

import Searcher from './components/Searcher/Searcher'
import Movies from './components/Movies/Movies'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionMovies: ["Chrome", "Firefox", "Internet Explorer", "Opera", "Safari", "Microsoft Edge"],
      selectedMovies: [],
      valueSearch: ''
    }


  }

  componentDidMount() {
    const KEY = 'e912614a872157c18ae63dadb63773f5'
    const URL =  `https://api.themoviedb.org/3/search/company?api_key=${KEY}&query=${this.state.valueSearch}&page=1`

    fetch(URL)
    .then(response => response.json())
    .then(data => {
      if(data.results) {
        const names = data.results.map(movie => movie.name)
        this.setState({optionMovies: names})
      }
    })}


  handleSelectMovie = ev => {
    this.setState({selectedMovies: [...this.state.selectedMovies, ev]})
  }

  handleInput = ev => {
    console.log('input', ev)
  }

  render() {
    return (
      <div className="App">
        <Searcher
          data={this.state.optionMovies}
          onSelected={this.handleSelectMovie}
          onInput={this.handleInput}
          />
        <Movies data={this.state.selectedMovies}/>
      </div>
    );
  }
}

export default App;
