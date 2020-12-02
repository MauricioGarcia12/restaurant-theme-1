import React from 'react'
import {
    CloseIcon,Icon,SideBarRoute,SideBtnWrap,
    SidebarContainer,SidebarLink
    ,SidebarMenu
} from './SidebarElements'
const Sidebar = ({toggle, isOpen}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon>
                <CloseIcon/>
            </Icon>
            <SidebarMenu>
                <SidebarLink to="/">Pizzas</SidebarLink>
                <SidebarLink to="/">Desserts</SidebarLink>
                <SidebarLink to="/">Full Menu</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SideBarRoute to="/">Order Now</SideBarRoute>
            </SideBtnWrap>
        </SidebarContainer>
    )
}

export default Sidebar
