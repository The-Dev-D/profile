import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Fields from './Fields';
import { lang } from './languages';

export default function Defenitions() {
    return (
        <div className="fill flex vc hc">
        <CSSTransition in={true} appear={true} timeout={900} classNames="fieldset">

            <fieldset className="fieldset">
                <legend> {"<"}PROFILE{">"} </legend>
                <Fields field="Username" value="dev-D"/> <br/><br/>
                  
                <b> Education :</b> <br/> <br/>

                &emsp;&emsp;<Fields field="L.P School" value="St: Dominic Savio"/> <br/>
                &emsp;&emsp;<Fields field="U.P School" value="M.K.M" /> <br/>
                &emsp;&emsp;<Fields field="H.S School" value="M.K.M" /> <br/>
                &emsp;&emsp;<Fields field="Degree" value="B.P.C College Piravom" /> <br/>
                <br/>
                <b>Works on</b> : 
                {
                    lang.map((value,index) => {
                        return <Fields icon={value.icon} value={value.name}/>
                    })
                }

            </fieldset>
            
        </CSSTransition>
        </div>
    )
}
