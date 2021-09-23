import {React,useState,useRef,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {FaReact,FaAudible} from 'react-icons/fa'
import {AiFillAndroid, AiOutlineArrowRight,AiOutlineHeart,AiOutlineArrowLeft} from'react-icons/ai'
import {GiPlainCircle} from 'react-icons/gi'
import {PotfolioNav,TextDiv,ParaCard,DateOwl,MainCard,Card,CardImg,MiddleOfCard,BottomOfCard} from './portfolioElemnts'
import img1 from './android/bb.jpg'
import img2 from './android/calc.jpg'



export default function AppDeve() {

    const icon = <GiPlainCircle/>

    const [graphic , setGraphic] = useState([
        {
        img : img1,
        app:'Blood Bank App',
        tech:'React-Native, Firebase Database',
        link:'https//mohsiitech.web.app',
        date:'28-02-21',
        gracircle : icon,
    },
    {
        img : img2,
        app:'Calculator App',
        tech:'React-Native',
        link:'https//mohsiitech.web.app',
        date:'12-03-21',
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




         <div style={{width:'33%',paddingBottom:'10px',borderBottom:'1px solid #cfcfcf'}}> 
           <Link to='/' style={{textDecoration:'none'}}>
            <FaReact  style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Web App</PotfolioNav>
            </Link> 
            </div>



            
            <div style={{width:'33%',paddingBottom:'10px',borderBottom:'2px solid #01bf71' }}> 
           <Link to='/app' style={{textDecoration:'none'}}>
            <AiFillAndroid style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Android App</PotfolioNav>
            </Link> 
            </div>

            <div style={{width:'33%',paddingBottom:'10px',borderBottom:'1px solid #cfcfcf'}}>  
           <Link to='/graphics' style={{textDecoration:'none'}}>
            <FaAudible style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Poster Designing</PotfolioNav>
            </Link> 
            </div>
        </div>

        <MainCard id='gra' >    
        {
            graphic.map((owl,index)=>{
                return( 
                    
                    <Card> 
                    <CardImg src={owl.img} alt='graphics'/>
                 
                 
                    <MiddleOfCard>
                        <TextDiv>{owl.app}</TextDiv>
                        <ParaCard>Technologies : {owl.tech}</ParaCard>
                        <ParaCard>Link : {owl.link}</ParaCard>
                    </MiddleOfCard>

                    <BottomOfCard>
                        <DateOwl>{owl.date}</DateOwl> 
                        <AiOutlineHeart style={{marginTop:'3px',fontSize:'20px',color:'#b8b6b6'}}/>
                    </BottomOfCard>
                    </Card>
                    
                )
             })
        }
        </MainCard>

        


        <div style={{textAlign:'center',marginTop:'10px'}}>
            <AiOutlineArrowLeft onClick={prevOwl} style={{fontSize:'40px',color:'#383838',marginRight:'40px',cursor:'pointer',}} />
            <AiOutlineArrowRight onClick={nextOwl} style={{fontSize:'40px',color:'#383838',cursor:'pointer',marginLeft:'40px',}} />
        </div>

        </center>
        </div>
    )
}
