import NavHeader from "../../components/header"
import Footer from "../../components/footer"
import ImgError from "../../assets/erreur404.png"
import { Link } from "react-router-dom"
import styled from "styled-components"

const ErrorCard = styled.div`
color:#ff6060;
display:flex;
flex-direction:column;
justify-content: space-around;
align-items:center;
text-align:center;
margin-bottom:100px;
`

const ErrorPicture = styled.img`
width:50%;
margin-top:50px;
margin-bottom:100px;
`

const ErrorText = styled.h2`
color:#ff6060;
margin-bottom:100px;
font-family: Montserrat;
font-size: 36px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;
@media (max-width:768px){
font-family: Montserrat;
font-size: 18px;
font-style: normal;
font-weight: 500;
line-height: 142.6%;}`

const BrError = styled.br`
display:none;
@media (max-width:768px){
    display:block;
}`
const StyledErrorLink = styled(Link)`
color: #ff6060;
`


function Error() {
    return ( <div>
     
        <NavHeader />
        <ErrorCard>
     <ErrorPicture src={ImgError} alt="Erreur 404" />
            <ErrorText> Oups! La page que <BrError></BrError>vous demandez n'existe pas</ErrorText>
                <StyledErrorLink to="/">Retourner sur la page d'acceuil</StyledErrorLink>
        </ErrorCard>
        <Footer />
            </div>
        
    )
}

export default Error