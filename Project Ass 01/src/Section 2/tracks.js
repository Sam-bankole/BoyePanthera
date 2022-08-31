import React from "react";
import "../Style.css"
import Ticks from "../IMGS/ticks.png"

export default function tracks(){
    return(
        <div className="track">
            <div>
                <div className="fes-div">
                    <div className="track-title"> One Bootcamp, 2 Tracks </div>
                    <div className="track-subheading"> The bootcamp is divided into two tracks for you to chose your fight better. You will learn the following topics. </div>
                </div> 
                <div className="end-packs">
                    <div className="pack">
                        <div className="pack-heading"> Front-End Developer Track </div>
                        <div className="pack-list-cont">
                            <ul className="track-ul">
                                <li><img src={Ticks} alt="#" /> HTML4 </li>
                                <li><img src={Ticks} alt="#" /> CSS3 </li>
                                <li><img src={Ticks} alt="#" /> JavaScript & DOM </li>
                                <li><img src={Ticks} alt="#" /> Bootstrap/Tailwind CSS </li>
                            </ul>
                            <ul className="track-ul">
                                <li><img src={Ticks} alt="#" /> ES6/ESNext </li>
                                <li><img src={Ticks} alt="#" /> React </li>
                                <li><img src={Ticks} alt="#" /> Context API </li>
                                <li><img src={Ticks} alt="#" /> Redux </li>
                            </ul>
                        </div>
                    </div>
                    <div className="pack" id="packII">
                        <div className="pack-heading"> Back-End Developer Track </div>
                        <div className="pack-list-cont">
                            <ul className="track-ul">
                                <li><img src={Ticks} alt="#" /> HTML4 </li>
                                <li><img src={Ticks} alt="#" /> CSS3 </li>
                                <li><img src={Ticks} alt="#" /> JavaScript & DOM </li>
                                <li><img src={Ticks} alt="#" /> ES6 </li>
                            </ul>
                            <ul className="track-ul">
                                <li><img src={Ticks} alt="#" /> ES6 </li>
                                <li><img src={Ticks} alt="#" /> Express JS </li>
                                <li><img src={Ticks} alt="#" /> MongoDB/Mongoose </li>
                                <li><img src={Ticks} alt="#" /> Sequelize (MySQL) </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="track-bottom">
                    <div className="track-t">Prerequisite to join the bootcamp</div>
                    <div className="track-p"> To take this class you don't need to know anything about coding. You just need to come with open mind. While we teach you all you need to know as a developer. </div> 
                </div>
            </div>
        </div>
    )
}