import React from "react";
import "../Style.css"
import TestimonyA from "./testimonyA";
import TestimonyB from "./testimonyB";
import testData from "./testData";


export default function testimony(){

    const Td = testData.map(testD => 
        <TestimonyA
            key={testD.id}
            {...testD}
        />
    )

    return(
        <div className="test">
            <TestimonyB/>
            <div className="test-flex">
                {Td}
            </div>
        </div>
    )
}