import React from 'react'
import Logo from '../../assets/LOGO.png'

import { Link } from 'react-router-dom'




function NavHeader() {
    
    return(
        <div>
            <nav>
            <img src={Logo} alt="logo-kasa" />
            <ul>
                <li><Link to ="/">acceuil</Link></li>
                <li><Link to ="/apropos">a propos</Link></li>
                </ul>
                </nav>
    </div>)
}

export default NavHeader