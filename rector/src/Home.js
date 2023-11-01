import React from 'react';
import { useNavigate } from 'react-router-dom';
import backgimg from "./ecbfa16aab3a263c4e362bc84f7ae6aa.jpeg"
import image from "./833ec4a9cd52072458a3e4f7859f2a0e.png"
import logo from "./cf1a7da66799cf8fc110c8d9fe9dae0d.jpeg"
function Home() {
    const navigate = useNavigate();

    const aboutClick = () => {
        navigate('/about');
    };

    return (
        <div>
            <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}} className={".container"}>
                <div style={{width: 1424, height: 75, left: 0, top: 0, position: 'absolute', background: '#E1AD01'}} className={".container"} />
                <div style={{width: 211, height: 41, left: 964, top: 17, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>CONTACT US</div>
                <div style={{width: 114, height: 29, left: 229, top: 19, position: 'absolute', textAlign: 'center', color: '#8F0000', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>HOME</div>
                <div style={{width: 143, height: 29, left: 479, top: 20, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 31, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>ANIMALS</div><div style={{width: 168, height: 42, left: 720, top: 15, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><button onClick={aboutClick}>ABOUT</button></div>
                <div style={{width: 114, height: 29, left: 1252, top: 22, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>FAQ</div>
                <div style={{width: 1440, height: 453, left: 0, top: 75, position: 'absolute', background: 'white'}} />
                <img style={{width: 1424, height: 573, left: 0, top: 75, position: 'absolute', boxShadow: '8px 8px 8px ', filter: 'blur(8px)'}} src={backgimg}  alt={"lol"}/>
                <div style={{width: 1059, height: 249, left: 190, top: 220, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 64, fontFamily: 'Righteous', fontWeight: '400', wordWrap: 'break-word'}}>Do you want to hire an exotic animal for your birthday party?</div>
                <div style={{width: 293, height: 58, left: 856.27, top: 527, position: 'absolute', transform: 'rotate(179.73deg)', transformOrigin: '0 0', background: '#9A1D1D', borderRadius: 42}} />
                <div style={{width: 240, height: 41, left: 590, top: 478, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Righteous', fontWeight: '400', wordWrap: 'break-word'}}>Learn More</div>
                <div style={{width: 1424, height: 370, left: 0, top: 648, position: 'absolute', background: '#FFF8F8'}}></div>
                <div style={{width: 747.05, height: 236.06, left: 666, top: 718, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>Welcome to Zoo-tiful Deals! We provide a unique touch to your events with our diverse range of rentable animals. Ensuring high animal welfare standards, we create unforgettable, educational experiences. Make your event stand out with us.</div>
                <div style={{width: 1424, height: 105, left: 0, top: 1463, position: 'absolute', background: '#E1AD01'}}></div>
                <div style={{width: 236, height: 66, left: -48, top: 1491, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 32, fontFamily: 'Inter', fontWeight: '400', wordWrap: 'break-word'}}>logo</div>
                <div style={{width: 309, height: 72, left: 170, top: 1494, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Zoo-tiful Deals LLC.</div>
                <div style={{width: 272, height: 68, left: 740, top: 1500, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>info@zootifuldeals.com</div>
                <div style={{width: 257, height: 58, left: 492, top: 1498, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>+36205446565</div>
                <div style={{width: 375, height: 56, left: 1045, top: 1499, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>4034 Debrecen, Vágóhíd utca 3.</div>
                <img style={{width: 658, height: 370, left: 0, top: 648, position: 'relative'}} src={image}  alt={"lol"}/>
                <div style={{width: 1424, height: 445, left: 0, top: 1018, position: 'absolute', boxShadow: '0px 4px 11px black inset'}}>
                    <img id={"zold"} src={"./unsplash_3MSQtgCvyWg.png"} alt={"kep"}></img>
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