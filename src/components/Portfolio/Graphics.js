import {React , useState,useEffect,useRef} from 'react'
import img1 from './Images/jashan.jpg';
import img2 from './Images/majlis.jpg';
import img3 from './Images/MD poster2.jpg';
import img4 from './Images/am.jpg'
import img5 from './Images/MD poster.jpg'
import img6 from './Images/pic.jpg'
import {AiOutlineArrowLeft , AiOutlineArrowRight,AiOutlineHeart} from 'react-icons/ai'
import Fade from 'react-reveal/Fade';
import { Link} from 'react-router-dom'
import {FaReact,FaAudible} from 'react-icons/fa'
import {AiFillAndroid} from'react-icons/ai'
import {GiPlainCircle} from 'react-icons/gi'
import {PotfolioNav,TextDiv,ParaCard,DateOwl,MainCard,Card,CardImg,MiddleOfCard,BottomOfCard} from './portfolioElemnts'










function Graphics() {

    const icon = <GiPlainCircle/>
    const [graphic , setGraphic] = useState([
        {
        img : img1,
        heading:'Relegious Poster',
        para:'Designed a Relegious Poster in Urdu Language for one of an organization for thier Relegious Gathering ',
        date:'28-03-21',
        gracircle : icon,
    },
    {
        img : img2,
        heading:'Majlis Poster',
        para:'Designed Majlis Poster in sindhi Language for the same organization because they loved my work and now they are my Regular clients. ',
        date:'26-05-21',
        gracircle : icon,
    },
    {
        img : img3,
        heading:'Majlis Poster',
        para:'Designed Majlis Poster for another client in urdu language with great experience.',
        date:'30-04-21',
        gracircle : icon,
    },
    {
        img : img4,
        heading:'Majlis Poster',
        para:'For the same organization i made Majlis Poster in sindhi Language ',
        date:'26-01-21',
        gracircle : icon,
    },
    {
        img : img5,
        heading:'Majlis Poster',
        para:'Designed Majlis Poster for another client in urdu language with great experience',
        date:'30-04-21',
        gracircle : icon,
    },
    {
        img : img6,
        heading:'Schedule Poster',
        para:'For the same organization Designed a Poster for thier scheduled program which will be going to held in the present month.',
        date:'20-04-21',
        gracircle : icon,
    },
])

    const timeout = useRef(null);
    const [current ,setCurrent] = useState(0)



  
   const nextOwl = ()=>{
       var gra = document.getElementById('gra')
       gra.scrollLeft+=340
       if(gra.scrollLeft > 1020){
        gra.scrollLeft=0
     }
   }

     
   const prevOwl = ()=>{
    var gra = document.getElementById('gra')
     gra.scrollLeft-=340
}



useEffect(() => {
    const nextGraphic = ()=>{
        setCurrent(current=>(current===graphic.lenght-1 ? 0 : current+1))
        var gra = document.getElementById('gra')
        if(gra.scrollLeft > 1020){
            gra.scrollLeft=0
         }
         else{
            gra.scrollLeft+=340
         }
    }
    
    timeout.current = setTimeout(nextGraphic , 3000)

    return function() {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
    }
}, [current , graphic.length ])

    return (
        
        <div style={{paddingTop:'50px', paddingBottom:'50px',}}>
        <center>
        <div style={{width:'90%',display:'flex',flexDirection:'row', marginBottom:'20px'}}>




           <div style={{width:'33%', paddingBottom:'10px',borderBottom:'1px solid #cfcfcf'}}> 
           <Link to='/' style={{textDecoration:'none'}}>
            <FaReact style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Web App</PotfolioNav>
            </Link> 
            </div>



            
            <div style={{width:'33%',paddingBottom:'10px',borderBottom:'1px solid #cfcfcf'}}> 
           <Link to='/app' style={{textDecoration:'none'}}>
            <AiFillAndroid style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Android App</PotfolioNav>
            </Link> 
            </div>

            <div style={{width:'33%',paddingBottom:'10px',borderBottom:'2px solid #01bf71' }}> 
           <Link to='/graphics' style={{textDecoration:'none'}}>
            <FaAudible style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Poster Designing</PotfolioNav>
            </Link> 
            </div>
        </div>
        </center>



 

        <MainCard id='gra' >    
        {
            graphic.map((owl,index)=>{
                return( 
                    <Fade right cacade>
                    <Card> 
                    <CardImg src={owl.img} alt='graphics'/>
                 
                 
                    <MiddleOfCard>
                        <TextDiv>{owl.heading}</TextDiv>
                        <ParaCard>{owl.para}</ParaCard>
                    </MiddleOfCard>

                    <BottomOfCard>
                        <DateOwl>{owl.date}</DateOwl> 
                        <AiOutlineHeart style={{marginTop:'3px',fontSize:'20px',color:'#b8b6b6'}}/>
                    </BottomOfCard>
                    </Card>
                    </Fade>
                )
             })
        }
        </MainCard>

        


        <div style={{textAlign:'center',marginTop:'10px'}}>
            <AiOutlineArrowLeft onClick={prevOwl} style={{fontSize:'40px',color:'#383838',marginRight:'40px',cursor:'pointer',}} />
            <AiOutlineArrowRight onClick={nextOwl} style={{fontSize:'40px',color:'#383838',cursor:'pointer',marginLeft:'40px',}} />
        </div>


        </div> //1st iv ends
        
    )
}

export default Graphics
