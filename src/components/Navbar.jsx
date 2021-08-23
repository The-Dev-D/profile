import { IconButton } from '@material-ui/core'
import React, { Component } from 'react'

export default class Navbar extends Component {
    constructor(props)
    {
        super(props);
        this.state = {theme : props.themeAccent}
    }
    render() {
        return (
            <header className="flex vc sb">
            <div className="name theme">
                <i class="fa fa-terminal theme" aria-hidden="true"></i>
                dev:D
            </div>
            <IconButton size="small" onClick={()=> this.setState({theme:!this.state.theme})}>
                <div className="icon" >
                    {this.state.theme?<i class="fas fa-sun" ></i>: <i class="far fa-moon theme" ></i>}
                </div>
            </IconButton>
            </header>
        )
    }
    componentDidUpdate() {
        localStorage.setItem('theme',this.state.theme);
        if(this.state.theme)
        {
            console.log("dark "+ this.state.theme)
            document.querySelector(":root").style.setProperty("--from","#04619f");
            document.querySelector(":root").style.setProperty("--to","#081B33");
            document.querySelector(":root").style.setProperty("--color","#ffffff");
        }
        else 
        {
            console.log("dark "+ this.state.theme)
            document.querySelector(":root").style.setProperty("--from","#d4f3ff");
            document.querySelector(":root").style.setProperty("--to","#97ffc5");
            document.querySelector(":root").style.setProperty("--color","#000000");
        }
    }
}