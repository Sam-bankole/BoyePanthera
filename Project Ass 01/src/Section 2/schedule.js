import React from "react";
import "../Style.css"
import ScheduleA from "./scheduleA";
import ScheduleB from "./scheduleB";
import data from "./scheduleData";


export default function schedule(){

    const Ds = data.map(schD =>
        <ScheduleB
            key= {schD.id}
            {...schD}
        />
    )

    return(
        <div className="schedule">
            <ScheduleA/>
            <div className="flex">
                {Ds}
            </div>
        </div>
    )
}