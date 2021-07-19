import React from 'react'
import {CSSTransition} from 'react-transition-group'

export default function Main(props) {
    return (
        <div>
            <div className="wrapper">
                <div className="coverpicture flex vc hc">

                    <CSSTransition in={true} appear={true} timeout={1500} classNames="cover">
                        <img className="cover" src={props.coverPhoto} alt="" />
                    </CSSTransition>
                    
                    <div className="profile-wrap flex hc vb">
                        <div className="picwrap">
                            <CSSTransition in={true} appear={true} timeout={5000} classNames="profile">
                                <img className="profile" src="https://lh3.googleusercontent.com/a-/AOh14Gg9nFLHlI8YMT0yQiPeLx2OT2nsvdXa_9tNgsYcqQ=s288-p-rw-no" alt="" />
                            </CSSTransition>
                        </div>

                        <CSSTransition in={true} appear={true} timeout={1500} classNames="profilename">
                            <div className="profilename">Dhaivath Lal</div>
                        </CSSTransition>
                    </div>

                </div>
            </div>
        </div>
    )
}
