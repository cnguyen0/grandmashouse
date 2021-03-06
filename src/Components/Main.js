import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ContentPage from './ContentPage';
import LandingPage from './LandingPage';
import SignIn from './SignIn';
import Favorites from './Favorites';
import Reservations from './Reservations'
import Messages from './Messages'
import LearnMore from './LearnMore'
import SignUp from './SignUp'
import howchef from '../img/How-it-works-Chef.jpg'
import howeater from '../img/How-it-works-Eater.jpg'
import MyAccount from './MyAccount';
import Profile from './Profile';
import FAQ from './FAQ';
import SearchResults from './SearchResults';


const Terms = (props) => {
    return (
      <ContentPage
        title={'Grandma\'s House Terms of Services'}
        txtFile='./termsofservice.txt'
      />
    );
}

const SearchPage = ({ match }) => {
  return (<SearchResults query={match.params.query}/>)
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
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      <Route path='/learnmore-homechef' render={() => <LearnMore image={howchef} type='Home-Chefs'/>}/>
      <Route path='/learnmore-eater' render={() => <LearnMore image={howeater} type='Eaters'/>}/>
      <Route path='/myaccount' component={MyAccount}/>
      <Route path='/profile' component={Profile}/>
      <Route path='/FAQ' component={FAQ}/>
      <Route path='/search/:query' component={SearchPage}/>

    </Switch>
  </main>
)

export default Main
