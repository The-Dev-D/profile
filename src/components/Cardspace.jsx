import React from "react";
import Cards from "./Cards";
import './cards.css'
class Cardspace extends React.Component {

    render() {
        return (
            <div className="cardspace">
                    <Cards icon="fas fa-utensils " moto="Eat" />
                    <Cards icon="fas fa-bed " moto="Sleep" />
                    <Cards icon="fas fa-code " moto="Code" />
                    <Cards icon="fas fa-redo-alt " moto="Repeat" />
            </div>
        );
    }
}

export default Cardspace;