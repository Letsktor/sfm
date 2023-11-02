import React from 'react'
import "./Css/Contact.css"

import elso from "./Pictures/szovjetmaci_2.png";
import masodik from "./Pictures/Rectangle_40.png";
import harmadik from "./Pictures/szovjetmaci.png";
import {useNavigate} from "react-router-dom";
import hatodik from "./Pictures/szovjetmaci.png";

function Contact()
{
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="container">
            <div className="top-bar">
                <img className="logo" src={hatodik} alt="Logo" />
                <div className="navigation">
                    <button className="button" onClick={() => handleNavigation('/')}>HOME</button>
                    <button className="button" onClick={() => handleNavigation('/animals')}>ANIMALS</button>
                    <button className="button" onClick={() => handleNavigation('/about')}>ABOUT</button>
                    <button className="button" onClick={() => handleNavigation('/contact')}><div className={"CurrentPage"}>CONTANT US</div></button>
                    <button className="button" onClick={() => handleNavigation('/faq')}>FAQ</button>
                </div>
            </div>
            <div className={"fo"}><h1>Contact Us</h1></div>
            <div className={"foszoveg"}>
                <div className={"szoveg1"}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Customer<br></br>
                                           Service Team</h2>
                                            <br></br>
                                        <h3>Contact Customer Support</h3>
                                            <br></br>
                                            <p>Monday-Friday</p>
                                            <p>8:00AM-4:00PM CET</p>
                                        <p>Saturday-Sunday</p>
                                       <p> 10:00AM-2:00PM CET</p>
                                        <h3>+36205446565</h3>
                                       <h3>info@zootifuldeals.com</h3>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>



                </div>
                <div className={"szoveg2"}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h2>Farm</h2>
                    <br></br>
                    <h3>Visit us at</h3>
                    <p> 4034 Debrecen, Vágóhíd
                    utca 3., Hajdú-Bihar vármegye, Hungary</p>
                    <p>Monday-Friday</p>
                    8:00AM-4:00PM CET
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>



                </div>
            </div>
    <div className="bottom-bar">
        <img className="footer-logo" src={elso} alt="Footer Logo" />
        <div>
            <div className="footer-text1">Zoo-tiful Deals LLC.</div>
            <div className="footer-text2">info@zootifuldeals.com</div>
            <div className="footer-text3">+36205446565</div>
            <div className="footer-text4">4034 Debrecen, Vágóhíd utca 3.</div>
        </div>
    </div>
</div>
);
}

export default Contact;