import React from "react";
import {slide as Menu } from 'react-burger-menu'

const Sidebar= props => {
    
        return (
            <Menu>
            <a className = "menu-item" href="/">
                Home
            </a>
            <a className = "menu-item" href="/myitinerary">
                My Itinerary
            </a>
            <a className = "menu-item" href="/login">
                Login
            </a>
            <a className = "menu-item" href="/register">
                Register
            </a>
            </Menu>
        )
   
}

export default Sidebar;