import React from 'react';
import SignIn from './Login.js';
import Signup from './Signup.js'
import logo from './logo.js';
import Home from './Home';
import Login from './Login'
import Genres from './Genres'; 
import Dashboard from './Dashboard.js';
import Rating from './Rating';
import Book from './Bookmark.js';
import Books from './Books.js';
import Payment from './Payment.js';

import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';
const App = () => {
  return (
   <Router>
    
    <div className="App">
      <Switch>
      <Route exact path="/" component={logo}></Route>
        <Route exact path="/SignIn" component={SignIn}></Route>
        <Route exact path="/Signup" component={Signup}></Route>
        <Route exact path="/Home" component={Home}></Route>
        <Route exact path="/Genres" component={Genres}></Route>
        <Route exact path="/Dashboard" component={Dashboard}></Route>
        <Route exact path="/Rating" component={Rating}></Route>
        <Route exact path="/Bookmarked" component={Book}></Route>
        <Route exact path="/Books" component={Books}></Route>
        <Route exact path="/Payment" component={Payment}></Route>

      </Switch>

    </div>
   </Router>
  );
};

export default App;