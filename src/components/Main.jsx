import React from 'react';
import {CSSTransition} from 'react-transition-group';
import Fields from './Fields';

export default function Main(props) {
    
    return (
        <div>
            <div className="wrapper flex vc hc">
                <div className="picwrap">
                    <CSSTransition in={true} appear={true} timeout={500} classNames="profile" onEntered={()=>{props.appearMethod(true)}}>
                        <img className="profile" src="https://lh3.googleusercontent.com/a-/AOh14Gg9nFLHlI8YMT0yQiPeLx2OT2nsvdXa_9tNgsYcqQ=s288-p-rw-no" alt="" />
                    </CSSTransition>
                </div>
        
                <CSSTransition in={true} appear={true} timeout={1600} classNames="profilename">
                    <div  className="profilename">
                        <Fields field="Name" value="Dhaivath Lal" />
                        <br/>
                        <Fields field="Username" value="dev:D" />
                    </div>
                </CSSTransition>
            </div>
        </div>
    )
}
