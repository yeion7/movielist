import React, { Component } from 'react';
import './App.css';

import Searcher from './components/Searcher/Searcher'
import Movies from './components/Movies/Movies'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Searcher />
        <Movies />
      </div>
    );
  }
}

export default App;
