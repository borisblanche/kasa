import React from "react"
// import { Link } from "react-router-dom"
import NavHeader from "../../components/header"
import Banner from "../../components/banner"
import Footer from "../../components/footer"
// import styled from "styled-components"
import Accordion from "../../components/accordion"



function Apropos(){
    return (
        <div>
            <NavHeader />
            <Banner />
            <Accordion/>
        <Footer/>
        </div>
    )
} 

export default Apropos