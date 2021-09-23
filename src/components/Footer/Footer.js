import React from 'react';
import Logo from '../Navbar/mohsin.png'
import { FaFacebook, FaInstagram, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import {FooterContainer , FooterWrapper , FooterLinksContainer, FooterLinksWraper , FooterLinkItems , FooterLinkTittle , FooterLink, SocialMedia, SocialMediaWrap , SocialIcon, SocialLogo,SocialIconLinks, WebsiteRights} from './FooterElem'

function Footer() {
    return (
       <FooterContainer>
           <FooterWrapper>
               <FooterLinksContainer>
                   <FooterLinksWraper>
                       <FooterLinkItems>
                           <FooterLinkTittle>About Me</FooterLinkTittle>
                               
                               <FooterLink href='#about'> How I Work</FooterLink>
                               <FooterLink href='#testinomials'>Testinomials</FooterLink>
                               <FooterLink href='#portfolio'>Projects</FooterLink>
                               <FooterLink href='#services'>Terms Of Service</FooterLink>
                       </FooterLinkItems>

                       <FooterLinkItems>
                           <FooterLinkTittle>Contact Me</FooterLinkTittle>
                               
                               <FooterLink href="#contact">Contact</FooterLink>
                               <FooterLink href="#contact">Support </FooterLink>
                               <FooterLink href="#contact">Give Project</FooterLink>
                               <FooterLink href="#contact">Email</FooterLink>
                       </FooterLinkItems>

                   </FooterLinksWraper>


                   <FooterLinksWraper>
                       <FooterLinkItems>
                           <FooterLinkTittle>Projects</FooterLinkTittle>
                               
                               <FooterLink href="https://github.com/19mohsin58" target="_blank">Amazone</FooterLink>
                               <FooterLink href="https://github.com/19mohsin58" target="_blank">Slack</FooterLink>
                               <FooterLink href="https://github.com/19mohsin58" target="_blank">WhatsApp</FooterLink>
                               <FooterLink href="https://github.com/19mohsin58" target="_blank">ChatApp</FooterLink>
                       </FooterLinkItems>

                       <FooterLinkItems>
                           <FooterLinkTittle>Social Media</FooterLinkTittle>
                               
                               <FooterLink href="https://www.linkedin.com/in/mohsin-alee-jokhio-650a1713b/" target="_blank">LinkedIn</FooterLink>
                               <FooterLink href="https://www.facebook.com/EngineerMohsinAlee" target="_blank">Facebook</FooterLink>
                               <FooterLink href="www.gmail.com" target="_blank" >Email</FooterLink>
                               <FooterLink href="https://www.instagram.com/engr_mohsin_jokhio/" target="_blank" >Instagram</FooterLink>
                       </FooterLinkItems>

                   </FooterLinksWraper>

               </FooterLinksContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' ><img src={Logo} alt="logo" height="80px" width="80px"/></SocialLogo>
                        <WebsiteRights>Mohsin Ali Copyrights {new Date().getFullYear()} All Rights Reserved</WebsiteRights>
                        <SocialIcon>
                            <SocialIconLinks href="https://www.facebook.com/EngineerMohsinAlee" target="_blank" aria-label="Facebook"><FaFacebook /></SocialIconLinks>
                            <SocialIconLinks href="https://www.instagram.com/engr_mohsin_jokhio/" target="_blank" aria-label="Instagram"><FaInstagram /></SocialIconLinks>
                            <SocialIconLinks href="https://www.linkedin.com/in/mohsin-alee-jokhio-650a1713b/" target="_blank" aria-label="LinkedIn"><FaLinkedinIn /></SocialIconLinks>
                            <SocialIconLinks href="https://twitter.com/mohsinjokhio320" target="_blank" aria-label="Twitter"><FaTwitter /></SocialIconLinks>
                        </SocialIcon>
                    </SocialMediaWrap>
                </SocialMedia>

           </FooterWrapper>
       </FooterContainer>
    )
}

export default Footer
