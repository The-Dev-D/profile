import React from 'react';
import Fields from './Fields';
import { lang } from './languages';

const Tab = () => {
    return(
        <>&emsp;&emsp;</>
    )
}

export default function Defenitions(props) {
    return (
        <div className="fieldsegment flex">
            <fieldset className="fieldset">
                <legend align="center"> {"<"}PERSONAL INFO{">"} </legend>
                <Fields field="Username" value="dev-D"/> <br/><br/>
                <Fields field="D.O.B" value="25/05/2002" /><br/><br/>
                <b> Education :</b> <br/> <br/> 
                <Tab/><Fields field="L.P School" value="St: Dominic Savio"/> <br/>
                <Tab/><Fields field="U.P School" value="M.K.M" /> <br/>
                <Tab/><Fields field="H.S School" value="M.K.M" /> <br/>
                <Tab/><Fields field="Degree" value="B.P.C College Piravom" /> <br/>
                <br/>
                <b>Works on</b> : 
                {
                    lang.map((value,index) => {
                        return <> <Fields key={index} icon={value.icon} value={value.name} color={value.color}/></>
                    })
                }   
            </fieldset>
        </div>
    )
}
