import  React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

import MainHome from "./sub/MainHome"
import Navbar from './sub/partial/Navbar';
import Footer from './sub/partial/Footer';
import SearchShop from "./sub/partial/SearchShop";
import Login from './sub/auth/Login';
import Register from './sub/auth/Register';

function Home() {
  return (
    <Router>      
      <div>
        <Navbar />          
        <Switch>
          <Route path="/" exact render={ () => (
            <diiv>
              <MainHome />
              <SearchShop />
            </diiv>
          )} />
          <Route path="/login" exact component={ Login } />
          <Route path="/register" eaxct component={ Register } />
        </Switch>
        <Footer />        
      </div>      
    </Router>
  )
}

export default Home;