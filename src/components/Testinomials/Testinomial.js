import React , {useEffect, useState , useRef} from 'react'
import styled, {css} from 'styled-components/macro';
import {IoArrowForward , IoArrowBack} from 'react-icons/io5'
// import {connect} from 'react-redux'
// import {facebook_login} from '../Store/Actions/actions'
import firebase from '../Firebase/firebase';
import hasnain from './hasnain.jpg'
import rj from './rj.jpg'
import nasir from './nasir.jpg'
import {FaFacebookSquare , FaCircle} from 'react-icons/fa'
import {GiPlainCircle} from 'react-icons/gi'
import Fade from 'react-reveal/Fade';
import Loader from "react-loader-spinner";



const HeroSlide = styled.div`

width : 100%;
height : 100%;
justify-content : center;
align-items : center;
`

const HeroSlider = styled.div`

width : 80%;

display : flex ; 
align-items : center;
justify-content:center;
margin : 10px;
padding:10px;

`

// const HeroImage = styled.img`
// position : absolute;
// top : 0;
// left : 0;
// width : 100vw;
// height : 100vh;
// object-file : cover;
// `

const HeroContent = styled.div`

display : flex;
flex-direction : column;
max-width : 1600px;
width : calc(100% - 100px);
color : #000;
margin:10px;


h2{
    font-size : clamp(1rem , 8vm , 2rem);
    font-weight : 400px;
    text-transform : uppercase;
    margin-bottom : 10px;
    
}
`;
 const H1=styled.h1`
font-family: 'Cinzel', serif;
`
const H2=styled.h2`
font-family: 'Farro', sans-serif;
`
const H4=styled.h4`
font-family: 'Farro', sans-serif;
color:#01bf71;
`




function Testinomial( props) {
let  icon =  <GiPlainCircle />
const [current , setCurrent] = useState(0);
const timeout = useRef(null);
const [ currentUser  , setCurrentUser] = useState({})
const [condition , setCondition] = useState(false)
const [ testi , setTesti] = useState('')
const [profession , setProfession] = useState('')
const [slider , setSlider] = useState([

])


const length = slider.length;




const facebook_login = () =>{
    
    
var provider = new firebase.auth.FacebookAuthProvider();
firebase
.auth().signInWithPopup(provider).then((result) => {
 var credential = result.credential;
 var user = result.user;
 var accessToken = credential.accessToken;

 let appUser = {
     name : user.displayName,
     email : user.email,
     uid : user.uid,
     photto : user.photoURL
 }
setCurrentUser(appUser)
setCondition(true)
})


.catch((error) => {

 var errorCode = error.code;
 var errorMessage = error.message;
 var email = error.email;
 var credential = error.credential;
 console.log(errorMessage)
 // ...
});
    }

    useEffect(() => {
        firebase.database().ref(`testinomials/`).on('value', snapshot => {
            let responselist = Object.values(snapshot.val())
            setSlider(responselist)
              }) 
    }, [])
 


useEffect(() => {
 


    const nextSlide = ()=>{
        setCurrent(current =>(current === length-1 ? 0 : current+1))
    }
    
    timeout.current = setTimeout(nextSlide , 5000)

    return function() {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
}, [current , length ])

const nextSlide = () =>{
    setCurrent(current === length-1 ? 0 : current + 1 )
    
}

const prevSlide = () =>{
    setCurrent(current === 0 ? length-1 : current-1)
   
}




const setData =()=>{
   const data = {
       title : currentUser.name,
       uid : currentUser.uid,
       image : currentUser.photto,
       profession : profession,
       price : testi,
       alt : 'testimonial',
       circle : 'O',
       profession:'Visitor'
   }
    firebase.database().ref('/').child(`testinomials/${data.uid}`).set(data).then(()=>{
        alert('data set in database')
    })   
   setTesti('')
   setProfession('')
    setCondition(false)
   
}





return (


    
        
        <div style={{paddingTop:'20px'  , overflow:'hidden',}}>
            <center> 
               <H1 >TESTIMONIALS</H1>
               <p style={{fontFamily:'Cambria' , fontSize:'20px' , color:'#01bf71' , margin:'10px'}}>What our Client and Visitors Says?</p>
                {
                    slider.length> 0 ? null :     <div style={{marginTop:'20px',marginBottom:'20px'}}>
                                                    <Loader
                                                            type="Audio"
                                                            color="#01bf71"
                                                            height={100}
                                                            width={100}
                                                            visible={slider}
                                                        />
                                                        <p>Please Wait it's Loading</p>
                                                  </div>  
                }
      
            {
                slider.map((slide , index )=>{
                    return(
                        <HeroSlide key = {index}>
                            
                            {index===current && (
                                
                                 <HeroSlider>
                                
 
                             <HeroContent>
                            
                                 
                                 <center>
                                     
                                     <img src={slide.image} alt={slide.alt} style={{height:'100px', width:'100px' , borderRadius:'50px', border:'4px solid #01bf71' ,marginBottom:'20px',}}/>
                                     <Fade left>
                                 <H2>{slide.title}</H2>
                                 
                                 
                                 <p style={{marginBottom:'10px',alignItems:'flex-start',textAlign:'center', fontSize:'20px' , fontFamily : 'Cambria' ,lineHeight:'1.5',color:'#4a4a4a'}}>{slide.price}</p>
                                 <H4>{slide.profession}</H4>
                                 </Fade>
                                 <div style={{display:'flex', flexDirection:'row' , textDecorationStyle:'none' , justifyContent:'center',margin:'10px',}}>
                           {
                                
                                     slider.map((v,i)=>{
                                         return (
                                             <p style={{borderRadius:'40px',margin:'2px' , fontSize:current === i ?'16px':'15px', color: current === i ?'#01bf71':'#000'}} key={i}>{v.circle}</p>
                                         )
                                         
                                     })
                           }
                           
            </div>
                                 </center> 
                                 
                             </HeroContent>
                                
                             </HeroSlider>
                             
                            )}
                           
                        </HeroSlide>
                    )
                })
            }
        
            
            
            {/* <center>
            <SliderButtons>
                <PrevArrow onClick={prevSlide} />
                <NextArrow onClick={nextSlide}/>
            </SliderButtons>
            </center>
         */}


                {
                    condition ? //if
                    <div>
                    <input style={{width:'40%', height:'5px', padding:'5px', backgroundColor:'#f5f5f5'}} value={testi} type='text' placeholder='Enter Testimonial'
                     onChange={(e)=>{setTesti(e.target.value)}} />

                    
                    <button onClick={setData}>Set Data</button> 
                    </div> 
                     : //else
                   <center> 
                       <p style={{color : '#ff0a37'}}>Note : Sign in With Facebook Now and  Add Your Testimonial and Comments in Above Testimonial.</p>
                    <button onClick={facebook_login} 
                    style={{  justifyContent:'center',alignItems: 'center',padding:'15px', 
                    backgroundColor:'#3b5998', color:'#fff' , outline:'none' , borderRadius:'25px', border:'none',
                    fontWeight:'bold' , fontSize:'17px' , fontFamily:'Agency FB' , margin:'15px',cursor:'pointer'
                }}
                    ><FaFacebookSquare style={{fontSize:'16px'}}/> Sign In With Facebook</button></center>
                } 
              </center>
               
        </div>
    )
}


export default Testinomial
