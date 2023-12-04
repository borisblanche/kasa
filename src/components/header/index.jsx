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

color:#FF6060;
`

const LogoHeader = styled.img`
display: flex;
@media (max-width:375px){
    width: 145px;
height: 46px;
}
`
const ListeHeader = styled.ul`
list-style:none;
color:#FF6060;
display:flex ;
justify-content: end;
gap:50px;
@media (max-width:375px){
    gap:10px;
 `
const ListLink = styled.li`
color: #FF6060;
text-align: right;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 142.6%; /* 34.224px */
text-decoration-line: underline;
@media (max-width:375px){
font-size:11px;
}

`
function NavHeader() {
    
    return(
        <NavBoard>
            
            <LogoHeader src={Logo} alt="logo-kasa" />
            <ListeHeader>
                <ListLink><Link  to ="/">Acceuil</Link></ListLink>
                <ListLink><Link  to ="/apropos">A Propos</Link></ListLink>
                </ListeHeader>
    </NavBoard>)
}

export default NavHeader