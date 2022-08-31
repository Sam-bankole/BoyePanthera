import React from "react";
import "../Style.css"

export default function schedule(props){

    return(
        <div className="schedule-T">
            <div>
                <div className="schedule-tt">
                    <img src={props.icon} alt="#" />
                    <div className="schedule-P">
                        <div className="s-p">{props.up} <span>{props.span1}</span></div>
                        <div className="s-v">{props.down} <span>{props.span2}</span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}


/* <div className="schedule-L"> We are giving a 15% discount for early birds registered on or before 31st May 2022 </div> */