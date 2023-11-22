// import { Link } from "react-router-dom"
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
margin-bottom:100px;`




function Error() {
    return ( <div>
     
        <NavHeader />
        <ErrorCard>
     <ErrorPicture src={ImgError} alt="Erreur 404" />
            <ErrorText> Oups! La page que vous demandez n'existe pas</ErrorText>
                <Link className="RedLink" to="/">Retourner sur la page d'acceuil</Link>
        </ErrorCard>
        <Footer />
            </div>
        
    )
}

export default Error