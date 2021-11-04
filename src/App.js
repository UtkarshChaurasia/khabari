
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/general"><News key="general" country="in" category="general"/></Route>
          <Route exact path="/business"><News key="business" country="in" category="business"/></Route>
          <Route exact path="/entertainment"><News key="entertainment" country="in" category="entertainment"/></Route>
          <Route exact path="/health"><News key="health" country="in" category="health"/></Route>
          <Route exact path="/science"><News key="science" country="in" category="science"/></Route>
          <Route exact path="/sports"><News key="sports" country="in" category="sports"/></Route>
          <Route exact path="/technology"><News key="technology" country="in" category="technology"/></Route>
        </Switch>
        </Router>
      </div>
    )
  }
}

