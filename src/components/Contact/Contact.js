import {React,useState} from 'react';
import { FaPhoneAlt,FaEnvelope,FaHouzz,} from "react-icons/fa";
import {ContactMe , Info , MainInputs, NavBtnLink,NavBtn,ContactHeads,H1,Heading} from './ContactElem'
import firebase from '../Firebase/firebase'
import modalImg from './modalThankyou.png'


function Contact(){

const [firstname , setFirstName] = useState('')
const [email , setEmail] = useState('')
const [sugg , setSugg] = useState('')
const [subsEmail , setSubsEmail] = useState('')
const [condition , setCondition] = useState(false)

const name = {
    width:'90%',
    border:'none',
    margin:'10px',
    outline:'none',
    backgroundColor:'#ededed',
    height:'40px',
    padding:'10px',
    borderRadius:'5px',
    fontSize:'16px'
}




const  nameTextarea ={
    width:'90%',
    border:'none',
    margin:'10px',
    outline:'none',
    backgroundColor:'#ededed',
    height:'100px',
    padding:'10px',
    borderRadius:'5px',
    fontSize:'16px'
}

const smallText = {
    display:'flex',
    flexDirection:'row',
    flexWarp:'wrap',
    margin:'10px',
    padding:'10px'
}


const icon ={
    fontSize:'20px',
    color :'#01bf71',
    marginRight:'20px',
}



const p = {
    color:'#a3a2a2',
    marginTop:'5px',
    fontFamily:'Cambria'
}


const subscribe = {
    width:'30%',
    height :'30px',
    border:'none',
    outline:'none',
    fontSize:'16px',
    marginTop:'10px',
    marginBottom:'10px',
    padding:'10px'
}

const mainwindow = {
    width:'100%',
    height:'650px',
    position:'fixed',
    top:'0',
    left:'0',
    zIndex:'1',
    backgroundColor:'rgba(0,0,0,0.8)',
}

const smallThankyouModel = {
    width:'40%',
    height:'330px',
    backgroundColor:'#ffff',
    position:'fixed',
    top:'30%',
    left:'30%',
    textAlign:'center',
    justifyContent:'center', 
    alignItems:'center',
}

const subscription = ()=>{
    firebase.database().ref('/').child('subscription').push({
        subscriptionEmail : subsEmail,
    }).then(()=>{
        setSubsEmail('')
        alert('Thankyou for Subscribing us')})
}


const sendSugg=()=>{
    firebase.database().ref('/').child('contact').push({
        ContactName:firstname,
        ContactEmail:email,
        ContactMessage:sugg
    }).then(()=>{setCondition(true)})
    setSugg('')
    setEmail('')
    setFirstName('')
}

return(
    <div id='contact' style={{paddingBottom:'50px',paddingTop:'50px'}}>
    <Heading>
        <H1>Contact Me</H1>
        <p style={{color:'#01bf71' , fontFamily:'Cambria', fontSize:'20px'}}>Get in Touch</p>
    </Heading>
   
        <ContactMe>
                    
                    <Info>

                        
                        <div style={smallText}>
                            <div  style={icon} > 
                                <FaEnvelope/>
                            </div>
                            <div>
                                <ContactHeads>Email</ContactHeads>
                                <p style={p}>mohsinjokhio320@gmail.com</p>
                            </div>

                        </div>


                        <div style={smallText}>
                            <div  style={icon} >
                                < FaPhoneAlt/>
                            </div>
                            <div>
                                <ContactHeads>Phone num</ContactHeads>
                                <p style={p}>0303-3529829</p>
                            </div>

                        </div>
                        

                        <div style={smallText}>
                            <div  style={icon} >
                                <FaHouzz/>
                            </div>
                            <div>
                                <ContactHeads>Address</ContactHeads>
                                <p style={p}>Sindh University Society Jamshoro</p>
                            </div>
                            



                        </div>
                        
                    </Info>
                    
                    <MainInputs>
                    <input value={firstname} type='text' placeholder='Name'  onChange={(e)=>{setFirstName(e.target.value)}} style={name} />
                    <input value={email} type='text' placeholder='Email'  style={name} onChange={(e)=>setEmail(e.target.value)} />
                    <textarea value={sugg} type='text' placeholder='Your Suggetion'  style={nameTextarea} onChange={(e)=>setSugg(e.target.value)}  ></textarea>
                    <p style={{fontFamily:'sans-serif',color:'#f54b42',margin:'5px'}}>You can also login with facebook to direct chat with me</p>
                    <NavBtn style={{marginTop:'10px'}}>
                        <NavBtnLink onClick={()=>{
                            if(firstname.length >= 3 && email.length > 12 && sugg.length >= 5 ){
                                sendSugg()
                            }
                            else{
                                alert('fill name email and suggetion box right')
                            }
                        }}> Send Suggetion </NavBtnLink>
                    </NavBtn>
                    </MainInputs>
                 
        </ContactMe>

        <div style={{ backgroundImage: "url(https://i1.wp.com/dl.skinpacks.com/skin_pack/jarvisc/jarvisr/3.png?ssl=1)",backgroundPosition:'center',backgroundColor:'#f5b642',paddingTop:'30px',paddingBottom:'30px',marginTop:'30px',width:'100%'}}>
            <center>
            <H1 style={{color:'#fff'}}>Subscribe Me</H1>
            <h3 style={{color:'#fff',fontFamily:'Sans-serif',marginTop:'5px',marginBottom:'10px'}}>Stay Connect with me you will be enjoying this</h3>
            <input type='email' placeholder="your email" style={subscribe} value={subsEmail} onChange={(e)=>setSubsEmail(e.target.value)}/>
            <button style={{width:'100px',height:'30px',fontSize:'16px',border:'none',outline:'none',backgroundColor:'#01bf71',cursor:'pointer'}} onClick={subscription}> Subscribe </button>
            <h4 style={{marginTop:'10px',marginBottom:'10px',color:'#fff',fontFamily:'Cambria'}}>Your Email will safe with us , we dont spam</h4>
            </center>
        </div>

        {
            condition ? 
            <div style={mainwindow}>
            <div style={smallThankyouModel}>
                <h4 style={{position:'absolute',top:'15px',right:'15px',cursor:'pointer', color:'#696969'}} onClick={()=>{setCondition(false)}}>X</h4>
                <img src={modalImg} width='150px' height='100px' style={{marginTop:'25px',marginBottom:'5px'}}/>
                <h1 style={{marginTop:'7px',marginBottom:'8px',fontFamily:'Cinzel', color:'#292929'}} >Thank you</h1>
                <p style={{lineHeight:'25px',fontFamily:'Farro', color:'#696969'}}>Your Submission has been received <br/> We Will be in Touch and Contact You soon!</p>
                <button style={{width:'70%',border:'none',outline:'none',height:'35px',padding:'5px',marginTop:'20px',cursor:'pointer',color:'#fff',fontSize:'18px',backgroundColor:'#01bf71'}} onClick={()=>{setCondition(false)}}>Back to Site!</button>
            </div>
        </div>
        :
        null
        }



    </div>
)
}


export default Contact