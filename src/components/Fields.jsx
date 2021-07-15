import React, { Component } from 'react'

class Fields extends Component {
    render() {
        return (
         <>
            {this.props.field&&<><b>{this.props.field}</b> : </>} {this.props.value} {this.props.icon&&<i class={this.props.icon}></i>}
         </>
        )
    }
}
export default Fields;
