import React from 'react';
import '../resources/Css/FAQ.css'
import { useNavigate } from 'react-router-dom';
import logo from "../resources/Pictures/szovjetmaci_2.png";
import masodik from "../resources/Pictures/szovjetmaci.png";
import harmadik from "../resources/Pictures/Rectangle_41.png";


function FAQ() {
    const navigate = useNavigate();
    const aboutClick = () => {
        navigate('/about');
    };
    const contactClick=()=>{
        navigate('/contact');
    };
    const faqClick=()=>{
        navigate('/faq');
    };
    const animalClick=()=>{
        navigate('/animals');
    };
    const homelClick=()=>{
        navigate('/');
    };

    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}} className={".container"}>
            <div className={"top-bar"}>
                <img className={"logo"} src={logo}  alt={"alt"}/>
                <div className={"navigation"}>
                    <button onClick={homelClick}>HOME</button>
                    <button onClick={animalClick}>ANIMALS</button>
                    <button onClick={aboutClick}>ABOUT</button>
                    <button onClick={contactClick}>CONTACT US</button>
                    <button onClick={faqClick}><div className={"CurrentPage"}>FAQ</div></button>
                </div>

            </div>
           <div>
               <div className={"image-container"}>
                   <img style={{width: '100%', position: 'relative', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)'}} src={harmadik}  alt={"harmadik"}/>
                   <div className={"overlay-text"} >FAQ</div>
               </div>
           </div>
            <div className={"container"}>
                   <div style={{width: "auto", position: 'relative',backgroundColor:'#D9D9D9',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}} >1. What types of animals do you offer for rent? </div><div style={{color: 'black', fontSize: 30, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>We offer a diverse range of animals for rent. Our collection includes both domestic and exotic animals. Please visit our Animals Page for more information.</div></div>
                   <div style={{width: "auto", position: 'relative',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black',width:'90%', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>2. How do you ensure the welfare of the animals? </div><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word',width:'90%'}}>Our team of dedicated professionals ensures the highest standards of animal welfare. Each animal in our care is treated with respect and kindness, and their well-being is our top priority.</div></div>
                   <div style={{width: "auto", position: 'relative',background: '#D9D9D9',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>3. What is the rental process? </div><span style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>You can browse our Animals Page and select the animal you wish to rent. Once you’ve made your selection, you can contact us through our Contact Us Page to start the rental process.</span></div>
                   <div style={{width: "auto%", position: 'relative',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>4. Do you offer any additional services? </div><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>Yes, we offer additional services such as event planning and animal care workshops. Please visit our Services Page for more information.</div></div>
                   <div style={{width: "auto%", position: 'relative',background: '#D9D9D9',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>5. Can I rent an animal for a private event? </div><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>Yes, our animals are available for both public and private events. Whether it’s a corporate event, a birthday party, or a community gathering, we’re here to help you create an event that stands out.</div></div>
                   <div style={{width: "auto%", position: 'relative',paddingBottom:20,paddingTop:20,paddingLeft:20,paddingRight:0}}><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>6. How do I contact you? </div><div style={{color: 'black', fontSize: 36, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>You can reach out to us through the form on our Contact Us Page. You can also find our email, phone number, and physical address on the same page.</div></div>

           </div>
            <div className={"bottom-bar"}>
                <img className={"logo"} src={logo}  alt={"alt"}/>
                <div style={{width: '100%', height:"auto",  position: 'relative', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Zoo-tiful Deals LLC.</div>
                <div style={{width: '100%', height: "auto",  position: 'relative', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>info@zootifuldeals.com</div>
                <div style={{width: '100%', height: 'auto',  position: 'relative', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>+36205446565</div>
                <div style={{width: '100%', height: "auto",  position: 'relative', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>4034 Debrecen, Vágóhíd utca 3.</div>
            </div>
        </div>
    );
}

export default FAQ;
