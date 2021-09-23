import {React,useState,useRef,useEffect} from 'react'
import { Link} from 'react-router-dom'
import {FaReact,FaAudible} from 'react-icons/fa'
import {AiFillAndroid, AiOutlineArrowRight,AiOutlineHeart,AiOutlineArrowLeft} from'react-icons/ai'
import {GiPlainCircle} from 'react-icons/gi'
import {PotfolioNav,TextDiv,ParaCard,DateOwl,MainCard,Card,CardImg,MiddleOfCard,BottomOfCard} from './portfolioElemnts'
import img1 from './webPortfolio/Calculator.png';
import img2 from './webPortfolio/Quiz App.png';
import img3 from './webPortfolio/stopwatch.png';
import img4 from './webPortfolio/Todo App.png'
import img5 from './webPortfolio/sunshineschoolwebsite.png'
import img6 from './webPortfolio/saylaniwebpage.png'
import img7 from './webPortfolio/e-commerce.png'




export default function Web() {
    const icon = <GiPlainCircle/>

    const [graphic , setGraphic] = useState([
        {
        img : img1,
        app:'Calculator Web App',
        tech:'HTML5, CSS3, JavaScript',
        link:'https//mohsiitech.web.app',
        date:'28-05-20',
        gracircle : icon,
    },
    {
        img : img2,
        app:'Quiz Web App',
        tech:'HTML5, CSS3, JavaScript ES6',
        link:'https//mohsiitech.web.app',
        date:'12-06-20',
        gracircle : icon,
    },
    {
        img : img3,
        app:'Countdown and Stop Watch',
        tech:'HTML5, CSS3, JavaScript',
        link:'https//mohsiitech.web.app',
        date:'20-05-20',
        gracircle : icon,
    },
    {
        img : img4,
        app:'ToDo App',
        tech:'HTML5, CSS3, JavaScript',
        link:'https//mohsiitech.web.app',
        date:'30-05-20',
        gracircle : icon,
    },
    {
        img : img5,
        app:'School Website',
        tech:'HTML5, CSS3, Bootstrap',
        link:'https//mohsiitech.web.app',
        date:'22-04-20',
        gracircle : icon,
    },
    {
        img : img6,
        app:'Saylani Web page',
        tech:'HTML5, CSS3, Bootstrap',
        link:'https//mohsiitech.web.app',
        date:'9-04-20',
        gracircle : icon,
    },
    {
        img : img7,
        app:'E-Commerce Website Full Stack',
        tech:'HTML5, CSS3, JavaScript, PHP, MySQL',
        link:'https//mohsiitech.web.app',
        date:'10/8/21',
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


           <div style={{width:'33%',borderBottom:'2px solid #01bf71', paddingBottom:'10px'}}> 
           <Link to='/' style={{textDecoration:'none'}}>
            <FaReact style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Web App</PotfolioNav>
            </Link> 
            </div>



            
            <div style={{width:'33%',paddingBottom:'10px'}}> 
           <Link to='/app' style={{textDecoration:'none'}}>
            <AiFillAndroid style={{fontSize:'3rem', color:'#01bf71'}}/>
            <PotfolioNav>Android App</PotfolioNav>
            </Link> 
            </div>

            <div style={{width:'33%',paddingBottom:'10px' }}> 
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

    
        </div>
    )
}
