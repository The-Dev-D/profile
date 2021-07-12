import { IconButton } from '@material-ui/core'
import React,{useState} from 'react'

export default function Navbar() {
    const [dark, setdark] = useState(false)
    let theme = document.querySelector(":root");
    const changeTheme = ()=> {
        setdark(!dark)
        if(!dark)
        {
            theme.style.setProperty("--theme","#0f111c");
            theme.style.setProperty("--color","#ffffff");
        }
        else
        {
            theme.style.setProperty("--theme","#ffffff");
            theme.style.setProperty("--color","#000000");
        }
    }
    return (
        <header className="flex vc sb">
            <div className="name theme">
                <i class="fa fa-terminal theme" aria-hidden="true"></i>
                dev:D
            </div>
            <IconButton size="small">
                <div className="icon" >
                    {dark?<i class="fas fa-sun" onClick={changeTheme} ></i>: <i class="far fa-moon theme" onClick={changeTheme}></i>}
                </div>
            </IconButton>
      </header>
    )
}
