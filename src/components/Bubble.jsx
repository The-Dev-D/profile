import React from "react";
import './bubble.css'
class Bubble extends React.Component {

    render() {
        return (
           <a className="socialpallete" href={this.props.profile}>
                <i style={{color:"white"}} className={this.props.icon + " socialicons"}></i>
           </a>
        );
    }
}

export default Bubble;