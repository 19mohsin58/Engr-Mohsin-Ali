import {React , useState ,  useEffect}  from 'react';
import styled from 'styled-components';
import {FiChevronUp} from 'react-icons/fi'
import {animateScroll as scroll} from 'react-scroll'
import Fade from 'react-reveal/Fade';
import { AiFillMessage,AiOutlineSend ,AiOutlineArrowLeft } from "react-icons/ai";
import mohsinLogo from '../Navbar/mohsin.png'
import firebase from '../Firebase/firebase'
import {FaFacebookSquare , FaCircle} from 'react-icons/fa'
import { GiConsoleController } from 'react-icons/gi';








export const NavLogo = styled.div`
color : #fff;
background:#000;
justify-self:flex-start;
font-size : 20px;
display : flex;
align-items:center;
font-weight : bold;
text-decoration : none;
transition : 0.5s;
height:100px;

`;





function ScrollTop() {
    const [scrollNav , setScrollNav] = useState(false)
    const [mIcon , setMIcon] = useState(false)
    const [mohsin , setMohsin] = useState([])
    const [currUserName , setCurrUserName] = useState('')
    const [currUserPic , setCurrUserPic] = useState('')
    const [currUserUid , setCurrUserUid] = useState('')
    const [condition , setCondition] = useState(false)
    const [message , setMessage] = useState('')
    const [chatsMessage , setChatsMessage] = useState([])
    const [allUsers , setAllUsers]  = useState()
    const [chatUser , setChatUSer] = useState({})
    const [condChatUser , setCondChatUser] =useState(true)

    var year = new Date().getUTCFullYear()
    var month = new Date().getMonth()
    var date = new Date().getDate()
    var Day = date +'/'+ month +'/' +year
    var hours = new Date().getHours()
    var minutes = new Date().getMinutes()
    var Time = hours+':'+minutes


const FirstScreen = styled.div`
position:fixed;
right:2px;
bottom:2px;
width:30%;
height:80%;
background-color:#fafafa;
border-start-end-radius:10px;
border-top-left-radius:10px;
z-index:1;

@media screen and (max-width : 720px){
    width:90%;
}
`
    
    
     
    const changeNav =()=>{
        if(window.scrollY >=90){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll' , changeNav)
     } , [])


    const  scrollToTop=()=>{
        scroll.scrollToTop();
}


const messageDiv =()=>{
    if(mIcon==true){
        setMIcon(false)
    }
    else{
        setMIcon(true)
    }
    
}


useEffect(() => {
    firebase.database().ref('/').child(`mohsin`).on('child_added' , (data)=>{
        setMohsin([data.val()])  
     })
     firebase.database().ref(`allUsers/`).on('value', snapshot => {
        let responselist = Object.values(snapshot.val())
        setAllUsers(responselist)
})
console.log(allUsers)
}, [])




const facebook_login = () =>{
    
    
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase
    .auth().signInWithPopup(provider).then((result) => {
     var credential = result.credential;
     var user = result.user;
     var accessToken = credential.accessToken;
    
     let cuser = {
         name : user.displayName,
         email : user.email,
         uid : user.uid,
         photto : user.photoURL
     }
     
    firebase.database().ref('/').child(`allUsers/${cuser.uid}`).set(cuser)
    setCondition(true)
    setCurrUserName(cuser.name)
    setCurrUserPic(cuser.photto)
    setCurrUserUid(cuser.uid)
    })
   
}



const pushMessage = ()=>{
    let mergedUID = mergeUID(chatUser.uid ,currUserUid)
    firebase.database().ref('/').child(`chats/${mergedUID}`).push({
        message:message,
        name : currUserName,
        uid : currUserUid,
        pic:currUserPic,
        day:Day,
        time:Time
    })
    
    setMessage('')
    
}


const chatFunc = (chatUser , ChatUserIndex) =>{
        setChatUSer(chatUser)
        setCondChatUser(false)
       let mergedUID = mergeUID(chatUser.uid , currUserUid)
       get_Message(mergedUID)
    
}


const mergeUID = (uid1 , uid2) =>{
    if(uid1<uid2){
        return uid1+uid2
    } else{
        return uid2 + uid1
    }

}




const get_Message = (uid) =>{
    firebase.database().ref('/').child(`chats/${uid}`).on('child_added' , (message)=>{
        chatsMessage.push(message.val())
        setChatsMessage(chatsMessage)
    })
    
    
}


const condChat=()=>{
    setCondChatUser(true)
}




    return (
        <div>
            
            {
                scrollNav ?  <Fade right cascade><button
                style={{position:'fixed' , width:'50px' ,
                height : '50px' , backgroundColor: '#01bf71' , bottom:'40px' , right : '50px',
                alignItems:'center' , color : '#000' , cursor : 'pointer'  , border : 'none' ,
                outline : 'none' , fontSize : '25px', transition:'0.5s', borderRadius:'25px' , 
                }}
                onClick={scrollToTop}><FiChevronUp /></button></Fade>  : ''
            }


            <div>
            
                <AiFillMessage onClick={messageDiv} style={{
                fontSize : '55px',position:'fixed' , bottom:'100px' , right:'50px',color : '#01bf71' , cursor : 'pointer'  ,
                }}/> 
            </div>

          
                


            {
                mIcon ?  //condition checking mIcon agar true hai to chat screen dikhayega login wali
 <FirstScreen>





                    
            

                {
                    condition ? 
                    
                       
                            <div>
                        

                                {
                                    condChatUser ? 
                                    <div>
                                    <NavLogo>
                                    <img src={mohsinLogo} alt ={'mohsin'}  style={{width:'80px' , height:'80px' , borderRadius:'50px' , marginRight:'10px'}} /> 
                                    <p>Mohsin Ali</p> 
                                    <h3 onClick={messageDiv} style={{cursor:'pointer',color:'#fff'}}>X</h3>
                                  </NavLogo> 
                                

                                <div>


                                <div style={{height:'400px',}}>
                               

                                        :

                                
                                   
                                        {
                                        currUserUid==='Jaucsw11hAdzyakmtNSjHBtHi3s2' ?
                                        <div>
                                            <center>
                                        <h2>All Users </h2>
                                           {
                                               allUsers.map((v,i)=>{
                                                return currUserUid !== v.uid && <button
                                                style={{width:'90%',height:'40px',fontFamily:'sans-serif',backgroundColor:'#f5b642',border:'none',outline:'none',fontSize:'18px',fontWeight:'bold'}}
                                                 onClick={()=>chatFunc(v,i)}> {v.name}
                                                 
                                              </button>
                                            })
                                           } 
                                          </center>  
                                        </div>
                                        :
                                         <div>
                                             { mohsin.map((v,i)=>{

                                                 return(
                                                 <div>
                                                     <img src={v.photto} style={{width:'100px',height:'100px'}} />
                                                     <h1>{v.name}</h1>
                                                 <button onClick={()=>{chatFunc(v,i)}}>Chat</button>
                                                 </div>
                                             )})
                                                 
                                             }
                                         </div>
                                        
                                    }
                                
                                

                               
                               
                              
                                </div>
                                

                                </div>
                                </div>
                 :

                                  
                                <div>
                                  <NavLogo>
                                  <AiOutlineArrowLeft style={{marginLeft:'5px',marginRight:'5px',}} onClick={condChat} /> 
                                 <img src={chatUser.photto} alt ={'mohsin'}  style={{width:'70px' , height:'70px' , borderRadius:'50px' , marginRight:'10px'}} /> 
                                 <p>{chatUser.name}</p> 
                                 <h3 onClick={messageDiv} style={{cursor:'pointer', color:'#fff',}}>X</h3>
                               </NavLogo>

                            <div style={{height:'360px' , overflowY:'scroll'}}>
                               
                                     {

                                    chatsMessage.length > 0? chatsMessage.map((m,i)=>{
                                        
                                        return(
                                <div key={i} style={{backgroundColor:currUserUid==m.uid ? '#01bf71' : '#fff',
                                            width:'80%' , height:'auto',padding:'5px', border:'1px solid #9c9c9c',
                                            margin:'5px', float:currUserUid==m.uid?'right' :'left',borderRadius:'10px',
                                            alignItems:'center'}}> 

                                    
                                    <div style={{display:'flex' , flexDirection:'row',alignItems:'center',marginTop:'5px'}}>
                                    <img src={m.pic} height="30px" width="30px" 
                                    style={{borderRadius:'30px' ,}}/>
                                    <p> {m.message}</p>
                                    </div>


                                    <p style={{float:'right' , fontSize:'10px'}}>
                                    {m.name} <br/>{m.day} {m.time}</p> 
                                        
                                </div>
                                         
                                        )
                                    })
                                    
                                    
                                    :

                             <center>  <h1> no chat</h1> </center> 
                                }
                            
                               
                                </div>
                                
                                </div>
                                
                                } 

                    <div><input  type="text" placeholder='Type Message' value={message} onChange={(e)=>{setMessage(e.target.value)}}
                    style={{width:'80%',border:'none' , height:'40px', outline:'none',fontSize:'16px',paddingLeft:'10px',
                    }} />
                    <button style={{width:'50px',fontSize:'20px',border:'none',outline:'none',
                    color:'#01bf71',cursor:'pointer'}}onClick={pushMessage}> 
                    <AiOutlineSend /> 
                    </button>
                    </div>

                            </div>
                            
                    
                    : 
                    
            <div>
                <div style={{height:'400px' , paddingTop:'50px'}}>

               
                        <div>
                            <center>
                            <img src={mohsinLogo} alt='logo' style={{height:'100px', width:'100px' , borderRadius:'50px',backgroundColor:'#000'}}/>
                            <h2>Mohsin Ali</h2>
                            <p style={{fontFamily:'Candara' , marginTop:'5px' ,  marginBottom:'5px'}}>
                            Welcome this is not a Facebook 
                            Messenger this message application Made by Me If you want to chat 
                            kindly Login with Facebook to have chat with me
                            </p>
                            

                            <div>
                            <button onClick={facebook_login}
                            style={{  justifyContent:'center',alignItems: 'center',padding:'15px', 
                            backgroundColor:'#3b5998', color:'#fff' , outline:'none' , borderRadius:'25px', border:'none',
                            fontWeight:'bold' , fontSize:'17px' , fontFamily:'Agency FB' , margin:'15px',cursor:'pointer'
                            }}>
                            <FaFacebookSquare style={{fontSize:'16px'}}/> Sign In With Facebook</button></div>



                            <a   style={{fontFamily:'Candara' , marginTop:'5px' , color:'#01bf71'}} 
                            href='https://www.privacypolicygenerator.info/live.php?token=1NkhndVmZudZBeJNVC4iM8OqWGM0wLl6'>
                            Privacy and Policy</a> 
                            <h4 onClick={messageDiv} style={{fontFamily:'Candara' , marginTop:'5px' , cursor:'pointer'}} > Not Now </h4>            
                            </center>
                            
                        </div>
                     
                </div>  
</div>           
                }
   
                   
           

                
            </FirstScreen> 
                 
                 
                 : null
            }
</div>
    )
}

export default ScrollTop
