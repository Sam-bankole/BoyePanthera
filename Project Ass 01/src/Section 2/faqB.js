import React from "react"
import "../Style.css"
import plus from "../IMGS/Plus.png"

export default function FAQB(props){
    return(
        <div>
            <div>
                <div className="accordion">
                    <div className="accordion-faq">
                        <div className="acc-text"> {props.quest} </div>
                        <img src={plus} alt="#" />
                    </div>
                </div>
            </div>
        </div>
    )
}