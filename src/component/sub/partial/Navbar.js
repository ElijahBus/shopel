import React from 'react';
import {Link} from 'react-router-dom';

function Navbar(props) {
    return (    
        <div className="nav-bar">
            <code className="logo">SHOPEL</code>
            <span className="space-between"></span>
            <ul className="nav-auth">                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
                <Link to="/login" className="nav-auth-login">
                    <li>LOG IN</li>  
                </Link>
                <Link to="/register" className="nav-auth-register">
                    <li>REGISTER</li>
                </Link>
            </ul>
        </div>
    )
}


export default Navbar;