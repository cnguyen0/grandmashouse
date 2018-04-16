import React, { Component } from 'react';
import './App.css';
import MenuAppBar from './MenuAppBar.js'
import Main from './Main';



class App extends Component {

  render() {
    return (
      <div>
        <MenuAppBar />
        <Main />
      </div>
    );
  }
}

export default App;
