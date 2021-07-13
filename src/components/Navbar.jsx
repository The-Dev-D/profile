import { IconButton } from '@material-ui/core'
import React,{useState,useEffect} from 'react'

export default function Navbar() {

    const [dark, setdark] = useState()
    
    useEffect(() => {
        const now =localStorage.getItem('theme');
        if(now!==null)
        {
            if(now==="true")
            {
                setdark(true);
            }
            else
            {
                setdark(false);
            }
        }
            
    },[])

    useEffect(() => {
    localStorage.setItem('theme',dark);
    if(dark)
    {
        document.querySelector(":root").style.setProperty("--theme","#0f111c");
        document.querySelector(":root").style.setProperty("--color","#ffffff");
    }
    else
    {
        document.querySelector(":root").style.setProperty("--theme","#ffffff");
        document.querySelector(":root").style.setProperty("--color","#000000");
    }

    }, [dark])

    return (
        <header className="flex vc sb">
            <div className="name theme">
                <i class="fa fa-terminal theme" aria-hidden="true"></i>
                dev:D
            </div>
            <IconButton size="small" onClick={()=> setdark(!dark)}>
                <div className="icon" >
                    {dark?<i class="fas fa-sun" ></i>: <i class="far fa-moon theme" ></i>}
                </div>
            </IconButton>
      </header>
    )
}
