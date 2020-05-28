import React from 'react';
import { 
  BrowserRouter as Router,
  Route,
  Switch
 } from "react-router-dom";

import Home from './component';
import Login from './component/sub/auth/Login';
import Register from './component/sub/auth/Register';

import './App.css';
import '../src/css/layout.css'
import '../src/css/theme.css'


function App() {
  return (    
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
      </Switch>
    </Router>
  )  
}

export default App;
