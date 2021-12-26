import React, { Component } from 'react'
import './navbar.css'
import Particles from 'react-particles-js';
import {config} from './AppParticleConfig';
import Bubble from './Bubble';
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
                    <div className="desc disc">
                        <div className="grid">
                            <h1 style={{display:"flex"}}> Hi... &nbsp; <div style={{color:"#00ff99"}}> I'm Dhaivath Lal </div> </h1>
                            <h5>code like no tomorrow</h5>
                            <div style={{width:"100%",marginTop:"1rem"}} className="flex">
                                <Bubble color="#0066ff" profile="https://www.facebook.com/dhaivath.lal" icon="fab fa-facebook "  />
                                <Bubble color="" profile="https://www.instagram.com/dhaivath_lal/" icon="fab fa-instagram " />
                                <Bubble color="#404040" profile="#" icon="fab fa-github " />
                                <Bubble color="#33adff" profile="#" icon="fab fa-twitter "  />
                            </div>
                        </div>
                    </div>
                    <div className="desc img">
                        <img className="svg" src={require("./graph.png").default} alt="" />
                        <img className="pic" src={require("./alphabgpic.png").default} onload={()=> {this.props.pic(true)}} alt="" />
                    </div>
                </div>
                <img className="waves" src={require("./waves.png").default} alt="" />
            </header>
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