import React from 'react';
import './Css/About.css';
import otodik from "./Pictures/unsplash_Hcfwew744z4.png";
import negyedik from "./Pictures/unsplash_eF_3z15RmWY.png";
import harmadik from "./Pictures/unsplash_U6Mr3wF8JOk.png";
import masodik from "./Pictures/unsplash_6ZZ2-qZ_HGE.png";
import elso from "./Pictures/szovjetmaci_2.png";
import hatodik from "./Pictures/szovjetmaci.png";
import aboutus from "./Pictures/Rectangle_36.png";
import {useNavigate} from "react-router-dom";

function About() {
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
                                     <button className="button" onClick={() => handleNavigation('/contact')}>CONTACT US</button>
                                    <button className="button" onClick={() => handleNavigation('/faq')}>FAQ</button>
                            </div>
                    </div>
                <div className={"Aboutus"}><h1>About us</h1></div>
                <div className={"Welcome"}><div className={"Welcomeelso"}>Welcome to Zoo-tiful Deals, where we bring the magic of nature to your special events. Founded in 2023, our mission is to provide unique and unforgettable experiences through our diverse range of animals available for rent.</div><div className={"Welcomemasodik"}><img src={masodik}/></div></div>
                <div className={"ourteam"}><div className={"ourteamelso"}><img src={harmadik}/></div><div className={"ourteammasodik"}>Our team is comprised of dedicated animal care professionals who ensure the highest standards of animal welfare. Each animal in our care is treated with respect and kindness, and their well-being is our top priority.</div></div>

                <div className={"zootiful"}><div className={"zootifulelso"}>At Zoo-tiful Deals, we believe that every event is an opportunity to educate and inspire. Our animals are not just a highlight of your event, but also ambassadors for their species. We are committed to promoting awareness and understanding of these amazing creatures.</div><div className={"zootifulmasodik"}><img src={negyedik}/></div></div>
                <div className={"weoffer"}><div className={"weofferelso"}><img src={otodik}/></div><div className={"weoffermasodik"}>We offer a seamless rental process and additional services such as event planning and animal care workshops. Whether it’s a corporate event, a birthday party, or a community gathering, we’re here to help you create an event that stands out.</div></div>

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

export default About;
