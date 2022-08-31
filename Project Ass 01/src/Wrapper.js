import React from "react";
import Hero from "./hero"
import Section from "./Section 2/section2"
import "./Style.css"

export default function Wrapper(){
    return(
        <div className="container">
            <Hero/>
            <Section/>
        </div>
    )
}