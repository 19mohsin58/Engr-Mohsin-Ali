import React from 'react'
// import imgSlider from './mohsin.png'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';


import { Column2,
        ImgWrap , 
        SliderContainer , 
        InfoWraper ,
        InfoRow , 
        Column1 , 
        TextWraper , 
        TopLine , 
        Heading , 
        SubTitle , 
        BtnWrap , 
        Img ,
    NavBtn,
NavBtnLink} from './SliderElem'

const Slider = ({lightBg , id , imgStart , topLine , lightText , headline , darkText , description , buttonLabel , img , alt}) => {
    return (
        <>
        
        <SliderContainer  id={id} lightBg={lightBg}>
            <InfoWraper>
                <InfoRow imgStart={imgStart}>
                    <Column1>
                    <Bounce left cascade>
                        <TextWraper>
                            <TopLine>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <SubTitle darkText={darkText}>{description}</SubTitle>
                            <BtnWrap>
                            
                    <NavBtn>
                        <NavBtnLink to='/resume'>
                            {buttonLabel}
                        </NavBtnLink>
                    </NavBtn>
                            </BtnWrap>
                        </TextWraper>
                        </Bounce>
                    </Column1>

                    <Column2>
                    <Fade top cascade>
                    <ImgWrap>
                    <Img src={img} alt={alt} />
                    </ImgWrap>
                    </Fade>
                    </Column2>
                </InfoRow>
            </InfoWraper>
        </SliderContainer>
        
        </>
    )
}

export default Slider
