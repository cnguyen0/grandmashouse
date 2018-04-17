import React, { Component } from 'react';
import './App.css';
import MenuAppBar from './MenuAppBar.js'
import Main from './Main';
import Footer from './Footer';



class App extends Component {

  render() {
    return (
      <div>
        <MenuAppBar />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
