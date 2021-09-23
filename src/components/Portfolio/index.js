import React from 'react'
import styled from 'styled-components'


function Index() {

const ServicesH1 = styled.h1`
font-size:2.5rem;
color : black;
margin-bottom : 4px;
font-family: 'Cinzel', serif;



@media screen and (max-width : 480px){
    font-size:2rem
}
`




    return (
        <div style={{paddingTop:'60px',}}>
                  
        <center>
              <ServicesH1 id='portfolio'>My Portfolio</ServicesH1>
              <p  style={{color:'#01bf71' ,  fontFamily:'Cambria',
               fontSize:'20px'}}>Projects I Have Done</p>
        </center>
           

        

        </div>
    )
}

export default Index
