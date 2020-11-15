import React from 'react'
import storeLogo from "../assets/images/storeLogo.png";

export default function Jumbotron(props) {
    return (
        <div className="jumbotron">
            <div className="jumbotron__row">
                <div className="jumbotron__row__column">
                    <div className="jumbotron__row__column__text">
                        <h1>{props.title} <span>{props.subtitle}</span></h1>
                        <p>{props.description}</p>
                        <div className="store_logo">
                            <img src={storeLogo} alt=""/>
                        </div>
                    </div>
                    
                </div>
                <div className="jumbotron__row__column bg_image"></div>
            </div>
        </div>
    )
}
