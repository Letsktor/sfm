
import logo from "../resources/Pictures/szovjetmaci_2.png";
import React, {useEffect, useState} from "react";
import {useNavigate,useLocation} from "react-router-dom";
import axios from "axios";
import "../resources/Css/Animal.css"
import MyDatePicker from "./MyDatePicker"
import MyForm from "./MyForm";
function Animal(){
    const navigate = useNavigate();
    const location = useLocation();
    const buttonId = location.state ? location.state.id : null;
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

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [animals, setAnimals] = useState([])
    useEffect( () => {
        loadAnimals()
    }, []);
    const loadAnimals = async () => {
        const result = await axios.get('http://127.0.0.1:8080/animal');
        setAnimals(result.data)
        console.log(result.data)
    }
    return(
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
                        {

                            animals.filter(animal=>animal.id===buttonId).map((animal, index)=>{
                                return(

                                <div>
                                    <div style={{height:250}}>
                                        <img style={{width: '100%', height: '100%',borderRadius: 10,objectFit:"cover"}} src={animal.picurl} alt={"gg"}/>
                                        <div style={{position:"absolute", top:'10%',left:"30%",color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontWeight: "bold",fontSize:128}}>{animal.name}</div>
                                    </div>
                                    <div style={{display:"flex",height:"10%",paddingTop:"1%"}}>
                                        <div style={{backgroundColor:"lightgray",width:"50%",height:500, borderRadius: 10,justifyContent:"Center",display:"flex"}}>
                                            <img style={{width:"100%",height:"100%",borderRadius: 10,objectFit:"contain"}} src={animal.picurl} alt={"gg"}/>
                                        </div>
                                        <div style={{width:"50%",height:"100%", borderRadius: 10}}>
                                            <div style={{paddingTop:"5%",textAlign:"center",top:'10%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontWeight: "bold",fontSize:64}}>{animal.name}</div>
                                            <div style={{padding:"10%",wordBreak:"break-word",fontSize:20}}>{animal.description}</div>
                                            <div style={{paddingLeft:"10%",paddingTop:'1%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>Rating: {animal.rating}⭐</div>
                                            <div style={{paddingLeft:"10%",paddingTop:'1%',color:"white",textShadow:"-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black",fontSize:18}}>Price: {animal.price}$/h</div>
                                        </div>
                                    </div>
                                    <div style={{backgroundColor:"darkred",color:"white",display:"grid",justifyContent:"center"}}>
                                        <div style={{fontSize:36,fontWeight:"Bold",paddingBottom:40}}>
                                            Book a party with {animal.name}:
                                        </div>
                                        <div style={{display:"flex",flexDirection:"column",paddingBottom:60,justifyContent:"center"}}>
                                            <div style={{marginBottom:"0.5em",fontWeight:"bold"}}>Pick your Date:</div>
                                            <MyDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} animalID={animal.id}/>
                                            <div style={{display:"flex",flexDirection:"column",paddingTop:20}}>
                                                <MyForm selectedDate={selectedDate} animalId={animal.id}/>
                                            </div>

                                        </div>


                                    </div>

                                </div>);})
                        }
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
export default Animal;

