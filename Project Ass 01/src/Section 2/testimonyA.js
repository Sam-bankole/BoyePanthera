import React from "react";
import "../Style.css"
import Tt from "../IMGS/TestimonyImg-1.png"

export default function testimony(props){
    return(
        <div>
            <div className="testimonies">
                <div className="testimoniy">
                    <p>
                        {props.testimony}
                    </p>
                    <div className="test-l">
                        <img src={Tt} alt="#" className="testifier" /> <span className="test-name"> {props.name} </span>
                    </div>
                </div>
            </div>
        </div>
    )
}