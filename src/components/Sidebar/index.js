import React from 'react';
import {SidebarContainer , Icon , CloseIcon , SidebarWraper , SidebarMenu , SidebarLink , SideBtnWrap , SidebarRouts} from './SidebarElements'


const Sidebar = ({isOpen , toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>

        <SidebarWraper>
            <SidebarMenu>
                <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                <SidebarLink to='portfolio' onClick={toggle}>Portfolio</SidebarLink>
                <SidebarLink to='contact' onClick={toggle}>Contact</SidebarLink>
                <SidebarLink to='github' onClick={toggle}>Github</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRouts to='/resume'>
                    Resume
                </SidebarRouts>
            </SideBtnWrap>
        </SidebarWraper>

        </SidebarContainer>
    )
}

export default Sidebar
