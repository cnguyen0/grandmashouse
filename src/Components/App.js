import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from '../logo.svg';
import './App.css';
import ListingCard from './ListingCard.js'
import MenuAppBar from './MenuAppBar.js'

class App extends Component {
  getRecipe = () => {
    // api call to the database
    // return object
  }

  render() {
    // let chefRecipe = getRecipe();
    return (
    //   { isAdmin && this.chefRecipe.map(recipe, () => {
    //       return (
    //         <ListingCard url={recipe.url} description={recipe.description} />
    //       )
    //     })
    //   }
      <div>
        <MenuAppBar />
        <ListingCard />
      </div>
    );
  }
}

export default App;
