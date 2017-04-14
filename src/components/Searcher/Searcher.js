import React, { Component } from 'react';

class Searcher extends Component {
  render() {
    return(
      <div>
        <input list="browsers" name="myBrowser" />
        <datalist id="browsers">
          <option value="Chrome" />
          <option value="Firefox" />
          <option value="Internet Explorer" />
          <option value="Opera" />
          <option value="Safari" />
          <option value="Microsoft Edge" />
        </datalist>
      </div>
    )
  }
}


export default Searcher;
