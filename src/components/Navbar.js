import React, { Component } from 'react'
import { Link } from 'react-router-dom';
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
                        <Link className="navbar-brand" to="/"><img src={logo} alt="logo" /></Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-flex mx-5">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active" aria-current="page" to="/general">General</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/technology">Technology</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                                    </li>
                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Categories
                                        </a>
                                        <ul className="dropdown-menu my-2" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" to="/">General</a></li>
                                            <li><a className="dropdown-item" to="/">Business</a></li>
                                            <li><a className="dropdown-item" to="/">Technology</a></li>
                                            <li><a className="dropdown-item" to="/">Science</a></li>
                                            <li><a className="dropdown-item" to="/">Sports</a></li>
                                            <li><a className="dropdown-item" to="/">Health</a></li>
                                            <li><a className="dropdown-item" to="/">Entertainment</a></li>
                                        </ul>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
