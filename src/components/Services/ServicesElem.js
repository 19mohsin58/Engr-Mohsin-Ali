import styled from 'styled-components'


export const ServicesContainer = styled.div`
height : 100%;
justify-content:center;
display:flex;
flex-direction:column;
align-items:center;
margin-top : 20px;
background:;
padding-top:50px;
padding-bottom:60px;




@media screen and (max-width : 768px){
    height : 100&;
    margin-top : 300px;

};


@media screen and (max-width : 480px){
    height : 100&;
    margin-top : 300px;
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
background : #fff;
display : flex;
flex-direction:column;
justify-content : flex-start;
align-Items: center;
border-radius : 10px;
max-height : 340px;
padding : 30px;
box-shadow : 0 1px 3px rgba(0,0,0,2);
transiton : all 0.6s ease-in-out;
margin:10px;

&:hover{
    transform : scale(1.02);
    transition: all 0.2 ease-in-out;
    cursor:pointer;
}
`



export const ServicesIcon = styled.img`
height : 160px;
width:160px;
margin-bottom:10px;
`


export const ServicesH1 = styled.h1`
font-size:2.5rem;
color : black;

font-family: 'Cinzel', serif;


@media screen and (max-width : 480px){
    font-size:2rem
}
`


export const ServicesH2 = styled.h2`
font-size:1rem;
margin-bottom : 10px;
font-family: 'Farro', sans-serif;
color:#01bf71;
font-weight:bold;
`

export const ServicesP = styled.p`
text-align : center;
font-size : 1rem;
font-family: 'Athiti', sans-serif;
font-weight:bold;
color:#333333;
`