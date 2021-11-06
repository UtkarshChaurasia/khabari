import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './css/Navbar.css';
import logo from './logo2.png';
export default class Navbar extends Component {
    /* static propTypes = {
        prop: PropTypes
    } */
    
    
    render() {

        return (
            <div className="nav" >
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="/"><img src={logo} alt="logo" /></NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-flex mx-5">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" aria-current="page" to="/">General</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/business">Business</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/technology">Technology</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/science">Science</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/sports">Sports</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/health">Health</NavLink>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <NavLink className="nav-link" to="/entertainment">Entertainment</NavLink>
                                    </li>
                                </ul>
                                <div className="toggle-mode">
                                    <div className="mx-2" id="toggle">                                 
                                        <i className="indicator"></i>                                      
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
