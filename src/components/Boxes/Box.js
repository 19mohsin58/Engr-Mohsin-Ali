import React from 'react';
import { BiShapeCircle,BiGitRepoForked,BiLaptop} from "react-icons/bi";
import CountUp from 'react-countup';
import {ServicesContainer , ServicesWraper , ServicesCard , ServicesP } from './boxElem'

export const Box = () => {
    return (
        <ServicesContainer >
        
        <ServicesWraper>
            <ServicesCard>
                    <div style={{backgroundColor:'#ff3374',borderRadius:'70px',padding:'15px'}}>
                     <BiShapeCircle style={{fontSize:'50px', color:'#fff'}}/>
                     </div>
                <ServicesP>Web Applications</ServicesP>
                <p style={{fontFamily:'Cambria',textAlign:'center'}}>I have Developed about 15+ Web Applications with React js Technology and Still Working on Some Projects</p>
            </ServicesCard>

            <ServicesCard>
                <div style={{backgroundColor:'#469bdb',borderRadius:'70px',padding:'15px'}}>
                <BiGitRepoForked style={{fontSize:'50px' , color:'#fff',}}/>
                </div>
                
                
                <ServicesP>Android Applications</ServicesP>
                <p style={{fontFamily:'Cambria',textAlign:'center'}}>I have Developed only 1  Mobile Applications with React Native Technology Which is Blood Bank App</p>
            </ServicesCard>

            <ServicesCard>
                <div style={{backgroundColor:'#01bf71',borderRadius:'70px',padding:'15px'}}>
                <BiLaptop style={{fontSize:'50px' , color:'#fff'}}/>
                </div>
                
                <ServicesP>Graphic Designing</ServicesP>
                <p style={{fontFamily:'Cambria',textAlign:'center'}}>I have made Many Posters in Graphic Designing i am Professional Graphic Designer Since 2016 </p>
            </ServicesCard>
            </ServicesWraper>
        </ServicesContainer>
    
    )
}
