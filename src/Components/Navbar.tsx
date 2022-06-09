import React from "react"
import "../Styles/Navbar.css"

export function Navbar() {
    return (
        <header>
            <div className="logo"/>
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}