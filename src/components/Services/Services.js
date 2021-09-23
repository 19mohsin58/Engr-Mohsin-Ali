import React from 'react'
import Icon1 from './frontend.svg'
import Icon2 from './backend.svg'
import Icon3 from './android.svg'
import Icon4 from './ios.svg'
import Icon5 from './db.svg'
import Icon6 from './firebase.svg'
import Fade from 'react-reveal/Fade';

import {
    ServicesContainer,
    ServicesWraper,
    ServicesCard,
    ServicesIcon,
    ServicesH1,
    ServicesH2,
    ServicesP,
} from './ServicesElem'







export const Services = () => {
    return (
        
        <ServicesContainer id="services">
                <ServicesH1>My Services</ServicesH1>
                {/* <hr style={{width:'50px',height:"3px",backgroundColor:'#db074a',border:'none'}} /> */}
                <p style={{color:'#01bf71'  , fontFamily:'Cambria', fontSize:'20px',marginBottom:'20px'}}>Services I am Providing</p>
                
                
                <Fade left cascade>
                <ServicesWraper>
               
                    <ServicesCard>
                        
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Frontend</ServicesH2>
                        <ServicesP>I will Develop User Freindly Front End Of Your Web App With ReactJS</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>Backend </ServicesH2>
                        <ServicesP>I will Provide a Backend service With Django Python</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Android App </ServicesH2>
                        <ServicesP>I will develop a user freindly android application with React Native</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon4}/>
                        <ServicesH2>Poster Designing</ServicesH2>
                        <ServicesP>I will Design a Poster you will be satisfied with my work</ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon5}/>
                        <ServicesH2>MongoDB</ServicesH2>
                        <ServicesP>I will Provide a Mongo Database Service </ServicesP>
                    </ServicesCard>

                    <ServicesCard>
                        <ServicesIcon src={Icon6}/>
                        <ServicesH2>Firebase</ServicesH2>
                        <ServicesP>I Will also provide firebase Service Like Authentication, RealTimeDB.</ServicesP>
                    </ServicesCard>
                  
    
                </ServicesWraper>
                </Fade>
        </ServicesContainer>
    )
        
}
