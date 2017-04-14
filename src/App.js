import React, { Component } from 'react';
import './App.css';

import Searcher from './components/Searcher/Searcher'
import Movies from './components/Movies/Movies'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionMovies: ["Chrome", "Firefox", "Internet Explorer", "Opera", "Safari", "Microsoft Edge"],
      selectedMovies: []
    }


  }

  selectMovie = ev => {
    console.log('funciona')
  }

  render() {
    return (
      <div className="App">
        <Searcher data={this.state.optionMovies} onSelected={this.selectMovie}/>
        <Movies data={this.state.selectedMovies}/>
      </div>
    );
  }
}

export default App;
