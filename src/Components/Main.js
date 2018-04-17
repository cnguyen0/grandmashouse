import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ContentPage from './ContentPage';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Favorites from './Favorites';
import Reservations from './Reservations';
import Messages from './Messages';
import LearnMore from './LearnMore';


const Terms = (props) => {
    return (
      <ContentPage
        title={'Grandma\'s House Terms of Services'}
        txtFile='./termsofservice.txt'
      />
    );
}

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route path='/terms' component={Terms}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/favorites' component={Favorites}/>
      <Route path='/messages' component={Messages}/>
      <Route path='/reservations' component={Reservations}/>
    </Switch>
  </main>
)

export default Main
