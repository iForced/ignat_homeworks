import React from 'react'
import './HW5.css'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        //TODO add animation for navbar
        <div className={"navbar"}>
            <NavLink className={"nav_link"} to={'/pre-junior'} activeClassName={"active_link"}>Pre Junior</NavLink>
            <NavLink className={"nav_link"} to={'/junior'} activeClassName={"active_link"}>Junior</NavLink>
            <NavLink className={"nav_link"} to={'/junior-plus'} activeClassName={"active_link"}>Junior Plus</NavLink>
        </div>
    )
}

export default Header
