import React, { Component } from 'react';
import './App.css';
import ListingCard from './ListingCard.js'
import MenuAppBar from './MenuAppBar.js'
import MyMapComponent from './MyMapComponent.js'
import IntegrationAutosuggest from './IntegrationAutosuggest.js'
import TitlebarGridList from './TitlebarGridList.js'
import Flexbox from 'flexbox-react';
import Footer from './Footer.js';
import HowChef from "../img/How-it-works-Chef.jpg"
import HowEater from "../img/How-it-works-Eater.jpg"
import LearnMore from './LearnMore.js'
import ContentPage from './ContentPage.js';
import LandingPage from './LandingPage';



class App extends Component {
  getRecipe = () => {
    // api call to the database
    // return object
  }

  getFavorites = () => {
    // api get user's getFavorites
    // return
    return {
      url: "www.google.com",
      title: "my recipe"
    }
  }


  render() {
    let chefRecipe = this.getRecipe();
    let fave = this.getFavorites();
    let isAdmin = true;

    return (
      // { isAdmin && this.chefRecipe.map(recipe, () => {
      //     return (
      //       <ListingCard url={recipe.url} description={recipe.description} />
      //     )
      //   })
      // }


      <div>
        <MenuAppBar />
        <LandingPage />
      </div>
    );
  }
}

export default App;
