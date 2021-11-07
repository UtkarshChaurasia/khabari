
import './App.css';

import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
//import PropTypes from 'prop-types'

const App = () => {
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

  const [Mode, setMode] = useState('light')
  const [isDarkMode, setIsDarkMode] = useState(true)

  const toggleMode = ()=> {
    if(Mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#011212';
      document.body.style.color = 'white';
      document.body.style.transition = '0.9s';
      //document.getElementsByClassName("card").style.backgroundColor = 'black';
      setIsDarkMode(false);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      document.body.style.transition = '0.9s';
      //document.getElementsByClassName("card").style.backgroundColor = 'white';
      setIsDarkMode(true);
    }
  }

  return (
    <div>
      <Router>
        <Navbar mode={Mode} toggleMode={toggleMode} isDarkMode={isDarkMode}/>
        <Switch>
          <Route exact path="/"><News mode={Mode} key="general" country="in" category="general" /></Route>
          <Route exact path="/general"><News mode={Mode} key="general" country="in" category="general" /></Route>
          <Route exact path="/business"><News mode={Mode} key="business" country="in" category="business" /></Route>
          <Route exact path="/entertainment"><News mode={Mode} key="entertainment" country="in" category="entertainment" /></Route>
          <Route exact path="/health"><News mode={Mode} key="health" country="in" category="health" /></Route>
          <Route exact path="/science"><News mode={Mode} key="science" country="in" category="science" /></Route>
          <Route exact path="/sports"><News mode={Mode} key="sports" country="in" category="sports" /></Route>
          <Route exact path="/technology"><News mode={Mode} key="technology" country="in" category="technology" /></Route>
        </Switch>
      </Router>
    </div>
  )

}

export default App;