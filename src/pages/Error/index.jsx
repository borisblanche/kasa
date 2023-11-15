// import { Link } from "react-router-dom"
import NavHeader from "../../components/header"
import Footer from "../../components/footer"
import ImgError from "../../assets/erreur404.png"
import { Link } from "react-router-dom"




function Error() {
    return ( <div>
     
            <NavHeader />
     <img src={ImgError} alt="Ertreur 404" />
            <p> Oups La page que vous demandez n' esixste pas</p>
            <Link to ="/">Retourner a la page d'acceuil</Link>
            <Footer/>
            </div>
        
    )
}

export default Error