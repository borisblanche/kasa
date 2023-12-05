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
@media (max-width:375px){
    margin-left:20px;
margin-right:20px;
margin-top:20px;

}
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

 `
const ListLink = styled.li`
color: #FF6060;
list-style:none;
text-align: right;
font-family: Montserrat;
font-size: 24px;
font-style: normal;
font-weight: 500;
line-height: 142.6%; /* 34.224px */
@media (max-width:375px){
font-size:12px;
;
}

`

const StyledLink = styled(Link)`
color: #ff6060;
text-decoration:none;
text-align: left;`
function NavHeader() {
    
    return(
        <NavBoard>
            
            <LogoHeader src={Logo} alt="logo-kasa" />
            <ListeHeader>
                <ListLink><StyledLink  to ="/">Acceuil</StyledLink></ListLink>
                <ListLink><StyledLink  to ="/apropos">A Propos</StyledLink></ListLink>
                </ListeHeader>
    </NavBoard>)
}

export default NavHeader