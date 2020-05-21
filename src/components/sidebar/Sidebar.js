import React from "react";
import {slide as Menu } from 'react-burger-menu'
import ApiManager from "../../modules/ApiManager"

const Sidebar= props => {
    const handleLogout = (e) => {
        e.preventDefault()
        ApiManager.logoutUser()
        sessionStorage.clear()
        
        
    }
    
        return (
            <Menu>
            <a className = "menu-item" href="/">
                Home
            </a>
            <a className = "menu-item" href="/myitinerary">
                My Itinerary
            </a>
            <a className = "menu-item" href="/register">
                Register
            </a>
            <a className = "menu-item" href="/login">
                Login
            </a>
            <a className = "menu-item" href="/" onClick={handleLogout}>
                Logout
            </a>
            </Menu>
        )
   
}

export default Sidebar;