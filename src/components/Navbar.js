import React, { Component } from 'react'
//import PropTypes from 'prop-types'
import './css/Navbar.css';

export default class Navbar extends Component {
    /* static propTypes = {
        prop: PropTypes
    } */

    render() {
        return (
            <div className="nav" >
                <nav className="navbar fixed-top navbar-expand-lg navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/"><h2 className="khabari">KHABARI</h2></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="d-flex mx-5">
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item mx-2">
                                        <a className="nav-link active" aria-current="page" href="/">INDIA</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="/about">USA</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="/about">Australia</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="/about">Russia</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="/about">France</a>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <a className="nav-link" href="/about">UK</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
