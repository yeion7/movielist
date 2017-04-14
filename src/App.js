import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <input list="browsers" name="myBrowser" />
        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Internet Explorer" />
          <option value="Opera" />
          <option value="Safari" />
          <option value="Microsoft Edge" />
        </datalist>
        <ul className="movie-list">
          <li>"Chrome" </li>
          <li>"Firefox" </li>
          <li>"Internet Explorer" </li>
          <li>"Opera" </li>
          <li>"Safari" </li>
          <li>"Microsoft Edge" </li>
        </ul>
      </div>
    );
  }
}

export default App;
