import React from 'react';
import { CSSTransition } from 'react-transition-group';

export default function Defenitions() {
    return (
        <div className="fill flex vc hc">
        <CSSTransition
        in={true}
        appear={true}
        timeout={900}
        classNames="fieldset">
            <fieldset className="fieldset">
                <legend> {"<"}PROFILE{">"} </legend>
                <b> Username : </b> dev-D <br/><br/>
                  
                <b> Education :</b> <br/> <br/>

                <b> Education :</b> <br/>
                &nbsp;&nbsp;&nbsp; <b>L.P  School :</b> St: Dominic Savio <br/>
                &nbsp;&nbsp;&nbsp; <b>U.P School :</b> M.K.M <br/>
                &nbsp;&nbsp;&nbsp; <b>H.S School :</b>M.K.M<br/>
                &nbsp;&nbsp;&nbsp; <b>Degree :</b> B.P.C College Piravom<br/><br/>

                &emsp;&emsp;<b>L.P  School :</b> St: Dominic Savio <br/>
                &emsp;&emsp;<b>U.P School :</b> M.K.M <br/>
                &emsp;&emsp;<b>H.S School :</b>M.K.M<br/>
                &emsp;&emsp;<b>Degree :</b> B.P.C College Piravom<br/><br/>

                <b> Works on :</b> &nbsp;
                HTML<i class="fab fa-html5 m1"></i>,    
                CSS<i class="fab fa-css3-alt m1"></i>,  
                JS<i class="fab fa-js m1"></i>,         
                Php<i class="fab fa-php m1"></i>,       
                React<i class="fab fa-react m1"></i>,   
                SQL<i class="fas fa-database m1"></i>   
            </fieldset>
        </CSSTransition>
        </div>
    )
}
