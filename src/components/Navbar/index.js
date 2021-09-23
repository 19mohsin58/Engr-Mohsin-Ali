import {React , useState ,  useEffect} from 'react';
import {FaBars,FaGithub ,} from 'react-icons/fa'
import {Nav ,NavGit, NavbarContainer , NavLogo , MobileIcon , NavMenu , NavItem , NavLinks , NavBtn , NavBtnLink} from './NavbarElements'
import mohsin from './mohsin.png';
import {animateScroll as scroll} from 'react-scroll'
import Zoom from 'react-reveal/Zoom';
import mohsinResume from './Mohsin Resume.jpg'


const Navbar = ({toggle}) => {




    const [scrollNav , setScrollNav] = useState(false)
    const [resume , setResume] = useState(false)
    
    const changeNav =()=>{
        if(window.scrollY >= 90){
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


    const cv =()=>{
        if(resume==true){
            setResume(false)
        }
        else{
            setResume(true)
        }
        
    }

  

    return (
        <>
        
        
           <Nav scrollNav={scrollNav}>
               <NavbarContainer>
           
                   <NavLogo to="/" onClick={scrollToTop}>
                     <img src={mohsin} alt ={'mohsin'}  style={{width:'100px' , height:'100px' , marginTop:'10px' , marginLeft:'-30px'}} /> Mohsin Alee
                   </NavLogo>
                   <MobileIcon onClick={toggle}>
                       <FaBars />
                   </MobileIcon>

                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >About</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="services"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Services</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="portfolio"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Portfolio</NavLinks>
                        </NavItem>

                        <NavItem>
                            <NavLinks to="contact"
                            smooth={true} 
                            duration={500}
                            spy={true}
                            exact="true"
                            offset={-80}
                            >Contact</NavLinks>
                        </NavItem>


                        <NavItem>
                            <NavGit href="https://www.github.com/19mohsin58" target="_blank">Github <FaGithub style={{margin:'4px'}} /></NavGit>
                        </NavItem>


                    </NavMenu>

                    <NavBtn>
                        <NavBtnLink onClick={cv}>
                            Resume 
                        </NavBtnLink>
                    </NavBtn>
                    
               </NavbarContainer>
            </Nav> 
           
        { resume ? 
        
        
            <div style={{width:'100%', height:'700px', backgroundColor:'rgba(0, 0, 0,0.7)',zIndex:'1', position:'fixed',top:'0%', left:'0%',}}>
                <Zoom>
             <div style={{
                backgroundColor:'#fcfcfc' , width:'70%' , height:'560px' , position:'fixed',top:'5%', left:'15%',
                zIndex:'1' , borderRadius:'10px', transition:'0.5s'
    
            }}>
                <div style={{display : 'flex' , flexDirection:'row' , 
                justifyContent:'space-between' , alignItems:'center',
                padding:'10px' , color:'#808080' , height:'80px' , borderBottom:'1px solid #cfcfcf' , 
                }}>
                <h1 style={{fontFamily:'Candara Light'}}>Engr Mohsin Alee (RESUME) </h1>
            <button onClick={cv} style={{backgroundColor:'transparent' , outline:'none', border:'none' ,
             fontSize:'18px' , fontFamily:'Candara Light' , marginRight:'20px'  , cursor:'pointer'
             }}> X </button>
                </div>

             <div style={{justifyContent:'center' ,  overflowY:'scroll' ,  height:'420px',paddingTop:'40px'}}>
              <center> <img src={mohsinResume} height='100%'  width='90%' /> </center>
             </div>
             <div style={{height:'50px',color:'#808080' , fontFamily:'Candara Light' , 
              borderTop:'1px solid #cfcfcf' , }}>
                <center><button style={{fontFamily:'Candara Light' ,  cursor:'pointer',fontSize:'20px',
                 marginTop:'10px' , width:'80px' , backgroundColor:'transparent' , outline:'none', border:'none' , fontWeight:'bold'
            }}  onClick={cv}  > Close </button></center>
             </div>
            </div>
            </Zoom>
            </div>
            
            
            : ""
        }

        </>
    )
}

export default Navbar
