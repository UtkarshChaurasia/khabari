
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import{
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import PropTypes from 'prop-types'

export default class App extends Component {
  // static defaultProps = {
  //   mode: 'light'
  // }

  // static propTypes = {
  //   mode: PropTypes.string
  // }
  // toggleMode = ()=>{
  //   if(mode==='light')
  //   {
  //     toggle = document.getElementById('toggle');
  //     toggle.classList.toggle('active')
  //   }
  // }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/"><News key="general" country="in" category="general"/></Route>
          {/* <Route exact path="/general"><News key="general" country="in" category="general"/></Route> */}
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

