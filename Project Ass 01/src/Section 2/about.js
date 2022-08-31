import React from "react";
import "../Style.css"
import Facimage from "../IMGS/Facilitator-Image.png"
import Codementor from "../IMGS/Codementor.png"
import Icons from "../IMGS/Social-Icons.png"

export default function about(){
    return(
        <div className="about">
            <div className="about-title">Let’s meet the Facilitator</div>
            <div className="facillitator">
                <img src={Facimage} alt="#" />
                <div className="about-info">
                    <div>
                        <div className="about-name"> Olanrewaju Olaboye </div>
                        <div className="archive"> Full stack JavaScript Engineer, Founder @Megastack </div>
                    </div>
                    <div className="about-description">
                        Hello awesome! I am Olanrewaju a Full stack software Engineer (NodeJs, Express, React, MongoDB, MySQL and Typescript) with 5 years programming experience spanning over fintech, foodtech, edtech and legal tech. I have experience leading the team that developed legalbox.ng and also led Godark.ai team in building their cloud kitchen software.
                    </div>
                    <div className="about-l">
                        <span className="condementor"><img src={Codementor} alt="#" /></span> <span><img src={Icons} alt="#" /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}