
import styled from 'styled-components'


export const MainInputs=styled.div`
 width:45%;
 padding-bottom:50px;

 @media screen and (max-width : 768px){
    width:90%;
    margin:0 auto;
}
`
    
   


export const ContactMe = styled.div`
display:flex;
flex-direction:row;
flex-wrap:wrap;
justify-content:center;


@media screen and (max-width : 768px){
    display: block;
}

`
   
export const Info =styled.div`
    width:35%;

    
@media screen and (max-width : 768px){
    width:90%;
    margin:0 auto;
}
`

export const Heading = styled.div`
    margin-bottom:20px;
    text-align:center;
    align-items:center;
    justify-content:center;
`

export const H1=styled.h1`
font-family: 'Cinzel', serif;
`

export const ContactHeads = styled.p`
font-family: 'Farro', sans-serif;
font-size:20px;
font-weight:bold;
`

export const NavBtn = styled.nav`
display : flex;
align-items : center;


`;
export const NavBtnLink = styled.p`
border-radius:50px;
background:#01bf71;
white-space : nowrap;
padding : 10px 22px;
color :#010606;
font-size : 16px;
outline : none;
border : none;
cursor : pointer;
transition : all 0.2s ease-in-out;
text-decoration:none;


&:hover{
    transition : all 0.2s ease-in-out;
    background : #fff;
    color : #010606
}
`