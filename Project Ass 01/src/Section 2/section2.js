import React from "react";
import "../Style.css"
import Tracks from "./tracks"
import Schedule from "./schedule";
import About from "./about";
import Testimony from "./testimony";
import FAQ from "./faq";
import CTA from "./cta";
import Footer from "./footer";


export default function Section(){

    

    

    

    return(
        <div className="sectionII">
            <Tracks/>
            <Schedule/>
            <About/>
            <Testimony/>
            <FAQ/>
            <CTA/>
            <Footer/>
        </div>
    )
}