
import React from 'react';
import "./Css/Home.css"
import { useNavigate } from 'react-router-dom';
import logo from "./Pictures/szovjetmaci_2.png";
import thimoty from "./Pictures/thimoty.png";
import fluffy from "./Pictures/fluffy.png";
import narrow from "./Pictures/narrow.png";
import fluf from "./Pictures/fluf.png";
import marthy from "./Pictures/marthy.png";
import betty from "./Pictures/betty.png";
import darwin from "./Pictures/darwin.png";
import logo2 from "./Pictures/szovjetmaci.png";
import birdy from "./Pictures/birdy.png";
import earl from "./Pictures/earl.png";
import arrow from "./Pictures/arrow.png";
import thimotyjr from "./Pictures/thimotyjr.png";
import karl from "./Pictures/karl.png";
import carrot from "./Pictures/carrot.png";
import zoro from "./Pictures/zoro.png";
import luffy from "./Pictures/luffy.png";
import ouranimals from "./Pictures/ouranimals.png";



function Animals()
{
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
        <div style={{width: '100%', height: '100%', position: 'relative', background: '#FCFCFC'}}>
            <div style={{width: 1424, height: 75, left: 0, top: 0, position: 'absolute', background: '#E1AD01'}} />
                <div  className={"Contact"}><button onClick={contactClick}>CONTACT US</button></div>
            <div style={{width: 114, height: 29, left: 229, top: 19, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>HOME</div>
                <div  className={"Animal"}><button onClick={animalClick}>ANIMALS</button></div>
            <div style={{width: 168, height: 42, left: 720, top: 15, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>ABOUT</div>
            <div style={{width: 114, height: 29, left: 1252, top: 22, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>FAQ</div>
            <div style={{width: 1424, height: 105, left: 0, top: 1463, position: 'absolute', background: '#E1AD01'}}></div>
            <img style={{width: 103, height: 103, left: 0, top: 1463, position: 'absolute'}} src={logo2} />
            <div style={{width: 303, height: 72, left: 176, top: 1494, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 32, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Zoo-tiful Deals LLC.</div>
            <div style={{width: 272, height: 68, left: 740, top: 1500, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>info@zootifuldeals.com</div>
            <div style={{width: 257, height: 58, left: 492, top: 1498, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>+36205446565</div>
            <div style={{width: 375, height: 56, left: 1045, top: 1499, position: 'absolute', textAlign: 'center', color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>4034 Debrecen, Vágóhíd utca 3.</div>
            <div style={{width: 1424, height: 331, left: 0, top: 405, position: 'absolute', background: '#8C0000'}} />
            <img style={{width: 185, height: 236, left: 611, top: 468, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={betty} />
            <div style={{width: 152, height: 27, left: 627, top: 476, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Betty<br/></div>
            <div style={{left: 669, top: 675, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 588, top: 669, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.8<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/></span></div>
            <div style={{width: 185, height: 236, left: 41, top: 468, position: 'absolute', background: 'white', borderRadius: 10}} />
            <img style={{width: 185, height: 236, left: 896, top: 468, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={marthy} />
            <div style={{width: 94, height: 26, left: 871, top: 671, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.9<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{left: 940, top: 681, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 152, height: 27, left: 908, top: 476, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Marthy</div>
            <img style={{width: 185, height: 236, left: 1181, top: 468, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%), linear-gradient(0deg, #C4C4C4 0%, #C4C4C4 100%)', borderRadius: 10}} src={darwin} />
            <div style={{left: 1234, top: 675, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 1156, top: 675, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.1<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{width: 145, height: 27, left: 1145, top: 651, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> </span><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>40$/h</span></div>
            <div style={{width: 152, height: 27, left: 1198, top: 476, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Darwin</div>
            <img style={{width: 185, height: 236, left: 326, top: 468, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={birdy} />
            <div style={{width: 145, height: 27, left: 290, top: 646, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> 8$/h</div>
            <div style={{width: 145, height: 27, left: 575, top: 644, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> 15$/h</div>
            <div style={{width: 145, height: 27, left: 855, top: 653, position: 'absolute', textAlign: 'center'}}><span style={{color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> </span><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>5$/h</span></div>
            <div style={{width: 94, height: 26, left: 306, top: 665, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.2<br/></div>
            <div style={{width: 1424, height: 331, left: 0, top: 74.50, position: 'absolute', border: '1px black solid'}}></div>
            <div style={{width: 1424, height: 331, left: 0, top: 75, position: 'absolute', boxShadow: '0px 355px 4px rgba(0, 0, 0, 0.60) inset', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}></div>
                <div style={{width: 1424, height: 993, position: 'relative'}}>
                        <img style={{width: 1424, height: 338, left: 0, top: 75, position: 'absolute'}} src={ouranimals} />
                </div>
                <div style={{width: 787, height: 155, left: 343, top: 163, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 128, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Our Animals</div>
            <div style={{width: 317, height: 30, left: -25, top: 406, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Halloween party picks:</div>
            <div style={{width: 306, height: 49, left: -25, top: 740, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Birthday party picks:</div>
            <div style={{width: 1424, height: 361, left: 0, top: 1102, position: 'absolute', background: '#D9D9D9'}} />
            <img style={{width: 185, height: 236, left: 611, top: 825, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src={fluffy} />
            <div style={{left: 653, top: 1031, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 586, top: 1028, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.2<br/></div>
            <div style={{width: 145, height: 27, left: 575, top: 1003, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> 25$/h</div>
            <div style={{width: 152, height: 27, left: 628, top: 832, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Fluffy</div>
            <img style={{width: 185, height: 236, left: 41, top: 825, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src={narrow} />
            <div style={{left: 89, top: 1029, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 19, top: 1025, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.5</div>
            <div style={{width: 145, height: 27, left: 13, top: 998, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>100$/h</div>
            <div style={{width: 152, height: 27, left: 58, top: 837, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Narrow</div>
            <img style={{width: 185, height: 236, left: 896, top: 825, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src={fluf} />
            <div style={{left: 944, top: 1029, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 875, top: 1025, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.1<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{width: 145, height: 27, left: 856, top: 1003, position: 'absolute', textAlign: 'center'}}><span style={{color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> 30</span><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>$/h</span></div>
            <div style={{width: 152, height: 27, left: 918, top: 832, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Fluf</div>
            <img style={{width: 185, height: 236, left: 1181, top: 825, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src={earl} />
            <div style={{left: 1226, top: 1029, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 1156, top: 1025, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.9<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{width: 145, height: 27, left: 1140, top: 998, position: 'absolute', textAlign: 'center'}}><span style={{color: '#FFFDFD', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}> 10</span><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>$/h</span></div>
            <div style={{width: 152, height: 27, left: 1198, top: 832, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Earl</div>
            <img style={{width: 185, height: 236, left: 326, top: 825, position: 'absolute', background: 'linear-gradient(0deg, #D9D9D9 0%, #D9D9D9 100%)', borderRadius: 10}} src={arrow} />
            <div style={{left: 368, top: 1027, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 300, top: 1025, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.1<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{width: 145, height: 27, left: 300, top: 998, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>150$/h</div>
            <div style={{width: 152, height: 27, left: 331, top: 837, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Arrow</div>
            <div style={{width: 185, height: 236, left: 600, top: 1165, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div style={{width: 185, height: 236, left: 30, top: 1165, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div style={{width: 185, height: 236, left: 885, top: 1165, position: 'absolute', background: 'white', borderRadius: 10}} />
            <div style={{width: 1424, height: 361, left: 0, top: 1100, position: 'absolute', background: '#D9D9D9'}} />
            <div style={{width: 306, height: 49, left: -30, top: 1119, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Easter party picks:</div>
            <img style={{width: 185, height: 236, left: 611, top: 1165, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={thimotyjr} />
            <div style={{left: 668, top: 1372, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 589, top: 1368, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.2<br/></div>
            <div style={{width: 145, height: 27, left: 576, top: 1345, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>11$/h</div>
            <div style={{width: 152, height: 27, left: 627, top: 1171, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Thimoty Jr.</div>
            <img style={{width: 185, height: 236, left: 41, top: 1165, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={karl} />
            <div style={{left: 89, top: 1362, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 13, top: 1359, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.5</div>
            <div style={{width: 145, height: 27, left: 8, top: 1331, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>10$/h</div>
            <div style={{width: 152, height: 27, left: 51, top: 1171, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Karl</div>
            <img style={{width: 185, height: 236, left: 896, top: 1165, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={carrot} />
            <div style={{left: 952, top: 1374, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 874, top: 1368, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.8<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/></span></div>
            <div style={{width: 145, height: 27, left: 867, top: 1339, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>10$/h</div>
            <div style={{width: 152, height: 27, left: 907, top: 1171, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Carrot</div>
            <img style={{width: 185, height: 236, left: 1181, top: 1165, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={zoro} />
            <div style={{left: 1237, top: 1368, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 1163, top: 1364, position: 'absolute', textAlign: 'center'}}><span style={{color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.9<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/><br/></span></div>
            <div style={{width: 145, height: 27, left: 1145, top: 1336, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>10$/h</div>
            <div style={{width: 152, height: 27, left: 1187, top: 1176, position: 'absolute', textAlign: 'center', color: 'white', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Zoro</div>
            <img style={{width: 185, height: 236, left: 326, top: 1165, position: 'absolute', background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}} src={luffy}/>
            <div style={{left: 373, top: 1374, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{width: 94, height: 26, left: 304, top: 1372, position: 'absolute', textAlign: 'center'}}><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>3.8<br/></span><span style={{color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}><br/></span></div>
            <div style={{width: 145, height: 27, left: 295, top: 1353, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>100$/h</div>
            <div style={{width: 152, height: 27, left: 335, top: 1176, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Luffy</div>
            <div style={{width: 185, height: 236, left: 41, top: 469, position: 'absolute', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                <div style={{width: 185, height: 236, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', display: 'inline-flex'}}>
                    <div style={{width: 555, height: 236, position: 'relative'}}>
                        <img style={{width: 185, height: 236, left: 185, top: 0, position: 'absolute', borderRadius: 10}} src={thimoty} />
                    </div>
                </div>
            </div>
            <div style={{width: 152, height: 27, left: 51, top: 480, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Thimoty</div>
            <div style={{width: 152, height: 27, left: 338, top: 471, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>Birdy<br/></div>
            <div style={{width: 145, height: 27, left: 8, top: 649, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>10$/h</div>
            <div style={{width: 94, height: 26, left: 15, top: 671, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '400', wordWrap: 'break-word'}}>4.5</div>
            <div style={{width: 94, height: 26, left: 60, top: 669, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <div style={{left: 370, top: 667, position: 'absolute', textAlign: 'center', color: 'black', fontSize: 24, fontFamily: 'Raleway', fontWeight: '700', wordWrap: 'break-word'}}>⭐</div>
            <img style={{width: 76, height: 76, left: 0, top: -2, position: 'absolute'}} src={logo} />

        </div>
    );
}

export default Animals;
