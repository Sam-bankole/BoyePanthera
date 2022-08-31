import React from "react";
import "../Style.css"
import Larrow from "../IMGS/L Arrow.png"
import Rarrow from "../IMGS/R Arrow.png"

export default function testimony(){
    return(
        <div>
            <div className="test-f">
                <div>
                    <div className="test-doubt"> Still, in doubt? </div>
                    <div className="test-eng"> See what participants from the previous bootcamp saying about us.  </div>
                </div>
                <div className="test-arrow">
                    <img src={Larrow} alt="#"  className="test-LArrow"/>
                    <img src={Rarrow} alt="#" className="test-RArrow"/>
                </div>
            </div>
        </div>
    )
}