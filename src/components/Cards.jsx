import React from "react";
import './cards.css';
class Cards extends React.Component {

    render() {
        return (
           <div className="card">
               <i className={this.props.icon + " cardicons"}></i>
               {this.props.moto}
           </div>
        );
    }
}

export default Cards;