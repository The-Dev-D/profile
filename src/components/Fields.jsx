import React, { Component } from 'react'
import './bubble.css'
class Fields extends Component {

    constructor(props)
    {
        super(props);
        this.clr = this.props.color?this.props.color:"black";
    }
    render() {
        return (
         <>
            {this.props.field&& <> <b>{this.props.field}</b> : </>} {this.props.icon&& <> <i className={this.props.icon} style={{color:this.clr,margin:"0rem"}}></i> </> }{this.props.value}
         </>
        )
    }
}
export default Fields;
