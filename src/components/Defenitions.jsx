import React from 'react';
import { CSSTransition } from 'react-transition-group';
import Fields from './Fields';
import { lang } from './languages';

const Tab = () => {
    return(
        <>&emsp;&emsp;</>
    )
}

export default function Defenitions() {
    return (
        <div className="fill flex vc hc">
        <CSSTransition in={true} appear={true} timeout={900} classNames="fieldset">

            <fieldset className="fieldset">
                <legend align="center"> {"<"}PROFILE{">"} </legend>
                <Fields field="Username" value="dev-D"/> <br/><br/>
                  
                <b> Education :</b> <br/> <br/>

                <Tab/><Fields field="L.P School" value="St: Dominic Savio"/> <br/>
                <Tab/><Fields field="U.P School" value="M.K.M" /> <br/>
                <Tab/><Fields field="H.S School" value="M.K.M" /> <br/>
                <Tab/><Fields field="Degree" value="B.P.C College Piravom" /> <br/>
                <br/>
                <b>Works on</b> : 
                {
                    lang.map((value,index) => {
                        return <> <Fields key={index} icon={value.icon} value={value.name}/></>
                    })
                }

            </fieldset>
            
        </CSSTransition>
        </div>
    )
}
