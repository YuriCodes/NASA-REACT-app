import React from "react";
import Nasa from "../src/nasa.png"


function Header(){
    return(
        <div>
        <img src={Nasa} alt="nasa logo"className="nasa-logo"></img>
        <h1 className="Header-txt">NASA's Archive Photo Gallery</h1>
         </div>
    )
}

export default Header;