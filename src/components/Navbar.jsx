import React, { Component } from 'react'
import './navbar.css'
import Particles from 'react-particles-js';
import {config} from './AppParticleConfig';
export default class Navbar extends Component {
    render() {
        return (
            <>
            <header>
                <Particles className="particles" params={config} height="60vh"/>
                <nav>
                    <h3> <b>Dev-D</b></h3>
                    <div className="flex">Contact &nbsp;</div>
                </nav>
                <div className="segment">
                    <div className="desc">
                        <div className="grid">
                            <h1 style={{display:"flex"}}> Hi... &nbsp; <div style={{color:"#00ff99"}}> I'm Dhaivath Lal </div> </h1>
                            <h5>code like no tomorrow</h5>
                        </div>
                    </div>
                    <div className="desc">
                        <img className="svg" src={require("./graph.png").default} alt="" />
                        <img className="pic" src={require("./alphabgpic.png").default} onload={()=> {this.props.pic(true)}} alt="" />
                    </div>
                </div>
            </header>
            {/* <div class="segment2 flex">
            <div class="caption flex">
                Place holder for some awesome caption here
            </div>
        </div> */}
        </>
        )
    }
    componentDidUpdate() {
    //     localStorage.setItem('theme',this.state.theme);
    //     if(this.state.theme)
    //     {
    //         console.log("dark "+ this.state.theme)
    //         document.querySelector(":root").style.setProperty("--from","#1B1B3A");
    //         document.querySelector(":root").style.setProperty("--to","#1e2945d1");
    //         document.querySelector(":root").style.setProperty("--color","#ffffff");
    //     }
    //     else
    //     {
    //         console.log("dark "+ this.state.theme)
    //         document.querySelector(":root").style.setProperty("--from","#d4f3ff");
    //         document.querySelector(":root").style.setProperty("--to","#97ffc5");
    //         document.querySelector(":root").style.setProperty("--color","#000000");
    //     }
    }
}