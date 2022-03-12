import '../src/App.css'
import React, { Component } from 'react'

export default class Loader extends Component {
    
    render() {
        return (
            <div className="fullwrapper flex vc hc">
                <div className="loadicon">
                    <i class="fa fa-terminal theme 2x" aria-hidden="true"></i>
                    <div className="ripple"></div>
                    Loading..
                </div>
            </div>
        )
    }
}

