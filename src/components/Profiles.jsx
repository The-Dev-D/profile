import React from 'react'
import Icons from './Icons'

export default function Profiles() {
    return (
        <div className="grid mtp" style={{display:"grid",width:"100%",alignContent:"center",justifyItems:"center"}}>
            <h3 align="center"> SOCIAL </h3>
            <div style={{width:"50%",opacity:1,justifyContent:"space-between"}} className="flex">
                <Icons title="Github" url="https://github.com/The-Dev-D" icon="fab fa-github fa-2x theme git"/>
                <Icons title="Instagram" url="https://www.instagram.com/dhaivath_lal/" icon="fab fa-instagram fa-2x theme ig" />
                <Icons title="facebook" url="https://www.facebook.com/dhaivath.lal" icon="fab fa-facebook fa-2x theme fb" />
            </div>
        </div>
    )
}
