import React from "react";
import "./Style.css"

export default function Img(){
    return(
        <div className="hero">
            <div>
                <div className="hero-navbar">
                    <div className="hero-boyeP">
                        BoyePanthera
                    </div>
                    {/* <div>
                        <ul className="hero-nav">
                            <li>Home</li>
                            <li>Tracks</li>
                            <li>Schedule</li>
                            <li>FAQ</li>
                        </ul>
                    </div>  */}
                    <div className="reg">
                        Register
                    </div>
                </div>
                <div className="headline-content">
                    <div><span className="title"> Coding Bootcamp </span> <span className="sp"> 5.0 </span></div>
                    <div className="hero-heading"> Go from a total beginner to expert in 4 months </div>
                    <div className="hero-subheading"> Learn coding and become proficient with a real life project to show in your portfolio. </div>
                </div>
                <div className="hero-benefits">
                    <div className="hero-benefits-components">
                        <div className="h-b-c-title"> Life-time mentorship </div>
                        <div className="h-b-c-subH"> Get a lifetime mentorship program with the founder of this bootcamp. You can reach out for help when you are stuck. </div>
                    </div>
                    <div className="hero-benefits-components">
                        <div className="h-b-c-title"> Code Review </div>
                        <div className="h-b-c-subH"> Get the opportunity of getting your code reviewed by top American Developers and Quality Assurance Engineer </div>
                    </div>
                    <div className="hero-benefits-components">
                        <div className="h-b-c-title"> Developer Community </div>
                        <div className="h-b-c-subH"> Be part of the community of developers to collaborate, share knowledge, ideas, tips and tricks through peer learning community. </div>
                    </div>
                </div>
            </div>
        </div>
    )
}