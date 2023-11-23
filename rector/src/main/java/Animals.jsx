
import React, {useEffect, useState} from 'react';
import "../resources/Css/Home.css"
import { useNavigate } from 'react-router-dom';
import logo from "../resources/Pictures/szovjetmaci_2.png";
import axios from 'axios';
import "../resources/Pictures/thimoty.png";
import fluffy from "../resources/Pictures/fluffy.png";
import narrow from "../resources/Pictures/narrow.png";
import fluf from "../resources/Pictures/fluf.png";
import marthy from "../resources/Pictures/marthy.png";
import betty from "../resources/Pictures/betty.png";
import darwin from "../resources/Pictures/darwin.png";
import logo2 from "../resources/Pictures/szovjetmaci.png";
import birdy from "../resources/Pictures/birdy.png";
import earl from "../resources/Pictures/earl.png";
import arrow from "../resources/Pictures/arrow.png";
import thimotyjr from "../resources/Pictures/thimotyjr.png";
import karl from "../resources/Pictures/karl.png";
import carrot from "../resources/Pictures/carrot.png";
import zoro from "../resources/Pictures/zoro.png";
import luffy from "../resources/Pictures/luffy.png";
import ouranimals from "../resources/Pictures/ouranimals.png";
import image from "../resources/Pictures/833ec4a9cd52072458a3e4f7859f2a0e.png";
import kep from "../resources/Pictures/unsplash_3MSQtgCvyWg.png";




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
        const [animals, setAnimals] = useState([])
        useEffect( () => {
            loadAnimals()
        }, []);
        const loadAnimals = async () => {
                const result = await axios.get('http://127.0.0.1:8080/animal');
            setAnimals(result.data)
            console.log(result.data)
        }
    return (
        <div style={{width: '100%', height: '100%', position: 'relative', background: 'white'}} className={".container"}>
                <div className={"top-bar"}>

                        <img className={"logo"} src={logo}  alt={"alt"}/>

                        <div className={"navigation"}>
                                <button onClick={homelClick}>HOME</button>
                                <button onClick={animalClick}><div className={"CurrentPage"}>ANIMALS</div></button>
                                <button onClick={aboutClick}>ABOUT</button>
                                <button onClick={contactClick}>CONTACT US</button>
                                <button onClick={faqClick}>FAQ</button>
                        </div>

                </div>
                <div className={"container"}>
                <table className="table table-bordered" style={{paddingLeft:'10%',border:"none"}}>
                    <tbody>
                    <tr ><th style={{textAlign:"left",fontSize:18,paddingLeft:0,paddingRight:0,paddingTop:30,paddingBottom:30}}>Halloween Party picks:</th></tr>
                    <tr>
                    {
                        animals.filter(animal=>animal.id<6).map((animal, index)=>(

                            <td onClick={()=>navigate('/animal',{state:{id: animal.id}})}><div style={{position:"relative", width: 185, height: 236, background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}}>
                            <img style={{width: '100%', height: '100%',borderRadius: 10,objectFit:"cover"}} src={animal.picurl} alt={"gg"}/>
                            <div style={{position:"absolute", top:'5%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontWeight: "bold",fontSize:20}}>{animal.name}</div>
                            <div style={{position:"absolute", top:'80%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.rating}⭐</div>
                            <div style={{position:"absolute", top:'90%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.price}$/h</div>
                        </div></td>))
                    }
                    </tr>
                    <tr><th style={{textAlign:"left",fontSize:20,paddingLeft:0,paddingRight:0,paddingTop:30,paddingBottom:30}}>Birthday Party picks:</th></tr>
                    <tr>

                        {
                            animals.filter(animal=>animal.id>=6 && animal.id<11).map((animal, index)=>(

                                <td onClick={()=>navigate('/animal',{state:{id: animal.id}})}><div style={{position:"relative", width: 185, height: 236, background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}}>
                                    <img style={{width: '100%', height: '100%',borderRadius: 10,objectFit:"cover"}} src={animal.picurl} alt={"gg"}/>
                                    <div style={{position:"absolute", top:'5%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontWeight: "bold",fontSize:20}}>{animal.name}</div>
                                    <div style={{position:"absolute", top:'80%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.rating}⭐</div>
                                    <div style={{position:"absolute", top:'90%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.price}$/h</div>
                                </div></td>))
                        }
                    </tr>
                    <tr><th style={{textAlign:"left",fontSize:22,paddingLeft:0,paddingRight:0,paddingTop:30,paddingBottom:30}}>Easter Party picks:</th></tr>
                    <tr>


                        {
                            animals.filter(animal=>animal.id>=11 && animal.id<16).map((animal, index)=>(

                                <td onClick={()=>navigate('/animal',{state:{id: animal.id}})}><div style={{position:"relative", width: 185, height: 236, background: 'linear-gradient(0deg, white 0%, white 100%)', borderRadius: 10}}>
                                    <img style={{width: '100%', height: '100%',borderRadius: 10,objectFit:"cover"}} src={animal.picurl} alt={"gg"}/>
                                    <div style={{position:"absolute", top:'5%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontWeight: "bold",fontSize:20}}>{animal.name}</div>
                                    <div style={{position:"absolute", top:'80%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.rating}⭐</div>
                                    <div style={{position:"absolute", top:'90%',left:'5%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>{animal.price}$/h</div>
                                </div></td>))
                        }
                    </tr>
                    </tbody>
                </table>


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

export default Animals;
