import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css'

class App extends Component {
  render() {
    return (
      <div class="container">
        <div class="jumbotron">
          <h1>Bootstrap Tutorial</h1>
          <p>Bootstrap is the most popular HTML, CSS, and JS framework for developing
          responsive, mobile-first projects on the web.</p>
        </div>
        <p>This is some text.</p>
        <p>This is another text.</p>
      </div>
    );
  }
}

export default App;
