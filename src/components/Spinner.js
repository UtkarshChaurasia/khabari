import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
    render() {
        return (
            <div className="text-center my-5">
                <img src={loading} alt="loading" style={{height: "100px"}}></img>
            </div>
        )
    }
}

export default Spinner
