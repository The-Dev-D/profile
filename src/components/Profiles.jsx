import React from 'react'
import Icons from './Icons'

export default function Profiles() {
    return (
        <div className="fill flex vc hc sc">
            <fieldset style={{opacity:1}} className="flex vc hc">
                <legend align="center">{"<"}SOCIAL{">"}</legend>
                <Icons title="Github" url="https://github.com/The-Dev-D" icon="fab fa-github fa-2x theme git"/>
                <Icons title="Instagram" url="https://www.instagram.com/dhaivath_lal/" icon="fab fa-instagram fa-2x theme ig" />
                <Icons title="facebook" url="https://www.facebook.com/dhaivath.lal" icon="fab fa-facebook fa-2x theme fb" />
        </fieldset>
        </div>
    )
}
