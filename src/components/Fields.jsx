import React, { Component } from 'react'

class Fields extends Component {

    constructor(props)
    {
        super(props);
        this.clr = this.props.color?this.props.color:"black";
    }
    render() {
        return (
         <>
            {this.props.field&& <> <b>{this.props.field}</b> : </>} {this.props.value} {this.props.icon&& <> <i class={this.props.icon} style={{color:this.clr}}></i> </> }
         </>
        )
    }
}
export default Fields;
