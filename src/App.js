import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//example [delete later]:
import RaisedButton from 'material-ui/RaisedButton';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RaisedButton label="Material-UI" />
      </MuiThemeProvider>

    );
  }
}

export default App;
