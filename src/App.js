import React, { Component } from 'react';

import './App.css';
import Survey from './surveyForm';


class App extends Component {
  render() {
    return (
      <div>
      <h1 className="text-center">Survey Form</h1>
     
      <div className="App">
    <Survey/>
      </div>
      </div>
    );
  }
}

export default App;
