import React, { useState } from "react";
import {FaRegUser } from "react-icons/fa";

function Card(props){

    return(
        <div className="Card-Component">
            <h1 className="Title-of-card"> {props.title}</h1>
            <img className="Card-img" src={props.img}></img>
            <h2 className="Img-description" onClick={props.onClick}>
            {props.description} </h2>
            <h3 className="Img-Date">{props.date}</h3>
            <h4 className="Img-copyright">  <FaRegUser />  {props.copyright}  </h4>

        </div>
    )
}

export default Card;