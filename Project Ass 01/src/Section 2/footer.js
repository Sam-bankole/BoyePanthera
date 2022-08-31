import React from "react";
import "../Style.css"
import WhatsA from "../IMGS/WhatsApp-Icon.png"
import Email from "../IMGS/Email-icon.png"

export default function Footer(){
    return(
        <div className="footer">
            <div className="footer-info">
                <div className="footer-name">
                    BoyePanthera 
                </div>
                <div>
                    <div className="footer-contact"><img src={WhatsA} alt="#"/> <span>0902 832 0494</span></div>
                    <div className="footer-email"><img src={Email} alt="#" /> <span>boyepanthera@gmail.com</span></div>
                </div>
            </div>
            <small>Copyright © BoyePanthera 2022. All right reserved.</small>
        </div>
    )
}