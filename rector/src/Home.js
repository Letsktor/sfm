import React from 'react';
import "./Css/Home.css"
import { useNavigate } from 'react-router-dom';
import backgimg from "./Pictures/ecbfa16aab3a263c4e362bc84f7ae6aa.jpeg";
import image from "./Pictures/833ec4a9cd52072458a3e4f7859f2a0e.png";
import logo from "./Pictures/cf1a7da66799cf8fc110c8d9fe9dae0d.jpeg";
import kep from "./Pictures/unsplash_3MSQtgCvyWg.png";
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
        <div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}} className={".container"}>
                <div style={{width: '100%', height: '20%', left: 0, top: 0, position: 'absolute', background: '#E1AD01'}} className={".container"} />
                <div  className={"Contact"}><button onClick={contactClick}>CONTACT US</button></div>
                <div className={"Otthon"}><button onClick={homelClick}><div className={"CurrentPage"}>HOME</div></button></div>
                <div  className={"Animal"}><button onClick={animalClick}>ANIMALS</button></div>
                <div  className={"About"}><button onClick={aboutClick}>ABOUT</button></div>
                <div className={"FAQ"}><button onClick={faqClick}>FAQ</button></div>
                <img style={{width: '100%', height: '150%', left: 0, top: 75, position: 'absolute', boxShadow: '8px 8px 8px ', filter: 'blur(8px)'}} src={backgimg}  alt={"lol"}/>
                <div style={{width: '90%', height: '90%', left: '5%', top: '60%', position: 'absolute', textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Righteous', fontWeight: 'bold', wordWrap: 'break-word'}}>Do you want to hire an exotic animal for your birthday party?</div>
                <div style={{width: '10%', height: '3%', left: '55%', top: '130%', position: 'absolute', transform: 'rotate(179.73deg)', transformOrigin: '0 0', background: '#9A1D1D', borderRadius: 42}} />
                <div style={{width: '10%', height: 41, left: 590, top: 478, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Righteous', fontWeight: '400', wordWrap: 'break-word'}}>Learn More</div>
                <div style={{width: '100%', height: 370, left: 0, top: 648, position: 'absolute', background: '#FFF8F8'}}></div>
                <div style={{width: '100%', height: 236.06, left: 666, top: 718, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Welcome to Zoo-tiful Deals! We provide a unique touch to your events with our diverse range of rentable animals. Ensuring high animal welfare standards, we create unforgettable, educational experiences. Make your event stand out with us.</div>
                <div style={{width: '100%', height: 105, left: 0, top: 1463, position: 'absolute', background: '#E1AD01'}}></div>
                <div style={{width: '100%', height: 66, left: -48, top: 1491, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>logo</div>
                <div style={{width: '100%', height: 72, left: 170, top: 1494, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Zoo-tiful Deals LLC.</div>
                <div style={{width: '100%', height: 68, left: 740, top: 1500, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>info@zootifuldeals.com</div>
                <div style={{width: '100%', height: 58, left: 492, top: 1498, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>+36205446565</div>
                <div style={{width: '100%', height: 56, left: 1045, top: 1499, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>4034 Debrecen, Vágóhíd utca 3.</div>
                <img style={{width: '100%', height: 370, left: 0, top: 648, position: 'relative'}} src={image}  alt={"lol"}/>
                <div style={{width: '100%', height: 445, left: 0, top: 1018, position: 'absolute', boxShadow: '0px 4px 11px black inset'}}>
                    <img id={"zold"} src={kep} alt={"kep"}></img>
                </div>
                <div style={{width: 994, height: 308, left: 185, top: 1169, position: 'absolute'}}>
                    <div style={{width: 994, height: 308, left: 0, top: 0, position: 'absolute', textAlign: 'center'}}><span style={{ color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Zoo-tiful Deals</span><span style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}> provides a unique and memorable experience by offering a diverse range of animals for rent. Their commitment to high animal welfare standards ensures the well-being of the animals and adds an educational aspect to the event. Whether it’s a corporate event or a birthday party, </span><span style={{ color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Zoo-tiful Deals<br/></span><span style={{color: 'white', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>transforms it into an unforgettable celebration of nature’s beauty.</span></div>
                </div>
                <div style={{width: 872, height: 71, left: 246, top: 1058, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 40, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Why choose Zoo-tiful Deals?</div>
                <img style={{width: 103, height: 103, left: 0, top: 1463, position: 'absolute'}} src={logo}  alt={"alt"}/>
                <img style={{width: 76, height: 76, left: 0, top: 0, position: 'absolute'}} src={logo}  alt={"alt"}/>
            </div>
        </div>
    );
}

export default Home;