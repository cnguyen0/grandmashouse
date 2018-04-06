import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import ListingCard from './ListingCard.js'
import MenuAppBar from './MenuAppBar.js'
// import GridList from './GridList.js'
import MyMapComponent from './MyMapComponent.js'
import IntegrationAutosuggest from './IntegrationAutosuggest.js'



class App extends Component {
  // getRecipe = () => {
  //   // api call to the database
  //   // return object
  // }


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
        <IntegrationAutosuggest />
        <MyMapComponent />
        <ListingCard />
      </div>
    );
  }
}

export default App;
