import React from 'react'
import Logo from '../../assets/LOGO.png'

import { Link } from 'react-router-dom'
import styled from 'styled-components'


const NavBoard = styled.nav`
display:flex;
flex-direction:inline;
justify-content:space-between;
margin-left:10%;
margin-right:10%;
margin-top:40px;
margin-bottom:40px;



`

const LogoHeader = styled.img`
display: flex;
`
const ListeHeader = styled.ul`
list-style:none;
// color:#F6F6F6;
display:flex ;

justify-content: end;
gap:50px;


 `
const ListLink = styled.li`
color:blue;
`
function NavHeader() {
    
    return(
        <NavBoard>
            
            <LogoHeader src={Logo} alt="logo-kasa" />
            <ListeHeader>
                <ListLink><Link className='RedLink' to ="/">Acceuil</Link></ListLink>
                <ListLink><Link className='RedLink' to ="/apropos">A Propos</Link></ListLink>
                </ListeHeader>
    </NavBoard>)
}

export default NavHeader