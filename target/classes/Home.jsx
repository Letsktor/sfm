import React from 'react';
import "../resources/Css/Home.css"
import { useNavigate } from 'react-router-dom';
import image from "../resources/Pictures/833ec4a9cd52072458a3e4f7859f2a0e.png";
import logo from "../resources/Pictures/cf1a7da66799cf8fc110c8d9fe9dae0d.jpeg";
import kep from "../resources/Pictures/unsplash_3MSQtgCvyWg.png";
function Home() {
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
                        <button onClick={homelClick}><div className={"CurrentPage"}>HOME</div></button>
                        <button onClick={animalClick}>ANIMALS</button>
                        <button onClick={aboutClick}>ABOUT</button>
                        <button onClick={contactClick}>CONTACT US</button>
                        <button onClick={faqClick}>FAQ</button>
                    </div>

                </div>
                <div className={"container"}>
                    <div  className={"DoU"}>
                        <h1 style={{position:'relative',top:'20%',fontSize:60}}>Do you want to hire an exotic animal for your birthday party?</h1>
                        <div style={{width: '20%', height: '15%',  position: 'relative',top:"10%",left:"40%", transformOrigin: '0 0', background: '#9A1D1D', borderRadius: 42}} ><button onClick={animalClick} style={{width: '100%',top:'10%',  position: 'relative', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Righteous', fontWeight: '400', wordWrap: 'break-word'}}>Learn More</button></div>
                    </div>
                    <div style={{   display:"inline-block",border:"none"}}>
                        <img style={{width: '50%', left:"0%" ,position: 'relative', border:"none"}} src={image}  alt={"lol"}/>
                        <text style={{width: '50%',left:"50%",top:"35%", position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Welcome to Zoo-tiful Deals! We provide a unique touch to your events with our diverse range of rentable animals. Ensuring high animal welfare standards, we create unforgettable, educational experiences. Make your event stand out with us.</text>
                    </div>
                    <div className={"image-container"} className={"image-container"} style={{border:"none"}}>
                        <img style={{width:"100%",border:"none"}} id={"zold"} src={kep} alt={"kep"}></img>
                        <div className={"overlay-text2"} style={{position:"absolute",left:"0%",padding:0}} ><div className={"shadow"} >Zoo-tiful Deals provides a unique and memorable experience by offering a diverse range of animals for rent. Their commitment to high animal welfare standards ensures the well-being of the animals and adds an educational aspect to the event. Whether it’s a corporate event or a birthday party, Zoo-tiful Deals transforms it into an unforgettable celebration of nature’s beauty.</div></div>
                        <div className={"overlay-text"} style={{position:"absolute",top:"0%",left:"20%",textShadow:"1px 1px 1px black"}}>Why choose Zoo-tiful Deals?</div>
                    </div>



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

export default Home;