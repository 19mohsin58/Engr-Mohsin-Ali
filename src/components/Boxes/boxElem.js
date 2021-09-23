import styled from 'styled-components'


export const ServicesContainer = styled.div`
height : 100%;
justify-content:center;
display:flex;
flex-direction:column;
align-items:center;
margin-top : 0;
// background:#f5b642;



@media screen and (max-width : 768px){
    height : 100%;
    padding-top:50px;

};


@media screen and (max-width : 480px){
    height : 100&;
   
}
`


export const ServicesWraper = styled.div`
max-width : 1000px;
margin : 0 auto;
display : grid ;
grid-template-columns : 1fr 1fr 1fr;
align-items : center;
grid-gape:16px;
padding : 0 15px;



@media screen and (max-width : 1000){
    grid-template-columns:1fr 1fr;
}

@media screen and (max-width : 768px){
    grid-template-columns:1fr ;
    padding : 0 20px;
}
`


export const  ServicesCard = styled.div`
display : flex;
flex-direction:column;
align-Items: center;
border-radius : 10px;
padding : 10px 30px;
margin:20px;

@media screen and (max-width : 1000){
    margin 10px;
}

@media screen and (max-width : 768px){
    margin:10px;
}

`



export const ServicesIcon = styled.h3`
// height : 160px;
// width:160px;
margin-bottom:10px;
`





export const ServicesP = styled.p`
text-align : center;
font-size : 20px;
margin-top:10px;
margin-bottom:10px;
font-family: 'Farro', sans-serif;
font-weight:bold;
`