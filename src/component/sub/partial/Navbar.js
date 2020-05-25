import React from 'react'

export default function Navbar(props) {
    return (
        <div className="nav-bar">
            <code className="logo">SHOPEL</code>
            <span className="space-between"></span>
            <ul className="nav-auth">
                <li className="nav-auth-login"><a>LOG IN</a></li>
                <li className="nav-auth-register"><a>REGISTER</a></li>
            </ul>
        </div>
    )
}