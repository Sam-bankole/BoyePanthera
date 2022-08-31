import React from "react"
import "../Style.css"
import FAQA from "./faqA"
import FAQB from "./faqB"
import faqData from "./faqData";


export default function FAQ(){
    const faq = faqData.map(faqD => 
        <FAQB
            key={faqD.id}
            {...faqD}
        />  
        )
    return(
        <div className="faq">
            <FAQA/>
            {faq}
        </div>
    )
}